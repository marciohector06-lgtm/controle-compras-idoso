import { useState } from 'react'
import './App.css'

function App() {
  const [novoItem, setNovoItem] = useState('')
  const [listaCogimpras, setListaCompras] = useState([])

  const adicionarItem = () => {
    // R&N (HdU 01): O sistema não deve permitir o cadastro de itens sem nome
    if (novoItem.trim() === '') {
      alert('O nome do item é obrigatório!')
      return
    }

    setListaCompras([...listaCompras, novoItem])
    setNovoItem('')
  }

  return (
    <div>
      <h1>🛒 Controle de Necessidades e Compras</h1>
      
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
  )
}

export default App