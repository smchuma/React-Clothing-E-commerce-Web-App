import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About us/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
