import React from 'react';
import './EuropeanLuxuryLanding.css';

const ServiceForm = ({
  className = '',
  showIntro = true,
  showResponseNote = false,
  id,
}) => {
  return (
    <div className={`european-luxury-form-card ${className}`.trim()} id={id}>
      <h2>Request Service</h2>

      {showIntro && (
        <p className="form-intro">
          Fast Response - We Will Contact You Shortly
        </p>
      )}

      <form className="luxury-service-form">
        <input type="text" name="name" placeholder="Name" />
        <input type="tel" name="phone" placeholder="Phone" />

        <select name="appliance" defaultValue="">
          <option value="" disabled>
            Appliance Type
          </option>
          <option value="range">Range</option>
          <option value="oven">Oven</option>
          <option value="cooktop">Cooktop</option>
          <option value="rangetop">Rangetop</option>
          <option value="stove">Stove</option>
          <option value="ventilation">Ventilation Hood</option>
          <option value="refrigerator">Refrigerator</option>
          <option value="freezer">Freezer</option>
          <option value="dishwasher">Dishwasher</option>
          <option value="other">Other</option>
        </select>

        <textarea
          name="issue"
          rows="4"
          placeholder="Describe the Issue"
        />

        <button type="submit">Submit Request</button>
      </form>

      {showResponseNote && (
        <p className="response-note">We respond within minutes</p>
      )}
    </div>
  );
};

const EuropeanLuxuryAboveFold = () => {
  return (
    <>
      <aside className="european-luxury-fixed-sidebar">
        <ServiceForm
          className="desktop-form"
          showIntro={true}
          showResponseNote={false}
          id="request-service"
        />
      </aside>

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

          <div className="desktop-sidebar-spacer" aria-hidden="true" />
        </div>
      </header>
    </>
  );
};

export default EuropeanLuxuryAboveFold;