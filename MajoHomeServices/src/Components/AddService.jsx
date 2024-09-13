import React from 'react';
import { useState, useEffect } from 'react';
import PostService from '../Services/PostService';
import GetServices from '../Services/GetService';
import DeleteService from '../Services/DeleteService';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'



///////Funcion Añade Nuevo Servicio al db.json///////////
function AddService() {
    //////Declaracion de variables/////////////
    const [serviceName, setName]= useState('');
    const [serviceDescription, setDescription]= useState('');
    const [dataServices, setDataServices]= useState([]);
    const [ImgService,setImg] = useState('')
   
    /////Seteo Data/////////////////////////////
    const HandleName = (event) => setName(event.target.value); 
    const HandleDescription= (event) => setDescription(event.target.value); 
    //////Convierte la imagen a base64////////////
    const convertToBase64 = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result.replace("data:", "").replace(/^.+,/, ""); ///Imagen en base64
            setImg(base64String) ////Seteo Imagen
            document.getElementById('imagePreview').src = `data:img/jpeg;base64,${base64String}`; // Mostrar vista previa
          };
          reader.readAsDataURL(file);
        }
      };
      
    ////// Funcion Guardar Nuevo Servicio en el db.json///////
    const Save = async () => {
    const validName = serviceName.trim();
    const validDescription = serviceDescription.trim();
    const validImg = ImgService.trim();
        
        if (!validName || !validDescription || !validImg) {
          Swal.fire({
            icon: "error",
            title: "Campos Vacíos",
            text: "¡Debes completar todos los espacios!",
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Servicio añadido con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
          
          const NewService = {
            name: serviceName,
            description: serviceDescription,
            img: ImgService,
          };
          
          const NewItem = await PostService(NewService);
          setDataServices(prevData => [...prevData, NewItem])        }
      };
      
  ////// LLamado al server, get fecth//////////
  useEffect(() => {
    const fetchServices = async () => {
      const data = await GetServices();
      setDataServices(data) /// obtengo dato del server mediante el hook
    };
    fetchServices();
    }, []);
    ///////////Funcion elimina tarea////////////////
    const AlertDelete=(id)=>{ 
      Swal.fire({
        title: "¿Estas seguro que deseas eliminar este servicio?",
        text: "La informacion eliminada no se podra recuperar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminalo!"
      }).then((result) => {
        if (result.isConfirmed) {
          const Delete = async (id) => {
            await  DeleteService(id);
            setDataServices(prevData => prevData.filter(item => item.id !== id));
          }
          Swal.fire({
            title: "Eliminado!",
            text: "El servicio ha sido eliminado con exito.",
            icon: "success"
          });
          Delete(id)
        }
      });
  };

////// Recorro la lista de servicios con un map y muestro su contenido en etiquetas//// 
const ServiceList = dataServices.map((item) => {
    const id = item.id;
    const name = item.name;
    const description = item.description;
    const image= `data:image/png;base64,${item.img}`;
    return (
        <div key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={image} alt="" width={200} height={200} />
            <button onClick={() => AlertDelete (id)} >Eliminar</button>
            <Link to={`/Update/${id}`}><button>Actualizar</button></Link>
        </div>
    );
});

////////////////Renderizacion ////////////////
  return (
    <div>
        <h1>Añade un nuevo servicio</h1>
        <div>
            <label htmlFor="">Nombre del servicio:</label>
            <input type="text" id='serviceName' name='serviceName' value={serviceName} onChange={HandleName} required />
        </div>
        <div>
            <label htmlFor="">Descripcion:</label>
            <input type="text" id='serviceDescription' name='serviceDescription' value={serviceDescription} onChange={HandleDescription} required />
        </div>
        <div>
            <h4>Incluye una imagen de referencia</h4>
            <input type="file" accept='image/*' onChange={convertToBase64}/>
            {ImgService === "" || ImgService === null ? null : <img id="imagePreview" src={`data:img/jpeg;base64,${ImgService}`} alt="Vista previa de la imagen" width={200} height={200}/>}
            </div>
        <button onClick={Save}> Guardar</button>
        <div className='contenedorPrimario'>
            <h1>Lista de Servicios</h1>
        <div>{ServiceList}</div>
      </div>
    </div>
  )
} 

export default AddService