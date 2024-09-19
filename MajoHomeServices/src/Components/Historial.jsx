import React from 'react'
import GetRequest from '../Services/GetRequest'
import { useState, useEffect } from 'react';
import '../Styles/Historial.css';
import Swal from 'sweetalert2';
import DeleteRequest from '../Services/DeleteRequest';

function Historial() {
  const [dataRequests, setDataRequest] = useState([]);
  useEffect(() => {
    const fetchRequest = async () => {
      const data = await GetRequest();
      setDataRequest(data);
    };
    fetchRequest();
  }, []);

  const onDelete=(id)=>{
    Swal.fire({
      title: "¿Estas seguro que deseas eliminar esta consulta?",
      text: "La informacion eliminada no se podra recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminalo!"
    }).then((result) => {
      if (result.isConfirmed) {
        const Delete = async (id) => {
          await  DeleteRequest(id);
          setDataRequest(prevData => prevData.filter(item => item.id !== id));
        }
        Swal.fire({
          title: "Eliminado!",
          text: "El servicio ha sido eliminado con exito.",
          icon: "success"
        });
        Delete(id);
      }
    });
  }
  return (
    <div className='container-history'>
      <h1>Historial de Consultas</h1>
      <div className='container-table'>
      {dataRequests.map(item => (
      <table key={item.id}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Consulta</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Nombre">{item.nombre}</td>
            <td data-label="Correo">{item.correo}</td>
            <td data-label="Telefono">{item.telefono}</td>
            <td data-label="Consulta">{item.mensaje}</td>
            <td data-label="Opciones"><button onClick={() => onDelete(item.id)}>Eliminar</button></td>
          </tr>
        </tbody>
      </table>
    ))}
    </div>
  </div>  
  )
}

export default Historial;