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
      id: "big-chill-cooktop-repair",
      title: "Big Chill Cooktop Repair",
      heading: "Big Chill Cooktop Repair",
      /*img: "/cooktop-repair/big-chill-cooktop-repair.webp",*/
      alt: "Big Chill cooktop repair technician servicing a retro luxury cooking surface",
      description: (
        <>
          <p>We provide <strong>Big Chill cooktop repair</strong> for Big Chill gas cooking surfaces, pro-style cooktops, rangetop-style installations, induction cooking surfaces, and cooktop sections integrated into Retro, Classic, and Pro-style ranges. Big Chill service requires careful handling because color, chrome, and retro finish details are often central to the kitchen design.</p>
          <h3>Big Chill Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Burner caps, ports, electrodes, switches, or valves needing adjustment or replacement</li>
            <li>✅ Induction zones failing to detect cookware or shutting down during use</li>
            <li>✅ Griddle or pro-style surface sections heating inconsistently</li>
            <li>✅ Controls, knobs, or switches becoming intermittent</li>
            <li>✅ Custom-color panels, chrome trim, and handles requiring careful protection during service</li>
          </ul>
          <h3>How We Fix These Big Chill Cooktop Issues</h3>
          <p>We protect the finish first, then diagnose burners, ignition, gas valves, induction modules, controls, griddle sections, electrical supply, and ventilation. We verify the exact Big Chill product line before ordering parts.</p>
        </>
      )
    },
    {
      id: "elmira-stove-works-cooktop-repair",
      title: "Elmira Stove Works Cooktop Repair",
      heading: "Elmira Stove Works Cooktop Repair",
      /*img: "/cooktop-repair/elmira-stove-works-cooktop-repair.webp",*/
      alt: "Elmira Stove Works cooktop repair technician servicing a vintage-style cooking surface",
      description: (
        <>
          <p>Our <strong>Elmira Stove Works cooktop repair</strong> service supports Northstar, Heritage, and vintage-inspired cooking surfaces built into Elmira ranges and retro appliance suites. Elmira cooktop sections combine modern burner systems with period-style knobs, specialty panels, chrome trim, and design-sensitive access points.</p>
          <h3>Elmira Stove Works Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Burner caps, electrodes, ignition switches, or valves needing service</li>
            <li>✅ Electric or induction cooking zones failing to heat correctly on supported models</li>
            <li>✅ Knobs, selectors, and retro-style controls becoming loose or intermittent</li>
            <li>✅ Chrome trim, specialty panels, and vintage details requiring careful protection</li>
            <li>✅ Parts-identification challenges for older, specialty, or custom Elmira configurations</li>
          </ul>
          <h3>How We Fix These Elmira Stove Works Cooktop Issues</h3>
          <p>We diagnose the cooking surface while preserving the vintage look. Burner performance, control condition, trim protection, exact model identification, and parts compatibility are especially important on Elmira appliances.</p>
        </>
      )
    },
    {
      id: "smeg-cooktop-repair",
      title: "Smeg Cooktop Repair",
      heading: "Smeg Cooktop Repair",
      /*img: "/cooktop-repair/smeg-cooktop-repair.webp",*/
      alt: "Smeg cooktop repair technician servicing an Italian gas or induction cooktop",
      description: (
        <>
          <p>We provide <strong>Smeg cooktop repair</strong> for Smeg gas cooktops, induction cooktops, electric radiant cooktops, domino modules, and European-style built-in cooking surfaces. Smeg cooktops often use compact layouts, touch controls, thermocouples, flame-safety systems, and designer panels.</p>
          <h3>Smeg Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners with delayed ignition, weak flame, or flame-safety problems</li>
            <li>✅ Thermocouples, spark electrodes, or valves causing burners to go out after lighting</li>
            <li>✅ Induction zones failing to detect cookware, overheating, or showing touch-control errors</li>
            <li>✅ Electric radiant zones cycling incorrectly or failing to heat</li>
            <li>✅ Compact domino modules with individual power, control, or installation faults</li>
            <li>✅ Designer glass, stainless, or retro-finish panels requiring careful protection</li>
          </ul>
          <h3>How We Fix These Smeg Cooktop Issues</h3>
          <p>We test gas ignition, thermocouples, valves, burner ports, induction electronics, electric elements, touch controls, electrical supply, cooling airflow, and modular installation conditions while protecting Smeg design details.</p>
        </>
      )
    },
    {
      id: "heartland-cooktop-repair",
      title: "Heartland Cooktop Repair",
      heading: "Heartland Cooktop Repair",
      /*img: "/cooktop-repair/heartland-cooktop-repair.webp",*/
      alt: "Heartland cooktop repair technician servicing a retro classic cooking surface",
      description: (
        <>
          <p>Our <strong>Heartland cooktop repair</strong> service is designed for legacy Heartland cooking surfaces, gas-burner sections, electric cooking sections, and cooktops integrated into discontinued Heartland classic ranges. Heartland repairs often involve older controls, discontinued parts, and careful preservation of retro design details.</p>
          <h3>Heartland Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Discontinued or legacy parts that require careful model and serial-number confirmation</li>
            <li>✅ Gas burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Electric elements, switches, wiring, or controls failing on older cooking surfaces</li>
            <li>✅ Knobs, trim, panels, and finish details requiring careful preservation</li>
            <li>✅ Gas valves, ignition components, or burner assemblies wearing after long service</li>
            <li>✅ Repair-versus-replacement planning for appliances homeowners want to preserve for design reasons</li>
          </ul>
          <h3>How We Fix These Heartland Cooktop Issues</h3>
          <p>We focus on safe diagnosis, parts compatibility, and preservation. We inspect burners, valves, igniters, electric elements, controls, wiring, trim, and finish-sensitive access areas while verifying the exact Heartland model before repair.</p>
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
