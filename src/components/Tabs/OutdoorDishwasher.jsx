// SEO-optimized Tabs component for brand-specific dishwasher repair services
// Includes premium, luxury, European, and high-end dishwasher brands.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "kalamazoo-outdoor-dishwasher-repair",
      title: "Kalamazoo Outdoor Dishwasher Repair",
      heading: "Kalamazoo Outdoor Dishwasher Repair",
      /* img: "/dishwasher-repair/kalamazoo-outdoor-dishwasher-repair.webp", */
      alt: "Kalamazoo outdoor dishwasher repair technician servicing a legacy outdoor kitchen dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Kalamazoo outdoor dishwasher repair</strong> support
            for legacy Kalamazoo outdoor dishwashers installed in premium outdoor
            kitchens. Kalamazoo states that it stopped selling outdoor dishwashers
            in 2016, but existing units may still be integrated into weather-tight
            cabinetry, deep-sink work areas, and self-contained outdoor entertaining
            spaces. Service should account for drainage, water exposure,
            winterization history, cabinet integration, and parts availability.
          </p>

          <h3>
            Kalamazoo Outdoor Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Outdoor dishwasher not draining because of filter, sump, pump, hose,
              or winterization-related concerns
            </li>

            <li>
              ✅ Water-supply, startup, or seasonal-use problems after winterization
              or extended periods without operation
            </li>

            <li>
              ✅ Cleaning decline caused by spray-arm obstruction, circulation wear,
              filtration buildup, or outdoor debris exposure
            </li>

            <li>
              ✅ Leakage, corrosion, moisture, or cabinet-protection concerns in an
              outdoor installation
            </li>

            <li>
              ✅ Door, latch, hinge, toe-kick, or surrounding weather-tight cabinetry
              alignment problems
            </li>

            <li>
              ✅ Legacy parts-sourcing challenges because Kalamazoo outdoor
              dishwashers are no longer sold
            </li>
          </ul>

          <h3>
            How We Fix These Kalamazoo Outdoor Dishwasher Issues
          </h3>

          <p>
            We inspect the data label, filter, sump, drain pump, hoses, water
            supply, winterization and startup functions where applicable,
            circulation system, spray arms, door hardware, cabinet integration,
            corrosion exposure, electrical connections, controls, and surrounding
            outdoor-kitchen conditions. We confirm parts availability and explain
            the practical repair path for the specific legacy Kalamazoo outdoor
            dishwasher.
          </p>
        </>
      )
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;

      setIsMobile(mobile);
      setActiveTab(mobile ? null : items[0].id);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile && activeTab) {
      const index = items.findIndex((item) => item.id === activeTab);

      if (itemRefs.current[index]) {
        const topOffset = 150;

        const elementTop =
          itemRefs.current[index].getBoundingClientRect().top +
          window.pageYOffset;

        window.scrollTo({
          top: elementTop - topOffset,
          behavior: "smooth"
        });
      }
    }
  }, [activeTab, isMobile]);

  return (
    <div
      className="tabs-container"
      ref={containerRef}
    >
      {!isMobile ? (
        <div className="tabs-layout">
          <div className="tabs-sidebar">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`tabs-title ${
                  activeTab === item.id ? "active" : ""
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="tabs-content">
            {items.map((item) => (
              <div
                key={item.id}
                className={`tab-panel ${
                  activeTab === item.id ? "active-tab" : ""
                }`}
              >
                <h2>
                  {item.heading}
                </h2>

                <div className="tab-body-float">
                  {item.img && (
                    <img
                      width="360"
                      height="360"
                      src={item.img}
                      alt={item.alt || item.title}
                      className="image-float"
                      loading="lazy"
                    />
                  )}

                  <div>
                    {item.description}
                  </div>
                </div>

                <a href="/book/">
                  <button className="tabs-button">
                    Book
                  </button>
                </a>

                <a href="tel:4244997788">
                  <button className="tabs-button">
                    Call: (424) 499-7788
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="accordion-item"
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div
                onClick={() =>
                  setActiveTab((prev) =>
                    prev === item.id ? null : item.id
                  )
                }
                className="accordion-header"
              >
                {item.title}

                <span className="accordion-icon">
                  {activeTab === item.id ? "−" : "+"}
                </span>
              </div>

              {activeTab === item.id && (
                <div className="accordion-content">
                  <h2>
                    {item.heading}
                  </h2>

                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.alt || item.title}
                      className="image-float"
                      loading="lazy"
                    />
                  )}

                  <div>
                    {item.description}
                  </div>

                  <a href="/book/">
                    <button className="tabs-button">
                      Book
                    </button>
                  </a>

                  <a href="tel:4244997788">
                    <button className="tabs-button">
                      Call: (424) 499-7788
                    </button>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
