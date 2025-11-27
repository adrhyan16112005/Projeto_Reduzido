import React, { useEffect, useState } from 'react';
import './ListarMinhasReservas.css';

const STORAGE_KEY = 'reservas_app_v1';

const ListarMinhasReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const atuais = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    setReservas(atuais);
  }, []);

  const handleCancelar = (idReserva) => {
    if (!window.confirm('Deseja cancelar essa reserva?')) return;
    const atualizados = reservas.filter(r => r.idReserva !== idReserva);
    setReservas(atualizados);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(atualizados));
  };

  const handleDetalhes = (res) => {
    alert(
      `Reserva: ${res.idReserva}\nMesa: ${res.mesa}\nData: ${res.data}\nHorário: ${res.horario}\nCliente: ${res.cliente}\nQtd: ${res.quantidade}`
    );
  };

  const handleEditar = (res) => {
    const novaData = prompt('Nova data (YYYY-MM-DD):', res.data);
    const novoHorario = prompt('Novo horário (HH:MM):', res.horario);
    if (!novaData || !novoHorario) return;
    const atualizados = reservas.map(r => {
      if (r.idReserva === res.idReserva) {
        return { ...r, data: novaData, horario: novoHorario };
      }
      return r;
    });
    setReservas(atualizados);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(atualizados));
  };

  return (
    <div className="listar-container">
      <h2>Minhas Reservas</h2>

      <table>
        <thead>
          <tr>
            <th>Nº Mesa</th>
            <th>Nº da Reserva</th>
            <th>Data</th>
            <th>Horário</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {reservas.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign:'center' }}>Nenhuma reserva encontrada.</td>
            </tr>
          )}

          {reservas.map((r) => (
            <tr key={r.idReserva}>
              <td>{r.mesa}</td>
              <td>{r.idReserva}</td>
              <td>{r.data}</td>
              <td>{r.horario}</td>
              <td>
                <button onClick={() => handleCancelar(r.idReserva)}>Cancelar</button>
                <button onClick={() => handleEditar(r)}>Editar</button>
                <button onClick={() => handleDetalhes(r)}>Ver Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarMinhasReservas;
