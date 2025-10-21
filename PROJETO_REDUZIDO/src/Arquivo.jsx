
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styles from './Arquivo.module.css';

import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Reservas from './pages/Reservas';

function Arquivo() {
    return (
        <BrowserRouter>
            <header className={styles.header}>
                <span className={styles.logo}>Reservas de Mesas</span>
                <nav className={styles.nav}>
                    <Link to="/">Home</Link>
                    <Link to="/Perfil">Perfil</Link>
                    <Link to="/Reservas">Reservas</Link>
                </nav>
            </header>

            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Perfil" element={<Perfil />} />
                    <Route path="/Reservas" element={<Reservas />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default Arquivo;