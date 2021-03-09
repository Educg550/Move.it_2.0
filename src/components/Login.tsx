import styles from "../styles/components/Login.module.css";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { useContext } from "react";

export function Login() {
  const { closeLogin } = useContext(ChallengeContext);

  return (
    <div className={styles.bg}>
      <div className={styles.iconContainer}>
        <img src="icons/icon-login.svg" alt="" />
      </div>

      <div className={styles.container}>
        <img src="logo-full-white.svg" />

        <div className={styles.userInfo}>
          <h2>Bem-vindo</h2>

          <div className={styles.githubLogin}>
            <div>
              <img src="icons/github.svg" alt="Github" />
            </div>

            <span>Faça login com seu GitHub para começar</span>
          </div>

          <div className={styles.input}>
            <input
              type="text"
              placeholder="Digite seu username"
              className={styles.inputText}
              id="username"
              required
            />
            <button type="submit" onClick={closeLogin}>
              <img src="icons/next-arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
