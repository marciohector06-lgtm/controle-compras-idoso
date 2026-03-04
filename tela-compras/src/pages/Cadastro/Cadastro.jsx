import './Cadastro.css';

export default function Cadastro({ mudarTela }) {
  const fazerCadastro = (evento) => {
    evento.preventDefault();
    alert('Cadastro realizado! Faça login para continuar.');
    mudarTela('login');
  };

  return (
    <div className="cadastro-container">
      <h2>Criar Nova Conta</h2>
      
      <form onSubmit={fazerCadastro}>
        <div>
          <label>Nome:</label>
          <input type="text" placeholder="Digite seu nome completo" />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" placeholder="Digite seu email" />
        </div>
        
        <div>
          <label>Senha:</label>
          <input type="password" placeholder="Crie uma senha forte" />
        </div>
        
        <button type="submit">Cadastrar</button>
      </form>

      <p>
        Já possui conta?{' '}
        <button onClick={() => mudarTela('login')} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
          Faça Login
        </button>
      </p>
    </div>
  );
}