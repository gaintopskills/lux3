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
        name="retro-appliance-service-request"
        method="POST"
        action="/thank-you/"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="retro-appliance-service-request"
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
          <option value="ice-maker">Ice Maker</option>
          <option value="wine-cooler">Wine Cooler</option>
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

const RetroApplianceRepairLanding = () => {
  const brands = [
    { name: 'Big Chill', image: '/logo/big-chill-logo.png', width: 190, height: 70 },
    { name: 'Elmira Stove Works', image: '/logo/elmira-stove-works-logo.png', width: 220, height: 70 },
    { name: 'Smeg', image: '/logo/smeg-logo.png', width: 170, height: 70 },
    { name: 'Heartland', image: '/logo/heartland-logo.png', width: 200, height: 70 },
  ];

  const features = [
    {
      icon: '/icons/tools.png',
      title: 'Retro Appliance Technicians',
      text: 'Experienced with vintage-inspired ranges, ovens, refrigerators, dishwashers, and specialty kitchen appliances',
    },
    {
      icon: '/icons/clock.png',
      title: 'Fast & Reliable Service',
      text: 'Same-day availability in most cases',
    },
    {
      icon: '/icons/services.png',
      title: 'Careful Service for Distinctive Kitchens',
      text: 'Repair focused on performance, finish protection, and preserving the look of retro-style appliances',
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
                <h1>Retro Appliance Repair</h1>

                <div className="european-luxury-divider">
                  <span></span>
                  <span className="divider-mark">✦</span>
                  <span></span>
                </div>

                <p className="european-luxury-subtext">
                  SPECIALIZED REPAIR FOR:
                </p>

                <p className="hero-brand-list">
                  Big Chill <span>·</span> Elmira Stove Works <span>·</span> Smeg <span>·</span> Heartland
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
                <h2>Specialized Repair for Retro & Vintage-Inspired Appliances</h2>

                <p className="luxury-description">
                  Retro appliances require a careful repair approach because they are
                  often chosen for both performance and design. Brands like Big Chill,
                  Elmira Stove Works, Smeg, and Heartland are not ordinary kitchen
                  appliances. They are often part of a complete design vision, with
                  distinctive colors, curved doors, polished trim, heritage styling,
                  and custom kitchen integration.
                </p>

                <p className="luxury-description">
                  Luxury Appliance Repair by Zaricci provides specialized
                  <strong> retro appliance repair </strong>
                  for homeowners who want to preserve the look, performance, and
                  character of their vintage-inspired appliances throughout Los Angeles,
                  Orange County, and Ventura County.
                </p>

                <h3>Appliances We Repair:</h3>

                <p className="luxury-description">
                  Ranges &bull; Stoves &bull; Ovens &bull; Cooktops &bull;
                  Rangetops &bull; Refrigerators &bull; Freezers &bull;
                  Dishwashers &bull; Range Hoods &bull; Ventilation Systems &bull;
                  Wine Coolers &bull; Ice Makers &bull; Specialty Kitchen Appliances
                </p>
              </div>

              <div className="luxury-brands-section">
                <div className="brands-heading-wrap">
                  <span className="brands-line"></span>
                  <h3>Retro Appliance Brands We Service</h3>
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
                <h2>Common Retro Appliance Problems We Repair</h2>

                <p className="luxury-description">
                  Retro-style appliances can develop many of the same mechanical,
                  electrical, heating, cooling, and control issues as modern appliances,
                  but their design and construction often require more careful handling.
                  Our technicians inspect the appliance, identify the real cause of the
                  issue, and recommend the right repair based on the brand, model,
                  condition, and installation.
                </p>

                <p className="luxury-description">
                  We repair oven heating problems, burner ignition issues, weak flame,
                  uneven baking, slow preheating, refrigerator cooling problems,
                  freezer temperature issues, dishwasher draining concerns, leaking,
                  control failures, door gasket wear, unusual noises, ventilation
                  problems, airflow issues, and maintenance-related performance decline.
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
                <h2>Repair for Statement Kitchens and Heritage-Inspired Appliances</h2>

                <p className="luxury-description">
                  Big Chill, Elmira Stove Works, Smeg, and Heartland appliances are
                  often installed in kitchens where appearance matters just as much as
                  function. These appliances may feature custom colors, retro panels,
                  specialty handles, enamel finishes, curved doors, chrome-style trim,
                  or vintage-inspired design details that must be handled carefully
                  during service.
                </p>

                <p className="luxury-description">
                  Because these appliances are often part of a highly designed kitchen,
                  proper service requires more than a basic repair approach. Our
                  technicians focus on accurate diagnostics, correct part identification,
                  careful handling of decorative finishes, and repair planning that
                  respects the surrounding cabinetry, flooring, counters, and overall
                  kitchen design.
                </p>
              </div>

              <div className="luxury-info-section">
                <h2>Big Chill, Elmira Stove Works, Smeg & Heartland Service</h2>

                <p className="luxury-description">
                  We service retro and heritage-style appliances across several
                  appliance categories. Whether you own a colorful Big Chill refrigerator,
                  an Elmira Stove Works range, a Smeg dishwasher, or a Heartland classic
                  kitchen appliance, we approach the repair with attention to both
                  appliance performance and visual preservation.
                </p>

                <p className="luxury-description">
                  Our service may include heating diagnostics, ignition testing,
                  thermostat and sensor inspection, airflow review, refrigeration
                  performance checks, gasket inspection, control testing, drain review,
                  leveling assessment, and recommendations for maintenance or parts
                  replacement when needed.
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
                    <h4>Retro Refrigerator Repair</h4>
                    <p>
                      We needed help with our retro-style refrigerator that was not
                      cooling properly. The technician was careful with the finish,
                      found the issue, and got it working again without damaging the
                      surrounding kitchen.
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
                    <h4>Vintage-Style Range Service</h4>
                    <p>
                      Our range was having ignition problems and uneven heating. The
                      technician explained everything clearly, repaired the issue, and
                      treated the appliance very carefully.
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
                    <h4>Specialty Appliance Repair</h4>
                    <p>
                      It was hard to find someone comfortable working on a specialty
                      retro appliance. The service was professional, detailed, and the
                      technician knew how to handle the appliance without scratching or
                      damaging the finish.
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

export default RetroApplianceRepairLanding;