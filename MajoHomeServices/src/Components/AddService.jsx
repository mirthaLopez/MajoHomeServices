import React from 'react'; // Importa React
import { useState, useEffect } from 'react'; // Importa hooks de estado y efecto
import PostService from '../Services/PostService'; // Importa la función para crear un servicio
import GetServices from '../Services/GetService'; // Importa la función para obtener servicios
import DeleteService from '../Services/DeleteService'; // Importa la función para eliminar un servicio
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import '../Styles/AddService.css'; // Importa estilos CSS para el componente
import Swal from 'sweetalert2' // Importa SweetAlert2 para mostrar alertas

/////// Funcion para añadir un nuevo servicio al db.json /////////
function AddService() {
    ////// Declaración de variables /////////////
    const [serviceName, setName]= useState(''); // Estado para el nombre del servicio
    const [serviceDescription, setDescription]= useState(''); // Estado para la descripción del servicio
    const [dataServices, setDataServices]= useState([]); // Estado para la lista de servicios
    const [ImgService,setImg] = useState(''); // Estado para la imagen del servicio
   
    ///// Seteo de datos /////////////////////////////
    const HandleName = (event) => setName(event.target.value); // Maneja el cambio en el input de nombre
    const HandleDescription= (event) => setDescription(event.target.value); // Maneja el cambio en el input de descripción
    
    ////// Convierte la imagen a base64 ////////////
    const convertToBase64 = (event) => {
        const file = event.target.files[0]; // Obtiene el archivo seleccionado
        if (file) {
          const reader = new FileReader(); // Crea un nuevo objeto FileReader
          reader.onloadend = () => {
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, ""); // Convierte la imagen a base64
            setImg(base64String); // Establece la imagen en base64
            document.getElementById('imagePreview').src = `data:image/jpeg;base64,${base64String}`; // Muestra vista previa
          };
          reader.readAsDataURL(file); // Lee el archivo como URL de datos
        }
    };
      
    ////// Funcion para guardar un nuevo servicio en el db.json //////////
    const Save = async () => {
        const validName = serviceName.trim(); // Elimina espacios en blanco del nombre
        const validDescription = serviceDescription.trim(); // Elimina espacios en blanco de la descripción
        const validImg = ImgService.trim(); // Elimina espacios en blanco de la imagen
        
        // Verifica si todos los campos están completos
        if (!validName || !validDescription || !validImg) {
            Swal.fire({
                icon: "error",
                title: "Campos Vacíos",
                text: "¡Debes completar todos los espacios!", // Mensaje de error si hay campos vacíos
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Servicio añadido con éxito",
                showConfirmButton: false,
                timer: 1500, // Muestra un mensaje de éxito durante 1.5 segundos
            });
          
            const NewService = {
                name: serviceName, // Nombre del servicio
                description: serviceDescription, // Descripción del servicio
                img: ImgService, // Imagen del servicio
            };
          
            const NewItem = await PostService(NewService); // Envía el nuevo servicio al servidor
            setDataServices(prevData => [...prevData, NewItem]); // Actualiza la lista de servicios
            
            // Limpia los inputs
            setName(''); // Reinicia el nombre del servicio
            setDescription(''); // Reinicia la descripción del servicio
            setImg(''); // Reinicia la imagen del servicio
            document.getElementById('imagePreview').src = ''; // Limpia la vista previa de la imagen
        }
    };
      
    ////// Llamado al servidor, obtiene los servicios ////////
    useEffect(() => {
        const fetchServices = async () => {
            const data = await GetServices(); // Obtiene los servicios
            setDataServices(data); // Establece el estado con los servicios obtenidos
        };
        fetchServices(); // Llama a la función para obtener servicios
    }, []); // Se ejecuta una vez al montar el componente

    /////////// Función para eliminar un servicio //////////////
    const AlertDelete=(id)=>{ 
        Swal.fire({
            title: "¿Estás seguro que deseas eliminar este servicio?", // Mensaje de confirmación
            text: "La información eliminada no se podrá recuperar!", // Advertencia sobre la eliminación
            icon: "warning",
            showCancelButton: true, // Muestra botón de cancelar
            confirmButtonColor: "#3085d6", // Color del botón de confirmación
            cancelButtonColor: "#d33", // Color del botón de cancelar
            confirmButtonText: "Sí, elimínalo!" // Texto del botón de confirmación
        }).then((result) => {
            if (result.isConfirmed) { // Si el usuario confirma la eliminación
                const Delete = async (id) => {
                    await DeleteService(id); // Llama a la función para eliminar el servicio
                    setDataServices(prevData => prevData.filter(item => item.id !== id)); // Actualiza la lista de servicios
                };
                Delete(id); // Ejecuta la función de eliminación
                Swal.fire({
                    title: "Eliminado!", // Mensaje de éxito
                    text: "El servicio ha sido eliminado con éxito.",
                    icon: "success" // Icono de éxito
                });
            }
        });
    };

    ////// Recorre la lista de servicios con un map y muestra su contenido en etiquetas ////
    const ServiceList = dataServices.map((item) => {
        const id = item.id; // ID del servicio
        const name = item.name; // Nombre del servicio
        const description = item.description; // Descripción del servicio
        const image = `data:image/png;base64,${item.img}`; // Imagen en formato base64
        return (
            <ServiceCard 
                key={id} // Clave única para cada servicio
                id={id} 
                name={name} 
                description={description} 
                image={image} 
                onDelete={AlertDelete} // Función para eliminar el servicio
            />
        );
    });

    // Componente para mostrar cada tarjeta de servicio
    function ServiceCard({ id, name, description, image, onDelete }) {
        return (
            <div className="service-card"> {/* Contenedor de la tarjeta de servicio */}
                <img src={image} alt={name} className="service-card-image"/> {/* Imagen del servicio */}
                <div className="service-card-content">
                    <h3>{name}</h3> {/* Nombre del servicio */}
                    <p>{description}</p> {/* Descripción del servicio */}
                    <div className="service-card-buttons">
                        <button onClick={() => onDelete(id)}>Eliminar</button> {/* Botón para eliminar el servicio */}
                        <Link to={`/Update/${id}`}><button>Actualizar</button></Link> {/* Botón para actualizar el servicio */}
                    </div>
                </div>
            </div>
        );
    }

    ////////////////// Renderización ////////////////
    return(
        <div>
            <h1 className='tag-h1'>Añade un nuevo servicio</h1> {/* Título del formulario */}
            <div className="form-container"> {/* Contenedor del formulario */}
                <div className="form-group">
                    <label htmlFor="serviceName">Nombre del servicio:</label> {/* Etiqueta para el input de nombre */}
                    <input type="text" id="serviceName" name="serviceName" value={serviceName} onChange={HandleName} required /> {/* Campo de entrada para el nombre */}
                </div>
                <div className="form-group">
                    <label htmlFor="serviceDescription">Descripción:</label> {/* Etiqueta para el input de descripción */}
                    <input type="text" id="serviceDescription" name="serviceDescription" value={serviceDescription} onChange={HandleDescription} required /> {/* Campo de entrada para la descripción */}
                </div>
                <div className="form-group">
                    <h4>Incluye una imagen de referencia</h4> {/* Instrucción para cargar una imagen */}
                    <input type="file" accept="image/*" onChange={convertToBase64} /> {/* Campo para subir una imagen */}
                    {ImgService && <img id="imagePreview" src={`data:image/jpeg;base64,${ImgService}`} alt="Vista previa de la imagen" width={200} height={200} />} {/* Vista previa de la imagen */}
                </div>
                <button className="btn-save" onClick={Save}>Guardar</button> {/* Botón para guardar el nuevo servicio */}
            </div>
            <div className='contenedorPrimario'>
                <h1 className='tag-h1'>Lista de Servicios</h1> {/* Título para la lista de servicios */}
                <div className="service-list">{ServiceList}</div> {/* Muestra la lista de servicios */}
            </div>
        </div>
    );
} 

export default AddService;
