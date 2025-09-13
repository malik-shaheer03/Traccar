// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx6_ehwiv1g9_IT2dV7m7qOxL8nUCTavA",
  authDomain: "traccar-4f84d.firebaseapp.com",
  projectId: "traccar-4f84d",
  storageBucket: "traccar-4f84d.firebasestorage.app",
  messagingSenderId: "851401807645",
  appId: "1:851401807645:web:b69cef6d9dcafe35b333f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);