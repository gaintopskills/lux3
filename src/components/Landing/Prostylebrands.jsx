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
        name="pro-style-service-request"
        method="POST"
        action="/thank-you/"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="pro-style-service-request"
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
          <option value="grill">Grill</option>
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

const ProStyleApplianceRepairLanding = () => {
  const brands = [
    { name: 'American Range', image: '/logo/american-range-logo.png', width: 220, height: 70 },
    { name: 'BlueStar', image: '/logo/bluestar-logo.png', width: 190, height: 70 },
    { name: 'FiveStar', image: '/logo/fivestar-logo.png', width: 190, height: 70 },
    { name: 'Thor', image: '/logo/thor-logo.png', width: 170, height: 70 },
    { name: 'Forno', image: '/logo/forno-logo.png', width: 180, height: 70 },
    { name: 'Garland', image: '/logo/garland-logo.png', width: 200, height: 70 },
    { name: 'ZLINE', image: '/logo/zline-logo.png', width: 180, height: 70 },
  ];

  const features = [
    {
      icon: '/icons/tools.png',
      title: 'Pro-Style Appliance Technicians',
      text: 'Experienced with heavy-duty ranges, rangetops, ovens, cooktops, grills, and ventilation systems',
    },
    {
      icon: '/icons/clock.png',
      title: 'Fast & Reliable Service',
      text: 'Same-day availability in most cases',
    },
    {
      icon: '/icons/services.png',
      title: 'Built for Serious Home Kitchens',
      text: 'Careful repair for powerful cooking appliances and premium kitchen installations',
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
                <h1>Pro-Style Appliance Repair</h1>

                <div className="european-luxury-divider">
                  <span></span>
                  <span className="divider-mark">✦</span>
                  <span></span>
                </div>

                <p className="european-luxury-subtext">
                  SPECIALIZED REPAIR FOR:
                </p>

                <p className="hero-brand-list">
                  American Range <span>·</span> BlueStar <span>·</span> FiveStar <span>·</span> Thor <span>·</span> Forno <span>·</span> Garland <span>·</span> ZLINE
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
                <h2>Specialized Repair for Pro-Style Appliances</h2>

                <p className="luxury-description">
                  Pro-style appliances are built for homeowners who want the power,
                  size, and performance of a professional kitchen inside the home.
                  These appliances require a more careful repair approach than
                  standard residential units because they often include high-BTU
                  burners, large oven cavities, heavy grates, commercial-style
                  controls, powerful ventilation, and premium stainless steel finishes.
                </p>

                <p className="luxury-description">
                  Luxury Appliance Repair by Zaricci provides specialized
                  <strong> pro-style appliance repair </strong>
                  for American Range, BlueStar, FiveStar, Thor, Forno, Garland,
                  and ZLINE appliances throughout Los Angeles, Orange County,
                  and Ventura County.
                </p>

                <h3>Appliances We Repair:</h3>

                <p className="luxury-description">
                  Ranges &bull; Rangetops &bull; Cooktops &bull; Stoves &bull;
                  Ovens &bull; Wall Ovens &bull; Range Hoods &bull; Ventilation Systems &bull;
                  Grills &bull; Refrigerators &bull; Freezers &bull; Dishwashers &bull;
                  Warming Drawers &bull; Outdoor Cooking Appliances
                </p>
              </div>

              <div className="luxury-brands-section">
                <div className="brands-heading-wrap">
                  <span className="brands-line"></span>
                  <h3>Pro-Style Brands We Service</h3>
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
                <h2>Common Pro-Style Appliance Problems We Repair</h2>

                <p className="luxury-description">
                  Pro-style cooking appliances are often exposed to heavier use,
                  higher heat output, grease buildup, and more demanding cooking
                  conditions. Our technicians inspect the appliance carefully,
                  identify the source of the issue, and recommend the proper repair
                  based on the brand, model, installation, and symptoms.
                </p>

                <p className="luxury-description">
                  We repair burner ignition problems, weak flame, uneven heating,
                  oven temperature issues, slow preheating, convection fan problems,
                  control failures, range hood motor issues, ventilation problems,
                  gas odor concerns, griddle performance issues, door gasket wear,
                  cooling problems, and maintenance-related performance decline.
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
                <h2>Repair for Powerful Residential Cooking Appliances</h2>

                <p className="luxury-description">
                  Brands like American Range, BlueStar, FiveStar, Thor, Forno,
                  Garland, and ZLINE are often chosen by homeowners who want a
                  bold professional kitchen look with stronger cooking performance
                  than ordinary residential appliances. These units may include
                  high-output burners, heavy-duty oven systems, large grates,
                  griddles, charbroilers, infrared broilers, powerful ventilation,
                  and oversized cooking surfaces.
                </p>

                <p className="luxury-description">
                  Because these appliances are larger, heavier, and more powerful
                  than standard kitchen equipment, proper service requires more
                  than a basic repair approach. Our technicians focus on safe
                  diagnostics, correct part identification, careful handling of
                  stainless steel finishes, and repair planning that respects the
                  surrounding cabinetry, counters, flooring, and kitchen design.
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
                    <h4>Pro-Style Range Repair</h4>
                    <p>
                      The technician came out for our professional-style range that
                      was not igniting properly. He knew how to work with the unit,
                      explained the issue clearly, and got the burners working again.
                      Very professional and easy experience.
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
                    <h4>High-End Oven Service</h4>
                    <p>
                      Our oven temperature was completely off and food was cooking
                      unevenly. The technician diagnosed the problem, repaired it,
                      and tested everything before leaving. The oven works much
                      better now.
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
                    <h4>Luxury Kitchen Appliance Repair</h4>
                    <p>
                      We needed someone who could handle a large stainless steel
                      pro-style appliance without damaging the surrounding kitchen.
                      The service was careful, professional, and very detailed.
                      Highly recommend.
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

export default ProStyleApplianceRepairLanding;