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
      id: "big-chill-range-repair",
      title: "Big Chill Range Repair",
      heading: "Big Chill Range Repair",
      /*img: "/range-repair/big-chill-range-repair.webp",*/
      alt: "Big Chill range repair technician servicing a retro luxury range",
      description: (
        <>
          <p>We provide <strong>Big Chill range repair</strong> for Retro, Classic, and Pro-style ranges, gas stoves, induction ranges, electric cooking appliances, and colorful luxury kitchen installations. Big Chill service requires careful handling because the appliance’s color, chrome, and retro finish are often central to the kitchen design.</p>
          <h3>Big Chill Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burner ignition, bake burner, broiler, and safety-valve issues on Retro and Classic ranges</li>
            <li>✅ Convection fan, sensor, relay, and element issues on Pro-style range ovens</li>
            <li>✅ Induction zone detection, overheating, or control problems on induction models</li>
            <li>✅ Door gasket, hinge, and heat-retention concerns on retro-style doors</li>
            <li>✅ Custom color panel, chrome trim, and handle protection during disassembly</li>
            <li>✅ Parts matching between Big Chill Retro, Classic, and Pro-style lines</li>
          </ul>
          <h3>How We Fix These Big Chill Range Issues</h3>
          <p>We protect the finish first, then diagnose burners, ignition, gas valves, elements, fans, sensors, door seals, induction modules, and controls. We verify the product line before ordering parts.</p>
        </>
      )
    },
    {
      id: "elmira-stove-works-range-repair",
      title: "Elmira Stove Works Range Repair",
      heading: "Elmira Stove Works Range Repair",
      /*img: "/range-repair/elmira-stove-works-range-repair.webp",*/
      alt: "Elmira Stove Works range repair technician servicing a vintage style range",
      description: (
        <>
          <p>Our <strong>Elmira Stove Works range repair</strong> service supports Northstar, Heritage, 1880-style, vintage-inspired ranges, dual fuel ranges, convection ovens, and retro appliance suites. Elmira ranges combine modern cooking systems with vintage styling, specialty panels, chrome trim, and period-style details.</p>
          <h3>Elmira Stove Works Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Vintage-style door, hinge, chrome trim, and gasket issues affecting heat retention and appearance</li>
            <li>✅ Range oven ignition, thermostat, burner, or element problems</li>
            <li>✅ Convection fan, sensor, relay, and self-clean concerns on oven models</li>
            <li>✅ Timer, selector, knob, and control problems on retro-style appliances</li>
            <li>✅ Top burner ignition, gas valve, or flame pattern issues</li>
            <li>✅ Parts identification for older, specialty, or custom Elmira configurations</li>
          </ul>
          <h3>How We Fix These Elmira Stove Works Range Issues</h3>
          <p>We diagnose the oven and cooktop systems while preserving the vintage look. Door alignment, trim protection, gasket condition, burner performance, model identification, and parts compatibility are especially important on Elmira ranges.</p>
        </>
      )
    },
    {
      id: "smeg-range-repair",
      title: "Smeg Range Repair",
      heading: "Smeg Range Repair",
      /*img: "/range-repair/smeg-range-repair.webp",*/
      alt: "Smeg range repair technician servicing an Italian range",
      description: (
        <>
          <p>We provide <strong>Smeg range repair</strong> for Smeg all-gas ranges, dual fuel ranges, induction ranges, retro-inspired ranges, built-in ovens, and European cooking appliances. Smeg ranges often use European controls, designer panels, fan-assisted ovens, specialty modes, and compact installation layouts.</p>
          <h3>Smeg Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Function selector, thermostat, timer, and European-control issues on multifunction range ovens</li>
            <li>✅ Fan-assisted cooking, grill, broil, steam, or speed-cooking mode failures</li>
            <li>✅ Gas burner ignition, burner ports, thermocouple, and flame-safety issues</li>
            <li>✅ Induction zone cookware detection, overheating, or touch-control problems</li>
            <li>✅ Door gasket, hinge, and interior light issues on retro and built-in models</li>
            <li>✅ Designer panel, stainless, or retro-finish protection during service</li>
          </ul>
          <h3>How We Fix These Smeg Range Issues</h3>
          <p>We test the selected cooking function, oven selector, thermostat, fan, grill, ignition components, induction electronics, gas valves, door seals, and cabinet ventilation while protecting Smeg’s design-forward panels.</p>
        </>
      )
    },
    {
      id: "heartland-range-repair",
      title: "Heartland Range Repair",
      heading: "Heartland Range Repair",
      /*img: "/range-repair/heartland-range-repair.webp",*/
      alt: "Heartland range repair technician servicing a retro classic range",
      description: (
        <>
          <p>Our <strong>Heartland range repair</strong> service is designed for legacy Heartland ranges, classic gas ranges, electric ranges, dual fuel ranges, retro-style ranges, and discontinued Heartland cooking appliances. Heartland range service often involves older controls, discontinued parts, and careful preservation of retro design.</p>
          <h3>Heartland Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Discontinued or legacy parts that require careful model and serial-number confirmation</li>
            <li>✅ Gas burner ignition, bake burner, broiler, thermocouple, and safety-valve problems</li>
            <li>✅ Electric element, thermostat, selector, wiring, and timer issues on older ranges</li>
            <li>✅ Door gasket, hinge, and heat-retention wear on long-service retro-style ovens</li>
            <li>✅ Control knob, trim, panel, and finish issues where replacement parts may be limited</li>
            <li>✅ Repair-versus-replacement planning for appliances homeowners want to preserve for kitchen design reasons</li>
          </ul>
          <h3>How We Fix These Heartland Range Issues</h3>
          <p>We focus on safe diagnosis, parts compatibility, and preservation. We inspect burners, valves, igniters, oven controls, thermostats, wiring, gaskets, hinges, and trim while verifying the exact model before repair.</p>
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
