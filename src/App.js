import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Logo from './componentes/Logo';
import Login from './componentes/Login';
import Menu from './componentes/Menu';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <div className="caixaComponentes">
        <center>
          <h1>Componentes</h1>
          <Logo/>
          <Login/>
          <Menu/>
        </center>
      </div>
    </div>
  );
}

export default App;
