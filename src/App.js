import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Footer, Navbar } from "./components";
import { Home, Shop, About, Contact, SignIn } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
