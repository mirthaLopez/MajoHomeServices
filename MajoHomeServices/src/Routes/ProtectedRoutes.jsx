import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import GetAdmin from "../Services/GetAdministrator";



const ProtectedRoutes=({children}) => {
  const navigate = useNavigate();
    useEffect(() => {
    const fetchKey = async () => {
    const data = await GetAdmin();    
     if (data[0].key === 'true') {      
     }else{
      return navigate ("/Login")
     }
    };
    fetchKey();
  }, [])
  return children; /// si se cumple la condicional return to principal
}

export default ProtectedRoutes