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
          id: "kalamazoo-outdoor-stove-repair",
          title: "Kalamazoo Outdoor Stove Repair",
          heading: "Kalamazoo Outdoor Stove Repair",
          /*img: "/stove-repair/kalamazoo-outdoor-stove-repair.webp",*/
          alt: "Kalamazoo outdoor stove repair technician servicing a luxury outdoor burner",
          description: (
            <>
              <p>Our <strong>Kalamazoo outdoor stove repair</strong> service covers Kalamazoo side burners, power burners, outdoor cooktops, hybrid fire cooking systems, built-in outdoor kitchen burners, and premium outdoor cooking stations. Kalamazoo outdoor stove issues are often tied to high heat, gas delivery, ventilation, and weather exposure.</p>
              <h3>Kalamazoo Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Side burner or power burner not lighting because of igniter, regulator, valve, or gas supply issues</li>
                <li>✅ High-output burner not reaching expected heat because of gas pressure or burner obstruction</li>
                <li>✅ Wind, moisture, corrosion, and outdoor exposure affecting ignition and flame stability</li>
                <li>✅ Built-in island ventilation or clearance problems around high-heat burners</li>
                <li>✅ Grease, debris, or insects obstructing outdoor burner ports or air openings</li>
                <li>✅ Seasonal maintenance needs before heavy outdoor kitchen use</li>
              </ul>
              <h3>How We Fix These Kalamazoo Outdoor Stove Issues</h3>
              <p>We inspect gas lines, regulators, burner ports, ignition, valves, ventilation, enclosure clearances, and weather-exposed components so the outdoor cooking station performs safely and consistently.</p>
            </>
          )
        },
        {
          id: "lynx-outdoor-stove-repair",
          title: "Lynx Outdoor Stove Repair",
          heading: "Lynx Outdoor Stove Repair",
          /*img: "/stove-repair/lynx-outdoor-stove-repair.webp",*/
          alt: "Lynx outdoor stove repair technician servicing a luxury side burner",
          description: (
            <>
              <p>We provide <strong>Lynx outdoor stove repair</strong> for Lynx side burners, power burners, double side burners, outdoor kitchen burner modules, and luxury built-in cooking systems. Lynx outdoor stoves are exposed to heat, moisture, corrosion, and gas-flow issues that indoor stoves do not experience.</p>
              <h3>Lynx Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Side burner not lighting or shutting off because of igniter, valve, regulator, or gas-flow issues</li>
                <li>✅ Weak flame from clogged burner ports, debris, insects, or low gas pressure</li>
                <li>✅ Outdoor corrosion around igniters, fasteners, burner bowls, and control areas</li>
                <li>✅ Built-in island ventilation or gas line sizing problems</li>
                <li>✅ Control knob, lighting, wiring, and ignition switch wear from weather exposure</li>
                <li>✅ Heat discoloration and surface wear from high-output outdoor cooking</li>
              </ul>
              <h3>How We Fix These Lynx Outdoor Stove Issues</h3>
              <p>We test ignition, burners, valves, regulators, gas pressure, ventilation, wiring, and corrosion-prone parts. We also check whether the built-in outdoor island is affecting airflow or service access.</p>
            </>
          )
        },
        {
          id: "alfresco-outdoor-stove-repair",
          title: "Alfresco Outdoor Stove Repair",
          heading: "Alfresco Outdoor Stove Repair",
          /*img: "/stove-repair/alfresco-outdoor-stove-repair.webp",*/
          alt: "Alfresco outdoor stove repair technician servicing a built-in side burner",
          description: (
            <>
              <p>Our <strong>Alfresco outdoor stove repair</strong> service covers Alfresco side burners, power burners, Versa Power cooking systems, built-in outdoor kitchen burners, and premium outdoor cooking modules. Alfresco outdoor stoves are designed for high output, so gas pressure and burner condition matter a lot.</p>
              <h3>Alfresco Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Versa Power or side burner not reaching full heat because of gas pressure, regulator, or burner obstruction</li>
                <li>✅ Ignition failure from moisture, corrosion, spark electrode wear, or switch issues</li>
                <li>✅ Burner ports clogged by grease, debris, or outdoor contamination</li>
                <li>✅ Built-in ventilation and clearance issues inside outdoor kitchen islands</li>
                <li>✅ Control knob, valve, and wiring wear from outdoor exposure</li>
                <li>✅ Seasonal performance decline when the burner has not been cleaned or serviced</li>
              </ul>
              <h3>How We Fix These Alfresco Outdoor Stove Issues</h3>
              <p>We inspect burner output, gas pressure, regulators, ignition, valves, wiring, ventilation, and weather-exposed parts. We also clean and evaluate burner ports before recommending replacement parts.</p>
            </>
          )
        },
        {
          id: "fire-magic-outdoor-stove-repair",
          title: "Fire Magic Outdoor Stove Repair",
          heading: "Fire Magic Outdoor Stove Repair",
          /*img: "/stove-repair/fire-magic-outdoor-stove-repair.webp",*/
          alt: "Fire Magic outdoor stove repair technician servicing a built-in burner",
          description: (
            <>
              <p>We provide <strong>Fire Magic outdoor stove repair</strong> for Fire Magic side burners, power burners, searing burners, outdoor kitchen burner modules, and built-in cooking appliances. Fire Magic stove issues often involve outdoor corrosion, ignition systems, gas pressure, and enclosure ventilation.</p>
              <h3>Fire Magic Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Power burner or side burner not lighting because of igniter, valve, regulator, or wiring issues</li>
                <li>✅ Uneven flame or low heat caused by clogged ports, gas pressure, or burner wear</li>
                <li>✅ Moisture and corrosion affecting ignition electrodes, wiring, or control housings</li>
                <li>✅ Built-in enclosure ventilation and clearance problems</li>
                <li>✅ Control knob, spark module, and gas valve wear from outdoor exposure</li>
                <li>✅ Seasonal maintenance issues after long periods of non-use</li>
              </ul>
              <h3>How We Fix These Fire Magic Outdoor Stove Issues</h3>
              <p>We test the ignition system, gas supply, regulator, burner ports, valves, wiring, enclosure airflow, and weather-exposed parts so the Fire Magic burner operates safely outdoors.</p>
            </>
          )
        },
        {
          id: "dcs-stove-repair",
          title: "DCS Stove Repair",
          heading: "DCS Stove Repair",
          /*img: "/stove-repair/dcs-stove-repair.webp",*/
          alt: "DCS stove repair technician servicing a premium cooktop or outdoor burner",
          description: (
            <>
              <p>Our <strong>DCS stove repair</strong> service supports legacy DCS cooktops, DCS gas ranges, sealed burner cooking appliances, outdoor side burners, power burners, and premium outdoor kitchen systems. DCS repair depends on whether the appliance is a legacy indoor unit or an outdoor cooking module.</p>
              <h3>DCS Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Legacy gas cooktop ignition, burner, valve, or control issues</li>
                <li>✅ Outdoor side burner or power burner not lighting because of igniter, regulator, or gas supply issues</li>
                <li>✅ Burner ports clogged by grease, debris, insects, or outdoor exposure</li>
                <li>✅ Valve stem, knob, grate, and burner bowl wear on older DCS products</li>
                <li>✅ Weather-related corrosion on outdoor DCS burner systems</li>
                <li>✅ Parts availability differences between older indoor DCS appliances and current outdoor products</li>
              </ul>
              <h3>How We Fix These DCS Stove Issues</h3>
              <p>We identify the DCS platform first, then inspect ignition, burners, gas valves, regulators, controls, wiring, and outdoor exposure points. Legacy units require extra parts verification before repair.</p>
            </>
          )
        },
        {
          id: "twin-eagles-outdoor-stove-repair",
          title: "Twin Eagles Outdoor Stove Repair",
          heading: "Twin Eagles Outdoor Stove Repair",
          /*img: "/stove-repair/twin-eagles-outdoor-stove-repair.webp",*/
          alt: "Twin Eagles outdoor stove repair technician servicing a premium side burner",
          description: (
            <>
              <p>We provide <strong>Twin Eagles outdoor stove repair</strong> for side burners, power burners, sear burners, outdoor cooking modules, and premium built-in outdoor kitchen systems. Twin Eagles outdoor stove issues usually involve high-output gas systems, ignition, weather exposure, and built-in island ventilation.</p>
              <h3>Twin Eagles Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Power burner or side burner not lighting because of igniter, valve, regulator, or gas supply faults</li>
                <li>✅ Low flame, uneven flame, or poor heat recovery from clogged burners or pressure issues</li>
                <li>✅ Outdoor corrosion affecting ignition, wiring, burner bowls, or fasteners</li>
                <li>✅ Control knob, thermometer, lighting, or wiring problems from weather exposure</li>
                <li>✅ Ventilation and clearance problems inside custom outdoor kitchen enclosures</li>
                <li>✅ Seasonal maintenance needs around burners, drip trays, and gas connections</li>
              </ul>
              <h3>How We Fix These Twin Eagles Outdoor Stove Issues</h3>
              <p>We inspect gas delivery, burners, igniters, valves, regulators, wiring, ventilation, and corrosion-prone areas. For Twin Eagles outdoor kitchens, we also check the enclosure because airflow affects burner performance and safety.</p>
            </>
          )
          }
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
