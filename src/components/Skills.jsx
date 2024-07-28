import { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import NavabarRouting from "./NavbarRouting";

const Skills = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/skills")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching skills data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavabarRouting />

      <div className={styles.skills}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.skillsContainer}>
          {data.sections.map((section, index) => (
            <div key={index} className={styles.skillsSection}>
              <h3 className={styles.sectionTitle}>{section.sectionTitle}</h3>
              {section.skills.map((item, idx) => (
                <div key={idx} className={styles.skill}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{item.skill}</span>
                    <span className={styles.level}>{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-yellow-400 h-2.5 rounded-full"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className={styles.addSkill}>{data.buttonText}</button>
      </div>
    </>
  );
};

export default Skills;
