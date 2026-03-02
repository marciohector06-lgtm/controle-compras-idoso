import React, { useState, useEffect } from 'react';
import Cadastro from './Cadastro';
import Lista from './Lista';
import Agenda from './Agenda';
import './App.css';

const App = () => {
  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem('cuidado_lista');
    return saved ? JSON.parse(saved) : [];
  });

  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('cuidado_agenda');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cuidado_lista', JSON.stringify(shoppingList));
  }, [shoppingList]);

  useEffect(() => {
    localStorage.setItem('cuidado_agenda', JSON.stringify(appointments));
  }, [appointments]);

  const handleAddItem = (data) => {
    setShoppingList([...shoppingList, { id: crypto.randomUUID(), ...data, status: 'Pendente' }]);
  };

  const handleToggleStatus = (id) => {
    setShoppingList(shoppingList.map(item => item.id === id ? { ...item, status: 'Comprado' } : item));
  };

  const handleArchiveItem = (id) => {
    setShoppingList(shoppingList.map(item => item.id === id ? { ...item, status: 'Arquivado' } : item));
  };

  const handleAddAppointment = (data) => {
    setAppointments([...appointments, data]);
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
  };

  return (
    <main className="main-container">
      <header className="app-header">
        <h1>Controle de Suprimentos do Idoso</h1>
        <p>Gestão de Farmácia, Mercado e Agenda</p>
      </header>
      
      <Cadastro onAddItem={handleAddItem} />

      <Lista 
        itens={shoppingList.filter(item => item.status !== 'Arquivado')} 
        onToggleStatus={handleToggleStatus} 
        onArchive={handleArchiveItem}
      />

      <Agenda 
        appointments={appointments}
        onAddAppointment={handleAddAppointment}
        onDeleteAppointment={handleDeleteAppointment}
      />
    </main>
  );
};

export default App;