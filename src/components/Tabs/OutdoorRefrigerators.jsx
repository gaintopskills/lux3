// SEO-optimized Tabs component for brand-specific refrigerator and refrigeration repair services
// Rewritten to include only brands from the provided list that actually offer, offered, or support refrigeration products.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "kalamazoo-outdoor-refrigeration-repair",
      title: "Kalamazoo Outdoor Refrigeration Repair",
      heading: "Kalamazoo Outdoor Refrigeration Repair",
      alt: "Kalamazoo outdoor refrigeration repair technician servicing a luxury outdoor kitchen refrigerator",
      description: (
        <>
          <p>
            Our <strong>Kalamazoo outdoor refrigeration repair</strong> service covers outdoor-rated refrigerators, refrigerator drawers, beverage centers, wine preserves, ice makers, keg tappers, and integrated refrigeration installed in Kalamazoo outdoor kitchens. Kalamazoo refrigeration is often built into premium outdoor cabinetry, so weather exposure, ventilation, drainage, and enclosure design are part of the diagnosis.
          </p>

          <h3>Kalamazoo Outdoor Refrigeration Issues We Diagnose</h3>
          <ul>
            <li>Outdoor refrigerator not cooling during hot weather because of blocked condenser airflow, dirty condenser, failed fan, or excessive enclosure heat.</li>
            <li>Beverage center temperature swings due to glass-door heat gain, thermostat issues, fan failure, or overloading.</li>
            <li>Wine preserve not holding stable temperature because of sensor, fan, compressor, door seal, or direct sun exposure.</li>
            <li>Ice maker not producing, leaking, or needing winterization because of water supply, drain, pump, scale, or bin sensor issues.</li>
            <li>Built-in refrigeration affected by cabinetry clearance, drainage, airflow, or weatherproofing problems.</li>
          </ul>

          <h3>Technician Approach for Kalamazoo</h3>
          <p>
            We check the unit and the outdoor kitchen together. We inspect condenser airflow, ambient temperature, cabinet ventilation, drains, fans, controls, compressor operation, door seals, drawer slides, water lines, and ice machine components. For outdoor ice makers, we also look for winterization and water-quality issues that can damage the unit over time.
          </p>
        </>
      )
    },
    {
      id: "lynx-outdoor-refrigeration-repair",
      title: "Lynx Outdoor Refrigeration Repair",
      heading: "Lynx Outdoor Refrigeration Repair",
      alt: "Lynx outdoor refrigeration repair technician servicing a professional outdoor refrigerator",
      description: (
        <>
          <p>
            We provide <strong>Lynx outdoor refrigeration repair</strong> for Professional outdoor refrigerators, Sedona outdoor refrigerators, glass-door refrigerators, two-drawer refrigerators, refrigerator/freezer combos, ice makers, beverage centers, and outdoor refrigeration built into Lynx kitchens. Lynx units often include dynamic cooling, wide temperature ranges, blue lighting, door locks, alerts, and outdoor-rated construction.
          </p>

          <h3>Lynx Outdoor Refrigeration Issues We Diagnose</h3>
          <ul>
            <li>Outdoor refrigerator not reaching 34°F to 60°F range because of condenser airflow, ambient heat, failed fan, dirty condenser, or thermostat issues.</li>
            <li>Two-drawer refrigerator warming because drawer slides, gaskets, or loading prevent proper closure.</li>
            <li>Temperature alarm or rapid temperature change caused by door leaks, sensor failure, control issue, or compressor cycling problems.</li>
            <li>Refrigerator/freezer combo not freezing properly because of defrost, fan, sealed-system, or door-seal problems.</li>
            <li>Outdoor corrosion, electrical exposure, lighting issues, and control failures from moisture and heat.</li>
          </ul>

          <h3>Technician Approach for Lynx</h3>
          <p>
            We test Lynx outdoor refrigeration under real outdoor conditions. We inspect condenser ventilation, fan operation, compressor performance, thermostat and sensor behavior, drawer alignment, gasket contact, electrical connections, and drainage. If the unit is installed in an island, we also verify cutout clearance and airflow because a tight enclosure can make a good refrigerator perform badly.
          </p>
        </>
      )
    },
    {
      id: "viking-outdoor-refrigeration-repair",
      title: "Viking Outdoor Refrigeration Repair",
      heading: "Viking Outdoor Refrigeration Repair",
      alt: "Viking outdoor refrigeration repair technician servicing outdoor refrigerated drawers",
      description: (
        <>
          <p>
            We service <strong>Viking Outdoor refrigeration repair</strong> for outdoor refrigerated drawers, outdoor undercounter refrigerators, outdoor beverage centers, outdoor ice machines, and Viking outdoor kitchen refrigeration. These units are exposed to heat, humidity, dust, and enclosure airflow limitations, so the technician must diagnose the environment as well as the appliance.
          </p>

          <h3>Viking Outdoor Refrigeration Issues We Diagnose</h3>
          <ul>
            <li>Outdoor refrigerated drawers not getting cold because of dirty condenser coils, failed condenser fan, restricted island ventilation, or high ambient temperature.</li>
            <li>Drawer gaskets sweating, leaking, or allowing warm air in because of drawer alignment, worn seals, or overloaded storage.</li>
            <li>Ice machine not producing enough ice due to water supply, drain, pump, scale buildup, bin sensor, or ambient heat issues.</li>
            <li>Outdoor refrigerator cycling too often because of sun exposure, poor enclosure design, or weak compressor performance.</li>
            <li>Control, thermostat, lighting, or wiring problems from moisture, corrosion, and outdoor exposure.</li>
          </ul>

          <h3>Technician Approach for Viking Outdoor</h3>
          <p>
            We start with condenser airflow and installation because most outdoor refrigeration failures are worsened by heat. We then test compressor operation, fans, thermostat or sensor response, drawer alignment, gaskets, drain paths, ice machine water supply, and electrical connections. We also advise if the outdoor island needs better ventilation before parts are replaced.
          </p>
        </>
      )
    },
    {
      id: "dcs-outdoor-refrigeration-repair",
      title: "DCS Outdoor Refrigeration Repair",
      heading: "DCS Outdoor Refrigeration Repair",
      alt: "DCS outdoor refrigeration repair technician servicing a patio refrigerator",
      description: (
        <>
          <p>
            Our <strong>DCS outdoor refrigeration repair</strong> service covers DCS outdoor refrigerators, refrigerator drawers, beer dispensers, ice makers, beverage chillers, and outdoor cooling products by Fisher & Paykel. DCS refrigeration is designed for outdoor entertaining, so common issues often involve airflow, ambient heat, door sealing, water supply, and corrosion exposure.
          </p>

          <h3>DCS Outdoor Refrigeration Issues We Diagnose</h3>
          <ul>
            <li>Outdoor refrigerator not cooling drinks or food because of condenser restriction, failed fan, dirty coil, or insufficient island ventilation.</li>
            <li>Refrigerator drawers warming or icing due to gasket leaks, drawer misalignment, failed fan, or control issues.</li>
            <li>Beer dispenser not staying cold because of thermostat, airflow, compressor, line temperature, or pressure setup concerns.</li>
            <li>Ice maker not producing, overflowing, or draining poorly due to water supply, drain, pump, scale, or bin sensor problems.</li>
            <li>Outdoor wiring, controls, stainless fasteners, and fans affected by moisture, corrosion, and heat.</li>
          </ul>

          <h3>Technician Approach for DCS</h3>
          <p>
            We diagnose DCS outdoor cooling by testing the refrigerator and the installation together. We check condenser airflow, compressor operation, fan motors, drawer seals, temperature sensors, controls, drains, water valves, ice machine components, and enclosure ventilation. Outdoor units must be able to reject heat, so airflow problems are corrected before major parts are recommended.
          </p>
        </>
      )
    },
    {
      id: "alfresco-outdoor-refrigeration-repair",
      title: "Alfresco Outdoor Refrigeration Repair",
      heading: "Alfresco Outdoor Refrigeration Repair",
      alt: "Alfresco outdoor refrigeration repair technician servicing PolarCore refrigeration",
      description: (
        <>
          <p>
            We provide <strong>Alfresco outdoor refrigeration repair</strong> for PolarCore refrigeration, undercounter refrigerators, Artisan refrigerators, outdoor beverage centers, ice makers, keg systems, and refrigeration built into Alfresco outdoor kitchens. Alfresco outdoor refrigeration is designed for demanding conditions, but performance still depends on clean condensers, correct airflow, drainage, and temperature control.
          </p>

          <h3>Alfresco Outdoor Refrigeration Issues We Diagnose</h3>
          <ul>
            <li>Outdoor refrigerator not staying cold in hot weather because of blocked ventilation, dirty condenser, failed condenser fan, or weak compressor.</li>
            <li>Digital thermostat not reading correctly, causing temperature swings or short cycling.</li>
            <li>Automatic defrost, drain, or condensation problems caused by humidity, clogged drains, door leaks, or airflow issues.</li>
            <li>Ice maker or beverage system problems from water supply, scale, pump, drain, regulator, or line temperature issues.</li>
            <li>Built-in installation problems where the island or cabinetry traps heat around the refrigeration system.</li>
          </ul>

          <h3>Technician Approach for Alfresco</h3>
          <p>
            We inspect Alfresco refrigeration with the outdoor environment in mind. We check temperature performance, condenser airflow, compressor and fan operation, thermostat accuracy, defrost, drains, door gaskets, water supply, ice production, and the built-in enclosure. When ambient heat is the real cause, we address ventilation before replacing expensive refrigeration parts.
          </p>
        </>
      )
    },
    {
      id: "twin-eagles-outdoor-refrigeration-repair",
      title: "Twin Eagles Outdoor Refrigeration Repair",
      heading: "Twin Eagles Outdoor Refrigeration Repair",
      alt: "Twin Eagles outdoor refrigeration repair technician servicing outdoor refrigerators and ice makers",
      description: (
        <>
          <p>
            We service <strong>Twin Eagles outdoor refrigeration repair</strong> for Twin Eagles outdoor refrigerators, outdoor ice makers, Dometic refrigeration, outdoor cooling modules, and refrigeration used in Twin Eagles outdoor kitchens. Since the Twin Eagles line is now closely tied to Dometic refrigeration, model identification and correct product documentation matter during diagnosis.
          </p>

          <h3>Twin Eagles Outdoor Refrigeration Issues We Diagnose</h3>
          <ul>
            <li>Outdoor refrigerator not cooling because of dirty condenser, failed fan, restricted ventilation, compressor issue, or high ambient load.</li>
            <li>Ice maker not making clear ice, not filling, overflowing, or draining poorly because of water supply, pump, scale, drain, or bin sensor issues.</li>
            <li>Door or drawer gasket leaks causing sweating, frost, long run times, or temperature alarms.</li>
            <li>Control, thermostat, lighting, or wiring issues caused by moisture, corrosion, or outdoor heat exposure.</li>
            <li>Outdoor island layout preventing the unit from rejecting heat properly.</li>
          </ul>

          <h3>Technician Approach for Twin Eagles</h3>
          <p>
            We check the outdoor kitchen environment first, then test the unit. We inspect ventilation, condenser cleanliness, fan motors, compressor behavior, thermostat and sensor accuracy, ice maker water supply, drain path, and door seals. If the unit is Dometic-based, we use the appropriate documentation for that platform rather than guessing from the Twin Eagles label alone.
          </p>
        </>
      )
    },
    {
      id: "fire-magic-outdoor-refrigeration-repair",
      title: "Fire Magic Outdoor Refrigeration Repair",
      heading: "Fire Magic Outdoor Refrigeration Repair",
      alt: "Fire Magic outdoor refrigeration repair technician servicing an outdoor refrigerator",
      description: (
        <>
          <p>
            We provide <strong>Fire Magic outdoor refrigeration repair</strong> for outdoor rated refrigerators, premium refrigerators, refrigerators with reversible hinges, double drawer cold storage, dual-zone wine and beverage coolers, outdoor rated kegerators, and automatic outdoor ice makers. Fire Magic refrigeration is usually part of an outdoor kitchen, so heat, ventilation, water, drainage, and exposure must all be checked.
          </p>

          <h3>Fire Magic Outdoor Refrigeration Issues We Diagnose</h3>
          <ul>
            <li>Outdoor refrigerator not cooling properly because of blocked condenser airflow, dirty coil, failed fan, thermostat issue, or high ambient temperature.</li>
            <li>Double drawer cold storage sweating, icing, or warming due to drawer alignment, gasket condition, loading, or humidity.</li>
            <li>Dual-zone wine and beverage cooler not holding zones because of fan, sensor, glass door, control, or compressor cycling issues.</li>
            <li>Outdoor ice maker not producing enough ice, leaking, or draining incorrectly because of water supply, pump, scale, bin sensor, or drain problems.</li>
            <li>Kegerator temperature or dispensing issues related to refrigeration, airflow, beer line temperature, regulator settings, or door sealing.</li>
          </ul>

          <h3>Technician Approach for Fire Magic</h3>
          <p>
            We test Fire Magic refrigeration under real outdoor conditions. We inspect condenser airflow, fan motors, compressor operation, thermostat and sensors, door or drawer gaskets, drains, water valves, ice maker components, and kegerator setup. If a built-in enclosure traps heat, we identify that before recommending unnecessary parts.
          </p>
        </>
      )
    },
    {
      id: "true-residential-outdoor-refrigeration-repair",
      title: "True Residential Outdoor Refrigeration Repair",
      heading: "True Residential Outdoor Refrigeration Repair",
      alt: "True Residential outdoor refrigeration repair technician servicing undercounter drawers",
      description: (
        <>
          <p>
            Our <strong>True Residential Outdoor refrigeration repair</strong> service covers outdoor-rated undercounter refrigerators, refrigerator drawers, freezer drawers, beverage centers, wine cabinets, beer dispensers, and clear ice machines. True undercounter products are often used outdoors, but even a strong sealed system depends on airflow, clean condensers, correct installation, and proper drainage.
          </p>

          <h3>True Residential Outdoor Issues We Diagnose</h3>
          <ul>
            <li>Outdoor refrigerator not cooling because of dirty condenser coils, failed condenser fan, restricted ventilation, or high ambient heat.</li>
            <li>Drawer units sweating or not sealing due to humidity, drawer alignment, gasket wear, or overloaded storage bins.</li>
            <li>Clear ice machine producing poor ice, no ice, or leaking due to scale, water supply, drain, pump, hot gas valve, or bin sensor issues.</li>
            <li>Wine or beverage centers drifting in temperature due to glass door heat gain, fan issues, thermistor problems, or control calibration.</li>
            <li>Corrosion, moisture, and outdoor exposure affecting controls, fans, wiring, slides, and drain components.</li>
          </ul>

          <h3>Technician Approach for True Residential Outdoor</h3>
          <p>
            We diagnose True outdoor units by combining refrigeration testing with installation inspection. We check condenser airflow, compressor operation, fans, sensors, door and drawer seals, drainage, water quality, ice production, and outdoor island ventilation. If humidity or enclosure heat is part of the problem, we explain it clearly so the repair lasts.
          </p>
        </>
      )
    }
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
