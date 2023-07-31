// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMCWlVan833NWJZkXB9P1D83cjAsqbV5U",
  authDomain: "cocdoi-75bdb.firebaseapp.com",
  projectId: "cocdoi-75bdb",
  storageBucket: "cocdoi-75bdb.appspot.com",
  messagingSenderId: "749142647328",
  appId: "1:749142647328:web:6949c7cede94d603325245",
  measurementId: "G-D0SXQ5HD5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);
