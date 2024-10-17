import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../IDlogements';
import Carrousel from '../composants/Carrousel';
import TitleLocalisation from '../composants/TitleLocalisation';
import Tags from '../composants/Tags';
import Rate from '../composants/Rate';
import Host from '../composants/Host';
import Collapse from '../composants/Collapse';
import collapseLogement from '../../src//assets/donnes/CollapseLogement';

const Logement = () => {
  const { id } = useParams(); // Récupérer l'ID du logement depuis l'URL
  const navigate = useNavigate(); // Utilisé pour rediriger vers 404 si nécessaire
  const logement = logements.find((logement) => logement.id === id); // Cherche le logement par ID

  // Redirection vers la page 404 si l'ID n'est pas trouvé dans le fichier IDlogements
  useEffect(() => {
    if (!logement) {
      navigate("/404"); // Redirige vers la page 404 si l'ID est invalide ( changement de chemin avant c'etait "*")
    }
  }, [logement, navigate]);

  // Si le logement n'existe pas, on ne rend rien (Obligation de cette ligne si non page blanche)
  if (!logement) {
    return null;
  }

  return (
    <div className="logement">
      <Carrousel pictures={logement.pictures} />
      <section className="TitleHost">
        <TitleLocalisation />
        <Host />
      </section>
      <div className="Tag-rate">
        <Tags />
        <Rate />
      </div>
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