async function PostService(NewService) {
    try {
        const response = await fetch("http://localhost:3005/services",{
            method: 'POST',
            headers: {
                'Content-Type':  'application/json'
            },
            body: JSON.stringify(NewService)
        })
        const data = await response.json();
        return data

    } catch (error) {
         console.error(error) 
    }
}
export default PostService

