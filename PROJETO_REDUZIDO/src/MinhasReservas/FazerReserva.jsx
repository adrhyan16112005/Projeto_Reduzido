import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConsultarMesas.css';

const STORAGE_KEY = 'reservas_app_v1';

const FazerReserva = () => {
  const navigate = useNavigate();
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [mesa, setMesa] = useState('');
  const [cliente, setCliente] = useState('');
  const [quantidade, setQuantidade] = useState(1);

  const handleConfirmar = (e) => {
    e.preventDefault();

    if (!data || !horario || !mesa || !cliente || Number(quantidade) < 1) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    const nova = {
      idReserva: Date.now(),
      mesa: Number(mesa),
      data,
      horario,
      cliente,
      quantidade: Number(quantidade),
    };

    const atuais = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    locais = atuais.concat(nova);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(locais));

    alert('Reserva confirmada!');
    navigate('/minhas-reservas');
  };

  return (
    <div className="consultar-container">
      <h2>Fazer Reserva</h2>

      <form onSubmit={handleConfirmar} className="filtros">
        <label>
          Data:
          <input type="date" value={data} onChange={(e)=>setData(e.target.value)} />
        </label>

        <label>
          Horário:
          <input type="time" value={horario} onChange={(e)=>setHorario(e.target.value)} />
        </label>

        <label>
          Nº da Mesa:
          <input type="number" min="1" value={mesa} onChange={(e)=>setMesa(e.target.value)} />
        </label>

        <label>
          Nome do Cliente:
          <input type="text" value={cliente} onChange={(e)=>setCliente(e.target.value)} />
        </label>

        <label>
          Capacidade:
          <input type="number" min="1" value={quantidade} onChange={(e)=>setQuantidade(e.target.value)} />
        </label>

        <div className="botoes">
          <button type="submit">Confirmar Reserva</button>
        </div>
      </form>
    </div>
  );
};

export default FazerReserva;
