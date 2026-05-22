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
      id: "aga-oven-repair",
      title: "AGA Oven Repair",
      heading: "AGA Oven Repair",
      img: "/oven-repair/aga-oven-repair.webp",
      alt: "AGA oven repair technician servicing a luxury AGA cooker",
      description: (
        <>
          <p>
            We provide <strong>AGA oven repair</strong> for traditional cast-iron AGA cookers, AGA Total Control, AGA Dual Control, AGA eR7, AGA R7, AGA Mercury, and AGA Elise range ovens. AGA ovens are not serviced like ordinary wall ovens because many models depend on stored radiant heat, insulated cast-iron cavities, multiple heat zones, and model-specific temperature controls.
          </p>
  
          <h3>AGA Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The roasting, baking, simmering, or warming oven no longer feels as strong as it used to.</li>
            <li>The cooker takes longer to recover heat after the doors have been opened.</li>
            <li>One oven cavity performs differently from the others, even though the cooker appears to be running.</li>
            <li>Newer Total Control, Dual Control, eR7, or R7 models may show control or heat-zone problems instead of simple element failure.</li>
            <li>Older AGA cookers may need careful parts identification because fuel conversions, age, and model generation can change the repair path.</li>
          </ul>
  
          <h3>How We Repair AGA Ovens</h3>
          <p>
            We check heat retention, oven-zone temperature behavior, door rope and gasket condition, thermostats, heating elements, control modules, thermal limits, ignition components where applicable, and model-specific wiring. For traditional AGA cookers, we focus on restoring radiant heat performance and proper door sealing instead of treating the unit like a standard oven.
          </p>
        </>
      )
    },
  
    {
      id: "bertazzoni-oven-repair",
      title: "Bertazzoni Oven Repair",
      heading: "Bertazzoni Oven Repair",
      /*img: "/oven-repair/bertazzoni-oven-repair.webp",*/
      alt: "Bertazzoni oven repair technician servicing an Italian luxury range oven",
      description: (
        <>
          <p>
            Our <strong>Bertazzoni oven repair</strong> service covers Professional Series, Master Series, Heritage Series, built-in wall ovens, gas range ovens, dual fuel range ovens, induction range ovens, speed ovens, and convection oven combinations. Bertazzoni ovens often combine Italian styling with dual convection, mechanical selectors, electronic controls, and series-specific parts.
          </p>
  
          <h3>Bertazzoni Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven preheats but does not hold the selected temperature accurately.</li>
            <li>Dual convection fans become noisy, slow, or inconsistent during baking.</li>
            <li>Gas range ovens may click, delay ignition, or heat weakly even when the cooktop still works.</li>
            <li>Selector knobs, temperature knobs, or function controls may feel loose, inconsistent, or unresponsive.</li>
            <li>Built-in Bertazzoni ovens may develop cooling fan or cabinet heat issues when installed tightly into cabinetry.</li>
          </ul>
  
          <h3>How We Repair Bertazzoni Ovens</h3>
          <p>
            We identify the exact Bertazzoni series before replacing parts, then test the igniter, gas valve, oven sensor, thermostat, selector switch, convection fans, relay board, cooling fan, and door gasket. Because Professional, Master, and Heritage Series parts may differ, we verify compatibility before ordering components.
          </p>
        </>
      )
    },
  
    {
      id: "fulgor-milano-oven-repair",
      title: "Fulgor Milano Oven Repair",
      heading: "Fulgor Milano Oven Repair",
      /*img: "/oven-repair/fulgor-milano-oven-repair.webp",*/
      alt: "Fulgor Milano oven repair technician working on a premium Italian oven",
      description: (
        <>
          <p>
            We service <strong>Fulgor Milano oven repair</strong> for Sofia professional ranges, Sofia induction ranges, Fulgor Milano wall ovens, combi ovens, Distinto ovens, and dual fuel or all-gas range ovens. These ovens often require attention to European-style controls, cooling airflow, meat probes, touch displays, and model-specific Italian parts.
          </p>
  
          <h3>Fulgor Milano Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven shuts off during cooking or does not maintain temperature under longer cooking cycles.</li>
            <li>The cooling fan runs unusually long, becomes noisy, or does not protect the surrounding cabinet from heat.</li>
            <li>Touch controls, relay boards, or selector controls may respond intermittently.</li>
            <li>Meat probe faults can interrupt cooking programs or make the oven behave as if a probe is connected.</li>
            <li>Sofia range ovens may need exact model verification before parts are ordered because components can vary by generation.</li>
          </ul>
  
          <h3>How We Repair Fulgor Milano Ovens</h3>
          <p>
            We test temperature sensors, relays, cooling fans, control boards, probe circuits, selector controls, bake and broil elements, gas ignition components, and cabinet ventilation. We also confirm the model and serial number carefully before sourcing Fulgor Milano parts.
          </p>
        </>
      )
    },
  
    {
      id: "gaggenau-oven-repair",
      title: "Gaggenau Oven Repair",
      heading: "Gaggenau Oven Repair",
      /*img: "/oven-repair/gaggenau-oven-repair.webp",*/
      alt: "Gaggenau oven repair technician servicing a luxury built-in oven",
      description: (
        <>
          <p>
            Our <strong>Gaggenau oven repair</strong> service is designed for 400 Series and 200 Series wall ovens, combi-steam ovens, combi-microwave ovens, warming drawers, and Gaggenau built-in cooking columns. These appliances are highly engineered and often need precise diagnosis of steam systems, drain filters, descaling condition, probes, ventilation, and electronic modules.
          </p>
  
          <h3>Gaggenau Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The combi-steam oven leaves water behind, drains slowly, rattles, or asks for cleaning/descaling more often.</li>
            <li>Steam performance becomes weak because the water path, pump, drain filter, or limescale buildup needs attention.</li>
            <li>The rotary selector, display, or touch controls stop responding correctly.</li>
            <li>A cooking column may run hot inside the cabinet if cooling airflow is restricted.</li>
            <li>Probe, door lock, sensor, or module faults can interrupt advanced cooking modes.</li>
          </ul>
  
          <h3>How We Repair Gaggenau Ovens</h3>
          <p>
            We inspect the steam generator, water tank system, pump, drain filter, descaling condition, probe circuit, door lock, sensors, cooling fan, and control electronics. On built-in Gaggenau cooking columns, we also check cabinet ventilation because heat and moisture management are critical.
          </p>
        </>
      )
    },
  
    {
      id: "ilve-oven-repair",
      title: "ILVE Oven Repair",
      heading: "ILVE Oven Repair",
      /*img: "/oven-repair/ilve-oven-repair.webp",*/
      alt: "ILVE oven repair technician servicing an Italian dual fuel range oven",
      description: (
        <>
          <p>
            We provide <strong>ILVE oven repair</strong> for Majestic, Nostalgie, Panoramagic, Professional Plus, and ILVE dual fuel or all-gas range ovens. ILVE ovens often include heavy doors, decorative finishes, brass burners, rotisserie systems, multiple cavities, and European multifunction oven controls.
          </p>
  
          <h3>ILVE Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven door does not sit evenly, does not close flush, or begins losing heat around the gasket.</li>
            <li>Large ILVE doors can become sensitive to hinge seating, leveling, gasket condition, or frame alignment.</li>
            <li>The main oven and secondary oven may heat differently because each cavity has separate airflow and controls.</li>
            <li>Rotisserie, interior light, selector switch, timer, or thermostat issues may appear before a full heating failure.</li>
            <li>Decorative trim, brass details, and custom colors require extra care during disassembly.</li>
          </ul>
  
          <h3>How We Repair ILVE Ovens</h3>
          <p>
            We inspect hinge engagement, door alignment, gasket contact, frame fit, thermostat response, selector switches, rotisserie components, igniters, gas valves, and heating elements. When a door issue is involved, we correct the mechanical fit first because poor sealing can make the oven seem like it has a temperature-control problem.
          </p>
        </>
      )
    },
  
    {
      id: "lacanche-oven-repair",
      title: "Lacanche Oven Repair",
      heading: "Lacanche Oven Repair",
      /*img: "/oven-repair/lacanche-oven-repair.webp",*/
      alt: "Lacanche oven repair technician servicing a French luxury range oven",
      description: (
        <>
          <p>
            Our <strong>Lacanche oven repair</strong> service supports French range models such as Cluny, Sully, Savigny, Volnay, Chagny, Cormatin, Citeaux, and custom Lacanche configurations. Lacanche ranges may include gas ovens, electric ovens, warming cupboards, simmer ovens, ambient cabinets, and custom cooktop combinations.
          </p>
  
          <h3>Lacanche Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>A gas oven flame drops out, lights slowly, or does not hold steady during baking.</li>
            <li>An electric oven cavity heats differently from the gas cavity or secondary oven.</li>
            <li>The warming cupboard or simmer oven no longer reaches the expected gentle heat.</li>
            <li>Heavy doors, hinges, and seals may affect heat retention over time.</li>
            <li>Custom configurations can make parts identification more complex than on standard ranges.</li>
          </ul>
  
          <h3>How We Repair Lacanche Ovens</h3>
          <p>
            We diagnose each Lacanche oven cavity separately, confirm whether the cavity is gas or electric, then inspect thermocouples, thermostats, safety valves, selectors, elements, door seals, and hinges. We also protect enamel, brass, chrome, and custom finishes during service.
          </p>
        </>
      )
    },
  
    {
      id: "la-cornue-oven-repair",
      title: "La Cornue Oven Repair",
      heading: "La Cornue Oven Repair",
      /*img: "/oven-repair/la-cornue-oven-repair.webp",*/
      alt: "La Cornue oven repair technician servicing a luxury French range oven",
      description: (
        <>
          <p>
            We specialize in <strong>La Cornue oven repair</strong> for Château, CornuFé, CornuChef, Grand Palais, Le Château 75, Château 90, Château 120, Château 150, Château 165, and other La Cornue range oven configurations. La Cornue ovens are known for vaulted oven cavities, natural convection, gas and electric oven options, and custom finishes.
          </p>
  
          <h3>La Cornue Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven bakes unevenly because the vaulted cavity moves heat differently than a standard fan-driven oven.</li>
            <li>Gas oven ignition may be delayed, weak, or shut off due to thermocouple or safety-valve issues.</li>
            <li>Electric cavities may develop selector, thermostat, element, relay, or wiring faults.</li>
            <li>Door gasket wear or hinge tension can cause heat loss and make the oven feel underpowered.</li>
            <li>CornuFé models may have indicator light, fan, calibration, or control issues that differ from Château models.</li>
          </ul>
  
          <h3>How We Repair La Cornue Ovens</h3>
          <p>
            We test each cavity by fuel type, inspect vaulted heat movement, verify gas safety components, check electric elements and controls, and evaluate door sealing. We work carefully around enamel, brass, chrome, polished metal, and custom color finishes.
          </p>
        </>
      )
    },
  
    {
      id: "miele-oven-repair",
      title: "Miele Oven Repair",
      heading: "Miele Oven Repair",
      /*img: "/oven-repair/miele-oven-repair.webp",*/
      alt: "Miele oven repair technician servicing a built-in speed or steam oven",
      description: (
        <>
          <p>
            We provide <strong>Miele oven repair</strong> for Generation 7000 ovens, M Touch ovens, steam ovens, combi-steam ovens, speed ovens, microwave combination ovens, convection ovens, and warming drawers. Miele ovens often need mode-specific diagnosis because steam, speed, convection, and automatic programs use different systems inside the same appliance stack.
          </p>
  
          <h3>Miele Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Steam ovens may show water intake, drain, descaling, or pump-related faults.</li>
            <li>Combi-steam ovens may stop steaming properly because of limescale, blocked nozzles, drain issues, or valve problems.</li>
            <li>Speed ovens may heat in convection mode but fail in microwave-assist or combination cooking.</li>
            <li>M Touch controls, relay boards, probes, sensors, or cooling fans may interrupt automatic programs.</li>
            <li>Stacked Miele oven installations may run hot if cabinet ventilation is restricted.</li>
          </ul>
  
          <h3>How We Repair Miele Ovens</h3>
          <p>
            We test the water path, drain system, pump, valves, descaling condition, sensors, probes, relays, fans, heating elements, and M Touch interface. For Miele steam and speed ovens, we verify each cooking mode separately instead of assuming the issue is a basic heating failure.
          </p>
        </>
      )
    },
  
    {
      id: "officine-gullo-oven-repair",
      title: "Officine Gullo Oven Repair",
      heading: "Officine Gullo Oven Repair",
      /*img: "/oven-repair/officine-gullo-oven-repair.webp",*/
      alt: "Officine Gullo oven repair technician servicing a bespoke luxury range",
      description: (
        <>
          <p>
            Our <strong>Officine Gullo oven repair</strong> service is designed for bespoke Italian ranges, custom cooking suites, professional ovens, and luxury kitchen installations. Officine Gullo appliances often combine handcrafted metal finishes, custom dimensions, commercial-style components, and made-to-order layouts.
          </p>
  
          <h3>Officine Gullo Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>One custom oven cavity performs differently from another because each section may use different controls or heat sources.</li>
            <li>Heavy doors, gaskets, hinges, and professional trim may need adjustment to maintain heat retention.</li>
            <li>Gas oven systems may develop flame stability, thermocouple, or safety-valve issues.</li>
            <li>Electric oven sections may need selector, thermostat, relay, element, or wiring diagnosis.</li>
            <li>Parts identification can require extra research because many installations are custom-built.</li>
          </ul>
  
          <h3>How We Repair Officine Gullo Ovens</h3>
          <p>
            We document the layout, fuel type, oven cavities, controls, access points, and custom finishes before repair. Then we test gas, electric, temperature, ventilation, and door systems while protecting brass, copper, nickel, stainless steel, and custom metalwork.
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
