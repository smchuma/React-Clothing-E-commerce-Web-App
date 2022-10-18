import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";

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
    <>
      <div className="form-input">
        <h1>Login</h1>
        <div className="form">
          <form>
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button>SIgn In</button>
          </form>
          <div className="google-btn">
            <i class="fa-brands fa-google"></i>
            <button className="google" onClick={googleUser}>
              Sign in with Google
            </button>
          </div>
          <Link to="/sign-up">
            <h5>Create an Account</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
