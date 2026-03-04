import React, { useState } from 'react';
import './Login.css';

export default function Login({ mudarTela }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = (e) => {
    e.preventDefault();

    // Validação de campos vazios
    if (email === '' || senha === '') {
        alert("Ei, preencha todos os campos antes de entrar!");
        return;
    }

    // Regra de Acesso para a apresentação de hoje (Usuário Fixo)
    if (email === 'admin@familia.com' && senha === '123456') {
        mudarTela('home'); // Sucesso: Vai para o Controle de Necessidades
    } else {
        alert("Acesso Negado: Familiar não identificado ou senha incorreta!");
    }
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

      <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
        Sistema de Cuidado Familiar Compartilhado
      </p>
    </div>
  );
}