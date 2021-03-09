import React, { createContext, useState, ReactNode, useEffect } from "react";
import { LevelUpModal } from "../components/LevelUpModal";
import { Login } from "../components/Login";
import Cookies from "js-cookie";
import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challengesCompleted: number;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  closeLogin: () => void;
  username: string;
}

// Definição do tipo de elemento children que será importado como argumento na função ChallengeProvider
interface ChallengeProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

// Criação do contexto ChallengeContext com base no formato da interface ChallengeContextData
export const ChallengeContext = createContext({} as ChallengeContextData);

// ...rest = rest operator - recebe o resto das propriedades de uma interface ou type
export function ChallengeProvider({
  children,
  ...rest
}: ChallengeProviderProps) {
  // ?? - se não existir rest.level, ele colocará o valor da direita
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const [isFirstLogin, setIsFirstLogin] = useState(true);
  const [username, setUsername] = useState("");

  // Cálculo do XP necessário para subir de nível
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  // Executa a função uma única vez assim que o componente for exibido em tela, por conta do array [] vazio
  useEffect(() => {
    // Solicita permissão para exibir notificações, API do próprio Browser
    Notification.requestPermission();
  }, []);

  // Salva os dados nos cookies do navegador assim que eles mudam
  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function closeLogin() {
    const usernametxt = String(document.getElementById("username").value);

    if (usernametxt != "") {
      setUsername(usernametxt);
      setIsFirstLogin(false);
    } else {
      alert("Nome de usuário não preenchido!");
    }
  }

  function startNewChallenge() {
    // Randomização da chamada de um novo desafio do arquivo challenges.json na raíz do projeto
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    // Reprodução de áudio de notificação, API própria do Browser
    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio 🎉", {
        body: `Valendo ${challenge.amount} XP!`,
      });
    }
  }

  // Função utilizada quando o usuário falha um desafio
  function resetChallenge() {
    setActiveChallenge(null);
  }

  // Após completar um desafio
  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
        closeLogin,
        username,
      }}
    >
      {/* <Component {...pageProps}> trazido como 'children' da função ChallengeProvider */}
      {children}

      {/* Exibe o componente somente se o usuário subir de nível */}
      {isLevelUpModalOpen && <LevelUpModal />}

      {isFirstLogin && <Login />}
    </ChallengeContext.Provider>
  );
}
