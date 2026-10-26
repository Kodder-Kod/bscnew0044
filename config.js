import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBHO3RzFTr87KwGxDaevdQ7k1YxfWDYLOU",
  authDomain: "chisendposproduction0012.firebaseapp.com",
  databaseURL: "https://chisendposproduction0012-default-rtdb.firebaseio.com",
  projectId: "chisendposproduction0012",
  storageBucket: "chisendposproduction0012.firebasestorage.app",
  messagingSenderId: "852526892202",
  appId: "1:852526892202:web:7d79ac4fb99ebbbc76bcd3",
  measurementId: "G-3V621HM9YH"
};


const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the modular SDK
const db = getDatabase(app);

// Initialize Firebase Auth with React Native persistence
const auth = getAuth(app);

export { db, auth };


