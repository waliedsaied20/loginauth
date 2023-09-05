// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_60B0WQ4Xy2NdwqumT3Nr2KD4ruJlwfE",
  authDomain: "loginone-a0966.firebaseapp.com",
  projectId: "loginone-a0966",
  storageBucket: "loginone-a0966.appspot.com",
  messagingSenderId: "168708569645",
  appId: "1:168708569645:web:0bd873f1900ebc7aff96a4",
  measurementId: "G-9B1XP3MPG8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth =  getAuth(app)
export const analytics = getAnalytics(app);

