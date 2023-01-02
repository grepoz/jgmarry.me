import { initializeApp, deleteApp } from "firebase/app";
import { getDatabase, ref, child, get, update, del } from "firebase/database";
import { StatusCodes } from 'http-status-codes';

export function openConnectionToDb() {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
    }

    const app = initializeApp(firebaseConfig);

    return app;
}

export function closeConnectionToDb(firebaseApp) {
    deleteApp(firebaseApp)
        .then(function () {
            console.log("App deleted successfully");
        })
        .catch(function (error) {
            console.log("Error deleting app:", error);
        });
}

export async function getFamily(password) {

    const firebaseApp = openConnectionToDb();
    const dbRef = ref(getDatabase());

    return await get(child(dbRef, "families"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                let families = snapshot.val();

                for (let index = 0; index < families.length; index++) {
                    const family = families[index];

                    if (family.password === password) {
                        return family;
                    }
                }

                return StatusCodes.NOT_FOUND;
            }
            else {
                console.log("No data available");
                return StatusCodes.BAD_REQUEST;
            }
        })
        .catch((error) => {
            console.error(error);
            return StatusCodes.SERVICE_UNAVAILABLE;
        })
        .finally(() => {
            closeConnectionToDb(firebaseApp)
        });
}

export async function updateFamily(family) {

    const firebaseApp = openConnectionToDb();
    const dbRef = ref(getDatabase());
    const updates = {};
    updates[`/families/${family.id}`] = family;

    return await update(dbRef, updates)
        .then(() => { return StatusCodes.OK; })
        .catch(() => {
            console.error("error");
            return StatusCodes.SERVICE_UNAVAILABLE;
        })
        .finally(() => {
            closeConnectionToDb(firebaseApp)
        });
}
