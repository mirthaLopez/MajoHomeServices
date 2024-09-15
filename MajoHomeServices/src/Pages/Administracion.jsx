import React from 'react';
import AddService from '../Components/AddService'
import HeaderNav from '../Components/Header';
import NavAdmin from '../Components/NavAdmin';
function Administracion() {
  return (
    <div>
      <HeaderNav />
      <div style={{marginTop:170}}>
      <NavAdmin />
      <AddService />
      </div>
    </div>
  );
}

export default Administracion;
