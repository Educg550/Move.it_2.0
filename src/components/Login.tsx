import styles from "../styles/components/Login.module.css";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

interface ProfileSubmit {
  username: string;
}

export function Login() {
  const { closeLogin, changeUsername } = useContext(ChallengeContext);
  const { register, handleSubmit } = useForm<ProfileSubmit>();

  const onSubmit = handleSubmit((data) => {
    const usernametxt = data.username;
    console.log(usernametxt)

    if (usernametxt != "") {
      changeUsername(usernametxt);
      closeLogin();
    } else {
      alert("Nome de usuário não preenchido!");
    }
  })

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

          <form className={styles.input} onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Digite seu username"
              className={styles.inputText}
              id="username"
              name="username"
              ref={register}
              required
            />
            <button type="submit">
              <img src="icons/next-arrow.svg" alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
