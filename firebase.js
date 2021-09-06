import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAXHFY888k_CiZFr05OJR-AoD8ugch1Tps",
    authDomain: "whatsapp-6d7d0.firebaseapp.com",
    projectId: "whatsapp-6d7d0",
    storageBucket: "whatsapp-6d7d0.appspot.com",
    messagingSenderId: "737787962941",
    appId: "1:737787962941:web:e293cd18e0773c882b6c54"
  };

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app()

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider ();

export { db, auth, provider };