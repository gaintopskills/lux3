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
      id: "aga-range-repair",
      title: "AGA Range Repair",
      heading: "AGA Range Repair",
      img: "/range-repair/aga-range-repair.webp",
      alt: "AGA range repair technician servicing a luxury AGA cooker",
      description: (
        <>
          <p>We provide <strong>AGA range repair</strong> for traditional cast-iron AGA cookers, AGA Total Control, AGA Dual Control, AGA eR7, AGA R7, AGA Mercury, AGA Elise, and AGA range-style cooking appliances. AGA ranges are different from ordinary ranges because many models combine radiant heat, insulated oven zones, hotplates, gas or electric cooking surfaces, and model-specific control systems.</p>
          <h3>AGA Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Boiling plate or simmering plate not recovering heat the way it used to</li>
            <li>✅ Roasting, baking, simmering, or warming ovens drifting out of their normal heat pattern</li>
            <li>✅ Total Control, Dual Control, eR7, or R7 zones not responding correctly</li>
            <li>✅ Gas burner ignition, flame stability, or gas regulation issues on AGA range models</li>
            <li>✅ Worn lid seals, door seals, rope gaskets, or insulation causing heat loss and slow recovery</li>
            <li>✅ Older AGA parts identification issues where fuel type, conversion history, and serial number matter</li>
          </ul>
          <h3>How We Fix These AGA Range Issues</h3>
          <p>Our technicians separate traditional cast-iron AGA diagnosis from modern AGA range diagnosis. We inspect hotplate zones, oven cavities, controls, thermostats, safety limits, ignition systems, seals, insulation, and heat-retention performance before recommending a repair path.</p>
        </>
      )
    },
    {
      id: "bertazzoni-range-repair",
      title: "Bertazzoni Range Repair",
      heading: "Bertazzoni Range Repair",
      /*img: "/range-repair/bertazzoni-range-repair.webp",*/
      alt: "Bertazzoni range repair technician servicing an Italian luxury range",
      description: (
        <>
          <p>Our <strong>Bertazzoni range repair</strong> service covers Professional Series, Master Series, Heritage Series, gas ranges, dual fuel ranges, induction ranges, and range ovens. Bertazzoni ranges combine Italian styling with brass burners, electronic ignition, oven selectors, convection systems, and series-specific components.</p>
          <h3>Bertazzoni Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Brass burner caps or bases not seated correctly, causing clicking, delayed ignition, or uneven flame</li>
            <li>✅ Oven temperature drift from thermostat, sensor, selector, or relay issues</li>
            <li>✅ Dual convection fan noise, weak airflow, or uneven baking on range oven models</li>
            <li>✅ Igniters clicking continuously after cleaning, spills, or moisture around the burner area</li>
            <li>✅ Knob, selector, or control-panel issues on Professional, Master, and Heritage Series units</li>
            <li>✅ Parts differences between Bertazzoni series that make exact model identification important</li>
          </ul>
          <h3>How We Fix These Bertazzoni Range Issues</h3>
          <p>We check burner cap seating, spark electrodes, ignition switches, spark modules, gas valves, oven thermostats, convection fans, selectors, sensors, and relay boards. For Bertazzoni ranges, we confirm the exact series before ordering parts.</p>
        </>
      )
    },
    {
      id: "fulgor-milano-range-repair",
      title: "Fulgor Milano Range Repair",
      heading: "Fulgor Milano Range Repair",
      /*img: "/range-repair/fulgor-milano-range-repair.webp",*/
      alt: "Fulgor Milano range repair technician servicing a premium Italian range",
      description: (
        <>
          <p>We service <strong>Fulgor Milano range repair</strong> needs for Sofia professional ranges, Sofia induction ranges, dual fuel ranges, all-gas ranges, and related built-in cooking systems. Fulgor Milano ranges often combine European controls, touch electronics, convection ovens, induction modules, cooling fans, and precision burner layouts.</p>
          <h3>Fulgor Milano Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Sofia gas burners producing uneven flame because of burner cap seating, clogged ports, or gas valve issues</li>
            <li>✅ Oven shutting off, underheating, or overheating from sensor, thermostat, relay, or control faults</li>
            <li>✅ Induction zones failing to detect cookware or shutting down from heat or module issues</li>
            <li>✅ Cooling fan or ventilation problems under induction ranges and built-in cooking surfaces</li>
            <li>✅ Meat probe, touch-control, or display problems on newer Fulgor Milano models</li>
            <li>✅ Parts sourcing delays when the exact model and production generation are not verified</li>
          </ul>
          <h3>How We Fix These Fulgor Milano Range Issues</h3>
          <p>We test the gas burners, ignition circuit, induction boards, cooling airflow, oven sensors, relays, probes, touch controls, and safety systems. We also verify model and serial details before recommending parts.</p>
        </>
      )
    },
    {
      id: "gaggenau-range-repair",
      title: "Gaggenau Range Repair",
      heading: "Gaggenau Range Repair",
      /*img: "/range-repair/gaggenau-range-repair.webp",*/
      alt: "Gaggenau range repair technician servicing a luxury cooking system",
      description: (
        <>
          <p>Our <strong>Gaggenau range repair</strong> service is best suited for Gaggenau cooking suites, 400 Series and 200 Series ovens, modular Vario cooktops, gas cooktops, flex induction surfaces, Teppan Yaki modules, wok burners, and built-in cooking columns. Gaggenau is often installed as a range-style cooking system rather than a standard freestanding range.</p>
          <h3>Gaggenau Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Flex induction zones not detecting cookware, shutting down, or showing control errors</li>
            <li>✅ Combi-steam oven drain, pump, descaling, water tank, or steam-generation problems</li>
            <li>✅ Vario modules with individual power, wiring, control, or installation faults</li>
            <li>✅ High-output wok burners with weak flame, delayed ignition, or flame-sensing issues</li>
            <li>✅ Rotary selector, touch display, probe, or module faults affecting cooking modes</li>
            <li>✅ Cabinet ventilation and heat-management issues in flush Gaggenau cooking columns</li>
          </ul>
          <h3>How We Fix These Gaggenau Range Issues</h3>
          <p>We diagnose the Gaggenau system by module: oven, steam oven, gas, induction, Vario, wok, or Teppan Yaki. We inspect controls, power supply, steam systems, drain paths, probes, cooling fans, induction boards, burner ignition, gas valves, and built-in ventilation.</p>
        </>
      )
    },
    {
      id: "ilve-range-repair",
      title: "ILVE Range Repair",
      heading: "ILVE Range Repair",
      /*img: "/range-repair/ilve-range-repair.webp",*/
      alt: "ILVE range repair technician servicing an Italian dual fuel range",
      description: (
        <>
          <p>We provide <strong>ILVE range repair</strong> for Majestic, Nostalgie, Panoramagic, Professional Plus, dual fuel ranges, all-gas ranges, induction ranges, griddles, French tops, rotisserie ovens, and brass burner cooking surfaces. ILVE ranges need careful service because the oven, door, burners, decorative trim, and European controls all affect performance.</p>
          <h3>ILVE Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Oven door misalignment, hinge wear, gasket issues, or heavy-door closure problems</li>
            <li>✅ Brass burners with uneven flame because burner caps, rings, or ports are not seated correctly</li>
            <li>✅ Igniters clicking continuously after cleaning, spills, or moisture around the spark area</li>
            <li>✅ Main oven and secondary oven cooking at different temperatures on multi-cavity ranges</li>
            <li>✅ Rotisserie, French top, griddle, or warming drawer sections not performing consistently</li>
            <li>✅ Knobs, bezels, selector switches, and decorative trim needing careful handling during repair</li>
          </ul>
          <h3>How We Fix These ILVE Range Issues</h3>
          <p>We inspect ILVE oven doors, hinges, gaskets, burners, caps, rings, spark electrodes, gas valves, thermostats, selectors, rotisserie components, griddles, and induction modules while protecting brass, enamel, chrome, and custom finishes.</p>
        </>
      )
    },
    {
      id: "lacanche-range-repair",
      title: "Lacanche Range Repair",
      heading: "Lacanche Range Repair",
      /*img: "/range-repair/lacanche-range-repair.webp",*/
      alt: "Lacanche range repair technician servicing a French luxury range",
      description: (
        <>
          <p>Our <strong>Lacanche range repair</strong> service supports Cluny, Sully, Savigny, Volnay, Chagny, Cormatin, Citeaux, and custom Lacanche French ranges. Lacanche ranges may combine gas ovens, electric ovens, warming cupboards, French tops, simmer plates, planchas, and custom burner layouts.</p>
          <h3>Lacanche Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners that light but go out because of thermocouple or safety-valve problems</li>
            <li>✅ Gas oven weak bake performance, flame drop-out, or poor heat recovery</li>
            <li>✅ Electric oven sections not reaching temperature because of element, thermostat, or selector faults</li>
            <li>✅ French top, simmer plate, or plancha heat distribution issues</li>
            <li>✅ Heavy door, gasket, hinge, enamel, brass, or knob concerns on hand-built ranges</li>
            <li>✅ Custom configuration parts identification because every Lacanche range layout can be different</li>
          </ul>
          <h3>How We Fix These Lacanche Range Issues</h3>
          <p>We map the exact Lacanche configuration before repair, then test gas burners, thermocouples, safety valves, electric oven circuits, thermostats, selectors, specialty plates, door seals, and custom trim areas.</p>
        </>
      )
    },
    {
      id: "la-cornue-range-repair",
      title: "La Cornue Range Repair",
      heading: "La Cornue Range Repair",
      /*img: "/range-repair/la-cornue-range-repair.webp",*/
      alt: "La Cornue range repair technician servicing a luxury French range",
      description: (
        <>
          <p>We specialize in <strong>La Cornue range repair</strong> for Château, CornuFé, CornuChef, Grand Palais, Le Château 75, Château 90, Château 120, Château 150, Château 165, and custom La Cornue range configurations. La Cornue ranges can include vaulted gas or electric ovens, French tops, lava rock grills, griddles, induction zones, and custom finishes.</p>
          <h3>La Cornue Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Yellow flame, soot, uneven flame, or weak burner output from cap position, gas pressure, air mixture, or clogged ports</li>
            <li>✅ Gas oven ignition delays, thermocouple faults, burner shutdown, or safety-valve problems</li>
            <li>✅ Vaulted oven cavity temperature behavior that may be mistaken for a simple thermostat failure</li>
            <li>✅ Electric cavity element, selector, relay, thermostat, or wiring issues on CornuFé and Château models</li>
            <li>✅ French top, griddle, or specialty surface heat patterns that feel uneven to the owner</li>
            <li>✅ Parts and finish-matching concerns for enamel, brass, chrome, nickel, and custom color panels</li>
          </ul>
          <h3>How We Fix These La Cornue Range Issues</h3>
          <p>We evaluate flame color, burner ports, gas pressure, air mixture, thermocouples, gas valves, igniters, oven thermostats, vaulted heat movement, specialty surfaces, and finish-sensitive access points before recommending repair.</p>
        </>
      )
    },
    {
      id: "miele-range-repair",
      title: "Miele Range Repair",
      heading: "Miele Range Repair",
      /*img: "/range-repair/miele-range-repair.webp",*/
      alt: "Miele range repair technician servicing a luxury induction or gas range",
      description: (
        <>
          <p>We provide <strong>Miele range repair</strong> for Miele gas ranges, dual fuel ranges, induction ranges, induction cooktops paired with wall ovens, steam ovens, speed ovens, and range-style cooking installations. Miele ranges often involve induction electronics, gas safety systems, M Touch controls, steam functions, and precise cabinet ventilation.</p>
          <h3>Miele Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not recognizing cookware, shutting off, or overheating under load</li>
            <li>✅ Steam oven water intake, drain, descaling, pump, valve, or limescale-related faults</li>
            <li>✅ Speed oven microwave and convection modes not working together correctly</li>
            <li>✅ Gas burner ignition clicking, delayed lighting, or weak flame on gas cooking surfaces</li>
            <li>✅ M Touch display, relay, probe, sensor, or control-module faults</li>
            <li>✅ Flush installation ventilation issues that affect induction modules, cooling fans, or oven electronics</li>
          </ul>
          <h3>How We Fix These Miele Range Issues</h3>
          <p>We test induction modules, cookware detection, cooling fans, gas ignition, valves, M Touch controls, steam pumps, water valves, probes, relays, sensors, and built-in ventilation so the repair matches the exact Miele cooking platform.</p>
        </>
      )
    },
    {
      id: "officine-gullo-range-repair",
      title: "Officine Gullo Range Repair",
      heading: "Officine Gullo Range Repair",
      /*img: "/range-repair/officine-gullo-range-repair.webp",*/
      alt: "Officine Gullo range repair technician servicing a bespoke luxury range",
      description: (
        <>
          <p>Our <strong>Officine Gullo range repair</strong> service is designed for bespoke Italian ranges, custom cooking suites, professional rangetops, gas burners, ovens, griddles, fry tops, French tops, pasta cookers, and made-to-order luxury kitchen installations. With Officine Gullo, the first step is understanding the exact custom layout.</p>
          <h3>Officine Gullo Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Custom burner layouts where each burner, valve, igniter, or safety component may be different</li>
            <li>✅ Gas ignition, thermocouple, safety-valve, or flame stability issues on professional-style burners</li>
            <li>✅ Oven cavity temperature problems involving thermostats, selectors, relays, elements, or gas systems</li>
            <li>✅ Griddle, fry top, French top, or specialty module heat distribution problems</li>
            <li>✅ Heavy knobs, brass trim, copper, nickel, stainless, and custom metal finishes requiring careful disassembly</li>
            <li>✅ Parts identification challenges because many Officine Gullo ranges are custom-built</li>
          </ul>
          <h3>How We Fix These Officine Gullo Range Issues</h3>
          <p>We document the custom layout, fuel type, control style, access points, and finish details before testing burners, oven cavities, valves, thermocouples, relays, elements, specialty modules, and ventilation.</p>
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
