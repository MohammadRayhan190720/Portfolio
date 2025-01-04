// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCUciqaA7oSExZp6XbA5r4_bPOllluyik",
  authDomain: "portfolio-60254.firebaseapp.com",
  projectId: "portfolio-60254",
  storageBucket: "portfolio-60254.firebasestorage.app",
  messagingSenderId: "479098919479",
  appId: "1:479098919479:web:508853e22f044d43d1bdb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
