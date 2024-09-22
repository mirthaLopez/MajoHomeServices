import React from 'react';
import MAJO from '../Img/Majofoto.png';
import Colaboradora from '../Img/Limpieza.jpeg';
import '../Styles/About.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {location.pathname !== '/' && <h1 className='etiqueta-h1'>Somos MAJO Home Services</h1>}
      <div className="team-section">
        <div className="team-member">
          <img src={MAJO} alt="MAJO" className="team-photo" />
          <div className="team-info">
            <h2>María José Ordóñez</h2>
            <h3>Propietaria</h3>
            <p>
              María José, conocida como Majo, es la orgullosa propietaria de este negocio de limpieza
              especializado en casas vacacionales. Su pasión por ofrecer un servicio de alta calidad se refleja
              en cada detalle que su equipo de siete mujeres locales. <br /> <br />
              Desde joven, Majo soñó con tener su propia empresa de limpieza y contribuir a la sociedad 
              ofreciendo empleo digno a mujeres de su comunidad. Con ocho años de experiencia y preparación,
              ha logrado construir un equipo que comparte su dedicación y amor por el trabajo bien hecho.
              Majo, 100% nosareña y fundadora de Majo Home Services, se inspiró en la fortaleza de su madre 
              para emprender este proyecto. Como madre soltera de una niña de seis años, decidió crear un negocio
              que no solo le brindara estabilidad a su familia, sino que también impactara positivamente en su comunidad.
            </p>
          </div>
        </div>
        {location.pathname !== '/' && <div className="team-member">
          <img src={Colaboradora} alt="Colaboradora" className="team-photo" />
          <div className="team-info">
            <h2>Yorleny</h2>
            <h3>Colaboradora</h3>
            <p>
              Nos complace presentar a Yorleny, quien ha sido una valiosa parte de Majo Home Services durante los últimos años.
              Su dedicación y excelente atención a los detalles han sido esenciales para nuestro éxito.
            </p>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default AboutUs;






