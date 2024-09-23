import React from 'react'
import HeaderNav from '../Components/Header';
import Footer from '../Components/Footer';
import Map from '../Components/Map';
import ContactUs from '../Components/EmailJs';
import '../Styles/Contact.css'

function Contact() {
  return (
    <div style={{ marginTop: '90px' }}>
    <HeaderNav />
    <div className='container-map-contact'>
    <ContactUs />
    < Map />
    </div>
    <Footer />
    </div>
  )
}

export default Contact