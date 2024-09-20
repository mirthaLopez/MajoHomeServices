import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../Img/MajoLogo.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';


function HeaderNav() {
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
            <Nav.Link as={Link} to='/' className="custom-navlink" style={{ fontSize: '20px', color: "#1477b8", fontWeight:'800'}}>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Servicios' className="custom-navlink" style={{ fontSize: '20px', color: "#1477b8", fontWeight:'800'}}>Servicios</Nav.Link>
            <Nav.Link as={Link} to='/Nosotros' className="custom-navlink" style={{ fontSize: '20px', color: "#1477b8", fontWeight:'800' }}>Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/Contact' className="custom-navlink" style={{ fontSize: '20px', color: "#1477b8", fontWeight:'800' }}>Contacto</Nav.Link>
            {location.pathname !== '/Administracion' && <NavDropdown title="Otros" id="navbarScrollingDropdown" className='custom-navScroll'>
            <NavDropdown.Item as={Link} to='/Login' className="custom-navlink" style={{ fontSize: '20px', color: "#1477b8",fontWeight:'800'}}>Login</NavDropdown.Item>
            </NavDropdown>}
          </Nav>
          <div className="social-icons mt-3">
            <a href="https://www.facebook.com/people/Majo-Home-Services/100094669689020/" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-facebook" style={{ fontSize: '24px', color: "#1477b8" }}></i>
            </a>
            <a href="https://wa.me/0050664783403" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-whatsapp" style={{ fontSize: '24px', color: "#1477b8" }}></i>
            </a>
            <a href="https://www.instagram.com/majohomeservices/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram" style={{ fontSize: '24px', color: "#1477b8" }}></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
