import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GetServices from '../Services/GetService';
import { useState, useEffect } from 'react';
import '../Styles/CardService.css'

function CardService() {
  const [dataServices, setDataServices] = useState([]);
  
  // Llamado al server, get fetch
  useEffect(() => {
    const fetchServices = async () => {
      const data = await GetServices();
      setDataServices(data); // obtengo dato del server mediante el hook
      console.log(data);
    };
    fetchServices();
  }, []);
  
  // Mapeo datos servicios
  const ServiceList = dataServices.map(item => (
    <Card style={{ width: '25rem' }} key={item.id}>
      <Card.Img variant="top" src={`data:image/png;base64,${item.img}`} width={200} height={300} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary">Solicitar Servicio</Button>
      </Card.Body>
    </Card>
  ));
  
  return (
    <div className='ContainerService'>
      {ServiceList}
    </div>
  );
}

export default CardService;
