// Importação do .module.css do componente específico
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ProfileData.module.css'

export function ProfileData () {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileData}>
            <img src="https://github.com/Educg550.png" alt="Eduardo Cruz Guedes" />
            <div>
                <strong>Educg550</strong>
                <p>
                    <img src="icons/level.svg" alt=""/> 
                    Level {level}
                </p>
            </div>
        </div>
    );
}