// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.inv.VITE_apiKey,
  authDomain: import.meta.inv.VITE_authDomain,
  projectId: import.meta.inv.VITE_projectId,
  storageBucket: import.meta.inv.VITE_storageBucket,
  messagingSenderId: import.meta.inv.VITE_messagingSenderId,
  appId: import.meta.inv.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
