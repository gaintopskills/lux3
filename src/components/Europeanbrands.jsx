import React from 'react';
import './EuropeanLuxuryLanding.css';

const EuropeanLuxuryAboveFold = () => {
  return (
    <header className="european-luxury-hero">
      <div className="european-luxury-hero-overlay" />

      <div className="european-luxury-shell">
        <div className="european-luxury-main-column">
          <div className="european-luxury-copy">
            <h1>European Luxury & High-End Appliance Repair</h1>

            <div className="european-luxury-divider">
              <span></span>
              <span className="divider-mark">✦</span>
              <span></span>
            </div>

            <p className="european-luxury-subtext">
              CERTIFIED LEVEL REPAIR FOR:
            </p>

            <p className="hero-brand-list">
              La Cornue <span>·</span> Lacanche <span>·</span> Officine Gullo{' '}
              <span>·</span> Bertazzoni <span>·</span> Fulgor Milano{' '}
              <span>·</span> ILVE <span>·</span> Gaggenau <span>·</span> AGA
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EuropeanLuxuryAboveFold;