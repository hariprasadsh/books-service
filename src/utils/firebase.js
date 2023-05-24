const firebase = require("firebase");

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAuVRbo26EU4SNheSK-YRO38LHx1YoZdTg",
  authDomain: "bookshelf-ac1c1.firebaseapp.com",
  projectId: "bookshelf-ac1c1",
  storageBucket: "bookshelf-ac1c1.appspot.com",
  messagingSenderId: "1056972457392",
  appId: "1:1056972457392:web:5b57543f091c26637b0275",
};

firebase.initializeApp(firebaseConfig); //initialize firebase app
module.exports = { firebase }; //export the app
