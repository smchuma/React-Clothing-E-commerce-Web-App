import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaN-bSyiA2DBjB55u8w68sUixVgZVtBd8",
  authDomain: "clothing-ecommerce-c821c.firebaseapp.com",
  projectId: "clothing-ecommerce-c821c",
  storageBucket: "clothing-ecommerce-c821c.appspot.com",
  messagingSenderId: "892202104395",
  appId: "1:892202104395:web:152a09b017b8d349067fce",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
