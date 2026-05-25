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
      id: "kalamazoo-outdoor-range-repair",
      title: "Kalamazoo Outdoor Range Repair",
      heading: "Kalamazoo Outdoor Range Repair",
      /*img: "/range-repair/kalamazoo-outdoor-range-repair.webp",*/
      alt: "Kalamazoo outdoor range repair technician servicing a luxury outdoor cooking station",
      description: (
        <>
          <p>Our <strong>Kalamazoo outdoor range repair</strong> service covers Kalamazoo outdoor cooking stations, hybrid fire grills, power burners, side burners, pizza ovens, built-in outdoor kitchens, and high-heat luxury cooking systems. Outdoor range-style systems are affected by gas delivery, ventilation, weather exposure, and refractory or stainless components.</p>
          <h3>Kalamazoo Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Hybrid fire burners, power burners, or side burners with weak flame or ignition delay</li>
            <li>✅ Artisan Fire Pizza Oven burner, regulator, gas valve, and heat-recovery problems</li>
            <li>✅ Refractory stone or high-temperature surface heat imbalance</li>
            <li>✅ Outdoor kitchen enclosure ventilation, clearance, and gas-line sizing issues</li>
            <li>✅ Weather exposure, corrosion, thermometer, and control wear</li>
            <li>✅ Hybrid cooking systems where grill, burner, and oven functions interact</li>
          </ul>
          <h3>How We Fix These Kalamazoo Outdoor Range Issues</h3>
          <p>We inspect gas delivery, burner output, ignition, regulators, refractory heat surfaces, ventilation, weather-related wear, and outdoor enclosure conditions so the cooking station operates safely.</p>
        </>
      )
    },
    {
      id: "lynx-outdoor-range-repair",
      title: "Lynx Outdoor Range Repair",
      heading: "Lynx Outdoor Range Repair",
      /*img: "/range-repair/lynx-outdoor-range-repair.webp",*/
      alt: "Lynx outdoor range repair technician servicing a luxury outdoor cooking appliance",
      description: (
        <>
          <p>We provide <strong>Lynx outdoor range repair</strong> for Lynx built-in grills, side burners, power burners, Napoli Outdoor Ovens, freestanding carts, and luxury outdoor kitchen cooking systems. Lynx outdoor range systems require careful diagnosis of infrared burners, ignition, gas pressure, ventilation, and weather exposure.</p>
          <h3>Lynx Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Trident or infrared burners with weak output, ignition issues, or uneven heat</li>
            <li>✅ Napoli oven infrared burner, regulator, gas valve, or pizza stone heat imbalance</li>
            <li>✅ Side burner or power burner flame instability and delayed ignition</li>
            <li>✅ Cart-mounted versus built-in installation problems affecting gas supply and airflow</li>
            <li>✅ Weather-related corrosion around burners, fasteners, and control areas</li>
            <li>✅ Ventilation and clearance issues inside custom outdoor kitchen islands</li>
          </ul>
          <h3>How We Fix These Lynx Outdoor Range Issues</h3>
          <p>We test infrared heat output, gas pressure, ignition, burner assemblies, regulators, airflow, refractory surfaces, and installation clearances before recommending parts or adjustment.</p>
        </>
      )
    },
    {
      id: "alfresco-outdoor-range-repair",
      title: "Alfresco Outdoor Range Repair",
      heading: "Alfresco Outdoor Range Repair",
      /*img: "/range-repair/alfresco-outdoor-range-repair.webp",*/
      alt: "Alfresco outdoor range repair technician servicing a built-in outdoor cooking station",
      description: (
        <>
          <p>Our <strong>Alfresco outdoor range repair</strong> service covers Alfresco grills, side burners, Versa Power burners, Pizza Oven Plus, sear zones, rotisserie systems, and premium outdoor kitchen installations. Alfresco cooking systems depend on strong gas output, ignition reliability, insulation, and enclosure ventilation.</p>
          <h3>Alfresco Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Pizza Oven Plus rear burner, infrared hearth, igniter, and gas-valve issues</li>
            <li>✅ Versa Power or side burners not reaching proper high-output cooking temperature</li>
            <li>✅ Sear zone, rotisserie, or grill burner ignition and flame stability problems</li>
            <li>✅ Uneven heat from the hearth, ceramic ceiling surface, or burner assembly</li>
            <li>✅ Outdoor corrosion and moisture exposure around ignition and burner components</li>
            <li>✅ Built-in enclosure ventilation, clearance, regulator, or gas pressure issues</li>
          </ul>
          <h3>How We Fix These Alfresco Outdoor Range Issues</h3>
          <p>We inspect burner output, infrared heat, hearth performance, gas pressure, ignition, regulators, insulation, rotisserie systems, ventilation, and weather-exposed parts.</p>
        </>
      )
    },
    {
      id: "fire-magic-outdoor-range-repair",
      title: "Fire Magic Outdoor Range Repair",
      heading: "Fire Magic Outdoor Range Repair",
      /*img: "/range-repair/fire-magic-outdoor-range-repair.webp",*/
      alt: "Fire Magic outdoor range repair technician servicing a built-in outdoor cooking appliance",
      description: (
        <>
          <p>We provide <strong>Fire Magic outdoor range repair</strong> for Fire Magic grills, power burners, side burners, Aurora and Echelon pizza ovens, outdoor cooking stations, and built-in luxury outdoor kitchens. Fire Magic systems may include thermostatic controls, electronic ignition, flame sensing, ceramic glass, and smart features.</p>
          <h3>Fire Magic Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Power burner, side burner, or grill burner ignition and flame stability issues</li>
            <li>✅ Outdoor pizza oven thermostatic control, electronic ignition, flame rectification, or gas valve problems</li>
            <li>✅ Temperature swing problems when the thermostat, sensor, or burner output is inconsistent</li>
            <li>✅ Control panel, smart feature, wiring, or power-supply problems on newer models</li>
            <li>✅ Outdoor corrosion around burners, wiring, fasteners, and control housings</li>
            <li>✅ Ventilation and clearance issues inside outdoor kitchen enclosures</li>
          </ul>
          <h3>How We Fix These Fire Magic Outdoor Range Issues</h3>
          <p>We test ignition, flame sensing, gas delivery, thermostats, controls, wiring, burners, regulators, ceramic glass, and built-in enclosure conditions so the outdoor range system performs safely.</p>
        </>
      )
    },
    {
      id: "dcs-range-repair",
      title: "DCS Range Repair",
      heading: "DCS Range Repair",
      /*img: "/range-repair/dcs-range-repair.webp",*/
      alt: "DCS range repair technician servicing a premium range or outdoor cooking appliance",
      description: (
        <>
          <p>Our <strong>DCS range repair</strong> service supports legacy DCS indoor ranges, DCS wall ovens, DCS gas cooking appliances, and DCS outdoor kitchen systems used for roasting, baking, grilling, searing, and rotisserie cooking. DCS diagnosis depends on whether the appliance is an indoor legacy range or part of an outdoor cooking setup.</p>
          <h3>DCS Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Legacy DCS range oven bake, broil, fan bake, door lock, and self-clean issues</li>
            <li>✅ Top burner ignition, gas valve, burner, and flame stability problems</li>
            <li>✅ Temperature sensor, relay, element, fan, and control faults on older indoor DCS units</li>
            <li>✅ Outdoor grill-based roasting, baking, or rotisserie heat problems</li>
            <li>✅ Infrared burner, regulator, ignition, and weather-related outdoor issues</li>
            <li>✅ Parts availability differences between legacy indoor ranges and current outdoor cooking products</li>
          </ul>
          <h3>How We Fix These DCS Range Issues</h3>
          <p>We identify the DCS platform first, then test burners, heating elements, gas systems, sensors, relays, fans, ignition, regulators, controls, and outdoor ventilation depending on the model.</p>
        </>
      )
    },
    {
      id: "twin-eagles-outdoor-range-repair",
      title: "Twin Eagles Outdoor Range Repair",
      heading: "Twin Eagles Outdoor Range Repair",
      /*img: "/range-repair/twin-eagles-outdoor-range-repair.webp",*/
      alt: "Twin Eagles outdoor range repair technician servicing a premium outdoor cooking appliance",
      description: (
        <>
          <p>We provide <strong>Twin Eagles outdoor range repair</strong> for premium outdoor cooking systems used for grilling, searing, side-burner cooking, rotisserie cooking, baking, roasting, and pizza-style high-heat performance. Twin Eagles service often involves gas delivery, infrared components, ignition, lighting, rotisserie systems, and outdoor exposure.</p>
          <h3>Twin Eagles Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Infrared burner, rotisserie burner, searing zone, and high-heat cooking performance issues</li>
            <li>✅ Gas valve, regulator, igniter, burner, and flame-stability problems</li>
            <li>✅ Pizza-stone, roasting, or oven-style heat performance problems inside outdoor cooking systems</li>
            <li>✅ Control knob, thermometer, lighting, and wiring issues from outdoor exposure</li>
            <li>✅ Ventilation and enclosure clearance concerns in built-in outdoor kitchens</li>
            <li>✅ Corrosion, moisture exposure, and seasonal maintenance needs around burners and controls</li>
          </ul>
          <h3>How We Fix These Twin Eagles Outdoor Range Issues</h3>
          <p>We inspect gas delivery, burner output, infrared heat, ignition, rotisserie components, lighting, controls, airflow, enclosure ventilation, and corrosion-prone areas so the outdoor cooking system performs safely.</p>
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
