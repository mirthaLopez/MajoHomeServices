import React, { useState, useEffect } from 'react';
import GetRequest from '../Services/GetRequest';
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

  const onDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro que deseas eliminar esta consulta?",
      text: "La información eliminada no se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, elimínalo!"
    }).then((result) => {
      if (result.isConfirmed) {
        const Delete = async (id) => {
          await DeleteRequest(id);
          setDataRequest(prevData => prevData.filter(item => item.id !== id));
        }
        Delete(id);
        Swal.fire({
          title: "Eliminado!",
          text: "La consulta ha sido eliminada con éxito.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className='container-history'>
      <h1 className='tag-h1'>Historial de Consultas</h1>
      <div className='container-table'>
        <table>
          <thead>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Servicio</th>
              <th>Consulta</th>
              <th>Opciones</th>
          </thead>
          <tbody>
            {dataRequests.map(item => (
              <tr key={item.id}>
                <td data-label="Nombre">{item.nombre}</td>
                <td data-label="Correo">{item.correo}</td>
                <td data-label="Teléfono">{item.telefono}</td>
                <td data-label="Servicio">{item.servicio}</td>
                <td data-label="Consulta">{item.mensaje}</td>
                <td data-label="Opciones">
                  <button onClick={() => onDelete(item.id)} className='button-delete'>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Historial;
