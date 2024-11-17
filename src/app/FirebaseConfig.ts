// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1xFNFhcPSsloS6xvzYr3xzQDELmnV6PA",
  authDomain: "cvgenerator-data.firebaseapp.com",
  projectId: "cvgenerator-data",
  storageBucket: "cvgenerator-data.firebasestorage.app",
  messagingSenderId: "558380545338",
  appId: "1:558380545338:web:f2c783f318a1f0e8740c03",
  measurementId: "G-Y832XB8HZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);