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
      id: "american-range-range-repair",
      title: "American Range Repair",
      heading: "American Range Repair",
      /*img: "/range-repair/american-range-range-repair.webp",*/
      alt: "American Range repair technician servicing a pro-style range",
      description: (
        <>
          <p>We provide <strong>American Range repair</strong> for Performer Series, Cuisine Series, Legend Series, Medallion Series, residential pro-style ranges, griddles, charbroilers, rangetops, and commercial-style cooking equipment used in private homes and chef kitchens. American Range units are built for high-output cooking and heavy use.</p>
          <h3>American Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas oven ignition problems involving glow-bar igniters, bake burners, safety valves, or gas flow</li>
            <li>✅ High-output top burners with weak flame, delayed ignition, or uneven combustion</li>
            <li>✅ Thermostat and calibration concerns after years of heavy high-temperature cooking</li>
            <li>✅ Griddle or charbroiler heat recovery issues on larger pro-style models</li>
            <li>✅ Door gasket, hinge, latch, and cavity wear from frequent use</li>
            <li>✅ Parts differences between residential American Range units and commercial American Range equipment</li>
          </ul>
          <h3>How We Fix These American Range Issues</h3>
          <p>We test ignition amp draw, gas pressure, burner assemblies, oven thermostats, safety valves, fan systems, griddle controls, door seals, and heat recovery. We also confirm whether the unit is residential, commercial-style, or true commercial equipment.</p>
        </>
      )
    },
    {
      id: "bluestar-range-repair",
      title: "BlueStar Range Repair",
      heading: "BlueStar Range Repair",
      /*img: "/range-repair/bluestar-range-repair.webp",*/
      alt: "BlueStar range repair technician servicing a pro-style range",
      description: (
        <>
          <p>Our <strong>BlueStar range repair</strong> service covers Platinum Series, RNB Series, RCS Series, Precious Metals, gas ranges, dual fuel ranges, charbroilers, griddles, French tops, and pro-style range ovens. BlueStar ranges are known for high-output open burners, powerful broilers, heavy grates, and custom color finishes.</p>
          <h3>BlueStar Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Open burners with uneven flame from clogged ports, cap placement, gas pressure, or debris</li>
            <li>✅ Infrared broiler not igniting, producing weak heat, or failing during use</li>
            <li>✅ Gas oven bake burner, igniter, safety-valve, or thermostat problems</li>
            <li>✅ Convection fan noise, motor drag, or airflow issues inside professional-style oven cavities</li>
            <li>✅ Door gasket, hinge, kick plate, and heavy door alignment concerns</li>
            <li>✅ Custom color panel and enamel protection needs during range disassembly</li>
          </ul>
          <h3>How We Fix These BlueStar Range Issues</h3>
          <p>We inspect burner ports, gas valves, regulators, igniters, oven burners, infrared broilers, thermostats, convection fans, hinges, and door seals while protecting custom color panels and pro-style trim.</p>
        </>
      )
    },
    {
      id: "fivestar-range-repair",
      title: "FiveStar Range Repair",
      heading: "FiveStar Range Repair",
      /*img: "/range-repair/fivestar-range-repair.webp",*/
      alt: "FiveStar range repair technician servicing a professional range",
      description: (
        <>
          <p>We service <strong>FiveStar range repair</strong> for gas ranges, dual fuel ranges, sealed burner ranges, side-by-side oven layouts, griddle/grill configurations, and legacy FiveStar cooking appliances. FiveStar diagnosis often requires separating the gas cooktop, electric oven, gas oven, and secondary cavity systems.</p>
          <h3>FiveStar Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Side-by-side oven cavities cooking at different temperatures because each cavity uses separate controls or heat sources</li>
            <li>✅ Gas oven thermocouple, safety valve, igniter, and burner issues on older ranges</li>
            <li>✅ Electric oven sections with element, selector, thermostat, or wiring failures</li>
            <li>✅ Top burner ignition, sealed burner flame, griddle, or grill performance problems</li>
            <li>✅ Older door gasket, hinge, broiler, and control knob wear</li>
            <li>✅ Parts availability challenges on discontinued or less common FiveStar configurations</li>
          </ul>
          <h3>How We Fix These FiveStar Range Issues</h3>
          <p>We test each oven cavity independently, then inspect top burners, ignition, griddle or grill sections, thermocouples, gas valves, electrical circuits, selectors, thermostats, wiring, and legacy parts compatibility.</p>
        </>
      )
    },
    {
      id: "thor-range-repair",
      title: "Thor Range Repair",
      heading: "Thor Kitchen Range Repair",
      /*img: "/range-repair/thor-range-repair.webp",*/
      alt: "Thor Kitchen range repair technician servicing a professional range",
      description: (
        <>
          <p>We provide <strong>Thor Kitchen range repair</strong> for professional gas ranges, dual fuel ranges, electric ranges, induction ranges, griddle models, and commercial-style cooking suites. Thor ranges often combine stainless pro-style design with electronic ignition, convection ovens, infrared broilers, air fry modes, and modern controls.</p>
          <h3>Thor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burner ignition clicking, delayed lighting, or flame instability</li>
            <li>✅ Oven air fry or convection mode failures caused by fan, element, relay, or sensor faults</li>
            <li>✅ Infrared broiler or broil element not working on pro-style models</li>
            <li>✅ Display, selector, relay, or control-board issues on newer Thor ranges</li>
            <li>✅ Door gasket, hinge, and cooling airflow concerns on large stainless ranges</li>
            <li>✅ Parts matching differences between Thor gas, dual fuel, electric, and induction platforms</li>
          </ul>
          <h3>How We Fix These Thor Range Issues</h3>
          <p>We confirm the Thor fuel type first, then test burners, igniters, valves, oven elements, fans, relays, air fry circuits, sensors, selectors, door seals, and safety systems.</p>
        </>
      )
    },
    {
      id: "forno-range-repair",
      title: "Forno Range Repair",
      heading: "Forno Range Repair",
      /*img: "/range-repair/forno-range-repair.webp",*/
      alt: "Forno range repair technician servicing a modern range",
      description: (
        <>
          <p>Our <strong>Forno range repair</strong> service covers Forno gas ranges, dual fuel ranges, induction ranges, French-door range models, large-capacity oven ranges, and pro-style cooking appliances. Forno range service depends heavily on exact model verification because controls, parts, and cooking platforms vary by series.</p>
          <h3>Forno Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Large-capacity oven temperature drift from sensor, thermostat, fan, or control issues</li>
            <li>✅ Convection fan noise, weak airflow, or fan motor wear in range ovens</li>
            <li>✅ Gas burner ignition, valve, or flame pattern issues on pro-style tops</li>
            <li>✅ Door lock, gasket, hinge, and self-clean concerns on Forno oven cavities</li>
            <li>✅ Display, timer, selector, relay, or control faults depending on the model generation</li>
            <li>✅ Parts lookup challenges when the exact model and serial number are not confirmed</li>
          </ul>
          <h3>How We Fix These Forno Range Issues</h3>
          <p>We verify the model and series, then test gas burners, ignition, sensors, fans, controls, door locks, oven elements, gas valves, and safety systems before recommending replacement parts.</p>
        </>
      )
    },
    {
      id: "garland-range-repair",
      title: "Garland Range Repair",
      heading: "Garland Range Repair",
      /*img: "/range-repair/garland-range-repair.webp",*/
      alt: "Garland commercial range repair technician servicing a heavy-duty range",
      description: (
        <>
          <p>We provide <strong>Garland range repair</strong> for commercial ranges, Master Series heavy-duty ranges, convection oven bases, gas ranges, electric ranges, griddles, charbroilers, and restaurant-style equipment installed in chef kitchens, event spaces, estates, and commercial kitchens. Garland equipment is built for heavy use and fast heat recovery.</p>
          <h3>Garland Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners, pilots, gas valves, and safety controls wearing from repeated heavy use</li>
            <li>✅ Convection oven fan motor, belt, door switch, or timer problems</li>
            <li>✅ Gas oven pilot, ignition, thermostat, and burner issues</li>
            <li>✅ Electric oven element, contactor, relay, and high-load electrical faults</li>
            <li>✅ Griddle or charbroiler heat recovery problems during high-volume cooking</li>
            <li>✅ Door gasket, hinge, latch, and cavity wear from commercial-style use</li>
          </ul>
          <h3>How We Fix These Garland Range Issues</h3>
          <p>We inspect burners, pilots, gas flow, thermostats, relays, contactors, fan systems, griddle controls, charbroiler sections, door switches, and heavy-use wear points so the range can perform safely under demanding conditions.</p>
        </>
      )
    },
    {
      id: "zline-range-repair",
      title: "ZLINE Range Repair",
      heading: "ZLINE Range Repair",
      /*img: "/range-repair/zline-range-repair.webp",*/
      alt: "ZLINE range repair technician servicing a professional range",
      description: (
        <>
          <p>Our <strong>ZLINE range repair</strong> service covers ZLINE gas ranges, dual fuel ranges, induction ranges, Autograph Edition ranges, professional-style ranges, and range ovens with convection, air fry, self-clean, and decorative accent finishes. ZLINE repairs often involve both performance and finish-sensitive handling.</p>
          <h3>ZLINE Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Air fry and true convection failures caused by fan, element, sensor, or relay problems</li>
            <li>✅ Gas burners with weak ignition, uneven flame, or delayed lighting</li>
            <li>✅ Bake element, igniter, gas valve, relay, or sensor failure in the oven cavity</li>
            <li>✅ Door lock, self-clean, gasket, hinge, or cooling fan issues</li>
            <li>✅ Display, control board, selector knob, or timer problems</li>
            <li>✅ Autograph Edition handles, brass accents, and decorative trim requiring careful protection</li>
          </ul>
          <h3>How We Fix These ZLINE Range Issues</h3>
          <p>We test the exact failed cooking function, including burners, convection, air fry, broil, bake, self-clean, and induction. We also protect ZLINE handles, brass accents, and finish details during service.</p>
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
