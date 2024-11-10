# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
import psycopg2.pool as pool
import os
from dotenv import load_dotenv
import json
import requests
import os
import instructor
from groq import Groq
from pydantic import BaseModel
import google.generativeai as genai
from pydantic import BaseModel
from dotenv import load_dotenv
from instructor import llm_validator
from typing import Annotated
from pydantic import AfterValidator
from litellm import completion
import psycopg2.pool as pool
import json
app = Flask(__name__)
CORS(app, origins="*")


# Load environment variables
load_dotenv()
SCHEMA = """
Table: customer_data
Columns:
- first_name (str): Customer's first name
- last_name (str): Customer's last name
- street_number (str): Can have both numbers and letters
- street_name (str): Street Name
- city (str): City name, exactly as officially spelled
- state (str): as a two letter abbreviation
- zip (str): as a 5 digit number
- credit (float): as a float/integer to represent credit score
- stocks (jsonb): JSONb array of stocks owned as strings 
- income (float): as a float
- purchases (jsonb): JSONb array of purchases as strings
- comments (str): a string
- feedback (str): a string
- experience (int): number between 0 and 5 
"""
system_role = f"""You are a precise SQL query generator. Follow these rules strictly:

1. ALWAYS use the exact table name: customer_data
2. USE PROPER SQL SYNTAX:
   - Use proper capitalization for SQL keywords (SELECT, FROM, WHERE, etc.)
   - End queries with a semicolon
   - Use proper quotes for string comparisons
3. VALIDATION RULES:
   - For city names: Use exact spelling and UPPER() function for case-insensitive comparison
   - For states: Always use upper case two-letter codes and understand that words like 'New York' should be treated as 'NY' and Cali as CA and so on
   - For numerical comparisons: Use appropriate operators (=, >, <, >=, <=)
4. OPTIMIZATION:
   - Use appropriate aggregate functions (AVG, COUNT, SUM, etc.)
   - Keep the query as simple as possible

Database Schema:
{SCHEMA}

Return ONLY the SQL query, no explanations or additional text.
here are a few examples of valid SQL queries: List the stocks owned by people in Cal: SELECT stocks FROM customer_data WHERE state = 'CA'
"""

query_checker = """You are a SQL statement checker, 
basically you will get a text and you have to give a true or false answer if it is asking for some sort of data from the database schema {database_schema}. 
This data can be converted to SQL statment.
If it can be converted, return the SQL query, if not return 'Invalid Query'. Eg- hello,hi,bye is not an sql query 
when it asks you to give something its select, when words like remove then delete, when words like add then insert and so on
also understand the fields from the database schema given {database_schema}
"""

def checker(input_text):
    client = instructor.from_litellm(completion, mode=instructor.Mode.MD_JSON)
    response = client.chat.completions.create(
        model="groq/llama-3.1-70b-versatile",
        max_tokens=1024,
        messages=[
            {"role": "system", "content": query_checker},
            {"role": "user", "content": input_text}
        ],
        response_model=SqlChecker,
    )
    print(response.text)
    return 1 if response.text else 0
    
client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)



class SqlChecker(BaseModel):
    text: bool
class SqlMessage(BaseModel):
    sql_query: Annotated[str,llm_validator("Do not return anything but the SQL query related to the database given", 
                                         client=client)]

def get_db_connection():
    connection_string = os.getenv('DATABASE_URL')
    return psycopg2.connect(connection_string)

@app.route('/')
def home():
    return jsonify({
        "status": "running",
        "endpoints": [
            "/api/customer-data"
        ]
    })

@app.route('/api/customer-data', methods=['GET'])
def get_customer_data():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        
        # Fetch all customer data
        cur.execute("""
            SELECT id, first_name, last_name, city, state, 
                   income, credit_score, stocks_owned::text, annual_income, 
                   recent_purchases::text, extra_comments, feedback, experience
            FROM customer_data;
        """)
        
        # Fetch column names
        columns = [desc[0] for desc in cur.description]
        
        # Fetch all rows
        rows = cur.fetchall()
        
        # Convert to list of dictionaries with proper JSON parsing
        data = []
        for row in rows:
            item = {}
            for i, column in enumerate(columns):
                if column in ['stocks_owned', 'recent_purchases']:
                    try:
                        # Handle the case where the value might already be a string
                        if isinstance(row[i], str):
                            item[column] = json.loads(row[i])
                        else:
                            item[column] = row[i]
                    except (json.JSONDecodeError, TypeError):
                        item[column] = []  # Fallback to empty list if parsing fails
                else:
                    item[column] = row[i]
            data.append(item)
            
        cur.close()
        conn.close()
        
        return jsonify(data)
    
    except Exception as e:
        print(f"Error in get_customer_data: {str(e)}")  # Debug logging
        return jsonify({'error': str(e)}), 500

@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def server_error(e):
    return jsonify({'error': 'Internal server error'}), 500

@app.route('/chatbot', methods=['GET','POST'])
def customer_query():
    data = request.get_json()
    print(data)
    query_text = data.get('question')  # Match the frontend key name
    connection_string = os.getenv('DATABASE_URL')
    connection_pool = pool.SimpleConnectionPool(
    1,  # Minimum number of connections in the pool
    10,  # Maximum number of connections in the pool
    connection_string
    )
    conn = connection_pool.getconn()
    cur = conn.cursor()
    client = instructor.from_litellm(completion, mode =instructor.Mode.MD_JSON)
    if checker(query_text)==1:
        response = client.chat.completions.create(
            model="groq/llama3-8b-8192",
            max_tokens=1024,
            messages=[
                    {"role": "system", "content": system_role},
                    {"role": "user", "content": query_text}
                ],
            response_model=SqlMessage,
        )
        print(response.sql_query)
        temp = response.sql_query
        if("DELETE" in temp):
            cur.execute(response.sql_query)
            print("deleted")
            return jsonify({'message': 'Data deleted successfully'})
            
        elif ("INSERT" in temp):
            cur.execute(response.sql_query)
            print("inserted")
            return jsonify({'message': 'Data inserted successfully'})
        elif ("UPDATE" in temp):
            cur.execute(response.sql_query)
            print("updated")
            return jsonify({'message': 'Data updated successfully'})
        elif ("SELECT" in temp):
            cur.execute(response.sql_query)
            print("selected")
            return jsonify(cur.fetchall())
        conn.commit()
    else:
        print("not a valid query")
        return jsonify({'error': 'Enter a proper query'})

if __name__ == "__main__":
    app.run(port=8000, debug=True)