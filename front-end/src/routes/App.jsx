import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Logged from '../pages/Logged';
import PageNotFound from '../pages/PageNotFound';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route exact path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/logged" element={<Logged /> } />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
