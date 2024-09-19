import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import { Link } from 'react-router-dom';
import '../Styles/NavAdmin.css';

function NavAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const CerrarSesion = () => {
    logout();
    navigate('/Login');
  };

  return (
    <nav className="nav-admin">
      <h1>Sistema Administración</h1>
      <ul className="nav-links">
        <li>
          <Link to="/Administracion" className={location.pathname === '/Administracion' ? 'active' : ''}>
            Añadir Servicio
          </Link>
        </li>
        <li>
          <Link to="/AddAdministrador" className={location.pathname === '/AddAdministrador' ? 'active' : ''}>
            Añadir Administrador
          </Link>
        </li>
        <li>
          <Link to="/HitorialConsultas" className={location.pathname === '/HitorialConsultas' ? 'active' : ''}>
          Historial de Consultas
          </Link>
        </li>
        <li>
          <button onClick={CerrarSesion}>Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavAdmin;

