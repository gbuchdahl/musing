// src/firebase.js
import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyD0mnfVqxn1TZ7gGSrXq8UPOp_sZPJ3V7A",
    authDomain: "musing-b1214.firebaseapp.com",
    databaseURL: "https://musing-b1214.firebaseio.com",
    projectId: "musing-b1214",
    storageBucket: "musing-b1214.appspot.com",
    messagingSenderId: "391938708857"
};
let fire = firebase.initializeApp(config);
export default fire;