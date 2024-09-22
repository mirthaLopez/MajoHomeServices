import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ControlledCarousel from '../Components/Carrousel';
import Bienvenida from '../Components/Bienvenida';
import CardService from '../Components/CardServices';
import AboutUs from '../Components/AboutUs';
function Inicio() {
  return (
    <div>
      <Header />
      <div style={{height:'120px'}}></div>
      <ControlledCarousel />
      <Bienvenida />
      <CardService />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default Inicio