import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import { Link } from 'react-router-dom';
import '../Styles/NavAdmin.css'

function NavAdmin() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const CerrarSesion = () => {
    logout();
    navigate('/Login');
  };

  return (
    <nav className="nav-admin">
      <h1>Sistema Administración</h1>
      <ul className="nav-links">
        <li><Link to="/Administracion">Añadir Servicio</Link></li>
        <li><Link to="/add-admin">Añadir Administrador</Link></li>
        <li><button onClick={CerrarSesion}>Cerrar Sesión</button></li>
      </ul>
    </nav>
  );
}

export default NavAdmin;
