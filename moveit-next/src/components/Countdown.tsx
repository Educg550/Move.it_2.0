import styles from "../styles/components/Countdown.module.css";
import { useState, useEffect } from "react";

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  //Math.floor() - arredonda o número para sua versão menor (Ex: 1.5 se torna 1 ao invés de 2)
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  //padStart() - nesse caso, verifica se o número tem 2 dígitos, caso contrário, vai passar o 0 para o início do número (Ex: 5 => 05)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setActive(!active);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }, [active, time])

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
        <button type="button" className={styles.countdownButton} onClick={startCountdown}>
          Iniciar um ciclo
        </button>
      </div>
    </div>
  );
}
