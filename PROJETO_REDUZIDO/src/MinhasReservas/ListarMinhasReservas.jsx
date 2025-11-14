import React from 'react';
import './ListarMinhasReservas.css';

const ListarMinhasReservas = () => {
  return (
    <div className="listar-container">
      <h2>Minhas Reservas</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Mesa</th>
            <th>Data</th>
            <th>Horário</th> 
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mesa 3</td>
            <td>10/02/202</td>
            <td>19:30</td> 
            <td>
              <button>Excluir</button>
              <button>Editar</button>
              <button>Detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListarMinhasReservas;
