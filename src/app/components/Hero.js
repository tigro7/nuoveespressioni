import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Lasciati emozionare.</h1>
        <p>Vivi l'emozione del teatro con noi.</p>
        <div className="cta-buttons">
          <button className="primary">Chi siamo</button>
          <button className="secondary">I nostri spettacoli</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
