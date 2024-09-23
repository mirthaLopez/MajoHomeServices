import React from 'react'; // Importa React
import UpdateService from '../Services/UpdateService'; // Importa el servicio para actualizar
import { useNavigate, useParams } from 'react-router-dom'; // Importa hooks de enrutamiento
import { useEffect, useState } from 'react'; // Importa hooks de efecto y estado
import GetServicebyId from '../Services/GetServiceById'; // Importa el servicio para obtener un servicio por ID
import Swal from 'sweetalert2'; // Importa SweetAlert para alertas
import { Link } from 'react-router-dom'; // Importa Link para navegación
import '../Styles/Update.css'; // Importa el archivo CSS para estilos
import NavAdmin from './NavAdmin'; // Importa el componente de navegación de administración

function Update() {
  const Navigate = useNavigate(); // Inicializa el hook para la navegación
  const { id } = useParams(); // Obtiene el ID del servicio desde los parámetros de la URL
  const [dataService, setDataServices] = useState({ // Estado para almacenar los datos del servicio
    id: id,
    name: '',
    description: '', 
    img: ''
  });

  useEffect(() => { // Efecto para cargar los datos del servicio cuando el ID cambia
    const fetchServices = async () => {
      const data = await GetServicebyId(id); // Obtiene los datos del servicio por ID
      setDataServices({ ...data, name: data.name, description: data.description, img: data.img }); // Actualiza el estado con los datos obtenidos
    };
    fetchServices(); // Llama a la función para obtener los datos
  }, [id]); // Se ejecuta cuando el ID cambia

  const convertToBase64 = (event) => { // Función para convertir la imagen a base64
    const file = event.target.files[0]; // Obtiene el archivo seleccionado
    if (file) { // Si hay un archivo
      const reader = new FileReader(); // Crea un lector de archivos
      reader.onloadend = () => { // Al finalizar la lectura
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, ""); // Convierte a base64
        setDataServices({ ...dataService, img: base64String }); // Actualiza el estado con la imagen en base64
      };
      reader.readAsDataURL(file); // Lee el archivo como URL de datos
    }
  };

  const Save = async () => { // Función para guardar los cambios
    const validName = dataService.name.trim(); // Valida el nombre
    const validDescription = dataService.description.trim(); // Valida la descripción
    const validImg = dataService.img.trim(); // Valida la imagen

    if (!validName || !validDescription || !validImg) { // Verifica si hay campos vacíos
      Swal.fire({ // Muestra una alerta de error
        icon: "error",
        title: "Campos Vacios",
        text: "Debes completar todos los espacios!",
      });
    } else { // Si todos los campos son válidos
      await UpdateService(dataService); // Llama al servicio para actualizar
      Swal.fire({ // Muestra una alerta de éxito
        position: "center",
        icon: "success",
        title: "La edición fue exitosa",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => { // Redirige después de 2 segundos
        Navigate('/Administracion');
      }, 2000);
    }
  };

  return (
    <div>
      <NavAdmin /> {/* Renderiza el componente de navegación */}
      <div className="update-container"> {/* Contenedor principal */}
        <h1>Actualiza este servicio</h1> {/* Título de la sección */}
        <div className="form-group"> {/* Grupo de formulario para nombre del servicio */}
          <label htmlFor="serviceName">Nombre del servicio:</label> {/* Etiqueta */}
          <input type="text" id="serviceName" name="serviceName" 
            value={dataService.name} // Valor del input ligado al estado
            onChange={e => setDataServices({ ...dataService, name: e.target.value })} // Maneja el cambio en el input
            required /> {/* Requiere el campo */}
        </div>
        <div className="form-group"> {/* Grupo de formulario para descripción */}
          <label htmlFor="serviceDescription">Descripción:</label> {/* Etiqueta */}
          <input type="text" id="serviceDescription" name="serviceDescription" 
            value={dataService.description} // Valor del input ligado al estado
            onChange={e => setDataServices({ ...dataService, description: e.target.value })} // Maneja el cambio en el input
            required /> {/* Requiere el campo */}
        </div>
        <div className="form-group"> {/* Grupo de formulario para imagen */}
          <label htmlFor="serviceImage">Agrega una nueva imagen</label> {/* Etiqueta */}
          <input type="file" id="serviceImage" accept="image/*" onChange={convertToBase64} /> {/* Input para archivos */}
          {dataService.img && <img id="imagePreview" src={`data:image/jpeg;base64,${dataService.img}`} alt="Vista previa de la imagen" width={200} height={200} />} {/* Vista previa de la imagen si existe */}
        </div>
        <div className="button-group"> {/* Grupo de botones */}
          <button className="btn-save" onClick={Save}>Guardar Cambios</button> {/* Botón para guardar */}
          <Link to="/Administracion"><button className="btn-cancel">Cancelar</button></Link> {/* Botón para cancelar y volver */}
        </div>
      </div>
    </div>
  );
}

export default Update; // Exporta el componente Update


