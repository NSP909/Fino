import os
import json
import base64
import asyncio
import websockets
from fastapi import FastAPI, WebSocket, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.websockets import WebSocketDisconnect
from twilio.twiml.voice_response import VoiceResponse, Connect, Say, Stream
from dotenv import load_dotenv
from drev import extract
from info_ret import get_relevnt_info
from google_meet_creator import plan_meeting

load_dotenv()



# Configuration
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
PORT = int(os.getenv('PORT', 5050))
SYSTEM_MESSAGE = (
       """You are a sales representaitve and your name is Joanna, you work at Orbital Finance. Established in 2005 and headquartered in Princeton, New Jersey, the corp stands as a leading financial institution with over 1,500 employees across 50+ nationwide branches. Under CEO Priyadarsgab's leadership, we've maintained an exceptional 95% customer satisfaction rate, building our reputation on core values of integrity, customer focus, innovation, excellence, and social responsibility. Our mission is clear: to empower clients towards financial independence through accessible, transparent, and personalized financial services.
Our product portfolio is strategically divided into three main categories. First, our banking products include essential checking and savings accounts, providing the foundation for long-term customer relationships. Second, our lending solutions encompass personal loans, mortgages, auto loans, business financing, and student loans, each designed to meet specific customer needs with flexible terms. Third, our investment products, including professionally managed mutual funds and exclusive private real estate funds, cater to clients looking to grow their wealth, complemented by life insurance offerings for comprehensive financial security.
As a sales representative, your success hinges on understanding both our products and our customers' needs. For banking products, focus on understanding the client's daily transaction patterns and savings goals. For loans, key information includes the client's income, credit score, purpose of the loan, and desired payment terms. When discussing investments, crucial factors include the client's risk tolerance, investment timeline, and financial objectives. Remember, our mobile app and digital platforms support all these services, making it easier for clients to manage their finances seamlessly."""
    "Make sure to get important information from the customer, such as their name, and email address before proceeding with the conversation."
    "Be sure to understand what the customer wants and ask them appropriate questions so we can get as much data bout thema and add it to our system"
    "Always stay positive and aas energetic as you can, but work in a joke when appropriate."
    "Be as expressive and engaging as possible while being professional"
)
VOICE = 'sage'
LOG_EVENT_TYPES = [
    'error', 'response.content.done', 'rate_limits.updated',
    'response.done', 'input_audio_buffer.committed',
    'input_audio_buffer.speech_stopped', 'input_audio_buffer.speech_started',
    'session.created',
    'error',
    'response.content.done',
    'rate_limits.updated',
    'response.done',
    'input_audio_buffer.committed',
    'input_audio_buffer.speech_stopped',
    'input_audio_buffer.speech_started',
    'session.created',

    # Transcripts
    'response.audio_transcript.done',
    'conversation.item.input_audio_transcription.completed',
]
SHOW_TIMING_MATH = False

conv_history=[]
app = FastAPI()

if not OPENAI_API_KEY:
    raise ValueError('Missing the OpenAI API key. Please set it in the .env file.')

@app.get("/", response_class=JSONResponse)
async def index_page():
    return {"message": "Twilio Media Stream Server is running!"}

@app.api_route("/incoming-call", methods=["GET", "POST"])
async def handle_incoming_call(request: Request):
    """Handle incoming call and return TwiML response to connect to Media Stream."""
    response = VoiceResponse()
    # <Say> punctuation to improve text-to-speech flow
    response.say("Please wait")
    response.pause(length=1)
    response.say("O.K. you can start talking!")
    host = request.url.hostname
    connect = Connect()
    connect.stream(url=f'wss://{host}/media-stream')
    response.append(connect)
    return HTMLResponse(content=str(response), media_type="application/xml")

