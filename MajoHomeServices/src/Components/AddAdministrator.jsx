import React from 'react'
import PostAdministrator from '../Services/PostAdministrator';
import { useState } from 'react';

function AddAdministrator() {
    const [nombre, setUsername] = useState('');
    const [correo, setMail] = useState('');
    const [contrasena, setPassword] = useState('');
    ////////Seteo de datos///////////////////////////
    const cargaNombre = (event) => setUsername(event.target.value);
    const cargaCorreo = (event) => setMail(event.target.value);
    const cargaContrasena = (event) => setPassword(event.target.value);


    const Save = () =>{
        const NewAdmin={
            name:nombre,
            email:correo,
            password:contrasena, 
            key:"false";
        }
        PostAdministrator(NewAdmin);
    }

  return (
    <div>
        <input type="text"  id='nombre' name='nombre' placeholder='Nombre:' value={nombre} onChange={cargaNombre} required />
        <input type="text"  id='correo' name='correo' placeholder='Ingrese el correo:' value={correo} onChange={cargaCorreo} required />
        <input type="text"  id='contrasena' name='contrasena' placeholder='Ingrese su contraseña' value={contrasena} onChange={cargaContrasena} required />
        <button type="submit" onClick={Save}>Añadir</button>
    </div>
  )
}

export default AddAdministrator