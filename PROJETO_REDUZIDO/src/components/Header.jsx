import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Reservas de Mesas</span>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/cardapio">Cardápio</Link>
        <Link to="/consultar-mesas">Consultar Mesas</Link>
        <Link to="/fazer-reserva">Fazer Reserva</Link>
        <Link to="/minhas-reservas">Minhas Reservas</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
    </header>
  );
}

export default Header;
