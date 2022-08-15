// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN2sucYIF8yKPXMhQrZvMUZ2u4FWCcHcs",
  authDomain: "insta-reels-clone-1044c.firebaseapp.com",
  projectId: "insta-reels-clone-1044c",
  storageBucket: "insta-reels-clone-1044c.appspot.com",
  messagingSenderId: "626548215119",
  appId: "1:626548215119:web:a17b40a7dbbff8afac493a",
  measurementId: "G-46L52THR6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
export { auth };
