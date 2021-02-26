// Importação do .module.css do componente específico
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  // Cálculo da posição da barra verde em relação à cinza, para exibição correta do nível de XP do usuário
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    // className não aceita hífen(-) !!!
    <div className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} XP
        </span>
      </div>
      <span>{experienceToNextLevel} XP</span>
    </div>
  );
}
