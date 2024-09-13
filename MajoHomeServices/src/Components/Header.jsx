import '../Styles/Header.css'
import React from 'react'
import {Link} from "react-router-dom"; //// necesario para poder usar link to

function Header() {
  return (
   <header>
    <nav>
        <img src="" alt="" />
        <ul>
            <li><Link to="/Inicio"> Inicio</Link></li>
            <li><Link to="/Servicios"> Servicios </Link></li>
            <li><Link to="/About"> Sobre Nosotros </Link></li>
            <li><Link to="/Contact"> Contacto </Link></li>
            <li><Link to="/Login"> Login</Link></li>
        </ul>
    </nav>
   </header>
  )
}

export default Header