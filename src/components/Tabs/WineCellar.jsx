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
      id: "whisperkool-wine-cellar-repair",
      title: "WhisperKOOL Wine Cellar Repair",
      heading: "WhisperKOOL Wine Cellar Cooling System Repair",
      img: "/wine-cellar-repair/whisperkool-wine-cellar-repair.webp",
      alt: "WhisperKOOL wine cellar cooling system repair technician servicing a climate-control unit",
      description: (
        <>
          <p>We provide <strong>WhisperKOOL wine cellar cooling system repair</strong> for SC PRO and Extreme through-the-wall units, Slimline systems, fully ducted self-contained units, ductless split systems, ceiling-mounted systems, Platinum split configurations, ducted split systems, Quantum systems, and supported cabinet-cooling units. WhisperKOOL systems are designed specifically for wine-storage environments, so diagnosis should account for cellar construction, heat load, airflow, condensate management, and the location of the condenser or exhaust path.</p>
          <h3>WhisperKOOL Wine Cellar Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Cellar temperature rising above the set point or fluctuating throughout the day</li>
            <li>✅ Through-the-wall unit running continuously, short cycling, or exhausting heat into an unsuitable space</li>
            <li>✅ Evaporator coil icing, restricted airflow, dirty condenser, fan failure, or bottle-probe concern</li>
            <li>✅ Drain-line blockage, condensate leak, moisture issue, or water collecting near the cooling unit</li>
            <li>✅ Split-system evaporator, condenser, refrigerant-line, low-ambient, or cold-weather-start issue</li>
            <li>✅ Controller, sensor, alarm, wiring, relay, or compressor-start problem</li>
          </ul>
          <h3>How We Fix These WhisperKOOL Wine Cellar Issues</h3>
          <p>We inspect cellar temperature, relative humidity, insulation and vapor-barrier conditions, door sealing, glass heat load, condenser-air intake, exhaust routing, airflow, filters, evaporator and condenser coils, fans, drainage, bottle probes, controllers, alarms, wiring, compressor-start components, refrigerant-line conditions, and sealed-system symptoms. For split systems, we also review the evaporator-condenser configuration and installation environment before recommending repair.</p>
        </>
      )
    },
    {
      id: "cellarpro-wine-cellar-repair",
      title: "CellarPro Wine Cellar Repair",
      heading: "CellarPro Wine Cellar Cooling System Repair",
      /*img: "/wine-cellar-repair/cellarpro-wine-cellar-repair.webp",*/
      alt: "CellarPro wine cellar cooling system repair technician servicing a climate-control unit",
      description: (
        <>
          <p>Our <strong>CellarPro wine cellar cooling system repair</strong> service covers self-contained units, through-the-wall configurations, ceiling-mount systems, split refrigeration systems, ducted and ductless evaporators, vertical and horizontal evaporators, and Air Handler systems used in residential and commercial wine cellars. Because CellarPro offers systems for small rooms through large custom cellars, repair should begin with the complete model, cellar volume, heat load, ducting, and condenser location.</p>
          <h3>CellarPro Wine Cellar Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ CellarPro cooling unit not holding a stable long-term storage temperature</li>
            <li>✅ Air Handler, ducted evaporator, ceiling-mount, or split system producing weak airflow</li>
            <li>✅ Humidity control, excessive moisture removal, condensation, or drainage concern</li>
            <li>✅ Compressor, condenser fan, evaporator fan, relay, sensor, or electronic-control fault</li>
            <li>✅ Refrigerant-line, outdoor condenser, icing, or sealed-system issue on split configurations</li>
            <li>✅ Incorrect sizing, restricted ductwork, glass-cellar heat load, or installation condition affecting performance</li>
          </ul>
          <h3>How We Fix These CellarPro Wine Cellar Issues</h3>
          <p>We evaluate temperature and humidity readings, cellar volume, insulation, glass exposure, door sealing, duct sizing, return and supply airflow, evaporator and condenser coils, fans, filters, drains, sensors, controllers, wiring, compressor-start components, refrigerant-line conditions, and sealed-system symptoms. We distinguish equipment failure from application or installation problems before recommending CellarPro parts or system changes.</p>
        </>
      )
    },
    {
      id: "wine-guardian-wine-cellar-repair",
      title: "Wine Guardian Wine Cellar Repair",
      heading: "Wine Guardian Wine Cellar Cooling System Repair",
      /*img: "/wine-cellar-repair/wine-guardian-wine-cellar-repair.webp",*/
      alt: "Wine Guardian wine cellar cooling system repair technician servicing a climate-control unit",
      description: (
        <>
          <p>We provide <strong>Wine Guardian wine cellar cooling system repair</strong> for ducted units, ducted split systems, ductless split systems, through-the-wall units, Wine Guardian Pro specialty systems, humidifiers, remote sensors, thermostats, and controls. Wine Guardian systems are often selected for concealed luxury-cellar installations because the equipment can be placed away from the display space while conditioned air is distributed through ducts or a remote fan coil.</p>
          <h3>Wine Guardian Wine Cellar Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Wine cellar not maintaining the selected temperature despite continuous operation</li>
            <li>✅ Ducted supply or return airflow imbalance causing warm areas inside the cellar</li>
            <li>✅ Ducted split or ductless split system with evaporator, condenser, line-set, or control issue</li>
            <li>✅ Humidifier not adding moisture correctly, humidistat concern, mineral buildup, or drain problem</li>
            <li>✅ Remote sensor, thermostat, alarm, display, wiring, or communication fault</li>
            <li>✅ Condensation, icing, vibration, excessive noise, or mechanical-room ventilation problem</li>
          </ul>
          <h3>How We Fix These Wine Guardian Wine Cellar Issues</h3>
          <p>We inspect cellar temperature and humidity, duct layout, supply and return airflow, filters, evaporator and condenser coils, fans, condensate drains, mechanical-room ventilation, sensors, thermostats, humidistats, humidifier water supply and drainage where equipped, wiring, alarms, compressor-start components, refrigerant-line conditions, and sealed-system symptoms. We verify that concealed equipment remains serviceable and that air distribution protects the complete collection.</p>
        </>
      )
    },
    {
      id: "breezaire-wine-cellar-repair",
      title: "Breezaire Wine Cellar Repair",
      heading: "Breezaire Wine Cellar Cooling System Repair",
      /*img: "/wine-cellar-repair/breezaire-wine-cellar-repair.webp",*/
      alt: "Breezaire wine cellar cooling system repair technician servicing a climate-control unit",
      description: (
        <>
          <p>Our <strong>Breezaire wine cellar cooling system repair</strong> service covers self-contained wall-mounted units, WK Series systems, WKSL Series units, WKL configurations, supported split-system installations, controllers, sensors, fans, coils, and legacy Breezaire wine-room equipment. Many Breezaire systems are installed through an interior wall and vent heat into an adjacent conditioned space, so surrounding-room conditions and airflow are essential parts of diagnosis.</p>
          <h3>Breezaire Wine Cellar Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Breezaire unit running but the cellar temperature remains too warm</li>
            <li>✅ Unit cycling excessively, producing unusual noise, or failing to start</li>
            <li>✅ Evaporator icing, restricted airflow, fan problem, dirty coil, or ventilation concern</li>
            <li>✅ Condensate leak, drainage issue, excessive moisture, or water near the unit</li>
            <li>✅ Controller, sensor, display, wiring, relay, or compressor-start fault</li>
            <li>✅ Adjacent-room temperature, wall installation, air leak, or cellar-construction issue reducing performance</li>
          </ul>
          <h3>How We Fix These Breezaire Wine Cellar Issues</h3>
          <p>We inspect the complete Breezaire model, set point, cellar temperature, relative humidity, surrounding-room conditions, door seal, insulation, vapor barrier, airflow, evaporator and condenser coils, fans, drains, controllers, sensors, electrical components, compressor-start parts, and sealed-system symptoms. We also confirm that the warm-air side of the unit has sufficient conditioned space and ventilation.</p>
        </>
      )
    },
    {
      id: "cellarcool-wine-cellar-repair",
      title: "CellarCool Wine Cellar Repair",
      heading: "CellarCool Wine Cellar Cooling System Repair",
      /*img: "/wine-cellar-repair/cellarcool-wine-cellar-repair.webp",*/
      alt: "CellarCool wine cellar cooling system repair technician servicing a climate-control unit",
      description: (
        <>
          <p>We provide <strong>CellarCool wine cellar cooling system repair</strong> for self-contained through-the-wall systems, partially ducted units, fully ducted self-contained configurations, packaged split systems, ductless and ducted split systems, evaporator coils, digital controllers, KDT controls, and bottle-probe systems. CellarCool systems are intended for purpose-built wine-cellar conditions and should be evaluated alongside the room’s construction, heat load, ducting, and condenser-air environment.</p>
          <h3>CellarCool Wine Cellar Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ CellarCool unit not maintaining a stable cellar temperature</li>
            <li>✅ Bottle probe, KDT controller, thermostat, alarm, display, or wiring issue</li>
            <li>✅ Dynamic airflow, variable-speed fan, evaporator, condenser, or filter concern</li>
            <li>✅ Split-system line-set, outdoor condenser, cold-weather-start, or sealed-system issue</li>
            <li>✅ Drain-line blockage, condensate leak, icing, or excess-humidity condition</li>
            <li>✅ Duct length, ventilation, glass exposure, ambient heat, or installation condition affecting capacity</li>
          </ul>
          <h3>How We Fix These CellarCool Wine Cellar Issues</h3>
          <p>We test liquid-temperature probes, room sensors, digital controls, cellar humidity, airflow, fan speeds, coils, drains, ducting, condenser intake and exhaust conditions, line-set routing, compressor-start components, refrigeration symptoms, and cellar construction. We identify whether the problem is caused by equipment failure, control error, restricted airflow, condensate management, or an installation condition.</p>
        </>
      )
    },
    {
      id: "wine-mate-wine-cellar-repair",
      title: "Wine-Mate Wine Cellar Repair",
      heading: "Wine-Mate Wine Cellar Cooling System Repair",
      /*img: "/wine-cellar-repair/wine-mate-wine-cellar-repair.webp",*/
      alt: "Wine-Mate wine cellar cooling system repair technician servicing a Vinotemp climate-control unit",
      description: (
        <>
          <p>Our <strong>Wine-Mate wine cellar cooling system repair</strong> service covers Vinotemp Wine-Mate self-contained cooling units, split wall-recessed systems, low-profile fan-coil systems, through-ceiling systems, central-ducted systems, rack-mounted systems, water-cooled configurations, digital thermostats, alarms, and supported legacy models. Wine-Mate equipment appears in both wine cabinets and custom wine rooms, so correct identification of the application is essential.</p>
          <h3>Wine-Mate Wine Cellar Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Wine-Mate system not reaching or maintaining the selected cellar temperature</li>
            <li>✅ Split fan coil, remote condenser, central-ducted, wall-recessed, or through-ceiling unit not moving air correctly</li>
            <li>✅ Water-cooled condenser, water connection, drain, condensate, or ventilation concern</li>
            <li>✅ Digital thermostat, alarm, sensor, wiring, relay, or control-board fault</li>
            <li>✅ Icing, fan noise, compressor-start problem, refrigerant-line issue, or sealed-system symptom</li>
            <li>✅ Improper ambient temperature, lighting heat load, direct sun, air leakage, or cellar insulation issue</li>
          </ul>
          <h3>How We Fix These Wine-Mate Wine Cellar Issues</h3>
          <p>We identify the full Wine-Mate model and inspect temperature, humidity, cabinet or room application, airflow, coils, fans, ducting, drains, sensors, thermostats, alarms, line sets, remote condensers, water-cooled components where equipped, wiring, compressor-start parts, and sealed-system symptoms. We verify that cellar construction and ambient conditions support the required storage range.</p>
        </>
      )
    },
    {
      id: "koolr-wine-cellar-repair",
      title: "KoolR Wine Cellar Repair",
      heading: "KoolR Wine Cellar Cooling System Repair",
      /*img: "/wine-cellar-repair/koolr-wine-cellar-repair.webp",*/
      alt: "KoolR wine cellar cooling system repair technician servicing a through-the-wall unit",
      description: (
        <>
          <p>We provide <strong>KoolR wine cellar cooling system repair</strong> for KoolR Magnum through-the-wall units, KoolR Plus systems, WineKoolR replacement cooling units, Vintage Keeper-compatible applications, controllers, fans, condensate systems, coils, and supported cabinet-style units. KoolR systems depend on proper wall installation, adequate airflow into an adjacent conditioned room, clean coils, and an airtight cellar enclosure.</p>
          <h3>KoolR Wine Cellar Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ KoolR Magnum or WineKoolR unit running but not cooling the cellar sufficiently</li>
            <li>✅ Ice buildup on the evaporator coil, long cycles, slow fan, or restricted airflow</li>
            <li>✅ Water leak, excess condensation, drainage issue, or humid air entering the cellar</li>
            <li>✅ Controller, LED display, alarm, fuse, wiring, or power issue</li>
            <li>✅ Dirty coil, ambient room above the recommended range, trapped exhaust heat, or poor ventilation</li>
            <li>✅ Legacy Vintage Keeper or WineKoolR application requiring compatible replacement-part review</li>
          </ul>
          <h3>How We Fix These KoolR Wine Cellar Issues</h3>
          <p>We inspect the controller, alarm state, fuses, set point, cellar sealing, adjacent-room temperature, airflow, condenser and evaporator coils, fan speeds, condensate evaporation and drainage, leveling, wiring, compressor-start components, and sealed-system symptoms. We also confirm that the unit vents into an appropriate conditioned space without recirculating exhaust heat.</p>
        </>
      )
    },
    {
      id: "eurocave-wine-cellar-repair",
      title: "EuroCave Wine Cellar Repair",
      heading: "EuroCave Wine Cellar Conditioner Repair",
      /*img: "/wine-cellar-repair/eurocave-wine-cellar-repair.webp",*/
      alt: "EuroCave wine cellar conditioner repair technician servicing a climate-control system",
      description: (
        <>
          <p>Our <strong>EuroCave wine cellar conditioner repair</strong> service covers INOA cellar conditioners, Tahoma water-cooled split cellar conditioners where supported, temperature controls, humidity-retention functions, fan systems, evaporator and condenser components, drainage, and custom wine-room installations. EuroCave cellar conditioners are designed to transform a properly insulated room into a stable wine-maturing environment rather than simply cool the room like a standard air conditioner.</p>
          <h3>EuroCave Wine Cellar Conditioner Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ INOA or Tahoma conditioner not maintaining a stable room temperature</li>
            <li>✅ Uneven fanned-air distribution, fan noise, restricted airflow, or coil concern</li>
            <li>✅ Humidity-retention issue, condensation, drainage, or air-renewal concern</li>
            <li>✅ Remote control, temperature sensor, display, wiring, or electronic-response issue</li>
            <li>✅ Water-cooled split-system connection or remote-unit concern on supported Tahoma installations</li>
            <li>✅ Incorrect enclosure insulation, door seal, room size, or installation condition affecting performance</li>
          </ul>
          <h3>How We Fix These EuroCave Wine Cellar Conditioner Issues</h3>
          <p>We inspect room temperature, humidity conditions, airflow, filters, fans, coils, drains, controls, sensors, wiring, condenser heat rejection, and water-cooled split components where equipped. We verify the EuroCave serial number before recommending model-specific parts and review the cellar enclosure so the conditioner can operate as intended.</p>
        </>
      )
    },
    {
      id: "us-cellar-systems-wine-cellar-repair",
      title: "US Cellar Systems Wine Cellar Repair",
      heading: "US Cellar Systems Wine Cellar Cooling Repair",
      /*img: "/wine-cellar-repair/us-cellar-systems-wine-cellar-repair.webp",*/
      alt: "US Cellar Systems wine cellar cooling repair technician servicing a split refrigeration system",
      description: (
        <>
          <p>We provide <strong>US Cellar Systems wine cellar cooling repair</strong> for custom split refrigeration systems, ducted fan-coil installations, concealed evaporators, condensing units, thermostats, sensors, drains, refrigerant lines, and residential or commercial wine-room applications. These systems are commonly selected when the homeowner wants heat, compressor noise, and vibration located away from the cellar display area.</p>
          <h3>US Cellar Systems Wine Cellar Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Split wine-room refrigeration system not maintaining the selected cellar temperature</li>
            <li>✅ Remote condensing unit, evaporator, line set, fan coil, or refrigerant-flow concern</li>
            <li>✅ Concealed ducted airflow weak, uneven, noisy, or restricted</li>
            <li>✅ Thermostat, sensor, control, wiring, relay, or compressor-start fault</li>
            <li>✅ Drain blockage, condensate leak, icing, humidity, or defrost-related issue</li>
            <li>✅ Heat-load, sizing, insulation, glass-wall, or equipment-location problem affecting performance</li>
          </ul>
          <h3>How We Fix These US Cellar Systems Wine Cellar Issues</h3>
          <p>We evaluate the wine-room heat load, temperature and humidity, duct layout, airflow, evaporator, condenser, line set, drains, sensors, controls, wiring, refrigerant conditions, compressor-start components, and cellar construction. We separate equipment faults from sizing and installation issues before recommending repair.</p>
        </>
      )
    },
    {
      id: "fujitsu-wine-cellar-repair",
      title: "Fujitsu Wine Cellar Repair",
      heading: "Fujitsu Wine Cellar Mini-Split Repair",
      /*img: "/wine-cellar-repair/fujitsu-wine-cellar-repair.webp",*/
      alt: "Fujitsu wine cellar mini-split repair technician servicing a custom wine-room installation",
      description: (
        <>
          <p>Our <strong>Fujitsu wine cellar mini-split repair</strong> service is intended for supported custom wine-room installations that use Fujitsu AIRSTAGE ductless or concealed HVAC equipment as part of an engineered cellar-climate solution. Fujitsu manufactures room-conditioning systems rather than dedicated wine-cellar refrigeration units, so service should verify whether the selected equipment, controls, drainage, and humidity strategy are appropriate for the room’s required storage conditions.</p>
          <h3>Fujitsu Wine Cellar Mini-Split Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Custom wine room not maintaining the intended temperature or humidity conditions</li>
            <li>✅ Wall-mounted, cassette, or concealed indoor unit with airflow, fan, coil, or drainage concern</li>
            <li>✅ Outdoor unit, refrigerant line, inverter, sensor, control, or communication fault</li>
            <li>✅ Condensation, drain-pan overflow, icing, odor, or excessive moisture removal</li>
            <li>✅ Dehumidification mode, fan-speed setting, thermostat placement, or control-strategy issue</li>
            <li>✅ General-comfort mini-split application that needs review for wine-cellar suitability</li>
          </ul>
          <h3>How We Fix These Fujitsu Wine Cellar Mini-Split Issues</h3>
          <p>We inspect the indoor unit, outdoor unit, filters, airflow, coil condition, drains, refrigerant-line symptoms, temperature sensors, controls, communication wiring, inverter-related faults, and the room’s insulation, door sealing, heat load, and humidity behavior. Where the equipment is not well matched to wine-storage requirements, we explain the limitation clearly rather than treating a design issue as a simple part failure.</p>
        </>
      )
    },
    {
      id: "mitsubishi-electric-wine-cellar-repair",
      title: "Mitsubishi Electric Wine Cellar Repair",
      heading: "Mitsubishi Electric Wine Cellar Mini-Split Repair",
      /*img: "/wine-cellar-repair/mitsubishi-electric-wine-cellar-repair.webp",*/
      alt: "Mitsubishi Electric wine cellar mini-split repair technician servicing a custom wine-room installation",
      description: (
        <>
          <p>We provide <strong>Mitsubishi Electric wine cellar mini-split repair</strong> for supported custom wine-room installations that use Mitsubishi Electric ductless wall units, ceiling cassettes, concealed ducted air handlers, inverter-driven outdoor units, thermostats, and controls. Mitsubishi Electric systems are general HVAC platforms rather than purpose-built wine-cellar refrigeration units, so the repair process should examine both mechanical performance and whether the installation strategy supports stable wine-storage conditions.</p>
          <h3>Mitsubishi Electric Wine Cellar Mini-Split Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Custom wine room too warm, too cold, or unable to hold a stable set point</li>
            <li>✅ Wall unit, ceiling cassette, or concealed air handler with weak or uneven airflow</li>
            <li>✅ Inverter-driven outdoor unit, refrigerant line, fan, sensor, control, or communication issue</li>
            <li>✅ Drain blockage, condensate leak, icing, odor, or excess-dehumidification concern</li>
            <li>✅ Thermostat placement, fan operation, room cycling, or control-setting problem</li>
            <li>✅ General room-conditioning equipment requiring suitability review for a dedicated wine cellar</li>
          </ul>
          <h3>How We Fix These Mitsubishi Electric Wine Cellar Mini-Split Issues</h3>
          <p>We inspect the indoor and outdoor units, filters, airflow, coils, fan operation, drains, refrigerant-line conditions, electrical components, sensors, thermostats, communication wiring, inverter-related symptoms, and the cellar’s heat load, insulation, vapor barrier, door sealing, and humidity behavior. We identify whether the solution is a repair, a control adjustment, an installation correction, or a more appropriate wine-cellar-specific system.</p>
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
