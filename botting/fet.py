import psycopg2
from psycopg2 import sql

def fetch_all_neon(connection_string, table_name):
    try:
        # Connect to Neon database using connection string
        conn = psycopg2.connect(connection_string)
        cursor = conn.cursor()
        
        # Execute the query using SQL composition to safely handle table names
        query = sql.SQL("SELECT * FROM {}").format(sql.Identifier(table_name))
        cursor.execute(query)
        
        # Get column names
        columns = [desc[0] for desc in cursor.description]
        
        # Fetch all records
        records = cursor.fetchall()
        
        # Calculate column widths for pretty printing
        widths = []
        for i in range(len(columns)):
            column_data = [str(row[i]) for row in records]
            widths.append(max(len(str(columns[i])), max(len(x) for x in column_data)))
        
        # Print header
        header = " | ".join(f"{column:<{width}}" for column, width in zip(columns, widths))
        separator = "-" * len(header)
        print(separator)
        print(header)
        print(separator)
        
        # Print records
        for record in records:
            row = " | ".join(f"{str(value):<{width}}" for value, width in zip(record, widths))
            print(row)
        print(separator)
        
        # Print summary
        print(f"\nTotal records: {len(records)}")
        
    except psycopg2.Error as e:
        print(f"Database error: {e}")
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()

# Usage example:
if __name__ == "__main__":
    # Your Neon connection string
    CONNECTION_STRING = ""
    TABLE_NAME = "customer_data"
    
    fetch_all_neon(CONNECTION_STRING, TABLE_NAME)