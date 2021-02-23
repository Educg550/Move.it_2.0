import Head from "next/head";
import { Header } from '../components/Header';
import { ExperienceBar } from "../components/ExperienceBar";
import { ProfileData } from "../components/ProfileData";
import { Cicles } from "../components/Cicles";

export default function Home() {
  return (
    <div className="container">
      {/* Componentes e suas propriedades declaradas e exportadas nos arquivos de mesmo nome dentro da pasta ./components */}
      <header>
        <Header />        
      </header>

      <section>
        <ExperienceBar />
        <ProfileData />
        <Cicles />
      </section>

    </div>
  );
}


