import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from  './MenuRegister.module.css'

const MenuRegister = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleRegisterEdit = (event, name) => {
    setRegisterData({
      ...registerData,
      [name]: event.target.value,
    })
  }

  const HTTP_STATUS = {
    SUCCESS: 201,
    CONFLICT: 409,
    BAD_REQUEST: 400,
  };

  function handleSuccess() {
    alert('Usuário cadastrado com sucesso!');
    window.location.href = '/login';
  }
  
  function handleConflict(data) {
    alert(`Erro ao cadastrar usuário: ${data.message}`);
  }
  
  function handleBadRequest() {
    alert('Erro de solicitação: Verifique os dados enviados.');
  }

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  

  const handleRegister = async (event) => {
    event.preventDefault()

    if (registerData.password === registerData.passwordConfirmation) {
      if (!isEmailValid(registerData.email)) {
        alert('O email inserido não é válido.');
        return;
      }
      try {
        const response = await fetch('http://localhost:3333/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerData),
        })
        if (response.status === HTTP_STATUS.SUCCESS) {
          handleSuccess();
        } 
        else if (response.status === HTTP_STATUS.CONFLICT) {
          const data = await response.json();
          handleConflict(data);
        }
        else if (response.status === HTTP_STATUS.BAD_REQUEST){
          const data = await response.json();
          console.log(data)
          handleBadRequest()
        }
      } catch (error) {
        alert('Ocorreu um erro ao fazer a solicitação', error)
        console.error('Ocorreu um erro ao fazer a solicitação:', error);
      }
    }
    else {
      alert('As senhas não correspondem.');
    }
  };
  

  return (
    <form onSubmit={handleRegister}>
      <div className={styles.container}>

        <h2>Faça sua conta</h2>

        <div className={styles.menuRegister}>
          <label>Nome:</label>
          <input className='userName' placeholder='Digite seu Nome' required value={registerData.name} onChange={(e) => {handleRegisterEdit(e, 'name')}}/>

          <label>Email:</label>
          <input className='userEmail' placeholder='Digite seu Email' required value={registerData.email} onChange={(e) => {handleRegisterEdit(e, 'email')}}/>

          <label>Senha:</label>
          <input id='userPassword' placeholder='Digite sua senha' type='password' required value={registerData.password} onChange={(e) => {handleRegisterEdit(e, 'password')}}/>

          <label>Digite a senha novamente:</label>
          <input id='userConfirmPassword' placeholder='Digite sua senha novamente' type='password' required value={registerData.passwordConfirmation} onChange={(e) => {handleRegisterEdit(e, 'passwordConfirmation')}}/>
          
        </div>

        <button className={styles.registerButton}>Cadastrar-se</button>

        <p>
          Já possui Cadastro??
        </p>

        <span className={styles.linkSpan}>
          <Link to="/" className={styles.link}>Clique aqui</Link>
        </span>

      </div>
    </form>
  )
}

export default MenuRegister