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
    { id: 4, numero: 4, status: "Livre", capacidade: 2 },
    { id: 5, numero: 5, status: "Ocupada", capacidade: 4 },
    { id: 6, numero: 6, status: "Livre", capacidade: 6 },
    { id: 7, numero: 7, status: "Reservada", capacidade: 2 },
    { id: 8, numero: 8, status: "Livre", capacidade: 8 },
    { id: 9, numero: 9, status: "Ocupada", capacidade: 4 },
    { id: 10, numero: 10, status: "Livre", capacidade: 6 },
  ];

  const mesasFiltradas = mesas.filter((mesa) => {
    const numeroMatch =
      filtroMesa === '' || mesa.numero === Number(filtroMesa);

    const statusMatch =
      filtroStatus === '' ||
      mesa.status.toLowerCase().includes(filtroStatus.toLowerCase());

    const capacidadeMatch =
      filtroCapacidade === '' ||
      mesa.capacidade === Number(filtroCapacidade);

    return numeroMatch && statusMatch && capacidadeMatch;
  });

  const limparFiltros = () => {
    setFiltroMesa('');
    setFiltroStatus('');
    setFiltroCapacidade('');
  };

  return (
    <div className="consultar-container">
      <h2>Consultar Mesas</h2>
      <p>Aqui você pode consultar as mesas disponíveis para reserva.</p>

      <div className="filtros">
        <label>
          Nº da Mesa:
          <input 
            type="number"
            min="1"
            value={filtroMesa}
            onChange={(e) => {
              const val = e.target.value;
              if (val === '' || Number(val) >= 1) setFiltroMesa(val);
            }}
            placeholder="ex: 1"
          />
        </label>

        <label>
          Status:
          <input 
            type="text"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            placeholder="Livre / Ocupada / Reservada"
          />
        </label>

        <label>
          Capacidade:
          <input 
            type="number"
            min="1"
            value={filtroCapacidade}
            onChange={(e) => {
              const val = e.target.value;
              if (val === '' || Number(val) >= 1) setFiltroCapacidade(val);
            }}
            placeholder="ex: 4"
          />
        </label>

        <div className="botoes">
          <button
            onClick={() => {}}
          >
            Consultar
          </button>
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
          {mesasFiltradas.length > 0 ? (
            mesasFiltradas.map((mesa) => (
              <tr key={mesa.id}>
                <td>{mesa.numero}</td>
                <td>{mesa.status}</td>
                <td>{mesa.capacidade}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>
                Nenhuma mesa encontrada.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default ConsultarMesas;
