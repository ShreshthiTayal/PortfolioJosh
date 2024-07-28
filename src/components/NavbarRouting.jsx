import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import Rectangle from "../assets/Rectangle_181.png";

const Navbar = () => {
  const location = useLocation();
  const [navbarData, setNavbarData] = useState({
    logoUrl: "",
    headings: [],
  });
  const [currentTitle, setCurrentTitle] = useState("1");

  useEffect(() => {
    fetch("http://localhost:3001/navbarSkill")
      .then((response) => response.json())
      .then((data) => {
        setNavbarData(data);
        setCurrentTitle(
          headings.find((heading) => location.hash === heading.path) ||
            headings.find((heading) => location.pathname === heading.path)
        );
      })
      .catch((error) => console.error("Error fetching navbar data:", error));
  }, [location.pathname]);

  useEffect(() => {
    if (navbarData.headings.length > 0) {
      setCurrentTitle(
        navbarData.headings.find(
          (heading) => heading.path === location.pathname
        )?.id || "1"
      );
    }
  }, [location.pathname, navbarData.headings]);

  const handleScrollToSection = (path) => {
    if (path.startsWith("#")) {
      const section = document.getElementById(path.slice(1));

      console.log(path.slice(1), "yash");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="nav">
      <img src={Rectangle} width={158} height={76} alt="Logo" />
      <ul className="ul">
        {navbarData.headings.map((heading) => (
          <li key={heading.id} onClick={() => setCurrentTitle(heading.id)}>
            <Link to={heading.path}>
              <div
                className={`navbar_titles_container ${
                  currentTitle === heading.id ? "selected" : ""
                }`}
                onClick={() => handleScrollToSection(heading.path)}
              >
                <span className="navbar_titles">{heading.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
