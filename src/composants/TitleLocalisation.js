import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../assets/donnees/DataLogement';

const TitleLocalisation = () => {
  const { id } = useParams(); 
  const logement = logements.find((logement) => logement.id === id);

      return (
    <div className="title-localisation">
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
    </div>
  );
};

export default TitleLocalisation;