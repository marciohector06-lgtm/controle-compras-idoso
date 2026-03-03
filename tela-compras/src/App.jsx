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
      <h1>Controle de Suprimentos </h1>
      
      
      <Cadastro onAddItem={adicionarItemNoServidor} />
    
     
      <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Itens salvos no Banco de Dados:</h3>
        {itens.length === 0 ? (
          <p>Nenhum item cadastrado ainda.</p>
        ) : (
          <pre>{JSON.stringify(itens, null, 2)}</pre>
        )}
      </div>
      
    </div>
  );
}

export default App;