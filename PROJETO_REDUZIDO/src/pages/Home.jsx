import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bem-vindo à Página Inicial</h1>
            <p className={styles.text}>Navegue pelo menu para acessar seu perfil ou suas reservas.</p>
        </div>
    );
}

export default Home;
