import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(); ///////createContext se utiliza para crear un nuevo contexto llamado AuthContext. Un contexto en React permite compartir datos entre componentes sin tener que pasar props

export function useAuth() {
  return useContext(AuthContext); //////useAuth es un hook personalizado que utiliza useContext para acceder al contexto AuthContext. Esto facilita el acceso a los valores del contexto en cualquier componente que lo necesite.
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);/////setUser es la función para actualizar este estado.
  ///////////////////////////////////////////////
  const login = (userData) => {
    setUser(userData);
  };
///////////////////////////////////////////////////
  const logout = () => {
    setUser(null);
  };


  //////AuthContext.Provider envuelve a los componentes hijos ({children}) y proporciona el valor del contexto, que incluye el estado user y las funciones login y logout.
  return (
    <AuthContext.Provider value={{ user, login, logout }}>  
      {children}
    </AuthContext.Provider>
  );
}
