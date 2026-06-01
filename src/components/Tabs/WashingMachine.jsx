// SEO-optimized Tabs component for brand-specific washing machine repair services
// Includes only brands from your appliance menu that manufacture or support washing machines.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "gaggenau-washing-machine-repair",
      title: "Gaggenau Washing Machine Repair",
      heading: "Gaggenau Washing Machine Repair",
      alt: "Gaggenau washing machine repair technician servicing a luxury front-load washer",
      description: (
        <>
          <p>We provide <strong>Gaggenau washing machine repair</strong> for supported Gaggenau 200 Series front-loading washers, full-size laundry appliances, Home Connect-capable models, iDos automatic-dosing systems, AquaStop-equipped units, and legacy Gaggenau washing machines. Gaggenau laundry appliances require a precise diagnostic approach because drainage, detergent dosing, leak protection, high-speed spin performance, and electronic controls work together as one system.</p>
          <h3>Gaggenau Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ iDos detergent or fabric-softener system not dispensing consistently</li>
            <li>✅ Washer not draining, stopping before spin, or leaving water inside the drum</li>
            <li>✅ AquaStop, inlet-valve, or water-supply faults interrupting the wash cycle</li>
            <li>✅ Door-lock problems preventing the washer from starting or releasing</li>
            <li>✅ Excess vibration, movement, or unusual noise during high-speed spin</li>
            <li>✅ Home Connect, sensor, display, wiring, or control-related faults</li>
          </ul>
          <h3>How We Fix These Gaggenau Washing Machine Issues</h3>
          <p>We verify the full Gaggenau model number first, then test the drain pump, filter, hoses, inlet valves, AquaStop components, door lock, suspension, leveling, iDos system, sensors, wiring, and electronic controls. For legacy Gaggenau washers, we also review component compatibility and parts availability before recommending repair.</p>
        </>
      )
    },
    {
      id: "miele-washing-machine-repair",
      title: "Miele Washing Machine Repair",
      heading: "Miele Washing Machine Repair",
      /*img: "/washing-machine-repair/miele-washing-machine-repair.webp",*/
      alt: "Miele washing machine repair technician servicing a premium front-load washer",
      description: (
        <>
          <p>We provide <strong>Miele washing machine repair</strong> for W1 front-loading washers, compact laundry installations, TwinDos automatic-dosing models, CapDosing models, Miele@home-connected washers, and stacked Miele laundry systems. Miele washers combine compact installation requirements with high-speed spin performance, Honeycomb Drum fabric care, water-protection systems, dosing components, sensors, and model-specific electronics.</p>
          <h3>Miele Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ TwinDos detergent not dispensing correctly, producing warnings, or leaving residue in the dosing system</li>
            <li>✅ Washer not draining, stopping before the spin cycle, or displaying a drain-related fault</li>
            <li>✅ Door not locking or unlocking after the cycle</li>
            <li>✅ Excess vibration, movement, or noise during high-speed spin</li>
            <li>✅ Inlet, water-protection, pump, sensor, or control-related errors</li>
            <li>✅ Compact stacked installations where access, leveling, and ventilation must be evaluated carefully</li>
          </ul>
          <h3>How We Fix These Miele Washing Machine Issues</h3>
          <p>We test the drain system, pump, filter, inlet valves, door lock, suspension, leveling, water-protection components, sensors, controls, and TwinDos lines. We confirm the exact W1 model and installation setup before recommending repair.</p>
        </>
      )
    },
    {
      id: "fisher-paykel-washing-machine-repair",
      title: "Fisher & Paykel Washing Machine Repair",
      heading: "Fisher & Paykel Washing Machine Repair",
      /*img: "/washing-machine-repair/fisher-paykel-washing-machine-repair.webp",*/
      alt: "Fisher and Paykel washing machine repair technician servicing a premium front-load washer",
      description: (
        <>
          <p>Our <strong>Fisher & Paykel washing machine repair</strong> service covers compact front-load washers, SmartDrive-equipped washing machines, Steam Care models, Vortex Wash systems, flood-protection components, stacked laundry pairs, and supported legacy Fisher & Paykel top-load washers. Fisher & Paykel laundry diagnosis may involve direct-drive components, load sensing, out-of-balance correction, drainage, water inlet systems, door sealing, and model-specific controls.</p>
          <h3>Fisher & Paykel Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer repeatedly stopping because it senses an out-of-balance load</li>
            <li>✅ SmartDrive or motor-related problems affecting agitation or spin</li>
            <li>✅ Drain pump, diverter, filter, or hose issues leaving water in the tub</li>
            <li>✅ Door-lock or legacy lid-lock problems preventing cycle completion</li>
            <li>✅ Water-inlet, flood-protection, or sensor-related interruptions</li>
            <li>✅ Excess noise, vibration, gasket wear, or control-response problems</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Washing Machine Issues</h3>
          <p>We identify whether the appliance is a current compact front loader or a supported legacy top loader, then inspect the SmartDrive system, motor, drain pump, diverter where applicable, filter, hoses, inlet valves, flood-protection components, door or lid lock, gasket, suspension, sensors, and controls.</p>
        </>
      )
    },
    {
      id: "smeg-washing-machine-repair",
      title: "Smeg Washing Machine Repair",
      heading: "Smeg Washing Machine Repair",
      /*img: "/washing-machine-repair/smeg-washing-machine-repair.webp",*/
      alt: "Smeg washing machine repair technician servicing a stylish front-load washer",
      description: (
        <>
          <p>We provide <strong>Smeg washing machine repair</strong> for Smeg front-load washers, Steam Energy Technology models, inverter-motor washing machines, freestanding laundry appliances, stacked washer-and-dryer pairs, and supported imported or legacy Smeg washing machines. Depending on the model, Smeg laundry appliances may use steam programs, electronic controls, compact installation clearances, leak-protection components, and specialized wash settings that require careful testing.</p>
          <h3>Smeg Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer not draining, leaving water in the drum, or stopping before spin</li>
            <li>✅ Door-lock, hinge, or gasket problems affecting cycle start or sealing</li>
            <li>✅ Inverter-motor, sensor, wiring, or electronic-control faults</li>
            <li>✅ Steam, heater, temperature-sensing, or cycle-performance concerns</li>
            <li>✅ Excess vibration caused by leveling, suspension, or stacked-installation issues</li>
            <li>✅ Inlet-valve, dispenser, filter, or leak-protection problems</li>
          </ul>
          <h3>How We Fix These Smeg Washing Machine Issues</h3>
          <p>We confirm the exact Smeg model and installation type, then inspect the drain pump, filter, hoses, door lock, hinge, gasket, inlet valves, dispenser, motor system, heater, temperature sensors, suspension, leveling, wiring, and controls. For imported or older Smeg washers, we verify parts compatibility before recommending repair.</p>
        </>
      )
    },
    {
      id: "asko-washing-machine-repair",
      title: "ASKO Washing Machine Repair",
      heading: "ASKO Washing Machine Repair",
      /*img: "/washing-machine-repair/asko-washing-machine-repair.webp",*/
      alt: "ASKO washing machine repair technician servicing a Scandinavian front-load washer",
      description: (
        <>
          <p>Our <strong>ASKO washing machine repair</strong> service covers ASKO front-load washers with Steel Seal doors, Quattro Construction suspension systems, Active Drum designs, Aqua Block water-protection components, Auto Dose systems, and stacked or side-by-side laundry installations. ASKO washers require careful diagnosis because vibration control, drainage, sealing, water protection, and control performance are closely connected.</p>
          <h3>ASKO Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer shaking, walking, or becoming unusually loud during the spin cycle</li>
            <li>✅ Drain pump, filter, or hose restrictions causing standing water or incomplete cycles</li>
            <li>✅ Steel Seal door not closing, locking, or releasing properly</li>
            <li>✅ Auto Dose detergent system not dispensing consistently</li>
            <li>✅ Aqua Block or inlet-related faults interrupting the wash program</li>
            <li>✅ Suspension, shock absorber, bearing, sensor, or control issues affecting spin stability</li>
          </ul>
          <h3>How We Fix These ASKO Washing Machine Issues</h3>
          <p>We inspect the Quattro Construction suspension system, shock absorbers, drain pump, filter, hoses, inlet valves, Aqua Block components, door lock, Auto Dose system, sensors, bearings, leveling, wiring, and electronic controls.</p>
        </>
      )
    },
    {
      id: "bosch-washing-machine-repair",
      title: "Bosch Washing Machine Repair",
      heading: "Bosch Washing Machine Repair",
      /*img: "/washing-machine-repair/bosch-washing-machine-repair.webp",*/
      alt: "Bosch washing machine repair technician servicing a compact front-load washer",
      description: (
        <>
          <p>We provide <strong>Bosch washing machine repair</strong> for 24-inch compact washers, stackable washer-and-dryer pairs, undercounter laundry installations, 300 Series, 500 Series, 800 Series, Home Connect models, and Bosch washers equipped with AquaStop leak protection. Bosch laundry systems are frequently installed in condos, custom laundry closets, guesthouses, and space-conscious luxury homes.</p>
          <h3>Bosch Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer not draining because of pump, filter, hose, or foreign-object blockage</li>
            <li>✅ AquaStop or water-inlet fault stopping the wash cycle</li>
            <li>✅ Door-lock problems preventing the washer from starting or releasing</li>
            <li>✅ Compact washer vibrating excessively because of leveling, load balance, or suspension issues</li>
            <li>✅ Home Connect, display, control, wiring, or sensor faults</li>
            <li>✅ Slow filling, detergent residue, or incomplete rinsing in a compact installation</li>
          </ul>
          <h3>How We Fix These Bosch Washing Machine Issues</h3>
          <p>We evaluate the drain pump, filter, hoses, AquaStop components, inlet valves, door lock, suspension, leveling, dispenser, sensors, wiring, and control board. We also inspect the installation conditions around compact stacked or undercounter units.</p>
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
