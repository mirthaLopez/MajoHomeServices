import React, { useState, useEffect } from 'react';
import '../Styles/CarrouselReviews.css';
import GetReviews from '../Services/GetReviews';

const CarouselReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dataReview, setDataReview] = useState([]);

    useEffect(() => {
        const fetchReview = async () => {
            const data = await GetReviews();
            setDataReview(data);
        };
        fetchReview();
    }, []);
    
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % dataReview.length);
    };

    useEffect(() => {
        if (dataReview.length > 0) {
            const interval = setInterval(nextSlide, 7000); // Cambia cada 4 segundos
            return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
        }
    }, [currentIndex, dataReview]);

    return (
        <div>              
            <h1 className='title-reviews'>Testimonios de nuestros clientes</h1>
            <div className="carousel-reviews">
                <div className="carousel-reviews-slide">
                    <p className="review">{dataReview[currentIndex]?.review}</p>
                    <p className="name">- {dataReview[currentIndex]?.name}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselReviews;



