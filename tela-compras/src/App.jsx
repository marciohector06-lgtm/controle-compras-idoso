import React, { useState, useEffect } from 'react';
import Cadastro from './Cadastro';
import Lista from './Lista';
import Login from './pages/Login/Login';
import './App.css';

const App = () => {
  const [telaAtual, setTelaAtual] = useState('login'); 

  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem('cuidado_lista');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cuidado_lista', JSON.stringify(shoppingList));
  }, [shoppingList]);

  const handleAddItem = (data) => {
    setShoppingList([...shoppingList, { id: crypto.randomUUID(), ...data, status: 'Pendente' }]);
  };

  const handleToggleStatus = (id) => {
    setShoppingList(shoppingList.map(item => item.id === id ? { ...item, status: 'Comprado' } : item));
  };

  const handleArchiveItem = (id) => {
    setShoppingList(shoppingList.map(item => item.id === id ? { ...item, status: 'Arquivado' } : item));
  };

  if (telaAtual === 'login') {
    return <Login mudarTela={setTelaAtual} />;
  }

  return (
    <main className="main-container">
      <header className="app-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Controle de Suprimentos do Idoso</h1>
          <button 
            onClick={() => setTelaAtual('login')}
            style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            Sair
          </button>
        </div>
        <p>Gestão de Farmácia e Mercado</p>
      </header>
      
      <Cadastro onAddItem={handleAddItem} />

      <Lista 
        itens={shoppingList.filter(item => item.status !== 'Arquivado')} 
        onToggleStatus={handleToggleStatus} 
        onArchive={handleArchiveItem}
      />
    </main>
  );
};

export default App;