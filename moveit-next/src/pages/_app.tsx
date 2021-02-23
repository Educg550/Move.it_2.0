// Importação do CSS Global
import '../styles/global.css';

// Reaproveitamento de estruturas repetidas em todas as páginas (Ex: Cabeçalho)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
