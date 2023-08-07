import firebase from "firebase/compat/app"; // Import firebase/compat/app
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAhDJtxfslXk2mLd2p35nHuc0yTofQHWRo",
    authDomain: "disneyplus-clone-6982a.firebaseapp.com",
    projectId: "disneyplus-clone-6982a",
    storageBucket: "disneyplus-clone-6982a.appspot.com",
    messagingSenderId: "97201690104",
    appId: "1:97201690104:web:4c5b26117b90db0ebe720d",
    measurementId: "G-525E3N5S05"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;