import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import AddService from '../Components/AddService'

function Administracion() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const CerrarSesion = () => {
    logout();
    navigate('/Login');
  };

  return (
    <div>
      <AddService />
      <button onClick={CerrarSesion}>Cerrar Sesión</button>
    </div>
  );
}

export default Administracion;
