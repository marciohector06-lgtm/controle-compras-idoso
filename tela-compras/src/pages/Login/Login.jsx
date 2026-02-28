import './Login.css';

// Recebemos a função 'mudarTela' como propriedade (prop)
export default function Login({ mudarTela }) {
  const fazerLogin = (evento) => {
    evento.preventDefault();
    // Aqui no futuro você vai validar o usuário no banco de dados.
    // Por enquanto, apenas mandamos ele para a tela principal (home).
    mudarTela('home');
  };

  return (
    <div className="login-container">
      <h2>Entrar no Sistema</h2>
      
      <form onSubmit={fazerLogin}>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Digite seu email" />
        </div>
        
        <div>
          <label>Senha:</label>
          <input type="password" placeholder="Digite sua senha" />
        </div>
        
        <button type="submit">Entrar</button>
      </form>

      <p>
        Não tem uma conta?{' '}
        <button onClick={() => mudarTela('cadastro')} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
          Cadastre-se aqui
        </button>
      </p>
    </div>
  );
}