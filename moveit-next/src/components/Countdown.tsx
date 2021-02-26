import styles from "../styles/components/Countdown.module.css";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { useContext } from "react";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  //padStart() - nesse caso, verifica se o número tem 2 dígitos, caso contrário, vai passar o 0 para o início do número (Ex: 5 => 05)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <div>
        {/* Botão depois de finalizar o ciclo  (disabled - não clicável)*/}
        {hasFinished ? (
          <button disabled className={styles.countdownButton}>
            Ciclo encerrado
          </button>
        ) : (
          <>
            {/* Variabilidade entre botões de iniciar e abandonar através da variável 'isActive' */}
            {isActive ? (
              <button
                type="button"
                className={`${styles.countdownButtonActive} ${styles.countdownButton}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
              </button>
            ) : (
              <button
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}
              >
                Iniciar um novo ciclo
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
