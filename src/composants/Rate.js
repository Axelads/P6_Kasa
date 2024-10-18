import React from 'react';
import { Icon } from '@material-ui/core';
import logements from '../assets/donnees/DataLogement';
import { useParams } from 'react-router-dom';

const Rate = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id); // Trouve le logement correspondant
  const rating = logement ? logement.rating : 0; // Si le logement existe, utilise son rating, sinon 0

  return (
    <div className="content-rate">
      {[...Array(5)].map((_, index) => (
        <Icon 
          key={index} 
          style={{ color: index < rating ? '#ff6060' : '#E3E3E3' }} 
          className="star"
        >
          star
        </Icon>
      ))}
    </div>
  );
};

export default Rate;