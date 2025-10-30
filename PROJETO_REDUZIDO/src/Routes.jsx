// src/Routes.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Reservas from "./pages/Reservas/Reservas";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reservas" element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
