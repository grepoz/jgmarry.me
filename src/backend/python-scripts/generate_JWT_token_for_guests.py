import sys
sys.path.append("src/backend/")
from config import SERVICE_ACCOUNT_ID
import json
import firebase_admin
from firebase_admin import auth


# this script creates JWT token, which provide extra security for users
if __name__ == "__main__":
    options: dict[str, str] = {"serviceAccountId": SERVICE_ACCOUNT_ID}

    firebase_admin.initialize_app(options=options)
    password: str = str(input("type in password:\n"))
    
    if password != "":
        custom_token = auth.create_custom_token(password)
        text_file = open("src/backend/token.txt", "wb")
        n = text_file.write(custom_token)
        text_file.close()
    else:
        print("wrong password")


# TODO: revoke credentials when not needed: 'gcloud auth application-default revoke'
