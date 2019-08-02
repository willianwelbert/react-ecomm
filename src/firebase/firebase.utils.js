import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBttPt7BzAlp7ZbYOEKnr6J4ST98kN6EHk",
  authDomain: "crwn-db-83590.firebaseapp.com",
  databaseURL: "https://crwn-db-83590.firebaseio.com",
  projectId: "crwn-db-83590",
  storageBucket: "",
  messagingSenderId: "1072431427746",
  appId: "1:1072431427746:web:f6c366a63d4b505d"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;