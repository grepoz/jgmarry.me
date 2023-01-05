 setup firebase project and pass config info (confidential) to '.env' file
 setup environment variable FIREBASE_ADMIN_PASSWORD for admin passwords (otherwise it will be default 'admin1')
 powershell: $env:FIREBASE_ADMIN_PASSWORD='greg12'
create file 'families.json' with guests in directory src/backend/data:
line by line type in family members / guests, that should have one password for registration. Than make leave an empty line and start another family:
`John Krasinsky
Emily Krasinsky
Sara Krasinsky

Robert Connor
Giulia Connor
`

run python srcipt 'generate_json_with_families.py' to generate with, that later must be upload to the firebase database.

upload generated json file to firebase database

configure authentication for users

run script:
generated token paste to .env file (for dev purposes)