import React from 'react'
import HeaderNav from '../Components/Header'
import CardService from '../Components/CardServices'
import Footer from '../Components/Footer'
import '../Styles/Servicios.css'
function Servicios() {
  return (
    <div>
      <HeaderNav />
      <div className='Container-Card'>
      <CardService />
      </div>
      <Footer />
    </div>
  )
}

export default Servicios