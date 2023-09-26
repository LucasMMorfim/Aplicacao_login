import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import styles from  './MenuLogin.module.css'


const MenuLogin = () => {
  const navigate = useNavigate();
  const { setUserData } = useAuth();

  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  })

  const handleLoginEdit = (event, name) => {
    setloginData({
      ...loginData,
      [name]: event.target.value,
    })
  }


  const handleLogin = async (event) => {
    event.preventDefault();
      try {
        const response = await fetch('http://localhost:3333/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( loginData ),
        })
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          setUserData(data)
          alert('Usuário encontrado. Login válido!')
          
          navigate('/logged', { state: { userData: data } });
        } 
        else {
          alert('Usuário não encontrado. Email ou senha incorretos.')
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
    }
  }


  return (
    <form onSubmit={handleLogin}>
      <div className={styles.container}>

        <h2>Faça Login</h2>

        <div className={styles.menuLogin}>
          <label>Email:</label>
          <input placeholder='Digite seu Email' required value={loginData.email} onChange={(e) => {handleLoginEdit(e, 'email')}}/>

          <label>Senha:</label>
          <input type='password' placeholder='Digite sua senha' required value={loginData.password} onChange={(e) => {handleLoginEdit(e, 'password')}}/>
        </div>

        <button className={styles.loginButton}>Logar</button>

        <p>
          Ainda não tem Cadastro?
        </p>

        <span className={styles.linkSpan}>
          <Link to="/register" className={styles.link}>Clique aqui</Link>
        </span>

      </div>
    </form>
  )
}

export default MenuLogin