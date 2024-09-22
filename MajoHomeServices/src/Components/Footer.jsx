import '../Styles/Footer.css';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../Img/LogoMajo.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://www.facebook.com/people/Majo-Home-Services/100094669689020/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/majohomeservices/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/0050664783403" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="logo" height={100} width={120} />
        </div>
        <div className="footer-info">
          <h5>Somos MAJO Home Services</h5>
          <p>Correo: mariajoseordonezlopez16@gmail.com</p>
          <p>Teléfono: +50664783403</p>
          <Link to='/Contact'><button>Contáctanos</button></Link>
        </div>
      </div>
      <div className="footer-credits">
        <p>Designed by Mirtha L. Guido.</p>
      </div>
      <div className="footer-wave"></div>
    </footer>
  );
}

export default Footer;







