// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3bFVyTQRDM6i9tt8Yvn08Q1aATHyfA9Y",
  authDomain: "portfolio-blog-eec43.firebaseapp.com",
  projectId: "portfolio-blog-eec43",
  storageBucket: "portfolio-blog-eec43.firebasestorage.app",
  messagingSenderId: "105958087801",
  appId: "1:105958087801:web:a98b3ffebdc6718a3d48a8",
  measurementId: "G-1FEMQFP4Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth