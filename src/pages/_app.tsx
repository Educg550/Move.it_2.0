// Importação do CSS Global
import "../styles/global.css";

import React, { useState } from "react";

// Reaproveitamento de estruturas repetidas em todas as páginas (Ex: Cabeçalho)
function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  );
}

export default MyApp;
