import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ControlledCarousel from '../Components/Carrousel';
import Bienvenida from '../Components/Bienvenida';
import CardService from '../Components/CardServices';
function Inicio() {
  return (
    <div>
      <Header />
      <div style={{height:'120px'}}></div>
      <ControlledCarousel />
      <Bienvenida />
      <CardService />
      <Footer />
    </div>
  )
}

export default Inicio