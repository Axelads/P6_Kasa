import React from 'react';
import { NavLink } from 'react-router-dom';
import headerlogo from '../../assets/img/headerLogo.png';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div>
          <img src={headerlogo} alt="Logo KASA" className="imgLogoHeader" />
        </div>
        <ul>
          <li>
            <NavLink 
              to="/home" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;