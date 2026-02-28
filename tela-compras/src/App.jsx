import { useState } from 'react';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import './App.css';

function App() {
  // Estado que controla a navegação. Começa na tela de login.
  const [telaAtual, setTelaAtual] = useState('login'); 

  // --- CÓDIGO DO SEU COLEGA (MANTIDO INTACTO) ---
  const [novoItem, setNovoItem] = useState('');
  const [listaCompras, setListaCompras] = useState([]);

  const adicionarItem = () => {
    // R&N (HdU 01): O sistema não deve permitir o cadastro de itens sem nome
    if (novoItem.trim() === '') {
      alert('O nome do item é obrigatório!');
      return;
    }

    setListaCompras([...listaCompras, novoItem]);
    setNovoItem('');
  };
  // ----------------------------------------------

  // Lógica de Renderização Condicional
  if (telaAtual === 'login') {
    return <Login mudarTela={setTelaAtual} />;
  }

  if (telaAtual === 'cadastro') {
    return <Cadastro mudarTela={setTelaAtual} />;
  }

  // Se a telaAtual for 'home', renderiza o sistema do seu colega
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>🛒 Controle de Necessidades e Compras</h1>
        <button onClick={() => setTelaAtual('login')}>Sair da Conta</button>
      </div>
      
      <div>
        <input 
          type="text" 
          placeholder="Digite o nome do item..." 
          data-testid="input-novo-item"
          value={novoItem} 
          onChange={(evento) => setNovoItem(evento.target.value)} 
        />
        <button data-testid="btn-salvar-item" onClick={adicionarItem}>
          Salvar
        </button>
      </div>

      <ul>
        {listaCompras.map((item, index) => (
          <li key={index} data-testid="item-lista">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;