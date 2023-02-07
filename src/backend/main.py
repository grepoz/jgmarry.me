import os
from dotenv import load_dotenv
from flask import Flask, request
import pyrebase
import json

from models.requestModels import LoginParams

config = {
  "apiKey": os.getenv('API_KEY'),
  "authDomain": os.getenv('FIREBASE_AUTH_DOMAIN'),
  "databaseURL": os.getenv('FIREBASE_DATABASE_URL'),
  "storageBucket": os.getenv('FIREBASE_STORAGE_BUCKET'),
}

load_dotenv()

firebase = pyrebase.initialize_app(config)
app = Flask(__name__)
app.config['TESTING'] = True


@app.post("/login")
def login():
    auth = firebase.auth()

    email = os.getenv('MAIN_USER_EMAIL')
    password = os.getenv('MAIN_USER_PASSWORD')

    family_password = LoginParams.parse_obj(request.json).familyPassword

    user = auth.sign_in_with_email_and_password(email, password)
    # what if user is unauthorized?

    if user is not None:
        db = firebase.database()
        families = db.child("families").get()
        for family in families:
            if family == family_password:
                return json.dumps({'success': True, 'family': family}), 200, {'ContentType': 'application/json'}

    return json.dumps({'success': False}), 401, {'ContentType': 'application/json'}


@app.post("/signupFamily")
def register_family():
    db = firebase.database()

    db.child("users").child("Morty")

    return ""


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True, port=4000)
