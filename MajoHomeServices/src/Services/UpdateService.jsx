async function UpdateService(dataService) {
    try {
      const response = await fetch(`http://localhost:3005/services/${dataService.id}`, {
        method: 'PUT', // o 'PATCH' dependiendo de tu API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataService),
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

export default UpdateService;