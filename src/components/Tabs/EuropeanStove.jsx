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
          id: "aga-stove-repair",
          title: "AGA Stove Repair",
          heading: "AGA Stove Repair",
          img: "/stove-repair/aga-stove-repair.webp",
          alt: "AGA stove repair technician servicing a luxury AGA cooker",
          description: (
            <>
              <p>We provide <strong>AGA stove repair</strong> for traditional AGA cookers, AGA Total Control, AGA Dual Control, AGA eR7, AGA R7, AGA Mercury, AGA Elise, and AGA range-style cooking appliances. AGA stoves are different from ordinary stoves because many models depend on radiant heat, cast-iron heat retention, simmering plates, boiling plates, gas burners, electric elements, and model-specific control systems.</p>
              <h3>AGA Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Boiling plate or simmering plate not getting hot enough on traditional AGA cookers</li>
                <li>✅ Total Control, Dual Control, eR7, or R7 zones not responding correctly</li>
                <li>✅ Heat-storage performance dropping after years of use, even when the cooker still feels warm</li>
                <li>✅ Gas burner ignition, flame stability, or gas regulation issues on AGA range models</li>
                <li>✅ Worn door seals, lid seals, insulation, or heat-retention parts causing slow recovery and uneven cooking</li>
                <li>✅ Older AGA parts identification issues where fuel type, conversion history, and serial number matter</li>
              </ul>
              <h3>How We Fix These AGA Stove Issues</h3>
              <p>Our technicians separate traditional cast-iron AGA diagnosis from newer AGA range diagnosis. We inspect the hotplate zones, burner ignition, controls, safety limits, thermostats, seals, insulation, and heat-retention performance before recommending a repair path.</p>
            </>
          )
        },
        {
          id: "bertazzoni-stove-repair",
          title: "Bertazzoni Stove Repair",
          heading: "Bertazzoni Stove Repair",
          /*img: "/stove-repair/bertazzoni-stove-repair.webp",*/
          alt: "Bertazzoni stove repair technician servicing an Italian luxury range",
          description: (
            <>
              <p>Our <strong>Bertazzoni stove repair</strong> service covers Professional Series, Master Series, Heritage Series, gas ranges, dual fuel ranges, induction ranges, cooktops, and rangetops. Bertazzoni stoves combine Italian design with brass burners, electronic ignition, safety systems, induction electronics, and series-specific parts.</p>
              <h3>Bertazzoni Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Burners clicking continuously after cleaning, spills, or moisture around the igniters</li>
                <li>✅ Brass burner caps or bases not seated correctly, causing uneven flame or delayed ignition</li>
                <li>✅ Weak ignition from worn spark electrodes, ignition switches, or spark modules</li>
                <li>✅ Low simmer or flame adjustment problems on sealed gas burners</li>
                <li>✅ Induction surface errors, overheating warnings, or cookware-detection problems on induction ranges</li>
                <li>✅ Series-specific parts differences between Professional, Master, and Heritage models</li>
              </ul>
              <h3>How We Fix These Bertazzoni Stove Issues</h3>
              <p>We inspect burner cap seating, igniters, spark switches, spark modules, gas valves, flame pattern, induction modules, cooling fans, and model-specific part numbers. For Bertazzoni stoves, correct series identification is important before ordering parts.</p>
            </>
          )
        },
        {
          id: "fulgor-milano-stove-repair",
          title: "Fulgor Milano Stove Repair",
          heading: "Fulgor Milano Stove Repair",
          /*img: "/stove-repair/fulgor-milano-stove-repair.webp",*/
          alt: "Fulgor Milano stove repair technician servicing a premium Italian range",
          description: (
            <>
              <p>We service <strong>Fulgor Milano stove repair</strong> needs for Sofia professional ranges, Sofia induction ranges, Distinto cooktops, gas rangetops, dual fuel ranges, all-gas ranges, and induction cooking surfaces. These stoves often use European controls, electronic ignition, cooling systems, induction modules, and precision burner layouts.</p>
              <h3>Fulgor Milano Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Sofia gas burners producing uneven flame because of burner cap seating, clogged ports, or gas valve issues</li>
                <li>✅ Igniters clicking without lighting after cleaning or liquid spills</li>
                <li>✅ Induction zones shutting off, failing to detect cookware, or showing control errors</li>
                <li>✅ Cooling fan or ventilation issues under induction cooking surfaces</li>
                <li>✅ Knob, selector, or electronic control issues on professional-style ranges</li>
                <li>✅ Parts sourcing delays on less common Fulgor Milano models when the exact model number is not verified</li>
              </ul>
              <h3>How We Fix These Fulgor Milano Stove Issues</h3>
              <p>We test gas ignition, burner ports, valves, induction boards, touch controls, cooling airflow, wiring, and safety circuits. We verify the model and series before recommending parts because Fulgor Milano components can vary by generation.</p>
            </>
          )
        },
        {
          id: "gaggenau-stove-repair",
          title: "Gaggenau Stove Repair",
          heading: "Gaggenau Stove Repair",
          /*img: "/stove-repair/gaggenau-stove-repair.webp",*/
          alt: "Gaggenau stove repair technician servicing a luxury cooktop",
          description: (
            <>
              <p>Our <strong>Gaggenau stove repair</strong> service covers 400 Series and 200 Series gas cooktops, induction cooktops, flex induction surfaces, modular Vario cooktops, Teppan Yaki modules, wok burners, and downdraft-integrated cooking systems. Gaggenau stove repair is often about precision electronics, ventilation clearance, and exact module diagnosis.</p>
              <h3>Gaggenau Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Flex induction zones not detecting cookware or shutting down under load</li>
                <li>✅ Touch controls locking, becoming unresponsive, or showing error behavior</li>
                <li>✅ Vario modules with individual power, wiring, or control faults</li>
                <li>✅ High-output wok burners with weak flame, ignition delay, or flame-sensing issues</li>
                <li>✅ Downdraft or cabinet ventilation affecting induction cooling and heat management</li>
                <li>✅ Parts matching challenges because Gaggenau modular cooking systems are highly model-specific</li>
              </ul>
              <h3>How We Fix These Gaggenau Stove Issues</h3>
              <p>We diagnose Gaggenau by module: gas, induction, flex induction, Vario, wok, or Teppan Yaki. We inspect controls, power supply, cooling fans, induction boards, burner ignition, gas valves, and surrounding ventilation before replacing parts.</p>
            </>
          )
        },
        {
          id: "ilve-stove-repair",
          title: "ILVE Stove Repair",
          heading: "ILVE Stove Repair",
          /*img: "/stove-repair/ilve-stove-repair.webp",*/
          alt: "ILVE stove repair technician servicing an Italian dual fuel range",
          description: (
            <>
              <p>We provide <strong>ILVE stove repair</strong> for Majestic, Nostalgie, Panoramagic, Professional Plus, dual fuel ranges, all-gas ranges, induction ranges, griddles, French tops, and brass burner cooktops. ILVE stoves often need careful service because of their decorative finishes, brass parts, heavy doors, and European control layout.</p>
              <h3>ILVE Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Brass burners with uneven flame because burner caps, rings, or ports are not seated or cleaned correctly</li>
                <li>✅ Igniters clicking continuously after cleaning, moisture, or food debris reaches the ignition area</li>
                <li>✅ Knobs, bezels, and selector controls loosening or becoming difficult to operate</li>
                <li>✅ French top or griddle sections heating unevenly or not recovering heat properly</li>
                <li>✅ Induction zones showing cookware detection, overheating, or touch-control issues</li>
                <li>✅ Door, hinge, and gasket issues that can affect nearby range performance and owner perception of the appliance</li>
              </ul>
              <h3>How We Fix These ILVE Stove Issues</h3>
              <p>We inspect ILVE burners, caps, rings, spark electrodes, ignition switches, gas valves, induction modules, griddle or French top heating, and decorative trim. We protect brass, enamel, chrome, and custom color finishes during service.</p>
            </>
          )
        },
        {
          id: "lacanche-stove-repair",
          title: "Lacanche Stove Repair",
          heading: "Lacanche Stove Repair",
          /*img: "/stove-repair/lacanche-stove-repair.webp",*/
          alt: "Lacanche stove repair technician servicing a French luxury range",
          description: (
            <>
              <p>Our <strong>Lacanche stove repair</strong> service supports Cluny, Sully, Savigny, Volnay, Chagny, Cormatin, Citeaux, and custom Lacanche French ranges. Lacanche stoves may include gas burners, electric plates, French tops, simmer plates, planchas, warming cupboards, and custom cooktop layouts.</p>
              <h3>Lacanche Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners with uneven flame, delayed ignition, or weak simmer performance</li>
                <li>✅ Thermocouple and safety-valve problems that cause burners to shut off after lighting</li>
                <li>✅ French top, simmer plate, or plancha heat distribution issues</li>
                <li>✅ Knob, valve, and control stiffness on hand-built ranges with long service life</li>
                <li>✅ Custom cooktop layouts where each burner or plate needs separate diagnosis</li>
                <li>✅ Parts identification challenges because Lacanche ranges are often custom-configured</li>
              </ul>
              <h3>How We Fix These Lacanche Stove Issues</h3>
              <p>We map the exact Lacanche cooktop configuration, then test burners, thermocouples, gas valves, simmer settings, ignition, electric plates, and specialty modules. We also protect enamel, brass, and custom finishes while working on the range.</p>
            </>
          )
        },
        {
          id: "la-cornue-stove-repair",
          title: "La Cornue Stove Repair",
          heading: "La Cornue Stove Repair",
          /*img: "/stove-repair/la-cornue-stove-repair.webp",*/
          alt: "La Cornue stove repair technician servicing a luxury French range",
          description: (
            <>
              <p>We specialize in <strong>La Cornue stove repair</strong> for Château, CornuFé, CornuChef, Grand Palais, Le Château 75, Château 90, Château 120, Château 150, Château 165, and custom La Cornue range configurations. La Cornue stoves may include gas burners, induction zones, French tops, lava rock grills, griddles, and bespoke cooking surfaces.</p>
              <h3>La Cornue Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Yellow flame, uneven flame, or soot caused by burner cap position, air mixture, gas pressure, or clogged burner ports</li>
                <li>✅ Burners lighting slowly or going out because of thermocouple, safety-valve, or ignition issues</li>
                <li>✅ French top or griddle heat patterns that feel uneven if the plate, burner, or gas setting is not performing correctly</li>
                <li>✅ CornuFé ignition, indicator light, knob, or spark-module problems</li>
                <li>✅ Custom trim and finish concerns where repair access must be planned carefully</li>
                <li>✅ Parts matching differences between Château, CornuFé, and custom range configurations</li>
              </ul>
              <h3>How We Fix These La Cornue Stove Issues</h3>
              <p>We inspect flame color, burner ports, caps, gas pressure, air shutters where applicable, thermocouples, valves, igniters, and specialty cooking surfaces. For La Cornue, we also protect enamel, brass, chrome, nickel, and custom color finishes during diagnosis.</p>
            </>
          )
        },
        {
          id: "miele-stove-repair",
          title: "Miele Stove Repair",
          heading: "Miele Stove Repair",
          /*img: "/stove-repair/miele-stove-repair.webp",*/
          alt: "Miele stove repair technician servicing a luxury induction cooktop",
          description: (
            <>
              <p>We provide <strong>Miele stove repair</strong> for Miele induction cooktops, gas cooktops, electric cooktops, SmartLine modules, ProLine modules, flush-mounted cooking surfaces, and range-style cooking appliances. Miele stove repair often involves electronic controls, induction power modules, cooling airflow, and precise installation requirements.</p>
              <h3>Miele Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Induction zones not recognizing cookware or shutting off during cooking</li>
                <li>✅ Touch controls locking, beeping, or becoming unresponsive after spills or control faults</li>
                <li>✅ Cooling fan or ventilation issues under flush-mounted induction cooktops</li>
                <li>✅ Gas burner ignition clicking, delayed lighting, or weak flame on Miele gas cooktops</li>
                <li>✅ SmartLine or ProLine modules with individual power, wiring, or control communication issues</li>
                <li>✅ Glass top cracks, edge damage, or installation tension that must be evaluated before repair</li>
              </ul>
              <h3>How We Fix These Miele Stove Issues</h3>
              <p>We test Miele induction modules, cookware detection, touch controls, cooling fans, power supply, burner ignition, gas valves, and installation airflow. For flush installations, we also check whether ventilation and cabinet clearances are contributing to the problem.</p>
            </>
          )
        },
        {
          id: "officine-gullo-stove-repair",
          title: "Officine Gullo Stove Repair",
          heading: "Officine Gullo Stove Repair",
          /*img: "/stove-repair/officine-gullo-stove-repair.webp",*/
          alt: "Officine Gullo stove repair technician servicing a bespoke luxury range",
          description: (
            <>
              <p>Our <strong>Officine Gullo stove repair</strong> service is designed for bespoke Italian ranges, custom cooking suites, professional rangetops, gas burners, griddles, fry tops, French tops, pasta cookers, and made-to-order kitchen installations. These stoves are often custom-built, so diagnosis starts with understanding the exact layout.</p>
              <h3>Officine Gullo Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Custom burner layouts where each burner, valve, igniter, or safety component may be different</li>
                <li>✅ Gas ignition, flame stability, thermocouple, or safety-valve issues on professional-style burners</li>
                <li>✅ Griddle, fry top, French top, or specialty module heat distribution problems</li>
                <li>✅ Heavy knobs, brass trim, copper, nickel, and stainless finishes requiring careful disassembly</li>
                <li>✅ Ventilation and heat-management issues in large custom cooking suites</li>
                <li>✅ Parts identification challenges because many Officine Gullo installations are bespoke</li>
              </ul>
              <h3>How We Fix These Officine Gullo Stove Issues</h3>
              <p>We document the cooking surface layout, fuel type, controls, finish, and access points before service. We test burners, valves, ignition, safety systems, griddles, specialty modules, and ventilation while protecting handcrafted metal finishes.</p>
            </>
          )
        }
  ];
  

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setActiveTab(mobile ? null : "aga-oven-repair");
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
