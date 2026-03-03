import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro = ({ onAddItem }) => {
  const [dados, setDados] = useState({
    nome: '',
    categoria: 'Medicamento',
    urgencia: 'Normal',
    obs: '',
    responsavel: '',
    idoso: ''
  });
  
  const [erro, setErro] = useState('');

  const lidarMudanca = (e) => {
    const nomeCampo = e.target.name;
    const valorCampo = e.target.value;
    
    setDados({ ...dados, [nomeCampo]: valorCampo });
    
    if (nomeCampo === 'nome') {
      setErro('');
    }
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (dados.nome.trim() === '' || dados.idoso.trim() === '') {
      setErro("O nome do item e do idoso não podem ficar em branco ou só com espaços.");
      return;
    }

    onAddItem(dados);
    
    setDados({ 
      nome: '', 
      categoria: 'Medicamento', 
      urgencia: 'Normal', 
      obs: '', 
      responsavel: '', 
      idoso: '' 
    });
    setErro('');
  };

  return (
    <section className="cadastro-container">
      <h2>Cadastrar Novo Item</h2>
      <form onSubmit={enviarFormulario} className="cadastro-form">
        
        <div className="input-group">
          <input 
            type="text" 
            name="nome"
            value={dados.nome}
            onChange={lidarMudanca}
            placeholder="Nome do item (Ex: Losartana 50mg)"
          />
          {erro && <span className="error-text">{erro}</span>}
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="idoso"
            value={dados.idoso}
            onChange={lidarMudanca}
            placeholder="Para qual idoso? (Ex: Vô João)"
          />
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="responsavel"
            value={dados.responsavel}
            onChange={lidarMudanca}
            placeholder="Seu nome (Familiar responsável)"
          />
        </div>

        <div className="row-group">
          <select name="categoria" value={dados.categoria} onChange={lidarMudanca}>
            <option value="Medicamento">Medicamento</option>
            <option value="Higiene">Higiene Pessoal</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Outros">Outros</option>
          </select>

          <select name="urgencia" value={dados.urgencia} onChange={lidarMudanca}>
            <option value="Normal">Normal</option>
            <option value="Urgente">🚨 Urgente (Acabou!)</option>
          </select>
        </div>

        <div className="input-group">
          <input 
            type="text" 
            name="obs"
            value={dados.obs}
            onChange={lidarMudanca}
            placeholder="Observações adicionais"
          />
        </div>

        <button type="submit">
          Salvar Item
        </button>
      </form>
    </section>
  );
};

export default Cadastro;