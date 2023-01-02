import firebase_admin
from firebase_admin import auth

options = {
    'serviceAccountId': 'firebase-adminsdk-6z854@wedding-41b3e.iam.gserviceaccount.com',
}
firebase_admin.initialize_app(options=options)

uid = 'some-uid'

# https://cloud.google.com/docs/authentication/getting-started  TODO
custom_token = auth.create_custom_token(uid)
print(custom_token)
