import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Hero from "./Hero";
import Projects from "./Projects";
import Recommendations from "./Recommendations";
import Navbar from "./Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Recommendations />
      <div className="flex  bg-[#F0F0F6] justify-around" id="contact">
        {" "}
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default App;
