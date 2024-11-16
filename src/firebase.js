import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

 const firebaseConfig = {
  apiKey: "AIzaSyBPNaKDbHZCt8tCgMNrskM_bhEWktLF23c",
  authDomain: "netflix-clone-2e987.firebaseapp.com",
  projectId: "netflix-clone-2e987",
  storageBucket: "netflix-clone-2e987.appspot.com",
  messagingSenderId: "484497359857",
  appId: "1:484497359857:web:3df897f48ea4ec5bbafa50",
  measurementId: "G-WQDP4ZFJH4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


const fbAuth = getAuth(firebaseApp);
const fbProvider = new FacebookAuthProvider();

export { auth, provider, storage, fbAuth, fbProvider };
export default db;