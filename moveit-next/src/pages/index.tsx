import Head from "next/head";
import { Header } from "../components/Header";
import { ExperienceBar } from "../components/ExperienceBar";
import { ProfileData } from "../components/ProfileData";
import { Cicles } from "../components/Cicles";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <title>Início | Move.it</title>
      </Head>
      {/* Componentes e suas propriedades declaradas e exportadas nos arquivos de mesmo nome dentro da pasta ./components */}
      <Header />
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <ProfileData />
            <Cicles />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
