import LoggedPage from "../components/LoggedPage"
import { AuthProvider } from '../context/AuthContext';

const Logged = () => {
  return (    
    <AuthProvider>
      <LoggedPage />
    </AuthProvider>
  )
}

export default Logged