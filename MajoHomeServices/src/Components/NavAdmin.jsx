import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import { Link } from 'react-router-dom';
import '../Styles/NavAdmin.css';
import logo from '../Img/MajoLogo.jpeg';

function NavAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const CerrarSesion = () => {
    logout();
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-admin">
      <div className="nav-header">
        <h1>Sistema de Administración</h1>
        <Link to='/'><img src={logo} alt="Logo" className="nav-logo" /></Link>
        <button className="nav-toggle" onClick={toggleDropdown}>
          ☰
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
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
          <Link to="/Reviews" className={location.pathname === '/Reviews' ? 'active' : ''}>
            Añadir Reseña
          </Link>
        </li>
        <li>
          <button onClick={CerrarSesion} className="logout-button">Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavAdmin;



