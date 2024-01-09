// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxEJg23uncgtFlNp2CrcR-i2_my5Vnj0g",
  authDomain: "my-cv-63500.firebaseapp.com",
  projectId: "my-cv-63500",
  storageBucket: "my-cv-63500.appspot.com",
  messagingSenderId: "585083181298",
  appId: "1:585083181298:web:e2b174a28d6efbc3dc186b",
  measurementId: "G-PR1PLTJ2PJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
export { app, storage, db };
