import React from 'react';
import '../Styles/Bienvenida.css'; // Asegúrate de crear este archivo CSS

function Bienvenida() {
  return (
    <div className="bienvenida-container">
      <h1>¡Bienvenidos a MAJO Home Services!</h1>
      <h3>Somos una empresa dedicada a brindar servicios de mantenimiento y cuidado del hogar en Nosara y sus alrededores.</h3>
      <h3>¿Por qué elegirnos?</h3>
      <div className='containerList2'>
        <ul>
          <li><strong>Profesionalismo:</strong> Contamos con un equipo altamente capacitado.</li>
          <li><strong>Flexibilidad:</strong> Nos adaptamos a tus horarios y necesidades.</li>
          <li><strong>Ecológico:</strong> Nos preocupamos por el medio ambiente y tu salud, evitando alergias, irritaciones y problemas respiratorios.</li>
        </ul>
      </div> <br /> <br />
      <h1>Conozca Nuestros Servicios...</h1>
    </div>
  );
}

export default Bienvenida;


