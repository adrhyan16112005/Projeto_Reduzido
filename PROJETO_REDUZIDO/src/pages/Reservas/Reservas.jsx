import styles from './Reservas.module.css';

function Reservas() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Minhas Reservas</h1>
            <p className={styles.details}>Visualize aqui as reservas que você realizou.</p>
        </div>
    );
}

export default Reservas;
