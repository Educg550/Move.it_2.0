// Importação do .module.css do componente específico
import styles from '../styles/components/ExperienceBar.module.css'
// import { useState } from "react";
// const [xp, setXp] = useState(0);

export function ExperienceBar() {
  return (
    // className não aceita hífen(-) !!!
    <div className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className={styles.currentExperience} style={{ left: "50%" }}>
          300px
        </span>
      </div>
      <span>600 XP</span>
    </div>
  );
}
