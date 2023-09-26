import { createContext, useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate, useLocation } from 'react-router-dom'


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;
  

  const [userData, setUserData] = useState(null);
  const isLoggedIn = !!userData;

  useEffect(()=>{
    const token = localStorage.getItem('token')

    if (token) {
      const data = jwt_decode(token);

      if(data){
        setUserData(data?.user); 
      return 
      }  
    }
    
    navigate('/login');
  },[])

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, setUserData }}>
      {isLoggedIn || currentPage === '/login' ? children : ''}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
