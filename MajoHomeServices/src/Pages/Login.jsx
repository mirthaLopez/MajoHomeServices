import React from 'react';
import FormLogIn from '../Components/FormLogin';
import HeaderNav from '../Components/Header';
import Footer from '../Components/Footer';


function Login() {
  return (
    <div>
      <HeaderNav />
      <div style={{marginTop:170}}>
       <FormLogIn />
       </div>
      <Footer />
       </div>
  )
}

export default Login