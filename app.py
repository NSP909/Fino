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
open_ai_key = os.environ.get("OPEN_AI_KEY")
os.environ["OPENAI_API_KEY"] = open_ai_key
SCHEMA = """
Table: customer_data
Columns and Constraints:
1. first_name (str):
   - Customer's first name
   - Cannot be NULL
   - Example: 'John'

2. last_name (str):
   - Customer's last name
   - Cannot be NULL
   - Example: 'Smith'

3. street_number (str):
   - Alphanumeric street number
   - Example: '123A'

4. street_name (str):
   - Full street name including type
   - Example: 'Maple Avenue'

5. city (str):
   - City name with exact official spelling
   - Case-insensitive comparisons should use UPPER()
   - Example: 'San Francisco'

6. state (str):
   - Two-letter state code
   - Must be uppercase
   - Example: 'CA' for California, 'NY' for New York

7. zip (str):
   - 5-digit ZIP code
   - Must match pattern: '\d{5}'
   - Example: '94105'

8. credit (float):
   - Credit score
   - Range: 300.0 to 850.0
   - Example: 725.5

9. stocks (jsonb):
   - Array of stock symbols
   - Example: ['AAPL', 'GOOGL', 'MSFT']

10. income (float):
    - Annual income in USD
    - Must be positive
    - Example: 75000.00

11. purchases (jsonb):
    - Array of recent purchase descriptions
    - Example: ['Electronics', 'Groceries']

12. comments (str):
    - Customer comments
    - Optional field
    - Example: 'Excellent service'

13. feedback (str):
    - Customer feedback
    - Optional field
    - Example: 'Very satisfied'

14. experience (int):
    - Customer satisfaction rating
    - Range: 0 to 5
    - Example: 4

Common Query Patterns:
1. Customer Search:
   SELECT * FROM customer_data WHERE UPPER(city) = UPPER(:city) AND state = :state;

2. Income Analysis:
   SELECT AVG(income) FROM customer_data WHERE credit >= :min_credit;

3. Stock Holdings:
   SELECT stocks FROM customer_data WHERE income > :min_income;

4. Experience Rating:
   SELECT COUNT(*) FROM customer_data WHERE experience >= :min_rating;
"""

# Improved system prompt with more specific instructions and examples
system_role = """You are a precise SQL query generator specialized in customer data analysis. Always follow these strict rules:

1. SCHEMA COMPLIANCE:
   - Use only fields defined in the schema
   - Respect data types and constraints
   - Table name is always 'customer_data'

2. SQL BEST PRACTICES:
   - Use UPPER() for case-insensitive string comparisons
   - Include appropriate WHERE clauses for filtering
   - Use proper JOIN syntax when needed
   - Add appropriate indexes for optimization
   - Use parameterized queries when possible

3. ERROR PREVENTION:
   - Always check for NULL values where appropriate
   - Use COALESCE() for NULL handling
   - Validate numerical ranges
   - Properly escape string literals

4. QUERY OPTIMIZATION:
   - Avoid SELECT * unless specifically requested
   - Use appropriate indexes
   - Consider query performance
   - Use appropriate aggregate functions

5. COMMON TRANSFORMATIONS:
   - State codes: Convert full state names to two-letter codes
   - Cities: Use UPPER() for comparison
   - Zip codes: Ensure 5-digit format
   - JSON arrays: Use proper JSONB operators

Example Queries:
1. Find high-value customers in California:
   SELECT first_name, last_name, income 
   FROM customer_data 
   WHERE state = 'CA' AND income > 100000.00 
   ORDER BY income DESC;

2. Analyze customer satisfaction by state:
   SELECT state, AVG(experience) as avg_satisfaction 
   FROM customer_data 
   GROUP BY state 
   HAVING COUNT(*) > 5;

3. Find customers with specific stock holdings:
   SELECT first_name, last_name 
   FROM customer_data 
   WHERE stocks ? 'AAPL' AND credit >= 700.0;

Return only the SQL query without any explanation or additional text.
"""

query_checker = """You are query statement checker that checks if a statement can be converted to SQL, 
basically you will get a text and you have to give a true or false answer if it is asking for some sort of data from the database schema {database_schema}. 
Eg- hello,hi,bye is not an sql query 
when there are words like select, remove, delete, add insert and so on then it is valid unless there are fields outside of database scheme
also understand the fields from the database schema given {database_schema}
"""

def checker(input_text):
    client = instructor.from_litellm(completion, mode=instructor.Mode.MD_JSON)
    response = client.chat.completions.create(
        model="gpt-4o",
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
    text: Annotated[bool,llm_validator("Analyze if the query can be a SQL query and give true or false", 
                                         client=client)]
class SqlMessage(BaseModel):
    sql_query: Annotated[str,llm_validator("Do not return anything but the SQL query related to the query and database given", 
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
                   income, credit, stocks::text, income, 
                   purchases::text, comments, feedback, experience
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
                if column in ['stocks', 'purchases']:
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
            model="gpt-4o",
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
