import { useEffect } from 'react'; // Importa useEffect de React
import { useLocation } from 'react-router-dom'; // Importa useLocation para acceder a la ubicación actual

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Obtiene la ruta actual

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana hacia la parte superior al cambiar la ruta
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  return null; // No renderiza nada
};

export default ScrollToTop; // Exporta el componente ScrollToTop

