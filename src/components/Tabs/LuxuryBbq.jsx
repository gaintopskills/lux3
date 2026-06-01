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
      id: "fisher-paykel-oven-repair",
      title: "Fisher & Paykel Oven Repair",
      heading: "Fisher & Paykel Oven Repair",
      /*img: "/oven-repair/fisher-paykel-oven-repair.webp",*/
      alt: "Fisher and Paykel oven repair technician servicing a combi-steam wall oven",
      description: (
        <>
          <p>
            We provide <strong>Fisher & Paykel oven repair</strong> for Series 7, Series 9, and Series 11 ovens, including Contemporary, Minimal, Professional, combi-steam, convection, speed, microwave combination, and range oven models. Fisher & Paykel ovens often use AeroTech airflow, guided cooking, steam functions, precision sensors, and flush integrated design.
          </p>
  
          <h3>Fisher & Paykel Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>AeroTech airflow problems can cause food to brown unevenly even when the oven heats.</li>
            <li>Combi-steam ovens may stop filling, draining, steaming, or descaling correctly.</li>
            <li>Series 9 and Series 11 touch controls or guided cooking features may stop responding properly.</li>
            <li>Speed ovens may fail in microwave, convection, or combination mode while another mode still works.</li>
            <li>Flush Minimal and Contemporary installations may need cabinet ventilation checked during repair.</li>
          </ul>
  
          <h3>How We Repair Fisher & Paykel Ovens</h3>
          <p>
            We test AeroTech fans, rear elements, sensors, probes, steam pumps, valves, drains, control modules, touch interfaces, and cooling fans. For built-in units, we also inspect airflow around the cabinet opening.
          </p>
        </>
      )
    },
  
    {
      id: "wolf-oven-repair",
      title: "Wolf Oven Repair",
      heading: "Wolf Oven Repair",
      /*img: "/oven-repair/wolf-oven-repair.webp",*/
      alt: "Wolf oven repair technician servicing a luxury built-in oven",
      description: (
        <>
          <p>
            Our <strong>Wolf oven repair</strong> service covers Wolf M Series, E Series, L Series legacy ovens, built-in convection ovens, convection steam ovens, speed ovens, dual fuel range ovens, gas range ovens, and professional-style wall ovens. Wolf service often involves Dual VertiCross convection, relay faults, probes, steam systems, cooling fans, and built-in ventilation.
          </p>
  
          <h3>Wolf Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>M Series ovens may show convection-element relay-related faults or stop heating in specific zones.</li>
            <li>The oven may not recognize the probe, or probe cooking may stop unexpectedly.</li>
            <li>Dual VertiCross convection problems can create uneven baking or roasting in built-in ovens.</li>
            <li>Convection steam ovens may develop water, drain, pump, descaling, or sensor issues.</li>
            <li>Speed ovens may fail in microwave-assist or combination cooking while standard convection still works.</li>
          </ul>
  
          <h3>How We Repair Wolf Ovens</h3>
          <p>
            We test convection circuits, relays, probes, fans, sensors, steam components, drains, pumps, control modules, door locks, and range oven ignition systems. For built-in Wolf ovens, we also inspect cabinet ventilation and cooling airflow.
          </p>
        </>
      )
    },
  
    {
      id: "thermador-oven-repair",
      title: "Thermador Oven Repair",
      heading: "Thermador Oven Repair",
      /*img: "/oven-repair/thermador-oven-repair.webp",*/
      alt: "Thermador oven repair technician servicing a professional wall oven",
      description: (
        <>
          <p>
            We provide <strong>Thermador oven repair</strong> for Professional Series, Masterpiece Series, built-in wall ovens, steam ovens, speed ovens, double ovens, combination ovens, Pro Harmony ranges, and Pro Grand ranges. Thermador ovens often require attention to steam descaling, speed-cooking functions, temperature probes, WiFi controls, and professional range oven systems.
          </p>
  
          <h3>Thermador Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Steam ovens may need descaling when limescale affects performance or the appliance requests a descale cycle.</li>
            <li>Speed ovens may fail in microwave, convection, turntable, or combination cooking modes.</li>
            <li>Pro Harmony and Pro Grand range ovens may develop ignition, bake burner, broiler, or sensor issues.</li>
            <li>Control panels, relays, probes, sensors, or Home Connect communication may interrupt cooking programs.</li>
            <li>Condensation, cooling fan, door seal, or cabinet heat issues may appear in built-in steam and wall ovens.</li>
          </ul>
  
          <h3>How We Repair Thermador Ovens</h3>
          <p>
            We separate wall oven diagnosis from Pro range diagnosis, then inspect steam systems, descaling condition, water flow, sensors, probes, relays, fans, locks, ignition components, and built-in ventilation.
          </p>
        </>
      )
    },
  
    {
      id: "viking-oven-repair",
      title: "Viking Oven Repair",
      heading: "Viking Oven Repair",
      /*img: "/oven-repair/viking-oven-repair.webp",*/
      alt: "Viking oven repair technician servicing a luxury range oven",
      description: (
        <>
          <p>
            Our <strong>Viking oven repair</strong> service covers Viking 3 Series, 5 Series, 7 Series, RVL, Professional ranges, wall ovens, French-door ovens, double ovens, gas ranges, dual fuel ranges, and legacy Viking cooking appliances. Viking repairs often involve gas igniters, oven sensors, convection fans, heavy hinges, and pro-style oven cavities.
          </p>
  
          <h3>Viking Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>A gas oven igniter may glow but still be too weak to open the gas valve properly.</li>
            <li>French-door oven hinges, alignment, or gaskets may cause heat loss or uneven closing.</li>
            <li>Convection fan, thermostat, sensor, or relay faults can cause uneven baking.</li>
            <li>Professional range ovens may need bake burner, broiler, safety-valve, or gas-supply diagnosis.</li>
            <li>Legacy Viking units may use parts that differ from newer 3, 5, and 7 Series models.</li>
          </ul>
  
          <h3>How We Repair Viking Ovens</h3>
          <p>
            We test igniter amp draw, gas valve response, oven sensors, relays, fans, hinges, gaskets, door locks, and temperature probes. For older Viking ranges, we confirm the exact series before sourcing replacement parts.
          </p>
        </>
      )
    },
  
    {
      id: "monogram-oven-repair",
      title: "Monogram Oven Repair",
      heading: "Monogram Oven Repair",
      /*img: "/oven-repair/monogram-oven-repair.webp",*/
      alt: "Monogram oven repair technician servicing a luxury Advantium wall oven",
      description: (
        <>
          <p>
            We provide <strong>Monogram oven repair</strong> for Statement and Minimalist wall ovens, Advantium 5-in-1 ovens, convection ovens, double ovens, range ovens, and microwave combination ovens. Monogram repairs often require Advantium speedcook diagnostics, premium built-in ventilation checks, and mode-by-mode testing.
          </p>
  
          <h3>Monogram Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Advantium speedcook may stop working because halogen, microwave, and convection systems must coordinate properly.</li>
            <li>A microwave/convection combination oven may fail in one mode while another mode still works.</li>
            <li>Statement and Minimalist wall ovens may develop touchscreen, relay, sensor, or probe issues.</li>
            <li>Range oven cavities may need ignition, broiler, bake element, or temperature-control service.</li>
            <li>Cooling fans and built-in ventilation need attention in integrated Monogram installations.</li>
          </ul>
  
          <h3>How We Repair Monogram Ovens</h3>
          <p>
            We diagnose Monogram ovens by platform: Advantium, wall oven, combination oven, or range oven. We test speedcook, convection, microwave, bake, broil, self-clean, cooling fan, sensor, relay, and ventilation systems separately.
          </p>
        </>
      )
    },
  
    {
      id: "signature-kitchen-suite-oven-repair",
      title: "Signature Kitchen Suite Oven Repair",
      heading: "Signature Kitchen Suite Oven Repair",
      /*img: "/oven-repair/signature-kitchen-suite-oven-repair.webp",*/
      alt: "Signature Kitchen Suite oven repair technician servicing a steam-combi wall oven",
      description: (
        <>
          <p>
            Our <strong>Signature Kitchen Suite oven repair</strong> service covers SKS wall ovens, steam-combi ovens, transitional combi-wall ovens, pro ranges, 36-inch and 48-inch dual fuel ranges, speed ovens, and ovens paired with sous vide and induction features. SKS ovens require attention to True Steam-Combi systems, ProHeat convection, connected controls, and professional range oven systems.
          </p>
  
          <h3>Signature Kitchen Suite Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Steam-combi ovens may stop filling, draining, steaming, or heating correctly.</li>
            <li>ProHeat convection issues may affect airflow, rear heat, or baking consistency.</li>
            <li>Speed ovens may fail in microwave, convection, or broil mode.</li>
            <li>Touchscreen, connected control, relay, pump, valve, probe, or sensor issues may interrupt cooking modes.</li>
            <li>Dual fuel ranges require separate diagnosis of the gas cooking system and electric oven cavity.</li>
          </ul>
  
          <h3>How We Repair Signature Kitchen Suite Ovens</h3>
          <p>
            We test steam, convection, speed, probe, self-clean, connected-control, water, fan, relay, sensor, and range oven systems separately so the failed cooking mode is accurately identified.
          </p>
        </>
      )
    },
  
    {
      id: "hestan-oven-repair",
      title: "Hestan Oven Repair",
      heading: "Hestan Oven Repair",
      /*img: "/oven-repair/hestan-oven-repair.webp",*/
      alt: "Hestan oven repair technician servicing a luxury gas range oven",
      description: (
        <>
          <p>
            We provide <strong>Hestan oven repair</strong> for Hestan all-gas ranges, dual fuel ranges, KRG and KRD models, professional-style ovens, and luxury residential cooking suites. Hestan ovens often require diagnosis of PureVection airflow, high-output gas systems, heavy-duty doors, probes, and professional burner assemblies.
          </p>
  
          <h3>Hestan Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>PureVection airflow problems may create uneven baking or slow heat recovery.</li>
            <li>All-gas range ovens may need ignition, safety valve, bake burner, or broiler repair.</li>
            <li>Dual fuel models may require separate testing of electric oven components and gas systems.</li>
            <li>Temperature probe, thermostat, relay, and sensor issues may affect precision cooking modes.</li>
            <li>Heavy doors, hinges, gaskets, and ventilation clearances can affect oven performance.</li>
          </ul>
  
          <h3>How We Repair Hestan Ovens</h3>
          <p>
            We test PureVection fans, gas ignition, oven burners, elements, sensors, probes, relays, hinges, gaskets, and installation ventilation to restore Hestan’s high-output cooking performance.
          </p>
        </>
      )
    },
  
    {
      id: "dacor-oven-repair",
      title: "Dacor Oven Repair",
      heading: "Dacor Oven Repair",
      /*img: "/oven-repair/dacor-oven-repair.webp",*/
      alt: "Dacor oven repair technician servicing a luxury wall oven",
      description: (
        <>
          <p>
            Our <strong>Dacor oven repair</strong> service covers Modernist, Contemporary, Heritage, Discovery, Renaissance, built-in wall ovens, range ovens, steam ovens, speed ovens, and Dacor dual fuel or gas cooking appliances. Dacor repairs often involve legacy parts, Pure Convection systems, touch controls, probes, and built-in installation issues.
          </p>
  
          <h3>Dacor Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Four-Part Pure Convection systems may develop fan, element, relay, or sensor issues.</li>
            <li>Legacy Discovery, Renaissance, and Heritage controls or touchpads may fail differently from newer Modernist units.</li>
            <li>Door lock, self-clean, cooling fan, gasket, and hinge issues are common service points on built-in ovens.</li>
            <li>Gas range ovens may need ignition, bake burner, broiler, or safety-valve diagnosis.</li>
            <li>Older Dacor units may have parts availability differences from newer Samsung-era Dacor products.</li>
          </ul>
  
          <h3>How We Repair Dacor Ovens</h3>
          <p>
            We identify the Dacor generation first, then test convection components, control boards, touchpads, probes, sensors, gas ignition, locks, and door systems. Legacy Dacor parts are verified carefully before repair.
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
