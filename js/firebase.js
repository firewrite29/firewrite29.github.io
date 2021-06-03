'use strict'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB6XdbjyYt_TXsH4OwsFIO1dkR0qRu75Ps",
  authDomain: "firewrite29-27403.firebaseapp.com",
  projectId: "firewrite29-27403",
  storageBucket: "firewrite29-27403.appspot.com",
  messagingSenderId: "443971232566",
  appId: "1:443971232566:web:e8b123cd2a4c6a68730997"
};
const firebase = require("firebase");
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Required for side-effects
require("firebase/firestore");