import React, { useState, useEffect } from 'react';
import PostAdministrator from '../Services/PostAdministrator'; // Importa la función para crear un administrador
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas
import GetAdmin from '../Services/GetAdministrator'; // Importa la función para obtener administradores
import DeleteAdmin from '../Services/DeleteAdmin'; // Importa la función para eliminar un administrador
import NavAdmin from './NavAdmin'; // Importa el componente de navegación para administradores
import '../Styles/AddAdministrator.css'; // Importa estilos CSS para el componente

function AddAdministrator() {
    // Estados para manejar los datos del administrador
    const [nombre, setUsername] = useState(''); // Estado para el nombre
    const [correo, setMail] = useState(''); // Estado para el correo
    const [contrasena, setPassword] = useState(''); // Estado para la contraseña
    const [dataAdmin, setDataAdmin] = useState([]); // Estado para almacenar la lista de administradores

    // Funciones para manejar los cambios en los inputs
    const cargaNombre = (event) => setUsername(event.target.value); // Actualiza el estado del nombre
    const cargaCorreo = (event) => setMail(event.target.value); // Actualiza el estado del correo
    const cargaContrasena = (event) => setPassword(event.target.value); // Actualiza el estado de la contraseña

    // Función para guardar un nuevo administrador
    const Save = async () => {
        const validName = nombre.trim(); // Elimina espacios en blanco del nombre
        const validEmail = correo.trim(); // Elimina espacios en blanco del correo
        const validPassword = contrasena.trim(); // Elimina espacios en blanco de la contraseña
        
        // Verifica si todos los campos están llenos
        if (!validName || !validEmail || !validPassword) {
            Swal.fire({
                icon: "error",
                title: "Campos Vacíos",
                text: "¡Debes completar todos los espacios!", // Mensaje de error si hay campos vacíos
            });
        } else {
            // Verifica si el correo ya existe en la lista de administradores
            const existedEmail = dataAdmin.find(usuario => usuario.email === validEmail);
            if (existedEmail === undefined) {
                // Crea un nuevo objeto administrador
                const NewAdmin = {
                    name: nombre,
                    email: correo,
                    password: contrasena,
                };
                await PostAdministrator(NewAdmin); // Llama a la función para guardar el nuevo administrador
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Administrador añadido con éxito",
                    showConfirmButton: false,
                    timer: 1500, // Muestra un mensaje de éxito durante 1.5 segundos
                });
                // Actualiza la lista de administradores
                setDataAdmin(prevData => [...prevData, NewAdmin]);
            } else {
                // Mensaje de error si el correo ya está en uso
                Swal.fire({
                    icon: "error",
                    title: "Correo inválido",
                    text: "¡Este correo ya está siendo usado, usa otra dirección de correo!",
                });
            }
        }
    };

    // Hook para cargar la lista de administradores al montar el componente
    useEffect(() => {
        const fetchServices = async () => {
            const data = await GetAdmin(); // Obtiene la lista de administradores
            setDataAdmin(data); // Actualiza el estado con la lista obtenida
        };
        fetchServices(); // Llama a la función
    }, []); // Se ejecuta una vez al montar el componente

    // Crea una lista de componentes para mostrar cada administrador
    const AdminList = dataAdmin.map((item, index) => (
        <div key={item.id} className="admin-item">
            <div>
                <p><strong>Nombre:</strong> {item.name}</p> 
                <p><strong>Correo:</strong> {item.email}</p> 
            </div>
            {index !== 0 && (
                <button className="delete-button" onClick={() => onDelete(item.id)}>Eliminar</button> // Botón para eliminar administrador (no se muestra para el primer administrador)
            )}
        </div>
    ));    
    
        // Función para eliminar un administrador
        const onDelete = (id) => {
            Swal.fire({
                title: "¿Estás seguro que deseas eliminar este administrador?", // Mensaje de confirmación
                text: "La información eliminada no se podrá recuperar!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, elimínalo!" // Botón para confirmar la eliminación
            }).then((result) => {
                if (result.isConfirmed) {
                    const Delete = async () => {
                        await DeleteAdmin(id); // Llama a la función para eliminar el administrador
                        setDataAdmin(prevData => prevData.filter(item => item.id !== id)); // Actualiza la lista de administradores
                        Swal.fire({
                            title: "Eliminado!",
                            text: "El administrador ha sido eliminado con éxito.",
                            icon: "success" // Mensaje de éxito después de eliminar
                        });
                    };
                    Delete(); // Ejecuta la función de eliminación
                }
            });
        };
    
    // Renderiza el componente
    return (
      <div className="admin-container">
          <NavAdmin /> {/* Componente de navegación para administradores */}
          <h1 className='tag-h1'>Añade un nuevo administrador</h1> {/* Título del formulario */}
          <div className="form-and-list">
              <div className="form-container-admin">
                  <div className="form-group">
                      <label htmlFor="nombre">Nombre</label>
                      <input type="text" id="nombre" name="nombre" placeholder="Nombre" value={nombre} onChange={cargaNombre} required /> {/* Campo de entrada para el nombre */}
                  </div>
                  <div className="form-group">
                      <label htmlFor="correo">Correo</label>
                      <input type="email" id="correo" name="correo" placeholder="Ingrese el correo" value={correo} onChange={cargaCorreo} required /> {/* Campo de entrada para el correo */}
                  </div>
                  <div className="form-group">
                      <label htmlFor="contrasena">Contraseña</label>
                      <input type="password" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña" value={contrasena} onChange={cargaContrasena} required /> {/* Campo de entrada para la contraseña */}
                  </div>
                  <button type="button" className="button" onClick={Save}>Añadir</button> {/* Botón para agregar un nuevo administrador */}
              </div>
              <div className="admin-list">
                  {AdminList} {/* Muestra la lista de administradores */}
              </div>
          </div>
      </div>
  );  
}

export default AddAdministrator; // Exporta el componente

