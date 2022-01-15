import { initializeApp } from "firebase/app";
import {getFirestore,collection,getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAQ_hleYQ-KIx58mRLwg71VOYyZZ7T7XWk",
  authDomain: "dcx-portfolio.firebaseapp.com",
  projectId: "dcx-portfolio",
  storageBucket: "dcx-portfolio.appspot.com",
  messagingSenderId: "425744691688",
  appId: "1:425744691688:web:7672774779fb634e11b45d",
  measurementId: "G-RPCPTTPVZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export default db;


