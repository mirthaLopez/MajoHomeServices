import React from 'react';
import FormLogIn from '../Components/FormLogin';
import HeaderNav from '../Components/Header';


function Login() {
  return (
    <div>
      <HeaderNav />
      <div style={{marginTop:170}}>
       <FormLogIn />
       </div>
       </div>
  )
}

export default Login