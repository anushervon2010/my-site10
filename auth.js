// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbAQtdITbSRNp2mVfWabLAjjaQxN6WiFE",
  authDomain: "nexora-login-a8f52.firebaseapp.com",
  projectId: "nexora-login-a8f52",
  storageBucket: "nexora-login-a8f52.firebasestorage.app",
  messagingSenderId: "4507026842",
  appId: "1:4507026842:web:c40aa316ab500de3a8a623",
  measurementId: "G-NQZ1NGLW6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
