import React, { useState } from 'react';
import './Login.css';

export default function Login ({mudarTela}){
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = (e) => {
    e.preventDefault();

    if (email === '' || senha === ''){
        alert("Ei, preencha todos os campos antes de entra!");
        return;
    }
    mudarTela('home');

  };
  return( 
    <div className="login-container">
      <h2> Entra no Sistema </h2>

    <form onSubmit={logar}> 
        <div>
          <label>Email:</label> 
            <input 
              type="email"
              placeholder="Digite o seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> 
        </div>
        <div>
          <label>Email:</label> 
            <input 
              type="Senha"
              placeholder="password"
              value={senha}
              onChange={(e) => setSenha (e.target.value)}
            /> 
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
      Não tem conta?{'' }
      <button 
      type="button"
      onClick={() => mudarTela('cadastro')}
      style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Cadastre-se aqui
        </button>
      </p>
    </div>
  );
}

