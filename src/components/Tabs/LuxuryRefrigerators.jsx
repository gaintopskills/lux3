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
    // LUXURY
    {
          id: "sub-zero-refrigerator-repair",
          title: "Sub-Zero Refrigerator Repair",
          heading: "Sub-Zero Refrigerator Repair",
          alt: "Sub-Zero refrigerator repair technician servicing a built-in luxury refrigerator",
          description: (
            <>
              <p>
                We provide <strong>Sub-Zero refrigerator repair</strong> for Classic Series built-in refrigerators, Designer Series integrated columns, PRO Series refrigeration, freezer columns, wine storage, refrigerator drawers, undercounter units, and ice makers. Sub-Zero refrigeration is usually more complex than a standard refrigerator because many models use dual refrigeration, advanced airflow management, sealed-system protection, evaporator thermistors, condenser monitoring, and tightly fitted custom panels.
              </p>
    
              <h3>Sub-Zero Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Fresh food section warming while the freezer still works, often pointing toward airflow, evaporator frost, fan, thermistor, damper, or control issues.</li>
                <li>Freezer temperature rising, slow ice production, or frost around drawers due to door gasket leaks, defrost failure, weak fans, or sealed-system decline.</li>
                <li>Service light, vacuum condenser message, or high run time caused by a dirty condenser, restricted airflow, failing condenser fan, or heat buildup above the unit.</li>
                <li>Water leaking under the refrigerator from a clogged drain, cracked fill line, ice maker overflow, water filter housing, or defrost drain issue.</li>
                <li>Wine storage zones not holding temperature because of sensor, evaporator fan, control, door seal, or cabinet ventilation problems.</li>
              </ul>
    
              <h3>Technician Approach for Sub-Zero</h3>
              <p>
                On Sub-Zero units, we do not guess from the symptom alone. We check condenser condition first, then compare actual compartment temperatures against sensor readings, inspect evaporator frost pattern, verify fan operation, test door gaskets and hinges, review ice and water systems, and determine whether the issue is airflow, controls, defrost, or sealed-system related. For panel-ready models, we also check panel weight, reveal, hinge tension, and door closure because a door that does not seal perfectly can look like a cooling failure.
              </p>
            </>
          )
        },
    {
          id: "fisher-paykel-refrigerator-repair",
          title: "Fisher & Paykel Refrigerator Repair",
          heading: "Fisher & Paykel Refrigerator Repair",
          alt: "Fisher and Paykel refrigerator repair technician servicing an integrated column refrigerator",
          description: (
            <>
              <p>
                We provide <strong>Fisher & Paykel refrigerator repair</strong> for integrated column refrigerators and freezers, French door refrigerators, quad door refrigerators, bottom-freezer refrigerators, undercounter refrigeration, wine cabinets, and panel-ready cooling installations. Fisher & Paykel refrigeration often uses ActiveSmart food care, independent zones, flush-fit cabinetry, and temperature logic that reacts to door openings and usage patterns.
              </p>
    
              <h3>Fisher & Paykel Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Fresh food warming while freezer remains cold due to evaporator fan, sensor, damper, air channel, or control-board issues.</li>
                <li>ActiveSmart temperature alarms, food freezing in the refrigerator, or inconsistent cooling caused by thermistor drift or airflow imbalance.</li>
                <li>Ice maker or water dispenser problems from frozen fill tubes, water valve failure, filter restriction, low pressure, or freezer temperature issues.</li>
                <li>Integrated column doors not closing correctly due to panel weight, hinge adjustment, gasket condition, or installation reveal.</li>
                <li>Wine cabinet temperature zones drifting because of sensor, fan, compressor, or cabinet ventilation concerns.</li>
              </ul>
    
              <h3>Technician Approach for Fisher & Paykel</h3>
              <p>
                We test Fisher & Paykel refrigerators by comparing the actual temperatures to the control readings, checking ActiveSmart sensors, inspecting evaporator frost pattern, verifying fans, testing the ice and water system, and confirming the door is sealing correctly. On integrated columns, cabinet fit is part of the diagnosis because a small alignment problem can create major cooling complaints.
              </p>
            </>
          )
        },
    {
          id: "thermador-refrigerator-repair",
          title: "Thermador Refrigerator Repair",
          heading: "Thermador Refrigerator Repair",
          alt: "Thermador refrigerator repair technician servicing a Freedom refrigeration column",
          description: (
            <>
              <p>
                Our <strong>Thermador refrigerator repair</strong> service covers Freedom Collection refrigerator columns, freezer columns, wine columns, bottom-freezer built-ins, undercounter refrigeration, and column installations paired with custom cabinetry. Thermador refrigeration often depends on flush installation, Home Connect controls, column pairing, precise door alignment, and moisture control systems that need to be diagnosed as part of the whole installation.
              </p>
    
              <h3>Thermador Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Refrigerator column too warm or inconsistent because of restricted airflow, failed evaporator fan, sensor drift, damper problems, or cabinet ventilation issues.</li>
                <li>Freezer column not reaching temperature, frost buildup, or poor ice production due to defrost faults, door sealing problems, or sealed-system weakness.</li>
                <li>Wine column temperature swings, humidity concerns, or noisy operation when the compressor, evaporator fan, or cabinet installation is not performing correctly.</li>
                <li>Open Door Assist, push-to-open, or soft-close concerns caused by hinge, panel, alignment, or electronic assist issues.</li>
                <li>Home Connect, display, control board, or temperature alarm problems that need electronic diagnosis rather than basic parts replacement.</li>
              </ul>
    
              <h3>Technician Approach for Thermador</h3>
              <p>
                For Thermador, we check the column as an integrated system. We verify condenser airflow, inspect the evaporator frost pattern, test thermistors, fans, control communication, door switches, hinges, and gaskets, and look closely at cabinet reveal and panel fit. On wine columns, we treat the appliance differently from a refrigerator because the target temperature range, humidity control, glass door exposure, and vibration control are different.
              </p>
            </>
          )
        },
    {
          id: "true-residential-refrigerator-repair",
          title: "True Residential Refrigerator Repair",
          heading: "True Residential Refrigerator Repair",
          alt: "True Residential refrigerator repair technician servicing a luxury refrigerator column",
          description: (
            <>
              <p>
                Our <strong>True Residential refrigerator repair</strong> service covers full-size side-by-side refrigerators, bottom-freezer refrigerators, refrigerator columns, freezer columns, wine columns, beverage columns, undercounter refrigerators, refrigerator drawers, freezer drawers, beer dispensers, and clear ice machines. True Residential appliances have commercial DNA, heavy-duty construction, forced-air cooling, and strong sealed systems, but they still need proper airflow, clean condensers, correct installation, and accurate temperature control.
              </p>
    
              <h3>True Residential Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Undercounter refrigerator or drawer not getting cold because of condenser lint, blocked toe-kick airflow, fan failure, sensor issue, or compressor problem.</li>
                <li>Wine cabinet temperature drifting from glass-door heat load, sensor error, evaporator fan failure, or control calibration issues.</li>
                <li>Clear ice machine producing thin ice, wet ice, no ice, or overflowing because of water supply, drain, pump, scale buildup, hot gas valve, or bin sensor problems.</li>
                <li>Refrigerator drawers sweating, icing, or not sealing due to drawer alignment, gasket wear, overloaded drawers, or outdoor humidity exposure.</li>
                <li>Full-size column or side-by-side warming due to condenser airflow, fan motor, sealed-system, control, or door gasket issues.</li>
              </ul>
    
              <h3>Technician Approach for True Residential</h3>
              <p>
                We approach True Residential like premium light-commercial refrigeration inside a home. We inspect condenser cleanliness, compressor operation, condenser and evaporator fans, temperature sensors, door gaskets, drawer slides, defrost systems, and drain paths. For undercounter and outdoor-rated units, we also check enclosure ventilation and ambient heat because performance depends heavily on how the unit rejects heat.
              </p>
            </>
          )
        },
    {
          id: "viking-refrigerator-repair",
          title: "Viking Refrigerator Repair",
          heading: "Viking Refrigerator Repair",
          alt: "Viking refrigerator repair technician servicing a built-in refrigerator freezer",
          description: (
            <>
              <p>
                We service <strong>Viking refrigerator repair</strong> for built-in side-by-side refrigerator/freezers, integrated columns, freestanding French-door refrigerators, undercounter refrigerators, refrigerated drawers, wine cellars, ice machines, and outdoor refrigeration. Viking refrigeration includes older legacy platforms and newer integrated VEIL-style units, so model identification is important before diagnosis and parts ordering.
              </p>
    
              <h3>Viking Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Built-in side-by-side refrigerator warming while freezer remains cold because of evaporator fan, air damper, defrost, thermistor, or control issues.</li>
                <li>Freezer frost buildup, weak freezing, or ice maker problems caused by defrost faults, door seals, water valve, fill tube, or freezer temperature problems.</li>
                <li>Integrated panel-ready units not closing correctly due to hinge adjustment, gasket compression, panel weight, or cabinet reveal problems.</li>
                <li>Undercounter refrigerators and drawers running warm because of blocked ventilation, dirty condenser, failed fan, or high ambient heat.</li>
                <li>Wine cellars not holding temperature zones because of sensor, fan, compressor, door seal, or control issues.</li>
              </ul>
    
              <h3>Technician Approach for Viking</h3>
              <p>
                Viking repair starts with identifying the product generation because older built-ins, 3 Series freestanding models, 5 Series undercounter units, and newer integrated models do not diagnose the same way. We check airflow, defrost, condenser condition, fans, thermistors, control boards, sealed-system performance, and door closure before recommending parts.
              </p>
            </>
          )
        },
    {
          id: "monogram-refrigerator-repair",
          title: "Monogram Refrigerator Repair",
          heading: "Monogram Refrigerator Repair",
          alt: "Monogram refrigerator repair technician servicing a fully integrated refrigerator column",
          description: (
            <>
              <p>
                We provide <strong>Monogram refrigerator repair</strong> for fully integrated column refrigerators, column freezers, bottom-freezer refrigerators, built-in side-by-side refrigerators, wine reserves, beverage centers, ice makers, and premium undercounter refrigeration. Monogram refrigerators can be built around SmartHQ-connected controls, sealed column systems, heavy custom panels, and advanced ice and water features.
              </p>
    
              <h3>Monogram Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Integrated column warming from evaporator fan failure, sensor issues, condenser restriction, control faults, or poor cabinet ventilation.</li>
                <li>Freezer not maintaining temperature or ice maker slowing down because of defrost, water valve, fill tube, fan, or sealed-system issues.</li>
                <li>Wine reserve or beverage center temperature instability caused by glass-door heat load, fan issues, sensors, or control calibration.</li>
                <li>Door alignment problems on panel-ready units that allow warm air to enter and create frost, condensation, or long run times.</li>
                <li>Smart control, display, lighting, or temperature alarm issues that need electronic diagnosis before replacing major cooling parts.</li>
              </ul>
    
              <h3>Technician Approach for Monogram</h3>
              <p>
                We diagnose Monogram units by platform: full-size built-in, column, undercounter, wine, or ice. We measure actual temperatures, inspect evaporator frost pattern, test fan motors and thermistors, verify condenser airflow, inspect water and ice components, and check panel alignment. On connected models, we separate software or communication issues from actual cooling failures.
              </p>
            </>
          )
        },
    {
          id: "signature-kitchen-suite-refrigerator-repair",
          title: "Signature Kitchen Suite Refrigerator Repair",
          heading: "Signature Kitchen Suite Refrigerator Repair",
          alt: "Signature Kitchen Suite refrigerator repair technician servicing an integrated column refrigerator",
          description: (
            <>
              <p>
                Our <strong>Signature Kitchen Suite refrigerator repair</strong> service covers SKS French-door refrigerators, integrated refrigerator columns, freezer columns, wine columns, undercounter refrigerators, and panel-ready luxury refrigeration. These units often include Wi-Fi-connected controls, convertible storage zones, internal water, ice systems, linear compressor technology, and cabinet-integrated installation details.
              </p>
    
              <h3>Signature Kitchen Suite Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Column refrigerator not cooling evenly because of sensor drift, evaporator fan failure, control communication, or restricted cabinet airflow.</li>
                <li>Freezer column warming, frost buildup, or slow ice production due to defrost, gasket, water valve, fill tube, or sealed-system problems.</li>
                <li>French-door refrigerator not maintaining temperature in convertible drawers or fresh zones because of damper, thermistor, fan, or board issues.</li>
                <li>Wine column temperature zones drifting from fan, sensor, door seal, compressor cycling, or glass-door heat load.</li>
                <li>ThinQ-connected controls, displays, alarms, or electronic errors that need diagnosis before replacing mechanical parts.</li>
              </ul>
    
              <h3>Technician Approach for Signature Kitchen Suite</h3>
              <p>
                We inspect SKS refrigeration as a connected, multi-zone system. That means checking the actual compartment temperatures, sensor data, fan operation, condenser airflow, ice and water systems, defrost cycle, and door alignment. When a convertible drawer or wine section is involved, we test that zone separately instead of treating the refrigerator as one temperature box.
              </p>
            </>
          )
        },
    {
          id: "hestan-refrigerator-repair",
          title: "Hestan Refrigerator Repair",
          heading: "Hestan Refrigerator Repair",
          alt: "Hestan refrigerator repair technician servicing a luxury refrigeration column",
          description: (
            <>
              <p>
                We provide <strong>Hestan refrigerator repair</strong> for Hestan refrigeration systems found in luxury kitchens, including indoor Hestan column refrigerator and freezer installations where present, wine storage, undercounter refrigeration, and Hestan refrigeration paired with high-end cooking suites. Hestan refrigeration requires a more careful diagnostic approach than a standard freestanding refrigerator because these units are usually installed tightly into custom cabinetry and depend on precise airflow, door sealing, compressor performance, and electronic temperature control.
              </p>
    
              <h3>Hestan Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Refrigerator or freezer column not holding temperature because of restricted condenser airflow, sensor drift, evaporator fan weakness, compressor cycling, or cabinet heat buildup.</li>
                <li>Uneven cooling from top to bottom when air channels, shelf loading, door gaskets, or internal fan operation are affecting circulation.</li>
                <li>Wine or beverage storage temperature swings caused by glass-door heat load, failed fans, weak compressor performance, control faults, or poor ventilation.</li>
                <li>Moisture, frost, or condensation around the door opening due to gasket wear, hinge alignment, panel fit, or repeated warm-air infiltration.</li>
                <li>Electronic control, lighting, door switch, or alarm issues that require model-specific testing before ordering parts.</li>
              </ul>
    
              <h3>Technician Approach for Hestan</h3>
              <p>
                With Hestan refrigeration, we inspect the installation first because many cooling complaints start with heat rejection or door-seal problems. We verify actual compartment temperature, compare it to the displayed temperature, inspect the condenser and evaporator sections, test fans and sensors, review compressor behavior, and check hinges, gaskets, panel weight, and cabinet ventilation. For Hestan wine and beverage refrigeration, we also check vibration, UV/glass-door exposure, zone separation, and temperature recovery after the door has been opened.
              </p>
            </>
          )
        },
    {
          id: "dacor-refrigerator-repair",
          title: "Dacor Refrigerator Repair",
          heading: "Dacor Refrigerator Repair",
          alt: "Dacor refrigerator repair technician servicing a luxury refrigerator column",
          description: (
            <>
              <p>
                We service <strong>Dacor refrigerator repair</strong> for Modernist and Contemporary column refrigerators, freezer columns, wine columns, French-door refrigerators, undercounter refrigeration, and older Dacor built-in cooling products. Dacor refrigeration can include PreciseCooling technology, dedicated compressors and evaporators in columns, push-to-open doors, internal water, dual ice makers, cameras, and connected controls depending on the model.
              </p>
    
              <h3>Dacor Refrigerator Issues We Diagnose</h3>
              <ul>
                <li>Column refrigerator warming or overcooling because of sensor, evaporator fan, control board, compressor, or airflow issues.</li>
                <li>Freezer column not freezing properly, building frost, or producing weak ice from defrost, gasket, fan, water, or sealed-system problems.</li>
                <li>Push-to-open or flush panel doors not closing properly, creating condensation, frost, and long compressor run time.</li>
                <li>Wine column zones not holding set temperature due to fan, sensor, glass door, cabinet heat, or control issues.</li>
                <li>Legacy Dacor refrigerators with parts availability concerns that need careful model and serial verification.</li>
              </ul>
    
              <h3>Technician Approach for Dacor</h3>
              <p>
                We identify the Dacor generation first because older Dacor refrigeration and newer Samsung-era Dacor products use different parts and diagnostics. We test fans, thermistors, defrost components, condenser airflow, ice and water valves, door assist systems, hinges, gaskets, and control communication. On columns, we also verify panel alignment and cabinet ventilation before recommending a sealed-system repair.
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
