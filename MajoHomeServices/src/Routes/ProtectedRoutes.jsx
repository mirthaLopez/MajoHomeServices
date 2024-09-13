import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
const ProtectedRoutes = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return children;
  }
  return <Navigate to="/Login" />;
}

export default ProtectedRoutes;