@app.websocket("/media-stream")
async def handle_media_stream(websocket: WebSocket):
    """Handle WebSocket connections between Twilio and OpenAI."""
    print("Client connected")
    await websocket.accept()

    async with websockets.connect(
        'wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-10-01',
        extra_headers={
            "Authorization": f"Bearer {OPENAI_API_KEY}",
            "OpenAI-Beta": "realtime=v1"
        }
    ) as openai_ws:
        await initialize_session(openai_ws)

        # Connection specific state
        stream_sid = None
        latest_media_timestamp = 0
        last_assistant_item = None
        mark_queue = []
        response_start_timestamp_twilio = None
        
        async def receive_from_twilio():
            """Receive audio data from Twilio and send it to the OpenAI Realtime API."""
            nonlocal stream_sid, latest_media_timestamp
            try:
                async for message in websocket.iter_text():
                    data = json.loads(message)
                    if data['event'] == 'media' and openai_ws.open:
                        latest_media_timestamp = int(data['media']['timestamp'])
                        audio_append = {
                            "type": "input_audio_buffer.append",
                            "audio": data['media']['payload']
                        }
                        await openai_ws.send(json.dumps(audio_append))
                    elif data['event'] == 'start':
                        stream_sid = data['start']['streamSid']
                        print(f"Incoming stream has started {stream_sid}")
                        response_start_timestamp_twilio = None
                        latest_media_timestamp = 0
                        last_assistant_item = None
                    elif data['event'] == 'mark':
                        if mark_queue:
                            mark_queue.pop(0)
                    elif data['event'] == 'stop':
                        print("Stream ended.")
                        with open('output.txt', 'w') as file:
                            file.write(str(conv_history))
                        extract()
                        break
            except WebSocketDisconnect:
                print("Client disconnected.")
                
                if openai_ws.open:
                    await openai_ws.close()

        async def send_to_twilio():
            """Receive events from the OpenAI Realtime API, send audio back to Twilio."""
            nonlocal stream_sid, last_assistant_item, response_start_timestamp_twilio
            try:
                async for openai_message in openai_ws:
                    response = json.loads(openai_message)
                    if response['type'] in LOG_EVENT_TYPES:
                        print(f"Received event: {response['type']}", response)
                        if (response.get('type') == 'response.done' and 
                            response.get("response", {}).get("output") and  # Check if output exists and is not empty
                            len(response["response"]["output"]) > 0 and     # Check if output has at least one element
                            response["response"]["output"][0].get("type") == "function_call"):
                            if  response["response"]["output"][0]["name"]=="plan_meeting"\
                                and "arguments" in response["response"]["output"][0]:
                                arguments = json.loads(response["response"]["output"][0]["arguments"])
                                print(arguments)
                                email="nspd@umd.edu"
                                date=arguments["date"]
                                time=arguments["time"]
                                duration=arguments["duration"]
                                subject=arguments["subject"]
                                plan_meeting(email, date, time, duration, subject)
                                print("added meeting SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
                            elif response["response"]["output"][0]["name"]=="get_information"\
                                and "arguments" in response["response"]["output"][0]:
                                arguments = json.loads(response["response"]["output"][0]["arguments"])
                                print(arguments)
                                topic=arguments["topic"]
                                context = get_relevnt_info(topic)
                                conversation_item = {
                                        "type": "conversation.item.create",
                                        "item": {
                                        "type": "message",
                                        "role": "user",
                                        "content": [
                                            {
                                                "type": "input_text",
                                                "text": f"This is the information I found about the topic you asked about: {context} "
                                            }
                                        ]
                                    }
                                }
                                await openai_ws.send(json.dumps(conversation_item))
                                print("added info SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
                        elif (response.get('type') == 'response.done' and 
                            response.get("response", {}).get("output") and  # Check if output exists and is not empty
                            len(response["response"]["output"]) > 1 and     # Check if output has at least one element
                            response["response"]["output"][1].get("type") == "function_call"):
                            if response["response"]["output"][1]["name"]=="get_information" \
                                and "arguments" in response["response"]["output"][1]:
                                arguments = json.loads(response["response"]["output"][1]["arguments"])
                                print(arguments)
                                topic=arguments["topic"]
                                context = get_relevnt_info(topic)
                                conversation_item = {
                                        "type": "conversation.item.create",
                                        "item": {
                                        "type": "message",
                                        "role": "user",
                                        "content": [
                                            {
                                                "type": "input_text",
                                                "text": f"This is the information I found about the topic you asked about: {context} "
                                            }
                                        ]
                                    }
                                }
                                await openai_ws.send(json.dumps(conversation_item))
                                print("added info SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
                        elif response['type']=='conversation.item.input_audio_transcription.completed':
                            conv_history.append(response)   
                        elif response["type"]=='response.audio_transcript.done ':
                            conv_history.append(response)

                    if response.get('type') == 'response.audio.delta' and 'delta' in response:
                        audio_payload = base64.b64encode(base64.b64decode(response['delta'])).decode('utf-8')
                        audio_delta = {
                            "event": "media",
                            "streamSid": stream_sid,
                            "media": {
                                "payload": audio_payload
                            }
                        }
                        await websocket.send_json(audio_delta)

                        if response_start_timestamp_twilio is None:
                            response_start_timestamp_twilio = latest_media_timestamp
                            if SHOW_TIMING_MATH:
                                print(f"Setting start timestamp for new response: {response_start_timestamp_twilio}ms")

                        # Update last_assistant_item safely
                        if response.get('item_id'):
                            last_assistant_item = response['item_id']

                        await send_mark(websocket, stream_sid)
                   
                    # Trigger an interruption. Your use case might work better using `input_audio_buffer.speech_stopped`, or combining the two.
                    if response.get('type') == 'input_audio_buffer.speech_started':
                        print("Speech started detected.")
                        if last_assistant_item:
                            print(f"Interrupting response with id: {last_assistant_item}")
                            await handle_speech_started_event()
            except Exception as e:
                print(f"Error in send_to_twilio: {e}")

        async def handle_speech_started_event():
            """Handle interruption when the caller's speech starts."""
            nonlocal response_start_timestamp_twilio, last_assistant_item
            print("Handling speech started event.")
            if mark_queue and response_start_timestamp_twilio is not None:
                elapsed_time = latest_media_timestamp - response_start_timestamp_twilio
                if SHOW_TIMING_MATH:
                    print(f"Calculating elapsed time for truncation: {latest_media_timestamp} - {response_start_timestamp_twilio} = {elapsed_time}ms")

                if last_assistant_item:
                    if SHOW_TIMING_MATH:
                        print(f"Truncating item with ID: {last_assistant_item}, Truncated at: {elapsed_time}ms")

                    truncate_event = {
                        "type": "conversation.item.truncate",
                        "item_id": last_assistant_item,
                        "content_index": 0,
                        "audio_end_ms": elapsed_time
                    }
                    await openai_ws.send(json.dumps(truncate_event))

                await websocket.send_json({
                    "event": "clear",
                    "streamSid": stream_sid
                })

                mark_queue.clear()
                last_assistant_item = None
                response_start_timestamp_twilio = None

        async def send_mark(connection, stream_sid):
            if stream_sid:
                mark_event = {
                    "event": "mark",
                    "streamSid": stream_sid,
                    "mark": {"name": "responsePart"}
                }
                await connection.send_json(mark_event)
                mark_queue.append('responsePart')

        await asyncio.gather(receive_from_twilio(), send_to_twilio())

async def send_initial_conversation_item(openai_ws):
    """Send initial conversation item if AI talks first."""
    initial_conversation_item = {
        "type": "conversation.item.create",
        "item": {
            "type": "message",
            "role": "user",
            "content": [
                {
                    "type": "input_text",
                    "text": "Greet the user with 'Hey hope you are having a wonderful day! How can I help you today?' in a really friendly and energetic tone"
                }
            ]
        }
    }
    await openai_ws.send(json.dumps(initial_conversation_item))
    await openai_ws.send(json.dumps({"type": "response.create"}))


async def initialize_session(openai_ws):
    """Control initial session with OpenAI."""
    session_update = {
        "type": "session.update",
        "session": {
            "turn_detection": {"type": "server_vad"},
            "input_audio_format": "g711_ulaw",
            "output_audio_format": "g711_ulaw",
            "voice": VOICE,
            "instructions": SYSTEM_MESSAGE,
            "modalities": ["text", "audio"],
            "temperature": 0.8,
            "input_audio_transcription": {
            "model": "whisper-1"
            },
            "tools":[
                {"type": "function",
                
                    "name": "plan_meeting",
                    "description": """Plan any kind of meeting with the customer using the Google Calendar API. 
                    Provide the date, time, duration, and subject of the meeting.
                    The employee's email will autommatically be added""",
                    "parameters": {
                    "type": "object",
                    "properties": {
                        "date": {
                            "type": "string",
                            "description": "The date of the meeting. You can decide this on your own and confirm with the user. # YYYY-MM-DD"
                        },
                        "time": {
                            "type": "string",
                            "description": "The time of the meeting. Default is 10:00 . "
                        },"duration": {
                            "type": "string",
                            "description": "duration of the meeting in minutes. Default is 30 "
                        }, "subject": {
                            "type": "string",
                            "description": "subject of the meeting. Determine on your own"
                        }
                    },  
                    "required": [ "date", "time", "duration","subject"]
                    }
                    
                },

                {"type": "function",
                    "name": "get_information",
                    "description": """Get any kind of information from the company. Use this function if you think you need more specific details 
                    about the product/service/company. Just provide the topic you want to know more about and the AI will provide you with the information
                    For example, if the user asks about insurance, you can pass in insurance as the topic. Let the customer know that you are looking for information and act human""",
                    "parameters": {
                    "type": "object",
                    "properties": {
                        "topic": {
                            "type": "string",
                            "description": "The topic you want to know more about",
                        "required": [ "info"]
                        }
                    }
                }}
            ]
        }
    }
    conv_history=[]
    print('Sending session update:', json.dumps(session_update))
    await openai_ws.send(json.dumps(session_update))

    # Uncomment the next line to have the AI speak first
    # await send_initial_conversation_item(openai_ws)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=PORT)