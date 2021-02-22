import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css';

function App() {
  return (
    <div className="container">
      <h1>Move.it</h1>
      {/* Componente e suas propriedades declaradas e exportadas no arquivo ExperienceBar.tsx */}
      <ExperienceBar />
    </div>
  );
}

export default App;
