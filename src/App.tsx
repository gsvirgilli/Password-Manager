import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  const [cadastrar, setCadastrar] = useState(true);

  const handleMostrarForm = () => {
    setCadastrar(false);
  };

  const handleMostrarButton = () => {
    setCadastrar(true);
  };

  return (
    <div>
      <Title />
      { cadastrar
        ? <button onClick={ handleMostrarForm }>Cadastrar nova senha</button>
        : <Form cancelar={ handleMostrarButton } />}
    </div>
  );
}

export default App;
