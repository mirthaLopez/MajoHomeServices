import React from 'react';
import Routing from "./Routes/Routing";
import { AuthProvider } from './Components/AuthContext'; // Importa AuthProvider
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <AuthProvider> {/* Envuelve tu aplicación en AuthProvider */}
      <div>
        <Routing />
      </div>
    </AuthProvider>
  );
}

export default App;
