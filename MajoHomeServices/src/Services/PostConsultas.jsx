async function PostRequest(newRequest) {
    try {
        const response = await fetch("http://localhost:3005/consultas",{
            method: 'POST',
            headers: {
                'Content-Type':  'application/json'
            },
            body: JSON.stringify(newRequest)
        })
        const data = await response.json();
        return data

    } catch (error) {
         console.error(error) 
    }
}
export default PostRequest;