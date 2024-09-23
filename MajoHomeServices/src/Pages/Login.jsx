import React from 'react';
import FormLogIn from '../Components/FormLogin';
import HeaderNav from '../Components/Header';
import Footer from '../Components/Footer';


function Login() {
  return (
    <div style={{ marginTop: '120px' }}>
      <HeaderNav />
      <FormLogIn />
      <Footer />
    </div>
  )
}

export default Login