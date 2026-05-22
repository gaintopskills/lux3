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
      id: "big-chill-oven-repair",
      title: "Big Chill Oven Repair",
      heading: "Big Chill Oven Repair",
      /*img: "/oven-repair/big-chill-oven-repair.webp",*/
      alt: "Big Chill oven repair technician servicing a retro luxury oven",
      description: (
        <>
          <p>
            We provide <strong>Big Chill oven repair</strong> for Retro, Classic, and Pro-style ranges, gas stoves, induction stoves, electric wall ovens, and colorful luxury kitchen installations. Big Chill ovens combine retro styling with modern heating systems, so the finish and trim must be protected while the mechanical issue is diagnosed.
          </p>
  
          <h3>Big Chill Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The retro-style door may lose heat because of gasket, hinge, or alignment wear.</li>
            <li>Gas range ovens may need ignition, bake burner, broiler, or safety-valve service.</li>
            <li>Pro-style and wall oven models may develop convection fan, sensor, relay, or element issues.</li>
            <li>Custom color panels, chrome details, and handles can be damaged if service is rushed.</li>
            <li>Parts differ between Retro, Classic, and Pro-style product lines.</li>
          </ul>
  
          <h3>How We Repair Big Chill Ovens</h3>
          <p>
            We protect the finish first, then test ignition, elements, fans, sensors, controls, relays, door seals, and hinges. We verify the product line before matching parts.
          </p>
        </>
      )
    },
  
    {
      id: "elmira-stove-works-oven-repair",
      title: "Elmira Stove Works Oven Repair",
      heading: "Elmira Stove Works Oven Repair",
      /*img: "/oven-repair/elmira-stove-works-oven-repair.webp",*/
      alt: "Elmira Stove Works oven repair technician servicing a vintage style range oven",
      description: (
        <>
          <p>
            Our <strong>Elmira Stove Works oven repair</strong> service supports Northstar, Heritage, 1880-style, vintage-inspired ranges, convection wall ovens, dual fuel ranges, and retro appliance suites. Elmira ovens often combine modern cooking systems with vintage styling, specialty panels, and trim details.
          </p>
  
          <h3>Elmira Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Vintage-style doors, hinges, chrome trim, or gaskets may affect heat retention and appearance.</li>
            <li>Northstar and Heritage range ovens may need ignition, thermostat, burner, or element repair.</li>
            <li>Convection wall ovens may develop fan, sensor, relay, or self-clean problems.</li>
            <li>Timer, selector, and control issues can appear on retro-style cooking appliances.</li>
            <li>Older or specialty Elmira models may need careful parts identification.</li>
          </ul>
  
          <h3>How We Repair Elmira Ovens</h3>
          <p>
            We diagnose the oven system while preserving the vintage look. Door alignment, gasket condition, trim protection, model identification, and parts compatibility are especially important on Elmira appliances.
          </p>
        </>
      )
    },
  
    {
      id: "smeg-oven-repair",
      title: "Smeg Oven Repair",
      heading: "Smeg Oven Repair",
      /*img: "/oven-repair/smeg-oven-repair.webp",*/
      alt: "Smeg oven repair technician servicing an Italian built-in oven",
      description: (
        <>
          <p>
            We provide <strong>Smeg oven repair</strong> for built-in ovens, steam ovens, speed ovens, convection ovens, microwave ovens, all-gas ranges, dual fuel ranges, induction ranges, and retro-inspired cooking appliances. Smeg ovens often use European controls, designer panels, compact layouts, and specialty cooking modes.
          </p>
  
          <h3>Smeg Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Function selector, thermostat, timer, or European-control issues may stop specific cooking modes.</li>
            <li>Fan-assisted cooking, grill, steam, or speed cooking may fail while basic heating still works.</li>
            <li>Compact built-in ovens may need cabinet ventilation checked if they run hot or shut down.</li>
            <li>Gas range ovens may need thermocouple, burner, igniter, or flame-safety service.</li>
            <li>Designer, retro, or stainless panels require careful handling during repair.</li>
          </ul>
  
          <h3>How We Repair Smeg Ovens</h3>
          <p>
            We test the exact cooking function, selector, thermostat, fan, grill, steam or speed system, ignition components, cabinet ventilation, hinges, gaskets, and interior light while protecting Smeg’s design-forward finish.
          </p>
        </>
      )
    },
  
    {
      id: "heartland-oven-repair",
      title: "Heartland Oven Repair",
      heading: "Heartland Oven Repair",
      /*img: "/oven-repair/heartland-oven-repair.webp",*/
      alt: "Heartland oven repair technician servicing a retro classic range oven",
      description: (
        <>
          <p>
            Our <strong>Heartland oven repair</strong> service is designed for legacy Heartland ranges, classic gas ranges, electric ranges, dual fuel ranges, retro-style ovens, and discontinued Heartland cooking appliances. Heartland oven service often involves older controls, discontinued parts, and preserving a retro kitchen design that homeowners may not want to replace.
          </p>
  
          <h3>Heartland Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven takes longer to preheat or no longer holds temperature like it used to.</li>
            <li>Older gas models may need ignition, bake burner, broiler, thermocouple, or safety-valve service.</li>
            <li>Electric models may develop element, thermostat, selector, timer, or wiring issues.</li>
            <li>Door gaskets, hinges, control knobs, and trim may be harder to replace on discontinued models.</li>
            <li>Repair planning often depends on parts availability and the value of preserving the original kitchen look.</li>
          </ul>
  
          <h3>How We Repair Heartland Ovens</h3>
          <p>
            We identify the exact model, review parts availability, inspect heating and ignition systems, check door sealing, and recommend a repair path that makes sense for the appliance’s age, condition, and design value.
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
