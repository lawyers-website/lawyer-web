// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjwhdB294BvJ19n0757wH0GpxS-tLSKKo",
  authDomain: "chat-app-2899a.firebaseapp.com",
  projectId: "chat-app-2899a",
  storageBucket: "chat-app-2899a.appspot.com",
  messagingSenderId: "956265327514",
  appId: "1:956265327514:web:f60fd0ac987e1f6543a823",
  measurementId: "G-SG6HRMK0PW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
