import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/EmailJs.css';
import PostRequest from '../Services/PostConsultas';
import { Toaster, toast } from 'sonner';
import GetRequest from '../Services/GetRequest';

export const ContactUs = () => {
  const form = useRef();
  const [nombre, setName] = useState('');
  const [correo, setEmail] = useState('');
  const [telefono, setPhone] = useState('');
  const [mensaje, setMessage] = useState('');
  const [servicio, setServicio] = useState(''); // New state for the select input
  const [dataRequests, setDataRequest] = useState([]);

  const cargaNombre = (event) => setName(event.target.value);
  const cargaCorreo = (event) => setEmail(event.target.value);
  const cargaTelefono = (event) => setPhone(event.target.value);
  const cargaMensaje = (event) => setMessage(event.target.value);
  const cargaServicio = (event) => setServicio(event.target.value); // Handler for the select input

  const Validacion = () => {
    const validName = nombre.trim();
    const validCorreo = correo.trim();
    const validPhone = telefono.trim();
    const validMensaje = mensaje.trim();
    const validServicio = servicio.trim(); // Validate the select input
    const validRequest = dataRequests.filter(consulta => consulta.correo === correo);

    if (validName && validCorreo && validPhone && validMensaje && validServicio) {
      if (validRequest.length <= 3) {
        return true;
      } else {
        toast.error("Este correo ha enviado muchas consultas, intenta con otro.");
        return false;
      }
    } else {
      toast.error("Campos vacios! Todos los datos son requeridos");
      return false;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!Validacion()) {
      return;
    }

    const newRequest = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      mensaje: mensaje,
      servicio: servicio // Include the selected service in the request
    };
    PostRequest(newRequest);

    const Request = await GetRequest();
    setDataRequest(prevData => [...prevData, Request]);

    emailjs
      .sendForm('service_qr9rzcx', 'template_039asgn', form.current, {
        publicKey: 'Cdrim24e1CYlnMJqf',
      })
      .then(
        () => {
          return toast.success("Tu consulta ha sido enviada!");
        },
        (error) => {
          return toast.error("Opps! Algo salio mal, intenta nuevamente!");
        },
      );
  };

  useEffect(() => {
    const fetchRequest = async () => {
      const data = await GetRequest();
      setDataRequest(data);
    };
    fetchRequest();
  }, []);

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h5>*Solicita un servicio*</h5>
        <input type="text" name="from_name" placeholder="Nombre" value={nombre} onChange={cargaNombre} className="form-input" />
        <input type="email" name="from_email" placeholder="Email" value={correo} onChange={cargaCorreo} className="form-input" />
        <input type="text" name="phone" placeholder="Teléfono" value={telefono} onChange={cargaTelefono} className="form-input" />
        <select name="service" value={servicio} onChange={cargaServicio} className="form-select" required>
          <option value="">Seleccione un servicio</option>
          <option value="Limpieza Profunda">Limpieza Profunda</option>
          <option value="Limpieza Media">Limpieza Media</option>
          <option value="Limpieza Airbnb">Limpieza Airbnb</option>
          <option value="otro">Otro</option>
        </select> <br />
        <textarea name="message" placeholder="Mensaje" value={mensaje} onChange={cargaMensaje} className="form-textarea" /> <br />
        <input type="submit" value="Enviar" className="btn-enviar" />
      </form>
      <Toaster richColors position="bottom-left" />
    </div>
  );
};

export default ContactUs;


