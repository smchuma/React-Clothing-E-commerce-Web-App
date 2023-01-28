import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer, Navbar, SignIn, SignUp } from "./components";
import { Home, Shop } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
