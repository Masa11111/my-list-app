// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJRgKUyQRt76bBv0S3Hh70rl8K5ZBuz5k",
  authDomain: "mylistapp-9e24d.firebaseapp.com",
  projectId: "mylistapp-9e24d",
  storageBucket: "mylistapp-9e24d.firebasestorage.app",
  messagingSenderId: "794098365579",
  appId: "1:794098365579:web:6179dd151d8b5aabcb508e",
  measurementId: "G-8NSJLNN6KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export default db;