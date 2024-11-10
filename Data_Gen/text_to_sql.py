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
- stocks (jsonb): JSON array of stocks owned as strings 
- income (float): as a float
- purchases (jsonb): JSON array of purchases as strings
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
   - For states: Always use upper case two-letter codes
   - For numerical comparisons: Use appropriate operators (=, >, <, >=, <=)
4. OPTIMIZATION:
   - Use appropriate aggregate functions (AVG, COUNT, SUM, etc.)
   - Keep the query as simple as possible

Database Schema:
{SCHEMA}

Return ONLY the SQL query, no explanations or additional text.
"""

load_dotenv()
connection_string = os.getenv('DATABASE_URL')
client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)
# system_role = """you are a text to SQL converter that will take in a text
#         query and create a SQL query out of the same. 
#         The name of the table you will always refer to as will be 'CUSTOMERS'. Do not name the table anything else but 
#        'CUSTOMERS' and the query should be an SQL query. The following are the columns in your database:
#         - first_name (str): Customer's first name
#         - last_name (str): Customer's last name
#         - street_number (str): Can have both numbers and letters
#         - street_name (str): Street Name
#         - city (str): City name, exactly as officially spelled
#         - state (str): as a two letter abbreviation
#         - zip (str): as a 5 digit number
#         - credit (float): as a float/integer to show the
#         - stocks (jsonb): JSON array of stocks owned as strings 
#         - income (float): as a float
#         - recent_purchases (jsonb): JSON array of purchases as strings
#         - extra_comments (str): a string
#         - feedback (str): a string
#         - experience (int): number between 0 and 5 
# example: if I ask customers who live in New York City, you will return the following query:
#         SELECT * FROM CUSTOMERS WHERE city = 'New York City' (not New York)
#         """
prompt = "Find the average credit score of customers who live in a state with a name shorter than 5 characters."
class SqlMessage(BaseModel):
    sql_query: Annotated[str, llm_validator("Do not return anything but the SQL query related to the database given", 
                                         client=client)]
client = instructor.from_litellm(completion, mode =instructor.Mode.MD_JSON)
response = client.chat.completions.create(
        model="groq/llama3-8b-8192",
        max_tokens=1024,
        messages=[
                {"role": "system", "content": system_role},
                {"role": "user", "content": prompt}
            ],
        response_model=SqlMessage,
    )
print(response.sql_query)
print("**********************")


#create connection pool and establish connection


connection_pool = pool.SimpleConnectionPool(
    1,  # Minimum number of connections in the pool
    10,  # Maximum number of connections in the pool
    connection_string
)
if connection_pool:
    print("Connection pool created successfully")
else:
    print("connection pool missing")
conn = connection_pool.getconn()
cur = conn.cursor()
cur.execute(response.sql_query)
rows = cur.fetchall()

# Print the results
for row in rows:
    print(row)

# Close the cursor
cur.close()
connection_pool.putconn(conn)# returns the connection 
connection_pool.closeall()