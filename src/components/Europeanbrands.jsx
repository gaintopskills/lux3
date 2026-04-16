import React, { useEffect, useState } from 'react';
import './EuropeanLuxuryLanding.css';

const EuropeanLuxuryLanding = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.28);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const brands = [
    'La Cornue',
    'Lacanche',
    'Officine Gullo',
    'Bertazzoni',
    'Fulgor Milano',
    'ILVE',
  ];

  const features = [
    {
      icon: '🔧',
      title: 'Specialized Technicians',
      text: 'Experienced with European luxury appliances',
    },
    {
      icon: '⏱',
      title: 'Fast Response',
      text: 'Same-day availability in most cases',
    },
    {
      icon: '🛡',
      title: 'High-End Service',
      text: 'Careful diagnostics for premium kitchens',
    },
  ];

  return (
    <section className="european-luxury-landing">
      <div className="european-luxury-hero">
        <div
          className="european-luxury-parallax-bg"
          style={{
            transform: `translate3d(0, ${offsetY}px, 0) scale(1.08)`,
          }}
        />

        <div className="european-luxury-overlay" />

        <div className="european-luxury-inner">
          <div className="european-luxury-copy">
            <h1>European Luxury Appliance Repair in Los Angeles</h1>

            <div className="european-luxury-divider">
              <span></span>
              <span className="divider-mark">✦</span>
              <span></span>
            </div>

            <p className="european-luxury-subtext">
              Expert service for La Cornue, Lacanche, Officine Gullo,
              Bertazzoni, Fulgor Milano, ILVE &amp; Gaggenau
            </p>

            <div className="european-luxury-hero-actions mobile-only">
              <a href="#mobile-request-service" className="hero-btn hero-btn-primary">
                Request Service
              </a>

              <a href="tel:+13235555555" className="hero-btn hero-btn-secondary">
                Call Now
              </a>
            </div>
          </div>

          <div className="european-luxury-form-card desktop-form" id="request-service">
            <h2>Request Service Now</h2>

            <p className="form-intro">
              Get Fast Response - We Will Contact You Shortly
            </p>

            <form className="luxury-service-form">
              <input type="text" name="name" placeholder="Your Name" />
              <input type="tel" name="phone" placeholder="Phone Number" />

              <select name="appliance" defaultValue="">
                <option value="" disabled>
                  Type of Appliance
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
          </div>
        </div>
      </div>

      <div className="european-luxury-content">
        <div className="mobile-form-wrap" id="mobile-request-service">
          <div className="european-luxury-form-card mobile-form">
            <h2>Request Service Now</h2>

            <form className="luxury-service-form">
              <input type="text" name="name" placeholder="Your Name" />
              <input type="tel" name="phone" placeholder="Phone Number" />

              <select name="appliance" defaultValue="">
                <option value="" disabled>
                  Type of Appliance
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

            <p className="response-note">We respond within minutes</p>
          </div>
        </div>

        <div className="luxury-info-section">
          <h2>Specialized Repair for High-End European Appliances</h2>

          <p className="luxury-description">
            We provide expert diagnostics and repair for premium brands like
            <strong> La Cornue</strong>, <strong> Lacanche</strong>,
            <strong> Officine Gullo</strong>, <strong> Bertazzoni</strong>,
            <strong> Fulgor Milano</strong>, <strong> ILVE</strong>, and
            <strong> Gaggenau</strong>.
          </p>

          <p className="luxury-service-areas">
            Serving Brentwood, Beverly Hills, Malibu, and surrounding areas.
          </p>
        </div>

        <div className="luxury-brands-section">
          <div className="brands-heading-wrap">
            <span className="brands-line"></span>
            <h3>Specialized in European Brands</h3>
            <span className="brands-line"></span>
          </div>

          <div className="brands-grid">
            {brands.map((brand) => (
              <div className="brand-item" key={brand}>
                {brand}
              </div>
            ))}
          </div>
        </div>

        <div className="luxury-features-section">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky-mobile-cta">
        <a href="#mobile-request-service" className="sticky-btn sticky-btn-primary">
          Request Service
        </a>

        <a href="tel:+13235555555" className="sticky-btn sticky-btn-secondary">
          Call Now
        </a>
      </div>
    </section>
  );
};

export default EuropeanLuxuryLanding;