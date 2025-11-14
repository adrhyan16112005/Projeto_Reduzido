import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>

      <section className={styles.hero}>
        <h1 className={styles.title}>Sistema de Reservas de Mesas</h1>
        <p className={styles.subtitle}>
          Realize reservas de forma rápida, simples e eficiente.
        </p>

        <div className={styles.buttons}>
          <Link to="/login" className={styles.btnPrimary}>Entrar</Link>
          <Link to="/cadastro" className={styles.btnSecondary}>Criar Conta</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
