import React from 'react'
import Header from '../Components/Nav'
import CardService from '../Components/CardServices'
import '../Styles/Servicios.css'
function Servicios() {
  return (
    <div>
      <Header />
      <div className='Container-Card'>
      <CardService />
      </div>
    </div>
  )
}

export default Servicios