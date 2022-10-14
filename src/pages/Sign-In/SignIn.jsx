import React from "react";
import {
  createUser,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUser(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logUser}>sign in</button>
    </div>
  );
};

export default SignIn;
