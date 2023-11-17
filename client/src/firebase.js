// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a4978.firebaseapp.com",
  projectId: "mern-estate-a4978",
  storageBucket: "mern-estate-a4978.appspot.com",
  messagingSenderId: "860919839146",
  appId: "1:860919839146:web:970ae8948c9f82be0553d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);