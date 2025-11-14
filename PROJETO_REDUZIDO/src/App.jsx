import React from 'react';
import AppRoutes from './Routes'; 
import './index.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      
      <h1>Projeto Reservas de Mesas</h1>
      <AppRoutes />
    </div>
  );
}

export default App;
