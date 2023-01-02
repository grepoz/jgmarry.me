 setup firebase project and pass config info (confidential) to '.env' file
 setup environment variable FIREBASE_ADMIN_PASSWORD for admin passwords (otherwise it will be default 'admin1')
 powershell: $env:FIREBASE_ADMIN_PASSWORD='greg12'

 run python srcipt 'generate_json_with_families.py' to generate with, that later must be upload to the firebase database.
