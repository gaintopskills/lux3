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
      id: "fisher-paykel-cooktop-repair",
      title: "Fisher & Paykel Cooktop Repair",
      heading: "Fisher & Paykel Cooktop Repair",
      /*img: "/cooktop-repair/fisher-paykel-cooktop-repair.webp",*/
      alt: "Fisher and Paykel cooktop repair technician servicing a luxury cooking surface",
      description: (
        <>
          <p>We provide <strong>Fisher & Paykel cooktop repair</strong> for gas cooktops, induction cooktops, Series 7 and Series 9 cooking surfaces, Professional gas rangetops, Contemporary cooktops, Minimal cooktops, and built-in cooking installations. Fisher & Paykel cooktops are designed around precise temperature control, clean integration, and platform-specific electronics.</p>
          <h3>Fisher & Paykel Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones failing to detect cookware, bridge correctly, or maintain power</li>
            <li>✅ Gas burners clicking, lighting slowly, or producing an uneven flame</li>
            <li>✅ Sealed dual-flow burners losing low-simmer or high-output performance</li>
            <li>✅ Touch controls, displays, sensors, or induction boards developing faults</li>
            <li>✅ Cooling airflow or installation ventilation affecting induction reliability</li>
            <li>✅ Flush or Minimal-style installations requiring careful service access</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Cooktop Issues</h3>
          <p>We test gas burners, ignition, valves, induction boards, cookware detection, controls, sensors, cooling fans, electrical supply, and installation airflow so the repair matches the specific Fisher & Paykel cooktop platform.</p>
        </>
      )
    },
    {
      id: "wolf-cooktop-repair",
      title: "Wolf Cooktop Repair",
      heading: "Wolf Cooktop Repair",
      /*img: "/cooktop-repair/wolf-cooktop-repair.webp",*/
      alt: "Wolf cooktop repair technician servicing a luxury gas or induction cooktop",
      description: (
        <>
          <p>Our <strong>Wolf cooktop repair</strong> service covers Wolf gas cooktops, induction cooktops, electric cooktops, professional gas rangetops, sealed-burner rangetops, griddle sections, charbroilers, and French-top configurations. Wolf cooktops require exact diagnosis because gas, induction, electric, and rangetop platforms use different components and service methods.</p>
          <h3>Wolf Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dual-stacked burners clicking, lighting slowly, losing simmer performance, or producing uneven flame</li>
            <li>✅ Induction zones not recognizing cookware, shutting down, or showing power-related errors</li>
            <li>✅ Electric elements cycling incorrectly or failing to reach the selected temperature</li>
            <li>✅ Griddle, charbroiler, or French-top sections developing heat-recovery problems</li>
            <li>✅ Spark modules, electrodes, valves, controls, or cooling fans becoming intermittent</li>
            <li>✅ Built-in ventilation and service-access concerns in tightly integrated luxury kitchens</li>
          </ul>
          <h3>How We Fix These Wolf Cooktop Issues</h3>
          <p>We test Wolf burner assemblies, spark modules, electrodes, gas valves, simmer settings, induction boards, electric elements, cooling fans, specialty surfaces, and installation ventilation while protecting cabinetry and stainless finishes.</p>
        </>
      )
    },
    {
      id: "thermador-cooktop-repair",
      title: "Thermador Cooktop Repair",
      heading: "Thermador Cooktop Repair",
      /*img: "/cooktop-repair/thermador-cooktop-repair.webp",*/
      alt: "Thermador cooktop repair technician servicing a Star Burner rangetop or induction cooktop",
      description: (
        <>
          <p>We provide <strong>Thermador cooktop repair</strong> for gas cooktops, induction cooktops, electric cooktops, Professional Series rangetops, Masterpiece cooktops, Freedom induction surfaces, and Star Burner cooking systems. Thermador cooktop repair often involves precise diagnosis of ignition, gas delivery, induction electronics, controls, and ventilation.</p>
          <h3>Thermador Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Star Burners clicking, lighting unevenly, or showing weak flame after spills or debris buildup</li>
            <li>✅ Gas burners failing to maintain ExtraLow-style simmer performance</li>
            <li>✅ Freedom or standard induction zones not recognizing cookware or shutting down during use</li>
            <li>✅ Touch controls, power boards, sensors, or cooling fans developing faults</li>
            <li>✅ Electric elements cycling incorrectly or failing to heat</li>
            <li>✅ Downdraft or ventilation issues affecting cooking performance and heat management</li>
          </ul>
          <h3>How We Fix These Thermador Cooktop Issues</h3>
          <p>We inspect Star Burners, spark electrodes, gas valves, simmer controls, induction modules, cookware detection, electric elements, touch controls, sensors, cooling fans, electrical supply, and ventilation so the repair matches the Thermador platform.</p>
        </>
      )
    },
    {
      id: "viking-cooktop-repair",
      title: "Viking Cooktop Repair",
      heading: "Viking Cooktop Repair",
      /*img: "/cooktop-repair/viking-cooktop-repair.webp",*/
      alt: "Viking cooktop repair technician servicing a luxury professional cooking surface",
      description: (
        <>
          <p>Our <strong>Viking cooktop repair</strong> service covers Viking gas cooktops, electric cooktops, induction cooktops, professional rangetops, sealed-burner surfaces, griddles, and legacy Viking cooking appliances. Viking cooktop issues often involve ignition, burner assemblies, valves, controls, induction electronics, and high-use pro-style components.</p>
          <h3>Viking Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners clicking, lighting slowly, or producing uneven flame from igniter, valve, or burner issues</li>
            <li>✅ Gas burners failing to hold a stable low simmer or full high-output flame</li>
            <li>✅ Induction zones not detecting cookware or shutting down during cooking</li>
            <li>✅ Electric elements, switches, or controls failing to cycle correctly</li>
            <li>✅ Griddle sections developing uneven heat or slow recovery</li>
            <li>✅ Legacy Viking parts differences between older Professional units and newer cooking platforms</li>
          </ul>
          <h3>How We Fix These Viking Cooktop Issues</h3>
          <p>We test burner ignition, electrodes, spark modules, gas valves, induction boards, electric elements, switches, griddle controls, electrical supply, and series-specific parts compatibility before repair.</p>
        </>
      )
    },
    {
      id: "monogram-cooktop-repair",
      title: "Monogram Cooktop Repair",
      heading: "Monogram Cooktop Repair",
      /*img: "/cooktop-repair/monogram-cooktop-repair.webp",*/
      alt: "Monogram cooktop repair technician servicing a luxury cooktop or rangetop",
      description: (
        <>
          <p>We provide <strong>Monogram cooktop repair</strong> for Monogram induction cooktops, electric cooktops, professional gas rangetops, gas cooktops, Statement cooking surfaces, Minimalist cooking surfaces, and precision-cooking installations. Monogram service often involves premium finishes, integrated controls, induction electronics, and mode-specific diagnosis.</p>
          <h3>Monogram Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones failing to detect cookware, bridge correctly, or maintain selected output</li>
            <li>✅ Electric elements cycling incorrectly or failing to heat</li>
            <li>✅ Professional gas rangetop burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Touch controls, glide controls, power boards, sensors, or connectivity features becoming intermittent</li>
            <li>✅ Cooling airflow and cabinet ventilation affecting induction performance</li>
            <li>✅ Statement and Minimalist finish, handle, and panel protection during service</li>
          </ul>
          <h3>How We Fix These Monogram Cooktop Issues</h3>
          <p>We diagnose Monogram by platform: induction, electric, gas cooktop, or professional rangetop. We test burners, valves, elements, induction boards, touch controls, sensors, cooling fans, electrical supply, and ventilation while protecting premium panels and finishes.</p>
        </>
      )
    },
    {
      id: "signature-kitchen-suite-cooktop-repair",
      title: "Signature Kitchen Suite Cooktop Repair",
      heading: "Signature Kitchen Suite Cooktop Repair",
      /*img: "/cooktop-repair/signature-kitchen-suite-cooktop-repair.webp",*/
      alt: "Signature Kitchen Suite cooktop repair technician servicing a luxury induction cooktop or pro rangetop",
      description: (
        <>
          <p>Our <strong>Signature Kitchen Suite cooktop repair</strong> service covers SKS Flex Induction Cooktops and pro rangetops with gas burners, induction zones, Chromium griddles, and built-in sous vide modules. SKS cooking surfaces can combine several technologies in one installation, so each section must be diagnosed separately.</p>
          <h3>Signature Kitchen Suite Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Flex induction zones not linking, detecting cookware, or maintaining selected power</li>
            <li>✅ High-output or ultra-low gas burners developing ignition, flame, or valve problems</li>
            <li>✅ Built-in sous vide modules not reaching temperature or responding correctly</li>
            <li>✅ Chromium griddle sections heating unevenly or losing temperature stability</li>
            <li>✅ Smart Knobs, LCD controls, Wi-Fi features, or module communication becoming intermittent</li>
            <li>✅ Hybrid rangetop issues where gas, induction, sous vide, and griddle systems must be tested independently</li>
          </ul>
          <h3>How We Fix These Signature Kitchen Suite Cooktop Issues</h3>
          <p>We test each SKS technology independently: gas burners, induction zones, sous vide module, griddle, controls, sensors, power boards, valves, cooling airflow, electrical supply, and connected features.</p>
        </>
      )
    },
    {
      id: "hestan-cooktop-repair",
      title: "Hestan Cooktop Repair",
      heading: "Hestan Cooktop Repair",
      /*img: "/cooktop-repair/hestan-cooktop-repair.webp",*/
      alt: "Hestan cooktop repair technician servicing a luxury sealed-burner rangetop",
      description: (
        <>
          <p>We provide <strong>Hestan cooktop repair</strong> for Hestan sealed-burner rangetops, professional gas cooking surfaces, griddle configurations, high-output burners, and residential chef-style installations. Hestan cooking surfaces are designed for powerful heat output, so burner condition, ignition, gas pressure, valve response, and ventilation must work together correctly.</p>
          <h3>Hestan Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Burners failing to maintain low-simmer control or full high-output performance</li>
            <li>✅ Gas valves, regulators, spark components, or burner assemblies becoming inconsistent</li>
            <li>✅ Griddle sections developing uneven heat distribution or slow recovery</li>
            <li>✅ Knobs, controls, or indicator components requiring adjustment or replacement</li>
            <li>✅ High-heat installations where ventilation, clearances, and gas delivery need to be verified</li>
          </ul>
          <h3>How We Fix These Hestan Cooktop Issues</h3>
          <p>We test Hestan burners, spark electrodes, ignition switches, gas valves, regulators, manifold pressure, griddle performance, controls, and ventilation clearances to restore high-output cooking performance.</p>
        </>
      )
    },
    {
      id: "dacor-cooktop-repair",
      title: "Dacor Cooktop Repair",
      heading: "Dacor Cooktop Repair",
      /*img: "/cooktop-repair/dacor-cooktop-repair.webp",*/
      alt: "Dacor cooktop repair technician servicing a luxury gas or induction cooktop",
      description: (
        <>
          <p>Our <strong>Dacor cooktop repair</strong> service covers Dacor gas cooktops, induction cooktops, gas rangetops, Modernist cooking surfaces, Contemporary cooking surfaces, and legacy Dacor built-in cooktops. Dacor repairs often involve generation-specific controls, FlexZone-style induction sections, gas ignition, and parts compatibility.</p>
          <h3>Dacor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones or flexible cooking modules not detecting cookware or maintaining power</li>
            <li>✅ Gas burners clicking, lighting unevenly, or failing to simmer correctly</li>
            <li>✅ Touch controls, LCD panels, sensors, or power boards becoming intermittent</li>
            <li>✅ Cooling fan, electrical supply, or cabinet ventilation issues affecting induction performance</li>
            <li>✅ Gas valves, electrodes, switches, or burner assemblies requiring repair</li>
            <li>✅ Parts-availability differences between older Dacor units and newer Dacor product generations</li>
          </ul>
          <h3>How We Fix These Dacor Cooktop Issues</h3>
          <p>We identify the Dacor generation first, then inspect induction modules, touch controls, cooling fans, gas burners, valves, spark components, sensors, electrical supply, ventilation, and legacy part availability.</p>
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
