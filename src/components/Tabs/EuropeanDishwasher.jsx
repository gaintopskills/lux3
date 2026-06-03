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
      id: "aga-dishwasher-repair",
      title: "AGA Dishwasher Repair",
      heading: "AGA Dishwasher Repair",
      /* img: "/dishwasher-repair/aga-dishwasher-repair.webp", */
      alt: "AGA dishwasher repair technician servicing a legacy AGA Mercury or Elise dishwasher",
      description: (
        <>
          <p>
            We provide <strong>AGA dishwasher repair</strong> for legacy AGA Legacy,
            Mercury, and Elise 24-inch built-in tall-tub dishwashers, including
            color-matched kitchen-suite installations and fully integrated control
            configurations. Many AGA dishwashers remain installed in distinctive
            luxury kitchens even when a particular model is no longer actively
            promoted, so accurate service begins with the complete model number,
            finish, serial information, and symptom.
          </p>

          <h3>
            AGA Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because the filter system, sump, drain pump,
              check valve, disposer connection, or hose needs service
            </li>

            <li>
              ✅ Reduced wash performance related to multi-level washing, three spray
              arms, circulation, water intake, or filtration concerns
            </li>

            <li>
              ✅ Smart-soil-sensor, cycle-selection, half-load, sanitize, or
              control-panel issues interrupting normal operation
            </li>

            <li>
              ✅ Dishes remaining damp because rinse aid, heating, airflow, or cycle
              configuration needs review
            </li>

            <li>
              ✅ Third-level rack, adjustable-rack, latch, hinge, color-matched
              door-panel, or installation-alignment problems
            </li>

            <li>
              ✅ Parts-identification challenges on older AGA Legacy, Mercury, or
              Elise dishwasher platforms
            </li>
          </ul>

          <h3>
            How We Fix These AGA Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, disposer connection,
            inlet path, circulation system, spray arms, filtration components,
            soil-sensing functions, heating and drying components, racks, hinges,
            latch, door panel, wiring, and controls. Because AGA dishwasher
            configurations changed across Legacy, Mercury, and Elise suites, we
            verify the exact model before recommending parts or repair steps.
          </p>
        </>
      )
    },
    {
      id: "bertazzoni-dishwasher-repair",
      title: "Bertazzoni Dishwasher Repair",
      heading: "Bertazzoni Dishwasher Repair",
      /* img: "/dishwasher-repair/bertazzoni-dishwasher-repair.webp", */
      alt: "Bertazzoni dishwasher repair technician servicing a panel-ready Italian dishwasher",
      description: (
        <>
          <p>
            Our <strong>Bertazzoni dishwasher repair</strong> service covers
            18-inch and 24-inch dishwashers, standard-tub and tall-tub models,
            stainless-steel and panel-ready installations, Professional Series,
            Master Series, and Heritage Series dishwashers. Depending on the
            model, Bertazzoni dishwashers may include three spray arms, three
            racks, DirectWash zones, concealed controls, adjustable middle
            racks, and custom panel integration.
          </p>

          <h3>
            Bertazzoni Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ DirectWash zone, spray-arm, circulation, or filtration
              problems reducing cleaning performance
            </li>

            <li>
              ✅ Dishwasher not draining because of sump debris, drain-pump,
              check-valve, or hose concerns
            </li>

            <li>
              ✅ Dishes not drying completely because of rinse-aid, heating,
              airflow, or cycle-setting issues
            </li>

            <li>
              ✅ Three-rack loading system, adjustable-middle-rack, hinge,
              latch, or panel-alignment concerns
            </li>

            <li>
              ✅ Water-inlet, leak-protection, sensor, or door-switch
              interruptions
            </li>

            <li>
              ✅ Concealed-control, wiring, display, or electronic-control
              faults
            </li>
          </ul>

          <h3>
            How We Fix These Bertazzoni Dishwasher Issues
          </h3>

          <p>
            We inspect filters, sump, drain pump, hoses, inlet components,
            circulation pump, three spray arms, DirectWash components where
            equipped, drying system, rinse-aid dispenser, racks, adjusters,
            hinges, latch, custom panel, sensors, wiring, and controls. We
            verify whether the dishwasher is 18-inch, standard-tub, or tall-tub
            before ordering parts.
          </p>
        </>
      )
    },
    {
      id: "fulgor-milano-dishwasher-repair",
      title: "Fulgor Milano Dishwasher Repair",
      heading: "Fulgor Milano Dishwasher Repair",
      /* img: "/dishwasher-repair/fulgor-milano-dishwasher-repair.webp", */
      alt: "Fulgor Milano dishwasher repair technician servicing an Italian panel-ready built-in dishwasher",
      description: (
        <>
          <p>
            Our <strong>Fulgor Milano dishwasher repair</strong> service covers
            24-inch stainless-steel and overlay built-in dishwashers, panel-ready
            installations, three-rack configurations, touch-control models, and
            newer integrated dishwashers with multiple wash cycles, internal LED
            lighting, and turbo-dry technology. Fulgor Milano dishwasher service
            should address cleaning, filtration, drainage, drying, rack movement,
            and custom-panel fit together.
          </p>

          <h3>
            Fulgor Milano Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Three-wash-arm, circulation, or triple-filtration concerns causing
              residue or uneven cleaning
            </li>

            <li>
              ✅ Dishwasher not draining because of sump debris, drain-pump wear,
              hose restrictions, or back-siphonage concerns
            </li>

            <li>
              ✅ Turbo-dry, super-active-drying, heating, rinse-aid, or airflow
              concerns leaving dishes damp
            </li>

            <li>
              ✅ Touch-control, wash-cycle-selection, sensor, wiring, or
              electronic-control problems
            </li>

            <li>
              ✅ Three-rack loading, adjustable-basket, hinge, latch, or custom-panel
              alignment issues
            </li>

            <li>
              ✅ Leakage-protection or overflow-related interruptions preventing
              normal operation
            </li>
          </ul>

          <h3>
            How We Fix These Fulgor Milano Dishwasher Issues
          </h3>

          <p>
            We inspect the filtration system, sump, drain pump, hoses, inlet path,
            circulation pump, three wash arms, heater, drying components, rinse-aid
            system, touch controls, sensors, racks, hinges, latch, leak protection,
            wiring, and installation alignment. We match the service plan to the
            exact Fulgor Milano stainless-steel or overlay dishwasher platform.
          </p>
        </>
      )
    },
    {
      id: "gaggenau-dishwasher-repair",
      title: "Gaggenau Dishwasher Repair",
      heading: "Gaggenau Dishwasher Repair",
      /* img: "/dishwasher-repair/gaggenau-dishwasher-repair.webp", */
      alt: "Gaggenau dishwasher repair technician servicing a luxury 400 Series panel-ready dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Gaggenau dishwasher repair</strong> for 200 Series
            and 400 Series 24-inch dishwashers, panel-ready installations,
            handle-free push-to-open configurations, flexible-hinge installations,
            TFT-display models, floor-projection systems, and 400 Series dishwashers
            with illuminated interiors and Zeolite drying technology. Gaggenau
            service should protect delicate glassware while identifying the actual
            wash, drainage, drying, door, or electronic fault.
          </p>

          <h3>
            Gaggenau Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Zeolite-drying, heating, airflow, or rinse-aid concerns leaving
              dishes or glassware damp
            </li>

            <li>
              ✅ Push-to-open door, flexible-hinge, latch, or custom-panel alignment
              problems in flush cabinetry
            </li>

            <li>
              ✅ Dishwasher not draining because the filter, sump, drain pump,
              non-return path, or hose needs service
            </li>

            <li>
              ✅ Spray-arm, circulation, extra-cleaning-area, inlet-flow, or
              filtration issues reducing wash performance
            </li>

            <li>
              ✅ TFT display, floor-projection, Home Connect, sensor, wiring, or
              electronic-control concerns
            </li>

            <li>
              ✅ Rack-rail, folding-tine, glassware-support, or loading-system issues
              affecting delicate items
            </li>
          </ul>

          <h3>
            How We Fix These Gaggenau Dishwasher Issues
          </h3>

          <p>
            We inspect the filter system, sump, drain pump, hoses, inlet path,
            circulation system, spray arms, Zeolite-related drying components where
            equipped, heater, rinse-aid delivery, push-to-open function, flexible
            hinges, custom-panel alignment, TFT controls, floor projection, racks,
            sensors, wiring, and electronic controls. We verify whether the unit is
            a Gaggenau 200 Series or 400 Series dishwasher before selecting parts.
          </p>
        </>
      )
    },
    {
      id: "ilve-dishwasher-repair",
      title: "ILVE Dishwasher Repair",
      heading: "ILVE Dishwasher Repair",
      /* img: "/dishwasher-repair/ilve-dishwasher-repair.webp", */
      alt: "ILVE dishwasher repair technician servicing a fully integrated Italian dishwasher",
      description: (
        <>
          <p>
            Our <strong>ILVE dishwasher repair</strong> service covers ILVE built-in
            dishwashers, fully integrated panel-ready installations, 24-inch
            configurations, ADA-compliant models where applicable, and supported
            legacy ILVE dishwashers. Because ILVE dishwasher platforms can vary by
            model and market, service should begin with the complete model number
            and a careful review of drainage, cleaning, drying, door fit, and
            electronic controls.
          </p>

          <h3>
            ILVE Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because of filter, sump, drain-pump,
              hose-routing, or check-valve concerns
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm obstruction, circulation decline,
              filtration buildup, or water-intake issues
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse aid, drying airflow, or
              cycle selection needs review
            </li>

            <li>
              ✅ Panel-ready door, hinge, latch, toe-kick, or ADA-height
              installation-clearance problems
            </li>

            <li>
              ✅ Leak-protection, inlet, float, sensor, or door-switch interruptions
            </li>

            <li>
              ✅ Integrated-control, wiring, display, or model-specific
              electronic-control faults
            </li>
          </ul>

          <h3>
            How We Fix These ILVE Dishwasher Issues
          </h3>

          <p>
            We inspect the filters, sump, drain pump, hoses, inlet system,
            circulation pump, spray arms, drying and heating components, rinse-aid
            dispenser, door hinges, latch, panel alignment, leak protection,
            sensors, wiring, and controls. We identify the exact ILVE dishwasher
            platform before ordering parts because current and legacy models may use
            different components.
          </p>
        </>
      )
    },
    {
      id: "miele-dishwasher-repair",
      title: "Miele Dishwasher Repair",
      heading: "Miele Dishwasher Repair",
      alt: "Miele dishwasher repair technician servicing a premium fully integrated dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Miele dishwasher repair</strong> for G 5000 and
            G 7000 dishwashers, fully integrated and panel-ready installations,
            ADA-height models, cutlery-tray models, QuickIntenseWash units, and
            premium G 7000 dishwashers with AutoDos, PowerDisk, and Miele@home
            connectivity. Miele dishwashers use model-specific wash, dosing,
            filtration, drainage, drying, and electronic systems, so diagnosis
            should begin with the complete model number and the exact symptom.
          </p>

          <h3>
            Miele Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ AutoDos or PowerDisk detergent-dispensing problems causing poor
              cleaning or dosing warnings
            </li>

            <li>
              ✅ Dishwasher not draining because of filter, drain-pump,
              non-return-valve, or hose restrictions
            </li>

            <li>
              ✅ Water-intake, circulation-pump, spray-arm, or pressure-related
              concerns affecting wash performance
            </li>

            <li>
              ✅ Door-latch, AutoOpen drying, leak-protection, or panel-alignment
              issues on integrated installations
            </li>

            <li>
              ✅ Cloudy glassware, residue, or incomplete drying related to
              rinse aid, water hardness, filtration, or cycle selection
            </li>

            <li>
              ✅ Miele@home, control-panel, sensor, wiring, or model-specific
              fault-code concerns
            </li>
          </ul>

          <h3>
            How We Fix These Miele Dishwasher Issues
          </h3>

          <p>
            We inspect the filter system, sump, non-return valve, drain pump,
            inlet path, circulation system, spray arms, detergent dispenser,
            AutoDos and PowerDisk components where equipped, water-hardness
            settings, rinse-aid delivery, door latch, leak protection, AutoOpen
            drying function, wiring, controls, and installation alignment. We
            match parts and service steps to the exact Miele G-series platform.
          </p>
        </>
      )
    },
    {
      id: "officine-gullo-dishwasher-repair",
      title: "Officine Gullo Dishwasher Repair",
      heading: "Officine Gullo Dishwasher Repair",
      /* img: "/dishwasher-repair/officine-gullo-dishwasher-repair.webp", */
      alt: "Officine Gullo dishwasher repair technician servicing an integrated professional dishwasher in a bespoke kitchen",
      description: (
        <>
          <p>
            We provide <strong>Officine Gullo dishwasher repair</strong> support for
            bespoke Officine Gullo kitchens with integrated residential or
            professional dishwashing equipment. Officine Gullo kitchens may
            incorporate dishwashers beneath custom washing areas, within handcrafted
            islands, or alongside restaurant-inspired appliances. Because the
            internal dishwasher platform may vary by project, the first step is to
            identify the actual equipment label, serial number, cabinet integration,
            and installation details.
          </p>

          <h3>
            Officine Gullo Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Integrated dishwasher not draining because the sump, pump, filter,
              hose routing, or plumbing connection needs inspection
            </li>

            <li>
              ✅ Professional-style dishwasher developing wash-pressure, temperature,
              filtration, or cycle-performance concerns
            </li>

            <li>
              ✅ Custom metal panel, toe-kick, hinge, latch, or cabinetry
              interference affecting door movement
            </li>

            <li>
              ✅ Leakage, moisture, or drainage issues that require protection of
              surrounding handcrafted cabinetry and finishes
            </li>

            <li>
              ✅ Control, sensor, wiring, or power-supply problems on the installed
              dishwasher platform
            </li>

            <li>
              ✅ Parts-identification challenges when the dishwasher is integrated
              into a tailor-made Officine Gullo project
            </li>
          </ul>

          <h3>
            How We Fix These Officine Gullo Dishwasher Issues
          </h3>

          <p>
            We inspect the visible installation, data label, cabinet integration,
            drainage route, plumbing connections, electrical supply, filter, sump,
            pump, circulation path, spray system, door hardware, controls, sensors,
            wiring, and surrounding finishes. We then match the repair approach to
            the actual dishwasher platform installed inside the Officine Gullo
            kitchen rather than assuming that every project uses the same internal
            machine.
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
