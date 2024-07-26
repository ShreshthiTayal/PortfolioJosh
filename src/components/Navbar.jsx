import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import Rectangle from "../assets/Rectangle_181.png";

const headings = [
  { id: "1", title: "Home", path: "/" },
  { id: "2", title: "Skills", path: "/skills" },
  { id: "3", title: "Education", path: "/education" },
  { id: "4", title: "Projects", path: "/projects" },
  { id: "5", title: "Recommendations", path: "/recommendations" },
  { id: "6", title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [currentTitle, setCurrentTitle] = useState(
    headings.find((heading) => heading.path === location.pathname)?.id || "1"
  );

  return (
    <nav className="nav">
      <img src={Rectangle} width={158} height={76} alt="Logo" />
      <ul className="ul">
        {headings.map((heading, index) => (
          <li key={index} onClick={() => setCurrentTitle(heading.id)}>
            <Link to={heading.path}>
              <div
                className={`py-[10px] px-[14px] rounded-[10px] ${
                  currentTitle === heading.id ? "bg-yellow-300" : "bg-white"
                }`}
              >
                <a className="navbar_titles">{heading.title}</a>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
