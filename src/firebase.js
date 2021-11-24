import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNQgo9dCFbm_x8K590agcX012q9Hl9-H4",
  authDomain: "twitter-clone-1162e.firebaseapp.com",
  projectId: "twitter-clone-1162e",
  storageBucket: "twitter-clone-1162e.appspot.com",
  messagingSenderId: "943568184046",
  appId: "1:943568184046:web:e15446a9936d30997589ff",
  measurementId: "G-5RKW69PJT5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
