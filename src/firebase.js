import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4EG2nm8JIGVSUmuODuyZ3Ul9oDlGRzKw",
  authDomain: "react-insta-clone-880f4.firebaseapp.com",
  databaseURL: "https://react-insta-clone-880f4.firebaseio.com",
  projectId: "react-insta-clone-880f4",
  storageBucket: "react-insta-clone-880f4.appspot.com",
  messagingSenderId: "139560408249",
  appId: "1:139560408249:web:5ea71a064f54fdb7007768",
  measurementId: "G-FFCCTXLS8M",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
