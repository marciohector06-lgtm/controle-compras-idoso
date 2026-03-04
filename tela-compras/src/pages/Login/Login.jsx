import React, { useState } from 'react';
import './Login.css';

export default function Login({ mudarTela }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = (e) => {
    e.preventDefault();

    if (email === '' || senha === '') {
        alert("Ei, preencha todos os campos antes de entrar!");
        return;
    }
    mudarTela('home');
  };

  return (
    <div className="cadastro-container">
      <h2> Entrar no Sistema </h2>

      <form className="cadastro-form" onSubmit={logar}> 
        
        <div className="input-group">
          <label>Email:</label>
          <input 
            type="email"
            placeholder="Digite o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Senha:</label>
          <input 
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        
        <button type="submit">Entrar</button>
      </form>

      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        Não tem uma conta?{' '}
        <button 
          type="button" 
          onClick={() => mudarTela('cadastro')} 
          style={{ background: 'none', border: 'none', color: '#0d6efd', cursor: 'pointer', textDecoration: 'underline', padding: 0, fontWeight: 'normal' }}
        >
          Cadastre-se aqui
        </button>
      </p>
    </div>
  );
}