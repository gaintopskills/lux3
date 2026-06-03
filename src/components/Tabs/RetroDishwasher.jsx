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
      id: "big-chill-dishwasher-repair",
      title: "Big Chill Dishwasher Repair",
      heading: "Big Chill Dishwasher Repair",
      /* img: "/dishwasher-repair/big-chill-dishwasher-repair.webp", */
      alt: "Big Chill dishwasher repair technician servicing a colorful retro dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Big Chill dishwasher repair</strong> for 24-inch
            Retro, Classic, and Pro dishwashers, color-matched installations,
            custom-color configurations, stainless-steel interiors, and retro
            kitchens designed around distinctive chrome or professional-style
            details. Big Chill service should restore wash and drying performance
            without overlooking the visible door finish, hardware, and alignment
            that make the appliance part of the kitchen design.
          </p>

          <h3>
            Big Chill Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because the filter, sump, drain pump,
              disposer connection, or hose needs attention
            </li>

            <li>
              ✅ Spray-arm, turbidity-sensor, circulation, or filtration concerns
              causing residue or incomplete cleaning
            </li>

            <li>
              ✅ Fan-assisted drying, heater, airflow, rinse-aid, or extra-dry
              concerns leaving dishes damp
            </li>

            <li>
              ✅ Three-rack, basket, glide, latch, hinge, or door-alignment problems
            </li>

            <li>
              ✅ Custom-color door, chrome hardware, toe-kick, or surrounding-cabinet
              fit concerns
            </li>

            <li>
              ✅ Control-panel, sensor, wiring, or cycle-selection issues
            </li>
          </ul>

          <h3>
            How We Fix These Big Chill Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, disposer connection
            where applicable, inlet path, circulation system, spray arms, turbidity
            sensor where equipped, drying components, racks, glides, hinges, latch,
            visible door hardware, panel alignment, sensors, wiring, and controls.
            We match service steps to the specific Big Chill Retro, Classic, or Pro
            dishwasher configuration.
          </p>
        </>
      )
    },
    {
      id: "elmira-stove-works-dishwasher-repair",
      title: "Elmira Stove Works Dishwasher Repair",
      heading: "Elmira Stove Works Dishwasher Repair",
      /* img: "/dishwasher-repair/elmira-stove-works-dishwasher-repair.webp", */
      alt: "Elmira Stove Works dishwasher repair technician servicing a Northstar retro dishwasher",
      description: (
        <>
          <p>
            Our <strong>Elmira Stove Works dishwasher repair</strong> service covers
            Northstar 24-inch complete dishwashers and compatible fully integrated
            panel-ready dishwashers fitted with Elmira Northstar panels. Elmira
            dishwasher service requires a careful distinction between the visible
            retro-style door treatment and the internal dishwasher platform,
            especially when the kitchen uses a decorative panel installed over a
            compatible third-party machine.
          </p>

          <h3>
            Elmira Stove Works Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Northstar dishwasher not draining because of filter, sump,
              drain-pump, hose, or plumbing restrictions
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm blockage, circulation decline,
              filtration buildup, or inlet-flow concerns
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse aid, airflow, or cycle
              configuration needs review
            </li>

            <li>
              ✅ Retro panel, handle, hinge, latch, toe-kick, or fully integrated
              door-alignment problems
            </li>

            <li>
              ✅ Rack, glide, dispenser, sensor, wiring, or control-panel concerns
            </li>

            <li>
              ✅ Parts-identification challenges when an Elmira panel is installed
              over a compatible panel-ready dishwasher from another manufacturer
            </li>
          </ul>

          <h3>
            How We Fix These Elmira Stove Works Dishwasher Issues
          </h3>

          <p>
            We inspect the data label, visible Northstar panel, handle, hinges,
            latch, cabinet clearances, filter, sump, drain pump, hoses, inlet path,
            circulation system, spray arms, drying components, racks, dispensers,
            sensors, wiring, and controls. We identify whether the installation is
            an Elmira Northstar complete dishwasher or an Elmira panel applied to
            another panel-ready platform before ordering parts.
          </p>
        </>
      )
    },
    {
      id: "smeg-dishwasher-repair",
      title: "Smeg Dishwasher Repair",
      heading: "Smeg Dishwasher Repair",
      /* img: "/dishwasher-repair/smeg-dishwasher-repair.webp", */
      alt: "Smeg dishwasher repair technician servicing a fully integrated Italian dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Smeg dishwasher repair</strong> for fully
            integrated, undercounter, panel-ready, pre-finished, retro-style,
            ADA-height, 18-inch, and 24-inch dishwashers. Supported Smeg
            platforms may include Orbital Wash systems, Shuttle Wash systems on
            select narrow units, Aquatest turbidity sensors, AquaStop flood
            protection, Dry Assist automatic door opening, water softeners,
            Flexi Fit hinges, and ActiveLight floor indicators.
          </p>

          <h3>
            Smeg Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Orbital Wash or Shuttle Wash spray-system concerns causing
              incomplete cleaning coverage
            </li>

            <li>
              ✅ Aquatest sensor, water-intake, filtration, or circulation
              issues affecting automatic wash performance
            </li>

            <li>
              ✅ AquaStop or leak-detection interruptions preventing the
              dishwasher from running normally
            </li>

            <li>
              ✅ Dry Assist automatic-door-opening, rinse-aid, heating, or
              drying concerns
            </li>

            <li>
              ✅ Flexi Fit hinge, custom-panel, rack, latch, or ActiveLight
              indicator issues
            </li>

            <li>
              ✅ Drain-pump, sump, hose, water-softener, wiring, or
              electronic-control faults
            </li>
          </ul>

          <h3>
            How We Fix These Smeg Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, inlet path,
            circulation pump, Orbital or Shuttle wash components, spray arms,
            Aquatest sensor, AquaStop protection, Dry Assist door-opening
            function, water softener, hinges, racks, latch, panel integration,
            ActiveLight indicator, wiring, and controls.
          </p>
        </>
      )
    },
    {
      id: "heartland-dishwasher-repair",
      title: "Heartland Dishwasher Repair",
      heading: "Heartland Dishwasher Repair",
      /* img: "/dishwasher-repair/heartland-dishwasher-repair.webp", */
      alt: "Heartland dishwasher repair technician servicing a discontinued retro-style dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Heartland dishwasher repair</strong> for legacy
            Heartland dishwashers installed in nostalgic and heritage-inspired
            kitchens. Heartland discontinued appliance manufacturing in 2019, but
            existing dishwashers may remain valuable because their color, trim, and
            retro appearance coordinate with the full kitchen suite. Service should
            begin with the model number, serial information, age, visible finish,
            and realistic review of compatible parts availability.
          </p>

          <h3>
            Heartland Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Legacy dishwasher not draining because the filter, sump, drain pump,
              hose, or disposer connection needs inspection
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm blockage, circulation decline,
              water-intake issues, or filtration buildup
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse aid, airflow, or cycle
              settings need review
            </li>

            <li>
              ✅ Retro-style door, hinge, latch, gasket, handle, or alignment
              concerns affecting normal closure
            </li>

            <li>
              ✅ Control-panel, timer, wiring, sensor, or electrical faults on older
              platforms
            </li>

            <li>
              ✅ Parts-sourcing and compatibility challenges due to discontinued
              Heartland appliance manufacturing
            </li>
          </ul>

          <h3>
            How We Fix These Heartland Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, disposer connection
            where present, inlet path, circulation system, spray arms, heating and
            drying components, racks, hinges, latch, gasket, visible trim, controls,
            sensors, and wiring. We verify the complete Heartland model and evaluate
            compatible parts availability before recommending a repair path for a
            legacy dishwasher.
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
