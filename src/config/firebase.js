import { initializeApp } from "firebase/app";
import { getAuth  , GoogleAuthProvider} from "firebase/auth";

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
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();