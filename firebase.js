// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAatmAPc92kam9OMtF6RebSYQjAbBWpeIc",
  authDomain: "e-shiip.firebaseapp.com",
  projectId: "e-shiip",
  storageBucket: "e-shiip.appspot.com",
  messagingSenderId: "126192598963",
  appId: "1:126192598963:web:1e76a4aa8b2d2ed4f9d5c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);
