import React, { useState, useEffect } from 'react';
import Cadastro from './Cadastro';
import Lista from './Lista';
import './App.css';

const App = () => {
  const listaSalva = localStorage.getItem('cuidado_lista');

  const [suprimentos, setSuprimentos] = useState(listaSalva ? JSON.parse(listaSalva) : []);

  useEffect(() => {
    localStorage.setItem('cuidado_lista', JSON.stringify(suprimentos));
  }, [suprimentos]);

  const adicionarItem = (dados) => {
    const novoItem = { 
      id: Date.now(),
      ...dados, 
      status: 'Pendente' 
    };
    setSuprimentos([...suprimentos, novoItem]);
  };

  const marcarComoComprado = (id) => {
    const listaAtualizada = suprimentos.map(item => {
      if (item.id === id) {
        return { ...item, status: 'Comprado' };
      }
      return item;
    });
    setSuprimentos(listaAtualizada);
  };

  const arquivarItem = (id) => {
    const listaAtualizada = suprimentos.map(item => {
      if (item.id === id) {
        return { ...item, status: 'Arquivado' };
      }
      return item;
    });
    setSuprimentos(listaAtualizada);
  };

  return (
    <main className="main-container">
      <header className="app-header">
        <h1>Controle de Suprimentos do Idoso</h1>
        <p>Gestão de Farmácia e Mercado</p>
      </header>
      
      <Cadastro onAddItem={adicionarItem} />

      <Lista 
        itens={suprimentos.filter(item => item.status !== 'Arquivado')} 
        onToggleStatus={marcarComoComprado} 
        onArchive={arquivarItem}
      />
    </main>
  );
};

export default App;