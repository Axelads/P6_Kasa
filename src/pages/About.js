import React from 'react';
import Banniere from '../composants/Banniere';
import Collapse from '../composants/Collapse';
import Aboutinfo from '../assets/donnees/Aboutinfo';

const Apropos = () => {
  return (
    <div className="about">
      <Banniere />
      <div className="content-abouts">
        {Aboutinfo.map((info) => (
          <Collapse 
            key={info.id}
            title={info.title}
            content={info.content}
            className="collapse-about"
          />
        ))}
      </div>
    </div>
  );
};

export default Apropos;