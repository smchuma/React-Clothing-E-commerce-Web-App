import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer, Navbar } from "./components";
import SignUp from "./components/SignUp/SignUp";
import { Home, Shop, About, Account, SignIn } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
