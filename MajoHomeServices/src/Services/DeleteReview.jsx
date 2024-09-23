async function DeleteReview(id) {
    try {
        const response = await fetch(`http://localhost:3005/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting task with id ${id}`);
        }

        return { message: `task with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default DeleteReview;