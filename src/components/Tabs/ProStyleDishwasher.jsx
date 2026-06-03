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
      id: "thor-dishwasher-repair",
      title: "THOR Dishwasher Repair",
      heading: "THOR Dishwasher Repair",
      /* img: "/dishwasher-repair/thor-dishwasher-repair.webp", */
      alt: "THOR dishwasher repair technician servicing a professional-style stainless-steel dishwasher",
      description: (
        <>
          <p>
            We provide <strong>THOR dishwasher repair</strong> for
            professional-style built-in dishwashers, 24-inch stainless-steel units,
            under-counter installations, adjustable-rack models, and supported
            Gordon Ramsay Series dishwashers. THOR dishwasher complaints often
            involve cleaning pressure, drainage, drying, rack movement, door
            closure, or controls, so each system should be tested rather than
            treating the symptom in isolation.
          </p>

          <h3>
            THOR Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Spray-jet, wash-arm, circulation, or filtration concerns reducing
              cleaning performance
            </li>

            <li>
              ✅ Dishwasher not draining because of sump debris, filter buildup,
              drain-pump wear, or hose restrictions
            </li>

            <li>
              ✅ Advanced-drying, heater, rinse-aid, or airflow concerns leaving
              dishes damp
            </li>

            <li>
              ✅ Adjustable-rack, glide, latch, hinge, or built-in alignment problems
            </li>

            <li>
              ✅ Water-inlet, leak, float, or door-switch concerns interrupting the
              wash cycle
            </li>

            <li>
              ✅ Control-panel, sensor, wiring, or model-specific electronic-control
              faults
            </li>
          </ul>

          <h3>
            How We Fix These THOR Dishwasher Issues
          </h3>

          <p>
            We inspect filtration, sump, drain pump, hoses, disposer connection
            where applicable, water inlet, circulation pump, spray jets, wash arms,
            drying components, racks, glides, hinges, latch, leak protection,
            sensors, wiring, and electronic controls. We verify the exact THOR
            model, including whether it is a standard professional-style or Gordon
            Ramsay Series dishwasher.
          </p>
        </>
      )
    },
    {
      id: "forno-dishwasher-repair",
      title: "Forno Dishwasher Repair",
      heading: "Forno Dishwasher Repair",
      /* img: "/dishwasher-repair/forno-dishwasher-repair.webp", */
      alt: "Forno dishwasher repair technician servicing a stainless-steel built-in dishwasher",
      description: (
        <>
          <p>
            Our <strong>Forno dishwasher repair</strong> service covers Forno
            built-in dishwashers, compact 18-inch installations, full-size 24-inch
            configurations, stainless-steel models, and supported residential
            dishwasher platforms. Forno service should account for space-saving
            installations, drainage routing, filtration, water intake, drying
            performance, door alignment, and model-specific parts.
          </p>

          <h3>
            Forno Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Compact or full-size dishwasher not draining because the filter,
              sump, drain pump, hose, or disposer connection needs service
            </li>

            <li>
              ✅ Poor cleaning related to spray-arm blockage, circulation decline,
              water-temperature, or filtration problems
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse-aid delivery, drying
              airflow, or cycle selection needs review
            </li>

            <li>
              ✅ Rack, basket, hinge, latch, or built-in cabinet-clearance problems
            </li>

            <li>
              ✅ Water-inlet, float, leak-protection, or door-switch interruptions
            </li>

            <li>
              ✅ Control-panel, sensor, wiring, or cycle-selection faults
            </li>
          </ul>

          <h3>
            How We Fix These Forno Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, disposer connection
            where present, inlet components, circulation system, spray arms, heating
            and drying components, rinse-aid delivery, racks, hinges, latch, cabinet
            clearances, leak protection, sensors, wiring, and controls. We confirm
            whether the Forno dishwasher is an 18-inch compact or full-size built-in
            model before selecting parts.
          </p>
        </>
      )
    },
    {
      id: "zline-dishwasher-repair",
      title: "ZLINE Dishwasher Repair",
      heading: "ZLINE Dishwasher Repair",
      /* img: "/dishwasher-repair/zline-dishwasher-repair.webp", */
      alt: "ZLINE dishwasher repair technician servicing a panel-ready Tallac dishwasher",
      description: (
        <>
          <p>
            We provide <strong>ZLINE dishwasher repair</strong> for built-in
            dishwashers, panel-ready installations, multiple size configurations,
            tall-tub models, and Tallac Series dishwashers with third-rack loading
            systems. ZLINE dishwashers are often installed to coordinate with custom
            cabinetry and designer finishes, so repair should address both internal
            performance and the fit of the visible door assembly.
          </p>

          <h3>
            ZLINE Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because of filter, sump, drain-pump, hose,
              or disposer-connection restrictions
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm obstruction, circulation decline,
              filtration buildup, or water-intake issues
            </li>

            <li>
              ✅ Tallac Series third-rack, loading, rack-glide, adjuster, or basket
              concerns
            </li>

            <li>
              ✅ Panel-ready door, hinge, latch, toe-kick, or installation-alignment
              problems
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse aid, airflow, or cycle
              configuration needs review
            </li>

            <li>
              ✅ Control-panel, sensor, wiring, leak-protection, or
              electronic-control faults
            </li>
          </ul>

          <h3>
            How We Fix These ZLINE Dishwasher Issues
          </h3>

          <p>
            We inspect the filters, sump, drain pump, hoses, disposer connection
            where present, inlet path, circulation pump, spray arms, heating and
            drying systems, racks, third-rack components, hinges, latch, custom
            panel, toe-kick clearances, leak protection, sensors, wiring, and
            controls. We match the repair to the exact ZLINE dishwasher size,
            series, and door configuration.
          </p>
        </>
      )
    },
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
