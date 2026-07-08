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
    // HIGH-END
    {
          id: "asko-refrigerator-repair",
          title: "ASKO Refrigerator Repair",
          heading: "ASKO Refrigerator Repair",
          alt: "ASKO refrigerator repair technician servicing Scandinavian refrigeration",
          description: (
            <>
              <p>
                Our <strong>ASKO refrigerator repair</strong> service covers ASKO refrigeration, built-in refrigerators, fridge-freezers, wine cabinets, and Scandinavian cooling products where installed. ASKO refrigeration is more common in global and European markets than in many U.S. kitchens, so accurate model verification and parts availability are a major part of the service process.
              </p>
    
              <h3>ASKO Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Refrigerator compartment warming because of fan failure, sensor drift, control issue, compressor problem, or restricted airflow.</li>
                <li>Freezer icing, temperature alarms, or water leakage caused by defrost failure, drain issues, gasket wear, or evaporator fan problems.</li>
                <li>Wine cabinet not holding temperature because of fan, thermistor, compressor cycling, door seal, or ventilation problems.</li>
                <li>Built-in unit running hot due to cabinet ventilation problems or condenser airflow restriction.</li>
                <li>Imported or less common ASKO refrigeration parts requiring careful compatibility checks.</li>
              </ul>
    
              <h3>Technician Approach for ASKO</h3>
              <p>
                We check ASKO refrigerators by measuring temperatures, inspecting evaporator frost, testing fans and sensors, verifying condenser airflow, evaluating defrost and drain function, and confirming door sealing. Because ASKO refrigeration can vary by market, we verify the exact model before ordering parts.
              </p>
            </>
          )
        },
    {
          id: "bosch-refrigerator-repair",
          title: "Bosch Refrigerator Repair",
          heading: "Bosch Refrigerator Repair",
          alt: "Bosch refrigerator repair technician servicing an 800 Series refrigerator",
          description: (
            <>
              <p>
                Our <strong>Bosch refrigerator repair</strong> service covers Bosch French-door refrigerators, 800 Series refrigerators, Benchmark refrigeration, built-in refrigerators, bottom-freezer units, wine coolers, and Refreshment Center models. Bosch refrigeration often includes VitaFresh storage, MultiAirFlow, dual compressors and evaporators on some models, QuickIce Pro, UltraClarityPro filtration, Home Connect, and specialized beverage drawers.
              </p>
    
              <h3>Bosch Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Fresh food section not holding temperature because of fan, damper, sensor, control, or MultiAirFlow restriction.</li>
                <li>QuickIce Pro or ice maker not keeping up due to water pressure, filter restriction, fill tube freeze-up, freezer temperature, or ice maker module issues.</li>
                <li>VitaFresh drawers freezing or drying food because of airflow imbalance, damper operation, temperature sensor, or control calibration.</li>
                <li>Refreshment Center drawer not cooling drinks or wine correctly because of zone sensor, airflow, fan, or drawer seal problems.</li>
                <li>Home Connect, display, alarm, or control issues that require electronic testing before major component replacement.</li>
              </ul>
    
              <h3>Technician Approach for Bosch</h3>
              <p>
                We diagnose Bosch refrigerators by checking actual temperatures, airflow through the MultiAirFlow system, evaporator frost pattern, sensors, fans, dampers, ice maker output, water pressure, filter condition, and Home Connect or display faults. For Refreshment Center models, we test the specialty drawer separately because it has its own temperature expectations.
              </p>
            </>
          )
        },
    {
          id: "jennair-refrigerator-repair",
          title: "JennAir Refrigerator Repair",
          heading: "JennAir Refrigerator Repair",
          alt: "JennAir refrigerator repair technician servicing a column refrigerator",
          description: (
            <>
              <p>
                We provide <strong>JennAir refrigerator repair</strong> for RISE and NOIR column refrigerators, column freezers, built-in refrigerators, freestanding refrigerators, undercounter refrigeration, wine cellars, beverage centers, and panel-ready installations. JennAir refrigeration is design-heavy and often uses articulating hinges, slim reveals, precision temperature control, connected electronics, and high-end panel integration.
              </p>
    
              <h3>JennAir Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Column refrigerator warming or overcooling because of thermistor drift, fan failure, control issues, or restricted condenser airflow.</li>
                <li>Freezer column frost buildup, temperature alarms, or ice maker trouble due to defrost, gasket, water valve, fill tube, or fan issues.</li>
                <li>Panel-ready doors not sealing correctly because of hinge adjustment, cabinet reveal, panel weight, or gasket compression problems.</li>
                <li>Wine cellar or beverage center not holding temperature zones due to fan, sensor, compressor cycling, or glass-door heat load.</li>
                <li>Connected control, display, lighting, or door alarm issues that need electronic and mechanical checks together.</li>
              </ul>
    
              <h3>Technician Approach for JennAir</h3>
              <p>
                We inspect JennAir refrigeration as both a cooling appliance and a built-in design system. We check evaporator performance, fans, thermistors, defrost components, controls, ice and water systems, condenser airflow, door switches, hinges, panels, and reveals. On RISE and NOIR models, we protect specialty finishes and handles during access.
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
