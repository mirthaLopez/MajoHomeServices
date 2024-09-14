import React from 'react'
import HeaderNav from '../Components/Header'
import CardService from '../Components/CardServices'
import '../Styles/Servicios.css'
function Servicios() {
  return (
    <div>
      <HeaderNav />
      <div className='Container-Card'>
      <CardService />
      </div>
    </div>
  )
}

export default Servicios