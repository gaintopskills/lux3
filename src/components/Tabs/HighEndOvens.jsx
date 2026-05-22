// SEO-optimized Tabs component for brand-specific oven repair services
// Based on your existing Tabs structure, but rewritten so each tab targets an oven-capable brand.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "asko-oven-repair",
      title: "ASKO Oven Repair",
      heading: "ASKO Oven Repair",
      /*img: "/oven-repair/asko-oven-repair.webp",*/
      alt: "ASKO oven repair technician servicing a European built-in oven",
      description: (
        <>
          <p>
            We provide <strong>ASKO oven repair</strong> for built-in ovens, pyrolytic ovens, multifunction ovens, combined steam ovens, compact microwave ovens, and European kitchen installations. ASKO ovens often require attention to flush installation, pyrolytic self-cleaning, steam systems, telescopic guides, and compact European layouts.
          </p>
  
          <h3>ASKO Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Pyrolytic self-clean may fail because of door lock, heat-limit, or control issues.</li>
            <li>Combined steam ovens may have fill, drain, pump, valve, or limescale-related problems.</li>
            <li>Compact microwave ovens may fail in mode switching, fan operation, or controls.</li>
            <li>Telescopic guides, rack supports, door alignment, and gaskets may need adjustment.</li>
            <li>Flush European installations can create ventilation or cabinet heat concerns.</li>
          </ul>
  
          <h3>How We Repair ASKO Ovens</h3>
          <p>
            We check the self-clean lock, steam path, compact oven controls, door alignment, airflow, telescopic guides, elements, sensors, fans, and cabinet ventilation so the repair fits the specific ASKO installation.
          </p>
        </>
      )
    },
  
    {
      id: "bosch-oven-repair",
      title: "Bosch Oven Repair",
      heading: "Bosch Oven Repair",
      /*img: "/oven-repair/bosch-oven-repair.webp",*/
      alt: "Bosch oven repair technician servicing a wall oven",
      description: (
        <>
          <p>
            Our <strong>Bosch oven repair</strong> service covers Bosch 500 Series, 800 Series, Benchmark Series, wall ovens, speed ovens, steam ovens, combination ovens, single ovens, double ovens, and slide-in range ovens. Bosch ovens are often installed in remodels where flush fit, cooling airflow, European controls, side-opening doors, and compact combination designs matter.
          </p>
  
          <h3>Bosch Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Speed ovens may fail in microwave, convection, or combination cooking while other modes still work.</li>
            <li>Steam ovens may need water, pump, valve, drain, or descaling diagnosis.</li>
            <li>Benchmark and 800 Series ovens may develop control panel, relay, sensor, or cooling fan issues.</li>
            <li>Side-opening doors may need hinge, gasket, latch, or alignment service.</li>
            <li>Stacked or flush-mounted Bosch ovens may run hot if ventilation is restricted.</li>
          </ul>
  
          <h3>How We Repair Bosch Ovens</h3>
          <p>
            We diagnose Bosch ovens by platform: steam, speed, wall oven, double oven, or range oven. We inspect controls, water systems, fans, sensors, relays, door locks, hinges, and installation airflow before replacing parts.
          </p>
        </>
      )
    },
  
    {
      id: "jennair-oven-repair",
      title: "JennAir Oven Repair",
      heading: "JennAir Oven Repair",
      /*img: "/oven-repair/jennair-oven-repair.webp",*/
      alt: "JennAir oven repair technician servicing a luxury wall oven",
      description: (
        <>
          <p>
            We provide <strong>JennAir oven repair</strong> for RISE and NOIR wall ovens, single ovens, double ovens, microwave combination ovens, steam and convection ovens, professional-style ranges, and built-in cooking appliances. JennAir ovens often involve V2 Dual-Fan Convection, Culinary Center features, connected controls, probes, and premium design panels.
          </p>
  
          <h3>JennAir Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>V2 Dual-Fan Convection problems may affect fan synchronization, rear heat, or baking consistency.</li>
            <li>Culinary Center, assisted cooking, probe, or connected-control faults may interrupt automatic programs.</li>
            <li>Microwave combination ovens may fail in microwave, convection, or broil mode.</li>
            <li>Touch display, relay, control board, and sensor issues may appear on RISE and NOIR models.</li>
            <li>RISE and NOIR handles, panels, and trim need careful protection during repair.</li>
          </ul>
  
          <h3>How We Repair JennAir Ovens</h3>
          <p>
            We test the exact JennAir cooking mode, including convection, steam, microwave-combination, probe cooking, and assisted cooking. We inspect fans, sensors, relays, locks, controls, hinges, and finish-sensitive panels.
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
