import json
import os
from flask import Flask, request

import firebase_admin
from dotenv import load_dotenv
from firebase_admin import credentials
from firebase_admin import db

from models.family import MyEncoder
from models.requestModels import LoginParams, SignupParams

load_dotenv()

cred = credentials.Certificate('service_account_key.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': os.getenv("FIREBASE_DATABASE_URL")
})

app = Flask(__name__)
app.config['TESTING'] = True


@app.post("/login")
def login():
    family_password = LoginParams.parse_obj(request.json).familyPassword

    ref = db.reference("families")
    families = ref.get()

    for family in families:  # noqa
        if family["password"] == family_password:
            return json.dumps({'success': True, 'family': family}), 200, {'ContentType': 'application/json'}

    return json.dumps({'success': False}), 401, {'ContentType': 'application/json'}


@app.put("/signupFamily")
def register_family():
    updated_family = SignupParams.parse_obj(request.json)

    ref = db.reference("families")
    families = ref.get()

    for family in families:  # noqa
        family_id = family["id"]
        if family_id == updated_family.id:
            dumped = json.dumps({str(family_id): updated_family}, indent=4, cls=MyEncoder)
            ref.update(json.loads(dumped))
            return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}

    return json.dumps({'success': False}), 404, {'ContentType': 'application/json'}


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True, port=4000)
