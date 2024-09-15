import '../Styles/Footer.css'
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className="footer">
      <div className="footer-links">
        <Link to="/Inicio">Inicio</Link>
        <Link to="/Servicios">Servicios</Link>
        <Link to="/Contact">Contacto</Link>
        <Link to="/About">Sobre Nosotros</Link>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/people/Majo-Home-Services/100094669689020/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/majohomeservices/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://wa.me/0050664783403" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
      <div className="footer-form">
        <h2>Contáctanos</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      </div>
      <div className="footer-credits">
        <p>Designed by Mirtha L. Guido.</p>
      </div>
    </footer>
  );
}

export default Footer;



