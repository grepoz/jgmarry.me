import firebase_admin
from firebase_admin import auth
import json
from config import SERVICE_ACCOUNT_ID, PASSWORDS_FILEPATH


# this script creates JWT token, which provide extra security for users
if __name__ == "__main__":
    options = {
        "serviceAccountId": SERVICE_ACCOUNT_ID
    }

    firebase_admin.initialize_app(options=options)

    with open(PASSWORDS_FILEPATH, 'r') as file:
        passwords = file.read().splitlines()

    tokens = []
    for password in passwords:
        if password != "":
            custom_token = auth.create_custom_token(password)
            tokens.append({password: custom_token.decode('utf-8')})

    with open("tokens.json", "w") as file:
        json.dump(tokens, file)

# TODO: revoke credentials when not needed: 'gcloud auth application-default revoke'
