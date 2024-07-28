// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "clubproject-ad699.firebaseapp.com",
  projectId: "clubproject-ad699",
  storageBucket: "clubproject-ad699.appspot.com",
  messagingSenderId: "887959208594",
  appId: "1:887959208594:web:3f035d92d43c17f3d99c4b",
  measurementId: "G-2QKNK6467V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);