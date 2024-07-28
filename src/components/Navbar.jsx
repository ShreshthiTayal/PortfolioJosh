import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import Rectangle from "../assets/Rectangle_181.png";


const Navbar = () => {
  const location = useLocation();
  const [navbarData, setNavbarData] = useState({
    logoUrl: "",
    headings: []
  });
  const [currentTitle, setCurrentTitle] = useState("1");

  useEffect(() => {
    fetch("http://localhost:3001/navbar")
      .then((response) => response.json())
      .then((data) => {
        setNavbarData(data);
        setCurrentTitle(
          data.headings.find((heading) => heading.path === location.pathname)?.id || "1"
        );
      })
      .catch((error) => console.error("Error fetching navbar data:", error));
  }, [location.pathname]);

  useEffect(() => {
    if (navbarData.headings.length > 0) {
      setCurrentTitle(
        navbarData.headings.find((heading) => heading.path === location.pathname)?.id || "1"
      );
    }
  }, [location.pathname, navbarData.headings]);

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
