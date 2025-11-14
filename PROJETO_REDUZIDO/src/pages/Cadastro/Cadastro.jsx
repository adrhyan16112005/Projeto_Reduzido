import React, { useState } from 'react';
import axios from 'axios';
import styles from './Cadastro.module.css';

const Cadastro = ({ setAuthToken }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/cadastro', { nome, email, password });
      if (response.data.erro) {
        setError(response.data.mensagem);
      } else {
        setAuthToken(response.data.token); // Salva o token
        alert('Cadastro realizado com sucesso!');
      }
    } catch (err) {
      setError('Erro ao realizar cadastro');
    }
  };

  return (
    <div className={styles.cadastroContainer}>
      <h2>Cadastro</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleCadastro} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
