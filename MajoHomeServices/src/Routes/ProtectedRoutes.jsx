import React from 'react'; // Importa React
import { Navigate } from 'react-router-dom'; // Importa el componente Navigate para redirigir
import { useAuth } from '../Components/AuthContext'; // Importa el contexto de autenticación

const ProtectedRoutes = ({ children }) => { // Componente para rutas protegidas
  const { user } = useAuth(); // Obtiene el usuario del contexto de autenticación
  if (user) { // Si hay un usuario autenticado
    return children; // Renderiza los hijos (componentes protegidos)
  }
  return <Navigate to="/Login" />; // Si no hay usuario, redirige a la página de login
}

export default ProtectedRoutes; // Exporta el componente ProtectedRoutes

