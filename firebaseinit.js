// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuUW7ZPDXrmoS7-3QCUcqDuQ75KdX4dFE",
  authDomain: "busybuy-62bd8.firebaseapp.com",
  projectId: "busybuy-62bd8",
  storageBucket: "busybuy-62bd8.appspot.com",
  messagingSenderId: "601505371318",
  appId: "1:601505371318:web:2880875d7aac38856ec217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

