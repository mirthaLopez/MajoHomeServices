import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GetServices from '../Services/GetService';
import { useState, useEffect } from 'react';
import '../Styles/CardService.css';

function CardService() {
  const [dataServices, setDataServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await GetServices();
      setDataServices(data);
      console.log(data);
    };
    fetchServices();
  }, []);

  const ServiceList = dataServices.map(item => (
    <Card className="service-card" key={item.id}>
      <Card.Img variant="top" src={`data:image/png;base64,${item.img}`} className="service-card-img" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary">Solicitar Servicio</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div className="container-service">
      {ServiceList}
    </div>
  );
}

export default CardService;

