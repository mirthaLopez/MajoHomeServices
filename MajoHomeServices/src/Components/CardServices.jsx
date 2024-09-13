import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GetServices from '../Services/GetService';
import { useState, useEffect } from 'react';

function CardService() {
  const [dataServices, setDataServices]= useState([]);
    ////// LLamado al server, get fecth//////////
    useEffect(() => {
      const fetchServices = async () => {
        const data = await GetServices();
        setDataServices(data) /// obtengo dato del server mediante el hook
      };
      fetchServices();
      }, []);
    /////Mapeo datos servicios////////
    const ServiceList = dataServices.map((item) => {
      const id = item.id;
      const name = item.name;
      const description = item.description;
      const image= `data:image/png;base64,${item.img}`;
      return (
        <Card style={{ width: '20rem'}} key={id}>
        <Card.Img variant="top" src={image} width={200} height={300}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      );
  });
  return (
    <div style={{display:'flex', gap:'4rem'}} className='ContainerService'>{ServiceList}</div>
  );
}

export default CardService;