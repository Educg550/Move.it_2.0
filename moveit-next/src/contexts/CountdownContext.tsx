import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengeContext } from './ChallengeContext';

interface CountdownContextData {
    minutes: number;
    seconds: number
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

//Variável que para a execução do countdown quando o usuário clicar em Abandonar ciclo
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider ({children}: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengeContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
  
    //Math.floor() - arredonda o número para sua versão menor (Ex: 1.5 se torna 1 ao invés de 2)
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
      }
    
      function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        //setHasFinished(true);
        setTime(25 * 60);
        setHasFinished(false);
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
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}
