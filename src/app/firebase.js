import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    // no estoy seguro si este se pueda
    signOut,
  } from "firebase/auth";
  
  import {
    getFirestore,
    collection,
    addDoc,
    doc,
    getDoc
  } from "firebase/firestore";


  import { initializeApp } from "firebase/app";

  const firebaseConfig = {
    apiKey: "AIzaSyAjPTn1xczujjqFlam9t21LZHvvd4fcOj4",
    authDomain: "robosim-8519d.firebaseapp.com",
    projectId: "robosim-8519d",
    storageBucket: "robosim-8519d.appspot.com",
    messagingSenderId: "586042548975",
    appId: "1:586042548975:web:eff58406c8f730bb7b711a",
    measurementId: "G-BMLDRH6PEK"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch(err) {
        console.error(err);
        alert(err.message);
    }
}

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            authProvider: "local",
            email
        });
    } catch(err) {
        console.error(err);
        alert(err.message);
    }
}

const logout = () => {
    signOut(auth);
}

const searchById = async (id, collection) => {
    const snap = await getDoc(doc(db, collection, id))
    return snap.data();
}
  

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    searchById
}

