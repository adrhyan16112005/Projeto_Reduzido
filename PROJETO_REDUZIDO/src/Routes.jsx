import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ConsultarMesas from './MinhasReservas/ConsultarMesas';
import ListarMinhasReservas from './MinhasReservas/ListarMinhasReservas';
import Perfil from './pages/Perfil/Perfil';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultar-mesas" element={<ConsultarMesas />} />
      <Route path="/minhas-reservas" element={<ListarMinhasReservas />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}
