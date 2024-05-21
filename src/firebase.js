// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
 
require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqIiAkXpw_QEVy2rXLvo4plwLWwTh1bys",
  authDomain: "designs-f9260.firebaseapp.com",
  projectId: "designs-f9260",
  storageBucket: "designs-f9260.appspot.com",
  messagingSenderId: "862138133979",
  appId: "1:862138133979:web:98c0c14f2476a3274f4bfe",
  measurementId: "G-NHWF4J6N81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
