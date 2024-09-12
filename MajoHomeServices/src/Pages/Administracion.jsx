import AddService from "../Components/AddService";
import UpdateSesion from "../Services/UpdateSesion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GetAdmin from "../Services/GetAdministrator";
import React from 'react'

function Administracion() {
  const [dataAdmin, setDataAdmin]= useState([]);
  const navigate= useNavigate();
  ////// LLamado al server, get fecth//////////
  useEffect(() => {
    const fetchAdmin = async () => {
      const data = await GetAdmin();
      setDataAdmin(data) /// obtengo dato del server mediante el hook
    };
    fetchAdmin();
  }, []);
  function CerrarSesion() {
    const Admin = {
      id:dataAdmin[0].id,
      email:dataAdmin[0].email,
      password:dataAdmin[0].password,
      key:"False"
    }
    UpdateSesion(Admin);
    navigate('/Login');
  };
  return (
    <div>
      < AddService />
      <button onClick={CerrarSesion}>Cerrar Sesion</button>
    </div>
  )
}

export default Administracion