import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Recommendations from './Recommendations';
const App = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <Recommendations/>
      <div className='flex  bg-[#F0F0F6] justify-around'>   <ContactForm/>
      <ContactInfo/>
      </div>
    </div>
  )
}

export default App
