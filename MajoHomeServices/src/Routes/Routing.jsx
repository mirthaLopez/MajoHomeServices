import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update from "../Components/Update";
import AddAdministrator from "../Components/AddAdministrator";
import Login from "../Pages/Login";
import Administracion from "../Pages/Administracion";
import ProtectedRoutes from "./ProtectedRoutes";
import Servicios from "../Pages/Servicios";
import Contact from "../Pages/Contact";
import Inicio from "../Pages/Inicio";
import HitorialConsultas from "../Pages/HitorialConsultas";
import Nosotros from "../Pages/Nosotros";
import ScrollToTop from "../Components/ScrollToTop";
import Reviews from "../Pages/Reviews";

const Routing = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Inicio />} /> 
                <Route path="/Administracion" element={<ProtectedRoutes><Administracion /></ProtectedRoutes>} /> 
                <Route path="/Login" element={<Login />} /> 
                <Route path="/Servicios" element={<Servicios />} /> 
                <Route path="/Contact" element={<Contact />} /> 
                <Route path="/Nosotros" element={<Nosotros />} /> 
                <Route path="/Update/:id" element={<ProtectedRoutes><Update /></ProtectedRoutes>} /> 
                <Route path="/AddAdministrador" element={<ProtectedRoutes><AddAdministrator /></ProtectedRoutes>} /> 
                <Route path="/HitorialConsultas" element={<ProtectedRoutes><HitorialConsultas /></ProtectedRoutes>} /> 
                <Route path="/Reviews" element={<ProtectedRoutes><Reviews /></ProtectedRoutes>} /> 
            </Routes>
        </Router>
    );
}

export default Routing;
