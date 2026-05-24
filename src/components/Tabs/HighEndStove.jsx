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
          id: "asko-stove-repair",
          title: "ASKO Stove Repair",
          heading: "ASKO Stove Repair",
          /*img: "/stove-repair/asko-stove-repair.webp",*/
          alt: "ASKO stove repair technician servicing a European cooktop",
          description: (
            <>
              <p>We provide <strong>ASKO stove repair</strong> for ASKO induction cooktops, electric cooktops, gas cooktops where applicable, compact European cooking surfaces, and flush built-in kitchen installations. ASKO stove repair often centers on installation fit, electronic controls, induction modules, and heat management.</p>
              <h3>ASKO Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Induction zones not detecting cookware or shutting off during cooking</li>
                <li>✅ Touch controls locking, beeping, or becoming unresponsive after spills or electronic faults</li>
                <li>✅ Cooling fan or cabinet ventilation problems under flush-mounted cooktops</li>
                <li>✅ Electric elements, sensors, and controls failing on compact built-in cooking surfaces</li>
                <li>✅ Glass top or edge damage that needs careful evaluation before repair</li>
                <li>✅ European-format parts matching and model verification before replacement</li>
              </ul>
              <h3>How We Fix These ASKO Stove Issues</h3>
              <p>We inspect induction modules, cookware detection, touch controls, cooling fans, power supply, ventilation, and glass-top condition. For ASKO, installation airflow and exact model identification are especially important.</p>
            </>
          )
        },
        {
          id: "bosch-stove-repair",
          title: "Bosch Stove Repair",
          heading: "Bosch Stove Repair",
          /*img: "/stove-repair/bosch-stove-repair.webp",*/
          alt: "Bosch stove repair technician servicing a cooktop",
          description: (
            <>
              <p>Our <strong>Bosch stove repair</strong> service covers Bosch 500 Series, 800 Series, Benchmark Series, gas cooktops, induction cooktops, electric cooktops, slide-in ranges, and flush built-in cooking surfaces. Bosch stoves often involve induction electronics, touch controls, compact installation airflow, and European-style design.</p>
              <h3>Bosch Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Induction zones not detecting cookware, cycling off, or showing error behavior</li>
                <li>✅ Touch controls locking or becoming unresponsive after spills or control faults</li>
                <li>✅ Gas cooktop burners clicking continuously or lighting slowly from igniter or cap issues</li>
                <li>✅ Cooling fan or ventilation problems under flush-mounted induction cooktops</li>
                <li>✅ Glass top cracks, surface damage, or installation tension concerns</li>
                <li>✅ Parts differences between 500 Series, 800 Series, Benchmark, and slide-in range platforms</li>
              </ul>
              <h3>How We Fix These Bosch Stove Issues</h3>
              <p>We test Bosch induction boards, touch controls, cooling fans, power supply, gas igniters, burner caps, valves, and installation airflow. We identify the series before ordering parts.</p>
            </>
          )
        },
        {
          id: "jennair-stove-repair",
          title: "JennAir Stove Repair",
          heading: "JennAir Stove Repair",
          /*img: "/stove-repair/jennair-stove-repair.webp",*/
          alt: "JennAir stove repair technician servicing a luxury cooktop",
          description: (
            <>
              <p>We provide <strong>JennAir stove repair</strong> for RISE and NOIR gas cooktops, induction cooktops, electric cooktops, downdraft cooktops, professional ranges, and built-in cooking appliances. JennAir stove service often involves downdraft airflow, premium finishes, induction electronics, and touch controls.</p>
              <h3>JennAir Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Downdraft cooktop airflow problems, fan failures, or grease buildup affecting performance</li>
                <li>✅ Gas burners with ignition clicking, delayed lighting, or uneven flame from cap or igniter issues</li>
                <li>✅ Induction zones with cookware detection, touch-control, or overheating concerns</li>
                <li>✅ RISE and NOIR handles, knobs, panels, and finishes requiring careful service access</li>
                <li>✅ Control board, relay, sensor, or connected-control faults on newer cooking surfaces</li>
                <li>✅ Ventilation and installation issues where downdraft systems share space with cabinetry</li>
              </ul>
              <h3>How We Fix These JennAir Stove Issues</h3>
              <p>We inspect burners, ignition, induction modules, touch controls, downdraft fans, filters, ducting, control boards, and finish-sensitive parts. JennAir downdraft and RISE/NOIR appliances need a more installation-aware repair approach.</p>
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
