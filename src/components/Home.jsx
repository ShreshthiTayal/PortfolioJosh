import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Hero from './Hero';
import Footer from './Footer';
import Projects from './Projects';
import Skills from './Skills'
const App = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <div className='flex  bg-[#F0F0F6] justify-around'>   <ContactForm/>
      <ContactInfo/>
      </div>
    </div>
  )
}

export default App
