// SEO-optimized Tabs component for brand-specific refrigerator and refrigeration repair services
// Ordered by the provided brand taxonomy; cooking-only and dishwasher-only brands are intentionally omitted from refrigerator tabs.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    // RETRO
    {
          id: "big-chill-refrigerator-repair",
          title: "Big Chill Refrigerator Repair",
          heading: "Big Chill Refrigerator Repair",
          alt: "Big Chill refrigerator repair technician servicing a retro refrigerator",
          description: (
            <>
              <p>
                We provide <strong>Big Chill refrigerator repair</strong> for Original Retro refrigerators, Studio fridges, Slim fridges, Retropolitan fridges, Classic refrigerators, Pro fridges, and color-customized refrigeration. Big Chill combines vintage-inspired exterior design with modern refrigeration components, so service requires attention to the cooling system and the finish at the same time.
              </p>
    
              <h3>Big Chill Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Fresh food section too warm because of thermostat, evaporator fan, condenser airflow, compressor, or sealed-system issues.</li>
                <li>Freezer frost, weak freezing, or water leakage from gasket leaks, defrost drain problems, door alignment, or evaporator icing.</li>
                <li>Compressor running constantly because the condenser is dirty, the door seal is weak, or the refrigerator is installed with poor clearance.</li>
                <li>Interior temperature swings caused by control calibration, air leaks, fan problems, or overloaded shelves blocking airflow.</li>
                <li>Custom colors, chrome trim, pivoting handles, and vintage-style panels needing careful protection during repair.</li>
              </ul>
    
              <h3>Technician Approach for Big Chill</h3>
              <p>
                We protect the finish first, then diagnose the refrigeration system. We inspect gaskets, hinges, controls, condenser airflow, compressor operation, evaporator frost pattern, drain path, and fan performance. Because Big Chill models vary by collection, we verify the exact model before sourcing replacement parts.
              </p>
            </>
          )
        },
    {
          id: "elmira-stove-works-refrigerator-repair",
          title: "Elmira Stove Works Refrigerator Repair",
          heading: "Elmira Stove Works Refrigerator Repair",
          alt: "Elmira Stove Works refrigerator repair technician servicing a Northstar retro refrigerator",
          description: (
            <>
              <p>
                Our <strong>Elmira Stove Works refrigerator repair</strong> service covers Northstar refrigerators, Heritage refrigerators, bottom-mount refrigerators, French-door counter-depth refrigerators, custom-color retro refrigerators, and vintage-inspired refrigeration. These refrigerators are design pieces as well as appliances, so the repair must preserve trim, panels, handles, and color while restoring cooling performance.
              </p>
    
              <h3>Elmira Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Bottom-mount refrigerator warming because of fan, thermostat, sensor, compressor, condenser airflow, or sealed-system issues.</li>
                <li>Freezer drawers icing, leaking, or not sealing due to gasket problems, defrost drain issues, drawer alignment, or evaporator frost buildup.</li>
                <li>French-door models with ice maker or water dispenser problems from valve, filter, fill tube, temperature, or dispenser control concerns.</li>
                <li>Temperature swings caused by door seal wear, control calibration, fan weakness, or poor cabinet clearance.</li>
                <li>Custom RAL colors, chrome accents, period-style handles, and specialty trim needing careful handling during service.</li>
              </ul>
    
              <h3>Technician Approach for Elmira</h3>
              <p>
                We inspect the cooling system while protecting the retro appearance. We test the condenser, evaporator, fans, controls, sensors, drain, door gaskets, drawer seals, and ice/water components. When trim or panels must be removed, we document the layout first so the appliance goes back together cleanly.
              </p>
            </>
          )
        },
    {
          id: "smeg-refrigerator-repair",
          title: "Smeg Refrigerator Repair",
          heading: "Smeg Refrigerator Repair",
          alt: "Smeg refrigerator repair technician servicing a retro-style refrigerator",
          description: (
            <>
              <p>
                Our <strong>Smeg refrigerator repair</strong> service covers FAB retro refrigerators, freestanding refrigerators, built-in refrigerators, compact refrigerators, wine coolers, and designer refrigeration. Smeg refrigerators are often chosen for their style, color, and Italian design, so the repair must protect the exterior while diagnosing cooling, thermostat, fan, gasket, and defrost issues.
              </p>
    
              <h3>Smeg Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Retro refrigerator not cooling properly because of thermostat failure, compressor issue, condenser restriction, evaporator problem, or door gasket leak.</li>
                <li>Excess frost in freezer compartments caused by gasket wear, door alignment, defrost issues, or frequent warm-air intrusion.</li>
                <li>Food freezing in the refrigerator section because of thermostat calibration, sensor problems, airflow imbalance, or control issues.</li>
                <li>Wine cooler temperature drift due to fan, compressor, thermistor, door seal, or glass-door heat load.</li>
                <li>Painted panels, chrome handles, decorative hinges, and retro trim needing careful protection during repair.</li>
              </ul>
    
              <h3>Technician Approach for Smeg</h3>
              <p>
                We test Smeg refrigeration mechanically and visually. We check thermostat or sensor response, compressor operation, condenser airflow, evaporator frost, fan behavior, door gasket contact, hinge alignment, and defrost operation. On retro models, we handle panels and trim carefully because cosmetic damage can be as frustrating as the cooling problem.
              </p>
            </>
          )
        },
    {
          id: "heartland-refrigerator-repair",
          title: "Heartland Refrigerator Repair",
          heading: "Heartland Legacy Refrigerator Repair",
          alt: "Heartland refrigerator repair technician servicing a legacy classic refrigerator",
          description: (
            <>
              <p>
                We provide <strong>Heartland refrigerator repair</strong> for legacy Heartland Classic refrigerators, French-door refrigerators, retro-style refrigeration, and older Heartland kitchen suites where repair still makes sense. Heartland appliances are no longer treated like a current mass-market platform, so service requires careful model identification, parts research, and honest repair planning.
              </p>
    
              <h3>Heartland Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Refrigerator not cooling because of thermostat, fan, compressor, relay, condenser airflow, or sealed-system decline.</li>
                <li>Freezer not freezing or building frost because of gasket wear, defrost issues, evaporator icing, or door alignment problems.</li>
                <li>Water leakage from clogged drains, door seal failure, defrost issues, or ice maker fill problems where equipped.</li>
                <li>Parts availability challenges on older models, especially trim, panels, handles, gaskets, controls, and model-specific components.</li>
                <li>Retro panels and matching kitchen-suite appearance that homeowners often want to preserve rather than replace.</li>
              </ul>
    
              <h3>Technician Approach for Heartland</h3>
              <p>
                With Heartland, we diagnose first and discuss repair practicality second. We check the cooling system, controls, fans, gaskets, condenser, drain, and any ice/water components, then verify whether parts are available. If a refrigerator is built around another manufacturer platform with Heartland styling, we identify the underlying model before ordering parts.
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && activeTab) {
      const index = items.findIndex((item) => item.id === activeTab);
      if (itemRefs.current[index]) {
        const topOffset = 150;
        const elementTop = itemRefs.current[index].getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementTop - topOffset, behavior: "smooth" });
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
                className={`tabs-title ${activeTab === item.id ? "active" : ""}`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="tabs-content">
            {items.map((item) => (
              <div
                key={item.id}
                className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}
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
                  <button className="tabs-button">Book</button>
                </a>
                <a href="tel:4244997788">
                  <button className="tabs-button">Call: (424) 499-7788</button>
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
                onClick={() => setActiveTab((prev) => (prev === item.id ? null : item.id))}
                className="accordion-header"
              >
                {item.title}
                <span className="accordion-icon">{activeTab === item.id ? "−" : "+"}</span>
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
                    <button className="tabs-button">Book</button>
                  </a>
                  <a href="tel:4244997788">
                    <button className="tabs-button">Call: (424) 499-7788</button>
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
