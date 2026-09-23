import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD24ohYX7jskrRJT0HW_FZrJE9aC9DAMlQ",
  authDomain: "nectarshell-d8790.firebaseapp.com",
  projectId: "nectarshell-d8790",
  storageBucket: "nectarshell-d8790.firebasestorage.app",
  messagingSenderId: "609174130206",
  appId: "1:609174130206:web:a2872ee8d6de1c7508e80f",
  measurementId: "G-F4GBLD02JT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
