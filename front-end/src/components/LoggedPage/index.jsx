import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { format } from 'date-fns';
import styles from  './LoggedPage.module.css'


const LoggedPage = () => {
  const { isLoggedIn, userData } = useAuth();

  const formattedCreatedAt = userData?.created_at ? format(new Date(userData?.created_at), 'dd/MM/yyyy HH:mm:ss') : undefined

  const handleLogout = () => {
    window.location.href = '/login';

    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
    }
    
  };

  return (
    <div className={styles.presentationContainer}>
      <h1 className={styles.welcome}>Bem-vindo(a) {userData?.name}!</h1>
      <div className={styles.userInfo}>
        <p className={styles.name}>Nome: {userData?.name}</p>
        <p className={styles.email}>Email: {userData?.email}</p>
        <p className={styles.password}>Data de criação: {formattedCreatedAt}</p>
      </div>
      <button className={styles.logoutButton} onClick={handleLogout}>Deslogar</button>
    </div>
  );
};

export default LoggedPage;