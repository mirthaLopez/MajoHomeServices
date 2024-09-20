import React from 'react';
import Equipo from '../Img/image.png';
import '../Styles/AboutUs.css';
import MAJO from '../Img/Majofoto.png'

function AboutUs() {
  return (
    <div>
    <div className="about-us-container">
      <div className="image-container">
        <h1 className="title">Somos MAJO Home Services</h1>
        <img src={Equipo} alt="Equipo MAJO" className="equipo-majo" />
      </div>
    </div>
    <div className='container-info-majo'>
            <img src={MAJO} alt="MAJO" className='imagen-majo'/>
            <div>
                <h1>María José Ordóñez/Propietaria</h1>
                <p>María José, conocida como Majo, es la orgullosa propietaria de este negocio de limpieza
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
    </div>
  );
}

export default AboutUs;


