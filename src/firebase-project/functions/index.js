const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");

const domain = 'jgmarry.me';

const allowedOrigins = [
  `https://${domain}`,
  `http://${domain}`,
  `https://www.${domain}`,
  `http://www.${domain}`
];

const corsHandler = cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
});

admin.initializeApp();

exports.login = functions.https.onRequest(async (request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== "POST") {
      response.status(405).send("Method Not Allowed");
      return;
    }

    const familyPassword = request.body.password;

    const familiesRef = admin.database().ref("families");
    const snapshot = await familiesRef.get();
    const families = snapshot.val();

    const family = Object.values(families)
        .find((f) => f.password === familyPassword);

    if (family) {
      response.status(200).json(family);
    } else {
      response.status(401).json({success: false});
    }
  });
});

exports.signup = functions.https.onRequest(async (request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== "PUT") {
      response.status(405).send("Method Not Allowed");
      return;
    }

    const updatedFamily = request.body;
    const snapshot = await admin.database().ref("families").get();
    const families = snapshot.val();

    const familyKey = Object.keys(families).find((key) => {
      return families[key].id === updatedFamily.id;
    });

    if (familyKey) {
      const updates = {[familyKey]: updatedFamily};
      await admin.database().ref("families").update(updates);

      response.status(204).json({success: true});
    } else {
      response.status(404).json({success: false});
    }
  });
});
