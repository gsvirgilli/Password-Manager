type CancelarProps = {
  cancelar: (() => void)
};

function Form({ cancelar }:CancelarProps) {
  return (
    <>
      <label htmlFor="name">
        Nome do serviço
        <input id="name" type="text" />
      </label>
      <label htmlFor="login">
        Login
        <input id="login" type="text" />
      </label>
      <label htmlFor="senha">
        Senha
        <input id="senha" type="password" />
      </label>
      <label htmlFor="url">
        URL
        <input id="url" type="text" />
      </label>
      <button disabled>Cadastrar</button>
      <button onClick={ cancelar }>Cancelar</button>
    </>
  );
}

export default Form;
