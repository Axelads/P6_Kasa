import React from 'react';
import { Icon } from '@material-ui/core';
import logements from '../IDlogements';
import { useParams } from 'react-router-dom';

const Rate = () => {
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
  const logement = logements.find((logement) => logement.id === id); // Trouve le logement correspondant
  const rating = logement ? logement.rating : 0; // Si le logement existe, utilise son rating, sinon 0

  // Création d'un tableau de 5 étoiles (gris clair par défaut) et met à jour selon le rating
  const stars = Array(5).fill('#E3E3E3').map((color, index) => {
    return index < rating ? '#ff6060' : '#E3E3E3';
  });

  return (
    <div className="content-rate">
      {stars.map((color, index) => (
        <Icon key={index} style={{ color }} className="star">
          star
        </Icon>
      ))}
    </div>
  );
};

export default Rate;