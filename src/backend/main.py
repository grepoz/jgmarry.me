import json
import os

import firebase_admin
from dotenv import load_dotenv
from firebase_admin import credentials
from firebase_admin import db
from flask import Flask, request

from models.family import Family, MyEncoder
from models.member import Member
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

    test_family = Family(33, "test99")
    test_family.add_member(Member("jan", "kol"))
    test_family.add_member(Member("ania", "bol"))

    cnt = 0

    for family in families:  # noqa
        if family["id"] == updated_family.id:
            # ref.child(str(cnt)).update({str(cnt): json.dumps(test_family)})
            # ref.child(f"{str(cnt)}/members").set(json.dumps(test_family.members, indent=4))

            # ref = db.reference(f"families")

            dumped = json.dumps({str(20): test_family}, indent=4, cls=MyEncoder)

            ref.update(json.loads(dumped))

            # ref.update({str(20): {
            #     "id": 33,
            #     "members": [
            #         json.dumps(Member("jan", "kol"), indent=4, cls=MyEncoder),
            #         {
            #             "diet": "podstawowa",
            #             "has_confirmed": True,
            #             "name": "Marcin",
            #             "surname": "Naczke"
            #         },
            #         {
            #             "diet": "podstawowa",
            #             "has_confirmed": True,
            #             "name": "Antek",
            #             "surname": "Naczke"
            #         }
            #     ],
            #     "needs_accomodation": False,
            #     "password": "test12"
            #
            # }})
            # ref.push().set(json.dumps(test_family, indent=4, cls=MyEncoder))
            return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}
        cnt += 1

    return json.dumps({'success': False}), 404, {'ContentType': 'application/json'}


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True, port=4000)
