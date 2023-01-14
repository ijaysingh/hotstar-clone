import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA7EGQVfxBzBcg4K-3-zzPQfcXOy5RtY7s",
    authDomain: "disneyplus-clone-bad2a.firebaseapp.com",
    projectId: "disneyplus-clone-bad2a",
    storageBucket: "disneyplus-clone-bad2a.appspot.com",
    messagingSenderId: "813066601216",
    appId: "1:813066601216:web:1df2c260a19a7ad315e9e5",
    measurementId: "G-JFENN2HVVC"
  };


const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;