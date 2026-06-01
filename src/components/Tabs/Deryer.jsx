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
      id: "miele-dryer-repair",
      title: "Miele Dryer Repair",
      heading: "Miele Dryer Repair",
      img: "/dryer-repair/miele-dryer-repair.webp",
      alt: "Miele dryer repair technician servicing a premium ventless heat-pump dryer",
      description: (
        <>
          <p>We provide <strong>Miele dryer repair</strong> for T1 ventless heat-pump dryers, compact stacked laundry systems, EcoDry models, PerfectDry models, FragranceDos-equipped dryers, SteamFinish models, Miele@home-connected dryers, and premium fabric-care installations. Miele T1 dryers recirculate warm air through a heat-pump system instead of relying on a conventional exterior dryer vent, so accurate diagnosis requires attention to filters, airflow, moisture sensing, condensate handling, and model-specific electronics.</p>
          <h3>Miele Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer running longer than expected because lint filters, plinth filters, or airflow paths need service</li>
            <li>✅ Laundry remaining damp because of moisture-sensor, airflow, or heat-pump performance problems</li>
            <li>✅ Filter, condensate-container, drainage, or maintenance warnings interrupting the cycle</li>
            <li>✅ Drum not turning correctly because of belt, motor, pulley, or support-component wear</li>
            <li>✅ Door-latch, control-panel, temperature-sensor, or Miele@home-related concerns</li>
            <li>✅ Compact stacked installations where access and ventilation clearances must be evaluated carefully</li>
          </ul>
          <h3>How We Fix These Miele Dryer Issues</h3>
          <p>We inspect the lint-filter system, plinth filter, heat exchanger area, condensate container or drain path, pump, moisture sensors, temperature sensors, drum drive, belt, motor, door latch, controls, and installation clearances. We confirm the exact T1 model before recommending cleaning, adjustment, or component replacement.</p>
        </>
      )
    },
    {
      id: "asko-dryer-repair",
      title: "ASKO Dryer Repair",
      heading: "ASKO Dryer Repair",
      /*img: "/dryer-repair/asko-dryer-repair.webp",*/
      alt: "ASKO dryer repair technician servicing a Scandinavian heat-pump tumble dryer",
      description: (
        <>
          <p>Our <strong>ASKO dryer repair</strong> service covers ASKO tumble dryers, Butterfly Drying models, compact laundry installations, vented dryers, condenser dryers, and current heat-pump models with One Motion lint filters and auto-condenser-filter cleaning on select series. ASKO dryers are designed for gentle fabric care, but restricted airflow, lint buildup, drainage problems, or sensor faults can still reduce drying performance.</p>
          <h3>ASKO Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Heat-pump dryer taking too long to dry because filters or internal airflow paths need service</li>
            <li>✅ Lower filter, lint filter, condenser area, or auto-cleaning system requiring inspection</li>
            <li>✅ Condensate tank, drain hose, pump, or water-management problem interrupting the program</li>
            <li>✅ Drum turning inconsistently because of belt, motor, pulley, or support-component wear</li>
            <li>✅ Moisture-sensor or temperature-sensor problems causing damp laundry or over-drying</li>
            <li>✅ Door, display, control, or stacked-installation issues affecting normal operation</li>
          </ul>
          <h3>How We Fix These ASKO Dryer Issues</h3>
          <p>We inspect the One Motion lint filter, lower filter, condenser and heat-pump airflow path, drainage system, condensate pump, tank, hoses, drum drive, belt, motor, moisture sensors, temperature sensors, door switch, controls, and installation clearances. We match the repair path to the exact ASKO dryer platform.</p>
        </>
      )
    },
    {
      id: "bosch-dryer-repair",
      title: "Bosch Dryer Repair",
      heading: "Bosch Dryer Repair",
      /*img: "/dryer-repair/bosch-dryer-repair.webp",*/
      alt: "Bosch dryer repair technician servicing a compact ventless heat-pump dryer",
      description: (
        <>
          <p>We provide <strong>Bosch dryer repair</strong> for 24-inch compact dryers, 300 Series condensation dryers, 500 Series heat-pump dryers, 800 Series heat-pump dryers, Home Connect models, stacked laundry pairs, and undercounter installations. Select Bosch dryers use ventless heat-pump technology and a Self-Cleaning Condenser, which makes filter care, condensate drainage, and airflow diagnosis especially important.</p>
          <h3>Bosch Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Compact dryer taking too long to dry or leaving clothing damp after the cycle</li>
            <li>✅ Lint filter, condenser, heat-pump airflow path, or maintenance warning requiring attention</li>
            <li>✅ Condensate pump, drain hose, water tank, or drainage issue stopping the dryer</li>
            <li>✅ Moisture-sensor or temperature-sensor fault affecting cycle length</li>
            <li>✅ Drum not rotating because of belt, motor, pulley, or support-component wear</li>
            <li>✅ Home Connect, display, control-board, door-switch, or stacked-installation concerns</li>
          </ul>
          <h3>How We Fix These Bosch Dryer Issues</h3>
          <p>We evaluate the lint-filter system, condenser and heat-pump airflow areas, condensate pump, tank, drain hose, moisture sensors, temperature sensors, drum drive, belt, motor, door switch, wiring, electronic controls, and the surrounding compact installation.</p>
        </>
      )
    },
    {
      id: "fisher-paykel-dryer-repair",
      title: "Fisher & Paykel Dryer Repair",
      heading: "Fisher & Paykel Dryer Repair",
      /*img: "/dryer-repair/fisher-paykel-dryer-repair.webp",*/
      alt: "Fisher and Paykel dryer repair technician servicing a premium condensing dryer",
      description: (
        <>
          <p>Our <strong>Fisher & Paykel dryer repair</strong> service covers heat-pump dryers, vented dryers, condensing dryers, Series 7 compact laundry models, Auto Sensing dryers, stacked installations, and supported legacy Fisher & Paykel laundry systems. Fisher & Paykel dryer diagnosis depends on the platform because a vented dryer, compact condensing dryer, and heat-pump model manage airflow and moisture differently.</p>
          <h3>Fisher & Paykel Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer taking too long to dry because of lint-filter, condenser-filter, airflow, or venting problems</li>
            <li>✅ Condensing dryer displaying water-tank, drain-hose, or condensate-pump concerns</li>
            <li>✅ Heat-pump dryer not reaching expected drying performance</li>
            <li>✅ Auto Sensing or moisture-sensor problems causing damp laundry or premature cycle completion</li>
            <li>✅ Drum-drive noise caused by belt, pulley, roller, bearing, or motor wear</li>
            <li>✅ Door-switch, temperature-sensor, control, or stacked-installation access issues</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Dryer Issues</h3>
          <p>We identify the dryer type first, then inspect lint filters, condenser filters, venting where applicable, condensate tank, drain hose, pump, heat-pump airflow path, moisture sensors, temperature sensors, drum drive, belt, motor, door switch, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "speed-queen-dryer-repair",
      title: "Speed Queen Dryer Repair",
      heading: "Speed Queen Dryer Repair",
      /*img: "/dryer-repair/speed-queen-dryer-repair.webp",*/
      alt: "Speed Queen dryer repair technician servicing a heavy-duty residential dryer",
      description: (
        <>
          <p>We provide <strong>Speed Queen dryer repair</strong> for residential electric dryers, gas dryers, DR Series models, DC5 dryers, DF7 front-control dryers, SF7 stacked washer-dryer systems, Pet Plus models, steam-equipped dryers, and heavy-use laundry rooms. Speed Queen dryers are known for durable construction, but airflow, heating, ignition, belt, roller, sensor, and steam-system problems can still develop with repeated use.</p>
          <h3>Speed Queen Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas or electric dryer running but not producing enough heat</li>
            <li>✅ Long drying times caused by restricted venting, lint buildup, or airflow problems</li>
            <li>✅ Drum not turning because of belt, motor, pulley, or support-component wear</li>
            <li>✅ Squeaking, thumping, scraping, or rumbling during operation</li>
            <li>✅ Moisture-sensor, over-dry-protection, steam, or control issues affecting cycle performance</li>
            <li>✅ DF7 or SF7 installations where front controls, stacking, or access must be handled carefully</li>
          </ul>
          <h3>How We Fix These Speed Queen Dryer Issues</h3>
          <p>We inspect airflow, lint filtration, exterior venting, heating elements on electric models, igniters and gas-heating components on gas models, thermostats, thermal fuses, moisture sensors, drum belt, rollers, pulley, motor, steam components, door switch, and controls.</p>
        </>
      )
    },
    {
      id: "electrolux-dryer-repair",
      title: "Electrolux Dryer Repair",
      heading: "Electrolux Dryer Repair",
      /*img: "/dryer-repair/electrolux-dryer-repair.webp",*/
      alt: "Electrolux dryer repair technician servicing a front-load steam dryer",
      description: (
        <>
          <p>Our <strong>Electrolux dryer repair</strong> service covers electric dryers, gas dryers, LuxCare Dry models, Balanced Dry models, Predictive Dry models, Perfect Steam dryers, Instant Refresh models, Wear It Again models, and stacked laundry pairs. Electrolux dryers use moisture sensing, airflow management, and temperature control to protect fabrics, so long dry times and heat complaints require a complete diagnostic approach.</p>
          <h3>Electrolux Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer taking too long to dry because of airflow restriction, vent buildup, or sensor problems</li>
            <li>✅ Electric dryer not heating because of element, thermostat, thermal fuse, or wiring faults</li>
            <li>✅ Gas dryer not heating because of igniter, flame-sensing, valve-coil, or airflow concerns</li>
            <li>✅ Moisture-sensor or Balanced Dry performance problems causing damp laundry or over-drying</li>
            <li>✅ Perfect Steam, Instant Refresh, water-supply, or steam-component concerns</li>
            <li>✅ Drum-drive noise, door-switch, display, or control-board faults</li>
          </ul>
          <h3>How We Fix These Electrolux Dryer Issues</h3>
          <p>We test the lint path, exterior vent, heating system, gas-ignition components where applicable, thermostats, thermal fuses, moisture sensors, temperature sensing, steam supply, valve, drum belt, rollers, pulley, motor, door switch, wiring, and electronic controls.</p>
        </>
      )
    },
    {
      id: "lg-dryer-repair",
      title: "LG Dryer Repair",
      heading: "LG Dryer Repair",
      /*img: "/dryer-repair/lg-dryer-repair.webp",*/
      alt: "LG dryer repair technician servicing a smart electric dryer",
      description: (
        <>
          <p>We provide <strong>LG dryer repair</strong> for LG electric dryers, gas dryers, ThinQ-connected dryers, Sensor Dry models, TurboSteam dryers, EasyLoad-door models, ventless heat-pump dryers, LG WashTower systems, and LG STUDIO laundry installations. LG dryer service often requires separating an exterior airflow restriction from heating, moisture-sensing, drum-drive, or integrated WashTower concerns.</p>
          <h3>LG Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Flow Sense or airflow warnings caused by lint buildup, duct restriction, or venting problems</li>
            <li>✅ Electric dryer running without heat because of heating-element, thermostat, thermal-fuse, or wiring faults</li>
            <li>✅ Gas dryer failing to heat consistently because of ignition or gas-heating component problems</li>
            <li>✅ Dryer not tumbling or becoming noisy because of belt, roller, pulley, bearing, or motor wear</li>
            <li>✅ Sensor Dry, TurboSteam, ThinQ, door-switch, or control-panel concerns</li>
            <li>✅ WashTower or ventless heat-pump models requiring additional airflow, filter, pump, and integrated-control evaluation</li>
          </ul>
          <h3>How We Fix These LG Dryer Issues</h3>
          <p>We test the venting path, lint system, heating element or gas-ignition system, thermostats, thermal fuses, moisture sensors, temperature sensors, belt, rollers, pulley, motor, steam components, wiring, and controls. For WashTower and heat-pump units, we account for the integrated installation and additional filter or condensate systems.</p>
        </>
      )
    },
    {
      id: "samsung-dryer-repair",
      title: "Samsung Dryer Repair",
      heading: "Samsung Dryer Repair",
      /*img: "/dryer-repair/samsung-dryer-repair.webp",*/
      alt: "Samsung dryer repair technician servicing a Bespoke smart dryer",
      description: (
        <>
          <p>Our <strong>Samsung dryer repair</strong> service covers electric dryers, gas dryers, Bespoke dryers, AI Home models, AI OptiDry models, SmartThings-connected dryers, steam dryers, Samsung Laundry Hub systems, and the dryer section of Bespoke AI Laundry Combo units. Samsung dryer diagnosis varies by platform because a conventional vented dryer, stacked Laundry Hub, and all-in-one washer-dryer combo use different airflow and control systems.</p>
          <h3>Samsung Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer running without heat because of element, thermostat, thermal-fuse, gas-ignition, or airflow problems</li>
            <li>✅ Vent-blockage, lint, or duct restrictions causing long drying times or overheating</li>
            <li>✅ Drum not turning or becoming noisy because of belt, idler, roller, bearing, or motor wear</li>
            <li>✅ Moisture-sensor, AI OptiDry, Steam Sanitize, display, or SmartThings-related concerns</li>
            <li>✅ Door-switch, wiring, or control-board faults interrupting the drying program</li>
            <li>✅ Laundry Hub or Bespoke AI Laundry Combo models requiring integrated airflow, lint-filter, sensor, and control diagnosis</li>
          </ul>
          <h3>How We Fix These Samsung Dryer Issues</h3>
          <p>We identify the Samsung dryer platform first, then inspect lint filtration, exterior venting where applicable, heating or ignition components, thermostats, thermal fuses, moisture sensors, drum belt, idler, rollers, motor, steam components, door switch, wiring, and controls. Combo units receive an additional integrated airflow and filter review.</p>
        </>
      )
    },
    {
      id: "ge-dryer-repair",
      title: "GE Dryer Repair",
      heading: "GE Dryer Repair",
      /*img: "/dryer-repair/ge-dryer-repair.webp",*/
      alt: "GE dryer repair technician servicing a GE Profile smart dryer",
      description: (
        <>
          <p>We provide <strong>GE dryer repair</strong> for GE and GE Profile electric dryers, gas dryers, SmartHQ-connected models, steam dryers, sanitize-cycle models, front-load matching dryers, and the dryer section of GE Profile UltraFast Combo units with ventless inverter heat-pump technology. GE dryer repair should match the exact platform because a standard vented dryer and an UltraFast Combo use different drying systems.</p>
          <h3>GE Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer running but not heating because of electric-heating, gas-ignition, thermostat, thermal-fuse, or airflow faults</li>
            <li>✅ Clothing remaining damp because of vent restriction, moisture-sensor, or temperature-control problems</li>
            <li>✅ Drum not turning or becoming noisy because of belt, roller, glider, pulley, bearing, or motor wear</li>
            <li>✅ Steam, sanitize-cycle, door-switch, SmartHQ, wiring, or control-board concerns</li>
            <li>✅ Exterior venting or lint buildup causing overheating or longer cycle times</li>
            <li>✅ GE Profile UltraFast Combo filter, airflow, condensate, heat-pump, or integrated-control issues</li>
          </ul>
          <h3>How We Fix These GE Dryer Issues</h3>
          <p>We inspect the lint path, exterior venting, heating element or gas-ignition system, thermostats, thermal fuses, moisture sensors, temperature sensing, drum drive, belt, rollers or glides, pulley, motor, steam components, door switch, wiring, and controls. UltraFast Combo units receive an additional heat-pump airflow, filter, and condensate-system review.</p>
        </>
      )
    },
    {
      id: "whirlpool-dryer-repair",
      title: "Whirlpool Dryer Repair",
      heading: "Whirlpool Dryer Repair",
      /*img: "/dryer-repair/whirlpool-dryer-repair.webp",*/
      alt: "Whirlpool dryer repair technician servicing a residential electric dryer",
      description: (
        <>
          <p>Our <strong>Whirlpool dryer repair</strong> service covers electric dryers, gas dryers, AutoSensing models, Advanced Moisture Sensing models, Wrinkle Shield dryers, Steam Refresh models, EcoBoost-equipped dryers, smart appliances, and stacked laundry installations. Whirlpool dryers can develop similar symptoms from very different causes, so airflow, heating, drum movement, and sensor performance should be tested together.</p>
          <h3>Whirlpool Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer not heating or heating inconsistently because of element, thermostat, thermal fuse, gas ignition, or airflow issues</li>
            <li>✅ Long dry times caused by lint buildup, restricted ducts, or exterior vent problems</li>
            <li>✅ Drum not tumbling because of belt, idler pulley, roller, motor, or switch failure</li>
            <li>✅ Squeaking, thumping, scraping, or rumbling while the dryer operates</li>
            <li>✅ AutoSensing, Advanced Moisture Sensing, EcoBoost, or Wrinkle Shield performance concerns</li>
            <li>✅ Steam Refresh, water-supply, door-switch, wiring, or control-board faults</li>
          </ul>
          <h3>How We Fix These Whirlpool Dryer Issues</h3>
          <p>We inspect lint filtration, ducting, exterior venting, heating elements, igniters and gas-heating components where applicable, thermostats, thermal fuses, moisture sensors, belt, rollers, pulley, motor, steam supply, door switch, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "maytag-dryer-repair",
      title: "Maytag Dryer Repair",
      heading: "Maytag Dryer Repair",
      /*img: "/dryer-repair/maytag-dryer-repair.webp",*/
      alt: "Maytag dryer repair technician servicing a heavy-duty residential dryer",
      description: (
        <>
          <p>We provide <strong>Maytag dryer repair</strong> for electric dryers, gas dryers, top-load-matching dryers, front-load dryers, Extra Power models, Quick Dry models, Advanced Moisture Sensing dryers, steam-enhanced dryers, smart dryers, and commercial-grade residential models. Maytag dryers are built for frequent use, but repeated cycles can wear heating, airflow, sensing, and drum-support components.</p>
          <h3>Maytag Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer not producing enough heat or taking multiple cycles to dry clothing</li>
            <li>✅ Vent restriction, lint buildup, or airflow problems causing overheating or slow performance</li>
            <li>✅ Drum not rotating because of belt, roller, idler pulley, motor, or door-switch faults</li>
            <li>✅ Squeaking, thumping, scraping, or rumbling from worn support components</li>
            <li>✅ Advanced Moisture Sensing, Extra Power, Quick Dry, or steam-cycle performance concerns</li>
            <li>✅ Electric-heating, gas-ignition, thermostat, thermal-fuse, wiring, or control problems</li>
          </ul>
          <h3>How We Fix These Maytag Dryer Issues</h3>
          <p>We test the lint path, venting, heating element or gas-ignition system, thermostats, thermal fuses, moisture sensors, drum belt, rollers, idler pulley, motor, steam components, door switch, wiring, and controls to isolate the actual cause of the dryer complaint.</p>
        </>
      )
    },
    {
      id: "frigidaire-dryer-repair",
      title: "Frigidaire Dryer Repair",
      heading: "Frigidaire Dryer Repair",
      /*img: "/dryer-repair/frigidaire-dryer-repair.webp",*/
      alt: "Frigidaire dryer repair technician servicing a SensorDry residential dryer",
      description: (
        <>
          <p>Our <strong>Frigidaire dryer repair</strong> service covers current gas dryers, electric dryers, SensorDry models, Quick Dry models, Wrinkle Guard models, reversible-door dryers, and supported legacy Frigidaire and Affinity laundry appliances. Frigidaire dryer service begins with exact model identification because current and legacy platforms may use different heating, control, and drum-support components.</p>
          <h3>Frigidaire Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer running without heat or taking too long to dry clothing</li>
            <li>✅ Lint, duct, or exterior-vent restriction affecting airflow and drying performance</li>
            <li>✅ SensorDry or temperature-control issues causing damp loads or over-drying</li>
            <li>✅ Drum not turning or becoming noisy because of belt, roller, bearing, glider, or motor wear</li>
            <li>✅ Door-switch, timer, control, thermostat, thermal-fuse, or wiring faults</li>
            <li>✅ Legacy Affinity dryer problems requiring careful model-number and parts-availability review</li>
          </ul>
          <h3>How We Fix These Frigidaire Dryer Issues</h3>
          <p>We identify the current or legacy dryer platform, then inspect airflow, lint filtration, ducting, exterior venting, electric-heating or gas-ignition components, thermostats, thermal fuses, sensors, drum-support parts, motor, door switch, timer, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "kenmore-dryer-repair",
      title: "Kenmore Dryer Repair",
      heading: "Kenmore Dryer Repair",
      /*img: "/dryer-repair/kenmore-dryer-repair.webp",*/
      alt: "Kenmore dryer repair technician servicing a residential gas or electric dryer",
      description: (
        <>
          <p>We provide <strong>Kenmore dryer repair</strong> for electric dryers, gas dryers, Kenmore Elite dryers, steam dryers, sensor-dry models, high-capacity dryers, compact laundry appliances, and supported legacy units. Kenmore dryer repair requires exact model-number verification because different Kenmore dryers were manufactured on different appliance platforms and may use different parts.</p>
          <h3>Kenmore Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer not heating, overheating, or taking more than one cycle to dry clothing</li>
            <li>✅ Restricted venting, lint buildup, or airflow problems reducing performance</li>
            <li>✅ Drum not turning because of belt, idler, roller, motor, or door-switch faults</li>
            <li>✅ Squeaking, scraping, thumping, or rumbling that varies by Kenmore platform</li>
            <li>✅ Moisture-sensor, steam-system, timer, wiring, or electronic-control concerns</li>
            <li>✅ Incorrect parts lookup when the complete Kenmore model number is not confirmed first</li>
          </ul>
          <h3>How We Fix These Kenmore Dryer Issues</h3>
          <p>We start with the complete model number to identify the underlying Kenmore platform. We then inspect lint filtration, ducting, exterior venting, heating or ignition components, thermostats, thermal fuses, moisture sensors, drum belt, rollers, idler, motor, door switch, steam components, timer, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "amana-dryer-repair",
      title: "Amana Dryer Repair",
      heading: "Amana Dryer Repair",
      /*img: "/dryer-repair/amana-dryer-repair.webp",*/
      alt: "Amana dryer repair technician servicing a residential electric dryer",
      description: (
        <>
          <p>Our <strong>Amana dryer repair</strong> service covers Amana gas dryers, electric dryers, Automatic Dryness Control models, Wrinkle Prevent dryers, top-load-matching dryers, and supported front-load-matching dryers. Amana dryers use relatively straightforward systems, but a heater, gas-ignition, airflow, thermal-fuse, belt, roller, or sensor problem can still produce overlapping symptoms.</p>
          <h3>Amana Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dryer running but not heating because of element, gas ignition, thermostat, thermal fuse, or wiring failure</li>
            <li>✅ Clothing remaining damp because lint, ducting, or exterior venting restricts airflow</li>
            <li>✅ Drum not tumbling because of belt, pulley, roller, motor, or door-switch problems</li>
            <li>✅ Squeaking, thumping, scraping, or rumbling during the cycle</li>
            <li>✅ Automatic Dryness Control not ending the cycle at the expected time</li>
            <li>✅ Wrinkle Prevent, timer, switch, or control-related concerns</li>
          </ul>
          <h3>How We Fix These Amana Dryer Issues</h3>
          <p>We inspect the lint path, ducting, exterior vent, electric-heating or gas-ignition system, thermostats, thermal fuses, temperature sensing, moisture or dryness sensing where applicable, belt, pulley, rollers, motor, door switch, timer, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "blomberg-dryer-repair",
      title: "Blomberg Dryer Repair",
      heading: "Blomberg Dryer Repair",
      /*img: "/dryer-repair/blomberg-dryer-repair.webp",*/
      alt: "Blomberg dryer repair technician servicing a compact ventless heat-pump dryer",
      description: (
        <>
          <p>We provide <strong>Blomberg dryer repair</strong> for compact laundry installations, 24-inch ventless heat-pump dryers, supported electric air-vented dryers, stacked laundry pairs, Anti-Creasing models, Quick Dry models, and direct-draining installations. Blomberg dryers are frequently installed in condos, apartments, guesthouses, and custom laundry closets where airflow, drainage, and limited access must be evaluated together.</p>
          <h3>Blomberg Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Compact heat-pump dryer taking too long to dry because filters or airflow paths need service</li>
            <li>✅ Direct-drain, condensate-pump, water-tank, or drain-hose problems interrupting the cycle</li>
            <li>✅ Laundry remaining damp because of moisture-sensor, temperature-sensor, or heat-pump concerns</li>
            <li>✅ Vented compact dryer developing airflow or external-duct restrictions</li>
            <li>✅ Drum-drive noise from belt, pulley, roller, bearing, or motor wear</li>
            <li>✅ Door-switch, control, or stacked-installation clearance problems</li>
          </ul>
          <h3>How We Fix These Blomberg Dryer Issues</h3>
          <p>We identify whether the appliance is heat-pump or air-vented, then inspect filters, airflow paths, venting where applicable, condensate pump, drain hose, tank, moisture sensors, temperature sensors, drum drive, belt, motor, door switch, wiring, controls, and installation clearances.</p>
        </>
      )
    },
    {
      id: "beko-dryer-repair",
      title: "Beko Dryer Repair",
      heading: "Beko Dryer Repair",
      /*img: "/dryer-repair/beko-dryer-repair.webp",*/
      alt: "Beko dryer repair technician servicing a compact heat-pump ventless dryer",
      description: (
        <>
          <p>Our <strong>Beko dryer repair</strong> service covers 24-inch heat-pump ventless dryers, electric air-vented compact dryers, ProSmart Inverter Motor models, IronFinish dryers, SaniDry and SaniRefresh models, AntiCreasing models, stacked laundry pairs, and direct-draining installations. Beko compact dryers require technology-specific diagnosis because heat-pump and air-vented platforms handle airflow and moisture differently.</p>
          <h3>Beko Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Heat-pump dryer taking too long to dry because of filter, airflow, or heat-pump performance concerns</li>
            <li>✅ Direct-drain, tank, condensate-pump, or hose problems interrupting ventless operation</li>
            <li>✅ ProSmart Inverter Motor, belt, pulley, drum-support, or control-related faults</li>
            <li>✅ Air-vented compact dryer developing lint buildup or duct restriction</li>
            <li>✅ Moisture-sensor or temperature-sensor problems causing damp laundry or extended cycles</li>
            <li>✅ IronFinish, steam, SaniDry, SaniRefresh, door-switch, or stacked-installation concerns</li>
          </ul>
          <h3>How We Fix These Beko Dryer Issues</h3>
          <p>We identify the dryer platform first, then inspect lint filters, airflow paths, venting where applicable, condensate handling, drain components, ProSmart motor system, belt, drum supports, moisture sensors, temperature sensors, steam-related components, door switch, wiring, controls, and installation clearances.</p>
        </>
      )
    },
    {
      id: "haier-dryer-repair",
      title: "Haier Dryer Repair",
      heading: "Haier Dryer Repair",
      /*img: "/dryer-repair/haier-dryer-repair.webp",*/
      alt: "Haier dryer repair technician servicing a compact ventless condenser dryer",
      description: (
        <>
          <p>We provide <strong>Haier dryer repair</strong> for compact 24-inch dryers, ventless condenser dryers, SmartHQ-connected dryers, apartment-size laundry appliances, stacked compact pairs, and supported legacy Haier dryer models. Haier dryer service varies by platform because a ventless condenser unit and a conventional compact electric dryer use different airflow, drainage, and heating systems.</p>
          <h3>Haier Dryer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Ventless condenser dryer taking too long to dry because filters, condenser areas, or airflow paths need service</li>
            <li>✅ Condensate-tank, drain-hose, or pump concerns interrupting the drying cycle</li>
            <li>✅ Laundry remaining damp because of moisture-sensor, temperature-sensor, or heater problems</li>
            <li>✅ Drum not rotating or becoming noisy because of belt, pulley, support-component, or motor wear</li>
            <li>✅ SmartHQ, display, door-switch, wiring, or control-board concerns</li>
            <li>✅ Compact stacked-installation access issues affecting service planning</li>
          </ul>
          <h3>How We Fix These Haier Dryer Issues</h3>
          <p>We identify the Haier dryer platform, then inspect lint filtration, condenser and airflow areas, condensate tank, drain hose, pump, heating components, moisture sensors, temperature sensors, drum drive, belt, motor, door switch, wiring, controls, and the surrounding compact installation.</p>
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
