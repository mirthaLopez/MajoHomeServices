import React from 'react'
import HeaderNav from '../Components/Header'
import CardService from '../Components/CardServices'
import Footer from '../Components/Footer'
import '../Styles/Servicios.css'
function Servicios() {
  return (
    <div style={{ marginTop: '160px' }}>
      <HeaderNav />
      <CardService />
      <Footer />
    </div>
  )
}

export default Servicios;