import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";

import {
  signInWithGooglePopup,
  signInUserWithEmail,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  //!sign in with google

  const googleUser = async () => {
    await signInWithGooglePopup();
  };

  const initialFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(initialFormFields);
  };

  //! sign in with email and password

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmail(email, password);

      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <>
      <div className="form-input">
        <h1>Login</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              required
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
            <button>SIgn In</button>
          </form>
          <div className="google-btn">
            <i className="fa-brands fa-google"></i>
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
