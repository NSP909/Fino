
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
import os
import datetime
import pickle

class GoogleMeetCreator:
    def __init__(self):
        # If modifying these scopes, delete the token.pickle file
        self.SCOPES = ['https://www.googleapis.com/auth/calendar']
        self.creds = None

    def authenticate(self):
        """Handle Google Calendar authentication"""
        # Load existing credentials if available
        if os.path.exists('token.pickle'):
            with open('token.pickle', 'rb') as token:
                self.creds = pickle.load(token)

        # If credentials are invalid or don't exist, get new ones
        if not self.creds or not self.creds.valid:
            if self.creds and self.creds.expired and self.creds.refresh_token:
                self.creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    '../../credentials.json', self.SCOPES)
                self.creds = flow.run_local_server(port=49175)
            
            # Save credentials for future use
            with open('token.pickle', 'wb') as token:
                pickle.dump(self.creds, token)

    def create_meeting(self, recipient_email, meeting_date, meeting_time, duration_minutes, subject="Meeting"):
        """
        Create a Google Meet meeting and send calendar invite
        
        Args:
            recipient_email (str): Attendee's email address
            meeting_date (str): Date in format 'YYYY-MM-DD'
            meeting_time (str): Time in format 'HH:MM'
            duration_minutes (int): Duration of meeting in minutes
            subject (str): Meeting subject/title
        """
        try:
            # Authenticate first
            self.authenticate()
            duration_minutes = int(duration_minutes)
            # Create Google Calendar API service
            service = build('calendar', 'v3', credentials=self.creds)
            
            # Parse start time
            start_time = datetime.datetime.strptime(f"{meeting_date} {meeting_time}", "%Y-%m-%d %H:%M")
            
            # Calculate end time
            end_time = start_time + datetime.timedelta(minutes=duration_minutes)
            
            # Create event details
            event = {
                'summary': subject,
                'description': 'Meeting created via Google Meet API',
                'start': {
                    'dateTime': start_time.isoformat(),
                    'timeZone': 'America/New_York',  # Adjust timezone as needed
                },
                'end': {
                    'dateTime': end_time.isoformat(),
                    'timeZone': 'America/New_York',
                },
                'attendees': [
                    {'email': recipient_email},
                ],
                'conferenceData': {
                    'createRequest': {
                        'requestId': f"meet-{datetime.datetime.now().strftime('%Y%m%d%H%M%S')}",
                        'conferenceSolutionKey': {
                            'type': 'hangoutsMeet'
                        }
                    }
                }
            }
            
            # Create the event and send invitations
            event = service.events().insert(
                calendarId='primary',
                body=event,
                conferenceDataVersion=1,
                sendUpdates='all'
            ).execute()
            
            meet_link = event.get('conferenceData', {}).get('entryPoints', [])[0].get('uri', 'No meet link generated')
            
            print(f"""Meeting created successfully!
            Title: {subject}
            Time: {meeting_time}
            Date: {meeting_date}
            Duration: {duration_minutes} minutes
            Meet Link: {meet_link}
            Calendar Event ID: {event.get('id')}""")
            
            return meet_link

        except Exception as e:
            print(f"Error creating meeting: {str(e)}")
            return None


def plan_meeting(recipient_email, meeting_date, meeting_time, duration_minutes, subject="Meeting"):
    # Create Google Meet creator object
    meet_creator = GoogleMeetCreator()
    
    # Create meeting
    meet_creator.create_meeting(
        recipient_email=recipient_email,
        meeting_date=meeting_date,
        meeting_time=meeting_time,
        duration_minutes=duration_minutes,
        subject=subject
    )

# Example usage
if __name__ == "__main__":
    # Example parameters
    recipient = "rthind@umd.edu"
    date = "2024-11-24"  # YYYY-MM-DD
    time = "14:30"       # 24-hour format
    duration = 60        # minutes
    subject = "Internship"
    
    # Create meeting
    meet_creator = GoogleMeetCreator()
    meet_link = meet_creator.create_meeting(
        recipient_email=recipient,
        meeting_date=date,
        meeting_time=time,
        duration_minutes=duration,
        subject=subject
    )
    
    if meet_link:
        print(f"\nMeet link can be shared with participants: {meet_link}")