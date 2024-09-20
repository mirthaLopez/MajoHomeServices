import React from 'react';
import '../Styles/Map.css'
function Map() {
  return (
        <div className='container-map'>
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62871.639751691066!2d-85.72821442928692!3d9.977359026425592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e5390861f64b9%3A0xfdc77634e4481c5f!2sProvincia%20de%20Guanacaste%2C%20Nosara!5e0!3m2!1ses-419!2scr!4v1726853066143!5m2!1ses-419!2scr"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  );
}

export default Map;
