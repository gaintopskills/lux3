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
      id: "asko-dishwasher-repair",
      title: "ASKO Dishwasher Repair",
      heading: "ASKO Dishwasher Repair",
      /* img: "/dishwasher-repair/asko-dishwasher-repair.webp", */
      alt: "ASKO dishwasher repair technician servicing a Scandinavian panel-ready dishwasher",
      description: (
        <>
          <p>
            We provide <strong>ASKO dishwasher repair</strong> for
            stainless-steel and panel-ready built-in dishwashers, domestic and
            professional-style models, ADA-height installations, units with
            8 Steel construction, Super Cleaning System technology, Aqua Safe
            protection, and Turbo Combi Drying with fan-assisted moisture
            evacuation and automatic door opening. ASKO dishwasher service
            should account for filtration, drainage, drying airflow, door
            movement, and model-specific rack and control systems.
          </p>

          <h3>
            ASKO Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because the filter, sump, pump, or
              drain hose needs service
            </li>

            <li>
              ✅ Turbo Combi Drying or automatic-door-opening concerns leaving
              dishes wetter than expected
            </li>

            <li>
              ✅ Cleaning decline caused by blocked spray arms, circulation
              problems, filter buildup, or water-quality issues
            </li>

            <li>
              ✅ Aqua Safe, leak-detection, water-intake, or overfill-related
              interruptions
            </li>

            <li>
              ✅ Door-latch, panel-ready alignment, rack, hinge, or
              installation-clearance problems
            </li>

            <li>
              ✅ Display, sensor, wiring, or control faults interrupting the
              selected program
            </li>
          </ul>

          <h3>
            How We Fix These ASKO Dishwasher Issues
          </h3>

          <p>
            We inspect the filter system, sump, drain pump, inlet components,
            circulation pump, spray arms, Super Cleaning System-related wash
            path, Aqua Safe components, Turbo Combi Drying airflow and
            door-opening function, racks, hinges, latch, wiring, sensors, and
            electronic controls. We verify the exact ASKO model before
            recommending repair.
          </p>
        </>
      )
    },
    {
      id: "bosch-dishwasher-repair",
      title: "Bosch Dishwasher Repair",
      heading: "Bosch Dishwasher Repair",
      /* img: "/dishwasher-repair/bosch-dishwasher-repair.webp", */
      alt: "Bosch dishwasher repair technician servicing a quiet built-in dishwasher",
      description: (
        <>
          <p>
            Our <strong>Bosch dishwasher repair</strong> service covers 18-inch
            and 24-inch dishwashers, 100 Series, 300 Series, 500 Series,
            800 Series, Benchmark models, panel-ready units, Home Connect
            dishwashers, PrecisionWash models, CrystalDry models, PureDry
            systems, AutoAir models, RackMatic-equipped units, and
            AquaStop-protected installations. Bosch symptoms often overlap, so
            drainage, water intake, filtration, circulation, heating, drying,
            and leak protection should be tested together.
          </p>

          <h3>
            Bosch Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because of filter, sump, drain-pump,
              or drain-hose restrictions
            </li>

            <li>
              ✅ Dishes not cleaning properly because spray arms, circulation,
              inlet flow, or PrecisionWash-related systems need inspection
            </li>

            <li>
              ✅ CrystalDry, PureDry, or AutoAir drying concerns leaving
              plastics or dishes wetter than expected
            </li>

            <li>
              ✅ AquaStop, leak-detection, float, water-inlet, or door-switch
              issues preventing normal operation
            </li>

            <li>
              ✅ RackMatic, third-rack, latch, hinge, or panel-ready alignment
              problems
            </li>

            <li>
              ✅ Home Connect, control-panel, sensor, wiring, or fault-code
              concerns
            </li>
          </ul>

          <h3>
            How We Fix These Bosch Dishwasher Issues
          </h3>

          <p>
            We inspect the filter and sump, drain pump, hoses, inlet valve,
            float and AquaStop components, circulation pump, spray arms,
            heating and drying systems, AutoAir door-opening function where
            equipped, racks, latch, hinges, sensors, wiring, electronic
            controls, and surrounding installation. We use the Bosch model
            number to identify the correct platform and parts.
          </p>
        </>
      )
    },
    {
      id: "jennair-dishwasher-repair",
      title: "JennAir Dishwasher Repair",
      heading: "JennAir Dishwasher Repair",
      /* img: "/dishwasher-repair/jennair-dishwasher-repair.webp", */
      alt: "JennAir dishwasher repair technician servicing a panel-ready luxury dishwasher",
      description: (
        <>
          <p>
            We provide <strong>JennAir dishwasher repair</strong> for RISE,
            NOIR, pocket-handle, panel-ready, fully integrated, and flush-install
            dishwasher models. Depending on the model, JennAir dishwashers may
            include Precise Fit third racks, Waterlock leak detection, Door Open
            Dry, Precision Dry+, fan drying, steam options, and quiet integrated
            designs. Accurate service begins with identifying the exact
            dishwasher platform and separating cleaning, drying, drainage,
            leak-protection, and door-fit concerns.
          </p>

          <h3>
            JennAir Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishes remaining wet because Door Open Dry, Precision Dry+, fan
              drying, rinse aid, or heating needs inspection
            </li>

            <li>
              ✅ Waterlock leak-detection, inlet, float, drain, or hose problems
              interrupting the wash cycle
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm obstruction, filtration
              buildup, circulation, or water-temperature issues
            </li>

            <li>
              ✅ Precise Fit third-rack, middle-rack glide, latch, hinge, or
              panel-alignment concerns
            </li>

            <li>
              ✅ Door not closing correctly on flush-install or custom-panel
              installations
            </li>

            <li>
              ✅ Display, sensor-cycle, steam-option, wiring, or control-board
              problems
            </li>
          </ul>

          <h3>
            How We Fix These JennAir Dishwasher Issues
          </h3>

          <p>
            We inspect the sump, filter, drain system, inlet path, circulation
            system, spray arms, drying components, automatic door-opening
            function where equipped, Waterlock protection, racks and glides,
            hinges, latch, custom panel, sensors, wiring, and controls. We match
            the repair to the specific JennAir model and installation style.
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
