import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logUser}>sign in</button>
    </div>
  );
};

export default SignIn;
