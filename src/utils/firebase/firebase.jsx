import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUser = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot);

  console.log(userSnapShot.exists());

  // check if user data does not exists

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  // if it does exist
  return userDocRef;
};
