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
      title: "Refrigerator Repair",
  heading: "Sub-Zero Refrigerator Repair",
      img: "/sub-zero/sub-zero-appliance-repair.webp",
      alt: "Sub-Zero Refrigerator Repair",
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
      alt: "Sub-Zero Freezer Repair",
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
      alt: "Sub-Zero Whine Cooler Repair",
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
      alt: "Sub-Zero Beverage Center Repair",
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
      id: "content7",
      title: "Maintenance Services",
      heading: "Sub-Zero Maintenance Services",
      img: "/sub-zero/sub-zero-maintenance-services.webp", // replace with your image
      alt: "Sub-Zero Maintenance Services",
      description: (
        <>
          <p>Keep your Sub-Zero appliances in peak condition with our routine <strong>maintenance services</strong>. Prevent breakdowns and extend the life of your refrigerator, freezer, or wine cooler with scheduled tune-ups and inspections.</p>
          <h3>What’s Included:</h3>
          <ul>
            <li>✅ Full system diagnostics</li>
            <li>✅ Vacuum condenser cleaning</li>
            <li>✅ Gasket inspection and sealing</li>
            <li>✅ Thermostat & sensor calibration</li>
            <li>✅ Filter replacements</li>
          </ul>
        </>
      ),
    },
    {
      id: "content8",
      title: "Installation Services",
      heading: "Sub-Zero Installation Services",
      img: "/sub-zero/sub-zero-installation-services.webp", // replace with your image
      alt: "Sub-Zero Installation Services",
      description: (
        <>
          <p>Upgrading your kitchen? We provide <strong>white-glove installation</strong> of all Sub-Zero appliances, including <strong>built-in refrigerators</strong>, <strong>column freezers</strong>, and <strong>wine preservation units</strong>.</p>
          <h3>Installation Options:</h3>
          <ul>
            <li>✅ Panel-ready Sub-Zero installation</li>
            <li>✅ Integrated fridge/freezer setup</li>
            <li>✅ Water line and electrical integration</li>
            <li>✅ Haul-away of old units (optional)</li>
            <li>✅ Post-installation performance testing</li>
          </ul>
        </>
      ),
    },
    {
      id: "content5",
      title: "Why Choose Us?",
  heading: "Why Homeowners Choose Zaricci for Sub-Zero Repair",
  img: "/sub-zero/best-sub-zero-repair.webp",
  alt: "Sub-Zero Expert Technicians",
      description: (
        <><p>We’ve seen too many homeowners burned by generic techs who don’t understand <strong>luxury appliances</strong>. Every <strong>Sub-Zero appliance technician</strong> on our team is <strong>factory-trained and licensed</strong>. We repair <strong>Sub-Zero refrigerators</strong>, <strong>freezers</strong>, <strong>wine coolers</strong>, and <strong>beverage centers</strong>.</p>

        <h3>What You Can Expect:</h3>
        <ul>
          <li>✅ Same-day appointments</li>
          <li>✅ Emergency service</li>
          <li>✅ White-glove, in-home professionalism</li>
          <li>✅ Upfront pricing with no surprises</li>
          <li>✅ 3-month warranty on parts and labor</li>
        </ul>
        <p>Learn more about Sub-Zero’s product line on the&nbsp;
<a href="https://www.subzero-wolf.com/" target="_blank" rel="noopener" title="Visit the official Sub-Zero website for product details and specifications">
  official Sub-Zero website
</a>.</p> </>
        
      ),
    },
    {
      id: "content6",
      title: "Book an Appointment",
  heading: "Book Sub-Zero Repair Near You",
      description: (
        <><p>If you searched for <strong>“Sub-Zero appliance repair near me”</strong> or <strong>“who can fix a Sub-Zero refrigerator near me?”</strong> — you found the best. Call now to book your <strong>Sub-Zero fridge repair</strong> appointment, or schedule a same-day <strong>Sub-Zero service</strong> visit with one of our elite <strong>Sub-Zero technicians</strong>.</p>
        <p>📍 Proudly serving <strong>luxury homes</strong> in 
        &nbsp;<a href="/sub-zero-repair-los-angeles" title="Sub-Zero Repair Los Angeles, CA">Los Angeles</a>, 
        &nbsp;<a href="/sub-zero-repair-brentwood" title="Sub-Zero Repair Brentwood, CA">Brentwood</a>, 
        &nbsp; <a href="/sub-zero-repair-bel-air/" title="Sub-Zero Repair Bel Air, CA">Bel Air</a>, 
        &nbsp;<a href="/sub-zero-repair-beverly-hills/" title="Sub-Zero Repair Beverly Hills, CA">Beverly Hills</a>, 
        &nbsp;<a href="/sub-zero-repair-calabasas/" title="Sub-Zero Repair Calabasas, CA">Calabasas</a>, 
        &nbsp;<a href="/sub-zero-repair-west-hollywood/" title="Sub-Zero Repair West Hollywood, CA">West Hollywood</a>, 
        &nbsp;<a href="/sub-zero-repair-santa-monica/" title="Sub-Zero Repair Santa Monica, CA">Santa Monica</a>,
        &nbsp;<a href="/sub-zero-repair-pasadena/" title="Sub-Zero Repair Pasadena, CA"> Pasadena</a>, 
        &nbsp;<a href="/sub-zero-repair-san-marino/" title="Sub-Zero Repair San Marino, CA">San Marino</a>, 
        &nbsp;<a href="/sub-zero-repair-pacific-palisades/" title="Sub-Zero Repair Pacific Palisades, CA">Pacific Palisades</a>, 
        &nbsp;<a href="/sub-zero-repair-malibu/" title="Sub-Zero Repair Malibu, CA">Malibu</a>, 
        &nbsp;<a href="/sub-zero-repair-thousand-oaks/" title="Sub-Zero Repair Thousand Oaks, CA">Thousand Oaks</a> and nearby areas</p>
        <p>Call Zaricci today for fast and reliable <strong>Sub-Zero repair</strong></p>
        </>
      ),
    },
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
        window.scrollTo({
          top: elementTop - topOffset,
          behavior: "smooth",
        });
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
                      alt={item.title}
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
                    <img
                      src={item.img}
                      alt={item.title}
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
