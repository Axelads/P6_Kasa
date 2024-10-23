import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../assets/donnees/DataLogement';
import Carrousel from '../composants/Carrousel';
import TitleLocalisation from '../composants/TitleLocalisation';
import Tags from '../composants/Tags';
import Rate from '../composants/Rate';
import Host from '../composants/Host';
import Collapse from '../composants/Collapse';
import collapseLogement from '../assets/donnees/CollapseLogement';

const Logement = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const logement = logements.find((logement) => logement.id === id); 

  const [isMobileView, setIsMobileView] = useState(false); // Gère l'état de la vue mobile

  useEffect(() => {
    if (!logement) {
      navigate("/404"); 
    }
  }, [logement, navigate]);

  // Fonction pour vérifier la taille de l'écran
  const handleResize = () => {
    setIsMobileView(window.matchMedia("(max-width: 768px)").matches);
  };

  useEffect(() => {
    // Vérifie la taille de l'écran au chargement
    handleResize();

    // Ajoute un écouteur d'événements pour détecter les changements de taille d'écran
    window.addEventListener("resize", handleResize);

    // Nettoie l'écouteur d'événements lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Si le logement n'existe pas, on ne rend rien
  if (!logement) {
    return null;
  }

  return (
    <div className="logement">
      <Carrousel pictures={logement.pictures} />
      
      {/* Affichage pour Desktop ou Mobile */}
      {isMobileView ? (
        // Vue mobile
        <>
          <TitleLocalisation />
          <Tags />
          <div className="Tag-rate">
            <Rate />
            <Host />
          </div>
        </>
      ) : (
        // Vue Desktop
        <>
          <section className="TitleHost">
            <TitleLocalisation />
            <Host />
          </section>
          <div className="Tag-rate">
            <Tags />
            <Rate />
          </div>
        </>
      )}
      
      <div className="content-logements">
        {collapseLogement.map((info) => (
          <Collapse
            key={info.id}
            title={info.title}
            content={info.key === "description"
              ? logement.description
              : (
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              )}
            className="collapse-logement"
          />
        ))}
      </div>
    </div>
  );
};

export default Logement;