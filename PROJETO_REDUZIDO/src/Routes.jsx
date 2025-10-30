// src/Routes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ConsultarMesas from "./MinhasReservas/ConsultarMesas";
import ListarMinhasReservas from "./MinhasReservas/ListarMinhasReservas";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultar-mesas" element={<ConsultarMesas />} />
        <Route path="/minhas-reservas" element={<ListarMinhasReservas />} />
      </Routes>
    </BrowserRouter>
  );
}
