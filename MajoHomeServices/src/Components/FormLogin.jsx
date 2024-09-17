import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Swal from 'sweetalert2';
import GetAdmin from '../Services/GetAdministrator'
import '../Styles/LoginForm.css'

function FormLogIn() {
  const [correo, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();
  const [dataAdmin, setDataAdmin] = useState([]);
  const { login } = useAuth(); 

  const cargaContraseña = (event) => setPassword(event.target.value);
  const cargaUsuario = (event) => setUsername(event.target.value);

  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await GetAdmin();
      setDataAdmin(data);
    };
    fetchAdmin();
  }, []);

  const cargar = async () => {
    const validUser = dataAdmin.some(usuario => usuario.email === correo && usuario.password === password);
    if (validUser) {
      Swal.fire({
        title: 'Has iniciado sesión con éxito!',
        text: 'Te redirigiremos a la página principal',
        icon: 'success',
        confirmButtonText: 'Ok',
        timer: 1500
      });
      login({ email: correo });
      setTimeout(() => {
        navigate('/Administracion');
      }, 2000);
    } else {
      setMensaje("Usuario No encontrado");
      setTimeout(() => {
        setMensaje("");
      }, 1500);
    }
  };

  function validacionEspacios(event) {
    event.preventDefault();
  }

  return (
    <div className='MainContainer'>
      <div className='login-container'>
      <div className='login-left'>
        <h2>Cuenta Administrativa</h2>
        <h4>MAJO Home Services</h4>
      </div>
      <div className='login-right'>
        <form className='login-form' onSubmit={validacionEspacios}>
          <h1>Bienvenido</h1>
          <p>Inicia sesion en tu cuenta</p>
          <label htmlFor="correo">Correo *</label>
          <input type="text" id='correo' name='correo' placeholder='Ingrese su correo' value={correo} onChange={cargaUsuario} required />
          <label htmlFor="password">Contraseña *</label>
          <input type="password" id='password' name='password' placeholder='Ingrese su contraseña' value={password} onChange={cargaContraseña} required />
          <button type="submit" onClick={cargar}>Inicia Sesion</button>
        </form>
      </div>
      </div>
      <h3>{mensaje}</h3>
    </div>
  );
}

export default FormLogIn;
