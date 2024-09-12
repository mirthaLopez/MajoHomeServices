import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from "../Pages/Inicio";
import Update from "../Components/Update";
//import ProtectedRoutes from "./ProtectedRoutes";
const Routing = () => {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Inicio />} /> 
          <Route path="/Update/:id" element={<Update />} /> 
          {/*<Route path="/Home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />*/}
        </Routes>
       </Router>
    )
}

export default Routing;  