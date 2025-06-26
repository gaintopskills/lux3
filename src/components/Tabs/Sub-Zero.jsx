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
      img: "/sub-zero/sub-zero-appliance-repair.webp",
      description: (
        <><p>Our factory-trained <strong>Sub-Zero technicians</strong> worked on just about every issue these <strong>luxury refrigerators</strong> can throw at us. Whether it’s the <strong>Sub-Zero PRO series</strong>, a <strong>panel-ready built-in fridge</strong>, or a sleek <strong>integrated column refrigerator</strong>, we approach every repair with the same level of care, precision, and respect for your home.</p>
      
        <h3>Common Problems:</h3>
        <ul>
          <li><strong>Refrigerator not cooling</strong></li>
          <li><strong>Fridge warm but freezer cold</strong></li>
          <li><strong>Compressor failure</strong></li>
          <li><strong>Fridge leaking water</strong></li>
          <li><strong>Control board issue</strong></li>
          <li><strong>Vacuum condenser warning</strong></li>
          <li><strong>Door won’t seal</strong></li>
          <li><strong>Fridge making noise</strong></li>
        </ul>
      
        <h2>How We Fix It</h2>
       <p>✅ We start with a full inspection of the sealed system, compressor function, and evaporator coil performance. If needed, we handle sealed system repairs — including compressor, condenser, and evaporator replacement.</p>
        <p>✅ If you’re dealing with a <strong>Sub-Zero fridge</strong> that’s cooling unevenly, we check airflow fans, dampers, and defrost cycles. For panel lights flashing or unresponsive controls, we replace or reprogram the <strong>digital control board</strong> using certified <strong>Sub-Zero components</strong>. Whether it's a <strong>panel-ready model</strong>, <strong>integrated column</strong>, or <strong>PRO series unit</strong>, you’ll get fast, discreet, and professional <strong>Sub-Zero repair</strong> with a perfect finish.</p>
      
        </>
      ),
    },
    {
      id: "content2",
      title: "Freezer Repair",
  heading: "Sub-Zero Freezer Repair",
      img: "/sub-zero/sub-zero-freezer-repair.webp",
      description: (
        <><p>The most common call we get for <strong>Sub-Zero freezers</strong>? “It’s not cold enough.” That could be more than just a bad thermostat — it might be a condenser fan failure, evaporator frost issue, or even a control board malfunction.</p>

        <h3>Common Problems:</h3>
        <ul>
          <li><strong>Freezer too warm</strong></li>
          <li><strong>Excessive frost or ice buildup</strong></li>
          <li><strong>Condenser fan motor failure</strong></li>
          <li><strong>Defrost sensor or thermostat failure</strong></li>
          <li><strong>Ice maker not making ice</strong></li>
        </ul>
      
        <h3>How We Fix It</h3>
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
      img: "/sub-zero/sub-zero-wine-cooler-repair.webp",
      description: (
        <><p>We get a lot of calls from clients with <strong>Sub-Zero wine coolers</strong> that aren’t holding temperature. These systems are more than just fancy fridges — they’re finely tuned environments for preserving flavor, aroma, and the long-term quality of your wine.</p>

        <h3>Common Problems:</h3>
        <ul>
          <li><strong>Wine cooler not cooling properly</strong></li>
          <li><strong>Temperature imbalance between zones</strong></li>
          <li><strong>Excess humidity or condensation</strong></li>
          <li><strong>Vibration that disturbs wine aging</strong></li>
          <li><strong>Flashing lights or control board issues</strong></li>
        </ul>
      
        <h3>How We Fix It</h3>
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
      img: "/sub-zero/sub-zero-beverage-center-repair.webp",
      description: (
        <><p>Unlike wine coolers, <strong>Sub-Zero beverage centers</strong> are built for everyday use — cooling water, soda, beer, and juice. But when they go warm or loud, they still demand expert service.</p>

        <h3>Common Problems</h3>
        <ul>
          <li><strong>Beverage center not cooling evenly</strong></li>
          <li><strong>Interior light not turning on</strong></li>
          <li><strong>Loud compressor or fan noise</strong></li>
          <li><strong>Control panel unresponsive</strong></li>
          <li><strong>Door seal loose or warped</strong></li>
        </ul>
      
        <h3>How We Fix It</h3>
        <ul>
          <li>✅ We check cooling systems, electronic controls, and door alignment.</li>
          <li>✅ If the compressor’s humming or your display won’t respond, we repair or replace key components using genuine <strong>Sub-Zero parts</strong>.</li>
          <li>✅ Whether it’s in a kitchen, entertainment area, or bar setup — we’ll get your unit back to chill.</li>
        </ul></>
      ),
    },
    {
      id: "content5",
      title: "Why Choose Us?",
  heading: "Why Homeowners Choose Zaricci for Sub-Zero Repair",
  img: "/sub-zero/best-sub-zero-repair.webp",
      description: (
        <><p>We’ve seen too many homeowners burned by generic techs who don’t understand <strong>luxury appliances</strong>. Every <strong>Sub-Zero appliance technician</strong> on our team is <strong>factory-trained and licensed</strong>. We repair <strong>Sub-Zero refrigerators</strong>, <strong>freezers</strong>, <strong>wine coolers</strong>, and <strong>beverage centers</strong>.</p>

        <h3>What You Can Expect:</h3>
        <ul>
          <li>✅ Same-day appointments</li>
          <li>✅ Emergency service</li>
          <li>✅ White-glove, in-home professionalism</li>
          <li>✅ Upfront pricing with no surprises</li>
          <li>✅ 3 month warranty on parts and labor</li>
        </ul> </>
      ),
    },
    {
      id: "content6",
      title: "Book an Appointment",
  heading: "Book Sub-Zero Repair Near You",
      description: (
        <><p>If you searched for <strong>“Sub-Zero appliance repair near me”</strong> or <strong>“who can fix a Sub-Zero refrigerator near me?”</strong> — you found the best. Call now to book your <strong>Sub-Zero fridge repair</strong> appointment, or schedule a same-day <strong>Sub-Zero service</strong> visit with one of our elite <strong>Sub-Zero technicians</strong>.</p>

        <p>📍 Proudly serving <strong>luxury homes</strong> in <a ahref="/sub-zero-repair-brentwood/>Brentwood" title="Sub-Zero Repair Brentwood, CA">Brentwood</a>, Bel Air, Beverly Hills, Calabasas, West Hollywood, Santa Monica, Pasadena, San Marino, Pacific Palisades, Malibu, Thousand Oaks and nearby areas</p>
      
        <p>Call Zaricci today for fast and reliable <strong>Sub-Zero repair</strong></p>
        </>
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
  <button className="tabs-button">Call: (424) 499-7788</button>
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
