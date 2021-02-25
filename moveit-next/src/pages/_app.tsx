// Importação do CSS Global
import '../styles/global.css';

import { useState } from 'react';

// Importação do contexto de desafios, para melhor interconexão entre os componentes que fazem parte dos desafios, XP e countdown
import { ChallengeProvider } from '../contexts/ChallengeContext';

// Reaproveitamento de estruturas repetidas em todas as páginas (Ex: Cabeçalho)
function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider> 
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp;
