import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ConsultarMesas from './MinhasReservas/ConsultarMesas';
import ListarMinhasReservas from './MinhasReservas/ListarMinhasReservas';
import FazerReserva from './MinhasReservas/FazerReserva';
import Perfil from './pages/Perfil/Perfil';
import Cardapio from './pages/Cardapio/Cardapio';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/consultar-mesas" element={<ConsultarMesas />} />
      <Route path="/fazer-reserva" element={<FazerReserva />} />
      <Route path="/minhas-reservas" element={<ListarMinhasReservas />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}
