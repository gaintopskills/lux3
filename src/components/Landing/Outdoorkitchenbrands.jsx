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

      <form
        className="luxury-service-form"
        name="outdoor-kitchen-service-request"
        method="POST"
        action="/thank-you/"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="outdoor-kitchen-service-request"
        />

        <input type="text" name="name" placeholder="Name" />
        <input type="tel" name="phone" placeholder="Phone" />

        <select name="appliance" defaultValue="">
          <option value="" disabled>
            Appliance Type
          </option>
          <option value="outdoor-grill">Outdoor Grill / BBQ</option>
          <option value="built-in-grill">Built-In Grill</option>
          <option value="side-burner">Side Burner</option>
          <option value="power-burner">Power Burner</option>
          <option value="sear-burner">Sear Burner</option>
          <option value="outdoor-pizza-oven">Outdoor Pizza Oven</option>
          <option value="outdoor-refrigerator">Outdoor Refrigerator</option>
          <option value="outdoor-freezer">Outdoor Freezer</option>
          <option value="beverage-center">Outdoor Beverage Center</option>
          <option value="ice-maker">Outdoor Ice Maker</option>
          <option value="warming-drawer">Outdoor Warming Drawer</option>
          <option value="ventilation">Outdoor Ventilation Hood</option>
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

const OutdoorKitchenLanding = () => {
  const brands = [
    { name: 'Kalamazoo', image: '/logo/kalamazoo.png', width: 220, height: 70 },
    { name: 'Lynx', image: '/logo/lynx.png', width: 180, height: 70 },
    { name: 'Hestan', image: '/logo/hestan.png', width: 220, height: 70 },
    { name: 'Viking', image: '/logo/viking.png', width: 150, height: 70 },
    { name: 'DCS', image: '/logo/dcs.png', width: 160, height: 70 },
    { name: 'Alfresco', image: '/logo/alfresco.png', width: 220, height: 70 },
    { name: 'Twin Eagles', image: '/logo/twin-eagles.png', width: 220, height: 70 },
    { name: 'Fire Magic', image: '/logo/fire-magic.png', width: 220, height: 70 },
    { name: 'Wolf', image: '/logo/wolf.png', width: 180, height: 70 },
    { name: 'True Residential Outdoor', image: '/logo/true-residential.png', width: 190, height: 70 },
    { name: 'Caliber', image: '/logo/caliber.png', width: 220, height: 70 },
  ];

  const features = [
    {
      icon: '/icons/tools.png',
      title: 'Outdoor Kitchen Specialists',
      text: 'Experienced with premium grills, burners, refrigeration, and outdoor cooking systems',
    },
    {
      icon: '/icons/clock.png',
      title: 'Fast & Reliable Service',
      text: 'Same-day availability in most Los Angeles and Orange County areas',
    },
    {
      icon: '/icons/services.png',
      title: 'Luxury Home Service',
      text: 'Careful repair for built-in outdoor kitchens, custom islands, and high-end finishes',
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
                <h1>Outdoor Kitchen Appliance Repair</h1>

                <div className="european-luxury-divider">
                  <span></span>
                  <span className="divider-mark">✦</span>
                  <span></span>
                </div>

                <p className="european-luxury-subtext">
                  SPECIALIZED OUTDOOR KITCHEN REPAIR FOR:
                </p>

                <p className="hero-brand-list">
                  Kalamazoo <span>·</span> Lynx <span>·</span> Hestan <span>·</span> Viking <span>·</span> DCS <span>·</span> Alfresco <span>·</span> Twin Eagles <span>·</span> Fire Magic <span>·</span> Wolf <span>·</span> True Residential Outdoor <span>·</span> Caliber
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
                <h2>Premium Outdoor Kitchen Appliance Repair</h2>

                <p className="luxury-description">
                  Outdoor kitchen appliances require specialized service because they are exposed to heat,
                  moisture, coastal air, grease buildup, weather changes, and heavy seasonal use. We repair
                  high-end outdoor grills, built-in BBQs, side burners, power burners, outdoor refrigeration,
                  ice makers, beverage centers, warming drawers, and ventilation systems with careful
                  diagnostics and luxury-home workmanship.
                </p>

                <h3>Outdoor Appliances We Repair:</h3>

                <p className="luxury-description">
                  Built-In Grills &bull; BBQ Grills &bull; Side Burners &bull; Power Burners &bull;
                  Sear Burners &bull; Outdoor Pizza Ovens &bull; Outdoor Refrigerators &bull;
                  Outdoor Freezers &bull; Beverage Centers &bull; Ice Makers &bull;
                  Warming Drawers &bull; Outdoor Ventilation Hoods
                </p>
              </div>

              <div className="luxury-info-section">
                <h2>Common Outdoor Kitchen Appliance Problems We Fix</h2>

                <p className="luxury-description">
                  We diagnose and repair ignition failure, weak flame, uneven heating, burner corrosion,
                  clogged ports, damaged valves, faulty regulators, rotisserie problems, thermostat failure,
                  electrical issues, refrigeration cooling problems, ice maker failure, leaking, drainage
                  issues, compressor concerns, fan problems, control faults, and outdoor appliance performance
                  decline caused by age, weather, or lack of maintenance.
                </p>
              </div>

              <div className="luxury-brands-section">
                <div className="brands-heading-wrap">
                  <span className="brands-line"></span>
                  <h3>Outdoor Kitchen Brands We Service</h3>
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
                        alt={`${brand.name} outdoor kitchen appliance repair`}
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

              <div className="luxury-reviews-section">
                <div className="reviews-heading-wrap">
                  <span className="reviews-line"></span>
                  <h3>Client Reviews</h3>
                  <span className="reviews-line"></span>
                </div>

                <div className="reviews-summary">
                  <span className="reviews-score">5</span>
                  <span className="reviews-stars">★★★★★</span>
                  <span className="reviews-meta">
                    average rating <span className="reviews-dot">•</span> Trusted by homeowners in Los Angeles, Orange County & Ventura County
                  </span>
                </div>

                <div className="reviews-grid">
                  <article className="review-card">
                    <div className="review-stars">★★★★★</div>
                    <h4>Customer Review</h4>
                    <p>
                      Paste a real Google review here from a customer who used your company for outdoor grill, BBQ, or outdoor kitchen appliance repair.
                    </p>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="review-source"
                    >
                      Verified - Read on Google
                    </a>
                  </article>

                  <article className="review-card">
                    <div className="review-stars">★★★★★</div>
                    <h4>Customer Review</h4>
                    <p>
                      Paste a real Google review here from a customer who needed service for an outdoor refrigerator, ice maker, beverage center, or built-in grill.
                    </p>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="review-source"
                    >
                      Verified - Read on Google
                    </a>
                  </article>

                  <article className="review-card">
                    <div className="review-stars">★★★★★</div>
                    <h4>Customer Review</h4>
                    <p>
                      Paste a real Google review here that mentions professional service, fast response, careful work, or experience with luxury outdoor kitchen appliances.
                    </p>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="review-source"
                    >
                      Verified - Read on Google
                    </a>
                  </article>
                </div>
              </div>
            </div>

            <div className="desktop-sidebar-spacer" aria-hidden="true" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default OutdoorKitchenLanding;