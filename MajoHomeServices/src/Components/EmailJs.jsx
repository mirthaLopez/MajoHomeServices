import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../Styles/EmailJs.css';
import PostRequest from '../Services/PostConsultas';

export const ContactUs = () => {
  const form = useRef();
  const [nombre, setName] = useState('');
  const [correo, setEmail] = useState('');
  const [telefono, setPhone] = useState('');
  const [mensaje, setMessage] = useState('');

  const cargaNombre = (event) => setName(event.target.value);
  const cargaCorreo = (event) => setEmail(event.target.value);
  const cargaTelefono = (event) => setPhone(event.target.value);
  const cargaMensaje = (event) => setMessage(event.target.value);

  const Validacion = () => {
    const validName = nombre.trim();
    const validCorreo = correo.trim();
    const validPhone = telefono.trim();
    const validMensaje = mensaje.trim();
    if (!validName || !validCorreo || !validPhone || !validMensaje) {
      Swal.fire({
        icon: "error",
        title: "Campos Vacíos",
        text: "¡Debes completar todos los espacios!",
      });
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!Validacion()) {
      return;
    }

    const newRequest = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      mensaje: mensaje
    };
    PostRequest(newRequest);

    emailjs
      .sendForm('service_9kyglrj', 'template_lgldlxp', form.current, {
        publicKey: 'kdgF6ehsu81GSdJjy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder='Nombre' required value={nombre} onChange={cargaNombre} />
      <input type="email" name="from_email" placeholder='Email' required value={correo} onChange={cargaCorreo} />
      <input type="text" name="phone" placeholder='Telefono' value={telefono} onChange={cargaTelefono} />
      <textarea name="message" placeholder='Mensaje' value={mensaje} onChange={cargaMensaje} />
      <input type="submit" value="Send" className='btnEnviar' />
    </form>
  );
};

export default ContactUs;
