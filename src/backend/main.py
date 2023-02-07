import os
from dotenv import load_dotenv
from flask import Flask
import pyrebase

config = {
  "apiKey": "apiKey",
  "authDomain": "projectId.firebaseapp.com",
  "databaseURL": "https://databaseName.firebaseio.com",
  "storageBucket": "projectId.appspot.com"
}

load_dotenv()

firebase = pyrebase.initialize_app(config)

app = Flask(__name__)
app.config['TESTING'] = True


@app.post("/signupFamily")
def register_family():
    return ""


@app.get("/login")
def login():
    return ""


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True, port=4000)
