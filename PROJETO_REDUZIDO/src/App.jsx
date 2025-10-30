import React from 'react';
import ConsultarMesas from './reservas/ConsultarMesas';
import ListarMinhasReservas from './reservas/ListarMinhasReservas';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Projeto Reservas de Mesas</h1>

      {/* Página de Consulta de Mesas */}
      <ConsultarMesas />

      <hr />

      {/* Página de Listagem de Reservas */}
      <ListarMinhasReservas />
    </div>
  );
}

export default App;
