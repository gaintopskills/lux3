// SEO-optimized Tabs component for brand-specific dryer repair services
// Includes only dryer-capable brands from the Luxury Appliance Repair menu.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "miele-dryer-repair",
      title: "Miele Dryer Repair",
      heading: "Miele Dryer Repair",
      img: "/dryer-repair/miele-dryer-repair.webp",
      alt: "Miele dryer repair technician servicing a premium Miele T1 heat-pump dryer",
      description: (
        <>
          <p>
            We provide <strong>Miele dryer repair</strong> for T1 heat-pump
            dryers, compact stacked laundry systems, EcoDry models, PerfectDry
            models, FragranceDos-equipped dryers, SteamFinish models,
            Miele@home-connected dryers, and supported legacy Miele laundry
            appliances. Miele T1 dryers reuse warm air through a heat-pump
            system instead of relying on a conventional exterior dryer vent, so
            proper diagnosis requires careful attention to filters, airflow,
            condensate drainage, moisture sensing, and model-specific
            electronics.
          </p>

          <h3>Miele Dryer Issues Our Techs See Most Frequently</h3>

          <ul>
            <li>
              ✅ Dryer running longer than expected because lint filters, plinth
              filters, or internal airflow paths need service
            </li>

            <li>
              ✅ Laundry remaining damp because of moisture-sensor, airflow, or
              heat-pump performance problems
            </li>

            <li>
              ✅ Filter, condensate-container, drainage, or maintenance warnings
              interrupting the drying cycle
            </li>

            <li>
              ✅ Drum not turning properly because of belt, motor, pulley, or
              support-component wear
            </li>

            <li>
              ✅ Door-latch, temperature-sensor, control-panel, or
              Miele@home-related concerns
            </li>

            <li>
              ✅ Compact stacked installations where access and ventilation
              clearances need to be evaluated carefully
            </li>
          </ul>

          <h3>How We Fix These Miele Dryer Issues</h3>

          <p>
            We inspect the lint-filter system, plinth filter, heat-exchanger
            area, condensate container or direct-drain path, pump, moisture
            sensors, temperature sensors, drum drive, belt, motor, door latch,
            controls, and installation clearances. We confirm the exact Miele
            dryer model before recommending cleaning, adjustment, or component
            replacement.
          </p>
        </>
      )
    },
    {
      id: "asko-dryer-repair",
      title: "ASKO Dryer Repair",
      heading: "ASKO Dryer Repair",
      /* img: "/dryer-repair/asko-dryer-repair.webp", */
      alt: "ASKO dryer repair technician servicing a premium Scandinavian heat-pump tumble dryer",
      description: (
        <>
          <p>
            Our <strong>ASKO dryer repair</strong> service covers ASKO
            heat-pump tumble dryers, 3-Series dryers, 5-Series dryers, 7-Series
            dryers, compact laundry installations, Butterfly Drying models,
            Bundle Guard-equipped dryers, One Motion lint-filter models, stacked
            laundry systems, and supported legacy ASKO dryers. ASKO dryers are
            designed for gentle fabric care, but restricted airflow, lint
            buildup, drainage problems, or sensor faults can still reduce
            drying performance.
          </p>

          <h3>ASKO Dryer Issues Our Techs See Most Frequently</h3>

          <ul>
            <li>
              ✅ Heat-pump dryer taking too long to dry because filters or
              internal airflow paths need service
            </li>

            <li>
              ✅ One Motion lint filter, lower filter, condenser area, or
              internal airflow system requiring inspection
            </li>

            <li>
              ✅ Condensate tank, drain hose, pump, or water-management problem
              interrupting the program
            </li>

            <li>
              ✅ Drum turning inconsistently because of belt, motor, pulley, or
              support-component wear
            </li>

            <li>
              ✅ Moisture-sensor or temperature-sensor problems causing damp
              laundry, extended cycles, or over-drying
            </li>

            <li>
              ✅ Door, display, control, Bundle Guard, or stacked-installation
              issues affecting normal operation
            </li>
          </ul>

          <h3>How We Fix These ASKO Dryer Issues</h3>

          <p>
            We inspect the One Motion lint filter, lower filter, condenser and
            heat-pump airflow path, drainage system, condensate pump, tank,
            hoses, drum drive, belt, motor, moisture sensors, temperature
            sensors, door switch, controls, and installation clearances. We
            match the repair path to the exact ASKO dryer platform.
          </p>
        </>
      )
    },
    {
      id: "bosch-dryer-repair",
      title: "Bosch Dryer Repair",
      heading: "Bosch Dryer Repair",
      /* img: "/dryer-repair/bosch-dryer-repair.webp", */
      alt: "Bosch dryer repair technician servicing a compact Bosch heat-pump dryer",
      description: (
        <>
          <p>
            We provide <strong>Bosch dryer repair</strong> for 24-inch compact
            dryers, 300 Series condensation dryers, 500 Series heat-pump dryers,
            800 Series heat-pump dryers, Home Connect models, Steam Restore
            models, stacked laundry pairs, and undercounter installations.
            Bosch compact dryers use different drying technologies depending on
            the series, so accurate service requires careful inspection of
            airflow, condensate drainage, filters, sensors, and electronic
            controls.
          </p>

          <h3>Bosch Dryer Issues Our Techs See Most Frequently</h3>

          <ul>
            <li>
              ✅ Compact dryer taking too long to dry or leaving clothing damp
              after the cycle
            </li>

            <li>
              ✅ Lint filter, condenser, heat-pump airflow path, or maintenance
              warning requiring attention
            </li>

            <li>
              ✅ Condensate pump, drain hose, water tank, or drainage issue
              stopping the dryer
            </li>

            <li>
              ✅ Moisture-sensor or temperature-sensor fault affecting cycle
              length
            </li>

            <li>
              ✅ Drum not rotating because of belt, motor, pulley, or
              support-component wear
            </li>

            <li>
              ✅ Home Connect, Smart Dry, Steam Restore, display, door-switch, or
              control-board concerns
            </li>
          </ul>

          <h3>How We Fix These Bosch Dryer Issues</h3>

          <p>
            We identify whether the Bosch dryer is a condensation or heat-pump
            model, then inspect the lint-filter system, condenser, heat-pump
            airflow areas, condensate pump, tank, drain hose, moisture sensors,
            temperature sensors, drum drive, belt, motor, door switch, wiring,
            electronic controls, and the surrounding compact installation.
          </p>
        </>
      )
    },
    {
      id: "fisher-paykel-dryer-repair",
      title: "Fisher & Paykel Dryer Repair",
      heading: "Fisher & Paykel Dryer Repair",
      /* img: "/dryer-repair/fisher-paykel-dryer-repair.webp", */
      alt: "Fisher and Paykel dryer repair technician servicing a premium condensing dryer",
      description: (
        <>
          <p>
            Our <strong>Fisher & Paykel dryer repair</strong> service covers
            condensing dryers, heat-pump dryers, vented models where applicable,
            compact laundry systems, Auto Sensing models, stacked
            installations, SmartTouch-equipped dryers, and supported legacy
            Fisher & Paykel laundry appliances. Fisher & Paykel dryer diagnosis
            depends on the platform because condensing, heat-pump, and vented
            dryers manage airflow and moisture differently.
          </p>

          <h3>Fisher & Paykel Dryer Issues Our Techs See Most Frequently</h3>

          <ul>
            <li>
              ✅ Dryer taking too long to dry because of lint-filter,
              condenser-filter, airflow, or venting problems
            </li>

            <li>
              ✅ Condensing dryer displaying water-tank, drain-hose, or
              condensate-pump concerns
            </li>

            <li>
              ✅ Heat-pump dryer not reaching expected drying performance
            </li>

            <li>
              ✅ Auto Sensing or moisture-sensor problems causing damp laundry
              or premature cycle completion
            </li>

            <li>
              ✅ Drum-drive noise caused by belt, pulley, roller, bearing, or
              motor wear
            </li>

            <li>
              ✅ Door-switch, temperature-sensor, SmartTouch control, or
              stacked-installation access issues
            </li>
          </ul>

          <h3>How We Fix These Fisher & Paykel Dryer Issues</h3>

          <p>
            We identify the Fisher & Paykel dryer type first, then inspect lint
            filters, condenser filters, venting where applicable, condensate
            tank, drain hose, pump, heat-pump airflow path, moisture sensors,
            temperature sensors, drum drive, belt, motor, door switch, wiring,
            controls, and installation clearances.
          </p>
        </>
      )
    },
    {
      id: "smeg-dryer-repair",
      title: "Smeg Dryer Repair",
      heading: "Smeg Dryer Repair",
      /* img: "/dryer-repair/smeg-dryer-repair.webp", */
      alt: "Smeg dryer repair technician servicing a premium Italian heat-pump tumble dryer",
      description: (
        <>
          <p>
            We provide <strong>Smeg dryer repair</strong> for freestanding
            tumble dryers, heat-pump condenser dryers, inverter-motor models,
            compact laundry installations, Easy Iron models, stackable Smeg
            laundry pairs, and supported legacy Smeg dryers. Smeg dryers combine
            Italian styling with heat-pump condensation technology, electronic
            controls, condensate handling, multiple drying programs, and
            fabric-care features that require model-specific diagnosis.
          </p>

          <h3>Smeg Dryer Issues Our Techs See Most Frequently</h3>

          <ul>
            <li>
              ✅ Heat-pump dryer taking too long to dry because the combined
              filter, condenser, or airflow path needs service
            </li>

            <li>
              ✅ Clean-filter warning or condensate-container-full indicator
              interrupting the drying cycle
            </li>

            <li>
              ✅ Condenser drain hose, water container, or condensate-handling
              problem affecting performance
            </li>

            <li>
              ✅ Laundry remaining damp because of drying-level,
              temperature-control, or heat-pump performance concerns
            </li>

            <li>
              ✅ Drum rotation, inverter motor, belt, pulley, or
              support-component issue causing noise or inconsistent operation
            </li>

            <li>
              ✅ Door, reversible-hinge, LED display, electronic-control, or
              stacked-installation concerns
            </li>
          </ul>

          <h3>How We Fix These Smeg Dryer Issues</h3>

          <p>
            We inspect the combined filter, condenser, heat-pump airflow path,
            drain hose, condensate container, inverter motor, drum rotation,
            belt, pulley, support components, temperature controls, drying-level
            system, door alignment, reversible hinge, LED display, wiring,
            electronic controls, and installation clearances.
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
    <div className="tabs-container" ref={containerRef}>
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
                <h2>{item.heading}</h2>

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

                  <div>{item.description}</div>
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
                  <h2>{item.heading}</h2>

                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.alt || item.title}
                      className="image-float"
                      loading="lazy"
                    />
                  )}

                  <div>{item.description}</div>

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