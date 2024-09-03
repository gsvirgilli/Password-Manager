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
  const [isChecked, setIsChecked] = useState(false);

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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
                  { isChecked
                    ? <span>******</span>
                    : <span>{ service.senha }</span>}
                  <button
                    data-testid="remove-btn"
                    onClick={ () => removeService(service) }
                  >
                    Remover
                  </button>
                </li>
              ))
            ) : (
              <p>Não há nenhuma senha cadastrada...</p>
            )}
          </ul>
          <input
            type="checkbox"
            id="meuCheckbox"
            checked={ isChecked }
            onChange={ handleCheckboxChange }
          />
          <label htmlFor="meuCheckbox">Esconder senhas</label>
        </>
      )}
    </>
  );
}

export default App;
