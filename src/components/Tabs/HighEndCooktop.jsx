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
      id: "asko-cooktop-repair",
      title: "ASKO Cooktop Repair",
      heading: "ASKO Cooktop Repair",
      /*img: "/cooktop-repair/asko-cooktop-repair.webp",*/
      alt: "ASKO cooktop repair technician servicing a European induction or gas cooktop",
      description: (
        <>
          <p>We provide <strong>ASKO cooktop repair</strong> for ASKO induction cooktops, gas hobs, electric cooking surfaces, and European-style built-in cooktop installations. ASKO cooktops are usually integrated into clean, minimal kitchen layouts where controls, power supply, airflow, and cabinet fit all matter.</p>
          <h3>ASKO Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not recognizing cookware or shutting down during cooking</li>
            <li>✅ Touch controls, power boards, or sensors becoming intermittent</li>
            <li>✅ Gas burners clicking, lighting slowly, or failing to hold a stable flame</li>
            <li>✅ Electric zones cycling incorrectly or failing to heat</li>
            <li>✅ Cooling airflow and built-in cabinet ventilation affecting reliability</li>
            <li>✅ Flush-installation access issues in tightly integrated European-style kitchens</li>
          </ul>
          <h3>How We Fix These ASKO Cooktop Issues</h3>
          <p>We identify whether the ASKO issue is gas, electric, induction, control-related, or installation-related. Then we test burners, valves, induction modules, elements, sensors, touch controls, electrical supply, cooling fans, and ventilation.</p>
        </>
      )
    },
    {
      id: "bosch-cooktop-repair",
      title: "Bosch Cooktop Repair",
      heading: "Bosch Cooktop Repair",
      /*img: "/cooktop-repair/bosch-cooktop-repair.webp",*/
      alt: "Bosch cooktop repair technician servicing a gas electric or induction cooktop",
      description: (
        <>
          <p>Our <strong>Bosch cooktop repair</strong> service covers Bosch gas cooktops, electric radiant cooktops, induction cooktops, Benchmark FlexInduction cooktops, 500 Series, 800 Series, and built-in European-style cooking surfaces. Bosch cooktops are common in upscale remodels where flush installation, controls, and cooling airflow matter.</p>
          <h3>Bosch Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not detecting cookware, shutting off, or displaying power-board errors</li>
            <li>✅ FlexInduction zones not linking correctly for larger cookware or griddles</li>
            <li>✅ Gas burners clicking, producing weak flame, or lighting slowly</li>
            <li>✅ Electric radiant elements cycling incorrectly or failing to heat</li>
            <li>✅ Touch controls, sensors, power boards, or cooling fans developing faults</li>
            <li>✅ Built-in cabinet heat and ventilation problems affecting flush cooktop installations</li>
          </ul>
          <h3>How We Fix These Bosch Cooktop Issues</h3>
          <p>We diagnose Bosch by platform: gas, electric, or induction. We inspect burners, valves, electrodes, induction boards, cookware detection, FlexInduction operation, radiant elements, controls, electrical supply, fans, and installation airflow.</p>
        </>
      )
    },
    {
      id: "jennair-cooktop-repair",
      title: "JennAir Cooktop Repair",
      heading: "JennAir Cooktop Repair",
      /*img: "/cooktop-repair/jennair-cooktop-repair.webp",*/
      alt: "JennAir cooktop repair technician servicing a luxury downdraft cooktop",
      description: (
        <>
          <p>We provide <strong>JennAir cooktop repair</strong> for JennAir downdraft induction cooktops, electric radiant downdraft cooktops, gas cooktops, induction surfaces, and luxury built-in cooking installations. JennAir cooktops are especially distinctive when cooking and ventilation systems are integrated into the same appliance.</p>
          <h3>JennAir Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Downdraft airflow becoming weak because of blower, filter, ducting, or control problems</li>
            <li>✅ Induction zones not detecting cookware, bridging correctly, or maintaining power</li>
            <li>✅ Electric radiant elements cycling incorrectly or failing to heat</li>
            <li>✅ Gas burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Touch controls, sensors, power boards, or ventilation controls becoming intermittent</li>
            <li>✅ Cooktop installations where duct routing, cabinet space, and airflow affect performance</li>
          </ul>
          <h3>How We Fix These JennAir Cooktop Issues</h3>
          <p>We test JennAir cooking and ventilation systems together. We inspect blowers, filters, ducting, airflow, induction boards, cookware detection, radiant elements, gas burners, ignition, controls, sensors, electrical supply, and cabinet conditions.</p>
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
