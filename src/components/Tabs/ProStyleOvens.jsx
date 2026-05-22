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
      id: "american-range-oven-repair",
      title: "American Range Oven Repair",
      heading: "American Range Oven Repair",
      /*img: "/oven-repair/american-range-oven-repair.webp",*/
      alt: "American Range oven repair technician servicing a pro-style range oven",
      description: (
        <>
          <p>
            We provide <strong>American Range oven repair</strong> for Performer Series, Cuisine Series, Legend Series, Medallion Series, residential pro-style ranges, wall ovens, and commercial-style cooking equipment used in private homes and chef kitchens. American Range ovens are built around heavy-duty gas systems, high-output cooking, and professional oven cavities.
          </p>
  
          <h3>American Range Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The gas oven glows or clicks but does not ignite reliably.</li>
            <li>Heavy-use ovens lose heat recovery after the door is opened repeatedly.</li>
            <li>Convection fan wear or airflow restriction causes uneven browning.</li>
            <li>Door gaskets, hinges, latches, and broiler components wear from high-temperature use.</li>
            <li>Residential and commercial-style American Range units may use different parts and service access.</li>
          </ul>
  
          <h3>How We Repair American Range Ovens</h3>
          <p>
            We test gas pressure, igniter amp draw, bake burner performance, thermostats, convection fans, broiler systems, door seals, and heat recovery. We also confirm whether the unit is residential, commercial-style, or true commercial equipment before ordering parts.
          </p>
        </>
      )
    },
  
    {
      id: "bluestar-oven-repair",
      title: "BlueStar Oven Repair",
      heading: "BlueStar Oven Repair",
      /*img: "/oven-repair/bluestar-oven-repair.webp",*/
      alt: "BlueStar oven repair technician servicing a pro-style range oven",
      description: (
        <>
          <p>
            Our <strong>BlueStar oven repair</strong> service covers Platinum Series, RNB Series, RCS Series, Precious Metals, gas ranges, dual fuel ranges, and built-in wall ovens. BlueStar ovens are known for pro-style open-burner cooking, powerful broilers, convection performance, and custom color finishes.
          </p>
  
          <h3>BlueStar Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The infrared broiler becomes weak, uneven, or difficult to ignite.</li>
            <li>The bake burner may light slowly, cycle poorly, or fail because of igniter or safety-valve issues.</li>
            <li>Convection fans may become noisy or weak inside the professional-style oven cavity.</li>
            <li>Heavy doors, hinges, kick plates, and gaskets can affect heat retention over time.</li>
            <li>Custom color panels and enamel finishes require careful handling during repair.</li>
          </ul>
  
          <h3>How We Repair BlueStar Ovens</h3>
          <p>
            We inspect the broiler system, bake burner, igniter, gas valve, thermostat, convection fan, door seal, and hinge alignment. We also protect custom panels and verify the exact BlueStar series before matching parts.
          </p>
        </>
      )
    },
  
    {
      id: "fivestar-oven-repair",
      title: "FiveStar Oven Repair",
      heading: "FiveStar Oven Repair",
      /*img: "/oven-repair/fivestar-oven-repair.webp",*/
      alt: "FiveStar oven repair technician servicing a professional range oven",
      description: (
        <>
          <p>
            We service <strong>FiveStar oven repair</strong> for gas ranges, dual fuel ranges, side-by-side oven layouts, sealed burner ranges, griddle/grill configurations, and legacy FiveStar cooking appliances. Many FiveStar ranges have older controls, separate oven cavities, and parts that must be matched carefully.
          </p>
  
          <h3>FiveStar Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>One side of a side-by-side range heats correctly while the other side does not.</li>
            <li>Gas oven flame may drop out, light slowly, or fail because of thermocouple, igniter, or safety-valve issues.</li>
            <li>Electric oven sections may trip power or stop heating due to elements, selectors, thermostats, or wiring.</li>
            <li>Older knobs, doors, hinges, broilers, and gaskets can become harder to source.</li>
            <li>Large ranges with griddle or grill sections may need heat and gas systems checked together.</li>
          </ul>
  
          <h3>How We Repair FiveStar Ovens</h3>
          <p>
            We test each oven cavity independently and confirm whether the issue is gas, electric, control-related, or door-related. For older FiveStar units, we verify parts compatibility before replacing components.
          </p>
        </>
      )
    },
  
    {
      id: "thor-oven-repair",
      title: "Thor Oven Repair",
      heading: "Thor Kitchen Oven Repair",
      /*img: "/oven-repair/thor-oven-repair.webp",*/
      alt: "Thor Kitchen oven repair technician servicing a professional range oven",
      description: (
        <>
          <p>
            We provide <strong>Thor Kitchen oven repair</strong> for professional gas ranges, dual fuel ranges, electric ranges, induction ranges, wall ovens, double ovens, and pro-style cooking suites. Thor ovens often include electronic ignition, convection fans, infrared broilers, air fry modes, and stainless commercial-style construction.
          </p>
  
          <h3>Thor Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven does not ignite reliably even though the cooktop burners still work.</li>
            <li>Air fry or convection modes run but do not circulate heat evenly.</li>
            <li>Displays, relays, or selector controls may fail on newer electronic models.</li>
            <li>Infrared broilers or broil elements may stop producing strong top heat.</li>
            <li>Parts must be matched carefully because Thor gas, dual fuel, electric, and induction platforms differ.</li>
          </ul>
  
          <h3>How We Repair Thor Ovens</h3>
          <p>
            We confirm the fuel type and platform first, then test ignition, gas valves, elements, fans, relays, sensors, selector controls, air fry circuits, and door seals so the repair matches the exact Thor model.
          </p>
        </>
      )
    },
  
    {
      id: "forno-oven-repair",
      title: "Forno Oven Repair",
      heading: "Forno Oven Repair",
      /*img: "/oven-repair/forno-oven-repair.webp",*/
      alt: "Forno oven repair technician servicing a modern wall oven",
      description: (
        <>
          <p>
            Our <strong>Forno oven repair</strong> service covers Forno ranges, dual fuel ranges, gas ranges, induction ranges, Vomero wall ovens, single wall ovens, double wall ovens, and convection ovens. Forno units often require careful model verification because product lines, controls, and replacement parts can vary significantly by series.
          </p>
  
          <h3>Forno Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Large oven cavities may heat unevenly if the sensor, fan, thermostat, or control is off.</li>
            <li>Convection fans may become noisy, weak, or fail to move enough air.</li>
            <li>Door locks, gaskets, and self-clean components may create problems on built-in oven models.</li>
            <li>Gas and dual fuel ranges may need ignition, valve, or burner diagnosis.</li>
            <li>Exact model numbers matter because parts can vary across Forno series and generations.</li>
          </ul>
  
          <h3>How We Repair Forno Ovens</h3>
          <p>
            We verify the model and series, then test airflow, sensors, controls, locks, gas ignition, heating circuits, fans, and door sealing. Accurate parts matching is especially important before repair work begins.
          </p>
        </>
      )
    },
  
    {
      id: "garland-oven-repair",
      title: "Garland Oven Repair",
      heading: "Garland Oven Repair",
      /*img: "/oven-repair/garland-oven-repair.webp",*/
      alt: "Garland commercial oven repair technician servicing a convection oven",
      description: (
        <>
          <p>
            We provide <strong>Garland oven repair</strong> for commercial ranges, Master Series heavy-duty ranges, convection ovens, gas ovens, electric ovens, and restaurant-style equipment installed in private estates, chef kitchens, event spaces, and commercial kitchens. Garland equipment is built for high-volume cooking, so repair often centers on heat recovery, gas flow, fan systems, and safety controls.
          </p>
  
          <h3>Garland Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven loses heat recovery after repeated door openings.</li>
            <li>Convection fans, belts, door switches, or timers wear from heavy use.</li>
            <li>Gas ovens may have pilot, ignition, safety-valve, thermostat, or burner issues.</li>
            <li>Electric ovens may develop element, relay, contactor, or high-load electrical faults.</li>
            <li>Door gaskets, hinges, latches, and oven cavities can wear faster in demanding environments.</li>
          </ul>
  
          <h3>How We Repair Garland Ovens</h3>
          <p>
            We inspect fan motors, belts, gas flow, pilots, burners, thermostats, contactors, relays, door switches, gaskets, and hinges. We also confirm whether the installation is residential, commercial-style, or true commercial before sourcing parts.
          </p>
        </>
      )
    },
  
    {
      id: "zline-oven-repair",
      title: "ZLINE Oven Repair",
      heading: "ZLINE Oven Repair",
      /*img: "/oven-repair/zline-oven-repair.webp",*/
      alt: "ZLINE oven repair technician servicing a professional wall oven",
      description: (
        <>
          <p>
            Our <strong>ZLINE oven repair</strong> service covers ZLINE gas ranges, dual fuel ranges, induction ranges, single wall ovens, double wall ovens, Autograph Edition ovens, and pro-style cooking appliances. ZLINE ovens often combine decorative finishes, true convection, air fry functions, self-clean systems, and modern controls.
          </p>
  
          <h3>ZLINE Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Air fry or true convection mode runs but does not cook evenly.</li>
            <li>Self-clean or door lock functions may fail on wall ovens and newer range ovens.</li>
            <li>Gas range ovens may need igniter, safety-valve, bake burner, or broiler diagnosis.</li>
            <li>Autograph Edition handles, brass accents, and decorative trim need careful protection during service.</li>
            <li>Gas, dual fuel, induction, and wall oven models may use different controls and parts.</li>
          </ul>
  
          <h3>How We Repair ZLINE Ovens</h3>
          <p>
            We test the exact failed mode, including bake, broil, convection, air fry, self-clean, and gas ignition. We inspect fans, sensors, relays, locks, elements, valves, and decorative trim before completing the repair.
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
