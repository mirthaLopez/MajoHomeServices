import React from 'react'
import PostAdministrator from '../Services/PostAdministrator';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import GetAdmin from '../Services/GetAdministrator';
import DeleteAdmin from '../Services/DeleteAdmin';
import NavAdmin from './NavAdmin';
import '../Styles/AddAdministrator.css'
function AddAdministrator() {
    const [nombre, setUsername] = useState('');
    const [correo, setMail] = useState('');
    const [contrasena, setPassword] = useState('');
    const [dataAdmin, setDataAdmin]= useState([]);

    /////////////////Seteo de datos///////////////////////////
    const cargaNombre = (event) => setUsername(event.target.value);
    const cargaCorreo = (event) => setMail(event.target.value);
    const cargaContrasena = (event) => setPassword(event.target.value);


    const Save = async () =>{
      const validName = nombre.trim();
      const validEmail = correo.trim();
      const validPassword = contrasena.trim();
        if (!validName || !validEmail || !validPassword) {
          Swal.fire({
            icon: "error",
            title: "Campos Vacíos",
            text: "¡Debes completar todos los espacios!",
          });
        }else{
          const existedEmail = dataAdmin.find(usuario => usuario.email === validEmail);
          if (existedEmail === undefined) {
            const NewAdmin={
              name:nombre,
              email:correo,
              password:contrasena, 
          }
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Administrador añadido con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
         const NewAdministrator=await PostAdministrator(NewAdmin);
          setDataAdmin(prevData => [...prevData, NewAdministrator])   
        }else{
          Swal.fire({
            icon: "error",
            title: "Correo invalido",
            text: "¡Este correo ya esta siendo usado, usa otra direccion de correo!",
          });

        }
      } 
    }
  
   ////// LLamado al server, get fecth//////////
   useEffect(() => {
    const fetchServices = async () => {
      const data = await GetAdmin();
      setDataAdmin(data) /// obtengo dato del server mediante el hook
    };
    fetchServices();
    }, []);
    //////Mapeo lista//////
    const AdminList = dataAdmin.map(item => (
      <div key={item.id} className="admin-item">
      <div>
        <p>Nombre: {item.name}</p>
        <p>Correo: {item.email}</p>
      </div>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </div>
    ));
    const onDelete=(id)=>{
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
            await  DeleteAdmin(id);
            setDataAdmin(prevData => prevData.filter(item => item.id !== id));
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
    <div>
      <NavAdmin />
      <div className="container">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" value={nombre} onChange={cargaNombre} required />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input type="text" id="correo" name="correo" placeholder="Ingrese el correo" value={correo} onChange={cargaCorreo} required />
        </div>
        <div className="form-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input type="text" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña" value={contrasena} onChange={cargaContrasena} required />
        </div>
        <button type="submit" className="button" onClick={Save}>Añadir</button>
        <div className="admin-list">
          {AdminList}
        </div>
      </div>
    </div>
  )
}

export default AddAdministrator