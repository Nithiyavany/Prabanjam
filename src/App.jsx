import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homebar from "./components/Homebar";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import UserPolicy from "./Pages/UserPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Error from "./Pages/Error";
import "./App.css";

function App() {
  return (
    <div id="root">
      <div className="app-container">
        <Navbar />
        <Homebar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/userpolicy" element={<UserPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
