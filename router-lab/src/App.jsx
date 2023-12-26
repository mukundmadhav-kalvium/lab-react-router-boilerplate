import React from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* Perform some routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
