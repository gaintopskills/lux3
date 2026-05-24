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
          id: "fisher-paykel-stove-repair",
          title: "Fisher & Paykel Stove Repair",
          heading: "Fisher & Paykel Stove Repair",
          /*img: "/stove-repair/fisher-paykel-stove-repair.webp",*/
          alt: "Fisher and Paykel stove repair technician servicing a luxury cooktop",
          description: (
            <>
              <p>We provide <strong>Fisher & Paykel stove repair</strong> for Series 7, Series 9, and Series 11 gas cooktops, induction cooktops, dual fuel ranges, professional ranges, and integrated cooking surfaces. Fisher & Paykel stoves often use precise flame control, induction electronics, guided cooking features, and clean built-in layouts.</p>
              <h3>Fisher & Paykel Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners clicking, delayed lighting, or producing uneven flame after spills or burner cap misalignment</li>
                <li>✅ Induction zones not detecting cookware or shutting off from cooling or module faults</li>
                <li>✅ Touch controls, lock functions, or display issues on induction cooktops</li>
                <li>✅ Professional range burner, simmer, or ignition problems on Series 9 and Series 11 units</li>
                <li>✅ Flush installation ventilation issues affecting induction module cooling</li>
                <li>✅ Parts differences between Contemporary, Minimal, and Professional style cooking products</li>
              </ul>
              <h3>How We Fix These Fisher & Paykel Stove Issues</h3>
              <p>We inspect Fisher & Paykel burners, caps, igniters, gas valves, induction modules, cooling fans, touch controls, and installation airflow. We verify the series before ordering parts.</p>
            </>
          )
        },
        {
          id: "wolf-stove-repair",
          title: "Wolf Stove Repair",
          heading: "Wolf Stove Repair",
          /*img: "/stove-repair/wolf-stove-repair.webp",*/
          alt: "Wolf stove repair technician servicing a luxury gas range",
          description: (
            <>
              <p>Our <strong>Wolf stove repair</strong> service covers Wolf dual fuel ranges, gas ranges, sealed burner rangetops, gas cooktops, induction cooktops, electric cooktops, griddles, charbroilers, French tops, and outdoor cooking surfaces. Wolf stoves are known for dual-stacked burners, precise simmer, and heavy-duty cooking surfaces.</p>
              <h3>Wolf Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Dual-stacked burners with weak simmer, uneven flame, or delayed ignition</li>
                <li>✅ Burner clicking after cleaning because moisture reaches igniters or spark switches</li>
                <li>✅ Griddle, charbroiler, or French top sections not heating evenly or recovering heat properly</li>
                <li>✅ Induction modules not detecting cookware, overheating, or showing control faults</li>
                <li>✅ Knob, spark module, valve, or burner-base issues on professional rangetops</li>
                <li>✅ Heavy grates, burner caps, and stainless surfaces needing careful cleaning and alignment</li>
              </ul>
              <h3>How We Fix These Wolf Stove Issues</h3>
              <p>We test dual-stacked burner performance, spark ignition, burner seating, gas valves, simmer adjustment, griddle or charbroiler heat, induction modules, and control systems. Wolf stove repair often requires mode-specific testing, not just a basic burner check.</p>
            </>
          )
        },
        {
          id: "thermador-stove-repair",
          title: "Thermador Stove Repair",
          heading: "Thermador Stove Repair",
          /*img: "/stove-repair/thermador-stove-repair.webp",*/
          alt: "Thermador stove repair technician servicing a professional range",
          description: (
            <>
              <p>We provide <strong>Thermador stove repair</strong> for Professional Series, Masterpiece Series, Pro Harmony ranges, Pro Grand ranges, gas rangetops, Star Burner cooktops, induction cooktops, Freedom induction, griddles, grills, and electric cooking surfaces. Thermador stoves require attention to Star Burners, ExtraLow simmer systems, induction electronics, and professional rangetop components.</p>
              <h3>Thermador Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Star Burners with uneven flame, clogged ports, or burner cap seating issues</li>
                <li>✅ ExtraLow simmer cycling problems where the burner does not maintain the expected low heat behavior</li>
                <li>✅ Igniters clicking continuously after cleaning, spills, or switch failure</li>
                <li>✅ Freedom induction or induction zones not detecting pans, overheating, or showing control errors</li>
                <li>✅ Griddle or grill modules not heating evenly on Pro Grand and Pro Harmony models</li>
                <li>✅ Control, spark module, gas valve, or burner-base issues specific to Thermador professional cooking products</li>
              </ul>
              <h3>How We Fix These Thermador Stove Issues</h3>
              <p>We inspect Star Burner alignment, ignition, spark switches, ExtraLow simmer function, gas valves, induction modules, griddle or grill heat, and controls. We separate Pro range diagnosis from Masterpiece cooktop diagnosis because the systems are different.</p>
            </>
          )
        },
        {
          id: "viking-stove-repair",
          title: "Viking Stove Repair",
          heading: "Viking Stove Repair",
          /*img: "/stove-repair/viking-stove-repair.webp",*/
          alt: "Viking stove repair technician servicing a luxury range",
          description: (
            <>
              <p>Our <strong>Viking stove repair</strong> service covers Viking 3 Series, 5 Series, 7 Series, RVL, Professional gas ranges, dual fuel ranges, sealed burner rangetops, open burner legacy ranges, induction cooktops, griddles, and grills. Viking stoves often need careful burner, igniter, valve, and heavy-use component diagnosis.</p>
              <h3>Viking Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Burners clicking but not lighting because of worn igniters, spark modules, or wet ignition switches</li>
                <li>✅ Weak or uneven flame from clogged burner ports, cap misalignment, or valve issues</li>
                <li>✅ Griddle and grill sections heating unevenly or failing to recover heat</li>
                <li>✅ Knob, valve stem, grate, and burner assembly wear on older Professional ranges</li>
                <li>✅ Induction cooktops with cookware detection, touch-control, or overheating issues</li>
                <li>✅ Parts differences between legacy Viking Professional units and newer 3, 5, 7, and RVL Series appliances</li>
              </ul>
              <h3>How We Fix These Viking Stove Issues</h3>
              <p>We test ignition, spark modules, burner assemblies, gas valves, griddles, grills, induction electronics, and heavy-use wear points. For Viking, we identify the series before ordering parts because components vary widely by generation.</p>
            </>
          )
        },
        {
          id: "monogram-stove-repair",
          title: "Monogram Stove Repair",
          heading: "Monogram Stove Repair",
          /*img: "/stove-repair/monogram-stove-repair.webp",*/
          alt: "Monogram stove repair technician servicing a luxury rangetop",
          description: (
            <>
              <p>We provide <strong>Monogram stove repair</strong> for Statement and Minimalist gas cooktops, induction cooktops, professional ranges, rangetops, dual fuel ranges, and Advantium-adjacent cooking installations. Monogram stoves often combine premium built-in design with electronic ignition, induction controls, and professional burner systems.</p>
              <h3>Monogram Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Sealed burners clicking, lighting slowly, or producing uneven flame after spills or cap misalignment</li>
                <li>✅ Induction zones not recognizing cookware or shutting down from module or cooling issues</li>
                <li>✅ Touch controls, lock functions, and display issues on newer Monogram cooktops</li>
                <li>✅ Professional rangetop griddle, grill, or high-output burner performance concerns</li>
                <li>✅ Knob, valve, spark module, and control-board faults depending on the cooking platform</li>
                <li>✅ Flush installation and ventilation issues on integrated Monogram cooktops</li>
              </ul>
              <h3>How We Fix These Monogram Stove Issues</h3>
              <p>We identify whether the appliance is a gas cooktop, induction cooktop, rangetop, or professional range. Then we test ignition, burners, gas valves, induction boards, touch controls, ventilation, and high-output modules.</p>
            </>
          )
        },
        {
          id: "signature-kitchen-suite-stove-repair",
          title: "Signature Kitchen Suite Stove Repair",
          heading: "Signature Kitchen Suite Stove Repair",
          /*img: "/stove-repair/signature-kitchen-suite-stove-repair.webp",*/
          alt: "Signature Kitchen Suite stove repair technician servicing a luxury range",
          description: (
            <>
              <p>Our <strong>Signature Kitchen Suite stove repair</strong> service covers SKS pro ranges, dual fuel ranges, gas cooktops, induction cooktops, rangetops, wok burners, griddles, and ranges with built-in sous vide or induction features. SKS stoves often require diagnosis of mixed cooking technologies in one appliance.</p>
              <h3>Signature Kitchen Suite Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Dual fuel range issues where gas burners and electric/induction systems must be diagnosed separately</li>
                <li>✅ Induction zones not detecting cookware, overheating, or showing touch-control errors</li>
                <li>✅ High-output gas burners with ignition, flame stability, or valve problems</li>
                <li>✅ Griddle, wok burner, or specialty cooking module performance issues</li>
                <li>✅ Connected controls, display, or module communication problems</li>
                <li>✅ Parts matching between SKS pro ranges, gas cooktops, induction cooktops, and transitional models</li>
              </ul>
              <h3>How We Fix These Signature Kitchen Suite Stove Issues</h3>
              <p>We test SKS cooking systems by function: gas burner, induction zone, griddle, wok burner, or connected-control system. This prevents a mixed-technology appliance from being misdiagnosed as a basic stove problem.</p>
            </>
          )
        },
        {
          id: "hestan-stove-repair",
          title: "Hestan Stove Repair",
          heading: "Hestan Stove Repair",
          /*img: "/stove-repair/hestan-stove-repair.webp",*/
          alt: "Hestan stove repair technician servicing a luxury gas range",
          description: (
            <>
              <p>We provide <strong>Hestan stove repair</strong> for Hestan all-gas ranges, dual fuel ranges, KRG and KRD models, rangetops, sealed burner systems, griddles, and luxury residential cooking suites. Hestan stoves use high-output burners, heavy-duty grates, professional controls, and precision cooking components.</p>
              <h3>Hestan Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ High-output burners with delayed ignition, uneven flame, or simmer-control problems</li>
                <li>✅ Gas valve, regulator, burner-base, or igniter issues on all-gas and dual fuel ranges</li>
                <li>✅ Griddle sections not heating evenly or not reaching proper temperature</li>
                <li>✅ Knob, valve stem, and heavy grate wear from frequent pro-style cooking</li>
                <li>✅ Ventilation and clearance concerns around high-heat rangetop installations</li>
                <li>✅ Parts matching between KRG, KRD, and other Hestan cooking configurations</li>
              </ul>
              <h3>How We Fix These Hestan Stove Issues</h3>
              <p>We inspect Hestan burners, igniters, gas valves, regulators, griddles, knobs, and ventilation clearances. We also verify the exact model family before selecting replacement parts.</p>
            </>
          )
        },
        {
          id: "dacor-stove-repair",
          title: "Dacor Stove Repair",
          heading: "Dacor Stove Repair",
          /*img: "/stove-repair/dacor-stove-repair.webp",*/
          alt: "Dacor stove repair technician servicing a luxury cooktop",
          description: (
            <>
              <p>Our <strong>Dacor stove repair</strong> service covers Modernist, Contemporary, Heritage, Discovery, Renaissance, gas cooktops, induction cooktops, dual fuel ranges, rangetops, and legacy Dacor cooking appliances. Dacor stove repair often involves identifying whether the unit is an older Dacor model or a newer Samsung-era Dacor product.</p>
              <h3>Dacor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Legacy Dacor gas burners with ignition, spark module, valve, or burner cap problems</li>
                <li>✅ Induction zones with cookware detection, cooling fan, or touch-control issues</li>
                <li>✅ Control panel, relay, sensor, or electronic module faults on newer Dacor models</li>
                <li>✅ Knob, trim, grate, and burner-base wear on older Heritage and Renaissance products</li>
                <li>✅ Parts availability differences between legacy Dacor and newer Dacor product lines</li>
                <li>✅ Gas rangetop and dual fuel range issues where burner systems and oven systems must be separated</li>
              </ul>
              <h3>How We Fix These Dacor Stove Issues</h3>
              <p>We identify the Dacor generation first, then test ignition, burners, valves, induction boards, touch controls, cooling airflow, and legacy parts compatibility before repair.</p>
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
