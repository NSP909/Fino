from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()
import os
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from typing import Dict, Tuple, List
import requests
import psycopg2.pool as pool
import json



os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")


client = OpenAI()


messages=[{
                'role': 'system',
                'content': f""""You are a sql database manager and your job is to go through conversation logs, extract the information 
                required and retrurn the specified object so that it can be inserted into the database.

                Each object in the log is one of two types:
                1 conversation.item.input_audio_transcription.completed- words spoken by the user
                2. response.audio_transcript.done - words spoken by the agent

                If you feel loke there isn't enough information for all fields of the rowEntry object then you can just return null equivalent for those feilds

                Some fields won't be explicitly stated so you need to derive reuslts for them

                This is an example containing only field values:
                672f005b9683f20dd518b35a","Evelyn","Waters","1134","Main Street","Harrisburg","PA","17103","246910.1","755","MSFT,GOOGL,AMZN,TSLA,BABA,FB","246910.1","AAPL,GOOG,AMZN,TSLA,NFLX","The AI agent was able to provide me with a clear understanding of the financial concepts. It was a pleasure discussing financial matters with it.","I am very satisfied with my experience using the AI agent. It was knowledgeable, efficient, and easy to understand.","4"

                """
            }]

class rowEntry(BaseModel):
    first_name: str
    last_name: str
    street_number:str
    street_name:str
    city:str
    state:str
    zip:str
    income: float
    credit_score: float
    stocks_owned: List[str]
    annual_income: float
    recent_purchases: List[str]
    extra_comments: str
    feedback: str
    experience: int 
    

def save_number(number, filename="idnum.txt"):
    with open(filename, 'w') as file:
        file.write(str(number))

def load_number(filename="idnum.txt"):
    try:
        with open(filename, 'r') as file:
            return int(file.read())
    except FileNotFoundError:
        print("File not found!")
        return None
    except ValueError:
        print("File contains invalid integer!")
        return None


def extract():
    try:
        with open('output.txt', 'r') as file:
            log = file.read()
        formatted_user_query = f"""
            This is the conversation log:\n
            {log}
        """
        messages.append(
                {
                    'role': 'user',
                    'content':formatted_user_query
                })
        response = client.beta.chat.completions.parse(
            model="gpt-4o",
            messages=messages,
            response_format=rowEntry
        )
        customer = response.choices[0].message.parsed
        customer=customer.model_dump()
        print(str(customer))
        try:
            connection_string = os.getenv('DATABASE_URL')
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
            id= load_number()+1
            save_number(id)
            data = {
                    'id': str(id),
                    'first_name': customer['first_name'],
                    'last_name': customer['last_name'],
                    'street_number': customer['street_number'],
                    'street_name': customer['street_name'],
                    'city': customer['city'],
                    'state': customer['state'],
                    'zip': customer['zip'],
                    'income': customer['income'],
                    'credit': customer['credit_score'],
                    'stocks_owned': json.dumps(customer['stocks_owned']),
                    'annual_income': customer['annual_income'],
                    'recent_purchases': json.dumps(customer['recent_purchases']),
                    'extra_comments': customer['extra_comments'],
                    'feedback': customer['feedback'],
                    'experience': customer['experience']
            }
            cur.execute('''
                    INSERT INTO customer_data (id, first_name, last_name, street_number, street_name, city, state, zip, income, credit, stocks, purchases, comments, feedback, experience) 
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                ''', (
                    data['id'], data['first_name'], data['last_name'], data['street_number'], data['street_name'], data['city'], data['state'], data['zip'], data['income'], data['credit'], data['stocks_owned'], data['recent_purchases'], data['extra_comments'], data['feedback'], data['experience']
            ))

            conn.commit()
            return True

        except Exception as e:
            conn.rollback()  # Rollback in case of error
            raise e
        finally:
            cur.close()
            connection_pool.putconn(conn)
            connection_pool.closeall()
    except Exception as e:
        print(f"Error: {str(e)}")
        return False
