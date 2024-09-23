import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect
import '../Styles/CarrouselReviews.css'; // Importa los estilos CSS para el carrusel de reseñas
import GetReviews from '../Services/GetReviews'; // Importa la función para obtener reseñas

const CarouselReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice actual de la reseña
    const [dataReview, setDataReview] = useState([]); // Estado para almacenar las reseñas

    useEffect(() => {
        const fetchReview = async () => { // Función asíncrona para obtener las reseñas
            const data = await GetReviews(); // Llama a la función para obtener las reseñas
            setDataReview(data); // Actualiza el estado con las reseñas obtenidas
        };
        fetchReview(); // Llama a la función para obtener reseñas al montar el componente
    }, []); // Dependencias vacías para que se ejecute solo una vez

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % dataReview.length); // Avanza al siguiente índice, reiniciando al llegar al final
    };

    useEffect(() => {
        if (dataReview.length > 0) { // Solo establece el intervalo si hay reseñas disponibles
            const interval = setInterval(nextSlide, 7000); // Cambia la reseña cada 7 segundos
            return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
        }
    }, [currentIndex, dataReview]); // Dependencias para reiniciar el intervalo si el índice o las reseñas cambian

    return (
        <div>              
            <h1 className='title-reviews'>Testimonios de nuestros clientes</h1> {/* Título del carrusel de reseñas */}
            <div className="carousel-reviews"> {/* Contenedor principal del carrusel */}
                <div className="carousel-reviews-slide"> {/* Contenedor de la reseña actual */}
                    <p className="review">{dataReview[currentIndex]?.review}</p> {/* Muestra la reseña actual */}
                    <p className="name">- {dataReview[currentIndex]?.name}</p> {/* Muestra el nombre del autor de la reseña */}
                </div>
            </div>
        </div>
    );
};

export default CarouselReviews; // Exporta el componente CarouselReviews




