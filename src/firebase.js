import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1GxCsUNfVYuE8vq5Z9u3kj8dHFval7Hc",
  authDomain: "firestore-9d6f3.firebaseapp.com",
  databaseURL: "https://firestore-9d6f3-default-rtdb.firebaseio.com",
  projectId: "firestore-9d6f3",
  storageBucket: "firestore-9d6f3.appspot.com",
  messagingSenderId: "937341367464",
  appId: "1:937341367464:web:a58d03272b5be0a0247e9d",
  measurementId: "G-9J07C0PJZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)