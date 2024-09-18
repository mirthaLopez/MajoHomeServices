import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Update from "../Components/Update";
import AddAdministrator from "../Components/AddAdministrator";
import Login from "../Pages/Login";
import Administracion from "../Pages/Administracion";
import ProtectedRoutes from "./ProtectedRoutes";
import Inicio from "../Pages/Inicio";
import Servicios from "../Pages/Servicios";
import Ubicacion from "../Pages/Ubicacion";
import Contact from "../Pages/Contact";
import About from "../Pages/About";


const Routing = () => {
    return (
        <Router>
        <Routes>
          <Route path="/Administracion" element={<ProtectedRoutes><Administracion /></ProtectedRoutes>} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Inicio" element={<Inicio />} /> 
          <Route path="/Servicios" element={<Servicios />} /> 
          <Route path="/Ubicacion" element={<Ubicacion />} /> 
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Update/:id" element={<ProtectedRoutes><Update /></ProtectedRoutes>} /> 
          <Route path="/AddAdministrador" element={<ProtectedRoutes><AddAdministrator /></ProtectedRoutes>} /> 
          {/*<Route path="/Home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />*/}
        </Routes>
       </Router>
    )
}

export default Routing;  