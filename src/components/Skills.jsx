import styles from './Skills.module.css';

const Skills = () => {
  const data = {
    title: "Skills & Languages",
    description: "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum",
    buttonText: "ADD SKILL",
    sections: [
      {
        sectionTitle: "Front End Development",
        skills: [
          { skill: "HTML", level: 90 },
          { skill: "CSS", level: 85 },
          { skill: "JS", level: 80 },
          { skill: "PHP", level: 75 },
          { skill: "WordPress", level: 85 },
        ]
      },
      {
        sectionTitle: "Languages",
        skills: [
          { skill: "Hindi", level: 90 },
          { skill: "English", level: 85 },
        ]
      },
      {
        sectionTitle: "Back End Development",
        skills: [
          { skill: "NodeJS", level: 90 },
          { skill: "SSR", level: 85 },
        ]
      },
      {
        sectionTitle: "Front End Development",
        skills: [
          { skill: "HTML", level: 90 },
          { skill: "CSS", level: 85 },
          { skill: "JS", level: 80 },
          { skill: "PHP", level: 75 },
          { skill: "WordPress", level: 85 },
        ]
      },
      {
        sectionTitle: "Languages",
        skills: [
          { skill: "Hindi", level: 90 },
          { skill: "English", level: 85 },
        ]
      },
      {
        sectionTitle: "Back End Development",
        skills: [
          { skill: "NodeJS", level: 90 },
          { skill: "SSR", level: 85 },
        ]
      }
    ]
  };

  return (
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
  );
};

export default Skills;
