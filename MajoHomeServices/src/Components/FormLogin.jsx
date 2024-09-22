import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Swal from 'sweetalert2';
import GetAdmin from '../Services/GetAdministrator';
import { useSpring, animated } from '@react-spring/web';
import '../Styles/LoginForm.css';

function FormLogIn() {
  const [correo, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    const validUser = dataAdmin.find(usuario => usuario.email === correo && usuario.password === password);
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
      Swal.fire({
        title: 'Usuario no encontrado!',
        text: 'Revisa tus datos y vuelve a intentarlo',
        icon: 'error',
        confirmButtonText: 'Ok',
        timer: 1500
      });
    }
  };

  function validacionEspacios(event) {
    event.preventDefault();
  }

  const animationProps = useSpring({
    from: { transform: 'scale(0.5)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { tension: 200, friction: 12 }
  });

  return (
    <animated.div style={animationProps} className='MainContainer'>
      <div className='login-container'>
        <div className='login-left'>
        </div>
        <div className='login-right'>
          <form className='login-form' onSubmit={validacionEspacios}>
            <h1>Bienvenido</h1>
            <p>Inicia sesión en tu cuenta</p>
            <label htmlFor="correo">Correo *</label>
            <input type="text" id='correo' name='correo' placeholder='Ingrese su correo' value={correo} onChange={cargaUsuario} required />
            <label htmlFor="password">Contraseña *</label>
            <input type="password" id='password' name='password' placeholder='Ingrese su contraseña' value={password} onChange={cargaContraseña} required />
            <button type="submit" onClick={cargar}>Inicia Sesión</button>
          </form>
        </div>
      </div>
    </animated.div>
  );
}

export default FormLogIn;

