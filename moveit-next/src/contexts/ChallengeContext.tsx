import { createContext, useState, ReactNode } from "react";
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number;
}

interface ChallengeContextData {
    level: number, 
    levelUp: () => void,
    currentExperience: number,
    challengesCompleted: number,
    startNewChallenge: () => void,
    activeChallenge: Challenge,
    resetChallenge: () => void,
    experienceToNextLevel: number,
}

// Definição do tipo de elemento children que será importado como argumento na função ChallengeProvider
interface ChallengeProviderProps {
  children: ReactNode;
}

// Criação do contexto ChallengeContext com base no formato da interface ChallengeContextData
export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  
  const [activeChallenge, setActiveChallenge] = useState(null);

  // Cálculo do XP necessário para subir de nível
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge () {
      // Randomização da chamada de um novo desafio do arquivo challenges.json na raíz do projeto
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
      const challenge = challenges[randomChallengeIndex];

      setActiveChallenge(challenge);
  }

  // Função utilizada quando o usuário falha um desafio
  function resetChallenge () {
    setActiveChallenge(null);
  }

  return (
    <ChallengeContext.Provider value={{ 
        level, 
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        }}>
      {/* <Component {...pageProps}> trazido como 'children' da função ChallengeProvider */}
      {children}
    </ChallengeContext.Provider>
  );
}
