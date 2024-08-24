// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvK7AAebk9kGoR6QWfaQAnv_LjnGqcoSA",
  authDomain: "pantrytracker-ca7d2.firebaseapp.com",
  projectId: "pantrytracker-ca7d2",
  storageBucket: "pantrytracker-ca7d2.appspot.com",
  messagingSenderId: "279008889075",
  appId: "1:279008889075:web:9f4436024029b250260f86",
  measurementId: "G-KCHX72X45G"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }