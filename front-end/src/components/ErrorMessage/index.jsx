import { Link } from 'react-router-dom'
import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={styles.pageError}>
        <div className={styles.error}></div>

      <p className={styles.warning}>Erro 404. Página não encontrada</p>
      
      <span className={styles.buttons}>
        
        <div className={styles.criarCadastro}>
          <span>
            <Link to="/register">Criar Cadastro</Link>
          </span>
        </div>

        <div className={styles.cadastrar}>
          <span>
            <Link to="/">Ja tenho Cadastro</Link>
          </span>
        </div>
      </span> 

    </div>
  )
}

export default ErrorMessage
