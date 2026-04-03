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
  
  const [errors, setErrors] = useState({ nome: '', idoso: '', responsavel: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { nome: '', idoso: '', responsavel: '' };
    let hasError = false;

    if (!formData.nome.trim()) {
      newErrors.nome = 'O nome do item é obrigatório';
      hasError = true;
    }
    if (!formData.idoso.trim()) {
      newErrors.idoso = 'O nome do idoso é obrigatório';
      hasError = true;
    }
    if (!formData.responsavel.trim()) {
      newErrors.responsavel = 'O nome do familiar responsável é obrigatório';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    onAddItem(formData);
    setFormData({ nome: '', categoria: 'Medicamento', urgencia: 'Normal', obs: '', responsavel: '', idoso: '' });
    setErrors({ nome: '', idoso: '', responsavel: '' });
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
            className={errors.nome ? 'input-error' : ''}
            data-testid="input-new-item"
          />
          {errors.nome && <p className="error-text" data-testid="error-message">{errors.nome}</p>}
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="idoso"
            value={formData.idoso}
            onChange={handleInputChange}
            placeholder="Para qual idoso? (Ex: Vô João)"
            className={errors.idoso ? 'input-error' : ''}
          />
          {errors.idoso && <p className="error-text">{errors.idoso}</p>}
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="responsavel"
            value={formData.responsavel}
            onChange={handleInputChange}
            placeholder="Seu nome (Familiar responsável)"
            className={errors.responsavel ? 'input-error' : ''}
          />
          {errors.responsavel && <p className="error-text">{errors.responsavel}</p>}
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