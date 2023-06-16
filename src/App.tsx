import { useState } from 'react';
import Form from './components/Form';
import Title from './components/Title';

type Servico = {
  servico: string;
  login: string;
  senha: string;
  url: string;
};

function App() {
  const [cadastrar, setCadastrar] = useState(false);
  const [lista, setLista] = useState<Servico[]>([]);

  const handleMostrarForm = () => {
    setCadastrar(true);
  };

  const handleMostrarButton = () => {
    setCadastrar(false);
  };

  const handleCadastrar = (servico: Servico) => {
    setLista([...lista, servico]);
    setCadastrar(false);
  };

  const removeService = (ulrServico: Servico) => {
    const filtrar = lista.filter(
      (service) => ulrServico.servico !== service.servico,
    );

    setLista(filtrar);
  };

  return (
    <>
      <Title />
      {cadastrar ? (
        <Form handleCadastrar={ handleCadastrar } cancelar={ handleMostrarButton } />
      ) : (
        <>
          <ul>
            <button onClick={ handleMostrarForm }>Cadastrar nova senha</button>
          </ul>
          <ul>
            {lista.length ? (
              lista.map((service) => (
                <li key={ service.servico }>
                  <a href={ service.url }>{service.servico}</a>
                  <span>{ service.login }</span>
                  <span>{ service.senha }</span>
                  <button
                    data-testid="remove-btn"
                    onClick={ () => removeService(service) }
                  >
                    Remover
                  </button>
                </li>
              ))
            ) : (
              <li>nenhuma senha cadastrada</li>
            )}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
