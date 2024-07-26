import styles from './Skills.module.css';

const Skills = () => {
  const data = {
    frontend: [
      { skill: "HTML", level: 90 },
      { skill: "CSS", level: 85 },
      { skill: "JS", level: 80 },
      { skill: "PHP", level: 75 },
      { skill: "WordPress", level: 85 },
    ],
    languages: [
      { skill: "Hindi", level: 90 },
      { skill: "English", level: 85 },
    ],
    backend: [
      { skill: "NodeJS", level: 90 },
      { skill: "SSR", level: 85 },
    ],
  };

  return (
    <div className={styles.skills}>
      <h2 className={styles.title}>Skills & Languages</h2>
      <p className={styles.description}>Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum</p>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Front End Development</h3>
          {data.frontend.map((item, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{item.skill}</span>
                <span className={styles.level}>{item.level}%</span>
              </div>
              <div className={styles.progress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Languages</h3>
          {data.languages.map((item, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{item.skill}</span>
                <span className={styles.level}>{item.level}%</span>
              </div>
              <div className={styles.progress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Back End Development</h3>
          {data.backend.map((item, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{item.skill}</span>
                <span className={styles.level}>{item.level}%</span>
              </div>
              <div className={styles.progress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Front End Development</h3>
          {data.frontend.map((item, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{item.skill}</span>
                <span className={styles.level}>{item.level}%</span>
              </div>
              <div className={styles.progress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Languages</h3>
          {data.languages.map((item, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{item.skill}</span>
                <span className={styles.level}>{item.level}%</span>
              </div>
              <div className={styles.progress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Back End Development</h3>
          {data.backend.map((item, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{item.skill}</span>
                <span className={styles.level}>{item.level}%</span>
              </div>
              <div className={styles.progress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <button className={styles.addSkill}>Add Skill</button>
    </div>
  );
};
export default Skills;