import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../IDlogements';

const Tags = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id); // Trouve le logement correspondant

  return (
    <div className="content-tags">
      {logement.tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;