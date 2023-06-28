import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="title-container">
        <span className="title-text">
          <span className="mobile-title-text">STREAM STAR WARS ON DISNEY+</span>
          <span className="non-mobile-title-text">TODOS TUS FAVORITOS DE STAR WARS AHORA EN TRANSMISION EN DISNEY+</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
