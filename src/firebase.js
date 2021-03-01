// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCYn9G4XmAsGMgVXjxE6rV6eLNK-lgr_SU",
    authDomain: "fir-f1a63.firebaseapp.com",
    projectId: "fir-f1a63",
    storageBucket: "fir-f1a63.appspot.com",
    messagingSenderId: "1078309949308",
    appId: "1:1078309949308:web:b1c1f41751b5d4b3e6def9",
    measurementId: "G-PSWZ8D6T5M"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };