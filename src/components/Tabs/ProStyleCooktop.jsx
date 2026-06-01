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
      id: "american-range-cooktop-repair",
      title: "American Range Cooktop Repair",
      heading: "American Range Cooktop Repair",
      /*img: "/cooktop-repair/american-range-cooktop-repair.webp",*/
      alt: "American Range cooktop repair technician servicing a professional rangetop",
      description: (
        <>
          <p>We provide <strong>American Range cooktop repair</strong> for residential pro-style rangetops, gas cooking surfaces, griddle sections, charbroilers, and commercial-style equipment installed in private homes and chef kitchens. American Range cooking surfaces are designed for high-output use, so burner condition, gas delivery, ignition, and heat recovery matter.</p>
          <h3>American Range Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ High-output burners with weak flame, delayed ignition, or uneven combustion</li>
            <li>✅ Pilots, spark components, valves, or safety controls wearing from repeated heavy use</li>
            <li>✅ Griddle or charbroiler sections taking too long to recover heat</li>
            <li>✅ Knobs, thermostatic controls, or valves becoming stiff or inconsistent</li>
            <li>✅ Gas-pressure or regulator issues affecting multiple burners at once</li>
            <li>✅ Parts differences between residential pro-style units and true commercial American Range equipment</li>
          </ul>
          <h3>How We Fix These American Range Cooktop Issues</h3>
          <p>We inspect burners, pilots, ignition components, gas pressure, regulators, valves, griddle controls, charbroiler sections, and heavy-use wear points. We also confirm whether the appliance is residential, commercial-style, or true commercial equipment.</p>
        </>
      )
    },
    {
      id: "bluestar-cooktop-repair",
      title: "BlueStar Cooktop Repair",
      heading: "BlueStar Cooktop Repair",
      /*img: "/cooktop-repair/bluestar-cooktop-repair.webp",*/
      alt: "BlueStar cooktop repair technician servicing a professional gas cooktop",
      description: (
        <>
          <p>Our <strong>BlueStar cooktop repair</strong> service covers BlueStar X-8 gas cooktops, Platinum and RNB rangetops, open-burner cooking surfaces, griddle sections, charbroilers, French tops, and custom-color professional cooking installations. BlueStar cooktops are known for powerful burners, heavy grates, and chef-style surface options.</p>
          <h3>BlueStar Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Open burners or sealed burners with uneven flame from debris, clogged ports, cap placement, or gas pressure</li>
            <li>✅ High-output burners lighting slowly or failing to maintain a stable simmer</li>
            <li>✅ Ignition switches, spark electrodes, or spark modules clicking continuously</li>
            <li>✅ Interchangeable griddle or charbroiler sections heating inconsistently</li>
            <li>✅ French-top sections developing uneven surface temperatures</li>
            <li>✅ Custom-color panels, enamel, and stainless trim requiring careful protection during service</li>
          </ul>
          <h3>How We Fix These BlueStar Cooktop Issues</h3>
          <p>We inspect burner ports, burner heads, spark systems, gas valves, regulators, gas pressure, griddle components, charbroiler sections, French-top performance, and finish-sensitive access areas while protecting custom panels and pro-style trim.</p>
        </>
      )
    },
    {
      id: "fivestar-cooktop-repair",
      title: "FiveStar Cooktop Repair",
      heading: "FiveStar Cooktop Repair",
      /*img: "/cooktop-repair/fivestar-cooktop-repair.webp",*/
      alt: "FiveStar cooktop repair technician servicing a legacy professional cooking surface",
      description: (
        <>
          <p>We provide <strong>FiveStar cooktop repair</strong> for sealed-burner surfaces, gas cooking sections, griddle and grill configurations, rangetop-style installations, and cooktop sections built into legacy FiveStar ranges. FiveStar repairs often require careful model identification because older configurations and parts availability can vary.</p>
          <h3>FiveStar Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Sealed burners lighting slowly, clicking continuously, or producing uneven flame</li>
            <li>✅ Griddle or grill sections failing to reach or maintain proper cooking temperature</li>
            <li>✅ Gas valves, ignition components, or burner assemblies wearing on older models</li>
            <li>✅ Knobs and controls becoming stiff, loose, or inconsistent</li>
            <li>✅ Gas-pressure issues affecting burner performance across the surface</li>
            <li>✅ Parts-availability challenges on discontinued or less common FiveStar configurations</li>
          </ul>
          <h3>How We Fix These FiveStar Cooktop Issues</h3>
          <p>We inspect burners, ignition, valves, gas delivery, griddle and grill sections, knobs, controls, and legacy parts compatibility. We verify the exact FiveStar model before recommending replacement components.</p>
        </>
      )
    },
    {
      id: "thor-cooktop-repair",
      title: "Thor Kitchen Cooktop Repair",
      heading: "Thor Kitchen Cooktop Repair",
      /*img: "/cooktop-repair/thor-cooktop-repair.webp",*/
      alt: "Thor Kitchen cooktop repair technician servicing a modern gas or induction cooktop",
      description: (
        <>
          <p>We provide <strong>Thor Kitchen cooktop repair</strong> for gas cooktops, professional-style rangetops, induction cooktops, burner surfaces, and griddle configurations. Thor cooking surfaces combine stainless pro-style design with electronic ignition, gas valves, touch controls, induction modules, and model-specific components.</p>
          <h3>Thor Kitchen Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burner ignition clicking, delayed lighting, or flame instability</li>
            <li>✅ Burner caps, ports, electrodes, or switches needing cleaning, adjustment, or replacement</li>
            <li>✅ Induction zones failing to recognize cookware or shutting down under load</li>
            <li>✅ Touch controls or power boards becoming intermittent on induction models</li>
            <li>✅ Griddle sections heating unevenly or taking too long to recover temperature</li>
            <li>✅ Parts-matching differences between Thor gas, induction, and rangetop platforms</li>
          </ul>
          <h3>How We Fix These Thor Kitchen Cooktop Issues</h3>
          <p>We confirm the Thor cooking platform first, then test burner assemblies, electrodes, ignition switches, gas valves, induction boards, touch controls, electrical supply, cooling airflow, and griddle performance.</p>
        </>
      )
    },
    {
      id: "forno-cooktop-repair",
      title: "Forno Cooktop Repair",
      heading: "Forno Cooktop Repair",
      /*img: "/cooktop-repair/forno-cooktop-repair.webp",*/
      alt: "Forno cooktop repair technician servicing a modern induction cooktop",
      description: (
        <>
          <p>Our <strong>Forno cooktop repair</strong> service covers Forno Parco induction cooktops, Ornonzo induction cooktops, flex-zone cooking surfaces, booster-function models, touch-control cooktops, and supported Forno built-in cooking surfaces. Forno cooktop service depends heavily on exact model verification because wattage, zone layout, controls, and parts vary by series.</p>
          <h3>Forno Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not recognizing cookware or failing to heat consistently</li>
            <li>✅ Flex-zone linking, booster, or Stop & Go functions not responding correctly</li>
            <li>✅ Touch controls, timers, or power-level settings becoming intermittent</li>
            <li>✅ Cooktop shutting down because of overheating, airflow, or electrical-supply issues</li>
            <li>✅ Glass-surface warning indicators or zone controls displaying errors</li>
            <li>✅ Parts lookup problems when the exact model and serial number are not confirmed</li>
          </ul>
          <h3>How We Fix These Forno Cooktop Issues</h3>
          <p>We verify the Forno model and zone layout, then test cookware detection, induction boards, touch controls, flex-zone functions, booster circuits, electrical supply, cooling airflow, and installation conditions before recommending replacement parts.</p>
        </>
      )
    },
    {
      id: "garland-cooktop-repair",
      title: "Garland Cooktop Repair",
      heading: "Garland Cooktop Repair",
      /*img: "/cooktop-repair/garland-cooktop-repair.webp",*/
      alt: "Garland cooktop repair technician servicing a commercial cooking surface",
      description: (
        <>
          <p>We provide <strong>Garland cooktop repair</strong> for commercial hot plates, open-burner ranges, rangetop sections, griddles, charbroilers, and restaurant-style cooking equipment installed in chef kitchens, event spaces, estates, and commercial kitchens. Garland equipment is built for demanding use and fast heat recovery.</p>
          <h3>Garland Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners, pilots, gas valves, and safety controls wearing from repeated heavy use</li>
            <li>✅ Open burners developing weak flame or uneven combustion from buildup or gas-delivery problems</li>
            <li>✅ Griddle or charbroiler sections losing heat recovery during high-volume cooking</li>
            <li>✅ Thermostats, valves, or controls becoming inconsistent under heavy use</li>
            <li>✅ Gas-pressure, regulator, or manifold problems affecting multiple cooking zones</li>
            <li>✅ Grease, moisture, and heavy-use wear around commercial cooking components</li>
          </ul>
          <h3>How We Fix These Garland Cooktop Issues</h3>
          <p>We inspect burners, pilots, gas flow, thermostats, valves, regulators, manifold pressure, griddle controls, charbroiler sections, and commercial-use wear points so the cooking surface can perform safely under demanding conditions.</p>
        </>
      )
    },
    {
      id: "zline-cooktop-repair",
      title: "ZLINE Cooktop Repair",
      heading: "ZLINE Cooktop Repair",
      /*img: "/cooktop-repair/zline-cooktop-repair.webp",*/
      alt: "ZLINE cooktop repair technician servicing a gas or induction cooktop",
      description: (
        <>
          <p>Our <strong>ZLINE cooktop repair</strong> service covers ZLINE gas cooktops, induction cooktops, gas rangetops, Autograph Edition cooking surfaces, and professional-style built-in cooktops. ZLINE repairs often involve both performance diagnosis and finish-sensitive handling.</p>
          <h3>ZLINE Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners with weak ignition, uneven flame, or delayed lighting</li>
            <li>✅ Burner caps, electrodes, switches, or spark modules clicking continuously</li>
            <li>✅ Induction zones failing to detect cookware or shutting down during use</li>
            <li>✅ Touch controls, power boards, or cooling airflow causing intermittent induction performance</li>
            <li>✅ Rangetop burners or griddle sections not maintaining consistent heat</li>
            <li>✅ Autograph Edition handles, accents, and decorative trim requiring careful protection</li>
          </ul>
          <h3>How We Fix These ZLINE Cooktop Issues</h3>
          <p>We test the exact failed cooking function, including gas ignition, burner flame, induction zones, touch controls, cooling fans, electrical supply, griddle performance, and installation ventilation. We also protect ZLINE accents and finish details during service.</p>
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
