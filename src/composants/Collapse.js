import React, { useState } from 'react';
import { Icon } from '@material-ui/core'; 

const Collapse = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          <Icon>arrow_back_ios</Icon>
        </span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Collapse;
