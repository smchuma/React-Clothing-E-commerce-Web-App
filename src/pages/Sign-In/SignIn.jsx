import React from "react";
import GoogleButton from "react-google-button";

import {
  createUser,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const googleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUser(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      {/* <button>sign in</button> */}
      <GoogleButton onClick={googleUser} />
    </div>
  );
};

export default SignIn;
