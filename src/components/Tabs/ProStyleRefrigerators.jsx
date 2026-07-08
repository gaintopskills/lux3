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
      id: "thor-kitchen-refrigerator-repair",
      title: "Thor Kitchen Refrigerator Repair",
      heading: "Thor Kitchen Refrigerator Repair",
      alt: "Thor Kitchen refrigerator repair technician servicing a professional French door refrigerator",
      description: (
        <>
          <p>
            Our <strong>Thor Kitchen refrigerator repair</strong> service covers professional French-door refrigerators, counter-depth refrigerators, panel-ready refrigerators, Gordon Ramsay Series refrigeration, wine coolers, beverage centers, and ice maker-equipped models. Thor refrigeration commonly includes multi-zone cooling, flex drawers, dual freezer drawers, internal or external water and ice, and stainless pro-style finishes.
          </p>

          <h3>Thor Kitchen Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>French-door refrigerator not holding temperature because of evaporator fan problems, damper failure, dirty condenser, sensor error, or door gasket leaks.</li>
            <li>Flex drawer not changing modes properly because of thermistor, damper, fan, or control-board issues.</li>
            <li>Dual freezer drawers icing, warming, or not sliding closed correctly because of drawer alignment, gasket, defrost, or airflow problems.</li>
            <li>Ice maker and dispenser issues caused by fill tube freeze-up, water valve failure, filter restriction, or low freezer temperature performance.</li>
            <li>Wine cooler or beverage refrigerator temperature drift from fan, sensor, compressor, or door seal issues.</li>
          </ul>

          <h3>Technician Approach for Thor Kitchen</h3>
          <p>
            We test Thor refrigerators by zone. We check fresh food, freezer drawers, flex drawer, ice maker, dispenser, and wine or beverage compartments separately. Then we inspect sensors, fans, dampers, defrost operation, condenser airflow, water supply, and control response so the repair matches the exact cooling problem.
          </p>
        </>
      )
    },
    {
      id: "forno-refrigerator-repair",
      title: "Forno Refrigerator Repair",
      heading: "Forno Refrigerator Repair",
      alt: "Forno refrigerator repair technician servicing a modern French door refrigerator",
      description: (
        <>
          <p>
            We service <strong>Forno refrigerator repair</strong> for French-door refrigerators, side-by-side refrigeration, convertible refrigerator/freezer units, retro bottom-freezer refrigerators, wine and beverage coolers, ice makers, dry agers, and Forno refrigeration suites. Forno has many series and model variations, so correct model identification is especially important before parts are ordered.
          </p>

          <h3>Forno Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Convertible refrigerator/freezer not switching or holding the selected mode because of sensor, control, fan, or sealed-system issues.</li>
            <li>French-door unit warming, freezing food, or showing temperature swings due to thermistor drift, damper problems, fan failure, or door gasket leaks.</li>
            <li>Automatic ice maker not producing, leaking, or overflowing because of water valve, fill tube, filter, or freezer temperature problems.</li>
            <li>Wine and beverage cooler temperature zones drifting because of fan failure, sensor issues, glass door heat load, or compressor cycling problems.</li>
            <li>Dry ager humidity, airflow, or cooling concerns that require more careful testing than a standard refrigerator.</li>
          </ul>

          <h3>Technician Approach for Forno</h3>
          <p>
            With Forno, we verify the full model number first because similar-looking units can use different controls and parts. We test each temperature zone, inspect fans, sensors, dampers, defrost operation, condenser airflow, ice maker components, water supply, and door seals. For wine coolers and dry agers, we also check humidity, airflow, and cabinet location.
          </p>
        </>
      )
    },
    {
      id: "zline-refrigerator-repair",
      title: "ZLINE Refrigerator Repair",
      heading: "ZLINE Refrigerator Repair",
      alt: "ZLINE refrigerator repair technician servicing a built-in French door refrigerator",
      description: (
        <>
          <p>
            We provide <strong>ZLINE refrigerator repair</strong> for French-door refrigerators, built-in refrigerators, counter-depth refrigerators, standard-depth refrigerators, panel-ready refrigerators, column refrigeration, wine coolers, beverage centers, undercounter refrigerators, ice makers, and Autograph Edition refrigeration. ZLINE often combines decorative finishes with modern dual cooling, internal or external water, ice makers, and customizable handles.
          </p>

          <h3>ZLINE Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Built-in or French-door refrigerator not cooling because of fan failure, sensor error, damper issue, dirty condenser, control fault, or sealed-system problem.</li>
            <li>Bottom freezer warming, icing, or not closing properly because of drawer alignment, gasket wear, defrost failure, or airflow restriction.</li>
            <li>Dual cooling or multi-zone compartments not maintaining settings because of thermistor, fan, damper, or board problems.</li>
            <li>Water dispenser, internal dispenser, or ice maker not working due to valve, filter, fill tube, water pressure, or freezer temperature issues.</li>
            <li>Autograph Edition handles, brass accents, matte finishes, and panel-ready trim needing careful protection during service.</li>
          </ul>

          <h3>Technician Approach for ZLINE</h3>
          <p>
            We separate ZLINE cooling problems by section: fresh food, freezer, ice, water, wine, or beverage. We then test fans, dampers, sensors, defrost components, condenser airflow, controls, door seals, and water components. On Autograph Edition and custom-finish models, we protect handles, panels, and trim before accessing internal components.
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
