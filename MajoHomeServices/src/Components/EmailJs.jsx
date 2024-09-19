import React, { useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/EmailJs.css';
import PostRequest from '../Services/PostConsultas';
import { Toaster, toast } from 'sonner'
import GetRequest from '../Services/GetRequest';

export const ContactUs = () => {
  const form = useRef();
  const [nombre, setName] = useState('');
  const [correo, setEmail] = useState('');
  const [telefono, setPhone] = useState('');
  const [mensaje, setMessage] = useState('');
  const [dataRequests, setDataRequest] = useState([]);

  const cargaNombre = (event) => setName(event.target.value);
  const cargaCorreo = (event) => setEmail(event.target.value);
  const cargaTelefono = (event) => setPhone(event.target.value);
  const cargaMensaje = (event) => setMessage(event.target.value);

  const Validacion = () => {
    ///////Espacios vacios///////
    const validName = nombre.trim();
    const validCorreo = correo.trim();
    const validPhone = telefono.trim();
    const validMensaje = mensaje.trim();
    //////Controlar envio de no mas de 3 correos por user////////
    const validRequest= dataRequests.filter(consulta => consulta.correo=== correo);    
    if (validName && validCorreo && validPhone && validMensaje) {
      if (validRequest.length<=3) {
        return true;     
      }else{
        toast.error("Este correo ha enviado muchas consultas, intenta con otro.")
        return false;
      }
    }else{
      toast.error("Campos vacios! Todos los datos son requeridos")
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
      mensaje: mensaje
    };
    PostRequest(newRequest);

    const Request = await GetRequest();
    setDataRequest(prevData => [...prevData, Request]);  

    emailjs
      .sendForm('service_9kyglrj', 'template_lgldlxp', form.current, {
        publicKey: 'kdgF6ehsu81GSdJjy',
      })
      .then(
        () => {
          return toast.success ("Tu consulta ha sido enviada!")
        },
        (error) => {
          return toast.error ("Opps! Algo salio mal, intenta nuevamente!")
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
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder='Nombre' value={nombre} onChange={cargaNombre} />
      <input type="email" name="from_email" placeholder='Email' value={correo} onChange={cargaCorreo} />
      <input type="text" name="phone" placeholder='Telefono' value={telefono} onChange={cargaTelefono} />
      <textarea name="message" placeholder='Mensaje' value={mensaje} onChange={cargaMensaje} />
      <input type="submit" value="Send" className='btnEnviar' />
    </form>
    <Toaster richColors />
    </div>
  );
};

export default ContactUs;
