import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../Styles/Header.css'
import logo from '../Img/MHSlogo.png'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to='/Inicio'>
        <img
            src={logo}
            alt="Logo"
            width="130"
            height="120"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '120px'}}
            navbarScroll
          >
            <Nav.Link as={Link} to='/Inicio' className="custom-navlink" style={{ fontSize: '20px' }}>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Servicios' className="custom-navlink" style={{ fontSize: '20px'}}>Servicios</Nav.Link>
            <Nav.Link as={Link} to='/About' className="custom-navlink" style={{ fontSize: '20px' }}>Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/Contact' className="custom-navlink" style={{ fontSize: '20px'}}>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/Ubicacion' className="custom-navlink" style={{ fontSize: '20px'}}>Ubicacion</Nav.Link>
            <NavDropdown title="Otros" id="navbarScrollingDropdown" style={{ fontSize: '20px' }}>
              <NavDropdown.Item as={Link} to='/Login' className="custom-navlink" style={{ fontSize: '20px'}}>Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;