import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArW4qACXiIy177XayvcytXEXNnlPzsLGk",
  authDomain: "workaholic-74867.firebaseapp.com",
  projectId: "workaholic-74867",
  storageBucket: "workaholic-74867.appspot.com",
  messagingSenderId: "438068772159",
  appId: "1:438068772159:web:83ba583b49e6832630278a",
  measurementId: "G-JWNLXS4V5S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
