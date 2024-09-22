import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../Img/MajoLogo.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HeaderNav() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          <img
            src={logo}
            alt="Logo"
            width="120"
            height="120"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/' className={`custom-navlink ${location.pathname === '/' ? 'active' : ''}`} style={{ fontSize: '20px' }}>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Servicios' className={`custom-navlink ${location.pathname === '/Servicios' ? 'active' : ''}`} style={{ fontSize: '20px' }}>Servicios</Nav.Link>
            <Nav.Link as={Link} to='/Nosotros' className={`custom-navlink ${location.pathname === '/Nosotros' ? 'active' : ''}`} style={{ fontSize: '20px' }}>Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/Contact' className={`custom-navlink ${location.pathname === '/Contact' ? 'active' : ''}`} style={{ fontSize: '20px' }}>Contacto</Nav.Link>
            {location.pathname !== '/Administracion' && (
              <NavDropdown title="Otros" id="navbarScrollingDropdown" className='custom-navScroll'>
                <NavDropdown.Item as={Link} to='/Login' className={`custom-navlink ${location.pathname === '/Login' ? 'active' : ''}`} style={{ fontSize: '20px' }}>Login</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <div className="social-icons mt-3">
            <a href="https://www.facebook.com/people/Majo-Home-Services/100094669689020/" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://wa.me/0050664783403" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/majohomeservices/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;

