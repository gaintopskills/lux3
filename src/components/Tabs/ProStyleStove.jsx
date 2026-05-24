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
          id: "american-range-stove-repair",
          title: "American Range Stove Repair",
          heading: "American Range Stove Repair",
          /*img: "/stove-repair/american-range-stove-repair.webp",*/
          alt: "American Range stove repair technician servicing a pro-style range",
          description: (
            <>
              <p>We provide <strong>American Range stove repair</strong> for Performer Series, Cuisine Series, Legend Series, Medallion Series, residential pro-style ranges, rangetops, griddles, charbroilers, and commercial-style cooking equipment. American Range stoves are built for high-output cooking and heavy use.</p>
              <h3>American Range Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ High-output burners with ignition delay, weak flame, or uneven flame pattern</li>
                <li>✅ Gas valves, regulators, or burner assemblies affected by heavy use and grease buildup</li>
                <li>✅ Griddle or charbroiler sections not heating evenly or recovering heat slowly</li>
                <li>✅ Pilot, spark ignition, or safety system issues depending on model type</li>
                <li>✅ Knob, valve stem, drip tray, grate, and burner-head wear from frequent cooking</li>
                <li>✅ Residential versus commercial American Range parts differences that must be confirmed before repair</li>
              </ul>
              <h3>How We Fix These American Range Stove Issues</h3>
              <p>We test gas pressure, ignition, burner assemblies, valves, griddles, charbroilers, regulators, and heavy-use wear points. We also confirm whether the unit is residential, commercial-style, or commercial equipment before ordering parts.</p>
            </>
          )
        },
        {
          id: "bluestar-stove-repair",
          title: "BlueStar Stove Repair",
          heading: "BlueStar Stove Repair",
          /*img: "/stove-repair/bluestar-stove-repair.webp",*/
          alt: "BlueStar stove repair technician servicing a pro-style open burner range",
          description: (
            <>
              <p>Our <strong>BlueStar stove repair</strong> service covers Platinum Series, RNB Series, RCS Series, Precious Metals, open-burner ranges, sealed-burner ranges, rangetops, griddles, charbroilers, and custom color appliances. BlueStar stoves are known for high-output open burners and pro-style cooking performance.</p>
              <h3>BlueStar Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Open burners with uneven flame because burner ports, venturi tubes, or caps need cleaning or adjustment</li>
                <li>✅ Igniters sparking weakly or clicking continuously after spills or cleaning</li>
                <li>✅ Burner flame too high, too low, or unstable from gas valve, regulator, or air-mix issues</li>
                <li>✅ Griddle or charbroiler sections heating unevenly or failing to recover heat</li>
                <li>✅ Heavy cast grates, drip trays, and burner bowls showing wear from high-heat cooking</li>
                <li>✅ Custom color panels and enamel surfaces that need protection during service</li>
              </ul>
              <h3>How We Fix These BlueStar Stove Issues</h3>
              <p>We inspect BlueStar open burners, sealed burners, igniters, spark modules, gas valves, regulators, air shutters, griddles, and charbroilers. We also handle custom color panels and pro-style trim carefully.</p>
            </>
          )
        },
        {
          id: "fivestar-stove-repair",
          title: "FiveStar Stove Repair",
          heading: "FiveStar Stove Repair",
          /*img: "/stove-repair/fivestar-stove-repair.webp",*/
          alt: "FiveStar stove repair technician servicing a professional gas range",
          description: (
            <>
              <p>We service <strong>FiveStar stove repair</strong> for gas ranges, dual fuel ranges, sealed burner ranges, griddle and grill configurations, side-by-side range layouts, and legacy pro-style FiveStar cooking appliances. Many FiveStar stoves are older, so parts compatibility and safe operation are key.</p>
              <h3>FiveStar Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Legacy burner ignition issues involving spark electrodes, modules, switches, or wiring</li>
                <li>✅ Gas burners that light but will not hold steady flame because of valve or burner assembly wear</li>
                <li>✅ Griddle or grill sections not heating evenly or failing to ignite reliably</li>
                <li>✅ Control knobs, valve stems, and burner assemblies worn from long service life</li>
                <li>✅ Older gasket, trim, drip pan, and grate parts that may be harder to source</li>
                <li>✅ Parts matching challenges on discontinued or less common FiveStar configurations</li>
              </ul>
              <h3>How We Fix These FiveStar Stove Issues</h3>
              <p>We inspect ignition, burners, gas valves, switches, wiring, griddle and grill sections, and model-specific parts. For older FiveStar ranges, we verify compatibility before recommending replacement components.</p>
            </>
          )
        },
        {
          id: "thor-stove-repair",
          title: "Thor Stove Repair",
          heading: "Thor Kitchen Stove Repair",
          /*img: "/stove-repair/thor-stove-repair.webp",*/
          alt: "Thor Kitchen stove repair technician servicing a professional range",
          description: (
            <>
              <p>We provide <strong>Thor Kitchen stove repair</strong> for professional gas ranges, dual fuel ranges, electric ranges, induction ranges, rangetops, sealed burner cooktops, griddles, and pro-style cooking suites. Thor stoves often combine commercial-style design with electronic ignition, induction modules, and stainless cooking surfaces.</p>
              <h3>Thor Kitchen Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners clicking but not lighting because of spark electrode, ignition switch, or moisture issues</li>
                <li>✅ Flame pattern problems caused by burner cap seating, clogged ports, or valve adjustment needs</li>
                <li>✅ Induction zones not recognizing cookware or shutting down during cooking</li>
                <li>✅ Griddle sections heating unevenly or taking too long to recover</li>
                <li>✅ Knob, display, relay, or control-board issues on electric and induction models</li>
                <li>✅ Model-specific parts matching across Thor gas, dual fuel, electric, and induction platforms</li>
              </ul>
              <h3>How We Fix These Thor Kitchen Stove Issues</h3>
              <p>We identify the fuel type first, then inspect burners, igniters, switches, valves, induction modules, control boards, griddles, and stainless surfaces so the repair fits the exact Thor stove configuration.</p>
            </>
          )
        },
        {
          id: "forno-stove-repair",
          title: "Forno Stove Repair",
          heading: "Forno Stove Repair",
          /*img: "/stove-repair/forno-stove-repair.webp",*/
          alt: "Forno stove repair technician servicing a modern range",
          description: (
            <>
              <p>Our <strong>Forno stove repair</strong> service covers Forno gas ranges, dual fuel ranges, induction ranges, cooktops, rangetops, sealed burner systems, and large-capacity pro-style cooking appliances. Forno stoves often require exact model verification because controls, burners, and parts vary by series.</p>
              <h3>Forno Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Burners clicking continuously or lighting slowly after moisture reaches the ignition area</li>
                <li>✅ Uneven flame from burner cap misalignment, clogged ports, or gas valve issues</li>
                <li>✅ Induction zones with cookware detection, touch-control, or overheating problems</li>
                <li>✅ Control knob, selector, display, or relay issues depending on model generation</li>
                <li>✅ Grate, burner cap, trim, and stainless finish wear from heavy use</li>
                <li>✅ Parts lookup challenges when the model number is incomplete or the series is unclear</li>
              </ul>
              <h3>How We Fix These Forno Stove Issues</h3>
              <p>We verify the Forno model and series, then test ignition, burners, valves, induction boards, cooling airflow, controls, and surface components. Correct parts matching is especially important before repair.</p>
            </>
          )
        },
        {
          id: "garland-stove-repair",
          title: "Garland Stove Repair",
          heading: "Garland Stove Repair",
          /*img: "/stove-repair/garland-stove-repair.webp",*/
          alt: "Garland commercial stove repair technician servicing a heavy duty range",
          description: (
            <>
              <p>We provide <strong>Garland stove repair</strong> for commercial ranges, Master Series heavy-duty ranges, gas burners, griddles, charbroilers, hot tops, and restaurant-style cooking equipment installed in private estates, chef kitchens, event spaces, and commercial kitchens. Garland stoves are designed for heavy use and high heat recovery.</p>
              <h3>Garland Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Pilot, burner, safety valve, and gas pressure issues on heavy-duty range sections</li>
                <li>✅ Griddle or hot top temperature problems caused by thermostat, burner, or gas-flow faults</li>
                <li>✅ Charbroiler burners clogged by grease, debris, or heavy-use buildup</li>
                <li>✅ Knob, valve stem, grate, drip tray, and burner wear from repeated commercial use</li>
                <li>✅ High-load electrical or gas connection concerns on mixed cooking equipment</li>
                <li>✅ Service access differences between commercial kitchen equipment and residential installations</li>
              </ul>
              <h3>How We Fix These Garland Stove Issues</h3>
              <p>We inspect pilots, burners, gas valves, thermostats, griddles, charbroilers, regulators, and heavy-use wear points. We focus on safe operation, heat recovery, and the exact Garland equipment configuration.</p>
            </>
          )
        },
        {
          id: "zline-stove-repair",
          title: "ZLINE Stove Repair",
          heading: "ZLINE Stove Repair",
          /*img: "/stove-repair/zline-stove-repair.webp",*/
          alt: "ZLINE stove repair technician servicing a professional range",
          description: (
            <>
              <p>Our <strong>ZLINE stove repair</strong> service covers ZLINE gas ranges, dual fuel ranges, induction ranges, rangetops, cooktops, Autograph Edition models, sealed burners, brass burners, and pro-style cooking appliances. ZLINE stoves often combine decorative finishes with modern ignition and induction systems.</p>
              <h3>ZLINE Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Brass or sealed burners with weak ignition, uneven flame, or cap-seating problems</li>
                <li>✅ Autograph Edition handles, knobs, and decorative trim that need careful handling during service</li>
                <li>✅ Induction zones with touch-control, cookware detection, or overheating faults</li>
                <li>✅ Spark module, igniter, gas valve, or burner port problems on gas models</li>
                <li>✅ Control display, selector, or relay issues on electric and induction models</li>
                <li>✅ Parts matching differences between ZLINE gas, dual fuel, induction, and rangetop products</li>
              </ul>
              <h3>How We Fix These ZLINE Stove Issues</h3>
              <p>We test the failing cooking surface by fuel type: gas, dual fuel, induction, or electric. We inspect ignition, burner seating, gas valves, induction boards, controls, and trim protection before repair.</p>
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
