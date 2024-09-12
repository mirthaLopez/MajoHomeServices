import React from 'react';
import { useState, useEffect } from 'react';
import PostService from '../Services/PostService';
import GetServices from '../Services/GetService';
import DeleteService from '../Services/DeleteService';
import { Link } from 'react-router-dom';


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
            document.getElementById('imagePreview').src = `data:image/jpeg;base64,${base64String}`; // Mostrar vista previa
          };
          reader.readAsDataURL(file);
        }
      };
      ////// Funcion Guardar Nuevo Servicio en el db.json///////
    function Save() {
        const NewService={
            name: serviceName,
            description:serviceDescription,
            img: ImgService
        }
        ////Envio al db.json//////
        PostService(NewService);
    }
  ////// LLamado al server, get fecth//////////
  useEffect(() => {
    const fetchServices = async () => {
      const data = await GetServices();
      setDataServices(data) /// obtengo dato del server mediante el hook
    };
    fetchServices();
    }, []);
    ///////////Funcion elimina tarea////////////////
    const deleteService = async (id) => { 
    await  DeleteService(id);
    setDataServices(prevData => prevData.filter(item => item.id !== id));
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
            <button onClick={() => deleteService (id)} >Eliminar</button>
            <Link to={`/Update/${id}`}>Actualizar</Link>
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
            {ImgService === "" || ImgService === null ? null : <img id="imagePreview" src={`data:image/jpeg;base64,${ImgService}`} alt="Vista previa de la imagen" />}
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