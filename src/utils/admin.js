var admin = require("firebase-admin");

var serviceAccount = require("../../shared/bookshelf-ac1c1-firebase-adminsdk-gj6iq-dc4a8b364f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = { admin, db };
