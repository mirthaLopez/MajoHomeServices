import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ControlledCarousel from '../Components/Carrousel';
import Bienvenida from '../Components/Bienvenida';
import CardService from '../Components/CardServices';
import AboutUs from '../Components/AboutUs';
import CarouselReviews from '../Components/CarrouselReviews';
function Inicio() {
  return (
    <div style={{ marginTop: '160px' }}>
    <Header />
    <ControlledCarousel />
    <Bienvenida />
    <div>
    <CardService />
    </div>
    <AboutUs />
    <CarouselReviews />
    <Footer />
  </div>
  )
}

export default Inicio