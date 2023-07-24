import './App.css';
import FirstComponent from './components/FirstComponent';
import MyComponents from './components/MyComponents';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      {/* Adicionando comentários no código */}
      <h1>Criando primeiro componente</h1>
      <Challenge/>
      <FirstComponent/>
      <MyComponents/>
      <Events/>
    </div>
  );
}

export default App;
