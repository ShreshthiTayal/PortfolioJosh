import styles from "./Footer.module.css";
import footerLogoOne from "../assets/images/footer-logo-one.png";
import footerLogoTwo from "../assets/images/footer-logo-two.png";
import footerLogoThree from "../assets/images/footer-logo-three.png";
import { FaLinkedin, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/footerData")
      .then((response) => {
        console.log("Footer data:", response.data);
        setFooterData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      });
  }, []);

  const iconMap = {
    FaLinkedin: <FaLinkedin key="linkedin" size={25} />,
    FaInstagramSquare: <FaInstagramSquare key="instagram" size={25} />,
    FaFacebookSquare: <FaFacebookSquare key="facebook" size={25} />,
  };

  const imageMap = {
    "footer-logo-one.png": footerLogoOne,
    "footer-logo-two.png": footerLogoTwo,
    "footer-logo-three.png": footerLogoThree,
  };

  return (
    <>
      <div className={styles.Mainlogo}>
        <img src={logo} alt="Main Logo" />
      </div>
      <div className={styles.footer}>
        {footerData.map((section, index) => (
          <div key={index} className={styles.section}>
            {section.content.map((item, idx) => (
              <div key={idx} className={styles.content}>
                {item.image && (
                  <div className={styles.imageContainer}>
                    <img
                      src={imageMap[item.image]}
                      alt="Footer Logo"
                      className={styles.image}
                    />
                    <p className={styles.text}>{item.text}</p>
                  </div>
                )}
                {item.header && <h4 className={styles.header}>{item.header}</h4>}
                {item.links && (
                  <ul className={styles.links}>
                    {item.links.map((link, i) => (
                      <li key={i} className={styles.linkItem}>
                        {link}
                      </li>
                    ))}
                  </ul>
                )}
                {item.logos && (
                  <div className={styles.logos}>
                    {item.logos.map((logo, i) => (
                      <div key={i} className={styles.logo}>
                        {iconMap[logo]}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
