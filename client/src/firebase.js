// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "digitalized-ethnobotany.firebaseapp.com",
  projectId: "digitalized-ethnobotany",
  storageBucket: "digitalized-ethnobotany.appspot.com",
  messagingSenderId: "1050081704915",
  appId: "1:1050081704915:web:4149926a0fab4e53294d26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);