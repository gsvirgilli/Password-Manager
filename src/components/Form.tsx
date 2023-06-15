import { useState } from 'react';

type Servico = {
  servico: string;
  login: string;
  senha: string;
  url: string;
};

type CancelarProps = {
  cancelar: (() => void);
  handleCadastrar: (servico: Servico) => void;
};

function Form({ handleCadastrar, cancelar }:CancelarProps) {
  const [servico, setServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');
  const regexAbc123 = /^(?=.*[a-zA-Z])(?=.*\d)/;
  const regexEspecial = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>])/;
  const regex816 = /^[\w!@#$%^&*()\-_=+{};:,<.>.]{8,16}$/;
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[\w!@#$%^&*()\-_=+{};:,<.>.]{8,16}$/;

  const validaForm = () => {
    return servico.length && login.length && (regex.test(senha)) && url.length;
  };

  const validacaoSenha = (caso: boolean) => {
    return caso ? 'valid-password-check' : 'invalid-password-check';
  };

  return (
    <form>
      <label htmlFor="name">
        Nome do serviço
        <input onChange={ (e) => setServico(e.target.value) } id="name" type="text" />
      </label>
      <label htmlFor="login">
        Login
        <input onChange={ (e) => setLogin(e.target.value) } id="login" type="text" />
      </label>
      <label htmlFor="senha">
        Senha
        <input onChange={ (e) => setSenha(e.target.value) } id="senha" type="password" />
      </label>
      <span className={ validacaoSenha(regex816.test(senha)) }>
        Possuir 8 ou mais caracteres
      </span>
      <span className={ validacaoSenha(regex816.test(senha)) }>
        Possuir até 16 caracteres
      </span>
      <span className={ validacaoSenha(regexAbc123.test(senha)) }>
        Possuir letras e números
      </span>
      <span className={ validacaoSenha(regexEspecial.test(senha)) }>
        Possuir algum caractere especial
      </span>

      <label htmlFor="url">
        URL
        <input onChange={ (e) => setUrl(e.target.value) } id="url" type="text" />
      </label>
      <button
        onClick={ () => handleCadastrar({ servico, login, senha, url }) }
        disabled={ !validaForm() }
      >
        Cadastrar
      </button>
      <button onClick={ cancelar }>Cancelar</button>
    </form>
  );
}

export default Form;
