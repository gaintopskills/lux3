// Rewritten version of the Tabs component for Wolf appliances
// Includes all major Wolf appliances and optimized for luxury/high-end appliance repair SEO

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "content1",
      title: "Range Repair",
      heading: "Miele Range Repair",
      img: "/miele/miele-range-repair.webp",
      alt: "Miele Range Repair",
      description: (
        <>
          <p>We specialize in <strong>Miele range repair</strong>, from dual-fuel and induction models to steam-combination units. Whether it’s a <strong>burner ignition failure</strong> or <strong>inconsistent oven temperatures</strong>, our trained technicians restore performance with manufacturer-level care.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners not igniting</li>
            <li>✅ Oven not reaching temperature</li>
            <li>✅ Display errors or shutdowns</li>
            <li>✅ Steam oven not generating steam</li>
            <li>✅ Fault codes on control panel</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>spark modules, gas valves, and relays</strong> for Miele gas ranges and replace damaged parts using OEM components.</li>
            <li>✅ For steam or convection issues, we service <strong>heating elements, sensors, and steam generators</strong>.</li>
            <li>✅ We reset or replace <strong>control boards, user interfaces, and fuses</strong> in the event of electronic failure.</li>
            <li>✅ All work is performed cleanly and professionally — protecting your cabinetry and luxury finishes.</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Oven Repair",
      heading: "Miele Oven Repair",
      img: "/miele/miele-oven-repair.webp",
      alt: "Miele Oven Repair",
      description: (
        <>
          <p>From <strong>Miele speed ovens</strong> to <strong>steam ovens and convection models</strong>, we handle repairs with precision. Whether it’s <strong>slow preheating</strong> or a <strong>control panel issue</strong>, our team ensures seamless restoration.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven not heating</li>
            <li>✅ Steam function not working</li>
            <li>✅ Interior light or fan failure</li>
            <li>✅ Touchscreen unresponsive</li>
            <li>✅ Fault codes (e.g., F04, F22)</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We inspect and replace <strong>bake, broil, and convection elements</strong> and test sensors for accuracy.</li>
            <li>✅ We clean and descale <strong>steam oven systems</strong> and replace defective boilers or pumps.</li>
            <li>✅ We troubleshoot <strong>touchpads, control boards, and UI panels</strong> to bring your Miele oven back to life.</li>
            <li>✅ Our work preserves the design and finish of your built-in unit with no mess or damage.</li>
          </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "Cooktop Repair",
      heading: "Miele Cooktop Repair",
      img: "/miele/miele-cooktop-repair.webp",
      alt: "Miele Cooktop Repair",
      description: (
        <>
          <p>We repair all <strong>Miele cooktops</strong> — including gas, electric, and induction models. From <strong>burner failure</strong> to <strong>cracked glass</strong>, our team brings factory-level expertise to every job.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Induction zone not detecting cookware</li>
            <li>✅ Gas burners clicking or not igniting</li>
            <li>✅ Cracked ceramic/glass top</li>
            <li>✅ No power or control failure</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We test and replace <strong>ignition modules, flame sensors, and burner valves</strong> on gas models.</li>
            <li>✅ For induction issues, we inspect <strong>coil drivers, sensors, and user interfaces</strong>.</li>
            <li>✅ Cracked glass tops are carefully replaced with exact-match <strong>Miele OEM panels</strong>.</li>
            <li>✅ All repairs are conducted with care to preserve your cooktop's luxury appearance.</li>
          </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "Ventilation Repair",
      heading: "Miele Hood & Ventilation Repair",
      img: "/miele/miele-ventilation-repair.webp",
      alt: "Miele Hood Repair",
      description: (
        <>
          <p>Our team services <strong>Miele ventilation systems</strong> — including wall hoods, ceiling units, and downdrafts. Whether it’s <strong>noise issues</strong> or <strong>fan malfunctions</strong>, we bring airflow back under control.</p>
          <h3>Types of Miele Hoods We Repair:</h3>
          <ul>
            <li>✅ Wall-mounted and chimney hoods</li>
            <li>✅ Island hoods</li>
            <li>✅ Downdraft extractors</li>
            <li>✅ Ceiling-integrated hoods</li>
            <li>✅ Slimline and built-in hoods</li>
          </ul>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Loud fan or rattling noise</li>
            <li>✅ Lights not turning on</li>
            <li>✅ Buttons or touch panel not working</li>
            <li>✅ Suction or airflow reduction</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We test <strong>motors, capacitors, fan blades, and PCB controls</strong>.</li>
            <li>✅ We replace <strong>faded LEDs, broken switches, and non-functional sensors</strong>.</li>
            <li>✅ Our work restores optimal extraction without disturbing your kitchen's sleek design.</li>
          </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "Maintenance Services",
      heading: "Miele Maintenance Services",
      img: "/miele/miele-maintenance.webp",
      alt: "Miele Appliance Maintenance",
      description: (
        <>
          <p>Extend the life of your Miele appliances with regular <strong>professional maintenance</strong>. We provide annual inspections, precision cleaning, and calibration to prevent costly breakdowns and performance decline.</p>
          <p><strong>Why it matters:</strong> Even advanced appliances need care. Our routine servicing enhances efficiency, extends longevity, and catches hidden faults early — all while preserving warranty eligibility.</p>
          <h3>What’s Included:</h3>
          <ul>
            <li>✅ Full system diagnostics</li>
            <li>✅ Descaling steam systems</li>
            <li>✅ Sensor and thermostat calibration</li>
            <li>✅ Filter, fan, and duct cleaning</li>
            <li>✅ Visual inspection of wear-prone parts</li>
          </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "Installation Services",
      heading: "Miele Installation Services",
      img: "/miele/miele-installation.webp",
      alt: "Miele Appliance Installation",
      description: (
        <>
          <p>Our team handles precise <strong>Miele appliance installations</strong>, including flush mount ovens, cooktops, steam units, and hoods. We ensure code compliance, perfect leveling, and a flawless built-in finish.</p>
          <h3>Installation Options:</h3>
          <ul>
            <li>✅ Built-in wall oven and steam oven setup</li>
            <li>✅ Gas and electric cooktop integration</li>
            <li>✅ Range hood and downdraft vent installation</li>
            <li>✅ Power and water line connections</li>
            <li>✅ Final system testing and safety checks</li>
          </ul>
        </>
      )
    }
  ];  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setActiveTab(mobile ? null : "content1");
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
              <div key={item.id} className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}>
                <h2>{item.heading}</h2>
                <div className="tab-body-float">
                  {item.img && <img width="360" height="360" src={item.img} alt={item.title} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
                </div>
                <a href="/book/"><button className="tabs-button">Book</button></a>
                <a href="tel:4244997788"><button className="tabs-button">Call: (424) 499-7788</button></a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item, index) => (
            <div key={item.id} className="accordion-item" ref={(el) => (itemRefs.current[index] = el)}>
              <div onClick={() => setActiveTab((prev) => (prev === item.id ? null : item.id))} className="accordion-header">
                {item.title}
                <span className="accordion-icon">{activeTab === item.id ? "−" : "+"}</span>
              </div>
              {activeTab === item.id && (
                <div className="accordion-content">
                  <h2>{item.heading}</h2>
                  {item.img && <img src={item.img} alt={item.title} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
                  <a href="/book/"><button className="tabs-button">Book</button></a>
                  <a href="tel:4244997788"><button className="tabs-button">Call: (424) 499-7788</button></a>
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
