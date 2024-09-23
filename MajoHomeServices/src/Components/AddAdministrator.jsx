import React, { useState, useEffect } from 'react';
import PostAdministrator from '../Services/PostAdministrator';
import Swal from 'sweetalert2';
import GetAdmin from '../Services/GetAdministrator';
import DeleteAdmin from '../Services/DeleteAdmin';
import NavAdmin from './NavAdmin';
import '../Styles/AddAdministrator.css';

function AddAdministrator() {
    const [nombre, setUsername] = useState('');
    const [correo, setMail] = useState('');
    const [contrasena, setPassword] = useState('');
    const [dataAdmin, setDataAdmin] = useState([]);

    const cargaNombre = (event) => setUsername(event.target.value);
    const cargaCorreo = (event) => setMail(event.target.value);
    const cargaContrasena = (event) => setPassword(event.target.value);

    const Save = async () => {
        const validName = nombre.trim();
        const validEmail = correo.trim();
        const validPassword = contrasena.trim();
        
        if (!validName || !validEmail || !validPassword) {
            Swal.fire({
                icon: "error",
                title: "Campos Vacíos",
                text: "¡Debes completar todos los espacios!",
            });
        } else {
            const existedEmail = dataAdmin.find(usuario => usuario.email === validEmail);
            if (existedEmail === undefined) {
                const NewAdmin = {
                    name: nombre,
                    email: correo,
                    password: contrasena,
                };
                await PostAdministrator(NewAdmin);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Administrador añadido con éxito",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setDataAdmin(prevData => [...prevData, NewAdmin]);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Correo inválido",
                    text: "¡Este correo ya está siendo usado, usa otra dirección de correo!",
                });
            }
        }
    };

    useEffect(() => {
        const fetchServices = async () => {
            const data = await GetAdmin();
            setDataAdmin(data);
        };
        fetchServices();
    }, []);

    const AdminList = dataAdmin.map((item, index) => (
        <div key={item.id} className="admin-item">
            <div>
                <p><strong>Nombre:</strong> {item.name}</p>
                <p><strong>Correo:</strong> {item.email}</p>
            </div>
            {index !== 0 && (
                <button className="delete-button" onClick={() => onDelete(item.id)}>Eliminar</button>
            )}
        </div>
    ));    

    const onDelete = (id) => {
        Swal.fire({
            title: "¿Estás seguro que deseas eliminar este administrador?",
            text: "La información eliminada no se podrá recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, elimínalo!"
        }).then((result) => {
            if (result.isConfirmed) {
                const Delete = async () => {
                    await DeleteAdmin(id);
                    setDataAdmin(prevData => prevData.filter(item => item.id !== id));
                    Swal.fire({
                        title: "Eliminado!",
                        text: "El administrador ha sido eliminado con éxito.",
                        icon: "success"
                    });
                };
                Delete();
            }
        });
    };

    return (
      <div className="admin-container">
          <NavAdmin />
          <h1>Añade un nuevo administrador</h1>
          <div className="form-and-list">
              <div className="form-container">
                  <div className="form-group">
                      <label htmlFor="nombre">Nombre</label>
                      <input type="text" id="nombre" name="nombre" placeholder="Nombre" value={nombre} onChange={cargaNombre} required />
                  </div>
                  <div className="form-group">
                      <label htmlFor="correo">Correo</label>
                      <input type="email" id="correo" name="correo" placeholder="Ingrese el correo" value={correo} onChange={cargaCorreo} required />
                  </div>
                  <div className="form-group">
                      <label htmlFor="contrasena">Contraseña</label>
                      <input type="password" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña" value={contrasena} onChange={cargaContrasena} required />
                  </div>
                  <button type="button" className="button" onClick={Save}>Añadir</button>
              </div>
              <div className="admin-list">
                  {AdminList}
              </div>
          </div>
      </div>
  );  
}

export default AddAdministrator;
