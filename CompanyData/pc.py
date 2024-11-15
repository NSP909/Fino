import os
import pinecone
import openai
from dotenv import load_dotenv

load_dotenv()

pc = pinecone.Pinecone(api_key= os.getenv("PINECONE_API_KEY"))
openai.api_key = os.getenv("OPENAI_API_KEY")

index_name = "finance-company"
index = pc.Index(index_name)

items = [
    {"id": "1", "type": "service", "name": "Personal Financial Planning Sessions", "description": "One-on-one meeting with our advisors to help you create your personalised financial roadmap. The session will provide tailored advice for managing personal finances, including budgeting, debt management, and retirement planning"},
    {"id": "2", "type": "service", "name": "Investment Portfolio Reviews", "description": "A detailed analysis of your investment portfolio with our experts. The service will provide investment strategies to grow wealth, including advice on stocks, bonds, mutual funds, and real estate."},
    {"id": "3", "type": "service", "name": "Financial Literacy Workshop", "description": "Hands-on training with state-of-the-art banking tools to enable you to manage your finances efficiently"},
    {"id": "4", "type": "service", "name": "Tax Planning Sessions", "description": "One-on-one consultation with our experts to help you manage your taxes the best way"},
    {"id": "5", "type": "service", "name": "Market Outlook Seminars", "description": "Quarterly market evaluation and analysis with our expert investors. Participants get to learn the latest market trends, promising stocks, and other information you need to master today's market and get the best returns."},
    {"id": "6", "type": "product", "name": "Personal Loans", "description": "Unsecured general purposes loans. Can be used for debt consolidation and large purchases among other purposes."},
    {"id": "7", "type": "product", "name": "Mortgages", "description": "Fixed-rate and adjustable-rate mortgages to help clients purchase homes"},
    {"id": "8", "type": "product", "name": "Auto Loans", "description": "Loans specifically for purchasing vehicles"},
    {"id": "9", "type": "product", "name": "Business Loans", "description": "Financing for business expenses, expansion, and capital needs"},
    {"id": "10", "type": "product", "name": "Student Loans", "description": "Loans specifically for covering education expenses, with flexible repayment options"},
    {"id": "11", "type": "product", "name": "Mutual Fund", "description": "Pooled investments managed by professionals, diversified across multiple assets"},
    {"id": "12", "type": "product", "name": "Life Insurance", "description": "Policies designed to provide financial support to beneficiaries after the policyholder’s death."},
    {"id": "13", "type": "product", "name": "Private Real Estate Funds", "description": "Limited in stock and requires high minimum investments, these funds invest in exclusive real estate ventures, like high-end commercial properties, luxury developments, or sustainable real estate projects."},
    {"id": "14", "type": "product", "name": "Checking Accounts", "description": "A bank account for everyday transactions and access to funds"},
    {"id": "15", "type": "product", "name": "Savings Accounts", "description": "A bank account where holders earn interest on deposits while keeping funds accessible"},
    {"id": "16", "type": "information", "name": "Company Name", "description": "FinCorp Financial Services"},
    {"id": "17", "type": "information", "name": "Company Headquarters", "description": "Princeton University, New Jersey, 08544"},
    {"id": "18", "type": "information", "name": "Company Contact Information", "description": "Phone Number: 1-123-456-7899 Email: support@fincorp.com Website: www.fincorp.com"},
    {"id": "19", "type": "information", "name": "Company Description", "description": "FinCorp Financial Services is a leading provider of comprehensive financial solutions, offering services ranging from personal financial planning to wealth management, investment products, and insurance coverage. We aim to help individuals and businesses achieve financial security through innovative solutions, expert advice, and personalized service."},
    {"id": "20", "type": "information", "name": "Company Mission Statement", "description": "To empower our clients to achieve financial independence and peace of mind by providing accessible, transparent, and tailored financial services"},
    {"id": "21", "type": "information", "name": "Company Social Media", "description": "@FinCorp on Twitter, Facebook, and Instagram"},
    {"id": "22", "type": "information", "name": "Number of Employees", "description": "1,500+"},
    {"id": "23", "type": "information", "name": "Founded", "description": "July, 2005"},
    {"id": "24", "type": "information", "name": "Company CEO", "description": "Raghav Thind"},
    {"id": "25", "type": "information", "name": "Company Vision", "description": "To be the most trusted financial services provider, known for its customer-first approach and commitment to financial inclusion."},
    {"id": "26", "type": "information", "name": "Company Core Values", "description": "Integrity, Customer Focus, Innovation, Excellence, and Social Responsibility"},
    {"id": "27", "type": "information", "name": "Company Target Market", "description": "Individuals seeking personalized financial advice, loans, or insurance coverage, Individuals or entities looking to grow their wealth through investment products like mutual funds, stocks, and bonds, Individuals looking for financial assistance to pay for their education, and Businesses looking for loans, cash management services, and employee benefits solutions."},
    {"id": "28", "type": "information", "name": "Company Mobile App", "description": "The FinCorp mobile app provides easy account management, transactions, loan applications, and customer support. The app is available for both android and IOS"},
    {"id": "29", "type": "information", "name": "Customer Satisfaction", "description": "FinCorp has been consistently rated above 95 percent in customer satisfaction surveys."},
    {"id": "30", "type": "information", "name": "Awards", "description": "We have received several awards for customer service excellence and financial product innovation."},
    {"id": "31", "type": "information", "name": "Company Corporate Social Responsibility (CSR)", "description": "Active in community-based initiatives, promoting financial literacy through workshops and educational programs"},
    {"id": "32", "type": "information", "name": "Industry Recognition", "description": "We are recognized as a top financial services provider by various industry organizations for product offerings and customer care"},
    {"id": "33", "type": "information", "name": "Company Market Presence", "description": "FinCorp has 50+ branches nationwide, including major cities and suburban areas. We also have a strong digital presence, including a fully functional website and mobile app for easy access to services and products"}
]


# generate embeddings using the updated OpenAI API
def get_embedding(text):
    response = openai.Embedding.create(input=text, model="text-embedding-ada-002")
    return response['data'][0]['embedding']

# Generate vectors for each item
data = []
for item in items:
    vector = get_embedding(item["description"])
    data.append((item["id"], vector, item))  # Add ID, vector, and metadata for each item

# Upload data to the existing Pinecone index
index.upsert(vectors=data)