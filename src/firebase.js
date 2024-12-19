// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "van-estate.firebaseapp.com",
  projectId: "van-estate",
  storageBucket: "van-estate.firebasestorage.app",
  messagingSenderId: "488984294538",
  appId: "1:488984294538:web:cc6afc1dc93ffb8adae973"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);