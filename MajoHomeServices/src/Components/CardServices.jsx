import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GetServices from '../Services/GetService';
import { useState, useEffect } from 'react';
import '../Styles/CardService.css';
import bathroom from '../Img/presentacion.jpg';

function CardService() {
  const [dataServices, setDataServices] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchServices = async () => {
      const data = await GetServices();
      setDataServices(data);
    };
    fetchServices();
  }, []);

  return (
    <div>
      {location.pathname !== '/' && (
        <div className='container-presentation'>
          <img src={bathroom} alt="" className='imgPresentation'/>
          <h1 className='title'>Conozca Nuestros Servicios</h1>
        </div>
      )}
      
      <div className="container-service">
      {dataServices.map(item => (
     <Card className="service-card" key={item.id}>
      <div className="service-card-content">
        <Card.Img variant="left" src={`data:image/png;base64,${item.img}`} className="service-card-img" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">Solicitar Servicio</Button>
        </Card.Body>
      </div>
     </Card>))}
      </div>
    </div>
  );
}

export default CardService;


