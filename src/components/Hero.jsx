import React, { useEffect, useState } from "react";
import heroImage from "../assets/images/right-hero-section.png";
import { FaArrowRight } from "react-icons/fa6";
import shapeOne from "../assets/images/1.png";
import shapeTwo from "../assets/images/2.png";
import shapeThree from "../assets/images/3.png";
import shapeFour from "../assets/images/4.png";
import shapeFive from "../assets/images/5.png";

const Hero = () => {
  const [heroData, setHeroData] = useState({
    title: "",
    subtitle: "",
    description: "",
    buttonText: "",
  });

  const handleResize = () => {
    const rightColumn = document.querySelector(".right-column");
    if (window.innerWidth < 769) {
      rightColumn.style.display = "none";
    } else {
      rightColumn.style.display = "block";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/hero")
      .then((response) => response.json())
      .then((data) => setHeroData(data))
      .catch((error) => console.error("Error fetching hero data:", error));
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row p-8 md:p-32 bg-cover bg-center bg-no-repeat">
      <div className="relative z-50">
        <div className="absolute top-10 left-9">
          <img src={shapeOne} alt="" />
        </div>
        <div className="absolute top-10 right-9">
          <img src={shapeTwo} alt="" />
        </div>
        <div className="absolute bottom-2">
          <img src={shapeThree} alt="" />
        </div>
        <div className="absolute top-10 left-9">
          <img src={shapeFour} alt="" />
        </div>
        <div className="absolute top-10 left-9">
          <img src={shapeFive} alt="" />
        </div>
      </div>
      {/* Left Column */}
      <div className="md:w-1/2 m-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 ml-5">
          {heroData.title}
          <br />
          <span className="text-yellow-500">{heroData.subtitle}</span>
        </h1>
        <p className="text-2l mb-4 ml-5">{heroData.description}</p>
        <button className="hover:bg-orange-300 hover:text-white bg-white border-2 border-orange-300 text-orange-300 font-bold py-2 px-6 ml-10 mt-10 rounded flex">
          <div>{heroData.buttonText}</div>
          <div className="pt-1.5 pl-2">
            <FaArrowRight />
          </div>
        </button>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 p-4 flex justify-center items-center right-column">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
