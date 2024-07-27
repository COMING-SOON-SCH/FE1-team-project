// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "clubproject-3a751.firebaseapp.com",
  projectId: "clubproject-3a751",
  storageBucket: "clubproject-3a751.appspot.com",
  messagingSenderId: "46325601848",
  appId: "1:46325601848:web:913a7e6ba82bd0f4b9b8cd",
  measurementId: "G-E0BSBMZRK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);