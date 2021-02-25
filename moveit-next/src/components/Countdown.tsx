import styles from "../styles/components/Countdown.module.css";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { useState, useEffect, useContext } from "react";

//Variável que para a execução do countdown quando o usuário clicar em Abandonar ciclo
let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  //Math.floor() - arredonda o número para sua versão menor (Ex: 1.5 se torna 1 ao invés de 2)
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  //padStart() - nesse caso, verifica se o número tem 2 dígitos, caso contrário, vai passar o 0 para o início do número (Ex: 5 => 05)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    //setHasFinished(true);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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
        { isActive ? (
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
