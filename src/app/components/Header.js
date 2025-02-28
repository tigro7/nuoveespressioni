import React from 'react';
import './Header.css'; // o styled components, Tailwind, etc.

const Header = () => {
  return (
    <header>
        <div className="logo">Le Nuove Espressioni</div>
        <nav>
            <ul>
                <li><a href="#about">Chi Siamo</a></li>
                <li><a href="#spettacoli">Spettacoli</a></li>
                <li><a href="#componenti">Compagnia</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
