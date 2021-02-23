import Head from "next/head";
import { Header } from '../components/Header';
import { ExperienceBar } from "../components/ExperienceBar";
import { ProfileData } from "../components/ProfileData";
import { Cicles } from "../components/Cicles";
import { Countdown } from '../components/Countdown'
import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Componentes e suas propriedades declaradas e exportadas nos arquivos de mesmo nome dentro da pasta ./components */}
        <Header />
        <ExperienceBar />      

      <section>
        <ProfileData />
        <Cicles />
        <Countdown />
      </section>

    </div>
  );
}


