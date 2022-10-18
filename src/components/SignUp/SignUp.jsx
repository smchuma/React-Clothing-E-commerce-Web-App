import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser, createUserWithEmail } from "../../utils/firebase/firebase";
import "./SignUp.scss";

const SignUp = () => {
  const initialFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    try {
      const { user } = await createUserWithEmail(email, password);
      await createUser(user, { displayName });
      resetForm();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("cannot create user, email already exist");
      } else {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <div className="form-input">
        <h1>Create an account</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Your name</label>
            <input
              type="text"
              placeholder="Name"
              required
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={handleChange}
              name="email"
              value={email}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />
            <button type="submit">Sign Up</button>
          </form>
          <Link to="/sign-in">
            <h5>Already a User? Login</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
