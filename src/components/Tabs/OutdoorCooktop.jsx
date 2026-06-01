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
      id: "kalamazoo-outdoor-cooktop-repair",
      title: "Kalamazoo Outdoor Cooktop Repair",
      heading: "Kalamazoo Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/kalamazoo-outdoor-cooktop-repair.webp",*/
      alt: "Kalamazoo outdoor cooktop repair technician servicing a luxury power burner",
      description: (
        <>
          <p>Our <strong>Kalamazoo outdoor cooktop repair</strong> service covers Kalamazoo power burners, side burners, outdoor cooking modules, hybrid-fire cooking stations, and built-in outdoor kitchen surfaces. Outdoor cooktops are affected by gas delivery, ventilation, weather exposure, stainless components, and high-temperature use.</p>
          <h3>Kalamazoo Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Power burners or side burners with weak flame, delayed ignition, or unstable output</li>
            <li>✅ Gas valves, regulators, ignition components, or burner ports affected by outdoor exposure</li>
            <li>✅ High-output surfaces taking too long to reach cooking temperature</li>
            <li>✅ Outdoor kitchen enclosure ventilation, clearance, or gas-line sizing issues</li>
            <li>✅ Weather exposure, corrosion, moisture, and debris affecting controls and burners</li>
            <li>✅ Hybrid cooking systems where burner and grill functions interact</li>
          </ul>
          <h3>How We Fix These Kalamazoo Outdoor Cooktop Issues</h3>
          <p>We inspect gas delivery, burner output, ignition, regulators, valves, weather-related wear, ventilation, and outdoor enclosure conditions so the cooking module operates safely.</p>
        </>
      )
    },
    {
      id: "lynx-outdoor-cooktop-repair",
      title: "Lynx Outdoor Cooktop Repair",
      heading: "Lynx Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/lynx-outdoor-cooktop-repair.webp",*/
      alt: "Lynx outdoor cooktop repair technician servicing a luxury outdoor side burner",
      description: (
        <>
          <p>We provide <strong>Lynx outdoor cooktop repair</strong> for Lynx side burners, power burners, built-in outdoor cooking modules, burner stations, and luxury outdoor-kitchen surfaces. Lynx outdoor cooktop systems require careful diagnosis of ignition, gas pressure, ventilation, weather exposure, and installation conditions.</p>
          <h3>Lynx Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Side burners or power burners with weak output, ignition delay, or uneven flame</li>
            <li>✅ Gas regulators, valves, igniters, or burner assemblies affected by weather exposure</li>
            <li>✅ Built-in versus cart-adjacent installation problems affecting gas supply and airflow</li>
            <li>✅ Corrosion around burners, fasteners, control areas, and stainless surfaces</li>
            <li>✅ Ventilation and clearance issues inside custom outdoor kitchen islands</li>
            <li>✅ Control knobs, switches, and wiring becoming stiff or intermittent outdoors</li>
          </ul>
          <h3>How We Fix These Lynx Outdoor Cooktop Issues</h3>
          <p>We test gas pressure, ignition, burner assemblies, regulators, valves, airflow, controls, corrosion-prone areas, and installation clearances before recommending parts or adjustment.</p>
        </>
      )
    },
    {
      id: "alfresco-outdoor-cooktop-repair",
      title: "Alfresco Outdoor Cooktop Repair",
      heading: "Alfresco Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/alfresco-outdoor-cooktop-repair.webp",*/
      alt: "Alfresco outdoor cooktop repair technician servicing a Versa Power burner",
      description: (
        <>
          <p>Our <strong>Alfresco outdoor cooktop repair</strong> service covers Alfresco Versa Power burners, side burners, sear-zone cooking modules, built-in outdoor-kitchen surfaces, and premium burner stations. Alfresco cooking systems depend on strong gas output, reliable ignition, weather resistance, and proper enclosure ventilation.</p>
          <h3>Alfresco Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Versa Power or side burners not reaching proper high-output cooking temperature</li>
            <li>✅ Igniters, gas valves, regulators, or burner ports causing delayed ignition or weak flame</li>
            <li>✅ Sear-zone or specialty burner sections heating unevenly</li>
            <li>✅ Outdoor corrosion and moisture exposure around ignition and burner components</li>
            <li>✅ Built-in enclosure ventilation, clearance, regulator, or gas-pressure issues</li>
            <li>✅ Control knobs, switches, and stainless components wearing in outdoor conditions</li>
          </ul>
          <h3>How We Fix These Alfresco Outdoor Cooktop Issues</h3>
          <p>We inspect burner output, gas pressure, ignition, regulators, valves, specialty sections, ventilation, clearances, and weather-exposed parts so the outdoor cooktop performs safely.</p>
        </>
      )
    },
    {
      id: "fire-magic-outdoor-cooktop-repair",
      title: "Fire Magic Outdoor Cooktop Repair",
      heading: "Fire Magic Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/fire-magic-outdoor-cooktop-repair.webp",*/
      alt: "Fire Magic outdoor cooktop repair technician servicing a built-in power burner",
      description: (
        <>
          <p>We provide <strong>Fire Magic outdoor cooktop repair</strong> for Fire Magic power burners, side burners, built-in burner stations, and outdoor cooking modules used in luxury outdoor kitchens. Fire Magic surfaces may include electronic ignition, gas controls, stainless components, and weather-exposed wiring.</p>
          <h3>Fire Magic Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Power burners or side burners with ignition and flame-stability issues</li>
            <li>✅ Gas valves, regulators, electrodes, or switches causing inconsistent burner operation</li>
            <li>✅ Burners failing to reach expected cooking temperature</li>
            <li>✅ Control-panel, wiring, or power-supply problems on electronically ignited models</li>
            <li>✅ Outdoor corrosion around burners, wiring, fasteners, and control housings</li>
            <li>✅ Ventilation and clearance issues inside outdoor kitchen enclosures</li>
          </ul>
          <h3>How We Fix These Fire Magic Outdoor Cooktop Issues</h3>
          <p>We test ignition, gas delivery, valves, regulators, switches, wiring, burners, power supply, and built-in enclosure conditions so the outdoor cooking module performs safely.</p>
        </>
      )
    },
    {
      id: "dcs-cooktop-repair",
      title: "DCS Cooktop Repair",
      heading: "DCS Cooktop Repair",
      /*img: "/cooktop-repair/dcs-cooktop-repair.webp",*/
      alt: "DCS cooktop repair technician servicing a premium rangetop or outdoor burner module",
      description: (
        <>
          <p>Our <strong>DCS cooktop repair</strong> service supports legacy DCS indoor gas cooking surfaces, professional rangetops, sealed burners, griddle sections, and DCS outdoor side-burner or power-burner modules. DCS diagnosis depends on whether the appliance is an indoor legacy platform or part of an outdoor cooking setup.</p>
          <h3>DCS Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners with ignition, gas-valve, burner-port, or flame-stability problems</li>
            <li>✅ Legacy controls, switches, or spark components becoming intermittent</li>
            <li>✅ Griddle sections heating unevenly or taking too long to recover</li>
            <li>✅ Outdoor power burners or side burners affected by regulators, ignition, or corrosion</li>
            <li>✅ Weather-related wear on outdoor controls, wiring, fasteners, and burner assemblies</li>
            <li>✅ Parts-availability differences between legacy indoor cooktops and current outdoor products</li>
          </ul>
          <h3>How We Fix These DCS Cooktop Issues</h3>
          <p>We identify the DCS platform first, then test burners, gas systems, spark components, valves, regulators, griddle controls, wiring, controls, and outdoor ventilation depending on the model.</p>
        </>
      )
    },
    {
      id: "twin-eagles-outdoor-cooktop-repair",
      title: "Twin Eagles Outdoor Cooktop Repair",
      heading: "Twin Eagles Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/twin-eagles-outdoor-cooktop-repair.webp",*/
      alt: "Twin Eagles outdoor cooktop repair technician servicing a premium outdoor burner",
      description: (
        <>
          <p>We provide <strong>Twin Eagles outdoor cooktop repair</strong> for power burners, side burners, built-in outdoor burner stations, searing modules, and premium outdoor-kitchen cooking surfaces. Twin Eagles service often involves gas delivery, ignition, infrared components, controls, lighting, ventilation, and outdoor exposure.</p>
          <h3>Twin Eagles Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Power burners, side burners, or searing sections with ignition and flame-stability problems</li>
            <li>✅ Gas valves, regulators, igniters, or burner ports causing weak or uneven output</li>
            <li>✅ Infrared or high-heat sections failing to reach expected temperature</li>
            <li>✅ Control knobs, lighting, switches, or wiring issues from outdoor exposure</li>
            <li>✅ Ventilation and enclosure-clearance concerns in built-in outdoor kitchens</li>
            <li>✅ Corrosion, moisture exposure, and seasonal maintenance needs around burners and controls</li>
          </ul>
          <h3>How We Fix These Twin Eagles Outdoor Cooktop Issues</h3>
          <p>We inspect gas delivery, burner output, infrared heat, ignition, regulators, valves, lighting, controls, airflow, enclosure ventilation, and corrosion-prone areas so the outdoor cooking surface performs safely.</p>
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
