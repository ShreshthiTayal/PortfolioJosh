import React, { useEffect, useState } from "react";
import imageProject1 from "../assets/images/card1.png";
import imageProject2 from "../assets/images/card2.png";
import imageProject3 from "../assets/images/card3.png";
import imageProject4 from "../assets/images/card4.png";
import imageProject5 from "../assets/images/card5.png";
import imageProject6 from "../assets/images/card6.png";
import NavbarRouting from "./NavbarRouting";
import { useLocation } from "react-router-dom";

const imageMap = {
  "card1.png": imageProject1,
  "card2.png": imageProject2,
  "card3.png": imageProject3,
  "card4.png": imageProject4,
  "card5.png": imageProject5,
  "card6.png": imageProject6,
};

const Projects = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    projects: [],
  });

  useEffect(() => {
    // Fetch the projects data from the backend
    fetch("http://localhost:3001/projects")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching projects data:", error));
  }, []);
  const location = useLocation();

  return (
    <>
      {location.pathname === "/projects" && <NavbarRouting />}
      <div className="bg-[#F0F0F6]" id="projects">
        <h1 className="text-center font-medium text-[2rem] mx-auto mb-5">
          {data.title}
        </h1>
        <p className="text-center text-[#767676] my-5 w-[600px] mx-auto">
          {data.description}
        </p>
        <div className="flex w-[1245px] flex-wrap gap-[45px] mb-14 mx-auto">
          {data.projects.map((project, index) => (
            <div
              className="w-[385px] border-[2px] rounded-[12px] flex flex-col gap-1 bg-white boxShadow-customLight h-[432.5px]"
              key={index}
            >
              <img
                className="w-[385px] h-[256px]"
                src={imageMap[project.url]}
                alt={`Project ${index + 1}`}
              />
              <h1 className="font-medium text-2xl mx-3">{project.heading}</h1>
              <p className="text-[#767676] text-[18px] mx-3">{project.desc}</p>
              <div className="flex gap-2 flex-wrap mx-3">
                {project.tags.map((tag, idx) => (
                  <div
                    className="max-w-max px-4 py-1 rounded-3xl bg-[#EFEFEF]"
                    key={idx}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
