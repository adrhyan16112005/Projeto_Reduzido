import React, { useState } from 'react';
import './ConsultarMesas.css';

const ConsultarMesas = () => {
  const [filtroMesa, setFiltroMesa] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroCapacidade, setFiltroCapacidade] = useState('');

  const mesas = [
    { id: 1, numero: 1, status: "Livre", capacidade: 2 },
    { id: 2, numero: 2, status: "Ocupada", capacidade: 4 },
    { id: 3, numero: 3, status: "Reservada", capacidade: 6 },
  ];

  const limparFiltros = () => {
    setFiltroMesa('');
    setFiltroStatus('');
    setFiltroCapacidade('');
  };

  return (
    <div className="consultar-container">
      <h2>Consultar Mesas</h2>

      <div className="filtros">
        <label>
          Nº da Mesa:
          <input 
            type="number" 
            min="1"
            value={filtroMesa} 
            onChange={(e) => setFiltroMesa(e.target.value)} 
          />
        </label>

        <label>
          Status:
          <input 
            type="text" 
            value={filtroStatus} 
            onChange={(e) => setFiltroStatus(e.target.value)} 
          />
        </label>

        <label>
          Capacidade:
          <input 
            type="number" 
            min="1"
            value={filtroCapacidade} 
            onChange={(e) => setFiltroCapacidade(e.target.value)} 
          />
        </label>

        <div className="botoes">
          <button>Consultar</button>
          <button className="limpar" onClick={limparFiltros}>Limpar</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nº da Mesa</th>
            <th>Status</th>
            <th>Capacidade</th>
          </tr>
        </thead>

        <tbody>
          {mesas.map((mesa) => (
            <tr key={mesa.id}>
              <td>{mesa.numero}</td>
              <td>{mesa.status}</td>
              <td>{mesa.capacidade}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ConsultarMesas;
