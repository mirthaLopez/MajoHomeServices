import React from 'react';
import PostReview from '../Services/PostReview';
import GetReviews from '../Services/GetReviews';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import DeleteReview from '../Services/DeleteReview';
import '../Styles/Addreview.css'

function AddReviews() {
    const [dataReview, setDataReview] = useState([]);
    const [nombre, setUsername] = useState('');
    const [review, setReview] = useState('');

    const cargaNombre = (event) => setUsername(event.target.value);
    const cargaReview = (event) => setReview(event.target.value);

    useEffect(() => {
        const fetchReview = async () => {
            const data = await GetReviews();
            setDataReview(data);
        };
        fetchReview();
    }, []);

    const Save = async () => {
        const validName = nombre.trim();
        const validReview = review.trim();
        
        if (!validName || !validReview) {
            Swal.fire({
                icon: "error",
                title: "Campos Vacíos",
                text: "¡Debes completar todos los espacios!",
            });
        } else {
                const NewReview = {
                    name: nombre,
                    review: review,
                };
                await PostReview(NewReview);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Review añadido con éxito",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setDataReview(prevData => [...prevData, NewReview]);
        }
    };

    const onDelete = (id) => {
        Swal.fire({
            title: "¿Estás seguro que deseas eliminar este administrador?",
            text: "La información eliminada no se podrá recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, elimínalo!"
        }).then((result) => {
            if (result.isConfirmed) {
                const Delete = async () => {
                    await DeleteReview(id);
                    setDataReview(prevData => prevData.filter(item => item.id !== id));
                    Swal.fire({
                        title: "Eliminado!",
                        text: "El administrador ha sido eliminado con éxito.",
                        icon: "success"
                    });
                };
                Delete();
            }
        });
    };

    const ReviewsList = dataReview.map((item) => (
        <div key={item.id} className="review-item">
            <div>
                <p><strong>Nombre:</strong> {item.name}</p>
                <p><strong>Review:</strong> {item.review}</p>
            </div>
            <button className="delete-button" onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
    ));    

    return (
        <div className='container-main-review'>
        <h1 className='tag-h1'>Añade tus reviews</h1>
        <div className="container-add-review">
            <div className="form-section">
                <p>*Debes tener al menos 3 reviews</p>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre" value={nombre} onChange={cargaNombre} required />
                </div>
                <div>
                    <label htmlFor="review">Review</label>
                    <input type="text" id="review" name="review" placeholder="Ingrese su review" value={review} onChange={cargaReview} required />
                </div>
                <button type="button" className='button-save' onClick={Save}>Añadir</button>
            </div>
            <div className="reviews-section">
                {ReviewsList}
            </div>
        </div>
        </div>
    );
}

export default AddReviews;