import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Refrigerator Repair",
  heading: "Sub-Zero Refrigerator Repair",
      img: "/oven-repair/1-oven.webp",
      description: (
        <><p>Our factory-trained <strong>Sub-Zero technicians</strong> worked on just about every issue these <strong>luxury refrigerators</strong> can throw at us. Whether it’s the <strong>Sub-Zero PRO series</strong>, a <strong>panel-ready built-in fridge</strong>, or a sleek <strong>integrated column refrigerator</strong>, we approach every repair with the same level of care, precision, and respect for your home.</p>
        <p>When your <strong>Sub-Zero fridge</strong> isn’t getting cold, starts leaking water, or throws a <strong>vacuum condenser warning</strong>, we never assume the cause. We begin with full professional diagnostics using <strong>Sub-Zero-specific tools</strong> and test every key component: the <strong>compressor</strong>, <strong>evaporator</strong>, airflow systems, control board, and sensors. A single issue could stem from a <strong>failed fan motor</strong>, <strong>dirty condenser coils</strong>, or a <strong>faulty thermistor</strong> — and we know how to find the root fast.</p>
      
        <h2>Common Sub-Zero Refrigerator Problems We Fix:</h2>
        <ul>
          <li><strong>Sub-Zero refrigerator not cooling</strong></li>
          <li><strong>Fridge warm but freezer cold</strong></li>
          <li><strong>Sub-Zero compressor failure</strong></li>
          <li><strong>Sub-Zero fridge leaking water</strong></li>
          <li><strong>Sub-Zero control board issue</strong></li>
          <li><strong>Vacuum condenser warning</strong></li>
          <li><strong>Sub-Zero door won’t seal</strong></li>
          <li><strong>Sub-Zero fridge making noise</strong></li>
        </ul>
      
        <h2>How We Perform Sub-Zero Refrigerator Repair</h2>
        <ul>
          <li>✅ We start with a full inspection of the sealed system, compressor function, and evaporator coil performance. If needed, we handle sealed system repairs — including compressor, condenser, and evaporator replacement.</li>
          <li>✅ If you’re dealing with a <strong>Sub-Zero fridge</strong> that’s cooling unevenly, we check airflow fans, dampers, and defrost cycles. For panel lights flashing or unresponsive controls, we replace or reprogram the <strong>digital control board</strong> using certified <strong>Sub-Zero components</strong>. Whether it's a <strong>panel-ready model</strong>, <strong>integrated column</strong>, or <strong>PRO series unit</strong>, you’ll get fast, discreet, and professional <strong>Sub-Zero repair</strong> with a perfect finish.</li>
        </ul>
        </>
      ),
    },
    {
      id: "content2",
      title: "Freezer Repair",
  heading: "Sub-Zero Freezer Repair",
      img: "/oven-repair/2-oven.webp",
      description: (
        <><p>The most common call we get for <strong>Sub-Zero freezers</strong>? “It’s not cold enough.” That could be more than just a bad thermostat — it might be a condenser fan failure, evaporator frost issue, or even a control board malfunction.</p>

        <h3>Frequent Freezer Problems:</h3>
        <ul>
          <li><strong>Sub-Zero freezer too warm</strong></li>
          <li><strong>Excessive frost or ice buildup</strong></li>
          <li><strong>Condenser fan motor failure</strong></li>
          <li><strong>Defrost sensor or thermostat failure</strong></li>
          <li><strong>Sub-Zero ice maker not making ice</strong></li>
        </ul>
      
        <h3>How We Perform Freezer Repairs</h3>
        <ul>
          <li>✅ We inspect the defrost cycle, gaskets, fan motors, and thermistors. If your <strong>Sub-Zero ice maker</strong> isn’t working, we check the inlet valve, filters, and water lines for blockage or damage.</li>
          <li>✅ Older units often benefit from sensor recalibration and control board upgrades — we handle all of it with OEM parts. You'll get a fast, factory-certified repair that protects your appliance’s performance and lifespan.</li>
        </ul></>
      ),
    },
    {
      id: "content3",
      title: "Wine Cooler Repair",
  heading: "Sub-Zero Wine Cooler Repair",
      img: "/oven-repair/3-oven.webp",
      description: (
        <><p>We get a lot of calls from clients with <strong>Sub-Zero wine coolers</strong> that aren’t holding temperature. These systems are more than just fancy fridges — they’re finely tuned environments for preserving flavor, aroma, and the long-term quality of your wine.</p>

        <h3>Common Sub-Zero Wine Cooler Issues:</h3>
        <ul>
          <li><strong>Wine cooler not cooling properly</strong></li>
          <li><strong>Temperature imbalance between zones</strong></li>
          <li><strong>Excess humidity or condensation</strong></li>
          <li><strong>Vibration that disturbs wine aging</strong></li>
          <li><strong>Flashing lights or control board issues</strong></li>
        </ul>
      
        <h3>How We Repair Wine Coolers</h3>
        <ul>
          <li>✅ We check each cooling zone, calibrate thermistors, inspect door seals, and replace faulty fans or sensors.</li>
          <li>✅ For digital issues, we’re trained to update or replace <strong>Sub-Zero control boards</strong> and reset system firmware. We handle these repairs discreetly, preserving both the function and design of your unit.</li>
        </ul></>
      ),
    },
    {
      id: "content4",
      title: "Beverage Center Repair",
  heading: "Sub-Zero Beverage Center Repair",
      img: "/oven-repair/5-oven.webp",
      description: (
        <><p>Unlike wine coolers, <strong>Sub-Zero beverage centers</strong> are built for everyday use — cooling water, soda, beer, and juice. But when they go warm or loud, they still demand expert service.</p>

        <h3>Most Common Beverage Cooler Issues:</h3>
        <ul>
          <li><strong>Beverage center not cooling evenly</strong></li>
          <li><strong>Interior light not turning on</strong></li>
          <li><strong>Loud compressor or fan noise</strong></li>
          <li><strong>Control panel unresponsive</strong></li>
          <li><strong>Door seal loose or warped</strong></li>
        </ul>
      
        <h3>How We Fix Sub-Zero Beverage Centers</h3>
        <ul>
          <li>✅ We check cooling systems, electronic controls, and door alignment.</li>
          <li>✅ If the compressor’s humming or your display won’t respond, we repair or replace key components using genuine <strong>Sub-Zero parts</strong>.</li>
          <li>✅ Whether it’s in a kitchen, entertainment area, or bar setup — we’ll get your unit back to chill.</li>
        </ul></>
      ),
    },
    {
      id: "content5",
      title: "Oven Maintenance Services",
  heading: "Professional Oven Maintenance Services – Why Regular Care is Essential",
      description: (
        <><p><strong>Burner and Element Cleaning</strong>: Cleaning <strong>surface burners</strong> and <strong>elements</strong> improves <strong>heat distribution</strong> and <strong>cooking performance</strong>.</p>
        <p><strong>Gas Line Inspection</strong>: For <strong>gas ovens</strong>, we inspect connections to avoid leaks and ensure safe operation.</p>
        <p><strong>Electrical Component Check</strong>: We inspect <strong>thermostats</strong>, <strong>control boards</strong>, and heating elements for <strong>electric ovens</strong> to keep them functioning smoothly.</p> </>
      ),
    },
    {
      id: "content6",
      title: "Contact Us",
  heading: "Contact Us for Oven Repair Services in Los Angeles",
      description: (
        <><p>If you're experiencing <strong>oven issues</strong>, don't delay. Contact <strong>Same Day Appliance Repair</strong> for prompt, reliable service. We proudly serve <strong>Los Angeles</strong> and surrounding areas, offering <strong>same-day oven repair services</strong> for all oven models. For trusted and affordable oven repair, <strong>call us today</strong> to bring functionality back to your kitchen.</p></>
      ),
    },
  ];
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
             <div className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}>
             <h2>{item.heading}</h2>
             <div className="tab-body-float">
             {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
             </div>
             <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
</a>
           </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item) => (
            <div key={item.id} className="accordion-item">
              <div
                onClick={() =>
                  setActiveTab((prev) => (prev === item.id ? null : item.id))
                }
                className="accordion-header"
              >
                {item.title}
                <span className="accordion-icon">
                  {activeTab === item.id ? "−" : "+"}
                </span>
              </div>
              {activeTab === item.id && (
               <div className="accordion-content">
               <h2>{item.title}</h2>
               {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
               <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (323) 870-4790</button>
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
