import React from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <div className='flex  bg-[#F0F0F6] justify-around'>   <ContactForm/>
      <ContactInfo/>
      </div>
    <Footer/>
    </div>
  )
}

export default App
