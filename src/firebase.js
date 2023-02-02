import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACcKUX_ietTytJPk5bUa0KeZq8Xw0lSGQ",
  authDomain: "disneyplus-clone-c63f6.firebaseapp.com",
  projectId: "disneyplus-clone-c63f6",
  storageBucket: "disneyplus-clone-c63f6.appspot.com",
  messagingSenderId: "239852116462",
  appId: "1:239852116462:web:2d5637e407c98fb87096ff",
  measurementId: "G-JP86XNVSC2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;