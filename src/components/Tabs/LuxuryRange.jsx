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
      id: "fisher-paykel-range-repair",
      title: "Fisher & Paykel Range Repair",
      heading: "Fisher & Paykel Range Repair",
      /*img: "/range-repair/fisher-paykel-range-repair.webp",*/
      alt: "Fisher and Paykel range repair technician servicing a professional range",
      description: (
        <>
          <p>We provide <strong>Fisher & Paykel range repair</strong> for Series 7, Series 9, and Series 11 ranges, Contemporary, Minimal, and Professional cooking appliances, gas ranges, dual fuel ranges, induction ranges, range ovens, and cooktop/oven combinations. Fisher & Paykel ranges often involve AeroTech airflow, induction electronics, guided cooking, and clean integrated controls.</p>
          <h3>Fisher & Paykel Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ AeroTech fan, rear element, or sensor issues affecting even oven heat distribution</li>
            <li>✅ Induction zones failing to detect cookware or shutting off during cooking</li>
            <li>✅ Gas burner ignition, flame sensing, and simmer-control issues</li>
            <li>✅ Touchscreen, guided cooking, control-module, or temperature probe faults</li>
            <li>✅ Self-clean, door lock, cooling fan, and built-in ventilation problems</li>
            <li>✅ Flush or minimal-style installation concerns affecting airflow and service access</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Range Issues</h3>
          <p>We test AeroTech airflow, oven sensors, probes, gas burners, induction boards, touch controls, cooling fans, door locks, and installation ventilation so the repair matches the specific Fisher & Paykel range platform.</p>
        </>
      )
    },
    {
      id: "wolf-range-repair",
      title: "Wolf Range Repair",
      heading: "Wolf Range Repair",
      /*img: "/range-repair/wolf-range-repair.webp",*/
      alt: "Wolf range repair technician servicing a luxury dual fuel range",
      description: (
        <>
          <p>Our <strong>Wolf range repair</strong> service covers Wolf dual fuel ranges, gas ranges, induction ranges, sealed burner rangetops, M Series and E Series range-related ovens, griddles, charbroilers, infrared broilers, and professional cooking systems. Wolf range service often involves exact diagnosis of dual-stacked burners, convection systems, probes, relays, and heavy-use components.</p>
          <h3>Wolf Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dual-stacked burners with clicking, weak simmer, uneven flame, or ignition delay</li>
            <li>✅ M Series convection relay faults, probe errors, or Dual VertiCross airflow issues in range ovens</li>
            <li>✅ Infrared broiler, bake burner, or oven igniter problems on gas and dual fuel ranges</li>
            <li>✅ Griddle, charbroiler, or French top heat recovery concerns</li>
            <li>✅ Door lock, cooling fan, temperature sensor, relay, or control module issues</li>
            <li>✅ Heavy door, gasket, hinge, and professional trim wear in high-use kitchens</li>
          </ul>
          <h3>How We Fix These Wolf Range Issues</h3>
          <p>We test Wolf burners, spark modules, gas valves, simmer settings, oven relays, probes, convection circuits, broilers, griddle systems, cooling fans, and door seals while protecting built-in cabinetry and stainless finishes.</p>
        </>
      )
    },
    {
      id: "thermador-range-repair",
      title: "Thermador Range Repair",
      heading: "Thermador Range Repair",
      /*img: "/range-repair/thermador-range-repair.webp",*/
      alt: "Thermador range repair technician servicing a professional range",
      description: (
        <>
          <p>We provide <strong>Thermador range repair</strong> for Pro Harmony ranges, Pro Grand ranges, Professional Series ranges, Masterpiece cooking appliances, dual fuel ranges, gas ranges, induction ranges, steam ovens, speed ovens, and Star Burner cooktops. Thermador repairs often involve Star Burner ignition, steam descaling, probes, and professional oven systems.</p>
          <h3>Thermador Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Star Burners clicking, lighting unevenly, or showing weak flame after spills or debris buildup</li>
            <li>✅ Pro Harmony and Pro Grand range oven ignition, bake burner, broiler, and temperature issues</li>
            <li>✅ Steam oven limescale buildup, descaling lockouts, water reservoir, or drainage problems</li>
            <li>✅ Speed oven microwave/convection mode failures or turntable issues</li>
            <li>✅ Probe, relay board, sensor, Home Connect, or control-panel communication faults</li>
            <li>✅ Door lock, cooling fan, self-clean, and ventilation issues in large pro ranges</li>
          </ul>
          <h3>How We Fix These Thermador Range Issues</h3>
          <p>We inspect Star Burners, spark electrodes, gas valves, oven ignition, steam systems, probes, sensors, relays, controls, fans, and built-in ventilation. We diagnose Pro range ovens separately from wall oven or speed oven systems.</p>
        </>
      )
    },
    {
      id: "viking-range-repair",
      title: "Viking Range Repair",
      heading: "Viking Range Repair",
      /*img: "/range-repair/viking-range-repair.webp",*/
      alt: "Viking range repair technician servicing a luxury professional range",
      description: (
        <>
          <p>Our <strong>Viking range repair</strong> service covers Viking 3 Series, 5 Series, 7 Series, RVL, Professional ranges, gas ranges, dual fuel ranges, French-door ovens, griddles, rangetops, and legacy Viking cooking appliances. Viking range issues often involve gas igniters, oven sensors, convection fans, heavy hinges, and pro-style burner systems.</p>
          <h3>Viking Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Weak gas oven igniters that glow but do not draw enough current to open the gas valve fully</li>
            <li>✅ Top burners clicking, delayed ignition, or uneven flame from igniter, valve, or burner issues</li>
            <li>✅ Convection fan, oven sensor, thermostat, relay, or control faults causing uneven baking</li>
            <li>✅ French-door oven hinge alignment, door closure, and gasket problems</li>
            <li>✅ Self-clean, door lock, cooling fan, and temperature probe malfunctions</li>
            <li>✅ Legacy Viking parts differences between older Professional models and newer 3, 5, and 7 Series units</li>
          </ul>
          <h3>How We Fix These Viking Range Issues</h3>
          <p>We test igniter amp draw, gas valve response, burner ignition, oven sensors, fans, relays, hinges, door seals, griddle systems, and series-specific parts compatibility before repair.</p>
        </>
      )
    },
    {
      id: "monogram-range-repair",
      title: "Monogram Range Repair",
      heading: "Monogram Range Repair",
      /*img: "/range-repair/monogram-range-repair.webp",*/
      alt: "Monogram range repair technician servicing a luxury range",
      description: (
        <>
          <p>We provide <strong>Monogram range repair</strong> for Statement and Minimalist ranges, dual fuel ranges, all-gas ranges, induction cooking appliances, range ovens, and Advantium or wall oven cooking systems often paired with Monogram ranges. Monogram service often involves premium built-in design, smart controls, precision cooking, and mode-specific diagnostics.</p>
          <h3>Monogram Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Range oven ignition, broiler, bake element, temperature probe, or sensor problems</li>
            <li>✅ Top burner ignition, simmer-control, or uneven flame issues on gas ranges</li>
            <li>✅ Induction zone cookware detection, overheating, or power-board issues</li>
            <li>✅ Advantium speedcook, convection, and microwave mode failures when paired in Monogram cooking suites</li>
            <li>✅ Touchscreen, relay, control board, cooling fan, and cabinet ventilation concerns</li>
            <li>✅ Statement and Minimalist finish, handle, and panel protection during service</li>
          </ul>
          <h3>How We Fix These Monogram Range Issues</h3>
          <p>We diagnose Monogram by platform: gas range, dual fuel range, induction range, Advantium, or wall oven. We test burners, valves, sensors, probes, relays, fans, controls, and ventilation while protecting premium panels and handles.</p>
        </>
      )
    },
    {
      id: "signature-kitchen-suite-range-repair",
      title: "Signature Kitchen Suite Range Repair",
      heading: "Signature Kitchen Suite Range Repair",
      /*img: "/range-repair/signature-kitchen-suite-range-repair.webp",*/
      alt: "Signature Kitchen Suite range repair technician servicing a luxury pro range",
      description: (
        <>
          <p>Our <strong>Signature Kitchen Suite range repair</strong> service covers SKS pro ranges, 36-inch and 48-inch dual fuel ranges, gas burners, induction zones, built-in sous vide modules, steam-combi ovens, speed ovens, and wall oven cooking systems. SKS ranges can combine several cooking technologies in one appliance.</p>
          <h3>Signature Kitchen Suite Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Steam-combi oven water fill, drain, pump, valve, and steam-generation problems</li>
            <li>✅ Built-in sous vide, induction, or gas burner sections not responding correctly</li>
            <li>✅ ProHeat convection fan, sensor, and airflow issues in range ovens</li>
            <li>✅ Speed oven microwave, convection, or broil mode failures</li>
            <li>✅ Touchscreen, connected controls, relay, probe, and module communication problems</li>
            <li>✅ Dual fuel range issues where gas cooktop systems and electric oven systems must be diagnosed separately</li>
          </ul>
          <h3>How We Fix These Signature Kitchen Suite Range Issues</h3>
          <p>We test each SKS technology separately: gas burners, induction zones, sous vide, steam-combi, convection, speed oven, probes, sensors, pumps, valves, relays, and connected controls.</p>
        </>
      )
    },
    {
      id: "hestan-range-repair",
      title: "Hestan Range Repair",
      heading: "Hestan Range Repair",
      /*img: "/range-repair/hestan-range-repair.webp",*/
      alt: "Hestan range repair technician servicing a luxury gas range",
      description: (
        <>
          <p>We provide <strong>Hestan range repair</strong> for Hestan all-gas ranges, dual fuel ranges, KRG and KRD models, sealed burner rangetops, griddles, PureVection ovens, and professional residential cooking suites. Hestan ranges are high-output appliances with heavy-duty doors, precision probes, and powerful burner assemblies.</p>
          <h3>Hestan Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ PureVection fan, rear heat, sensor, or airflow issues affecting baking consistency</li>
            <li>✅ Gas oven ignition, safety valve, bake burner, and broiler problems on all-gas ranges</li>
            <li>✅ Top burner ignition, simmer, flame stability, or gas valve issues</li>
            <li>✅ Dual fuel range problems where electric oven components and gas cooktop systems must be separated</li>
            <li>✅ Temperature probe, thermostat, relay, and precision cooking concerns</li>
            <li>✅ Door gasket, hinge, heavy-door alignment, and ventilation issues in high-heat installations</li>
          </ul>
          <h3>How We Fix These Hestan Range Issues</h3>
          <p>We test PureVection airflow, gas ignition, oven burners, top burners, elements, sensors, probes, relays, hinges, griddles, and ventilation clearances to restore Hestan’s high-output cooking performance.</p>
        </>
      )
    },
    {
      id: "dacor-range-repair",
      title: "Dacor Range Repair",
      heading: "Dacor Range Repair",
      /*img: "/range-repair/dacor-range-repair.webp",*/
      alt: "Dacor range repair technician servicing a luxury range",
      description: (
        <>
          <p>Our <strong>Dacor range repair</strong> service covers Modernist, Contemporary, Heritage, Discovery, Renaissance, gas ranges, dual fuel ranges, range ovens, steam ovens, speed ovens, and built-in cooking systems. Dacor repairs often involve legacy parts, Pure Convection systems, touch controls, probes, and generation-specific components.</p>
          <h3>Dacor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Four-Part Pure Convection fan, element, relay, and sensor issues on Dacor ovens</li>
            <li>✅ Top burner ignition, gas valve, and simmer-control problems on Dacor ranges</li>
            <li>✅ Legacy Discovery, Renaissance, and Heritage touchpad or control-panel failures</li>
            <li>✅ Modernist and Contemporary display, relay board, probe, and communication issues</li>
            <li>✅ Door lock, self-clean, cooling fan, gasket, or hinge problems</li>
            <li>✅ Parts availability differences between older Dacor units and newer Samsung-era Dacor products</li>
          </ul>
          <h3>How We Fix These Dacor Range Issues</h3>
          <p>We identify the Dacor generation first, then inspect burners, valves, convection components, control boards, touchpads, probes, relays, door systems, and legacy part availability.</p>
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
