import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    nome: '',
    categoria: 'Medicamento',
    urgencia: 'Normal',
    obs: '',
    responsavel: '',
    idoso: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'nome' && errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome.trim()) {
      setErrorMessage("O nome do item é obrigatório");
      return;
    }

    onAddItem(formData);
    
    setFormData({ nome: '', categoria: 'Medicamento', urgencia: 'Normal', obs: '', responsavel: '', idoso: '' });
    setErrorMessage('');
  };

  return (
    <section className="cadastro-container">
      <h2>Cadastrar Novo Item</h2>
      <form onSubmit={handleSubmit} className="cadastro-form">
        
        <div className="input-group">
          <input 
            type="text" 
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Nome do item (Ex: Losartana 50mg)"
            data-testid="input-new-item"
          />
          {errorMessage && <span className="error-text" data-testid="error-message">{errorMessage}</span>}
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="idoso"
            value={formData.idoso}
            onChange={handleInputChange}
            placeholder="Para qual idoso? (Ex: Vô João)"
          />
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="responsavel"
            value={formData.responsavel}
            onChange={handleInputChange}
            placeholder="Seu nome (Familiar responsável)"
          />
        </div>

        <div className="row-group">
          <select name="categoria" value={formData.categoria} onChange={handleInputChange}>
            <option value="Medicamento">Medicamento</option>
            <option value="Higiene">Higiene Pessoal</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Outros">Outros</option>
          </select>

          <select name="urgencia" value={formData.urgencia} onChange={handleInputChange}>
            <option value="Normal">Normal</option>
            <option value="Urgente">🚨 Urgente (Acabou!)</option>
          </select>
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="obs"
            value={formData.obs}
            onChange={handleInputChange}
            placeholder="Observações adicionais"
          />
        </div>

        <button type="submit" data-testid="button-add">
          Salvar Item
        </button>
      </form>
    </section>
  );
};

export default Cadastro;