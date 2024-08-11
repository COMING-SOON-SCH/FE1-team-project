// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "fe1-project.firebaseapp.com",
  projectId: "fe1-project",
  storageBucket: "fe1-project.appspot.com",
  messagingSenderId: "61111797552",
  appId: "1:61111797552:web:b81c3bae674baf52d86af5",
  measurementId: "G-RT1G9RDHWL"
};


const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);