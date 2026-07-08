// SEO-optimized Tabs component for brand-specific refrigerator and refrigeration repair services
// Rewritten to include only brands from the provided list that actually offer, offered, or support refrigeration products.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
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
