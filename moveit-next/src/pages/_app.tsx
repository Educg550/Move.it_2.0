// Importação do CSS Global
import "../styles/global.css";

import React, { useState } from "react";

// Importação dos contextos, para melhor interconexão entre os componentes que fazem parte dos desafios, XP e countdown
import { ChallengeProvider } from "../contexts/ChallengeContext";

// Reaproveitamento de estruturas repetidas em todas as páginas (Ex: Cabeçalho)
function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
        <Component {...pageProps} />
    </ChallengeProvider>
  );
}

export default MyApp;
