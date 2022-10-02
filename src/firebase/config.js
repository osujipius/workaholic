import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjEyzqaL9fHX4f0_qdzNApH6ePZ6aNKZU",
  authDomain: "workaholic-9c059.firebaseapp.com",
  projectId: "workaholic-9c059",
  storageBucket: "workaholic-9c059.appspot.com",
  messagingSenderId: "924418389132",
  appId: "1:924418389132:web:8db103a1b676642fbb37a9",
  measurementId: "G-JTVMXJWFDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
