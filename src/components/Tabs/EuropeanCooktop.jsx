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
      id: "aga-cooktop-repair",
      title: "AGA Cooktop Repair",
      heading: "AGA Cooktop Repair",
      img: "/cooktop-repair/aga-cooktop-repair.webp",
      alt: "AGA cooktop repair technician servicing a luxury AGA cooking surface",
      description: (
        <>
          <p>We provide <strong>AGA cooktop repair</strong> for traditional AGA hotplates, boiling plates, simmering plates, gas hob modules, induction hobs, and cooking surfaces integrated into AGA cookers. AGA cooking surfaces are different from ordinary cooktops because many models depend on radiant heat retention, insulated hotplate assemblies, model-specific controls, and careful temperature recovery.</p>
          <h3>AGA Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Boiling plate or simmering plate not recovering heat the way it used to</li>
            <li>✅ Hotplate surface heating unevenly or taking too long to return to cooking temperature</li>
            <li>✅ Induction hob zones not recognizing cookware or shutting down during use</li>
            <li>✅ Gas hob burners clicking, lighting slowly, or producing an uneven flame</li>
            <li>✅ Worn lid seals, insulation, or internal components allowing unnecessary heat loss</li>
            <li>✅ Older AGA model identification issues where serial number, fuel type, and prior conversions matter</li>
          </ul>
          <h3>How We Fix These AGA Cooktop Issues</h3>
          <p>Our technicians separate traditional radiant-hotplate diagnosis from modern gas and induction hob diagnosis. We inspect hotplate recovery, controls, thermostats, insulation, lid seals, ignition components, burner assemblies, induction electronics, and the exact AGA configuration before recommending repair.</p>
        </>
      )
    },
    {
      id: "bertazzoni-cooktop-repair",
      title: "Bertazzoni Cooktop Repair",
      heading: "Bertazzoni Cooktop Repair",
      /*img: "/cooktop-repair/bertazzoni-cooktop-repair.webp",*/
      alt: "Bertazzoni cooktop repair technician servicing an Italian luxury cooktop",
      description: (
        <>
          <p>Our <strong>Bertazzoni cooktop repair</strong> service covers Professional Series and Master Series rangetops, drop-in gas cooktops, induction cooktops, induction rangetops, and induction cooktops with downdraft ventilation. Bertazzoni cooking surfaces combine Italian styling with brass burners, cast-iron grates, induction electronics, touch controls, and series-specific parts.</p>
          <h3>Bertazzoni Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Brass burner caps or bases not seated correctly, causing clicking, delayed ignition, or uneven flame</li>
            <li>✅ Igniters clicking continuously after cleaning, spills, or moisture around the burner area</li>
            <li>✅ Gas burners producing a weak simmer or inconsistent high-output flame</li>
            <li>✅ Induction zones failing to detect cookware, shutting down, or displaying control errors</li>
            <li>✅ Downdraft airflow, blower, or filter problems on induction downdraft models</li>
            <li>✅ Parts differences between Professional and Master Series units that make exact model identification important</li>
          </ul>
          <h3>How We Fix These Bertazzoni Cooktop Issues</h3>
          <p>We inspect burner cap seating, spark electrodes, ignition switches, spark modules, gas valves, regulators, induction power boards, touch controls, cooling airflow, and downdraft ventilation. We confirm the exact Bertazzoni series and model before ordering parts.</p>
        </>
      )
    },
    {
      id: "fulgor-milano-cooktop-repair",
      title: "Fulgor Milano Cooktop Repair",
      heading: "Fulgor Milano Cooktop Repair",
      /*img: "/cooktop-repair/fulgor-milano-cooktop-repair.webp",*/
      alt: "Fulgor Milano cooktop repair technician servicing a premium Italian cooktop",
      description: (
        <>
          <p>We provide <strong>Fulgor Milano cooktop repair</strong> for gas cooktops, induction cooktops, S400 cooking surfaces, Sofia rangetops, and knob-controlled induction rangetops. Fulgor Milano cooktops may combine dual-flame burners, pot-detection systems, booster functions, residual-heat indicators, electronic controls, and model-specific cooling requirements.</p>
          <h3>Fulgor Milano Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dual-flame gas burners producing uneven flame because of cap seating, clogged ports, or valve issues</li>
            <li>✅ Induction zones failing to detect cookware or losing power under load</li>
            <li>✅ Booster, melting, or simmering functions not responding correctly</li>
            <li>✅ Touch controls, knob controls, or timer functions becoming intermittent</li>
            <li>✅ Cooling fan or ventilation problems beneath induction surfaces</li>
            <li>✅ Parts lookup problems when the exact model and production generation are not verified</li>
          </ul>
          <h3>How We Fix These Fulgor Milano Cooktop Issues</h3>
          <p>We test burner assemblies, spark electrodes, valves, gas delivery, induction power boards, pot detection, touch or knob controls, cooling fans, electrical supply, and cabinet ventilation. We also verify model and serial details before recommending replacement parts.</p>
        </>
      )
    },
    {
      id: "gaggenau-cooktop-repair",
      title: "Gaggenau Cooktop Repair",
      heading: "Gaggenau Cooktop Repair",
      /*img: "/cooktop-repair/gaggenau-cooktop-repair.webp",*/
      alt: "Gaggenau cooktop repair technician servicing a modular luxury cooking surface",
      description: (
        <>
          <p>Our <strong>Gaggenau cooktop repair</strong> service covers 400 Series and 200 Series cooktops, Vario modular cooking surfaces, flex induction cooktops, gas cooktops, wok burners, Teppan Yaki modules, electric grill modules, and integrated downdraft ventilation. Gaggenau cooktops are often installed as a coordinated modular system rather than a single standard appliance.</p>
          <h3>Gaggenau Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Flex induction zones not detecting cookware, shutting down, or showing power-related errors</li>
            <li>✅ Vario modules with individual wiring, control, or power-supply faults</li>
            <li>✅ High-output wok burners with weak flame, delayed ignition, or flame-sensing issues</li>
            <li>✅ Teppan Yaki sections heating unevenly or failing to maintain the selected temperature</li>
            <li>✅ Electric grill modules with inconsistent heat output or control problems</li>
            <li>✅ Downdraft airflow, filter, or ventilation issues in flush-mounted modular installations</li>
          </ul>
          <h3>How We Fix These Gaggenau Cooktop Issues</h3>
          <p>We diagnose the Gaggenau installation module by module. We inspect induction boards, cookware detection, power supply, rotary controls, gas ignition, valves, Teppan Yaki heating performance, electric grill circuits, downdraft airflow, and cabinet ventilation.</p>
        </>
      )
    },
    {
      id: "ilve-cooktop-repair",
      title: "ILVE Cooktop Repair",
      heading: "ILVE Cooktop Repair",
      /*img: "/cooktop-repair/ilve-cooktop-repair.webp",*/
      alt: "ILVE cooktop repair technician servicing an Italian gas or induction cooktop",
      description: (
        <>
          <p>We provide <strong>ILVE cooktop repair</strong> for ILVE gas cooktops, induction hobs, brass-burner cooking surfaces, griddles, French-top sections, and rangetop-style cooking surfaces used in Italian luxury kitchens. ILVE cooktop service requires careful handling because burners, decorative trim, knobs, controls, and specialty surfaces all affect performance and appearance.</p>
          <h3>ILVE Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Brass burners with uneven flame because caps, rings, or ports are not seated correctly</li>
            <li>✅ Igniters clicking continuously after cleaning, spills, or moisture around the spark area</li>
            <li>✅ Gas burners lighting slowly, losing flame, or failing to simmer consistently</li>
            <li>✅ Induction zones not recognizing cookware or shutting down from electronic or airflow issues</li>
            <li>✅ Griddle or French-top surfaces developing inconsistent heat patterns</li>
            <li>✅ Knobs, bezels, brass trim, enamel, or chrome finishes requiring careful handling during service</li>
          </ul>
          <h3>How We Fix These ILVE Cooktop Issues</h3>
          <p>We inspect burner caps, rings, spark electrodes, ignition switches, valves, induction modules, controls, cooling airflow, and specialty cooking surfaces while protecting brass, enamel, chrome, and custom finishes.</p>
        </>
      )
    },
    {
      id: "lacanche-cooktop-repair",
      title: "Lacanche Cooktop Repair",
      heading: "Lacanche Cooktop Repair",
      /*img: "/cooktop-repair/lacanche-cooktop-repair.webp",*/
      alt: "Lacanche cooktop repair technician servicing a French luxury cooking surface",
      description: (
        <>
          <p>Our <strong>Lacanche cooktop repair</strong> service is designed for the cooking surfaces built into Cluny, Sully, Savigny, Volnay, Chagny, Cormatin, Citeaux, and custom Lacanche French ranges. Depending on the configuration, a Lacanche cooking surface may include gas burners, French tops, simmer plates, planchas, and other specialty modules.</p>
          <h3>Lacanche Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners that ignite but go out because of thermocouple or safety-valve problems</li>
            <li>✅ Weak flame, uneven combustion, or poor simmer control on individual burners</li>
            <li>✅ French-top or simmer-plate sections developing uneven heat distribution</li>
            <li>✅ Plancha or specialty module temperature problems</li>
            <li>✅ Heavy grates, brass trim, knobs, enamel, and custom finishes requiring careful service access</li>
            <li>✅ Parts identification challenges because each Lacanche cooking-surface layout can be different</li>
          </ul>
          <h3>How We Fix These Lacanche Cooktop Issues</h3>
          <p>We map the exact Lacanche configuration before service, then inspect burners, thermocouples, safety valves, gas pressure, ignition, specialty plates, planchas, controls, and trim-sensitive access points.</p>
        </>
      )
    },
    {
      id: "la-cornue-cooktop-repair",
      title: "La Cornue Cooktop Repair",
      heading: "La Cornue Cooktop Repair",
      /*img: "/cooktop-repair/la-cornue-cooktop-repair.webp",*/
      alt: "La Cornue cooktop repair technician servicing a handcrafted French luxury cooktop",
      description: (
        <>
          <p>We specialize in <strong>La Cornue cooktop repair</strong> for handcrafted Château cooktops, CornuFé rangetop configurations, gas burners, French tops, power burners, lava-rock grills, induction surfaces, and custom cooking layouts. La Cornue cooktops require careful diagnosis because burner configuration, gas delivery, specialty surfaces, and finish details vary from one installation to another.</p>
          <h3>La Cornue Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Yellow flame, soot, weak output, or uneven flame caused by cap position, gas pressure, air mixture, or clogged ports</li>
            <li>✅ Gas burners with delayed ignition, thermocouple faults, or safety-valve problems</li>
            <li>✅ French-top sections developing heat patterns that feel uneven to the owner</li>
            <li>✅ Lava-rock grill or specialty surface sections not heating consistently</li>
            <li>✅ Induction zones failing to detect cookware or respond to controls</li>
            <li>✅ Finish-matching and protection concerns for enamel, brass, chrome, nickel, copper, and custom-color panels</li>
          </ul>
          <h3>How We Fix These La Cornue Cooktop Issues</h3>
          <p>We document the custom configuration first, then evaluate flame color, burner ports, gas pressure, air mixture, thermocouples, gas valves, ignition, specialty surfaces, induction components, and finish-sensitive access points before recommending repair.</p>
        </>
      )
    },
    {
      id: "miele-cooktop-repair",
      title: "Miele Cooktop Repair",
      heading: "Miele Cooktop Repair",
      /*img: "/cooktop-repair/miele-cooktop-repair.webp",*/
      alt: "Miele cooktop repair technician servicing a luxury induction or gas cooktop",
      description: (
        <>
          <p>We provide <strong>Miele cooktop repair</strong> for Miele gas cooktops, electric cooktops, induction cooktops, full-surface induction models, PowerFlex cooking areas, and professional-style rangetops with gas burners, griddles, or grills. Miele cooktops often involve precise electronic controls, cookware detection, cooling airflow, auto re-ignition, and model-specific installation requirements.</p>
          <h3>Miele Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not recognizing cookware, shutting down, or overheating under load</li>
            <li>✅ PowerFlex or full-surface zones not linking or responding correctly</li>
            <li>✅ Gas burners clicking, lighting slowly, or failing to re-ignite properly</li>
            <li>✅ Electric elements cycling incorrectly or failing to reach the selected output</li>
            <li>✅ Touch controls, power boards, sensors, or cooling fans developing faults</li>
            <li>✅ Flush-installation ventilation issues affecting induction electronics</li>
          </ul>
          <h3>How We Fix These Miele Cooktop Issues</h3>
          <p>We test induction modules, cookware detection, PowerFlex operation, cooling fans, electrical supply, gas ignition, valves, auto re-ignition, electric elements, touch controls, sensors, and built-in ventilation so the repair matches the exact Miele platform.</p>
        </>
      )
    },
    {
      id: "officine-gullo-cooktop-repair",
      title: "Officine Gullo Cooktop Repair",
      heading: "Officine Gullo Cooktop Repair",
      /*img: "/cooktop-repair/officine-gullo-cooktop-repair.webp",*/
      alt: "Officine Gullo cooktop repair technician servicing a bespoke Italian cooking surface",
      description: (
        <>
          <p>Our <strong>Officine Gullo cooktop repair</strong> service is designed for bespoke Italian rangetops, professional gas burners, griddles, fry tops, French tops, pasta-cooker modules, induction surfaces, and made-to-order luxury cooking suites. With Officine Gullo, the first step is understanding the exact custom layout and finish package.</p>
          <h3>Officine Gullo Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Custom burner layouts where each valve, igniter, thermocouple, or safety component may differ</li>
            <li>✅ Gas ignition, thermocouple, safety-valve, or flame-stability issues on professional-style burners</li>
            <li>✅ Griddle, fry-top, French-top, or specialty-module heat distribution problems</li>
            <li>✅ Induction modules or control sections not responding correctly</li>
            <li>✅ Heavy knobs, brass, copper, nickel, stainless steel, and custom finishes requiring careful disassembly</li>
            <li>✅ Parts-identification challenges because many Officine Gullo cooking suites are custom-built</li>
          </ul>
          <h3>How We Fix These Officine Gullo Cooktop Issues</h3>
          <p>We document the custom layout, fuel type, controls, access points, and finish details before testing burners, valves, thermocouples, spark systems, induction components, specialty modules, gas delivery, and ventilation.</p>
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
