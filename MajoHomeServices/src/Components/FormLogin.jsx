import React, { useState, useEffect } from 'react'; // Importa React y hooks de estado y efecto
import { useNavigate } from 'react-router-dom'; // Importa el hook para la navegación
import { useAuth } from './AuthContext'; // Importa el contexto de autenticación
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas
import GetAdmin from '../Services/GetAdministrator'; // Importa la función para obtener administradores
import { useSpring, animated } from '@react-spring/web'; // Importa animaciones de react-spring
import '../Styles/LoginForm.css'; // Importa estilos CSS para el formulario de inicio de sesión

function FormLogIn() {
  // Estados para el correo y la contraseña
  const [correo, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para la navegación
  const [dataAdmin, setDataAdmin] = useState([]); // Estado para almacenar los datos de administradores
  const { login } = useAuth(); // Obtiene la función de inicio de sesión del contexto

  // Función para manejar el cambio en el campo de contraseña
  const cargaContraseña = (event) => setPassword(event.target.value);
  // Función para manejar el cambio en el campo de usuario
  const cargaUsuario = (event) => setUsername(event.target.value);

  // Efecto para obtener los datos de administradores al cargar el componente
  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await GetAdmin(); // Llama a la función para obtener administradores
      setDataAdmin(data); // Establece los datos obtenidos en el estado
    };
    fetchAdmin(); // Ejecuta la función para obtener los administradores
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para manejar el inicio de sesión
  const cargar = async () => {
    // Busca un usuario que coincida con el correo y la contraseña
    const validUser = dataAdmin.find(usuario => usuario.email === correo && usuario.password === password);
    if (validUser) {
      // Si se encuentra el usuario, muestra un mensaje de éxito
      Swal.fire({
        title: 'Has iniciado sesión con éxito!',
        text: 'Te redirigiremos a la página principal',
        icon: 'success',
        confirmButtonText: 'Ok',
        timer: 1500
      });
      login({ email: correo }); // Llama a la función de inicio de sesión
      // Redirige al usuario después de 2 segundos
      setTimeout(() => {
        navigate('/Administracion');
      }, 2000);
    } else {
      // Si no se encuentra el usuario, muestra un mensaje de error
      Swal.fire({
        title: 'Usuario no encontrado!',
        text: 'Revisa tus datos y vuelve a intentarlo',
        icon: 'error',
        confirmButtonText: 'Ok',
        timer: 1500
      });
    }
  };

  // Función para prevenir el envío del formulario
  function validacionEspacios(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
  }

  // Configuración de la animación
  const animationProps = useSpring({
    from: { transform: 'scale(0.5)', opacity: 0 }, // Estado inicial de la animación
    to: { transform: 'scale(1)', opacity: 1 }, // Estado final de la animación
    config: { tension: 200, friction: 12 } // Configuración de la animación
  });

  return (
    <animated.div style={animationProps} className='MainContainer'> {/* Contenedor animado */}
      <div className='login-container'> {/* Contenedor del formulario de inicio de sesión */}
        <div className='login-left'> {/* Sección izquierda (vacía) */}
        </div>
        <div className='login-right'> {/* Sección derecha */}
          <form className='login-form' onSubmit={validacionEspacios}> {/* Formulario de inicio de sesión */}
            <h1>Bienvenido</h1> {/* Título */}
            <p>Inicia sesión en tu cuenta</p> {/* Instrucciones */}
            <label htmlFor="correo">Correo *</label> {/* Etiqueta para el campo de correo */}
            <input type="text" id='correo' name='correo' placeholder='Ingrese su correo' value={correo} onChange={cargaUsuario} required /> {/* Campo de entrada para el correo */}
            <label htmlFor="password">Contraseña *</label> {/* Etiqueta para el campo de contraseña */}
            <input type="password" id='password' name='password' placeholder='Ingrese su contraseña' value={password} onChange={cargaContraseña} required /> {/* Campo de entrada para la contraseña */}
            <button type="submit" onClick={cargar}>Inicia Sesión</button> {/* Botón para enviar el formulario */}
          </form>
        </div>
      </div>
    </animated.div>
  );
}

export default FormLogIn; // Exporta el componente


