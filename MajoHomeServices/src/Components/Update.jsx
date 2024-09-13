import React from 'react'
import UpdateService from '../Services/UpdateService';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GetServicebyId from '../Services/GetServiceById';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Update() {
  const Navigate=useNavigate();
  const {id}=useParams();
  const [dataService, setDataServices]= useState({
    id:id,
    name: '',
    description:'', 
    img:''
  });
  
  ////// LLamado al server, get fecth//////////
  useEffect(() => {
    const fetchServices = async () => {
      const data = await GetServicebyId(id);
      setDataServices({...data, name: data.name, description:data.description, img: data.img}) /// obtengo dato del server mediante el hook
    };
    fetchServices();
    }, []);

  /////////Convertimos a base 64/////////////
  const convertToBase64 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, ""); ///Imagen en base64
        setDataServices({...dataService, img: base64String}) ////Seteo Imagen
      };
      reader.readAsDataURL(file);
    }
  };

  const Save = async () => {
    const validName=dataService.name.trim();
    const validDescription=dataService.description.trim();
    const validImg=dataService.img.trim();

    if (!validName || !validDescription || !validImg) {
      Swal.fire({
        icon: "error",
        title: "Campos Vacios",
        text: "Debes completar todos los espacios!",
      });      
    }else{
      await UpdateService(dataService);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "La edicion fue exitosa",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        Navigate('/Administracion')
      }, 2000);
    }
  };  
  //////////////////Renderizado//////////////////////////////
  return (
    <div>
        <h1>Actualiza este servicio</h1>
        <div>
            <label htmlFor="">Nombre del servicio:</label>
            <input type="text" id='serviceName' name='serviceName' 
            value={dataService.name} 
            onChange={e => setDataServices({...dataService, name:e.target.value})} 
            required />
        </div>
        <div>
            <label htmlFor="">Descripcion:</label>
            <input type="text" id='serviceDescription' name='serviceDescription' 
            value={dataService.description} 
            onChange={e => setDataServices({...dataService, description:e.target.value})} 
            required />
        </div>
        <div>
            <label htmlFor="">Agrega una nueva imagen</label>
            <input type="file" accept='image/*' onChange={convertToBase64}/>
            {dataService.img === "" || dataService.img === null ? null : <img id="imagePreview" src={`data:image/jpeg;base64,${dataService.img}`} alt="Vista previa de la imagen" width={200} height={200}/>}
        </div>
        <button onClick={Save}>Guardar Cambios</button>
        <Link to={`/Administracion`}><button>Cancelar</button></Link>
    </div>
  )
  }

export default Update;