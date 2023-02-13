import os
from dotenv import load_dotenv
from flask import Flask, request
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json

from models.family import Family

from models.requestModels import LoginParams

load_dotenv()

cred = credentials.Certificate('service_account_key.json')

firebase_admin.initialize_app(cred)

app = Flask(__name__)
app.config['TESTING'] = True


@app.post("/login")
def login():

    family_password = LoginParams.parse_obj(request.json).familyPassword

    ref = db.reference("families")
    families: [Family] = ref.get()
    # for family.password in families:
    #     if family == family_password:
    #         return json.dumps({'success': True, 'family': family}), 200, {'ContentType': 'application/json'}

    return json.dumps({'success': False}), 401, {'ContentType': 'application/json'}


@app.post("/signupFamily")
def register_family():

    return ""


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True, port=4000)
