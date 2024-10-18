import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../assets/donnees/DataLogement'; 

const Host = () => {
  const { id } = useParams(); 
  const logement = logements.find((logement) => logement.id === id);

  const { host } = logement; 

  return (
    <div className="host">
      <h3 className="host-name">{host.name}</h3>
      <img src={host.picture} alt={`Hôte : ${host.name}`} className="host-picture" />
    </div>
  );
};

export default Host;