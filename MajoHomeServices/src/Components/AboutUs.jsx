import React from 'react';
import MAJO from '../Img/Majofoto.png';
import Colaboradora from '../Img/Limpieza.jpeg';
import '../Styles/About.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {location.pathname !== '/' && <h1 className='etiqueta-h1'>Somos MAJO Home Services</h1>}
      {location.pathname !== '/' && <div className="mission-vision-section">
        <div className="mission">
          <h2>Misión</h2>
          <p>
            En Majo Home Services, nos dedicamos a ofrecer servicios de limpieza excepcionales para casas vacacionales en Nosara. Nuestro objetivo es asegurar que cada hogar esté en perfecta armonía, permitiendo que los visitantes disfruten de una experiencia inolvidable en un espacio limpio y acogedor. Nos comprometemos a brindar un servicio de calidad, confiable y adaptado a las necesidades de nuestros clientes, destacándonos por nuestra dedicación y profesionalismo.
          </p>
        </div>
        <div className="vision">
          <h2>Visión</h2>
          <p>
            Nuestra visión es convertirnos en la empresa líder en servicios de limpieza para casas vacacionales en Nosara, reconocida por nuestro compromiso con la excelencia y el impacto positivo en la comunidad. Aspiramos a expandir Majo Home Services, ofreciendo más oportunidades de empleo a mujeres de la comunidad, ya sea a tiempo parcial o completo. Queremos ser un pilar de apoyo para quienes buscan oportunidades laborales, inspirados por el legado de fortaleza y coraje de nuestra fundadora. A través de nuestro crecimiento personal y profesional, continuaremos aprendiendo y mejorando para ofrecer el mejor servicio a nuestros clientes y contribuir al bienestar de Nosara.
          </p>
        </div>
      </div>}
      <div className="team-section">
        <div className="team-member">
          <img src={MAJO} alt="MAJO" className="team-photo" />
          <div className="team-info">
            <h2>María José Ordóñez</h2>
            <h3>Propietaria</h3>
            <p>
              María José, conocida como Majo, es la orgullosa propietaria de este negocio de limpieza especializado en casas vacacionales. Su pasión por ofrecer un servicio de alta calidad se refleja en cada detalle que su equipo de siete mujeres locales. Desde joven, Majo soñó con tener su propia empresa de limpieza y contribuir a la sociedad ofreciendo empleo digno a mujeres de su comunidad. Con ocho años de experiencia y preparación, ha logrado construir un equipo que comparte su dedicación y amor por el trabajo bien hecho. Majo, 100% nosareña y fundadora de Majo Home Services, se inspiró en la fortaleza de su madre para emprender este proyecto. 
            </p>
          </div>
        </div>
        {location.pathname !== '/' && <div className="team-member">
          <img src={Colaboradora} alt="Colaboradora" className="team-photo" />
          <div className="team-info">
            <h2>Yorleny</h2>
            <h3>Colaboradora</h3>
            <p>
              Nos complace presentar a Yorleny, quien ha sido una valiosa parte de Majo Home Services durante los últimos años. Su dedicación y excelente atención a los detalles han sido esenciales para nuestro éxito.
            </p>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default AboutUs;









