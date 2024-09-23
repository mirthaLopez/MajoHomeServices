import React, { useState } from 'react'; // Importa React y useState
import { useNavigate, useLocation } from 'react-router-dom'; // Importa hooks para la navegación y la ubicación
import { useAuth } from '../Components/AuthContext'; // Importa el contexto de autenticación
import { Link } from 'react-router-dom'; // Importa el componente Link para la navegación
import '../Styles/NavAdmin.css'; // Importa estilos CSS para el componente de navegación
import logo from '../Img/MajoLogo.jpeg'; // Importa la imagen del logo

function NavAdmin() {
  const navigate = useNavigate(); // Hook para navegar a otras rutas
  const location = useLocation(); // Hook para obtener la ubicación actual
  const { logout } = useAuth(); // Función para cerrar sesión desde el contexto de autenticación
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la apertura/cierre del menú desplegable

  // Función para manejar el cierre de sesión
  const CerrarSesion = () => {
    logout(); // Llama a la función de cierre de sesión
    navigate('/'); // Redirige al usuario a la página principal
  };

  // Función para alternar el estado del menú desplegable
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Cambia el estado de isOpen
  };

  return (
    <nav className="nav-admin"> {/* Contenedor principal de navegación */}
      <div className="nav-header"> {/* Encabezado de navegación */}
        <h1>Sistema de Administración</h1> {/* Título de la navegación */}
        <Link to='/'><img src={logo} alt="Logo" className="nav-logo" /></Link> {/* Logo que redirige a la página principal */}
        <button className="nav-toggle" onClick={toggleDropdown}> {/* Botón para abrir/cerrar el menú */}
          ☰ {/* Icono del menú */}
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}> {/* Lista de enlaces de navegación */}
        <li>
          <Link to="/Administracion" className={location.pathname === '/Administracion' ? 'active' : ''}> {/* Enlace a "Añadir Servicio" */}
            Añadir Servicio
          </Link>
        </li>
        <li>
          <Link to="/AddAdministrador" className={location.pathname === '/AddAdministrador' ? 'active' : ''}> {/* Enlace a "Añadir Administrador" */}
            Añadir Administrador
          </Link>
        </li>
        <li>
          <Link to="/HitorialConsultas" className={location.pathname === '/HitorialConsultas' ? 'active' : ''}> {/* Enlace a "Historial de Consultas" */}
            Historial de Consultas
          </Link>
        </li>
        <li>
          <Link to="/Reviews" className={location.pathname === '/Reviews' ? 'active' : ''}> {/* Enlace a "Añadir Reseña" */}
            Añadir Reseña
          </Link>
        </li>
        <li>
          <button onClick={CerrarSesion} className="logout-button">Cerrar Sesión</button> {/* Botón para cerrar sesión */}
        </li>
      </ul>
    </nav>
  );
}

export default NavAdmin; // Exporta el componente NavAdmin


