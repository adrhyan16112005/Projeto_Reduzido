import React from "react";
import styles from "./Perfil.module.css";

const Perfil = () => {
  const usuario = {
    nome: "João da Silva",
    email: "joao@email.com",
  };

  return (
    <div className={styles.container}>
      <h2>Meu Perfil</h2>
      <p><strong>Nome:</strong> {usuario.nome}</p>
      <p><strong>E-mail:</strong> {usuario.email}</p>
    </div>
  );
};

export default Perfil;
