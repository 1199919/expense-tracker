// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKC5Dp4TtE-w_Gc3d0LmeTX4gV6PVgIcI",
  authDomain: "expense-tracker-9f976.firebaseapp.com",
  projectId: "expense-tracker-9f976",
  storageBucket: "expense-tracker-9f976.appspot.com",
  messagingSenderId: "694843519613",
  appId: "1:694843519613:web:096c06bc90738733d3b714",
  measurementId: "G-SN1BFPRQSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);








//Deployment
//firebase login
//firebase init
//firebase deploy