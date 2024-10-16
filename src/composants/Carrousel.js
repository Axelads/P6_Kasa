import React, { useState } from 'react';
import { Icon } from '@material-ui/core';
import logements from '../IDlogements';
import { useParams } from 'react-router-dom';

const Carrousel = () => {
  const { id } = useParams(); // Recuperer l'ID de l'URL
  const logement = logements.find((logement) => logement.id === id); // Trouver le logement correspondant
  const pictures = logement.pictures;

  const [currentIndex, setCurrentIndex] = useState(0); // Indice de l'image actuelle

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length); // Passer à l'image suivante
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1 // Revenir à l'image précédente
    );
  };

  return (
    <div className="carousel">
      <img 
        src={pictures[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="carousel-image"
      />
      
      {pictures.length > 1 && ( // Montrer les fleches seulement s'il y a plusieurs images
        <>
          <span onClick={prevSlide} className="carousel-arrow left-arrow material-icons">
            <Icon>arrow_back_ios</Icon>
          </span>
          <span onClick={nextSlide} className="carousel-arrow right-arrow material-icons">
            <Icon>arrow_back_ios</Icon>
          </span>
        </>
      )}
      
      {pictures.length > 1 && ( // Montrer le compteur seulement s'il y a plusieurs images
        <div className="carousel-counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carrousel;