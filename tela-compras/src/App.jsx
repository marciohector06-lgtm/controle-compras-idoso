import React, { useState, useEffect } from 'react';
import Cadastro from './Cadastro';
import './App.css';

function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/suprimentos')
      .then((resposta) => resposta.json())
      .then((dados) => setItens(dados))
      .catch((erro) => console.log("Erro ao buscar os itens:", erro));
  }, []);

  const adicionarItemNoServidor = (novoItem) => {
    fetch('http://localhost:3000/suprimentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoItem),
    })
      .then((resposta) => resposta.json())
      .then((dadosDoServidor) => {
        setItens([...itens, dadosDoServidor.item]);
      })
      .catch((erro) => console.log("Erro ao salvar o item:", erro));
  };

  return (
    <div className="app-container">
      <h1>Controle de Suprimentos</h1>
      
      <Cadastro onAddItem={adicionarItemNoServidor} />
      
      <div className="lista-container">
        <h3>Lista de Pedidos</h3>
        {itens.length === 0 ? (
          <p>Nenhum item cadastrado ainda.</p>
        ) : (
          <div className="lista-grid">
            {itens.map((item) => (
              <div key={item.id} className="item-lista">
                <p><strong>O que:</strong> {item.nome}</p>
                <p><strong>Para:</strong> {item.idoso}</p>
                <p><strong>Status:</strong> {item.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;