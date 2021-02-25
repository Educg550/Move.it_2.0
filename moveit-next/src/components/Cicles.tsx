import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Cicles.module.css'

export function Cicles () {
    const { challengesCompleted } = useContext(ChallengeContext);

    return (
        <div className={styles.ciclesData}>
            <span>
                Desafios Completos
            </span>
            <span>
                {challengesCompleted}
            </span>
        </div>
    );
}