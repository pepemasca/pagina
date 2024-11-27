// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZbbRb5vRAeePzgefJ0S9wUcKY2oeKCLI",
  authDomain: "cryptopedia-com.firebaseapp.com",
  projectId: "cryptopedia-com",
  storageBucket: "cryptopedia-com.firebasestorage.app",
  messagingSenderId: "604907843383",
  appId: "1:604907843383:web:afcd4c82bf8555efc434b2",
  measurementId: "G-5B0SNS9WVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const projectAuth = getAuth(app);