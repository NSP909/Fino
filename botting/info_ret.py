import os
from dotenv import load_dotenv
from langchain_openai.chat_models import ChatOpenAI
from langchain_openai.embeddings import OpenAIEmbeddings
from langchain_community.document_loaders import TextLoader
from langchain_pinecone import PineconeVectorStore
from langchain_text_splitters import CharacterTextSplitter
from pinecone import Pinecone
from langchain_community.vectorstores import Pinecone as Pine
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from openai import OpenAI

load_dotenv()
OPENAI_KEY=os.getenv("OPENAI_API_KEY")
PINECONE_API_KEY=os.getenv("PINECONE_API_KEY")
parser = StrOutputParser()

pc=Pinecone(api_key=PINECONE_API_KEY)
index=pc.Index("finance-company")
embeddings = OpenAIEmbeddings( model="text-embedding-3-small", openai_api_key=OPENAI_KEY)
vectorstore=PineconeVectorStore(index, embeddings)

messages=[{
             'role': 'system',
                'content': f""""You are a financial professional and one of your sales representatives
                has just received a call from a customer who is interested in a particular financial task.

                Your task is to assist the sales representative by porviding the necessary information.

                You will be provided with some company related data which you can use to answer the question

                Respond as if you were directly talking with the sales representative and instruct them a
                about what they need to tell the customer.

                Additionally don't ask the rep to say everything, just tell them that this is the information and they can provide it to the customer.

                Limit of 350 words.  
                """
            }]

client=OpenAI(api_key=OPENAI_KEY)

def load_data():
    loader = TextLoader(r"information.txt")
    documents = loader.load()
    text_splitter = CharacterTextSplitter(
        separator=";",
        chunk_size=500,
        chunk_overlap=200,
        length_function=len,
        is_separator_regex=False, )
    docs=text_splitter.split_documents(documents)
    embeddings = OpenAIEmbeddings( model="text-embedding-3-small", openai_api_key=OPENAI_KEY)
    index_name="finance-company"
    Pinecone=PineconeVectorStore.from_documents(docs,embeddings,index_name=index_name)
    print(Pinecone.similarity_search("mmutual funds", k=3))
    
    
def get_relevnt_info(query):
    context=vectorstore.similarity_search(query, k=3)
    formatted_user_query = f"""
        This is the User's Query:\n
        {query}
        This is the relevant Company Data:\n
        {context}
    """
    messages.append(
            {
                'role': 'user',
                'content': formatted_user_query
            })
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
    )
    out = response.choices[0].message.content
    return out

if __name__=="__main__":
    query="I want to open a new account"
    output=get_relevnt_info(query)
    print(output)
    # load_data()





