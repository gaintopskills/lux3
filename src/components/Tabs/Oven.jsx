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
      id: "aga-oven-repair",
      title: "AGA Oven Repair",
      heading: "AGA Oven Repair",
      img: "/oven-repair/aga-oven-repair.webp",
      alt: "AGA oven repair technician servicing a luxury AGA cooker",
      description: (
        <>
          <p>We provide <strong>AGA oven repair</strong> for traditional cast-iron AGA cookers, AGA Total Control, AGA Dual Control, AGA eR7, AGA R7, AGA Mercury, and AGA Elise range ovens. These ovens rely on radiant heat, insulated cavities, multiple oven zones, and model-specific controls that require a more careful diagnostic approach than a standard oven.</p>
          <h3>Common AGA Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Baking oven, roasting oven, or simmering oven not holding temperature</li>
            <li>✅ Slow heat-up, weak radiant heat, or uneven cooking results</li>
            <li>✅ Electric module, thermostat, thermal fuse, or control failure</li>
            <li>✅ Burner ignition or gas regulation issues on gas AGA models</li>
            <li>✅ Door seal wear, heat loss, or oven cavity temperature drift</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>AGA oven repair technicians</strong> test heating elements, thermostats, controls, ignition systems, safety components, and wiring</li>
            <li>✅ We diagnose radiant heat performance, oven zone temperature balance, and door sealing issues</li>
            <li>✅ We service legacy and modern AGA ovens with extra care for cast-iron construction, enamel surfaces, and specialty parts</li>
          </ul>
        </>
      )
    },
    {
      id: "bertazzoni-oven-repair",
      title: "Bertazzoni Oven Repair",
      heading: "Bertazzoni Oven Repair",
      /*img: "/oven-repair/bertazzoni-oven-repair.webp",*/
      alt: "Bertazzoni oven repair technician servicing an Italian luxury range oven",
      description: (
        <>
          <p>Our <strong>Bertazzoni oven repair</strong> service covers Professional Series, Master Series, and Heritage Series ovens, including Bertazzoni wall ovens, gas ranges, dual fuel ranges, induction ranges, and speed or convection oven combinations. Bertazzoni ovens often combine Italian design with dual convection, electronic controls, temperature probes, and specialty bake modes.</p>
          <h3>Common Bertazzoni Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Oven not reaching set temperature or overheating</li>
            <li>✅ Dual convection fan not running, noisy, or failing intermittently</li>
            <li>✅ Broiler, bake element, igniter, or gas oven burner failure</li>
            <li>✅ Error codes, control display problems, or selector knob issues</li>
            <li>✅ Door gasket wear, hinge sag, or heat escaping from the cavity</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We inspect <strong>Bertazzoni wall oven and range oven components</strong>, including sensors, fans, boards, igniters, valves, and heating elements</li>
            <li>✅ We test temperature accuracy and airflow to correct uneven baking or roasting</li>
            <li>✅ We identify model-specific parts for Professional, Master, and Heritage Series units</li>
          </ul>
        </>
      )
    },
    {
      id: "fulgor-milano-oven-repair",
      title: "Fulgor Milano Oven Repair",
      heading: "Fulgor Milano Oven Repair",
      /*img: "/oven-repair/fulgor-milano-oven-repair.webp",*/
      alt: "Fulgor Milano oven repair technician working on a premium Italian oven",
      description: (
        <>
          <p>We service <strong>Fulgor Milano oven repair</strong> needs for built-in ovens, combi ovens, Sofia professional ranges, Sofia induction ranges, Distinto ovens, and Fulgor Milano dual fuel or all-gas range ovens. These appliances often include advanced convection systems, touch controls, meat probes, cooling fans, and precision European-style cooking modes.</p>
          <h3>Common Fulgor Milano Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Oven not heating, heating unevenly, or shutting off during cooking</li>
            <li>✅ Convection fan, cooling fan, or airflow problems</li>
            <li>✅ Control panel, display, relay board, or selector malfunction</li>
            <li>✅ Steam, combi, or specialty cooking mode not working correctly</li>
            <li>✅ Range oven ignition, bake burner, broil element, or temperature sensor failure</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>Fulgor Milano built-in ovens and range ovens</strong> with electrical, heating, airflow, and sensor testing</li>
            <li>✅ We calibrate temperature performance and verify safe operation after repair</li>
            <li>✅ We help source compatible parts for current and less common Fulgor Milano models</li>
          </ul>
        </>
      )
    },
    {
      id: "gaggenau-oven-repair",
      title: "Gaggenau Oven Repair",
      heading: "Gaggenau Oven Repair",
      /*img: "/oven-repair/gaggenau-oven-repair.webp",*/
      alt: "Gaggenau oven repair technician servicing a luxury built-in oven",
      description: (
        <>
          <p>Our <strong>Gaggenau oven repair</strong> service is designed for 400 Series and 200 Series wall ovens, combi-steam ovens, combi-microwave ovens, warming drawers, and Gaggenau built-in cooking columns. Gaggenau ovens are highly engineered appliances with precise controls, steam systems, temperature probes, complex ventilation, and premium built-in installation requirements.</p>
          <h3>Common Gaggenau Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Combi-steam oven not producing steam or not draining properly</li>
            <li>✅ Oven not heating, slow preheat, or temperature inaccuracy</li>
            <li>✅ Moisture, descaling, water tank, or pump-related problems</li>
            <li>✅ Display, touch control, selector ring, or module failure</li>
            <li>✅ Door lock, cooling fan, probe, or sensor issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Gaggenau oven technicians</strong> test steam generation, heating circuits, sensors, fans, pumps, and electronic modules</li>
            <li>✅ We diagnose built-in ventilation and cabinetry-related heat issues</li>
            <li>✅ We service high-end Gaggenau cooking columns with careful protection of panels, trim, and surrounding cabinetry</li>
          </ul>
        </>
      )
    },
    {
      id: "ilve-oven-repair",
      title: "ILVE Oven Repair",
      heading: "ILVE Oven Repair",
      /*img: "/oven-repair/ilve-oven-repair.webp",*/
      alt: "ILVE oven repair technician servicing an Italian dual fuel range oven",
      description: (
        <>
          <p>We provide <strong>ILVE oven repair</strong> for Majestic, Nostalgie, Panoramagic, Professional Plus, and ILVE dual fuel or all-gas range ovens. ILVE ovens may include multiple oven cavities, French tops, griddles, brass burners, rotisserie systems, warming drawers, and European-style multifunction oven controls.</p>
          <h3>Common ILVE Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Main oven or secondary oven not heating correctly</li>
            <li>✅ Uneven baking, weak broil, or convection fan failure</li>
            <li>✅ Gas oven ignition, safety valve, or burner flame problems</li>
            <li>✅ Control knob, thermostat, timer, or selector switch issues</li>
            <li>✅ Door hinge, gasket, interior light, or rotisserie malfunction</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We service <strong>ILVE range ovens</strong> with testing for thermostats, igniters, gas valves, elements, fans, and control switches</li>
            <li>✅ We inspect dual-cavity oven performance and airflow balance</li>
            <li>✅ We protect custom finishes, brass details, and decorative trim during service</li>
          </ul>
        </>
      )
    },
    {
      id: "lacanche-oven-repair",
      title: "Lacanche Oven Repair",
      heading: "Lacanche Oven Repair",
      /*img: "/oven-repair/lacanche-oven-repair.webp",*/
      alt: "Lacanche oven repair technician servicing a French luxury range oven",
      description: (
        <>
          <p>Our <strong>Lacanche oven repair</strong> service supports French range models such as Cluny, Sully, Savigny, Volnay, Chagny, Cormatin, Citeaux, and other Lacanche classic and modern configurations. Lacanche ranges may include gas ovens, electric ovens, warming cupboards, ambient cabinets, simmer ovens, and custom cooktop combinations.</p>
          <h3>Common Lacanche Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Gas oven not lighting, flame dropping out, or weak bake performance</li>
            <li>✅ Electric oven not reaching temperature or tripping power</li>
            <li>✅ Thermostat, thermocouple, safety valve, or selector failure</li>
            <li>✅ Warming oven or secondary oven not heating properly</li>
            <li>✅ Door seal, hinge, enamel, or knob-related concerns</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Lacanche oven repair technicians</strong> test gas safety systems, electrical circuits, thermostats, and oven controls</li>
            <li>✅ We diagnose multi-oven French range layouts and verify each cavity separately</li>
            <li>✅ We take a careful approach with custom finishes, brass trim, and hand-built range construction</li>
          </ul>
        </>
      )
    },
    {
      id: "la-cornue-oven-repair",
      title: "La Cornue Oven Repair",
      heading: "La Cornue Oven Repair",
      /*img: "/oven-repair/la-cornue-oven-repair.webp",*/
      alt: "La Cornue oven repair technician servicing a luxury French range oven",
      description: (
        <>
          <p>We specialize in <strong>La Cornue oven repair</strong> for Château, CornuFé, CornuChef, Grand Palais, Le Château 75, Château 90, Château 120, Château 150, Château 165, and other La Cornue range oven configurations. La Cornue ovens are known for vaulted oven cavities, natural convection, gas and electric oven options, and highly customized finishes.</p>
          <h3>Common La Cornue Oven Problems We Repair:</h3>
          <ul>
            <li>✅ La Cornue oven not heating, overheating, or baking unevenly</li>
            <li>✅ Gas oven ignition failure, delayed ignition, or burner shutoff</li>
            <li>✅ Electric oven element, thermostat, selector, or relay issue</li>
            <li>✅ Door gasket wear, hinge tension problems, or heat escaping</li>
            <li>✅ CornuFé control issues, indicator lights, fans, or temperature calibration problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>La Cornue range repair technicians</strong> test gas valves, thermocouples, igniters, elements, thermostats, controls, and wiring</li>
            <li>✅ We evaluate vaulted oven heat movement and cooking performance</li>
            <li>✅ We service luxury French ranges with extra care for enamel, brass, chrome, polished metal, and custom color finishes</li>
          </ul>
        </>
      )
    },
    {
      id: "miele-oven-repair",
      title: "Miele Oven Repair",
      heading: "Miele Oven Repair",
      /*img: "/oven-repair/miele-oven-repair.webp",*/
      alt: "Miele oven repair technician servicing a built-in speed or steam oven",
      description: (
        <>
          <p>We provide <strong>Miele oven repair</strong> for Generation 7000 ovens, MasterCool kitchen installations, M Touch ovens, convection ovens, speed ovens, combi-steam ovens, steam ovens, microwave combination ovens, and warming drawers. Miele cooking appliances often include precision sensors, automatic programs, moisture controls, DirectWater options, and advanced user interfaces.</p>
          <h3>Common Miele Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Miele oven not heating, preheating slowly, or showing fault codes</li>
            <li>✅ Combi-steam oven water intake, draining, steam, or descaling issues</li>
            <li>✅ Speed oven microwave/convection combination not working correctly</li>
            <li>✅ Cooling fan, convection fan, door lock, probe, or sensor failure</li>
            <li>✅ Touch display, M Touch interface, relay, or control board malfunction</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>Miele wall ovens, speed ovens, and steam ovens</strong> with model-specific testing</li>
            <li>✅ We inspect water systems, pumps, valves, sensors, heating elements, and ventilation pathways</li>
            <li>✅ We verify cooking modes, temperature stability, steam performance, and safe operation before completion</li>
          </ul>
        </>
      )
    },
    {
      id: "officine-gullo-oven-repair",
      title: "Officine Gullo Oven Repair",
      heading: "Officine Gullo Oven Repair",
      /*img: "/oven-repair/officine-gullo-oven-repair.webp",*/
      alt: "Officine Gullo oven repair technician servicing a bespoke luxury range",
      description: (
        <>
          <p>Our <strong>Officine Gullo oven repair</strong> service is designed for bespoke Italian ranges, cooking suites, custom ovens, professional range ovens, and luxury kitchen installations. Officine Gullo appliances may combine heavy-duty cooking equipment, handcrafted metal finishes, custom dimensions, gas burners, electric ovens, warming modules, and professional-style controls.</p>
          <h3>Common Officine Gullo Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Oven cavity not heating or not maintaining accurate temperature</li>
            <li>✅ Gas ignition, flame stability, safety valve, or burner issues</li>
            <li>✅ Electric element, thermostat, selector, relay, or wiring failure</li>
            <li>✅ Convection fan, cooling fan, or airflow problems</li>
            <li>✅ Custom trim, door, gasket, hinge, or finish-sensitive service needs</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We inspect <strong>Officine Gullo range ovens</strong> with attention to custom appliance layouts and professional components</li>
            <li>✅ We test fuel, electrical, temperature, and ventilation systems</li>
            <li>✅ We protect brass, copper, stainless steel, nickel, and custom finish details during service</li>
          </ul>
        </>
      )
    },
    {
      id: "american-range-oven-repair",
      title: "American Range Oven Repair",
      heading: "American Range Oven Repair",
      /*img: "/oven-repair/american-range-oven-repair.webp",*/
      alt: "American Range oven repair technician servicing a pro-style range oven",
      description: (
        <>
          <p>We provide <strong>American Range oven repair</strong> for residential pro-style ranges, Performer Series, Cuisine Series, Legend Series, Medallion Series, wall ovens, and commercial-style cooking equipment. American Range ovens are built around high-output burners, heavy-duty oven cavities, convection systems, and professional temperature demands.</p>
          <h3>Common American Range Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Gas oven not lighting, delayed ignition, or weak flame</li>
            <li>✅ Oven temperature too low, too high, or inconsistent</li>
            <li>✅ Convection fan, thermostat, safety valve, or igniter failure</li>
            <li>✅ Broiler, bake burner, door gasket, or hinge problems</li>
            <li>✅ Commercial-style range oven performance decline from heavy use</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>American Range oven repair technicians</strong> test ignition systems, gas pressure, thermostats, fans, and safety components</li>
            <li>✅ We inspect oven cavities, burner assemblies, and airflow for even baking and roasting</li>
            <li>✅ We service both luxury residential kitchens and light commercial-style cooking setups</li>
          </ul>
        </>
      )
    },
    {
      id: "bluestar-oven-repair",
      title: "BlueStar Oven Repair",
      heading: "BlueStar Oven Repair",
      /*img: "/oven-repair/bluestar-oven-repair.webp",*/
      alt: "BlueStar oven repair technician servicing a pro-style range oven",
      description: (
        <>
          <p>Our <strong>BlueStar oven repair</strong> service covers Platinum Series, RNB Series, RCS Series, Precious Metals, built-in wall ovens, gas ranges, and dual fuel ranges. BlueStar ovens are known for high-output open burners, professional-style oven cavities, powerful broilers, and customizable color finishes.</p>
          <h3>Common BlueStar Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Oven not heating, overheating, or failing to maintain temperature</li>
            <li>✅ Infrared broiler not igniting or producing weak heat</li>
            <li>✅ Bake burner, igniter, safety valve, or thermostat problems</li>
            <li>✅ Convection fan noise, fan failure, or uneven baking</li>
            <li>✅ Door gasket, hinge, kick plate, or enamel/finish-sensitive concerns</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>BlueStar range ovens and wall ovens</strong> with gas, electrical, and temperature testing</li>
            <li>✅ We inspect broiler systems, oven burners, thermostats, fans, and ignition components</li>
            <li>✅ We handle custom color panels and pro-style trim with careful service practices</li>
          </ul>
        </>
      )
    },
    {
      id: "fivestar-oven-repair",
      title: "FiveStar Oven Repair",
      heading: "FiveStar Oven Repair",
      /*img: "/oven-repair/fivestar-oven-repair.webp",*/
      alt: "FiveStar oven repair technician servicing a professional range oven",
      description: (
        <>
          <p>We service <strong>FiveStar oven repair</strong> for FiveStar gas ranges, dual fuel ranges, side-by-side dual-fuel oven models, sealed burner ranges, griddle/grill configurations, and legacy pro-style FiveStar cooking appliances. FiveStar ranges may include gas oven heat, electric oven heat, or dual oven layouts that need separate diagnostics for each cavity.</p>
          <h3>Common FiveStar Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Gas oven not lighting, flame cutting out, or taking too long to heat</li>
            <li>✅ Electric oven section not heating or tripping power</li>
            <li>✅ Thermostat, selector, igniter, thermocouple, or valve failure</li>
            <li>✅ Side-by-side oven cavities cooking at different temperatures</li>
            <li>✅ Broiler, door gasket, hinge, or control knob issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>FiveStar range repair technicians</strong> test gas and electric oven systems independently</li>
            <li>✅ We inspect thermostats, oven burners, heating elements, safety valves, wiring, and controls</li>
            <li>✅ We service older FiveStar models with attention to parts compatibility and safe operation</li>
          </ul>
        </>
      )
    },
    {
      id: "thor-oven-repair",
      title: "Thor Oven Repair",
      heading: "Thor Kitchen Oven Repair",
      /*img: "/oven-repair/thor-oven-repair.webp",*/
      alt: "Thor Kitchen oven repair technician servicing a professional range oven",
      description: (
        <>
          <p>We provide <strong>Thor Kitchen oven repair</strong> for professional gas ranges, dual fuel ranges, electric ranges, induction ranges, 30-inch wall ovens, double ovens, and commercial-style cooking suites. Thor ovens often include convection cooking, infrared broilers, electronic ignition, air fry features, and stainless pro-style construction.</p>
          <h3>Common Thor Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Thor oven not heating, not igniting, or preheating slowly</li>
            <li>✅ Convection fan, air fry mode, or broiler not working</li>
            <li>✅ Gas oven flame issues, safety valve failure, or igniter problems</li>
            <li>✅ Electric element, relay, display, or control board malfunction</li>
            <li>✅ Door gasket, hinge, temperature sensor, or thermostat failure</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>Thor range ovens and wall ovens</strong> across gas, electric, dual fuel, and induction models</li>
            <li>✅ We test fans, elements, igniters, valves, sensors, switches, and control boards</li>
            <li>✅ We verify oven temperature, airflow, and safety operation after repair</li>
          </ul>
        </>
      )
    },
    {
      id: "forno-oven-repair",
      title: "Forno Oven Repair",
      heading: "Forno Oven Repair",
      /*img: "/oven-repair/forno-oven-repair.webp",*/
      alt: "Forno oven repair technician servicing a modern wall oven",
      description: (
        <>
          <p>Our <strong>Forno oven repair</strong> service covers Forno ranges, Forno dual fuel ranges, gas ranges, induction ranges, Vomero wall ovens, single wall ovens, double wall ovens, convection ovens, and built-in cooking appliances. Forno ovens often include large-capacity oven cavities, convection fans, self-clean features, mechanical or electronic controls, and stainless or colored finishes.</p>
          <h3>Common Forno Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Oven not heating, heating unevenly, or shutting off</li>
            <li>✅ Convection fan noise, failed fan motor, or weak airflow</li>
            <li>✅ Bake element, broil element, igniter, or thermostat failure</li>
            <li>✅ Control knob, display, timer, or selector switch malfunction</li>
            <li>✅ Self-clean, door lock, gasket, or cooling fan problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We inspect <strong>Forno wall ovens and range ovens</strong> for heating, airflow, control, and safety issues</li>
            <li>✅ We test elements, fans, sensors, boards, switches, igniters, and gas valves</li>
            <li>✅ We calibrate performance and confirm proper oven function before handoff</li>
          </ul>
        </>
      )
    },
    {
      id: "garland-oven-repair",
      title: "Garland Oven Repair",
      heading: "Garland Oven Repair",
      /*img: "/oven-repair/garland-oven-repair.webp",*/
      alt: "Garland commercial oven repair technician servicing a convection oven",
      description: (
        <>
          <p>We provide <strong>Garland oven repair</strong> for commercial ranges, Master Series heavy-duty ranges, convection ovens, gas ovens, electric ovens, and restaurant-style cooking equipment installed in private estates, chef kitchens, event spaces, and commercial kitchens. Garland ovens are built for heavy use and require accurate diagnosis of gas, electrical, airflow, and control systems.</p>
          <h3>Common Garland Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Convection oven not heating, baking unevenly, or running too hot</li>
            <li>✅ Gas range oven ignition, pilot, safety valve, or thermostat issue</li>
            <li>✅ Fan motor, belt, door switch, or timer failure</li>
            <li>✅ Electric oven element, contactor, relay, or control malfunction</li>
            <li>✅ Heavy-use oven cavity, door gasket, or hinge wear</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Garland oven repair technicians</strong> test gas flow, ignition, fan systems, thermostats, controls, and electrical loads</li>
            <li>✅ We inspect commercial-grade ovens for safe operation and consistent heat recovery</li>
            <li>✅ We service Garland equipment used in professional and high-demand residential cooking environments</li>
          </ul>
        </>
      )
    },
    {
      id: "zline-oven-repair",
      title: "ZLINE Oven Repair",
      heading: "ZLINE Oven Repair",
      /*img: "/oven-repair/zline-oven-repair.webp",*/
      alt: "ZLINE oven repair technician servicing a professional wall oven",
      description: (
        <>
          <p>Our <strong>ZLINE oven repair</strong> service covers ZLINE gas ranges, dual fuel ranges, induction ranges, single wall ovens, double wall ovens, Autograph Edition ovens, and professional-style cooking appliances. ZLINE ovens commonly include true convection, self-cleaning, air fry options, stainless construction, and decorative handle or accent finishes.</p>
          <h3>Common ZLINE Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Oven not reaching temperature or burning food</li>
            <li>✅ True convection fan, air fry mode, or broiler not working</li>
            <li>✅ Bake element, igniter, gas valve, relay, or sensor failure</li>
            <li>✅ Display, control board, selector knob, or timer issue</li>
            <li>✅ Door lock, self-clean, gasket, or hinge malfunction</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>ZLINE wall ovens and range ovens</strong> using heating, airflow, and control-system testing</li>
            <li>✅ We service gas, electric, dual fuel, and induction cooking platforms</li>
            <li>✅ We verify temperature accuracy, fan operation, safety controls, and full cooking performance</li>
          </ul>
        </>
      )
    },
    {
      id: "fisher-paykel-oven-repair",
      title: "Fisher & Paykel Oven Repair",
      heading: "Fisher & Paykel Oven Repair",
      /*img: "/oven-repair/fisher-paykel-oven-repair.webp",*/
      alt: "Fisher and Paykel oven repair technician servicing a combi-steam wall oven",
      description: (
        <>
          <p>We provide <strong>Fisher & Paykel oven repair</strong> for Series 7, Series 9, and Series 11 ovens, including Contemporary, Minimal, and Professional wall ovens, combi-steam ovens, convection ovens, speed ovens, microwave combination ovens, and range ovens. Fisher & Paykel ovens often use AeroTech airflow, guided cooking, steam functions, and precision sensors.</p>
          <h3>Common Fisher & Paykel Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Oven not heating, heating unevenly, or showing fault codes</li>
            <li>✅ Combi-steam oven not steaming, draining, or filling correctly</li>
            <li>✅ AeroTech fan, cooling fan, sensor, or temperature probe failure</li>
            <li>✅ Speed oven microwave/convection functions not working</li>
            <li>✅ Touchscreen, control module, door lock, or self-clean issue</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>Fisher & Paykel wall ovens and steam ovens</strong> with detailed electrical, airflow, and water-system testing</li>
            <li>✅ We inspect pumps, valves, sensors, fans, heating elements, boards, and door locks</li>
            <li>✅ We test cooking modes and temperature accuracy after repair</li>
          </ul>
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
          <p>Our <strong>Wolf oven repair</strong> service covers Wolf M Series, E Series, L Series legacy ovens, built-in convection ovens, convection steam ovens, speed ovens, dual fuel range ovens, gas range ovens, and professional-style wall ovens. Wolf ovens are known for Gourmet Mode, Dual VertiCross convection, temperature probes, and precision cooking performance.</p>
          <h3>Common Wolf Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Wolf oven not heating, overheating, or cooking unevenly</li>
            <li>✅ Convection fan, cooling fan, relay, sensor, or probe failure</li>
            <li>✅ Steam oven water, drain, pump, or descaling problems</li>
            <li>✅ Speed oven microwave/convection issue or display fault</li>
            <li>✅ Door lock, gasket, hinge, control board, or error code problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Wolf oven repair technicians</strong> test heating circuits, fans, sensors, modules, steam systems, and range oven ignition components</li>
            <li>✅ We diagnose airflow and temperature consistency for high-end baking and roasting performance</li>
            <li>✅ We service built-in Wolf appliances with care for cabinetry, panels, and luxury kitchen finishes</li>
          </ul>
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
          <p>We provide <strong>Thermador oven repair</strong> for Professional Series, Masterpiece Series, built-in wall ovens, steam ovens, speed ovens, double ovens, combination ovens, Pro Harmony ranges, and Pro Grand ranges. Thermador ovens can include steam convection, speed cooking, true convection, temperature probes, WiFi controls, and professional-grade stainless construction.</p>
          <h3>Common Thermador Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Oven not heating, temperature swing, or uneven baking</li>
            <li>✅ Steam oven not filling, draining, steaming, or descaling correctly</li>
            <li>✅ Speed oven microwave/convection failure or turntable issue</li>
            <li>✅ Control panel, relay board, sensor, probe, or fan malfunction</li>
            <li>✅ Door lock, self-clean, gasket, hinge, or cooling fan problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Thermador oven repair technicians</strong> test heating, airflow, control, water, and safety systems</li>
            <li>✅ We diagnose Pro Harmony and Pro Grand range oven issues separately from wall oven systems</li>
            <li>✅ We verify each cooking mode and temperature response before the appliance is returned to use</li>
          </ul>
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
          <p>Our <strong>Viking oven repair</strong> service covers Viking 3 Series, 5 Series, 7 Series, RVL, Professional ranges, wall ovens, French-door ovens, double ovens, gas ranges, dual fuel ranges, and legacy Viking cooking appliances. Viking ovens often include high-output burners, convection systems, infrared broilers, and heavy-duty doors and hinges.</p>
          <h3>Common Viking Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Viking oven not heating, preheating slowly, or baking unevenly</li>
            <li>✅ Gas oven ignition, bake burner, safety valve, or broiler issue</li>
            <li>✅ Convection fan, thermostat, sensor, relay, or control board failure</li>
            <li>✅ French-door oven alignment, hinge, or gasket problems</li>
            <li>✅ Self-clean, door lock, cooling fan, or temperature probe malfunction</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>Viking wall ovens and range ovens</strong> across gas, electric, and dual fuel platforms</li>
            <li>✅ We test ignition, gas flow, elements, controls, fans, sensors, and oven safety systems</li>
            <li>✅ We restore reliable cooking performance while protecting stainless, colored, and custom kitchen finishes</li>
          </ul>
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
          <p>We provide <strong>Monogram oven repair</strong> for Statement and Minimalist wall ovens, Advantium 5-in-1 ovens, convection ovens, double ovens, range ovens, and microwave combination ovens. Monogram ovens may combine speedcook, convection, microwave, warming, proofing, precision cooking, smart controls, and premium built-in installation.</p>
          <h3>Common Monogram Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Advantium speedcook, microwave, or convection mode failure</li>
            <li>✅ Wall oven not heating, overheating, or baking unevenly</li>
            <li>✅ Touchscreen, display, control board, relay, or sensor malfunction</li>
            <li>✅ Cooling fan, convection fan, door lock, or self-clean issue</li>
            <li>✅ Range oven ignition, broiler, bake element, or temperature probe problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We service <strong>Monogram wall ovens and Advantium ovens</strong> with detailed mode-by-mode diagnostics</li>
            <li>✅ We test microwave, convection, sensor, fan, relay, and high-voltage related systems where applicable</li>
            <li>✅ We verify safe operation, cooking performance, and built-in ventilation after repair</li>
          </ul>
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
          <p>Our <strong>Signature Kitchen Suite oven repair</strong> service covers SKS wall ovens, steam-combi ovens, transitional combi-wall ovens, pro ranges, 36-inch and 48-inch dual fuel ranges, speed ovens, and ranges with built-in sous vide and induction features. SKS ovens can include True Steam-Combi, ProHeat convection, Speed-Clean, steam sous vide, and connected controls.</p>
          <h3>Common Signature Kitchen Suite Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Steam-combi oven not filling, steaming, draining, or heating correctly</li>
            <li>✅ Pro range oven not maintaining temperature or baking unevenly</li>
            <li>✅ Speed oven, convection, microwave, or broil mode not working</li>
            <li>✅ Touchscreen, control board, relay, pump, valve, or sensor failure</li>
            <li>✅ Self-clean, Speed-Clean, door lock, gasket, or fan problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>SKS wall ovens and pro range ovens</strong> with steam, convection, speed, and control testing</li>
            <li>✅ We inspect water systems, fans, heating circuits, sensors, probes, and electronic modules</li>
            <li>✅ We confirm each cooking mode and safety function after repair</li>
          </ul>
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
          <p>We provide <strong>Hestan oven repair</strong> for Hestan all-gas ranges, dual fuel ranges, KRG and KRD range models, professional-style ovens, and luxury residential cooking suites. Hestan ovens may include PureVection technology, high-performance convection, heavy-duty doors, temperature probes, and powerful professional burners.</p>
          <h3>Common Hestan Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Hestan oven not heating, losing heat, or cooking unevenly</li>
            <li>✅ PureVection fan, heating system, or airflow issue</li>
            <li>✅ Gas ignition, safety valve, bake burner, or broiler failure</li>
            <li>✅ Electric oven element, relay, sensor, or thermostat problem</li>
            <li>✅ Door gasket, hinge, probe, knob, or control malfunction</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Hestan oven repair technicians</strong> test gas, electrical, convection, temperature, and control systems</li>
            <li>✅ We inspect range oven cavities, burner assemblies, fans, and ventilation clearances</li>
            <li>✅ We restore precision cooking performance for high-end Hestan kitchen installations</li>
          </ul>
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
          <p>Our <strong>Dacor oven repair</strong> service covers Modernist, Contemporary, Heritage, Discovery, Renaissance, built-in wall ovens, range ovens, steam ovens, speed ovens, and Dacor dual fuel or gas cooking appliances. Dacor ovens often use Four-Part Pure Convection, touch controls, temperature probes, self-clean systems, and premium built-in installation.</p>
          <h3>Common Dacor Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Dacor oven not heating, overheating, or baking unevenly</li>
            <li>✅ Four-Part Pure Convection fan, relay, element, or sensor issue</li>
            <li>✅ Control panel, display, touchpad, relay board, or error code problems</li>
            <li>✅ Door lock, self-clean, cooling fan, gasket, or hinge failure</li>
            <li>✅ Gas range oven ignition, broiler, bake burner, or valve malfunction</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>Dacor built-in ovens and range ovens</strong> with heating, control, fan, and sensor testing</li>
            <li>✅ We service both current and legacy Dacor cooking appliances</li>
            <li>✅ We verify even airflow, temperature stability, and safe operation after service</li>
          </ul>
        </>
      )
    },
    {
      id: "big-chill-oven-repair",
      title: "Big Chill Oven Repair",
      heading: "Big Chill Oven Repair",
      /*img: "/oven-repair/big-chill-oven-repair.webp",*/
      alt: "Big Chill oven repair technician servicing a retro luxury oven",
      description: (
        <>
          <p>We provide <strong>Big Chill oven repair</strong> for Retro, Classic, and Pro-style ranges, gas stoves, induction stoves, electric wall ovens, and colorful luxury kitchen installations. Big Chill ovens combine retro design with modern heating systems, convection cooking, electronic controls, and custom color finishes that need careful handling during service.</p>
          <h3>Common Big Chill Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Wall oven or range oven not heating correctly</li>
            <li>✅ Gas oven ignition, bake burner, or broiler issue</li>
            <li>✅ Electric element, convection fan, relay, or sensor failure</li>
            <li>✅ Temperature drift, uneven baking, or slow preheat</li>
            <li>✅ Door gasket, hinge, control knob, or finish-sensitive service concerns</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Big Chill oven repair technicians</strong> test elements, igniters, valves, fans, sensors, boards, and thermostats</li>
            <li>✅ We protect retro panels, chrome details, and custom color finishes</li>
            <li>✅ We service both decorative retro ranges and built-in wall oven configurations</li>
          </ul>
        </>
      )
    },
    {
      id: "elmira-stove-works-oven-repair",
      title: "Elmira Stove Works Oven Repair",
      heading: "Elmira Stove Works Oven Repair",
      /*img: "/oven-repair/elmira-stove-works-oven-repair.webp",*/
      alt: "Elmira Stove Works oven repair technician servicing a vintage style range oven",
      description: (
        <>
          <p>Our <strong>Elmira Stove Works oven repair</strong> service supports Northstar, Heritage, 1880-style, vintage-inspired ranges, convection wall ovens, dual fuel ranges, and retro appliance suites. Elmira ovens are often installed in custom kitchens where appearance, trim, color, and period-style design matter as much as cooking performance.</p>
          <h3>Common Elmira Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Convection wall oven not heating or not cooking evenly</li>
            <li>✅ Range oven ignition, thermostat, burner, or element issue</li>
            <li>✅ Self-clean, door lock, timer, or control failure</li>
            <li>✅ Door gasket, hinge, chrome trim, or panel alignment concerns</li>
            <li>✅ Older or specialty model parts identification needs</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>Elmira range ovens and wall ovens</strong> with careful heating, airflow, and control testing</li>
            <li>✅ We inspect gas and electric oven systems depending on the model</li>
            <li>✅ We handle vintage-style appliance finishes carefully during repair and maintenance</li>
          </ul>
        </>
      )
    },
    {
      id: "smeg-oven-repair",
      title: "Smeg Oven Repair",
      heading: "Smeg Oven Repair",
      /*img: "/oven-repair/smeg-oven-repair.webp",*/
      alt: "Smeg oven repair technician servicing an Italian built-in oven",
      description: (
        <>
          <p>We provide <strong>Smeg oven repair</strong> for Smeg built-in ovens, wall ovens, steam ovens, speed ovens, convection ovens, microwave ovens, all-gas ranges, dual fuel ranges, induction ranges, and retro-inspired cooking appliances. Smeg ovens often include European controls, fan-assisted cooking, specialty modes, and design-forward panels.</p>
          <h3>Common Smeg Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Smeg oven not heating, overheating, or cooking unevenly</li>
            <li>✅ Fan, grill, broil, steam, or speed cooking function not working</li>
            <li>✅ Element, thermostat, relay, selector, or control board failure</li>
            <li>✅ Gas range oven ignition, burner, or flame safety issue</li>
            <li>✅ Door gasket, hinge, interior light, or timer malfunction</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Smeg oven repair technicians</strong> test heating elements, controls, sensors, fans, valves, igniters, and wiring</li>
            <li>✅ We inspect both built-in European ovens and range-style oven cavities</li>
            <li>✅ We protect retro, stainless, and designer panels during service</li>
          </ul>
        </>
      )
    },
    {
      id: "heartland-oven-repair",
      title: "Heartland Oven Repair",
      heading: "Heartland Oven Repair",
      /*img: "/oven-repair/heartland-oven-repair.webp",*/
      alt: "Heartland oven repair technician servicing a retro classic range oven",
      description: (
        <>
          <p>Our <strong>Heartland oven repair</strong> service is designed for legacy Heartland ranges, classic gas ranges, electric ranges, dual fuel ranges, retro-style ovens, and discontinued Heartland cooking appliances. Because Heartland appliances may involve older components or harder-to-source parts, proper model identification and careful diagnosis are especially important.</p>
          <h3>Common Heartland Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Oven not heating, overheating, or taking too long to preheat</li>
            <li>✅ Gas ignition, bake burner, broiler, or safety valve issue</li>
            <li>✅ Electric element, thermostat, selector, or wiring failure</li>
            <li>✅ Temperature control problems or uneven baking</li>
            <li>✅ Door gasket, hinge, timer, or legacy control concerns</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We inspect <strong>Heartland oven and range components</strong> for heating, ignition, airflow, and control issues</li>
            <li>✅ We help identify compatible parts for older or discontinued models</li>
            <li>✅ We protect retro finishes and classic design details during service</li>
          </ul>
        </>
      )
    },
    {
      id: "asko-oven-repair",
      title: "ASKO Oven Repair",
      heading: "ASKO Oven Repair",
      /*img: "/oven-repair/asko-oven-repair.webp",*/
      alt: "ASKO oven repair technician servicing a European built-in oven",
      description: (
        <>
          <p>We provide <strong>ASKO oven repair</strong> for ASKO built-in ovens, pyrolytic ovens, multifunction ovens, combined steam ovens, compact microwave ovens, and European kitchen installations where ASKO cooking products are installed. ASKO ovens may include touchscreen controls, pyrolytic self-cleaning, steam systems, telescopic guides, and compact built-in layouts.</p>
          <h3>Common ASKO Oven Problems We Repair:</h3>
          <ul>
            <li>✅ ASKO oven not heating, not self-cleaning, or showing error codes</li>
            <li>✅ Steam oven not producing steam, filling, or draining correctly</li>
            <li>✅ Microwave combination oven not heating or not switching modes</li>
            <li>✅ Fan, sensor, element, door lock, or control display failure</li>
            <li>✅ Built-in ventilation, cabinet heat, or door alignment issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>ASKO built-in ovens</strong> with heating, airflow, water-system, and electronic control testing</li>
            <li>✅ We inspect self-clean locks, steam components, elements, sensors, and fans</li>
            <li>✅ We service European-format oven installations with care for flush cabinetry and trim</li>
          </ul>
        </>
      )
    },
    {
      id: "bosch-oven-repair",
      title: "Bosch Oven Repair",
      heading: "Bosch Oven Repair",
      /*img: "/oven-repair/bosch-oven-repair.webp",*/
      alt: "Bosch oven repair technician servicing a wall oven",
      description: (
        <>
          <p>Our <strong>Bosch oven repair</strong> service covers Bosch 500 Series, 800 Series, Benchmark Series, wall ovens, speed ovens, steam ovens, combination ovens, single ovens, double ovens, and slide-in range ovens. Bosch ovens are commonly installed in high-end remodels and often include European-style controls, convection systems, side-opening doors, and built-in ventilation requirements.</p>
          <h3>Common Bosch Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Bosch oven not heating, overheating, or baking unevenly</li>
            <li>✅ Speed oven microwave/convection function not working</li>
            <li>✅ Steam oven water, pump, valve, or descaling issue</li>
            <li>✅ Control panel, relay board, sensor, door lock, or error code problem</li>
            <li>✅ Cooling fan, convection fan, self-clean, or hinge malfunction</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>Bosch wall ovens and speed ovens</strong> using mode-specific testing</li>
            <li>✅ We inspect elements, fans, sensors, locks, water systems, relays, and control boards</li>
            <li>✅ We confirm temperature accuracy, ventilation, and safe operation after repair</li>
          </ul>
        </>
      )
    },
    {
      id: "jennair-oven-repair",
      title: "JennAir Oven Repair",
      heading: "JennAir Oven Repair",
      /*img: "/oven-repair/jennair-oven-repair.webp",*/
      alt: "JennAir oven repair technician servicing a luxury wall oven",
      description: (
        <>
          <p>We provide <strong>JennAir oven repair</strong> for RISE and NOIR wall ovens, single ovens, double ovens, microwave combination ovens, steam and convection ovens, professional-style ranges, and built-in cooking appliances. JennAir ovens can include V2 Dual-Fan Convection, assisted cooking, Culinary Center features, remote access, temperature probes, and premium design panels.</p>
          <h3>Common JennAir Oven Problems We Repair:</h3>
          <ul>
            <li>✅ JennAir oven not heating, cooking unevenly, or displaying errors</li>
            <li>✅ Dual-fan convection, steam plus convection, or microwave combination issue</li>
            <li>✅ Touch display, control board, relay, sensor, or temperature probe failure</li>
            <li>✅ Self-clean, door lock, cooling fan, or hinge malfunction</li>
            <li>✅ Range oven ignition, broiler, bake element, or gasket problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>JennAir oven repair technicians</strong> test heating, airflow, steam, microwave, and control systems</li>
            <li>✅ We inspect V2 convection fans, sensors, elements, door locks, probes, and electronic modules</li>
            <li>✅ We restore luxury cooking performance while protecting RISE and NOIR finishes</li>
          </ul>
        </>
      )
    },
    {
      id: "kalamazoo-outdoor-oven-repair",
      title: "Kalamazoo Outdoor Oven Repair",
      heading: "Kalamazoo Outdoor Oven Repair",
      /*img: "/oven-repair/kalamazoo-outdoor-oven-repair.webp",*/
      alt: "Kalamazoo outdoor oven repair technician servicing a luxury pizza oven",
      description: (
        <>
          <p>Our <strong>Kalamazoo outdoor oven repair</strong> service covers Kalamazoo Artisan Fire Pizza Ovens, outdoor cooking stations, hybrid fire systems, built-in outdoor kitchens, and premium gas-fired outdoor oven installations. Kalamazoo outdoor ovens operate at very high heat and require careful attention to burners, refractory surfaces, gas supply, ventilation, and weather exposure.</p>
          <h3>Common Kalamazoo Outdoor Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Outdoor pizza oven not lighting or not reaching high temperature</li>
            <li>✅ Burner, igniter, regulator, flame sensor, or gas valve issue</li>
            <li>✅ Uneven stone heat, weak flame, or poor heat recovery</li>
            <li>✅ Door, thermometer, control, or weather-related corrosion concern</li>
            <li>✅ Built-in outdoor kitchen ventilation or clearance problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>Kalamazoo pizza ovens and outdoor cooking appliances</strong> for fuel, ignition, heat, and airflow issues</li>
            <li>✅ We inspect gas lines, burners, regulators, igniters, refractory surfaces, and weather exposure points</li>
            <li>✅ We verify safe operation in the outdoor kitchen environment</li>
          </ul>
        </>
      )
    },
    {
      id: "lynx-outdoor-oven-repair",
      title: "Lynx Outdoor Oven Repair",
      heading: "Lynx Outdoor Oven Repair",
      /*img: "/oven-repair/lynx-outdoor-oven-repair.webp",*/
      alt: "Lynx Napoli outdoor oven repair technician servicing a luxury pizza oven",
      description: (
        <>
          <p>We provide <strong>Lynx outdoor oven repair</strong> for Lynx Napoli Outdoor Oven models, built-in outdoor ovens, countertop pizza ovens, freestanding cart installations, and luxury outdoor kitchen cooking systems. The Lynx Napoli oven uses high-heat outdoor cooking, refractory surfaces, variable infrared heat, and gas-fired performance that needs specialized troubleshooting.</p>
          <h3>Common Lynx Outdoor Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Napoli outdoor oven not lighting or failing to reach baking temperature</li>
            <li>✅ Infrared burner, igniter, gas valve, regulator, or flame issue</li>
            <li>✅ Uneven pizza stone heat or poor recovery between cooks</li>
            <li>✅ Interior light, thermometer, door, or control malfunction</li>
            <li>✅ Built-in ventilation, clearance, or weather-related corrosion concerns</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Lynx outdoor oven repair technicians</strong> test ignition, fuel delivery, infrared heat, airflow, and safety systems</li>
            <li>✅ We inspect refractory dome surfaces, burners, controls, and outdoor installation conditions</li>
            <li>✅ We restore safe high-heat performance for premium outdoor kitchens</li>
          </ul>
        </>
      )
    },
    {
      id: "alfresco-outdoor-oven-repair",
      title: "Alfresco Outdoor Oven Repair",
      heading: "Alfresco Outdoor Oven Repair",
      /*img: "/oven-repair/alfresco-outdoor-oven-repair.webp",*/
      alt: "Alfresco outdoor pizza oven repair technician servicing a built-in oven",
      description: (
        <>
          <p>Our <strong>Alfresco outdoor oven repair</strong> service covers Alfresco Pizza Oven Plus, built-in outdoor pizza ovens, countertop pizza ovens, and premium outdoor kitchen oven installations. Alfresco outdoor ovens are designed for pizza, baking, broiling, roasting, searing, and high-temperature cooking, so burner performance and insulation are critical.</p>
          <h3>Common Alfresco Outdoor Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Pizza Oven Plus not lighting or not reaching high temperature</li>
            <li>✅ Rear burner, infrared hearth system, igniter, or gas valve failure</li>
            <li>✅ Uneven heat from the hearth or ceramic ceiling surface</li>
            <li>✅ Thermometer, controls, door, gasket, or insulation issue</li>
            <li>✅ Outdoor exposure, corrosion, ventilation, or clearance problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We inspect <strong>Alfresco pizza ovens</strong> for burner output, ignition, gas pressure, airflow, and high-heat performance</li>
            <li>✅ We test safety systems, controls, regulators, ceramic components, and built-in installation conditions</li>
            <li>✅ We restore dependable outdoor oven performance for luxury outdoor kitchens</li>
          </ul>
        </>
      )
    },
    {
      id: "fire-magic-outdoor-oven-repair",
      title: "Fire Magic Outdoor Oven Repair",
      heading: "Fire Magic Outdoor Oven Repair",
      /*img: "/oven-repair/fire-magic-outdoor-oven-repair.webp",*/
      alt: "Fire Magic outdoor pizza oven repair technician servicing a built-in oven",
      description: (
        <>
          <p>We provide <strong>Fire Magic outdoor oven repair</strong> for Fire Magic built-in pizza ovens, Aurora pizza ovens, Echelon outdoor pizza ovens, black glass outdoor oven models, and luxury outdoor kitchen cooking appliances. Fire Magic ovens may include thermostatic controls, electronic ignition, ceramic glass doors, pizza stones, baking racks, and smart temperature features.</p>
          <h3>Common Fire Magic Outdoor Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Outdoor pizza oven not lighting, not heating, or shutting off</li>
            <li>✅ Thermostatic control, igniter, gas valve, or flame rectification issue</li>
            <li>✅ Pizza stone, baking rack, door glass, or interior heat problem</li>
            <li>✅ Control panel, smart feature, wiring, or power supply malfunction</li>
            <li>✅ Outdoor corrosion, installation clearance, or ventilation concern</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Our <strong>Fire Magic outdoor oven repair technicians</strong> test gas, ignition, electrical, and temperature systems</li>
            <li>✅ We inspect ceramic glass, stone surfaces, thermostats, burners, and control wiring</li>
            <li>✅ We verify safe performance in built-in outdoor kitchen enclosures</li>
          </ul>
        </>
      )
    },
    {
      id: "dcs-oven-repair",
      title: "DCS Oven Repair",
      heading: "DCS Oven Repair",
      /*img: "/oven-repair/dcs-oven-repair.webp",*/
      alt: "DCS oven repair technician servicing a premium oven or outdoor cooking appliance",
      description: (
        <>
          <p>Our <strong>DCS oven repair</strong> service supports legacy DCS wall ovens, DCS cooking appliances, DCS outdoor grills with roasting and baking performance issues, and premium DCS outdoor kitchen systems. DCS has produced high-end cooking products for both indoor and outdoor kitchens, so the correct repair approach depends on the model and installation.</p>
          <h3>Common DCS Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Legacy DCS wall oven not heating, not self-cleaning, or cooking unevenly</li>
            <li>✅ Bake, roast, fan bake, grill, or pizza bake function not working</li>
            <li>✅ Door lock, temperature sensor, element, fan, or control failure</li>
            <li>✅ Outdoor grill oven-style cooking, roasting, or rotisserie heat problems</li>
            <li>✅ Gas supply, burner, ignition, regulator, or weather-related outdoor issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We diagnose <strong>DCS ovens and outdoor cooking systems</strong> by model, fuel type, and cooking function</li>
            <li>✅ We inspect heating elements, gas components, fans, controls, sensors, and built-in ventilation</li>
            <li>✅ We restore safe operation for both legacy indoor ovens and premium outdoor DCS installations</li>
          </ul>
        </>
      )
    },
    {
      id: "twin-eagles-outdoor-oven-repair",
      title: "Twin Eagles Outdoor Oven Repair",
      heading: "Twin Eagles Outdoor Oven Repair",
      /*img: "/oven-repair/twin-eagles-outdoor-oven-repair.webp",*/
      alt: "Twin Eagles outdoor oven repair technician servicing a premium outdoor cooking appliance",
      description: (
        <>
          <p>We provide <strong>Twin Eagles outdoor oven repair</strong> for premium outdoor cooking appliances used for baking, roasting, pizza-style cooking, salamander-style cooking, and high-heat outdoor kitchen performance. This includes Twin Eagles outdoor grills, specialty cooking accessories, and related luxury outdoor cooking systems where oven-like heat control is part of the cooking setup.</p>
          <h3>Common Twin Eagles Outdoor Oven Problems We Repair:</h3>
          <ul>
            <li>✅ Outdoor cooking appliance not reaching proper baking or roasting temperature</li>
            <li>✅ Ignition, burner, regulator, gas valve, or flame stability issues</li>
            <li>✅ Infrared burner, rotisserie, searing, or pizza-stone heat problems</li>
            <li>✅ Control knob, thermometer, wiring, or lighting malfunction</li>
            <li>✅ Outdoor corrosion, ventilation, enclosure clearance, or weather-related issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We inspect <strong>Twin Eagles outdoor cooking systems</strong> for gas delivery, burner performance, ignition, airflow, and heat retention</li>
            <li>✅ We service high-heat outdoor kitchen components used for oven-style cooking</li>
            <li>✅ We confirm safe operation and proper performance in luxury outdoor kitchen installations</li>
          </ul>
        </>
      )
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setActiveTab(mobile ? null : "aga-oven-repair");
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
