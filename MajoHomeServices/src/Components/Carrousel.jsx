import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/Carrousel.css'
import fotoCarrousel1 from '../Img/imagen.jpeg'
import fotoCarrousel3 from '../Img/carrousel3.jpg'
import fotoCarrousel2 from '../Img/Equipo.jpeg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fotoCarrousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='tituloCarrousel'>Servicio de Limpieza Profesional</h3> 
          <p className='textoCarrousel'>En Majo Home Services, brindamos servicios de limpieza profesionales, confiables y adaptados a tus necesidades. Nuestra prioridad es tu satisfacción y un ambiente impecable</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fotoCarrousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='tituloCarrousel'>Hogar Impecable</h3> 
          <p className='textoCarrousel'>Nuestro equipo altamente capacitado garantiza la pulcritud de tu hogar, brindándote paz y tranquilidad en todo momento.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fotoCarrousel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='tituloCarrousel'>Relajate y disfruta de tu hogar siempre limpio...</h3> 
          <p className='textoCarrousel'>Confía en nosotros para mantener tu espacio limpio y ordenado, permitiéndote disfrutar de tu tiempo libre sin preocupaciones.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
