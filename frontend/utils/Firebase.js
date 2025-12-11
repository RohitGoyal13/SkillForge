import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "auth-1f36b.firebaseapp.com",
  projectId: "auth-1f36b",
  storageBucket: "auth-1f36b.firebasestorage.app",
  messagingSenderId: "114927687759",
  appId: "1:114927687759:web:86279f4c0a810e32af323a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}