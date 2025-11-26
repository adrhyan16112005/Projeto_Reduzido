import React from 'react';
import './ListarMinhasReservas.css';

const ListarMinhasReservas = () => {

  const reservas = [
    { idReserva: 101, mesa: 5, data: "27/10/2025" },
    { idReserva: 102, mesa: 2, data: "27/10/2025" },
  ];

  return (
    <div className="listar-container">
      <h2>Minhas Reservas – Semana 27/10</h2>

      <table>
        <thead>
          <tr>
            <th>Nº Mesa</th>
            <th>Nº Reserva</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {reservas.map((res) => (
            <tr key={res.idReserva}>
              <td>{res.mesa}</td>
              <td>{res.idReserva}</td>
              <td>{res.data}</td>

              <td>
                <button>Cancelar</button>
                <button>Editar</button>
                <button>Ver Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ListarMinhasReservas;
