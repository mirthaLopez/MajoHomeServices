import '../Styles/Footer.css'
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../Img/MajoLogo.jpeg'
function Footer() {
  return (
    <footer>
        <div className="footer">
      <div className="footer-links">
        <Link to="/">Inicio</Link>
        <Link to="/Servicios">Servicios</Link>
        <Link to="/Contact">Contacto</Link>
        <Link to="/Nosotros">Sobre Nosotros</Link>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/people/Majo-Home-Services/100094669689020/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/majohomeservices/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://wa.me/0050664783403" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
      <div>
       <img src={logo} alt="logo" height={100} width={120}/>
      </div>
      </div>
      <div className="footer-credits">
        <p>Designed by Mirtha L. Guido.</p>
      </div>
    </footer>
  );
}

export default Footer;



