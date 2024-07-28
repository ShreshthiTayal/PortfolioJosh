// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
// import Hero from './components/Hero';
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Recommendations from "./components/Recommendations";
import NavbarRouting from "./components/NavbarRouting";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/skills" element={<Skills />} />
          <Route
            path="/contact"
            element={
              <>
                <NavbarRouting />
                <div className="flex bg-[#F0F0F6] justify-around">
                  <ContactForm />
                  <ContactInfo />
                </div>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
