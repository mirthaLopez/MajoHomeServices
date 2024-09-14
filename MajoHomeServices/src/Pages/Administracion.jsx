import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import AddService from '../Components/AddService'
import HeaderNav from '../Components/Header';
function Administracion() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const CerrarSesion = () => {
    logout();
    navigate('/Login');
  };

  return (
    <div>
      <HeaderNav />
      <div style={{marginTop:170}}>
      <AddService />
      </div>
      <button onClick={CerrarSesion}>Cerrar Sesión</button>
    </div>
  );
}

export default Administracion;
