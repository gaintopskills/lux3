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
          <p>
            We provide <strong>AGA oven repair</strong> for traditional cast-iron AGA cookers, AGA Total Control, AGA Dual Control, AGA eR7, AGA R7, AGA Mercury, and AGA Elise range ovens. AGA ovens are not serviced like ordinary wall ovens because many models depend on stored radiant heat, insulated cast-iron cavities, multiple heat zones, and model-specific temperature controls.
          </p>
  
          <h3>AGA Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The roasting, baking, simmering, or warming oven no longer feels as strong as it used to.</li>
            <li>The cooker takes longer to recover heat after the doors have been opened.</li>
            <li>One oven cavity performs differently from the others, even though the cooker appears to be running.</li>
            <li>Newer Total Control, Dual Control, eR7, or R7 models may show control or heat-zone problems instead of simple element failure.</li>
            <li>Older AGA cookers may need careful parts identification because fuel conversions, age, and model generation can change the repair path.</li>
          </ul>
  
          <h3>How We Repair AGA Ovens</h3>
          <p>
            We check heat retention, oven-zone temperature behavior, door rope and gasket condition, thermostats, heating elements, control modules, thermal limits, ignition components where applicable, and model-specific wiring. For traditional AGA cookers, we focus on restoring radiant heat performance and proper door sealing instead of treating the unit like a standard oven.
          </p>
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
          <p>
            Our <strong>Bertazzoni oven repair</strong> service covers Professional Series, Master Series, Heritage Series, built-in wall ovens, gas range ovens, dual fuel range ovens, induction range ovens, speed ovens, and convection oven combinations. Bertazzoni ovens often combine Italian styling with dual convection, mechanical selectors, electronic controls, and series-specific parts.
          </p>
  
          <h3>Bertazzoni Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven preheats but does not hold the selected temperature accurately.</li>
            <li>Dual convection fans become noisy, slow, or inconsistent during baking.</li>
            <li>Gas range ovens may click, delay ignition, or heat weakly even when the cooktop still works.</li>
            <li>Selector knobs, temperature knobs, or function controls may feel loose, inconsistent, or unresponsive.</li>
            <li>Built-in Bertazzoni ovens may develop cooling fan or cabinet heat issues when installed tightly into cabinetry.</li>
          </ul>
  
          <h3>How We Repair Bertazzoni Ovens</h3>
          <p>
            We identify the exact Bertazzoni series before replacing parts, then test the igniter, gas valve, oven sensor, thermostat, selector switch, convection fans, relay board, cooling fan, and door gasket. Because Professional, Master, and Heritage Series parts may differ, we verify compatibility before ordering components.
          </p>
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
          <p>
            We service <strong>Fulgor Milano oven repair</strong> for Sofia professional ranges, Sofia induction ranges, Fulgor Milano wall ovens, combi ovens, Distinto ovens, and dual fuel or all-gas range ovens. These ovens often require attention to European-style controls, cooling airflow, meat probes, touch displays, and model-specific Italian parts.
          </p>
  
          <h3>Fulgor Milano Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven shuts off during cooking or does not maintain temperature under longer cooking cycles.</li>
            <li>The cooling fan runs unusually long, becomes noisy, or does not protect the surrounding cabinet from heat.</li>
            <li>Touch controls, relay boards, or selector controls may respond intermittently.</li>
            <li>Meat probe faults can interrupt cooking programs or make the oven behave as if a probe is connected.</li>
            <li>Sofia range ovens may need exact model verification before parts are ordered because components can vary by generation.</li>
          </ul>
  
          <h3>How We Repair Fulgor Milano Ovens</h3>
          <p>
            We test temperature sensors, relays, cooling fans, control boards, probe circuits, selector controls, bake and broil elements, gas ignition components, and cabinet ventilation. We also confirm the model and serial number carefully before sourcing Fulgor Milano parts.
          </p>
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
          <p>
            Our <strong>Gaggenau oven repair</strong> service is designed for 400 Series and 200 Series wall ovens, combi-steam ovens, combi-microwave ovens, warming drawers, and Gaggenau built-in cooking columns. These appliances are highly engineered and often need precise diagnosis of steam systems, drain filters, descaling condition, probes, ventilation, and electronic modules.
          </p>
  
          <h3>Gaggenau Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The combi-steam oven leaves water behind, drains slowly, rattles, or asks for cleaning/descaling more often.</li>
            <li>Steam performance becomes weak because the water path, pump, drain filter, or limescale buildup needs attention.</li>
            <li>The rotary selector, display, or touch controls stop responding correctly.</li>
            <li>A cooking column may run hot inside the cabinet if cooling airflow is restricted.</li>
            <li>Probe, door lock, sensor, or module faults can interrupt advanced cooking modes.</li>
          </ul>
  
          <h3>How We Repair Gaggenau Ovens</h3>
          <p>
            We inspect the steam generator, water tank system, pump, drain filter, descaling condition, probe circuit, door lock, sensors, cooling fan, and control electronics. On built-in Gaggenau cooking columns, we also check cabinet ventilation because heat and moisture management are critical.
          </p>
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
          <p>
            We provide <strong>ILVE oven repair</strong> for Majestic, Nostalgie, Panoramagic, Professional Plus, and ILVE dual fuel or all-gas range ovens. ILVE ovens often include heavy doors, decorative finishes, brass burners, rotisserie systems, multiple cavities, and European multifunction oven controls.
          </p>
  
          <h3>ILVE Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven door does not sit evenly, does not close flush, or begins losing heat around the gasket.</li>
            <li>Large ILVE doors can become sensitive to hinge seating, leveling, gasket condition, or frame alignment.</li>
            <li>The main oven and secondary oven may heat differently because each cavity has separate airflow and controls.</li>
            <li>Rotisserie, interior light, selector switch, timer, or thermostat issues may appear before a full heating failure.</li>
            <li>Decorative trim, brass details, and custom colors require extra care during disassembly.</li>
          </ul>
  
          <h3>How We Repair ILVE Ovens</h3>
          <p>
            We inspect hinge engagement, door alignment, gasket contact, frame fit, thermostat response, selector switches, rotisserie components, igniters, gas valves, and heating elements. When a door issue is involved, we correct the mechanical fit first because poor sealing can make the oven seem like it has a temperature-control problem.
          </p>
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
          <p>
            Our <strong>Lacanche oven repair</strong> service supports French range models such as Cluny, Sully, Savigny, Volnay, Chagny, Cormatin, Citeaux, and custom Lacanche configurations. Lacanche ranges may include gas ovens, electric ovens, warming cupboards, simmer ovens, ambient cabinets, and custom cooktop combinations.
          </p>
  
          <h3>Lacanche Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>A gas oven flame drops out, lights slowly, or does not hold steady during baking.</li>
            <li>An electric oven cavity heats differently from the gas cavity or secondary oven.</li>
            <li>The warming cupboard or simmer oven no longer reaches the expected gentle heat.</li>
            <li>Heavy doors, hinges, and seals may affect heat retention over time.</li>
            <li>Custom configurations can make parts identification more complex than on standard ranges.</li>
          </ul>
  
          <h3>How We Repair Lacanche Ovens</h3>
          <p>
            We diagnose each Lacanche oven cavity separately, confirm whether the cavity is gas or electric, then inspect thermocouples, thermostats, safety valves, selectors, elements, door seals, and hinges. We also protect enamel, brass, chrome, and custom finishes during service.
          </p>
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
          <p>
            We specialize in <strong>La Cornue oven repair</strong> for Château, CornuFé, CornuChef, Grand Palais, Le Château 75, Château 90, Château 120, Château 150, Château 165, and other La Cornue range oven configurations. La Cornue ovens are known for vaulted oven cavities, natural convection, gas and electric oven options, and custom finishes.
          </p>
  
          <h3>La Cornue Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven bakes unevenly because the vaulted cavity moves heat differently than a standard fan-driven oven.</li>
            <li>Gas oven ignition may be delayed, weak, or shut off due to thermocouple or safety-valve issues.</li>
            <li>Electric cavities may develop selector, thermostat, element, relay, or wiring faults.</li>
            <li>Door gasket wear or hinge tension can cause heat loss and make the oven feel underpowered.</li>
            <li>CornuFé models may have indicator light, fan, calibration, or control issues that differ from Château models.</li>
          </ul>
  
          <h3>How We Repair La Cornue Ovens</h3>
          <p>
            We test each cavity by fuel type, inspect vaulted heat movement, verify gas safety components, check electric elements and controls, and evaluate door sealing. We work carefully around enamel, brass, chrome, polished metal, and custom color finishes.
          </p>
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
          <p>
            We provide <strong>Miele oven repair</strong> for Generation 7000 ovens, M Touch ovens, steam ovens, combi-steam ovens, speed ovens, microwave combination ovens, convection ovens, and warming drawers. Miele ovens often need mode-specific diagnosis because steam, speed, convection, and automatic programs use different systems inside the same appliance stack.
          </p>
  
          <h3>Miele Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Steam ovens may show water intake, drain, descaling, or pump-related faults.</li>
            <li>Combi-steam ovens may stop steaming properly because of limescale, blocked nozzles, drain issues, or valve problems.</li>
            <li>Speed ovens may heat in convection mode but fail in microwave-assist or combination cooking.</li>
            <li>M Touch controls, relay boards, probes, sensors, or cooling fans may interrupt automatic programs.</li>
            <li>Stacked Miele oven installations may run hot if cabinet ventilation is restricted.</li>
          </ul>
  
          <h3>How We Repair Miele Ovens</h3>
          <p>
            We test the water path, drain system, pump, valves, descaling condition, sensors, probes, relays, fans, heating elements, and M Touch interface. For Miele steam and speed ovens, we verify each cooking mode separately instead of assuming the issue is a basic heating failure.
          </p>
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
          <p>
            Our <strong>Officine Gullo oven repair</strong> service is designed for bespoke Italian ranges, custom cooking suites, professional ovens, and luxury kitchen installations. Officine Gullo appliances often combine handcrafted metal finishes, custom dimensions, commercial-style components, and made-to-order layouts.
          </p>
  
          <h3>Officine Gullo Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>One custom oven cavity performs differently from another because each section may use different controls or heat sources.</li>
            <li>Heavy doors, gaskets, hinges, and professional trim may need adjustment to maintain heat retention.</li>
            <li>Gas oven systems may develop flame stability, thermocouple, or safety-valve issues.</li>
            <li>Electric oven sections may need selector, thermostat, relay, element, or wiring diagnosis.</li>
            <li>Parts identification can require extra research because many installations are custom-built.</li>
          </ul>
  
          <h3>How We Repair Officine Gullo Ovens</h3>
          <p>
            We document the layout, fuel type, oven cavities, controls, access points, and custom finishes before repair. Then we test gas, electric, temperature, ventilation, and door systems while protecting brass, copper, nickel, stainless steel, and custom metalwork.
          </p>
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
          <p>
            We provide <strong>American Range oven repair</strong> for Performer Series, Cuisine Series, Legend Series, Medallion Series, residential pro-style ranges, wall ovens, and commercial-style cooking equipment used in private homes and chef kitchens. American Range ovens are built around heavy-duty gas systems, high-output cooking, and professional oven cavities.
          </p>
  
          <h3>American Range Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The gas oven glows or clicks but does not ignite reliably.</li>
            <li>Heavy-use ovens lose heat recovery after the door is opened repeatedly.</li>
            <li>Convection fan wear or airflow restriction causes uneven browning.</li>
            <li>Door gaskets, hinges, latches, and broiler components wear from high-temperature use.</li>
            <li>Residential and commercial-style American Range units may use different parts and service access.</li>
          </ul>
  
          <h3>How We Repair American Range Ovens</h3>
          <p>
            We test gas pressure, igniter amp draw, bake burner performance, thermostats, convection fans, broiler systems, door seals, and heat recovery. We also confirm whether the unit is residential, commercial-style, or true commercial equipment before ordering parts.
          </p>
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
          <p>
            Our <strong>BlueStar oven repair</strong> service covers Platinum Series, RNB Series, RCS Series, Precious Metals, gas ranges, dual fuel ranges, and built-in wall ovens. BlueStar ovens are known for pro-style open-burner cooking, powerful broilers, convection performance, and custom color finishes.
          </p>
  
          <h3>BlueStar Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The infrared broiler becomes weak, uneven, or difficult to ignite.</li>
            <li>The bake burner may light slowly, cycle poorly, or fail because of igniter or safety-valve issues.</li>
            <li>Convection fans may become noisy or weak inside the professional-style oven cavity.</li>
            <li>Heavy doors, hinges, kick plates, and gaskets can affect heat retention over time.</li>
            <li>Custom color panels and enamel finishes require careful handling during repair.</li>
          </ul>
  
          <h3>How We Repair BlueStar Ovens</h3>
          <p>
            We inspect the broiler system, bake burner, igniter, gas valve, thermostat, convection fan, door seal, and hinge alignment. We also protect custom panels and verify the exact BlueStar series before matching parts.
          </p>
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
          <p>
            We service <strong>FiveStar oven repair</strong> for gas ranges, dual fuel ranges, side-by-side oven layouts, sealed burner ranges, griddle/grill configurations, and legacy FiveStar cooking appliances. Many FiveStar ranges have older controls, separate oven cavities, and parts that must be matched carefully.
          </p>
  
          <h3>FiveStar Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>One side of a side-by-side range heats correctly while the other side does not.</li>
            <li>Gas oven flame may drop out, light slowly, or fail because of thermocouple, igniter, or safety-valve issues.</li>
            <li>Electric oven sections may trip power or stop heating due to elements, selectors, thermostats, or wiring.</li>
            <li>Older knobs, doors, hinges, broilers, and gaskets can become harder to source.</li>
            <li>Large ranges with griddle or grill sections may need heat and gas systems checked together.</li>
          </ul>
  
          <h3>How We Repair FiveStar Ovens</h3>
          <p>
            We test each oven cavity independently and confirm whether the issue is gas, electric, control-related, or door-related. For older FiveStar units, we verify parts compatibility before replacing components.
          </p>
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
          <p>
            We provide <strong>Thor Kitchen oven repair</strong> for professional gas ranges, dual fuel ranges, electric ranges, induction ranges, wall ovens, double ovens, and pro-style cooking suites. Thor ovens often include electronic ignition, convection fans, infrared broilers, air fry modes, and stainless commercial-style construction.
          </p>
  
          <h3>Thor Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven does not ignite reliably even though the cooktop burners still work.</li>
            <li>Air fry or convection modes run but do not circulate heat evenly.</li>
            <li>Displays, relays, or selector controls may fail on newer electronic models.</li>
            <li>Infrared broilers or broil elements may stop producing strong top heat.</li>
            <li>Parts must be matched carefully because Thor gas, dual fuel, electric, and induction platforms differ.</li>
          </ul>
  
          <h3>How We Repair Thor Ovens</h3>
          <p>
            We confirm the fuel type and platform first, then test ignition, gas valves, elements, fans, relays, sensors, selector controls, air fry circuits, and door seals so the repair matches the exact Thor model.
          </p>
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
          <p>
            Our <strong>Forno oven repair</strong> service covers Forno ranges, dual fuel ranges, gas ranges, induction ranges, Vomero wall ovens, single wall ovens, double wall ovens, and convection ovens. Forno units often require careful model verification because product lines, controls, and replacement parts can vary significantly by series.
          </p>
  
          <h3>Forno Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Large oven cavities may heat unevenly if the sensor, fan, thermostat, or control is off.</li>
            <li>Convection fans may become noisy, weak, or fail to move enough air.</li>
            <li>Door locks, gaskets, and self-clean components may create problems on built-in oven models.</li>
            <li>Gas and dual fuel ranges may need ignition, valve, or burner diagnosis.</li>
            <li>Exact model numbers matter because parts can vary across Forno series and generations.</li>
          </ul>
  
          <h3>How We Repair Forno Ovens</h3>
          <p>
            We verify the model and series, then test airflow, sensors, controls, locks, gas ignition, heating circuits, fans, and door sealing. Accurate parts matching is especially important before repair work begins.
          </p>
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
          <p>
            We provide <strong>Garland oven repair</strong> for commercial ranges, Master Series heavy-duty ranges, convection ovens, gas ovens, electric ovens, and restaurant-style equipment installed in private estates, chef kitchens, event spaces, and commercial kitchens. Garland equipment is built for high-volume cooking, so repair often centers on heat recovery, gas flow, fan systems, and safety controls.
          </p>
  
          <h3>Garland Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven loses heat recovery after repeated door openings.</li>
            <li>Convection fans, belts, door switches, or timers wear from heavy use.</li>
            <li>Gas ovens may have pilot, ignition, safety-valve, thermostat, or burner issues.</li>
            <li>Electric ovens may develop element, relay, contactor, or high-load electrical faults.</li>
            <li>Door gaskets, hinges, latches, and oven cavities can wear faster in demanding environments.</li>
          </ul>
  
          <h3>How We Repair Garland Ovens</h3>
          <p>
            We inspect fan motors, belts, gas flow, pilots, burners, thermostats, contactors, relays, door switches, gaskets, and hinges. We also confirm whether the installation is residential, commercial-style, or true commercial before sourcing parts.
          </p>
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
          <p>
            Our <strong>ZLINE oven repair</strong> service covers ZLINE gas ranges, dual fuel ranges, induction ranges, single wall ovens, double wall ovens, Autograph Edition ovens, and pro-style cooking appliances. ZLINE ovens often combine decorative finishes, true convection, air fry functions, self-clean systems, and modern controls.
          </p>
  
          <h3>ZLINE Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Air fry or true convection mode runs but does not cook evenly.</li>
            <li>Self-clean or door lock functions may fail on wall ovens and newer range ovens.</li>
            <li>Gas range ovens may need igniter, safety-valve, bake burner, or broiler diagnosis.</li>
            <li>Autograph Edition handles, brass accents, and decorative trim need careful protection during service.</li>
            <li>Gas, dual fuel, induction, and wall oven models may use different controls and parts.</li>
          </ul>
  
          <h3>How We Repair ZLINE Ovens</h3>
          <p>
            We test the exact failed mode, including bake, broil, convection, air fry, self-clean, and gas ignition. We inspect fans, sensors, relays, locks, elements, valves, and decorative trim before completing the repair.
          </p>
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
  
    {
      id: "big-chill-oven-repair",
      title: "Big Chill Oven Repair",
      heading: "Big Chill Oven Repair",
      /*img: "/oven-repair/big-chill-oven-repair.webp",*/
      alt: "Big Chill oven repair technician servicing a retro luxury oven",
      description: (
        <>
          <p>
            We provide <strong>Big Chill oven repair</strong> for Retro, Classic, and Pro-style ranges, gas stoves, induction stoves, electric wall ovens, and colorful luxury kitchen installations. Big Chill ovens combine retro styling with modern heating systems, so the finish and trim must be protected while the mechanical issue is diagnosed.
          </p>
  
          <h3>Big Chill Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The retro-style door may lose heat because of gasket, hinge, or alignment wear.</li>
            <li>Gas range ovens may need ignition, bake burner, broiler, or safety-valve service.</li>
            <li>Pro-style and wall oven models may develop convection fan, sensor, relay, or element issues.</li>
            <li>Custom color panels, chrome details, and handles can be damaged if service is rushed.</li>
            <li>Parts differ between Retro, Classic, and Pro-style product lines.</li>
          </ul>
  
          <h3>How We Repair Big Chill Ovens</h3>
          <p>
            We protect the finish first, then test ignition, elements, fans, sensors, controls, relays, door seals, and hinges. We verify the product line before matching parts.
          </p>
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
          <p>
            Our <strong>Elmira Stove Works oven repair</strong> service supports Northstar, Heritage, 1880-style, vintage-inspired ranges, convection wall ovens, dual fuel ranges, and retro appliance suites. Elmira ovens often combine modern cooking systems with vintage styling, specialty panels, and trim details.
          </p>
  
          <h3>Elmira Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Vintage-style doors, hinges, chrome trim, or gaskets may affect heat retention and appearance.</li>
            <li>Northstar and Heritage range ovens may need ignition, thermostat, burner, or element repair.</li>
            <li>Convection wall ovens may develop fan, sensor, relay, or self-clean problems.</li>
            <li>Timer, selector, and control issues can appear on retro-style cooking appliances.</li>
            <li>Older or specialty Elmira models may need careful parts identification.</li>
          </ul>
  
          <h3>How We Repair Elmira Ovens</h3>
          <p>
            We diagnose the oven system while preserving the vintage look. Door alignment, gasket condition, trim protection, model identification, and parts compatibility are especially important on Elmira appliances.
          </p>
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
          <p>
            We provide <strong>Smeg oven repair</strong> for built-in ovens, steam ovens, speed ovens, convection ovens, microwave ovens, all-gas ranges, dual fuel ranges, induction ranges, and retro-inspired cooking appliances. Smeg ovens often use European controls, designer panels, compact layouts, and specialty cooking modes.
          </p>
  
          <h3>Smeg Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Function selector, thermostat, timer, or European-control issues may stop specific cooking modes.</li>
            <li>Fan-assisted cooking, grill, steam, or speed cooking may fail while basic heating still works.</li>
            <li>Compact built-in ovens may need cabinet ventilation checked if they run hot or shut down.</li>
            <li>Gas range ovens may need thermocouple, burner, igniter, or flame-safety service.</li>
            <li>Designer, retro, or stainless panels require careful handling during repair.</li>
          </ul>
  
          <h3>How We Repair Smeg Ovens</h3>
          <p>
            We test the exact cooking function, selector, thermostat, fan, grill, steam or speed system, ignition components, cabinet ventilation, hinges, gaskets, and interior light while protecting Smeg’s design-forward finish.
          </p>
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
          <p>
            Our <strong>Heartland oven repair</strong> service is designed for legacy Heartland ranges, classic gas ranges, electric ranges, dual fuel ranges, retro-style ovens, and discontinued Heartland cooking appliances. Heartland oven service often involves older controls, discontinued parts, and preserving a retro kitchen design that homeowners may not want to replace.
          </p>
  
          <h3>Heartland Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The oven takes longer to preheat or no longer holds temperature like it used to.</li>
            <li>Older gas models may need ignition, bake burner, broiler, thermocouple, or safety-valve service.</li>
            <li>Electric models may develop element, thermostat, selector, timer, or wiring issues.</li>
            <li>Door gaskets, hinges, control knobs, and trim may be harder to replace on discontinued models.</li>
            <li>Repair planning often depends on parts availability and the value of preserving the original kitchen look.</li>
          </ul>
  
          <h3>How We Repair Heartland Ovens</h3>
          <p>
            We identify the exact model, review parts availability, inspect heating and ignition systems, check door sealing, and recommend a repair path that makes sense for the appliance’s age, condition, and design value.
          </p>
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
          <p>
            We provide <strong>ASKO oven repair</strong> for built-in ovens, pyrolytic ovens, multifunction ovens, combined steam ovens, compact microwave ovens, and European kitchen installations. ASKO ovens often require attention to flush installation, pyrolytic self-cleaning, steam systems, telescopic guides, and compact European layouts.
          </p>
  
          <h3>ASKO Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Pyrolytic self-clean may fail because of door lock, heat-limit, or control issues.</li>
            <li>Combined steam ovens may have fill, drain, pump, valve, or limescale-related problems.</li>
            <li>Compact microwave ovens may fail in mode switching, fan operation, or controls.</li>
            <li>Telescopic guides, rack supports, door alignment, and gaskets may need adjustment.</li>
            <li>Flush European installations can create ventilation or cabinet heat concerns.</li>
          </ul>
  
          <h3>How We Repair ASKO Ovens</h3>
          <p>
            We check the self-clean lock, steam path, compact oven controls, door alignment, airflow, telescopic guides, elements, sensors, fans, and cabinet ventilation so the repair fits the specific ASKO installation.
          </p>
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
          <p>
            Our <strong>Bosch oven repair</strong> service covers Bosch 500 Series, 800 Series, Benchmark Series, wall ovens, speed ovens, steam ovens, combination ovens, single ovens, double ovens, and slide-in range ovens. Bosch ovens are often installed in remodels where flush fit, cooling airflow, European controls, side-opening doors, and compact combination designs matter.
          </p>
  
          <h3>Bosch Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Speed ovens may fail in microwave, convection, or combination cooking while other modes still work.</li>
            <li>Steam ovens may need water, pump, valve, drain, or descaling diagnosis.</li>
            <li>Benchmark and 800 Series ovens may develop control panel, relay, sensor, or cooling fan issues.</li>
            <li>Side-opening doors may need hinge, gasket, latch, or alignment service.</li>
            <li>Stacked or flush-mounted Bosch ovens may run hot if ventilation is restricted.</li>
          </ul>
  
          <h3>How We Repair Bosch Ovens</h3>
          <p>
            We diagnose Bosch ovens by platform: steam, speed, wall oven, double oven, or range oven. We inspect controls, water systems, fans, sensors, relays, door locks, hinges, and installation airflow before replacing parts.
          </p>
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
          <p>
            We provide <strong>JennAir oven repair</strong> for RISE and NOIR wall ovens, single ovens, double ovens, microwave combination ovens, steam and convection ovens, professional-style ranges, and built-in cooking appliances. JennAir ovens often involve V2 Dual-Fan Convection, Culinary Center features, connected controls, probes, and premium design panels.
          </p>
  
          <h3>JennAir Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>V2 Dual-Fan Convection problems may affect fan synchronization, rear heat, or baking consistency.</li>
            <li>Culinary Center, assisted cooking, probe, or connected-control faults may interrupt automatic programs.</li>
            <li>Microwave combination ovens may fail in microwave, convection, or broil mode.</li>
            <li>Touch display, relay, control board, and sensor issues may appear on RISE and NOIR models.</li>
            <li>RISE and NOIR handles, panels, and trim need careful protection during repair.</li>
          </ul>
  
          <h3>How We Repair JennAir Ovens</h3>
          <p>
            We test the exact JennAir cooking mode, including convection, steam, microwave-combination, probe cooking, and assisted cooking. We inspect fans, sensors, relays, locks, controls, hinges, and finish-sensitive panels.
          </p>
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
          <p>
            Our <strong>Kalamazoo outdoor oven repair</strong> service covers Kalamazoo Artisan Fire Pizza Ovens, hybrid fire outdoor cooking systems, built-in outdoor kitchens, and premium gas-fired outdoor oven installations. These ovens operate at high temperatures and are affected by gas delivery, refractory surfaces, ventilation, and weather exposure.
          </p>
  
          <h3>Kalamazoo Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The pizza oven lights but does not reach high temperature or recover heat quickly.</li>
            <li>Burners, igniters, regulators, gas valves, or flame patterns may need service.</li>
            <li>Refractory stone or deck heat may become uneven after heavy use.</li>
            <li>Outdoor kitchen enclosure ventilation, gas-line sizing, and clearance can affect performance.</li>
            <li>Weather exposure can affect controls, fasteners, burners, and thermometer accuracy.</li>
          </ul>
  
          <h3>How We Repair Kalamazoo Outdoor Ovens</h3>
          <p>
            We inspect gas delivery, burner output, ignition, regulators, refractory surfaces, ventilation, and weather-related wear so the oven can safely reach and hold high cooking temperatures.
          </p>
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
          <p>
            We provide <strong>Lynx outdoor oven repair</strong> for Lynx Napoli Outdoor Oven models, built-in outdoor ovens, countertop pizza ovens, freestanding cart installations, and luxury outdoor kitchen cooking systems. Lynx Napoli ovens require careful diagnosis of infrared heat, refractory surfaces, gas delivery, and outdoor installation conditions.
          </p>
  
          <h3>Lynx Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The Napoli oven does not light consistently or does not reach pizza-baking temperature.</li>
            <li>Infrared burner, igniter, regulator, gas valve, or flame pattern issues may reduce heat output.</li>
            <li>The pizza stone may heat unevenly or recover slowly between cooks.</li>
            <li>Cart-mounted and built-in installations can behave differently because of gas supply and airflow.</li>
            <li>Outdoor corrosion may affect burners, fasteners, lights, controls, or thermometers.</li>
          </ul>
  
          <h3>How We Repair Lynx Outdoor Ovens</h3>
          <p>
            We test infrared heat output, gas pressure, ignition, airflow, refractory surfaces, burner condition, and installation clearances before recommending parts or adjustment.
          </p>
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
          <p>
            Our <strong>Alfresco outdoor oven repair</strong> service covers Alfresco Pizza Oven Plus, built-in outdoor pizza ovens, countertop pizza ovens, and premium outdoor kitchen oven installations. Alfresco ovens are designed for pizza, baking, roasting, searing, and broiling, so burner output and insulation are critical.
          </p>
  
          <h3>Alfresco Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Pizza Oven Plus may not light or may not reach high temperature.</li>
            <li>Rear burner, infrared hearth, igniter, gas valve, or regulator issues can weaken heat output.</li>
            <li>The hearth or ceramic ceiling surface may heat unevenly.</li>
            <li>Door, thermometer, gasket, insulation, or control issues may cause temperature swings.</li>
            <li>Outdoor corrosion, ventilation, and clearance problems can affect built-in installations.</li>
          </ul>
  
          <h3>How We Repair Alfresco Outdoor Ovens</h3>
          <p>
            We inspect burner output, infrared heat, hearth performance, gas pressure, ignition, insulation, ventilation, controls, and weather-exposed parts to restore dependable outdoor oven performance.
          </p>
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
          <p>
            We provide <strong>Fire Magic outdoor oven repair</strong> for Fire Magic built-in pizza ovens, Aurora pizza ovens, Echelon outdoor pizza ovens, black glass outdoor oven models, and luxury outdoor kitchen cooking appliances. Fire Magic ovens may include thermostatic controls, electronic ignition, ceramic glass doors, pizza stones, baking racks, and smart temperature features.
          </p>
  
          <h3>Fire Magic Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>The outdoor oven lights but shuts off or swings in temperature.</li>
            <li>Thermostatic control, electronic ignition, flame sensing, or gas valve issues may interrupt heating.</li>
            <li>Pizza stone, baking rack, ceramic glass door, or gasket condition may affect heat retention.</li>
            <li>Control panel, smart feature, wiring, or power supply problems may appear on newer models.</li>
            <li>Outdoor corrosion and enclosure clearance can affect safety and performance.</li>
          </ul>
  
          <h3>How We Repair Fire Magic Outdoor Ovens</h3>
          <p>
            We test ignition, flame sensing, gas delivery, thermostats, controls, wiring, ceramic glass, stone surfaces, and built-in enclosure conditions so the oven performs safely outdoors.
          </p>
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
          <p>
            Our <strong>DCS oven repair</strong> service supports legacy DCS wall ovens, DCS cooking appliances, and DCS outdoor kitchen systems used for roasting, baking, rotisserie cooking, and high-heat outdoor cooking. DCS diagnosis depends on whether the appliance is an indoor legacy oven, a range oven, or part of an outdoor cooking setup.
          </p>
  
          <h3>DCS Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Legacy DCS wall ovens may fail in bake, broil, fan bake, pizza bake, self-clean, or door-lock modes.</li>
            <li>Older indoor ovens may need sensor, relay, element, fan, or control diagnosis.</li>
            <li>Outdoor DCS systems may lose roasting or rotisserie heat because of burner, regulator, ignition, or airflow issues.</li>
            <li>Infrared burner and grill-lid heat retention problems can affect oven-style cooking outdoors.</li>
            <li>Parts availability differs between legacy indoor ovens and current outdoor cooking products.</li>
          </ul>
  
          <h3>How We Repair DCS Ovens</h3>
          <p>
            We identify the DCS platform first, then test heating elements, gas systems, sensors, relays, fans, ignition, regulators, rotisserie components, and outdoor ventilation depending on the model.
          </p>
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
          <p>
            We provide <strong>Twin Eagles outdoor oven repair</strong> for premium outdoor cooking systems used for baking, roasting, rotisserie cooking, searing, pizza-style cooking, and high-heat outdoor kitchen performance. Twin Eagles service often involves gas delivery, infrared components, rotisserie systems, lighting, controls, and outdoor exposure.
          </p>
  
          <h3>Twin Eagles Oven Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>Infrared burners, rotisserie burners, or searing zones may lose strong heat output.</li>
            <li>Gas valves, regulators, igniters, burners, or flame stability may need service.</li>
            <li>Pizza-stone, roasting, or oven-style heat performance may decline inside outdoor cooking systems.</li>
            <li>Control knobs, thermometers, wiring, and lighting may fail from outdoor exposure.</li>
            <li>Ventilation and enclosure clearance can affect performance in built-in outdoor kitchens.</li>
          </ul>
  
          <h3>How We Repair Twin Eagles Outdoor Ovens</h3>
          <p>
            We inspect gas delivery, burner output, infrared heat, ignition, rotisserie components, airflow, enclosure ventilation, wiring, lighting, and corrosion-prone areas so the outdoor cooking system performs safely and consistently.
          </p>
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
