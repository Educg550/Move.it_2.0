import { ExperienceBar } from './components/ExperienceBar';
import { ProfileData } from './components/ProfileData';
import { Cicles } from './components/Cicles';
import './styles/global.css';

function App() {
  return (
    <div className="container">
      <h1>Move.it</h1>
      {/* Componentes e suas propriedades declaradas e exportadas nos arquivos de mesmo nome dentro da pasta ./components */}
      <ExperienceBar />
      <ProfileData />
      <Cicles />
    </div>
  );
}

export default App;
