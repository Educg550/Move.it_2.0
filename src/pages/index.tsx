import Head from "next/head";
import { GetServerSideProps } from "next";

import { Header } from "../components/Header";
import { ExperienceBar } from "../components/ExperienceBar";
import { ProfileData } from "../components/ProfileData";
import { Cicles } from "../components/Cicles";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { Login } from '../components/Login';
import styles from "../styles/pages/Home.module.css";

// Importação dos contextos, para melhor interconexão entre os componentes que fazem parte dos desafios, XP e countdown
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengeProvider } from "../contexts/ChallengeContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallengeProvider 
    level={props.level} 
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengeProvider>
  );
}

// Delimita os dados passados do Next.js para o Front-end
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

// Next.js (Node.js)
// Front-end (ReactJS)
