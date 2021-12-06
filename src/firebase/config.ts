// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2c18TESpDHcKHNrV6axf1xEMQEp0ozmY",
  authDomain: "customtables-e78ad.firebaseapp.com",
  projectId: "customtables-e78ad",
  storageBucket: "customtables-e78ad.appspot.com",
  messagingSenderId: "500491566702",
  appId: "1:500491566702:web:0ef55d441a073a7930b07f",
  measurementId: "G-XGJ6K85VVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
