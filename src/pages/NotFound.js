import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/home" className="home-link">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default NotFound;