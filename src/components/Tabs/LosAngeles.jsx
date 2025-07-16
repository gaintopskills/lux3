import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "refrigerator",
      title: "Refrigerator Repair",
      heading: "Luxury Refrigerator Repair in Los Angeles",
      img: "/sub-zero/sub-zero-appliance-repair.webp",
      alt: "High-End Refrigerator Repair",
      description: (
        <>
          <p>As a lead technician at Zaricci, I’ve worked on hundreds of luxury refrigerators. Whether you own a <strong>Sub-Zero PRO series</strong> or an <strong>SKS built-in</strong>, we know how to handle every issue with precision.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Fridge not cooling</li>
            <li>✅ Uneven temperature zones</li>
            <li>✅ Water leakage</li>
            <li>✅ Compressor or fan failure</li>
            <li>✅ Digital control board malfunctions</li>
          </ul>
          <h3>Brands We Repair:</h3>
          <p><strong>Sub-Zero, Miele, Thermador, Bosch, KitchenAid, JennAir, Monogram, SKS, True Residential, Fisher & Paykel</strong></p>
          <h3>How We Fix It:</h3>
          <p>We start with sealed system diagnostics, then move to sensors, airflow fans, and digital controls. Every part we use is factory-authorized to protect your investment.</p>
        </>
      ),
    },
    {
      id: "oven",
      title: "Oven Repair",
      heading: "High-End Oven Repair Services",
      img: "/sub-zero/sub-zero-oven-repair.webp",
      alt: "Luxury Oven Repair",
      description: (
        <>
          <p>I’ve repaired everything from <strong>Wolf wall ovens</strong> to <strong>La Cornue chateau ranges</strong>. Precision is key, especially when your appliance is part of your kitchen’s aesthetic.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven not heating properly</li>
            <li>✅ Uneven baking</li>
            <li>✅ Faulty igniters or heating elements</li>
            <li>✅ Touchpad/display issues</li>
            <li>✅ Door not sealing</li>
          </ul>
          <h3>Brands We Repair:</h3>
          <p><strong>Wolf, Miele, Viking, Thermador, Monogram, JennAir (Noir), Aga, La Cornue, Dacor, Bosch</strong></p>
          <h3>How We Fix It:</h3>
          <p>We test temperature calibration, inspect igniters, and replace convection fans. Luxury ovens require luxury service — and that’s exactly what we provide in Los Angeles.</p>
        </>
      ),
    },
    {
      id: "cooktop",
      title: "Cooktop Repair",
      heading: "Luxury Cooktop Repair Experts",
      img: "/sub-zero/sub-zero-cooktop-repair.webp",
      alt: "Luxury Cooktop Repair",
      description: (
        <>
          <p>Induction, gas, or electric — we’ve seen it all. From <strong>Bertazzoni gas burners</strong> to <strong>Miele induction surfaces</strong>, we repair them with unmatched care.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burner won’t ignite or heat</li>
            <li>✅ Flickering indicators</li>
            <li>✅ Temperature control issues</li>
            <li>✅ Clicking or buzzing noises</li>
          </ul>
          <h3>Brands We Repair:</h3>
          <p><strong>Wolf, Miele, Bosch, Thermador, KitchenAid, Aga, Bertazzoni, La Cornue, JennAir, Monogram</strong></p>
          <h3>How We Fix It:</h3>
          <p>We inspect spark modules, relays, temperature sensors, and user interfaces. If needed, we calibrate or replace touch controls for flawless cooking performance.</p>
        </>
      ),
    },
    {
      id: "winecooler",
      title: "Wine Cooler Repair",
      heading: "Wine Preservation Unit Repair",
      img: "/sub-zero/sub-zero-wine-cooler-repair.webp",
      alt: "Wine Cooler Repair",
      description: (
        <>
          <p>Wine coolers are delicate. They’re not just about temperature — they’re about humidity, vibration, and design. We’ve worked on <strong>Sub-Zero</strong> and <strong>COVE</strong> wine units across LA's most exclusive homes.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Unit not cooling properly</li>
            <li>✅ Temperature zones unbalanced</li>
            <li>✅ Excess vibration</li>
            <li>✅ Condensation issues</li>
            <li>✅ Digital controls failing</li>
          </ul>
          <h3>Brands We Repair:</h3>
          <p><strong>Sub-Zero, True Residential, Fisher & Paykel, JennAir, COVE</strong></p>
          <h3>How We Fix It:</h3>
          <p>We check fan operation, sensor accuracy, seal integrity, and recalibrate control boards. When aesthetics matter, we work clean and quiet.</p>
        </>
      ),
    },
    {
      id: "range",
      title: "Range Repair",
      heading: "Luxury Range Repair",
      img: "/sub-zero/sub-zero-range-repair.webp",
      alt: "Luxury Range Repair",
      description: (
        <>
          <p>Your range is the heart of the kitchen. I’ve repaired everything from <strong>dual-fuel SKS ranges</strong> to <strong>BlueStar professional cookers</strong>. No matter the issue, we restore performance without sacrificing design.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners not igniting</li>
            <li>✅ Oven not heating</li>
            <li>✅ Electrical panel issues</li>
            <li>✅ Overheating or error codes</li>
          </ul>
          <h3>Brands We Repair:</h3>
          <p><strong>Wolf, Viking, SKS, Thermador, La Cornue, Aga, Dacor, Bertazzoni, BlueStar</strong></p>
          <h3>How We Fix It:</h3>
          <p>We test spark modules, gas valves, relays, and thermostats. Safety, performance, and elegance — we repair with all three in mind.</p>
        </>
      ),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setActiveTab(mobile ? null : "refrigerator");
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
                  {item.img && <img width="360" height="360" src={item.img} alt={item.alt} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item, index) => (
            <div key={item.id} className="accordion-item" ref={(el) => (itemRefs.current[index] = el)}>
              <div onClick={() => setActiveTab((prev) => (prev === item.id ? null : item.id))} className="accordion-header">
                {item.title}<span className="accordion-icon">{activeTab === item.id ? "−" : "+"}</span>
              </div>
              {activeTab === item.id && (
                <div className="accordion-content">
                  <h2>{item.heading}</h2>
                  {item.img && <img src={item.img} alt={item.alt} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
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
