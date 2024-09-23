async function PostReview(newReview) {
    try {
        const response = await fetch("http://localhost:3005/reviews",{
            method: 'POST',
            headers: {
                'Content-Type':  'application/json'
            },
            body: JSON.stringify(newReview)
        })
        const data = await response.json();
        return data

    } catch (error) {
         console.error(error) 
    }
}
export default PostReview;