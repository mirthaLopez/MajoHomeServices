import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import GetAdmin from '../Services/GetAdministrator';
import UpdateSesion from '../Services/UpdateSesion';

function FormLogIn() {
  ////// Carga de los datos///////////////
  const [correo, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const [mensaje, setMensaje]= useState('')
  const navigate = useNavigate();
  const [dataAdmin, setDataAdmin]= useState([]);

  ///////////Seteo Datos///////////////
  const cargaContraseña = (event) =>setPassword(event.target.value);
  const cargaUsuario = (event) => setUsername(event.target.value);

  ////// LLamado al server, get fecth//////////
  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await GetAdmin();
      setDataAdmin(data) /// obtengo dato del server mediante el hook
    };
    fetchAdmin();
  }, []);

//////ESTA FUNCION PUEDE CARGAR ,HACER POST O BIEN REALIZAR VALIDACIONES
const cargar = async () => {  
  ///////////Buscar Usuario////////////////////////////
  const validUser = dataAdmin.filter(usuario=> usuario.email === correo && usuario.password === password )
   if (validUser.length === 1) {
    const Administrator= {
        id:validUser[0].id,
        email:validUser[0].email,
        password:validUser[0].password,
        key:"true"
    }
    UpdateSesion(Administrator);
    Swal.fire({
      title: 'Has iniciado sesion con exito!',
      text: 'Te redigiremos a la pagina principal',
      icon: 'success',
      confirmButtonText: 'Ok',
      timer:1500
       });
    setTimeout(() => {
      navigate('/Administracion');
    }, 2000);
  }else{
    setMensaje("Usuario No encontrado")
    setTimeout(() => {
      setMensaje("")
    }, 1500);
 } }
 function validacionEspacios(event) {
  event.preventDefault();
}
  ///////////Renderizado////////////
  return (
    <div className='MainContainer'>
        <div className='ContainerForm'>
        <form className='formInicio' onSubmit={validacionEspacios}>
        <h1>Ingresa a tu Cuenta</h1>
        <label htmlFor="">Correo</label>
        <input type="text" 
        id='correo'
        name='correo'
        placeholder='Ingrese su correo'
        value={correo}
        onChange={cargaUsuario}
        required/>


        <label htmlFor="">Contraseña</label>
        <input type="text"
        id='password'
        name='password'
        placeholder='Ingrese su contraseña'
        value={password}
        onChange={cargaContraseña}
        required />
        
        <button onClick={cargar}>Ingresar</button>
        </form>
      <p>{mensaje}</p>
       </div>
    </div>
  )
}

export default FormLogIn