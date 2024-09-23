import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GetServices from '../Services/GetService';
import { useState, useEffect } from 'react';
import '../Styles/CardService.css';
import { Link } from 'react-router-dom';

function CardService() {
  const [dataServices, setDataServices] = useState([]);
  const location = useLocation();

  /////////////////////Buscador/////////////////////////////////
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredServices = dataServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
////////////////////////////////////////////////////////////////    
  useEffect(() => {
    const fetchServices = async () => {
      const data = await GetServices();
      setDataServices(data);
    };
    fetchServices();
  }, []);

  const ServicesHomePage = dataServices.slice(0, 3); //// obtenemos los primeros tres elementos de la lista 

  return (
    <div>
      <div className="services-container">
        {location.pathname === '/Servicios' && (
          <div className="services-content">
            <h1 className='title-services'>Conozca Nuestros Servicios</h1>
            <input
              type="text"
              placeholder="Buscar servicios..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            /> <br /> <br /> <br />
            {searchTerm && filteredServices.length > 0 ? (
              <div className="contenedor-busqueda">
                {filteredServices.map((item, index) => (
                  <Card className="new-service-card" key={item.id}>
                    <div className={`new-service-card-content ${index % 2 === 0 ? 'align-left' : 'align-right'}`}>
                      <Card.Img variant="top" src={`data:image/png;base64,${item.img}`} className="new-service-card-img" />
                      <Card.Body className="new-service-card-body">
                        <Card.Title className="new-service-card-title">{item.name}</Card.Title>
                        <Card.Text className="new-service-card-text">{item.description}</Card.Text>
                        <Link to='/Contact'><Button className="new-service-card-button">Solicitar Servicio</Button></Link>
                      </Card.Body>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="services-grid">
                {dataServices.map((item, index) => (
                  <Card className="new-service-card" key={item.id}>
                    <div className={`new-service-card-content ${index % 2 === 0 ? 'align-left' : 'align-right'}`}>
                      <Card.Img variant="top" src={`data:image/png;base64,${item.img}`} className="new-service-card-img" />
                      <Card.Body className="new-service-card-body">
                        <Card.Title className="new-service-card-title">{item.name}</Card.Title>
                        <Card.Text className="new-service-card-text">{item.description}</Card.Text>
                        <Link to='/Contact'><Button className="new-service-card-button">Solicitar Servicio</Button></Link>
                      </Card.Body>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        {/* Renderización en la página de Home */}
        {location.pathname === '/' && (
          <div className='container-presentation'>
            <div>
              <h1 className='title-services'>Conozca Nuestros Servicios</h1>
            </div>
            <div className="container-service">
              {ServicesHomePage.map(item => (
                <Card className="service-card" key={item.id}>
                  <div className="service-card-content">
                    <Card.Img variant="right" src={`data:image/png;base64,${item.img}`} className="service-card-img" />
                    <Card.Body className="service-card-body">
                      <div className="service-card-title-container">
                        <Card.Title className="service-card-title">{item.name}</Card.Title>
                      </div>
                      <Card.Text className="service-card-text">{item.description}</Card.Text>
                      <Link to='/Contact'><Button className="service-card-button">Solicitar Servicio</Button></Link>
                    </Card.Body>
                  </div>
                </Card>
              ))}
            </div>
            <div className='bnt-link-services'>
              <Link to='/Servicios'><button className='btn-services'>Ver más servicios</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );  
}

export default CardService;

