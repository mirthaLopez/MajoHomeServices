import React, { useState, useEffect } from 'react'; // Importa React y hooks de estado y efecto
import GetRequest from '../Services/GetRequest'; // Importa la función para obtener solicitudes
import '../Styles/Historial.css'; // Importa estilos CSS para el historial
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas
import DeleteRequest from '../Services/DeleteRequest'; // Importa la función para eliminar solicitudes

function Historial() {
  const [dataRequests, setDataRequest] = useState([]); // Estado para almacenar las solicitudes

  // Efecto para obtener las solicitudes al cargar el componente
  useEffect(() => {
    const fetchRequest = async () => {
      const data = await GetRequest(); // Llama a la función para obtener solicitudes
      setDataRequest(data); // Establece los datos obtenidos en el estado
    };
    fetchRequest(); // Ejecuta la función para obtener solicitudes
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para manejar la eliminación de una solicitud
  const onDelete = (id) => {
    // Muestra una alerta de confirmación
    Swal.fire({
      title: "¿Estás seguro que deseas eliminar esta consulta?",
      text: "La información eliminada no se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, elimínalo!"
    }).then((result) => {
      if (result.isConfirmed) { // Si el usuario confirma la eliminación
        const Delete = async (id) => {
          await DeleteRequest(id); // Llama a la función para eliminar la solicitud
          setDataRequest(prevData => prevData.filter(item => item.id !== id)); // Actualiza el estado eliminando el item
        }
        Delete(id); // Ejecuta la función de eliminación
        // Muestra una alerta de éxito
        Swal.fire({
          title: "Eliminado!",
          text: "La consulta ha sido eliminada con éxito.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className='container-history'> {/* Contenedor principal del historial */}
      <h1 className='tag-h1'>Historial de Consultas</h1> {/* Título */}
      <div className='container-table'> {/* Contenedor para la tabla */}
        <table> {/* Tabla para mostrar las solicitudes */}
          <thead>
              <th>Nombre</th> {/* Encabezado de columna para Nombre */}
              <th>Correo</th> {/* Encabezado de columna para Correo */}
              <th>Teléfono</th> {/* Encabezado de columna para Teléfono */}
              <th>Servicio</th> {/* Encabezado de columna para Servicio */}
              <th>Consulta</th> {/* Encabezado de columna para Consulta */}
              <th>Opciones</th> {/* Encabezado de columna para Opciones */}
          </thead>
          <tbody>
            {dataRequests.map(item => ( // Mapea sobre las solicitudes para crear filas
              <tr key={item.id}> {/* Clave única para cada fila */}
                <td data-label="Nombre">{item.nombre}</td> {/* Celda para Nombre */}
                <td data-label="Correo">{item.correo}</td> {/* Celda para Correo */}
                <td data-label="Teléfono">{item.telefono}</td> {/* Celda para Teléfono */}
                <td data-label="Servicio">{item.servicio}</td> {/* Celda para Servicio */}
                <td data-label="Consulta">{item.mensaje}</td> {/* Celda para Consulta */}
                <td data-label="Opciones">
                  <button onClick={() => onDelete(item.id)} className='button-delete'>Eliminar</button> {/* Botón para eliminar la solicitud */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Historial; // Exporta el componente

