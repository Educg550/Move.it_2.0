// Importação do .module.css do componente específico
import styles from '../styles/components/ProfileData.module.css'

export function ProfileData () {
    return (
        <div className={styles.profileData}>
            <img src="https://github.com/Educg550.png" alt="Eduardo Cruz Guedes" />
            <div>
                <strong>Educg550</strong>
                <p>
                    <img src="icons/level.svg" alt=""/> 
                    Level 1
                </p>
            </div>
        </div>
    );
}