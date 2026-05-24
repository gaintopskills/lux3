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
          id: "big-chill-stove-repair",
          title: "Big Chill Stove Repair",
          heading: "Big Chill Stove Repair",
          /*img: "/stove-repair/big-chill-stove-repair.webp",*/
          alt: "Big Chill stove repair technician servicing a retro luxury range",
          description: (
            <>
              <p>We provide <strong>Big Chill stove repair</strong> for Retro, Classic, and Pro-style ranges, gas stoves, induction stoves, electric stoves, cooktops, and colorful luxury kitchen installations. Big Chill stoves need both mechanical repair and finish-conscious handling because the appliance is often a design centerpiece.</p>
              <h3>Big Chill Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners with delayed ignition, uneven flame, or burner cap seating issues</li>
                <li>✅ Induction or electric cooking surfaces with control, element, or overheating problems</li>
                <li>✅ Chrome trim, custom color panels, handles, and knobs that require careful handling</li>
                <li>✅ Door, gasket, and range body alignment issues that can affect owner perception of the appliance</li>
                <li>✅ Parts matching between Retro, Classic, and Pro-style product lines</li>
                <li>✅ Finish-sensitive service where scratches, chips, or trim damage must be avoided</li>
              </ul>
              <h3>How We Fix These Big Chill Stove Issues</h3>
              <p>We protect the finish first, then diagnose the cooking system. We inspect burners, igniters, valves, induction modules, controls, trim, and model-specific parts so the repair preserves both function and appearance.</p>
            </>
          )
        },
        {
          id: "elmira-stove-works-stove-repair",
          title: "Elmira Stove Works Stove Repair",
          heading: "Elmira Stove Works Stove Repair",
          /*img: "/stove-repair/elmira-stove-works-stove-repair.webp",*/
          alt: "Elmira Stove Works stove repair technician servicing a vintage style range",
          description: (
            <>
              <p>Our <strong>Elmira Stove Works stove repair</strong> service supports Northstar, Heritage, 1880-style, vintage-inspired ranges, gas stoves, dual fuel ranges, electric cooking surfaces, and retro appliance suites. Elmira stoves often combine modern cooking systems with vintage panels, chrome details, and period-style trim.</p>
              <h3>Elmira Stove Works Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners with ignition delay, uneven flame, or cap and port issues</li>
                <li>✅ Electric or dual fuel cooking surfaces with element, selector, or control faults</li>
                <li>✅ Vintage-style knobs, chrome trim, panels, and handles needing careful service access</li>
                <li>✅ Door, hinge, gasket, and range body alignment concerns on retro-style units</li>
                <li>✅ Parts identification for older or specialty Elmira models</li>
                <li>✅ Finish preservation in kitchens where the appliance is part of the design theme</li>
              </ul>
              <h3>How We Fix These Elmira Stove Works Stove Issues</h3>
              <p>We diagnose the burner or cooktop system while protecting vintage-style details. We inspect ignition, gas valves, elements, selectors, trim, model numbers, and parts compatibility before repair.</p>
            </>
          )
        },
        {
          id: "smeg-stove-repair",
          title: "Smeg Stove Repair",
          heading: "Smeg Stove Repair",
          /*img: "/stove-repair/smeg-stove-repair.webp",*/
          alt: "Smeg stove repair technician servicing an Italian range",
          description: (
            <>
              <p>We provide <strong>Smeg stove repair</strong> for Smeg gas cooktops, induction cooktops, electric cooktops, dual fuel ranges, all-gas ranges, Portofino ranges, Classic ranges, and retro-inspired cooking appliances. Smeg stoves often use European controls, compact layouts, designer panels, and specialty burner arrangements.</p>
              <h3>Smeg Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners with ignition clicking, delayed lighting, or uneven flame after spills or cap misalignment</li>
                <li>✅ Function selectors, knobs, and European-style controls becoming stiff or unresponsive</li>
                <li>✅ Induction zones with cookware detection, touch-control, or overheating issues</li>
                <li>✅ Compact built-in cooktops with ventilation and heat-management problems</li>
                <li>✅ Designer panel, stainless, or retro-finish concerns during disassembly</li>
                <li>✅ Parts matching between Portofino, Classic, built-in, and retro-style Smeg products</li>
              </ul>
              <h3>How We Fix These Smeg Stove Issues</h3>
              <p>We inspect Smeg burners, igniters, selectors, controls, induction electronics, cooling airflow, gas valves, and finish-sensitive panels. We identify the exact product line before ordering parts.</p>
            </>
          )
        },
        {
          id: "heartland-stove-repair",
          title: "Heartland Stove Repair",
          heading: "Heartland Stove Repair",
          /*img: "/stove-repair/heartland-stove-repair.webp",*/
          alt: "Heartland stove repair technician servicing a retro classic range",
          description: (
            <>
              <p>Our <strong>Heartland stove repair</strong> service is designed for legacy Heartland ranges, classic gas stoves, electric ranges, dual fuel ranges, retro-style cooking appliances, and discontinued Heartland products. Heartland stove service often involves older controls, legacy parts, and preservation of the appliance’s classic appearance.</p>
              <h3>Heartland Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Older gas burners with ignition, burner cap, valve, or flame stability problems</li>
                <li>✅ Electric surface elements, selectors, wiring, or thermostatic controls failing with age</li>
                <li>✅ Knobs, trim, panels, and legacy controls that may be difficult to replace</li>
                <li>✅ Door, gasket, hinge, and range body wear on long-service appliances</li>
                <li>✅ Discontinued parts requiring careful model and serial-number verification</li>
                <li>✅ Repair-versus-replacement decisions when the owner wants to preserve the retro kitchen design</li>
              </ul>
              <h3>How We Fix These Heartland Stove Issues</h3>
              <p>We inspect the stove safely, confirm the model, identify available compatible parts, and repair ignition, burners, valves, electric elements, controls, and trim-sensitive components while preserving the appliance’s classic look.</p>
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
