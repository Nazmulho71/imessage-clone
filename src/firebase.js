import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZXz9pXIB9BFACZFVOMgtFfOw0l7k1ubY",
  authDomain: "imessage-clone-17697.firebaseapp.com",
  projectId: "imessage-clone-17697",
  storageBucket: "imessage-clone-17697.appspot.com",
  messagingSenderId: "850686870912",
  appId: "1:850686870912:web:2ea025a9cce83f1338ed65",
  measurementId: "G-4YMH7Z069Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
