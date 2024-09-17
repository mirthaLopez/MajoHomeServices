async function PostAdministrator(NewAdmin) {
    try {
        const response = await fetch("http://localhost:3005/administrator",{
            method: 'POST',
            headers: {
                'Content-Type':  'application/json'
            },
            body: JSON.stringify(NewAdmin)
        })
        const data = await response.json();
        return data

    } catch (error) {
         console.error(error) 
    }
}
export default PostAdministrator
