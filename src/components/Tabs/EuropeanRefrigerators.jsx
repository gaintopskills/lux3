// SEO-optimized Tabs component for brand-specific refrigerator and refrigeration repair services
// Ordered by the provided brand taxonomy; cooking-only and dishwasher-only brands are intentionally omitted from refrigerator tabs.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    // EUROPEAN
    {
          id: "aga-refrigerator-repair",
          title: "AGA Refrigerator Repair",
          heading: "AGA Refrigerator Repair",
          alt: "AGA refrigerator repair technician servicing a luxury AGA fridge freezer",
          description: (
            <>
              <p>
                We service <strong>AGA refrigerator repair</strong> for AGA fridge-freezers, side-by-side refrigerators, French-style refrigeration, undercounter wine cabinets, and AGA/Rangemaster refrigeration products where installed. AGA refrigeration is less common than AGA cooking appliances in Los Angeles homes, so the repair depends heavily on model identification and correct parts sourcing.
              </p>
    
              <h3>AGA Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Fridge-freezer not maintaining temperature because of thermostat, sensor, fan, compressor, condenser, or sealed-system issues.</li>
                <li>Freezer frost buildup or weak freezing from door gasket leaks, defrost failure, blocked drain, or evaporator fan problems.</li>
                <li>Side-by-side or French-style refrigerator temperature imbalance caused by airflow, damper, fan, or control faults.</li>
                <li>Wine cabinet temperature problems from sensor, fan, compressor cycling, glass door exposure, or ventilation issues.</li>
                <li>Parts matching challenges because AGA refrigeration products can differ by market, generation, and platform.</li>
              </ul>
    
              <h3>Technician Approach for AGA</h3>
              <p>
                We begin by confirming the model and serial number, then test the refrigeration system like a technician: actual temperature, airflow, evaporator frost pattern, condenser heat rejection, fan operation, controls, defrost, door seals, and drain system. If the unit is a less common AGA platform, we verify part compatibility before recommending the repair.
              </p>
            </>
          )
        },
    {
          id: "bertazzoni-refrigerator-repair",
          title: "Bertazzoni Refrigerator Repair",
          heading: "Bertazzoni Refrigerator Repair",
          alt: "Bertazzoni refrigerator repair technician servicing an Italian built-in column refrigerator",
          description: (
            <>
              <p>
                We provide <strong>Bertazzoni refrigerator repair</strong> for built-in refrigerator columns, freezer columns, wine columns, bottom-mount built-in refrigerators, French-door refrigerators, Master Series and Professional Series refrigeration. Bertazzoni refrigeration often uses side-mounted evaporator designs, lateral airflow, panel-ready fronts, FlexMode compartments, internal water, and ice makers, so the diagnostic path must match the exact platform.
              </p>
    
              <h3>Bertazzoni Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Refrigerator column warming or cooling unevenly because of side airflow restriction, evaporator fan failure, sensor issues, or control faults.</li>
                <li>Bottom-mount refrigerator freezer not holding temperature due to dual evaporator issues, damper failure, defrost faults, or freezer drawer sealing.</li>
                <li>FlexMode or convertible drawer not reaching the selected setting because of sensor, damper, fan, or electronic control problems.</li>
                <li>Ice maker or internal water dispenser failures caused by water valve, filter, fill line freeze-up, or freezer temperature concerns.</li>
                <li>Panel-ready doors not closing correctly because of hinge, cabinet panel, gasket, or reveal problems.</li>
              </ul>
    
              <h3>Technician Approach for Bertazzoni</h3>
              <p>
                Bertazzoni diagnosis starts with the exact model and series. We inspect lateral airflow, fan operation, thermistors, defrost system, condenser condition, panel fit, water supply, ice maker function, and the performance of each cooling zone. Because Bertazzoni columns, French-door units, and bottom-mount units use different layouts, we verify the design before ordering parts.
              </p>
            </>
          )
        },
    {
          id: "fulgor-milano-refrigerator-repair",
          title: "Fulgor Milano Refrigerator Repair",
          heading: "Fulgor Milano Refrigerator Repair",
          alt: "Fulgor Milano refrigerator repair technician servicing a Sofia professional refrigerator",
          description: (
            <>
              <p>
                Our <strong>Fulgor Milano refrigerator repair</strong> service covers Sofia professional refrigerators, bottom-mount refrigerators, French-door refrigerators, built-in refrigeration, wine cellars, and premium Italian refrigeration paired with Sofia cooking suites. Fulgor Milano refrigerators often involve counter-depth layouts, adjustable fresh zones, internal water, ice makers, freezer drawer systems, and wine-cellar temperature control.
              </p>
    
              <h3>Fulgor Milano Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Fresh zone drawer not holding the selected temperature because of thermistor, damper, fan, or control issues.</li>
                <li>French-door refrigerator warming after heavy use due to weak airflow, dirty condenser, fan failure, or poor door sealing.</li>
                <li>Freezer drawer not freezing evenly because of drawer gasket leaks, defrost problems, evaporator frost buildup, or sensor failure.</li>
                <li>Ice maker or internal water dispenser not working due to water valve, filter, fill tube, or temperature issues.</li>
                <li>Wine cellar not stabilizing because of glass door exposure, sensor drift, fan issues, or compressor cycling problems.</li>
              </ul>
    
              <h3>Technician Approach for Fulgor Milano</h3>
              <p>
                We diagnose Fulgor Milano refrigeration by testing compartment temperatures, drawer zones, air circulation, condenser heat rejection, defrost operation, ice and water components, and controls. We also verify model and serial information carefully because Fulgor parts can vary by series and generation.
              </p>
            </>
          )
        },
    {
          id: "gaggenau-refrigerator-repair",
          title: "Gaggenau Refrigerator Repair",
          heading: "Gaggenau Refrigerator Repair",
          alt: "Gaggenau refrigerator repair technician servicing Vario cooling columns",
          description: (
            <>
              <p>
                We service <strong>Gaggenau refrigerator repair</strong> for Vario cooling refrigerators, freezer columns, fridge-freezer combinations, 400 Series and 200 Series cooling appliances, and Gaggenau wine climate cabinets. Gaggenau refrigeration is built around architectural integration and precise climate control, so technician work must include electronics, airflow, panel fit, hinge behavior, and installation ventilation.
              </p>
    
              <h3>Gaggenau Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Integrated column warming because of weak evaporator airflow, condenser restriction, fan failure, sensor drift, or control communication faults.</li>
                <li>Freezer column frost, poor ice production, or temperature alarms from defrost, door seal, drawer alignment, or sealed-system problems.</li>
                <li>Wine climate cabinet not holding separate zones, caused by fan, thermistor, glass door exposure, compressor cycling, or control failure.</li>
                <li>Door not closing flush because of heavy panel load, hinge adjustment, cabinet reveal, or obstruction at the gasket.</li>
                <li>Noise, vibration, or excessive compressor run time from installation airflow problems or condenser heat that cannot escape the cabinet.</li>
              </ul>
    
              <h3>Technician Approach for Gaggenau</h3>
              <p>
                On Gaggenau cooling columns, we inspect the installation first because these appliances are built into tight luxury cabinetry. We test sensors, fans, door switches, defrost components, compressor operation, condenser airflow, and wine-zone climate control. If a cabinet panel is causing poor closure or uneven reveal, we correct the mechanical issue before treating the appliance like a sealed-system failure.
              </p>
            </>
          )
        },
    {
          id: "ilve-refrigerator-repair",
          title: "ILVE Refrigerator Repair",
          heading: "ILVE Refrigerator Repair",
          alt: "ILVE refrigerator repair technician servicing Italian luxury refrigeration",
          description: (
            <>
              <p>
                We provide <strong>ILVE refrigerator repair</strong> for ILVE refrigerators, built-in refrigeration, European fridge-freezers, and ILVE cooling products where installed or imported. ILVE is better known in the U.S. for cooking appliances, but ILVE does offer refrigeration in broader product catalogs, so service requires careful product identification before repair planning.
              </p>
    
              <h3>ILVE Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>European fridge-freezer not cooling correctly due to thermostat, sensor, fan, compressor, condenser airflow, or sealed-system issues.</li>
                <li>Freezer frost buildup or water leakage from defrost faults, drain restriction, gasket wear, or door alignment issues.</li>
                <li>Built-in refrigerator running hot because cabinet ventilation is restricted or condenser airflow is blocked.</li>
                <li>Temperature instability caused by control calibration, sensor drift, airflow imbalance, or weak door sealing.</li>
                <li>Model-specific parts challenges on less common imported ILVE refrigeration products.</li>
              </ul>
    
              <h3>Technician Approach for ILVE</h3>
              <p>
                We treat ILVE refrigeration as a model-specific European appliance. We verify the appliance platform, inspect cooling performance, sensors, fans, defrost, condenser airflow, gaskets, drain system, and installation ventilation, then confirm part availability before promising a repair path.
              </p>
            </>
          )
        },
    {
          id: "miele-refrigerator-repair",
          title: "Miele Refrigerator Repair",
          heading: "Miele Refrigerator Repair",
          alt: "Miele refrigerator repair technician servicing a MasterCool refrigerator",
          description: (
            <>
              <p>
                We provide <strong>Miele refrigerator repair</strong> for MasterCool refrigerators, freezers, built-in bottom-mount units, freestanding fridge-freezers, wine conditioning units, undercounter refrigeration, and integrated refrigeration installed in luxury kitchens. Miele refrigeration requires careful diagnosis because the platform may include MasterFresh, NoFrost, IceMaker, AirClean filtration, M Touch controls, networked electronics, and cabinet-integrated airflow.
              </p>
    
              <h3>Miele Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Fresh food not staying cold because of evaporator fan failure, sensor error, airflow restriction, control issue, or a cooling system that is not transferring heat correctly.</li>
                <li>Freezer icing, NoFrost problems, or repeated temperature alarms caused by defrost heater, defrost sensor, drain, fan, or door gasket failure.</li>
                <li>IceMaker not producing, producing slowly, or leaking because of water valve, inlet pressure, fill tube freeze-up, filter, sensor, or freezer temperature issue.</li>
                <li>Wine unit temperature zones drifting due to thermistor, fan, control, door seal, or ventilation problems.</li>
                <li>M Touch display, electronics, lighting, and communication issues that require model-specific testing before parts are ordered.</li>
              </ul>
    
              <h3>Technician Approach for Miele</h3>
              <p>
                With Miele, we separate temperature problems from control problems before replacing parts. We compare displayed temperature to measured temperature, inspect evaporator condition, test fans and sensors, verify defrost operation, check air channels, and confirm whether the compressor and sealed system are operating normally. For MasterCool and wine units, we also check installation airflow because a perfect built-in appearance can hide a heat-rejection problem.
              </p>
            </>
          )
        },
    {
          id: "liebherr-refrigerator-repair",
          title: "Liebherr Refrigerator Repair",
          heading: "Liebherr Refrigerator Repair",
          alt: "Liebherr refrigerator repair technician servicing a Monolith refrigerator column",
          description: (
            <>
              <p>
                Our <strong>Liebherr refrigerator repair</strong> service covers Monolith integrated refrigerators, freezers, wine cabinets, bottom-freezer refrigerators, side-by-side combinations, professional refrigeration, BioFresh models, NoFrost freezers, and built-in European refrigeration. Liebherr is a refrigeration-focused brand, so the repair often involves precise temperature control, airflow, humidity zones, sealed-system behavior, and sensor logic rather than simple cooling complaints.
              </p>
    
              <h3>Liebherr Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>BioFresh drawers freezing food, drying food, or failing to hold the proper humidity because of sensor, fan, damper, or airflow imbalance.</li>
                <li>NoFrost freezer buildup, fan noise, or temperature alarm from defrost heater, drain, evaporator sensor, fan motor, or gasket issues.</li>
                <li>Monolith column temperature drift caused by restricted condenser airflow, failed fan, thermistor error, control issue, or installation heat load.</li>
                <li>Wine cabinet zones not stabilizing because of fan, sensor, compressor cycling, glass door exposure, or cabinet ventilation problems.</li>
                <li>Ice maker not filling, overflowing, or producing slowly due to water valve, filter, freezer temperature, fill tube, or ice maker module problems.</li>
              </ul>
    
              <h3>Technician Approach for Liebherr</h3>
              <p>
                We diagnose Liebherr refrigeration by verifying actual compartment temperature, evaporator performance, fan speed, sensor accuracy, and condenser heat rejection. On Monolith and integrated units, we inspect panel fit, toe-kick ventilation, hinge alignment, and airflow clearance. On wine and BioFresh sections, we check the specific climate zone rather than treating the entire appliance as one refrigerator.
              </p>
            </>
          )
        },
    {
          id: "officine-gullo-refrigerator-repair",
          title: "Officine Gullo Refrigerator Repair",
          heading: "Officine Gullo Refrigerator Repair",
          alt: "Officine Gullo refrigerator repair technician servicing bespoke luxury refrigeration",
          description: (
            <>
              <p>
                We provide <strong>Officine Gullo refrigerator repair</strong> for bespoke refrigerators, fridge-freezers, single-door refrigerators, undercounter refrigerators, wine cellars, multi-temperature wine cabinets, and custom metal luxury refrigeration. Officine Gullo refrigerators are often part of a handcrafted kitchen suite, so service must protect custom paint, brass, nickel, chrome, stainless steel, and architectural trim.
              </p>
    
              <h3>Officine Gullo Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Single-door refrigerator or fridge-freezer not holding temperature due to sensor, fan, compressor, condenser airflow, or sealed-system issues.</li>
                <li>Fresh drawers or BioFresh-style compartments not maintaining the correct humidity or temperature because of sensor or airflow problems.</li>
                <li>Integrated ice maker not filling, making thin ice, or leaking because of water valve, filter, fill tube, or freezer temperature problems.</li>
                <li>Wine cellar or multi-temperature wine cabinet zones drifting because of fan, sensor, compressor, glass door, or control issues.</li>
                <li>Custom metal finishes and panels requiring careful access planning before any repair begins.</li>
              </ul>
    
              <h3>Technician Approach for Officine Gullo</h3>
              <p>
                We document the appliance layout and finishes first. Then we test the cooling system, fans, sensors, defrost, condenser airflow, water and ice components, drawer climate control, and wine zones. If access requires removing custom trim or panels, we plan the disassembly carefully so the repair does not damage the bespoke finish.
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
