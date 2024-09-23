import React from 'react'; // Importa React
import PostReview from '../Services/PostReview'; // Importa la función para crear una review
import GetReviews from '../Services/GetReviews'; // Importa la función para obtener reviews
import { useState, useEffect } from 'react'; // Importa hooks de estado y efecto
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mostrar alertas
import DeleteReview from '../Services/DeleteReview'; // Importa la función para eliminar una review
import '../Styles/Addreview.css' // Importa estilos CSS para el componente

function AddReviews() {
    const [dataReview, setDataReview] = useState([]); // Estado para almacenar la lista de reviews
    const [nombre, setUsername] = useState(''); // Estado para el nombre del usuario
    const [review, setReview] = useState(''); // Estado para la review del usuario

    // Función para manejar el cambio en el input de nombre
    const cargaNombre = (event) => setUsername(event.target.value);
    // Función para manejar el cambio en el input de review
    const cargaReview = (event) => setReview(event.target.value);

    // Hook para cargar las reviews al montar el componente
    useEffect(() => {
        const fetchReview = async () => {
            const data = await GetReviews(); // Obtiene la lista de reviews
            setDataReview(data); // Actualiza el estado con la lista obtenida
        };
        fetchReview(); // Llama a la función
    }, []); // Se ejecuta una vez al montar el componente

    // Función para guardar una nueva review
    const Save = async () => {
        const validName = nombre.trim(); // Elimina espacios en blanco del nombre
        const validReview = review.trim(); // Elimina espacios en blanco de la review
        
        // Verifica si ambos campos están llenos
        if (!validName || !validReview) {
            Swal.fire({
                icon: "error",
                title: "Campos Vacíos",
                text: "¡Debes completar todos los espacios!", // Mensaje de error si hay campos vacíos
            });
        } else {
            // Crea un nuevo objeto review
            const NewReview = {
                name: nombre,
                review: review,
            };
            await PostReview(NewReview); // Llama a la función para guardar la nueva review
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Review añadido con éxito",
                showConfirmButton: false,
                timer: 1500, // Muestra un mensaje de éxito durante 1.5 segundos
            });
            // Actualiza la lista de reviews
            setDataReview(prevData => [...prevData, NewReview]);
        }
    };

    // Función para eliminar una review
    const onDelete = (id) => {
        Swal.fire({
            title: "¿Estás seguro que deseas eliminar esta review?", // Mensaje de confirmación
            text: "La información eliminada no se podrá recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, elimínalo!" // Botón para confirmar la eliminación
        }).then((result) => {
            if (result.isConfirmed) {
                const Delete = async () => {
                    await DeleteReview(id); // Llama a la función para eliminar la review
                    setDataReview(prevData => prevData.filter(item => item.id !== id)); // Actualiza la lista de reviews
                    Swal.fire({
                        title: "Eliminado!",
                        text: "La review ha sido eliminada con éxito.",
                        icon: "success" // Mensaje de éxito después de eliminar
                    });
                };
                Delete(); // Ejecuta la función de eliminación
            }
        });
    };

    // Crea una lista de componentes para mostrar cada review
    const ReviewsList = dataReview.map((item) => (
        <div key={item.id} className="review-item">
            <div>
                <p><strong>Nombre:</strong> {item.name}</p> 
                <p><strong>Review:</strong> {item.review}</p>
            </div>
            <button className="delete-button" onClick={() => onDelete(item.id)}>Eliminar</button> 
        </div>
    ));    

    // Renderiza el componente
    return (
        <div className='container-main-review'> {/* Contenedor principal de reviews */}
        <h1 className='tag-h1'>Añade tus reviews</h1> {/* Título del formulario */}
        <div className="container-add-review">
            <div className="form-section">
                <p>*Debes tener al menos 3 reviews</p> {/* Mensaje informativo sobre la cantidad mínima de reviews */}
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Nombre" value={nombre} onChange={cargaNombre} required /> {/* Campo de entrada para el nombre */}
                </div>
                <div>
                    <label htmlFor="review">Review</label>
                    <input type="text" id="review" name="review" placeholder="Ingrese su review" value={review} onChange={cargaReview} required /> {/* Campo de entrada para la review */}
                </div>
                <button type="button" className='button-save' onClick={Save}>Añadir</button> {/* Botón para agregar una nueva review */}
            </div>
            <div className="reviews-section">
                {ReviewsList} {/* Muestra la lista de reviews */}
            </div>
        </div>
        </div>
    );
}

export default AddReviews; // Exporta el componente
