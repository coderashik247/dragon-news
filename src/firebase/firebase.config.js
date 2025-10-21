// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBjFR3nHkU8wNzaBaKSiQVpIl6CbQZmmQ",
  authDomain: "dragon-news-df8d0.firebaseapp.com",
  projectId: "dragon-news-df8d0",
  storageBucket: "dragon-news-df8d0.firebasestorage.app",
  messagingSenderId: "504574387111",
  appId: "1:504574387111:web:4d15af6677e85248cb0c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);