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
      id: "asko-range-repair",
      title: "ASKO Range Repair",
      heading: "ASKO Range Repair",
      /*img: "/range-repair/asko-range-repair.webp",*/
      alt: "ASKO range repair technician servicing a European cooking appliance",
      description: (
        <>
          <p>We provide <strong>ASKO range repair</strong> support for ASKO built-in ovens, pyrolytic ovens, multifunction ovens, combined steam ovens, compact microwave ovens, cooktops, and European cooking installations arranged as a range-style cooking zone. ASKO is usually installed as built-in oven and cooktop components rather than a traditional pro range.</p>
          <h3>ASKO Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Pyrolytic self-clean lock, high-limit, and door-lock problems</li>
            <li>✅ Combined steam oven water fill, drain, limescale, pump, or valve concerns</li>
            <li>✅ Compact microwave oven mode-switching, fan, or control issues</li>
            <li>✅ Cooktop power, control, or ventilation problems in European-format installations</li>
            <li>✅ Telescopic guide, rack support, door alignment, and gasket concerns</li>
            <li>✅ Built-in cabinet heat and ventilation problems in flush cooking layouts</li>
          </ul>
          <h3>How We Fix These ASKO Range Issues</h3>
          <p>We identify whether the ASKO issue is in the oven, steam system, compact oven, cooktop, self-clean lock, or installation airflow. Then we test controls, fans, elements, sensors, water components, doors, and ventilation.</p>
        </>
      )
    },
    {
      id: "bosch-range-repair",
      title: "Bosch Range Repair",
      heading: "Bosch Range Repair",
      /*img: "/range-repair/bosch-range-repair.webp",*/
      alt: "Bosch range repair technician servicing a slide-in range",
      description: (
        <>
          <p>Our <strong>Bosch range repair</strong> service covers Bosch 500 Series, 800 Series, Benchmark Series, slide-in ranges, induction ranges, gas ranges, electric ranges, speed ovens, steam ovens, and built-in cooking systems. Bosch ranges are common in high-end remodels where European controls, flush installation, and cooling airflow matter.</p>
          <h3>Bosch Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not detecting cookware, shutting off, or showing power-board errors</li>
            <li>✅ Gas burner ignition clicking, weak flame, or delayed lighting on Bosch gas ranges</li>
            <li>✅ Speed oven microwave/convection functions not coordinating correctly</li>
            <li>✅ Steam oven water, pump, valve, drain, and descaling-related issues</li>
            <li>✅ Control panel, relay board, sensor, door lock, cooling fan, or error-code problems</li>
            <li>✅ Side-opening door alignment, hinge, gasket, and latch concerns on selected Bosch ovens</li>
          </ul>
          <h3>How We Fix These Bosch Range Issues</h3>
          <p>We diagnose Bosch by platform: gas range, induction range, electric range, steam oven, speed oven, or wall oven. We inspect burners, induction boards, sensors, locks, water systems, fans, relays, controls, and installation airflow.</p>
        </>
      )
    },
    {
      id: "jennair-range-repair",
      title: "JennAir Range Repair",
      heading: "JennAir Range Repair",
      /*img: "/range-repair/jennair-range-repair.webp",*/
      alt: "JennAir range repair technician servicing a luxury range",
      description: (
        <>
          <p>We provide <strong>JennAir range repair</strong> for RISE and NOIR ranges, dual fuel ranges, gas ranges, induction ranges, downdraft ranges, wall ovens, microwave combination ovens, and professional-style cooking appliances. JennAir ranges often involve V2 Dual-Fan Convection, assisted cooking, connected controls, probes, and premium panel finishes.</p>
          <h3>JennAir Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ V2 Dual-Fan Convection problems involving fan synchronization, rear heat, sensor, or airflow</li>
            <li>✅ Downdraft airflow, fan, filter, or venting issues on JennAir downdraft range systems</li>
            <li>✅ Gas burner ignition, simmer, valve, or flame stability problems</li>
            <li>✅ Culinary Center, assisted cooking, probe, and connected-control communication faults</li>
            <li>✅ Touch display, relay, control board, self-clean, door lock, and cooling fan issues</li>
            <li>✅ RISE and NOIR handle, panel, and trim protection during service</li>
          </ul>
          <h3>How We Fix These JennAir Range Issues</h3>
          <p>We test JennAir convection fans, downdraft ventilation, gas burners, induction boards, probes, sensors, relays, touch controls, door locks, and connected features while protecting RISE and NOIR finishes.</p>
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
