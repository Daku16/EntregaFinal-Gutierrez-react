// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "prueba-df6fd.firebaseapp.com",
    projectId: "prueba-df6fd",
    storageBucket: "prueba-df6fd.appspot.com",
    messagingSenderId: "542029228030",
    appId: "1:542029228030:web:53daf5c61c3e22f5eac2af"
};

// Initialize Firebase
initializeApp(firebaseConfig);

