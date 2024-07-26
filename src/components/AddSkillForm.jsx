import { useState } from 'react';
import styles from './AddSkillForm.module.css';

const AddSkillForm = () => {
  const [domain, setDomain] = useState('');
  const [skills, setSkills] = useState([]);

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']); // Add a new empty skill row
  };

  const handleRemoveSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>Add Skill</div>
      <div className={styles.formRow}>
        <label className={styles.formLabel}>Domain</label>
        <input
          type="text"
          className={styles.formInput}
          value={domain}
          onChange={handleDomainChange}
        />
      </div>
      <div className={styles.formRow}>
        <label className={styles.formLabel}>Skills</label>
        {skills.map((skill, index) => (
          <div className={styles.skillRow} key={index}>
            <input
              type="text"
              className={styles.skillInput}
              value={skill}
              onChange={(event) => handleSkillChange(index, event.target.value)}
            />
            <button className={styles.removeButton} onClick={() => handleRemoveSkill(index)}>
              -
            </button>
          </div>
        ))}
        <button className={styles.addButton} onClick={handleAddSkill}>
          Add Skill
        </button>
      </div>
      <div className={styles.formButtons}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.saveButton}>Save</button>
      </div>
    </div>
  );
};

export default AddSkillForm;
