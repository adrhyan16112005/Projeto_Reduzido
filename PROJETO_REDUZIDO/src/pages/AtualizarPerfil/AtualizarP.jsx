import React, { useState } from "react";
import styles from "./AtualizarP.module.css";

const AtualizarP = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Perfil atualizado:", { nome, email });
  };

  return (
    <div className={styles.container}>
      <h2>Atualizar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Novo nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Novo e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default AtualizarP;
