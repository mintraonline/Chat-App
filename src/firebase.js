import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOoWsAM7K1eFQnVOitJL9NFpgI2rVqd0Y",
  authDomain: "chatapp-872cd.firebaseapp.com",
  projectId: "chatapp-872cd",
  storageBucket: "chatapp-872cd.firebasestorage.app",
  messagingSenderId: "73073240059",
  appId: "1:73073240059:web:63b491a926b64a890b4d5e",
  measurementId: "G-T97CF1QLFW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
