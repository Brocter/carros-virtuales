// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "flota-de-autos",
  storageBucket: "flota-de-autos.appspot.com",
  messagingSenderId: "283787291244",
  appId: "1:283787291244:web:10d0382f9d8337a3f90649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

