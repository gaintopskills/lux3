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

const EuropeanLuxuryLanding = () => {
  const brands = [
    { name: 'La Cornue', image: '/logo/aga-logo.png', width: 180, height: 70 },
    { name: 'Lacanche', image: '/logo/bertazzoni-logo.png', width: 180, height: 70 },
    { name: 'Officine Gullo', image: '/logo/fulgor-milano-logo.png', width: 200, height: 70 },
    { name: 'Bertazzoni', image: '/logo/gaggenau-logo.png', width: 180, height: 70 },
    { name: 'Fulgor Milano', image: '/logo/la-cornue-logo.png', width: 190, height: 70 },
    { name: 'ILVE', image: '/logo/lacanche-logo.png', width: 150, height: 70 },
    { name: 'Gaggenau', image: '/logo/officine-gullo-logo.png', width: 220, height: 70 },
    { name: 'Gaggenau Alt', image: '/logo/ilve-logo.png', width: 220, height: 70 },
  ];

  const features = [
    {
      icon: '/icons/tools.png',
      title: 'Specialized Technicians',
      text: 'Experienced with European luxury appliances',
    },
    {
      icon: '/icons/clock.png',
      title: 'Fast & Reliable SErvice',
      text: 'Same-day availability in most cases',
    },
    {
      icon: '/icons/services.png',
      title: 'Satisfaction Guaranteed',
      text: 'Quality Work for Discerning Clients',
    },
  ];

  return (
    <section className="european-luxury-landing">
      <aside className="european-luxury-fixed-sidebar">
        <ServiceForm
          className="desktop-form"
          showIntro={true}
          showResponseNote={false}
          id="request-service"
        />
      </aside>

      <div className="wrapper-parallax">
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
  CERTIFIED LEVEL REPAIR FOR:</p>
  <p className="hero-brand-list">
  La Cornue <span>·</span> Lacanche <span>·</span> Officine Gullo <span>·</span> Bertazzoni <span>·</span> Fulgor Milano <span>·</span> ILVE <span>·</span> Gaggenau <span>·</span> AGA
</p>

               
              </div>
            </div>

            <div className="desktop-sidebar-spacer" aria-hidden="true" />
          </div>
        </header>

        <section className="content">
          <div className="european-luxury-shell">
            <div className="european-luxury-main-column">
              <div
                className="mobile-form-wrap"
                id="mobile-request-service"
              >
                <ServiceForm
                  className="mobile-form"
                  showIntro={false}
                  showResponseNote={true}
                />
              </div>

              <div className="luxury-info-section">
                <h2>
                Specialized Repair for High-End & Luxury European Appliances
</h2>

<p className="luxury-description">
    European luxury appliances require a different level of care. We work on
    premium cooking and refrigeration systems with an approach centered on
    accurate diagnostics, careful handling, and respect for high-end finishes,
    panels, and surrounding cabinetry.
    <br></br> <br></br>
    <h3>Appliances We repair:</h3>
    <p></p>
    Ranges &bull; Rangetops/Cooktops &bull; Hoods &bull; Ovens &bull; Refrigerator &bull;  Freezers &bull; Dishwashers &bull; Warming Drawers  
  </p>
              </div>

              <div className="luxury-brands-section">
                <div className="brands-heading-wrap">
                  <span className="brands-line"></span>
                  <h3>Specialized in European Brands</h3>
                  <span className="brands-line"></span>
                </div>

                <div className="brands-grid">
                  {brands.map((brand, index) => (
                    <div
                      className="brand-item"
                      key={`${brand.name}-${index}`}
                    >
                      <img
                        src={brand.image}
                        alt={brand.name}
                        width={brand.width}
                        height={brand.height}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              

              <div className="luxury-features-section">
                {features.map((feature) => (
                  <div
                    className="feature-card"
                    key={feature.title}
                  >
                    <div className="feature-icon">
                      {typeof feature.icon === 'string' && feature.icon.startsWith('/')
                        ? (
                          <img
                            src={feature.icon}
                            alt=""
                            width="32"
                            height="32"
                          />
                        )
                        : feature.icon}
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="desktop-sidebar-spacer" aria-hidden="true" />
          </div>
        </section>
      </div>
      <div className="luxury-reviews-section">
  <div className="reviews-heading-wrap">
    <span className="reviews-line"></span>
    <h3>Client Reviews</h3>
    <span className="reviews-line"></span>
  </div>

  <div className="reviews-summary">
    <span className="reviews-score">4.9</span>
    <span className="reviews-stars">★★★★★</span>
    <span className="reviews-meta">
      average rating <span className="reviews-dot">•</span> Trusted by Los Angeles homeowners
    </span>
  </div>

  <div className="reviews-grid">
    <article className="review-card">
      <div className="review-stars">★★★★★</div>
      <h4>Elena R.</h4>
      <p>
        Zaricci repaired our La Cornue range flawlessly. The technician was
        professional, knowledgeable, and treated our kitchen with great care.
        Highly recommend.
      </p>
      <span className="review-source">Verified review</span>
    </article>

    <article className="review-card">
      <div className="review-stars">★★★★★</div>
      <h4>Michael T.</h4>
      <p>
        Quick response and excellent service on our Gaggenau oven. They
        diagnosed the issue accurately and had it working the same day. True
        experts in luxury appliances.
      </p>
      <span className="review-source">Verified review</span>
    </article>

    <article className="review-card">
      <div className="review-stars">★★★★★</div>
      <h4>Sophia L.</h4>
      <p>
        Outstanding experience from start to finish. Polite, on time, and
        incredibly thorough. Our Bertazzoni cooktop works beautifully now.
        Thank you.
      </p>
      <span className="review-source">Verified review</span>
    </article>
  </div>
</div>
     
    </section>

    
  );
};

export default EuropeanLuxuryLanding;