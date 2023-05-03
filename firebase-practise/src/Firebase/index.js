// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSFTgvUPPwGzuwqvyTnCIqLhSSMCE0P94",
  authDomain: "ayoub-1-71bdb.firebaseapp.com",
  projectId: "ayoub-1-71bdb",
  storageBucket: "ayoub-1-71bdb.appspot.com",
  messagingSenderId: "205898398112",
  appId: "1:205898398112:web:7f8e14a774005583c0ccc5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();