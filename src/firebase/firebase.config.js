// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjFIuwYTRPMrRpw09pqNsT2lU5RRNwKLc",
  authDomain: "app-store-6a7c1.firebaseapp.com",
  projectId: "app-store-6a7c1",
  storageBucket: "app-store-6a7c1.firebasestorage.app",
  messagingSenderId: "1014787325453",
  appId: "1:1014787325453:web:c3af86b4c8471db650df44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app