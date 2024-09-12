async function GetAdmin() { 
    try {
        const response = await fetch("http://localhost:3005/administrator");
        const data = await response.json();
        if (response.status === 200) { 
            
            return data;
        }else {
            console.log(data.error.message);   
        }
       
    } catch (error) { 
        console.error(`Fetch error`, error);
    }
}

export default GetAdmin