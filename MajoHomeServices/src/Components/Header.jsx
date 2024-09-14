import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../Img/logo2.png';
import 'bootstrap-icons/font/bootstrap-icons.css';


function HeaderNav() {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to='/Inicio'>
          <img
            src={logo}
            alt="Logo"
            width="150"
            height="130"
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
            <Nav.Link as={Link} to='/Inicio' className="custom-navlink" style={{ fontSize: '20px', color: "#258c7c" }}>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Servicios' className="custom-navlink" style={{ fontSize: '20px', color: "#258c7c" }}>Servicios</Nav.Link>
            <Nav.Link as={Link} to='/About' className="custom-navlink" style={{ fontSize: '20px', color: "#258c7c" }}>Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/Contact' className="custom-navlink" style={{ fontSize: '20px', color: "#258c7c" }}>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/Ubicacion' className="custom-navlink" style={{ fontSize: '20px', color: "#258c7c" }}>Ubicacion</Nav.Link>
            <NavDropdown title="Otros" id="navbarScrollingDropdown" className='custom-navScroll'>
              <NavDropdown.Item as={Link} to='/Login' className="custom-navlink" style={{ fontSize: '20px', color: "#258c7c" }}>Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="social-icons mt-3">
            <a href="https://www.facebook.com/people/Majo-Home-Services/100094669689020/" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-facebook" style={{ fontSize: '24px', color: "#258c7c" }}></i>
            </a>
            <a href="https://wa.me/0050664783403" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-whatsapp" style={{ fontSize: '24px', color: "#258c7c" }}></i>
            </a>
            <a href="https://www.instagram.com/majohomeservices/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram" style={{ fontSize: '24px', color: "#258c7c" }}></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
