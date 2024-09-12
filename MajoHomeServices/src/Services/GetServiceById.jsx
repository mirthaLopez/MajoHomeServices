async function GetServiceById(id) { 
    try {
        const response = await fetch(`http://localhost:3005/services/${id}`);
        const data = await response.json();
        if (response.status === 200) { 
            return data;
        } else {
            console.log(data.error.message);   
        }
    } catch (error) { 
        console.error(`Fetch error`, error);
    }
}

export default GetServiceById;
