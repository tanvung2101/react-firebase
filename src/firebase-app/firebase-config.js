// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5M8WxWZcyVm87S_fjB7wUSxT-BJG0YIM",
  authDomain: "monkey-blogging-feb92.firebaseapp.com",
  projectId: "monkey-blogging-feb92",
  storageBucket: "monkey-blogging-feb92.appspot.com",
  messagingSenderId: "858023270929",
  appId: "1:858023270929:web:a3918d257683cc7b672fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)