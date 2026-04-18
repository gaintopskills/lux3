import React, { useEffect, useRef } from 'react';
import './EuropeanLuxuryLanding.css';

const ServiceForm = ({
  className = '',
  showIntro = true,
  showResponseNote = false,
  id,
}) => {
  return (
    <div className={`european-luxury-form-card ${className}`.trim()} id={id}>
      <h2>Request Service Now</h2>

      {showIntro && (
        <p className="form-intro">
          Get Fast Response - We Will Contact You Shortly
        </p>
      )}

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

      {showResponseNote && (
        <p className="response-note">We respond within minutes</p>
      )}
    </div>
  );
};

const EuropeanLuxuryLanding = () => {
  const scrollAnimateRef = useRef(null);
  const scrollAnimateMainRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const setLayout = () => {
      if (
        !scrollAnimateRef.current ||
        !scrollAnimateMainRef.current ||
        !heroRef.current ||
        !contentRef.current ||
        !footerRef.current ||
        !wrapperRef.current
      ) {
        return;
      }

      const windowHeight = window.innerHeight;
      const footerHeight = footerRef.current.offsetHeight;
      const contentHeight = contentRef.current.offsetHeight;
      const heightDocument = windowHeight + contentHeight + footerHeight - 20;

      scrollAnimateRef.current.style.height = `${heightDocument}px`;
      scrollAnimateMainRef.current.style.height = `${heightDocument}px`;

      heroRef.current.style.height = `${windowHeight}px`;
      wrapperRef.current.style.marginTop = `${windowHeight}px`;

      updateParallax();
    };

    const updateParallax = () => {
      if (
        !scrollAnimateMainRef.current ||
        !heroRef.current ||
        !footerRef.current ||
        !contentRef.current
      ) {
        return;
      }

      const scroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerHeight = footerRef.current.offsetHeight;
      const contentHeight = contentRef.current.offsetHeight;
      const heightDocument = windowHeight + contentHeight + footerHeight - 20;

      scrollAnimateMainRef.current.style.top = `-${scroll}px`;

      const bgPosY = 50 - (scroll * 100) / heightDocument;
      heroRef.current.style.backgroundPosition = `50% ${bgPosY}%`;

      if (scroll >= footerHeight) {
        footerRef.current.style.bottom = '0px';
      } else {
        footerRef.current.style.bottom = `-${footerHeight}px`;
      }
    };

    setLayout();
    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', updateParallax, { passive: true });

    return () => {
      window.removeEventListener('resize', setLayout);
      window.removeEventListener('scroll', updateParallax);
    };
  }, []);

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
      <aside className="european-luxury-fixed-sidebar">
        <ServiceForm
          className="desktop-form"
          showIntro={true}
          showResponseNote={false}
          id="request-service"
        />
      </aside>

      <div id="scroll-animate" ref={scrollAnimateRef}>
        <div id="scroll-animate-main" ref={scrollAnimateMainRef}>
          <div className="wrapper-parallax" ref={wrapperRef}>
            <header
              className="european-luxury-hero"
              ref={heroRef}
            >
              <div className="european-luxury-hero-overlay" />

              <div className="european-luxury-shell">
                <div className="european-luxury-main-column">
                  <div className="european-luxury-copy">
                    <h1>European Luxury Appliance Repair</h1>

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
                      <a
                        href="#mobile-request-service"
                        className="hero-btn hero-btn-primary"
                      >
                        Request Service
                      </a>

                      <a
                        href="tel:+13235555555"
                        className="hero-btn hero-btn-secondary"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>

                <div className="desktop-sidebar-spacer" aria-hidden="true" />
              </div>
            </header>

            <section className="content" ref={contentRef}>
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

            <footer ref={footerRef}>
              <div className="european-luxury-footer-overlay" />
              <div className="european-luxury-footer-inner">
                <h2>Luxury Service. Fast Response. Expert Care.</h2>
              </div>
            </footer>
          </div>
        </div>
      </div>

      <div className="sticky-mobile-cta">
        <a
          href="#mobile-request-service"
          className="sticky-btn sticky-btn-primary"
        >
          Request Service
        </a>

        <a
          href="tel:+13235555555"
          className="sticky-btn sticky-btn-secondary"
        >
          Call Now
        </a>
      </div>
    </section>
  );
};

export default EuropeanLuxuryLanding;