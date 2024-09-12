async function UpdateSesion(Administrator) {
    console.log(Administrator);
    
    try {
      const response = await fetch(`http://localhost:3005/administrator/${Administrator.id}`, {
        method: 'PUT', // o 'PATCH' dependiendo de tu API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Administrator),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        console.log('Servicio actualizado:', data);
      } else {
        const errorData = await response.json();
        console.log('Error al actualizar el servicio:', errorData.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }  

export default UpdateSesion;