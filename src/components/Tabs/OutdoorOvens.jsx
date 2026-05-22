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
      id: "kalamazoo-outdoor-oven-repair",
      title: "Kalamazoo Outdoor Oven Repair",
      heading: "Kalamazoo Outdoor Oven Repair",
      /*img: "/oven-repair/kalamazoo-outdoor-oven-repair.webp",*/
      alt: "Kalamazoo outdoor oven repair technician servicing a luxury pizza oven",
      description: (
        <>
          <p>
            Our <strong>Kalamazoo outdoor oven repair</strong> service covers Kalamazoo Artisan Fire Pizza Ovens, hybrid fire outdoor cooking systems, built-in outdoor kitchens, and premium gas-fired outdoor oven installations. These ovens operate at high temperatures and are affected by gas delivery, refractory surfaces, ventilation, and weather exposure.
          </p>
  
          <h3>Kalamazoo Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The pizza oven lights but does not reach high temperature or recover heat quickly.</li>
            <li>Burners, igniters, regulators, gas valves, or flame patterns may need service.</li>
            <li>Refractory stone or deck heat may become uneven after heavy use.</li>
            <li>Outdoor kitchen enclosure ventilation, gas-line sizing, and clearance can affect performance.</li>
            <li>Weather exposure can affect controls, fasteners, burners, and thermometer accuracy.</li>
          </ul>
  
          <h3>How We Repair Kalamazoo Outdoor Ovens</h3>
          <p>
            We inspect gas delivery, burner output, ignition, regulators, refractory surfaces, ventilation, and weather-related wear so the oven can safely reach and hold high cooking temperatures.
          </p>
        </>
      )
    },
  
    {
      id: "lynx-outdoor-oven-repair",
      title: "Lynx Outdoor Oven Repair",
      heading: "Lynx Outdoor Oven Repair",
      /*img: "/oven-repair/lynx-outdoor-oven-repair.webp",*/
      alt: "Lynx Napoli outdoor oven repair technician servicing a luxury pizza oven",
      description: (
        <>
          <p>
            We provide <strong>Lynx outdoor oven repair</strong> for Lynx Napoli Outdoor Oven models, built-in outdoor ovens, countertop pizza ovens, freestanding cart installations, and luxury outdoor kitchen cooking systems. Lynx Napoli ovens require careful diagnosis of infrared heat, refractory surfaces, gas delivery, and outdoor installation conditions.
          </p>
  
          <h3>Lynx Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The Napoli oven does not light consistently or does not reach pizza-baking temperature.</li>
            <li>Infrared burner, igniter, regulator, gas valve, or flame pattern issues may reduce heat output.</li>
            <li>The pizza stone may heat unevenly or recover slowly between cooks.</li>
            <li>Cart-mounted and built-in installations can behave differently because of gas supply and airflow.</li>
            <li>Outdoor corrosion may affect burners, fasteners, lights, controls, or thermometers.</li>
          </ul>
  
          <h3>How We Repair Lynx Outdoor Ovens</h3>
          <p>
            We test infrared heat output, gas pressure, ignition, airflow, refractory surfaces, burner condition, and installation clearances before recommending parts or adjustment.
          </p>
        </>
      )
    },
  
    {
      id: "alfresco-outdoor-oven-repair",
      title: "Alfresco Outdoor Oven Repair",
      heading: "Alfresco Outdoor Oven Repair",
      /*img: "/oven-repair/alfresco-outdoor-oven-repair.webp",*/
      alt: "Alfresco outdoor pizza oven repair technician servicing a built-in oven",
      description: (
        <>
          <p>
            Our <strong>Alfresco outdoor oven repair</strong> service covers Alfresco Pizza Oven Plus, built-in outdoor pizza ovens, countertop pizza ovens, and premium outdoor kitchen oven installations. Alfresco ovens are designed for pizza, baking, roasting, searing, and broiling, so burner output and insulation are critical.
          </p>
  
          <h3>Alfresco Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Pizza Oven Plus may not light or may not reach high temperature.</li>
            <li>Rear burner, infrared hearth, igniter, gas valve, or regulator issues can weaken heat output.</li>
            <li>The hearth or ceramic ceiling surface may heat unevenly.</li>
            <li>Door, thermometer, gasket, insulation, or control issues may cause temperature swings.</li>
            <li>Outdoor corrosion, ventilation, and clearance problems can affect built-in installations.</li>
          </ul>
  
          <h3>How We Repair Alfresco Outdoor Ovens</h3>
          <p>
            We inspect burner output, infrared heat, hearth performance, gas pressure, ignition, insulation, ventilation, controls, and weather-exposed parts to restore dependable outdoor oven performance.
          </p>
        </>
      )
    },
  
    {
      id: "fire-magic-outdoor-oven-repair",
      title: "Fire Magic Outdoor Oven Repair",
      heading: "Fire Magic Outdoor Oven Repair",
      /*img: "/oven-repair/fire-magic-outdoor-oven-repair.webp",*/
      alt: "Fire Magic outdoor pizza oven repair technician servicing a built-in oven",
      description: (
        <>
          <p>
            We provide <strong>Fire Magic outdoor oven repair</strong> for Fire Magic built-in pizza ovens, Aurora pizza ovens, Echelon outdoor pizza ovens, black glass outdoor oven models, and luxury outdoor kitchen cooking appliances. Fire Magic ovens may include thermostatic controls, electronic ignition, ceramic glass doors, pizza stones, baking racks, and smart temperature features.
          </p>
  
          <h3>Fire Magic Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The outdoor oven lights but shuts off or swings in temperature.</li>
            <li>Thermostatic control, electronic ignition, flame sensing, or gas valve issues may interrupt heating.</li>
            <li>Pizza stone, baking rack, ceramic glass door, or gasket condition may affect heat retention.</li>
            <li>Control panel, smart feature, wiring, or power supply problems may appear on newer models.</li>
            <li>Outdoor corrosion and enclosure clearance can affect safety and performance.</li>
          </ul>
  
          <h3>How We Repair Fire Magic Outdoor Ovens</h3>
          <p>
            We test ignition, flame sensing, gas delivery, thermostats, controls, wiring, ceramic glass, stone surfaces, and built-in enclosure conditions so the oven performs safely outdoors.
          </p>
        </>
      )
    },
  
    {
      id: "dcs-oven-repair",
      title: "DCS Oven Repair",
      heading: "DCS Oven Repair",
      /*img: "/oven-repair/dcs-oven-repair.webp",*/
      alt: "DCS oven repair technician servicing a premium oven or outdoor cooking appliance",
      description: (
        <>
          <p>
            Our <strong>DCS oven repair</strong> service supports legacy DCS wall ovens, DCS cooking appliances, and DCS outdoor kitchen systems used for roasting, baking, rotisserie cooking, and high-heat outdoor cooking. DCS diagnosis depends on whether the appliance is an indoor legacy oven, a range oven, or part of an outdoor cooking setup.
          </p>
  
          <h3>DCS Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Legacy DCS wall ovens may fail in bake, broil, fan bake, pizza bake, self-clean, or door-lock modes.</li>
            <li>Older indoor ovens may need sensor, relay, element, fan, or control diagnosis.</li>
            <li>Outdoor DCS systems may lose roasting or rotisserie heat because of burner, regulator, ignition, or airflow issues.</li>
            <li>Infrared burner and grill-lid heat retention problems can affect oven-style cooking outdoors.</li>
            <li>Parts availability differs between legacy indoor ovens and current outdoor cooking products.</li>
          </ul>
  
          <h3>How We Repair DCS Ovens</h3>
          <p>
            We identify the DCS platform first, then test heating elements, gas systems, sensors, relays, fans, ignition, regulators, rotisserie components, and outdoor ventilation depending on the model.
          </p>
        </>
      )
    },
    {
      id: "twin-eagles-outdoor-oven-repair",
      title: "Twin Eagles Outdoor Oven Repair",
      heading: "Twin Eagles Outdoor Oven Repair",
      /*img: "/oven-repair/twin-eagles-outdoor-oven-repair.webp",*/
      alt: "Twin Eagles outdoor oven repair technician servicing a premium outdoor cooking appliance",
      description: (
        <>
          <p>
            We provide <strong>Twin Eagles outdoor oven repair</strong> for premium outdoor cooking systems used for baking, roasting, rotisserie cooking, searing, pizza-style cooking, and high-heat outdoor kitchen performance. Twin Eagles service often involves gas delivery, infrared components, rotisserie systems, lighting, controls, and outdoor exposure.
          </p>
  
          <h3>Twin Eagles Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Infrared burners, rotisserie burners, or searing zones may lose strong heat output.</li>
            <li>Gas valves, regulators, igniters, burners, or flame stability may need service.</li>
            <li>Pizza-stone, roasting, or oven-style heat performance may decline inside outdoor cooking systems.</li>
            <li>Control knobs, thermometers, wiring, and lighting may fail from outdoor exposure.</li>
            <li>Ventilation and enclosure clearance can affect performance in built-in outdoor kitchens.</li>
          </ul>
  
          <h3>How We Repair Twin Eagles Outdoor Ovens</h3>
          <p>
            We inspect gas delivery, burner output, infrared heat, ignition, rotisserie components, airflow, enclosure ventilation, wiring, lighting, and corrosion-prone areas so the outdoor cooking system performs safely and consistently.
          </p>
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
