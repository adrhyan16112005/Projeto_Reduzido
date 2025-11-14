import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AtualizarPerfil.module.css';


const AtualizarPerfil = ({ authToken }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await axios.get('/perfil', {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        if (!response.data.erro) {
          setNome(response.data.usuario.nome);
          setEmail(response.data.usuario.email);
        }
      } catch (err) {
        console.error('Erro ao buscar perfil:', err);
      }
    };

    fetchPerfil();
  }, [authToken]);

  const handleAtualizar = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch('/perfil', { usuario: { nome, email } }, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (response.data.erro) {
        alert(response.data.mensagem);
      } else {
        alert('Perfil atualizado com sucesso!');
      }
    } catch (err) {
      alert('Erro ao atualizar perfil');
    }
  };

  return (
    <div className={styles.form-container}>
      <h2>Atualizar Perfil</h2>
      <form onSubmit={handleAtualizar} className={styles.form}>
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
        <button type="submit" className={styles.submitButton}>Atualizar</button>
      </form>
    </div>
  );
};

export default AtualizarPerfil;
