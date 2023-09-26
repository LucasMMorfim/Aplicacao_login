import MenuLogin from '../components/MenuLogin'
import { AuthProvider } from '../context/AuthContext';

const Login = () => {
  return (
    <div>      
      <AuthProvider>
        <MenuLogin />
      </AuthProvider>
    </div>
  )
}

export default Login
