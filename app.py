# app.py
from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2
import os
from dotenv import load_dotenv
import json

app = Flask(__name__)
CORS(app)

# Load environment variables
load_dotenv()

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

if __name__ == '__main__':
    app.run(debug=True)