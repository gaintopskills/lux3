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
        name="high-end-appliance-service-request"
        method="POST"
        action="/thank-you/"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="high-end-appliance-service-request"
        />

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
          <option value="washer">Washer</option>
          <option value="dryer">Dryer</option>
          <option value="wine-cooler">Wine Cooler</option>
          <option value="ice-maker">Ice Maker</option>
          <option value="coffee-system">Coffee System</option>
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

const HighEndApplianceRepairLanding = () => {
  const brands = [
    { name: 'Asko', image: '/logo/asco-logo.png', width: 180, height: 70 },
    { name: 'Bosch', image: '/logo/bosch-logo.png', width: 180, height: 70 },
    { name: 'JennAir', image: '/logo/jennair-logo.png', width: 190, height: 70 },
  ];

  const features = [
    {
      icon: '/icons/tools.png',
      title: 'High-End Appliance Technicians',
      text: 'Experienced with premium dishwashers, laundry systems, cooking appliances, refrigeration, and built-in kitchen units',
    },
    {
      icon: '/icons/clock.png',
      title: 'Fast & Reliable Service',
      text: 'Same-day availability in most cases',
    },
    {
      icon: '/icons/services.png',
      title: 'Careful Luxury Home Service',
      text: 'Repair focused on accurate diagnostics, finish protection, and premium appliance performance',
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
                <h1>High-End Appliance Repair</h1>

                <div className="european-luxury-divider">
                  <span></span>
                  <span className="divider-mark">✦</span>
                  <span></span>
                </div>

                <p className="european-luxury-subtext">
                  SPECIALIZED REPAIR FOR:
                </p>

                <p className="hero-brand-list">
                  Asko <span>·</span> Bosch <span>·</span> JennAir
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
                <h2>Specialized Repair for High-End Appliances</h2>

                <p className="luxury-description">
                  High-end appliances require a more careful repair approach than
                  standard residential units. Brands like Asko, Bosch, and JennAir
                  are often installed in premium kitchens and laundry rooms where
                  performance, quiet operation, clean design, built-in fit, and finish
                  protection all matter.
                </p>

                <p className="luxury-description">
                  Luxury Appliance Repair by Zaricci provides specialized
                  <strong> high-end appliance repair </strong>
                  for Asko, Bosch, and JennAir appliances throughout Los Angeles,
                  Orange County, and Ventura County. Our service is focused on accurate
                  diagnostics, careful handling, and professional repair planning for
                  premium residential appliances.
                </p>

                <h3>Appliances We Repair:</h3>

                <p className="luxury-description">
                  Dishwashers &bull; Washers &bull; Dryers &bull; Ranges &bull;
                  Cooktops &bull; Rangetops &bull; Ovens &bull; Wall Ovens &bull;
                  Steam Ovens &bull; Refrigerators &bull; Freezers &bull;
                  Wine Coolers &bull; Ice Makers &bull; Coffee Systems &bull;
                  Ventilation Hoods &bull; Warming Drawers &bull; Built-In Appliances
                </p>
              </div>

              <div className="luxury-brands-section">
                <div className="brands-heading-wrap">
                  <span className="brands-line"></span>
                  <h3>High-End Appliance Brands We Service</h3>
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

              <div className="luxury-info-section">
                <h2>Common High-End Appliance Problems We Repair</h2>

                <p className="luxury-description">
                  Premium appliances can develop mechanical, electrical, heating,
                  cooling, draining, drying, control, and sensor-related issues. Our
                  technicians inspect the appliance carefully, identify the source of
                  the problem, and recommend the right repair based on the brand,
                  model, installation style, and symptoms.
                </p>

                <p className="luxury-description">
                  We repair dishwasher draining problems, poor cleaning performance,
                  water leaks, washer spin issues, dryer heating problems, oven
                  temperature concerns, cooktop ignition problems, refrigerator cooling
                  issues, freezer temperature problems, wine cooler failures, ice maker
                  issues, coffee system faults, ventilation problems, control errors,
                  unusual noises, door gasket wear, and maintenance-related performance
                  decline.
                </p>
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

              <div className="luxury-info-section">
                <h2>Asko, Bosch & JennAir Appliance Service</h2>

                <p className="luxury-description">
                  Asko appliances are often chosen for premium dishwashing and laundry
                  performance, Bosch appliances are known for quiet dishwashers,
                  cooking appliances, refrigeration, and clean European-style design,
                  and JennAir appliances are frequently installed in luxury kitchens
                  with built-in cooking, refrigeration, ventilation, and specialty
                  appliance systems.
                </p>

                <p className="luxury-description">
                  Because these brands are often integrated into custom cabinetry,
                  panel-ready installations, designer kitchens, and premium laundry
                  spaces, service must be handled carefully. Our technicians focus on
                  accurate diagnostics, correct part identification, careful appliance
                  access, finish protection, and repair work that respects the
                  surrounding cabinetry, counters, flooring, panels, and home.
                </p>
              </div>

              <div className="luxury-info-section">
                <h2>Repair for Premium Kitchens and Laundry Rooms</h2>

                <p className="luxury-description">
                  High-end appliance repair is not only about fixing the immediate
                  issue. It is also about protecting the appliance, the installation,
                  and the surrounding space. A built-in JennAir refrigerator, a Bosch
                  dishwasher, or an Asko washer and dryer system may require a more
                  careful approach than a basic household appliance.
                </p>

                <p className="luxury-description">
                  Our service may include heating diagnostics, cooling diagnostics,
                  water flow testing, drain inspection, sensor and control review,
                  airflow assessment, gasket inspection, leveling checks, electrical
                  testing, performance calibration, and recommendations for maintenance
                  or replacement parts when needed.
                </p>
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
                    average rating <span className="reviews-dot">•</span> Trusted by homeowners in Los Angeles & Orange County
                  </span>
                </div>

                <div className="reviews-grid">
                  <article className="review-card">
                    <div className="review-stars">★★★★★</div>
                    <h4>High-End Dishwasher Repair</h4>
                    <p>
                      We needed help with a premium dishwasher that was not draining
                      correctly. The technician diagnosed the issue, explained the
                      repair, and handled the appliance carefully. Everything works
                      properly again.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/YiLLEyim5HCCFqJ19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="review-source"
                    >
                      Verified - Read on Google
                    </a>
                  </article>

                  <article className="review-card">
                    <div className="review-stars">★★★★★</div>
                    <h4>Built-In Appliance Service</h4>
                    <p>
                      Our built-in appliance was having performance issues, and we
                      wanted someone who would be careful with the cabinetry and
                      surrounding kitchen. The repair was professional, clean, and
                      very detailed.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/DQwbrZrLvKuEneQP6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="review-source"
                    >
                      Verified - Read on Google
                    </a>
                  </article>

                  <article className="review-card">
                    <div className="review-stars">★★★★★</div>
                    <h4>Luxury Kitchen Repair</h4>
                    <p>
                      The technician knew how to work with high-end appliances and
                      took the time to test everything before leaving. Very happy with
                      the service and the communication.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/TMxjWZBQobqVMCbK7"
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

export default HighEndApplianceRepairLanding;