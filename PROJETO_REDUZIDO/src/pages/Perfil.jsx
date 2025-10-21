import styles from './Perfil.module.css';

function Perfil() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Seu Perfil</h1>
            <p className={styles.info}>Aqui você pode visualizar e editar suas informações pessoais.</p>
        </div>
    );
}

export default Perfil;
