// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzG6S8nxK600lkBOFTA9Z8Fa1OQZC39KE",
  authDomain: "e-com-master-c246f.firebaseapp.com",
  projectId: "e-com-master-c246f",
  storageBucket: "e-com-master-c246f.firebasestorage.app",
  messagingSenderId: "115988415714",
  appId: "1:115988415714:web:41833f1247bf07f9658abb",
  measurementId: "G-13CCMG2S32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// Fonction pour ouvrir la popup Google
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export default signInWithGooglePopup;


