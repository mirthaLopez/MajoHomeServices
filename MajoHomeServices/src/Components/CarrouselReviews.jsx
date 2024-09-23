import React, { useState, useEffect } from 'react';
import '../Styles/CarrouselReviews.css'; // Asegúrate de crear este archivo CSS para los estilos

const reviews = [
    { name: 'Juan Pérez', review: 'Excelente servicio, muy recomendable.' },
    { name: 'María López', review: 'Una experiencia maravillosa, volveré sin duda.' },
    { name: 'Carlos García', review: 'Profesionalismo y calidad en cada detalle.' }
];

const CarouselReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000); // Cambia cada 3 segundos
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [currentIndex]);

    return (
        <div className="carousel-reviews">
            <button className="carousel-reviews-button" onClick={prevSlide}>‹</button>
            <div className="carousel-reviews-slide">
                <p className="review">{reviews[currentIndex].review}</p>
                <p className="name">- {reviews[currentIndex].name}</p>
            </div>
            <button className="carousel-reviews-button" onClick={nextSlide}>›</button>
        </div>
    );
};

export default CarouselReviews;
