import React, { useState } from "react";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastro:", form);
  };

  return (
    <div className={styles.container}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="senha"
          placeholder="Senha"
          type="password"
          value={form.senha}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
