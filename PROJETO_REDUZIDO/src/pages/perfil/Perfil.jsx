import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Perfil.module.css'; 

const Perfil = ({ authToken }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await axios.get('/perfil', {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        if (response.data.erro) {
          alert(response.data.mensagem);
        } else {
          setUsuario(response.data.usuario);
        }
      } catch (err) {
        console.error('Erro ao buscar perfil:', err);
      }
    };

    fetchPerfil();
  }, [authToken]);

  return (
    <div className={styles.perfilContainer}>
      <h2 className={styles.perfilTitulo}>Meu Perfil</h2>
      {usuario ? (
        <div>
          <p className={styles.infoUsuario}><strong>Nome:</strong> {usuario.nome}</p>
          <p className={styles.infoUsuario}><strong>Email:</strong> {usuario.email}</p>
        </div>
      ) : (
        <p className={styles.carregando}>Carregando...</p>
      )}
    </div>
  );
};

export default Perfil;
