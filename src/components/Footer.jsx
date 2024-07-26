import styles from "./Footer.module.css"
import footerLogoOne from "../assets/images/footer-logo-one.png";
import footerLogoTwo from "../assets/images/footer-logo-two.png";
import footerLogoThree from "../assets/images/footer-logo-three.png";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const footerData = [
    {
      content: [
        { image: footerLogoOne, text: "4.5/5 rating on Lorem " },
        { image: footerLogoTwo, text: "9/10 rating on Ipsum" },
        { image: footerLogoThree, text: "4.5/5 Rating on dorel" },
      ],
    },
    {
      content: [
        {
          header: "Quick Links",
          links: ["Home", "Skills", "Education", "Projects", "Recommendations"],
        },
      ],
    },
    {
      content: [
        {
          header: "Portfolio",
          links: [
            "Frontend Development",
            "Backend Development",
            "Website Design",
            "Machine Learning",
            "Problem Solving & DSA",
          ],
        },
      ],
    },
    {
      content: [
        {
          header: "Connect",
          logos: [
            <FaLinkedin key="linkedin" size={25} />,
            <FaInstagramSquare key="instagram" size={25} />,
            <FaFacebookSquare key="facebook" size={25} />,
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className={styles.Mainlogo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.footer}>
        {footerData.map((section, index) => (
          <div key={index} className={styles.section}>
            {section.content.map((item, idx) => (
              <div key={idx} className={styles.content}>
                {item.image && (
                  <div className={styles.imageContainer}>
                    <img
                      src={item.image}
                      alt="Image"
                      className={styles.image}
                    />
                    <p className={styles.text}>{item.text}</p>
                  </div>
                )}
                {item.header && (
                  <h4 className={styles.header}>{item.header}</h4>
                )}
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
                  <>
                    <div className={styles.logos}>
                      {item.logos.map((logo, i) => (
                        <div key={i} className={styles.logo}>
                          {logo}
                        </div>
                      ))}
                    </div>
                  </>
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
