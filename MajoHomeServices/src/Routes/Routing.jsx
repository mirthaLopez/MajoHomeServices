import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Update from "../Components/Update";
import Login from "../Pages/Login";
import Administracion from "../Pages/Administracion";
import ProtectedRoutes from "./ProtectedRoutes";
import Inicio from "../Pages/Inicio";
const Routing = () => {
    return (
        <Router>
        <Routes>
          <Route path="/Administracion" element={<ProtectedRoutes><Administracion /></ProtectedRoutes>} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Inicio" element={<Inicio />} /> 
          <Route path="/Update/:id" element={<ProtectedRoutes><Update /></ProtectedRoutes>} /> 
          {/*<Route path="/Home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />*/}
        </Routes>
       </Router>
    )
}

export default Routing;  