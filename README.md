 setup firebase project and pass config info (confidential) to '.env' file
 setup environment variable FIREBASE_ADMIN_PASSWORD for admin passwords (otherwise it will be default 'admin1')
 powershell: $env:FIREBASE_ADMIN_PASSWORD='greg12'
create file 'families.json' with guests in directory src/backend/data:
line by line type in family members / guests, that should have one password for registration. Than make leave an empty line and start another family:
`
John Krasinsky
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

to run in docker use:
docker network create jgmarry.me-net

docker build -t jgmarry.me.frontend . 
docker run --rm --net jgmarry.me-net -p 3000:3000 --name jgmarry.me.frontend -d jgmarry.me.frontend

docker build -t jgmarry.me.backend .
docker run --rm --net jgmarry.me-net -p 4000:4000 --name jgmarry.me.backend -d jgmarry.me.backend  

to push image to google cloud registry:
source: https://cloud.google.com/container-registry/docs/pushing-and-pulling
docker tag jgmarry.me.frontend eu.gcr.io/proj-id/jgmarry.me.frontend
docker push eu.gcr.io/proj-id/jgmarry.me.frontend

repeat for jgmarry.me.backend
