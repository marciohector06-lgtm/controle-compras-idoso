import React from 'react';
import './Lista.css';

const Lista = ({ itens, onToggleStatus, onArchive }) => {
  // Separando a lista principal em duas para facilitar na hora de mostrar
  const pendentes = itens.filter(item => item.status === 'Pendente');
  const comprados = itens.filter(item => item.status === 'Comprado');

  return (
    <section className="lista-container">
      <h2>Itens Pendentes</h2>
      
      {/* Se a lista de pendentes estiver vazia, mostra essa mensagem */}
      {pendentes.length === 0 ? (
        <p className="empty-msg">Nenhum item pendente no momento.</p>
      ) : (
        <ul className="lista">
          {pendentes.map(item => (
            <li key={item.id} className="item-card pendente">
              <div className="item-info">
                <strong>{item.nome}</strong> 
                
                {/* Estilo direto no HTML (gambiarra clássica pra ganhar tempo) */}
                {item.idoso && (
                  <span style={{ marginLeft: '10px', color: '#6b7280', fontSize: '0.85rem', backgroundColor: '#f3f4f6', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                    👴 {item.idoso}
                  </span>
                )}
                <br />
                <span>({item.categoria})</span>
                
                {/* Se for urgente, mostra o aviso */}
                {item.urgencia === 'Urgente' && <span className="badge-urgente">🚨 Urgente</span>}
                {item.obs && <p className="item-obs">Obs: {item.obs}</p>}
                
                {item.responsavel && (
                  <p className="item-obs" style={{ color: '#0d6efd', fontWeight: 'bold', marginTop: '8px' }}>
                    👤 Por: {item.responsavel}
                  </p>
                )}
              </div>
              
              <div className="item-actions">
                <button onClick={() => onToggleStatus(item.id)} className="btn-comprado">
                  ✓ Comprado
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Só renderiza a parte de baixo se tiver algum item já comprado */}
      {comprados.length > 0 && (
        <div className="comprados-section" style={{ marginTop: '30px' }}>
          <h2 style={{ borderLeftColor: '#198754' }}>Histórico de Comprados</h2>
          <ul className="lista">
            {comprados.map(item => (
              <li key={item.id} className="item-card comprado">
                <div className="item-info">
                  <strong style={{ textDecoration: 'line-through' }}>{item.nome}</strong>
                  {item.idoso && <span style={{ marginLeft: '10px', fontSize: '0.8rem' }}>({item.idoso})</span>}
                  
                  {item.responsavel && (
                    <p className="item-obs" style={{ color: '#198754', marginTop: '4px' }}>
                      👤 Familiar: {item.responsavel}
                    </p>
                  )}
                </div>
                <div className="item-actions">
                  <button onClick={() => onArchive(item.id)} className="btn-arquivar">
                    📦 Arquivar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Lista;