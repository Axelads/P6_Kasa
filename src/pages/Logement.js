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
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("*");
    }
  }, [logement, navigate]);

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
