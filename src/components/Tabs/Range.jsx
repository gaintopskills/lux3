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
      id: "aga-range-repair",
      title: "AGA Range Repair",
      heading: "AGA Range Repair",
      img: "/range-repair/aga-range-repair.webp",
      alt: "AGA range repair technician servicing a luxury AGA cooker",
      description: (
        <>
          <p>We provide <strong>AGA range repair</strong> for traditional cast-iron AGA cookers, AGA Total Control, AGA Dual Control, AGA eR7, AGA R7, AGA Mercury, AGA Elise, and AGA range-style cooking appliances. AGA ranges are different from ordinary ranges because many models combine radiant heat, insulated oven zones, hotplates, gas or electric cooking surfaces, and model-specific control systems.</p>
          <h3>AGA Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Boiling plate or simmering plate not recovering heat the way it used to</li>
            <li>✅ Roasting, baking, simmering, or warming ovens drifting out of their normal heat pattern</li>
            <li>✅ Total Control, Dual Control, eR7, or R7 zones not responding correctly</li>
            <li>✅ Gas burner ignition, flame stability, or gas regulation issues on AGA range models</li>
            <li>✅ Worn lid seals, door seals, rope gaskets, or insulation causing heat loss and slow recovery</li>
            <li>✅ Older AGA parts identification issues where fuel type, conversion history, and serial number matter</li>
          </ul>
          <h3>How We Fix These AGA Range Issues</h3>
          <p>Our technicians separate traditional cast-iron AGA diagnosis from modern AGA range diagnosis. We inspect hotplate zones, oven cavities, controls, thermostats, safety limits, ignition systems, seals, insulation, and heat-retention performance before recommending a repair path.</p>
        </>
      )
    },
    {
      id: "bertazzoni-range-repair",
      title: "Bertazzoni Range Repair",
      heading: "Bertazzoni Range Repair",
      /*img: "/range-repair/bertazzoni-range-repair.webp",*/
      alt: "Bertazzoni range repair technician servicing an Italian luxury range",
      description: (
        <>
          <p>Our <strong>Bertazzoni range repair</strong> service covers Professional Series, Master Series, Heritage Series, gas ranges, dual fuel ranges, induction ranges, and range ovens. Bertazzoni ranges combine Italian styling with brass burners, electronic ignition, oven selectors, convection systems, and series-specific components.</p>
          <h3>Bertazzoni Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Brass burner caps or bases not seated correctly, causing clicking, delayed ignition, or uneven flame</li>
            <li>✅ Oven temperature drift from thermostat, sensor, selector, or relay issues</li>
            <li>✅ Dual convection fan noise, weak airflow, or uneven baking on range oven models</li>
            <li>✅ Igniters clicking continuously after cleaning, spills, or moisture around the burner area</li>
            <li>✅ Knob, selector, or control-panel issues on Professional, Master, and Heritage Series units</li>
            <li>✅ Parts differences between Bertazzoni series that make exact model identification important</li>
          </ul>
          <h3>How We Fix These Bertazzoni Range Issues</h3>
          <p>We check burner cap seating, spark electrodes, ignition switches, spark modules, gas valves, oven thermostats, convection fans, selectors, sensors, and relay boards. For Bertazzoni ranges, we confirm the exact series before ordering parts.</p>
        </>
      )
    },
    {
      id: "fulgor-milano-range-repair",
      title: "Fulgor Milano Range Repair",
      heading: "Fulgor Milano Range Repair",
      /*img: "/range-repair/fulgor-milano-range-repair.webp",*/
      alt: "Fulgor Milano range repair technician servicing a premium Italian range",
      description: (
        <>
          <p>We service <strong>Fulgor Milano range repair</strong> needs for Sofia professional ranges, Sofia induction ranges, dual fuel ranges, all-gas ranges, and related built-in cooking systems. Fulgor Milano ranges often combine European controls, touch electronics, convection ovens, induction modules, cooling fans, and precision burner layouts.</p>
          <h3>Fulgor Milano Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Sofia gas burners producing uneven flame because of burner cap seating, clogged ports, or gas valve issues</li>
            <li>✅ Oven shutting off, underheating, or overheating from sensor, thermostat, relay, or control faults</li>
            <li>✅ Induction zones failing to detect cookware or shutting down from heat or module issues</li>
            <li>✅ Cooling fan or ventilation problems under induction ranges and built-in cooking surfaces</li>
            <li>✅ Meat probe, touch-control, or display problems on newer Fulgor Milano models</li>
            <li>✅ Parts sourcing delays when the exact model and production generation are not verified</li>
          </ul>
          <h3>How We Fix These Fulgor Milano Range Issues</h3>
          <p>We test the gas burners, ignition circuit, induction boards, cooling airflow, oven sensors, relays, probes, touch controls, and safety systems. We also verify model and serial details before recommending parts.</p>
        </>
      )
    },
    {
      id: "gaggenau-range-repair",
      title: "Gaggenau Range Repair",
      heading: "Gaggenau Range Repair",
      /*img: "/range-repair/gaggenau-range-repair.webp",*/
      alt: "Gaggenau range repair technician servicing a luxury cooking system",
      description: (
        <>
          <p>Our <strong>Gaggenau range repair</strong> service is best suited for Gaggenau cooking suites, 400 Series and 200 Series ovens, modular Vario cooktops, gas cooktops, flex induction surfaces, Teppan Yaki modules, wok burners, and built-in cooking columns. Gaggenau is often installed as a range-style cooking system rather than a standard freestanding range.</p>
          <h3>Gaggenau Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Flex induction zones not detecting cookware, shutting down, or showing control errors</li>
            <li>✅ Combi-steam oven drain, pump, descaling, water tank, or steam-generation problems</li>
            <li>✅ Vario modules with individual power, wiring, control, or installation faults</li>
            <li>✅ High-output wok burners with weak flame, delayed ignition, or flame-sensing issues</li>
            <li>✅ Rotary selector, touch display, probe, or module faults affecting cooking modes</li>
            <li>✅ Cabinet ventilation and heat-management issues in flush Gaggenau cooking columns</li>
          </ul>
          <h3>How We Fix These Gaggenau Range Issues</h3>
          <p>We diagnose the Gaggenau system by module: oven, steam oven, gas, induction, Vario, wok, or Teppan Yaki. We inspect controls, power supply, steam systems, drain paths, probes, cooling fans, induction boards, burner ignition, gas valves, and built-in ventilation.</p>
        </>
      )
    },
    {
      id: "ilve-range-repair",
      title: "ILVE Range Repair",
      heading: "ILVE Range Repair",
      /*img: "/range-repair/ilve-range-repair.webp",*/
      alt: "ILVE range repair technician servicing an Italian dual fuel range",
      description: (
        <>
          <p>We provide <strong>ILVE range repair</strong> for Majestic, Nostalgie, Panoramagic, Professional Plus, dual fuel ranges, all-gas ranges, induction ranges, griddles, French tops, rotisserie ovens, and brass burner cooking surfaces. ILVE ranges need careful service because the oven, door, burners, decorative trim, and European controls all affect performance.</p>
          <h3>ILVE Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Oven door misalignment, hinge wear, gasket issues, or heavy-door closure problems</li>
            <li>✅ Brass burners with uneven flame because burner caps, rings, or ports are not seated correctly</li>
            <li>✅ Igniters clicking continuously after cleaning, spills, or moisture around the spark area</li>
            <li>✅ Main oven and secondary oven cooking at different temperatures on multi-cavity ranges</li>
            <li>✅ Rotisserie, French top, griddle, or warming drawer sections not performing consistently</li>
            <li>✅ Knobs, bezels, selector switches, and decorative trim needing careful handling during repair</li>
          </ul>
          <h3>How We Fix These ILVE Range Issues</h3>
          <p>We inspect ILVE oven doors, hinges, gaskets, burners, caps, rings, spark electrodes, gas valves, thermostats, selectors, rotisserie components, griddles, and induction modules while protecting brass, enamel, chrome, and custom finishes.</p>
        </>
      )
    },
    {
      id: "lacanche-range-repair",
      title: "Lacanche Range Repair",
      heading: "Lacanche Range Repair",
      /*img: "/range-repair/lacanche-range-repair.webp",*/
      alt: "Lacanche range repair technician servicing a French luxury range",
      description: (
        <>
          <p>Our <strong>Lacanche range repair</strong> service supports Cluny, Sully, Savigny, Volnay, Chagny, Cormatin, Citeaux, and custom Lacanche French ranges. Lacanche ranges may combine gas ovens, electric ovens, warming cupboards, French tops, simmer plates, planchas, and custom burner layouts.</p>
          <h3>Lacanche Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners that light but go out because of thermocouple or safety-valve problems</li>
            <li>✅ Gas oven weak bake performance, flame drop-out, or poor heat recovery</li>
            <li>✅ Electric oven sections not reaching temperature because of element, thermostat, or selector faults</li>
            <li>✅ French top, simmer plate, or plancha heat distribution issues</li>
            <li>✅ Heavy door, gasket, hinge, enamel, brass, or knob concerns on hand-built ranges</li>
            <li>✅ Custom configuration parts identification because every Lacanche range layout can be different</li>
          </ul>
          <h3>How We Fix These Lacanche Range Issues</h3>
          <p>We map the exact Lacanche configuration before repair, then test gas burners, thermocouples, safety valves, electric oven circuits, thermostats, selectors, specialty plates, door seals, and custom trim areas.</p>
        </>
      )
    },
    {
      id: "la-cornue-range-repair",
      title: "La Cornue Range Repair",
      heading: "La Cornue Range Repair",
      /*img: "/range-repair/la-cornue-range-repair.webp",*/
      alt: "La Cornue range repair technician servicing a luxury French range",
      description: (
        <>
          <p>We specialize in <strong>La Cornue range repair</strong> for Château, CornuFé, CornuChef, Grand Palais, Le Château 75, Château 90, Château 120, Château 150, Château 165, and custom La Cornue range configurations. La Cornue ranges can include vaulted gas or electric ovens, French tops, lava rock grills, griddles, induction zones, and custom finishes.</p>
          <h3>La Cornue Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Yellow flame, soot, uneven flame, or weak burner output from cap position, gas pressure, air mixture, or clogged ports</li>
            <li>✅ Gas oven ignition delays, thermocouple faults, burner shutdown, or safety-valve problems</li>
            <li>✅ Vaulted oven cavity temperature behavior that may be mistaken for a simple thermostat failure</li>
            <li>✅ Electric cavity element, selector, relay, thermostat, or wiring issues on CornuFé and Château models</li>
            <li>✅ French top, griddle, or specialty surface heat patterns that feel uneven to the owner</li>
            <li>✅ Parts and finish-matching concerns for enamel, brass, chrome, nickel, and custom color panels</li>
          </ul>
          <h3>How We Fix These La Cornue Range Issues</h3>
          <p>We evaluate flame color, burner ports, gas pressure, air mixture, thermocouples, gas valves, igniters, oven thermostats, vaulted heat movement, specialty surfaces, and finish-sensitive access points before recommending repair.</p>
        </>
      )
    },
    {
      id: "miele-range-repair",
      title: "Miele Range Repair",
      heading: "Miele Range Repair",
      /*img: "/range-repair/miele-range-repair.webp",*/
      alt: "Miele range repair technician servicing a luxury induction or gas range",
      description: (
        <>
          <p>We provide <strong>Miele range repair</strong> for Miele gas ranges, dual fuel ranges, induction ranges, induction cooktops paired with wall ovens, steam ovens, speed ovens, and range-style cooking installations. Miele ranges often involve induction electronics, gas safety systems, M Touch controls, steam functions, and precise cabinet ventilation.</p>
          <h3>Miele Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not recognizing cookware, shutting off, or overheating under load</li>
            <li>✅ Steam oven water intake, drain, descaling, pump, valve, or limescale-related faults</li>
            <li>✅ Speed oven microwave and convection modes not working together correctly</li>
            <li>✅ Gas burner ignition clicking, delayed lighting, or weak flame on gas cooking surfaces</li>
            <li>✅ M Touch display, relay, probe, sensor, or control-module faults</li>
            <li>✅ Flush installation ventilation issues that affect induction modules, cooling fans, or oven electronics</li>
          </ul>
          <h3>How We Fix These Miele Range Issues</h3>
          <p>We test induction modules, cookware detection, cooling fans, gas ignition, valves, M Touch controls, steam pumps, water valves, probes, relays, sensors, and built-in ventilation so the repair matches the exact Miele cooking platform.</p>
        </>
      )
    },
    {
      id: "officine-gullo-range-repair",
      title: "Officine Gullo Range Repair",
      heading: "Officine Gullo Range Repair",
      /*img: "/range-repair/officine-gullo-range-repair.webp",*/
      alt: "Officine Gullo range repair technician servicing a bespoke luxury range",
      description: (
        <>
          <p>Our <strong>Officine Gullo range repair</strong> service is designed for bespoke Italian ranges, custom cooking suites, professional rangetops, gas burners, ovens, griddles, fry tops, French tops, pasta cookers, and made-to-order luxury kitchen installations. With Officine Gullo, the first step is understanding the exact custom layout.</p>
          <h3>Officine Gullo Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Custom burner layouts where each burner, valve, igniter, or safety component may be different</li>
            <li>✅ Gas ignition, thermocouple, safety-valve, or flame stability issues on professional-style burners</li>
            <li>✅ Oven cavity temperature problems involving thermostats, selectors, relays, elements, or gas systems</li>
            <li>✅ Griddle, fry top, French top, or specialty module heat distribution problems</li>
            <li>✅ Heavy knobs, brass trim, copper, nickel, stainless, and custom metal finishes requiring careful disassembly</li>
            <li>✅ Parts identification challenges because many Officine Gullo ranges are custom-built</li>
          </ul>
          <h3>How We Fix These Officine Gullo Range Issues</h3>
          <p>We document the custom layout, fuel type, control style, access points, and finish details before testing burners, oven cavities, valves, thermocouples, relays, elements, specialty modules, and ventilation.</p>
        </>
      )
    },
    {
      id: "american-range-range-repair",
      title: "American Range Repair",
      heading: "American Range Repair",
      /*img: "/range-repair/american-range-range-repair.webp",*/
      alt: "American Range repair technician servicing a pro-style range",
      description: (
        <>
          <p>We provide <strong>American Range repair</strong> for Performer Series, Cuisine Series, Legend Series, Medallion Series, residential pro-style ranges, griddles, charbroilers, rangetops, and commercial-style cooking equipment used in private homes and chef kitchens. American Range units are built for high-output cooking and heavy use.</p>
          <h3>American Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas oven ignition problems involving glow-bar igniters, bake burners, safety valves, or gas flow</li>
            <li>✅ High-output top burners with weak flame, delayed ignition, or uneven combustion</li>
            <li>✅ Thermostat and calibration concerns after years of heavy high-temperature cooking</li>
            <li>✅ Griddle or charbroiler heat recovery issues on larger pro-style models</li>
            <li>✅ Door gasket, hinge, latch, and cavity wear from frequent use</li>
            <li>✅ Parts differences between residential American Range units and commercial American Range equipment</li>
          </ul>
          <h3>How We Fix These American Range Issues</h3>
          <p>We test ignition amp draw, gas pressure, burner assemblies, oven thermostats, safety valves, fan systems, griddle controls, door seals, and heat recovery. We also confirm whether the unit is residential, commercial-style, or true commercial equipment.</p>
        </>
      )
    },
    {
      id: "bluestar-range-repair",
      title: "BlueStar Range Repair",
      heading: "BlueStar Range Repair",
      /*img: "/range-repair/bluestar-range-repair.webp",*/
      alt: "BlueStar range repair technician servicing a pro-style range",
      description: (
        <>
          <p>Our <strong>BlueStar range repair</strong> service covers Platinum Series, RNB Series, RCS Series, Precious Metals, gas ranges, dual fuel ranges, charbroilers, griddles, French tops, and pro-style range ovens. BlueStar ranges are known for high-output open burners, powerful broilers, heavy grates, and custom color finishes.</p>
          <h3>BlueStar Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Open burners with uneven flame from clogged ports, cap placement, gas pressure, or debris</li>
            <li>✅ Infrared broiler not igniting, producing weak heat, or failing during use</li>
            <li>✅ Gas oven bake burner, igniter, safety-valve, or thermostat problems</li>
            <li>✅ Convection fan noise, motor drag, or airflow issues inside professional-style oven cavities</li>
            <li>✅ Door gasket, hinge, kick plate, and heavy door alignment concerns</li>
            <li>✅ Custom color panel and enamel protection needs during range disassembly</li>
          </ul>
          <h3>How We Fix These BlueStar Range Issues</h3>
          <p>We inspect burner ports, gas valves, regulators, igniters, oven burners, infrared broilers, thermostats, convection fans, hinges, and door seals while protecting custom color panels and pro-style trim.</p>
        </>
      )
    },
    {
      id: "fivestar-range-repair",
      title: "FiveStar Range Repair",
      heading: "FiveStar Range Repair",
      /*img: "/range-repair/fivestar-range-repair.webp",*/
      alt: "FiveStar range repair technician servicing a professional range",
      description: (
        <>
          <p>We service <strong>FiveStar range repair</strong> for gas ranges, dual fuel ranges, sealed burner ranges, side-by-side oven layouts, griddle/grill configurations, and legacy FiveStar cooking appliances. FiveStar diagnosis often requires separating the gas cooktop, electric oven, gas oven, and secondary cavity systems.</p>
          <h3>FiveStar Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Side-by-side oven cavities cooking at different temperatures because each cavity uses separate controls or heat sources</li>
            <li>✅ Gas oven thermocouple, safety valve, igniter, and burner issues on older ranges</li>
            <li>✅ Electric oven sections with element, selector, thermostat, or wiring failures</li>
            <li>✅ Top burner ignition, sealed burner flame, griddle, or grill performance problems</li>
            <li>✅ Older door gasket, hinge, broiler, and control knob wear</li>
            <li>✅ Parts availability challenges on discontinued or less common FiveStar configurations</li>
          </ul>
          <h3>How We Fix These FiveStar Range Issues</h3>
          <p>We test each oven cavity independently, then inspect top burners, ignition, griddle or grill sections, thermocouples, gas valves, electrical circuits, selectors, thermostats, wiring, and legacy parts compatibility.</p>
        </>
      )
    },
    {
      id: "thor-range-repair",
      title: "Thor Range Repair",
      heading: "Thor Kitchen Range Repair",
      /*img: "/range-repair/thor-range-repair.webp",*/
      alt: "Thor Kitchen range repair technician servicing a professional range",
      description: (
        <>
          <p>We provide <strong>Thor Kitchen range repair</strong> for professional gas ranges, dual fuel ranges, electric ranges, induction ranges, griddle models, and commercial-style cooking suites. Thor ranges often combine stainless pro-style design with electronic ignition, convection ovens, infrared broilers, air fry modes, and modern controls.</p>
          <h3>Thor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burner ignition clicking, delayed lighting, or flame instability</li>
            <li>✅ Oven air fry or convection mode failures caused by fan, element, relay, or sensor faults</li>
            <li>✅ Infrared broiler or broil element not working on pro-style models</li>
            <li>✅ Display, selector, relay, or control-board issues on newer Thor ranges</li>
            <li>✅ Door gasket, hinge, and cooling airflow concerns on large stainless ranges</li>
            <li>✅ Parts matching differences between Thor gas, dual fuel, electric, and induction platforms</li>
          </ul>
          <h3>How We Fix These Thor Range Issues</h3>
          <p>We confirm the Thor fuel type first, then test burners, igniters, valves, oven elements, fans, relays, air fry circuits, sensors, selectors, door seals, and safety systems.</p>
        </>
      )
    },
    {
      id: "forno-range-repair",
      title: "Forno Range Repair",
      heading: "Forno Range Repair",
      /*img: "/range-repair/forno-range-repair.webp",*/
      alt: "Forno range repair technician servicing a modern range",
      description: (
        <>
          <p>Our <strong>Forno range repair</strong> service covers Forno gas ranges, dual fuel ranges, induction ranges, French-door range models, large-capacity oven ranges, and pro-style cooking appliances. Forno range service depends heavily on exact model verification because controls, parts, and cooking platforms vary by series.</p>
          <h3>Forno Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Large-capacity oven temperature drift from sensor, thermostat, fan, or control issues</li>
            <li>✅ Convection fan noise, weak airflow, or fan motor wear in range ovens</li>
            <li>✅ Gas burner ignition, valve, or flame pattern issues on pro-style tops</li>
            <li>✅ Door lock, gasket, hinge, and self-clean concerns on Forno oven cavities</li>
            <li>✅ Display, timer, selector, relay, or control faults depending on the model generation</li>
            <li>✅ Parts lookup challenges when the exact model and serial number are not confirmed</li>
          </ul>
          <h3>How We Fix These Forno Range Issues</h3>
          <p>We verify the model and series, then test gas burners, ignition, sensors, fans, controls, door locks, oven elements, gas valves, and safety systems before recommending replacement parts.</p>
        </>
      )
    },
    {
      id: "garland-range-repair",
      title: "Garland Range Repair",
      heading: "Garland Range Repair",
      /*img: "/range-repair/garland-range-repair.webp",*/
      alt: "Garland commercial range repair technician servicing a heavy-duty range",
      description: (
        <>
          <p>We provide <strong>Garland range repair</strong> for commercial ranges, Master Series heavy-duty ranges, convection oven bases, gas ranges, electric ranges, griddles, charbroilers, and restaurant-style equipment installed in chef kitchens, event spaces, estates, and commercial kitchens. Garland equipment is built for heavy use and fast heat recovery.</p>
          <h3>Garland Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners, pilots, gas valves, and safety controls wearing from repeated heavy use</li>
            <li>✅ Convection oven fan motor, belt, door switch, or timer problems</li>
            <li>✅ Gas oven pilot, ignition, thermostat, and burner issues</li>
            <li>✅ Electric oven element, contactor, relay, and high-load electrical faults</li>
            <li>✅ Griddle or charbroiler heat recovery problems during high-volume cooking</li>
            <li>✅ Door gasket, hinge, latch, and cavity wear from commercial-style use</li>
          </ul>
          <h3>How We Fix These Garland Range Issues</h3>
          <p>We inspect burners, pilots, gas flow, thermostats, relays, contactors, fan systems, griddle controls, charbroiler sections, door switches, and heavy-use wear points so the range can perform safely under demanding conditions.</p>
        </>
      )
    },
    {
      id: "zline-range-repair",
      title: "ZLINE Range Repair",
      heading: "ZLINE Range Repair",
      /*img: "/range-repair/zline-range-repair.webp",*/
      alt: "ZLINE range repair technician servicing a professional range",
      description: (
        <>
          <p>Our <strong>ZLINE range repair</strong> service covers ZLINE gas ranges, dual fuel ranges, induction ranges, Autograph Edition ranges, professional-style ranges, and range ovens with convection, air fry, self-clean, and decorative accent finishes. ZLINE repairs often involve both performance and finish-sensitive handling.</p>
          <h3>ZLINE Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Air fry and true convection failures caused by fan, element, sensor, or relay problems</li>
            <li>✅ Gas burners with weak ignition, uneven flame, or delayed lighting</li>
            <li>✅ Bake element, igniter, gas valve, relay, or sensor failure in the oven cavity</li>
            <li>✅ Door lock, self-clean, gasket, hinge, or cooling fan issues</li>
            <li>✅ Display, control board, selector knob, or timer problems</li>
            <li>✅ Autograph Edition handles, brass accents, and decorative trim requiring careful protection</li>
          </ul>
          <h3>How We Fix These ZLINE Range Issues</h3>
          <p>We test the exact failed cooking function, including burners, convection, air fry, broil, bake, self-clean, and induction. We also protect ZLINE handles, brass accents, and finish details during service.</p>
        </>
      )
    },
    {
      id: "fisher-paykel-range-repair",
      title: "Fisher & Paykel Range Repair",
      heading: "Fisher & Paykel Range Repair",
      /*img: "/range-repair/fisher-paykel-range-repair.webp",*/
      alt: "Fisher and Paykel range repair technician servicing a professional range",
      description: (
        <>
          <p>We provide <strong>Fisher & Paykel range repair</strong> for Series 7, Series 9, and Series 11 ranges, Contemporary, Minimal, and Professional cooking appliances, gas ranges, dual fuel ranges, induction ranges, range ovens, and cooktop/oven combinations. Fisher & Paykel ranges often involve AeroTech airflow, induction electronics, guided cooking, and clean integrated controls.</p>
          <h3>Fisher & Paykel Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ AeroTech fan, rear element, or sensor issues affecting even oven heat distribution</li>
            <li>✅ Induction zones failing to detect cookware or shutting off during cooking</li>
            <li>✅ Gas burner ignition, flame sensing, and simmer-control issues</li>
            <li>✅ Touchscreen, guided cooking, control-module, or temperature probe faults</li>
            <li>✅ Self-clean, door lock, cooling fan, and built-in ventilation problems</li>
            <li>✅ Flush or minimal-style installation concerns affecting airflow and service access</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Range Issues</h3>
          <p>We test AeroTech airflow, oven sensors, probes, gas burners, induction boards, touch controls, cooling fans, door locks, and installation ventilation so the repair matches the specific Fisher & Paykel range platform.</p>
        </>
      )
    },
    {
      id: "wolf-range-repair",
      title: "Wolf Range Repair",
      heading: "Wolf Range Repair",
      /*img: "/range-repair/wolf-range-repair.webp",*/
      alt: "Wolf range repair technician servicing a luxury dual fuel range",
      description: (
        <>
          <p>Our <strong>Wolf range repair</strong> service covers Wolf dual fuel ranges, gas ranges, induction ranges, sealed burner rangetops, M Series and E Series range-related ovens, griddles, charbroilers, infrared broilers, and professional cooking systems. Wolf range service often involves exact diagnosis of dual-stacked burners, convection systems, probes, relays, and heavy-use components.</p>
          <h3>Wolf Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dual-stacked burners with clicking, weak simmer, uneven flame, or ignition delay</li>
            <li>✅ M Series convection relay faults, probe errors, or Dual VertiCross airflow issues in range ovens</li>
            <li>✅ Infrared broiler, bake burner, or oven igniter problems on gas and dual fuel ranges</li>
            <li>✅ Griddle, charbroiler, or French top heat recovery concerns</li>
            <li>✅ Door lock, cooling fan, temperature sensor, relay, or control module issues</li>
            <li>✅ Heavy door, gasket, hinge, and professional trim wear in high-use kitchens</li>
          </ul>
          <h3>How We Fix These Wolf Range Issues</h3>
          <p>We test Wolf burners, spark modules, gas valves, simmer settings, oven relays, probes, convection circuits, broilers, griddle systems, cooling fans, and door seals while protecting built-in cabinetry and stainless finishes.</p>
        </>
      )
    },
    {
      id: "thermador-range-repair",
      title: "Thermador Range Repair",
      heading: "Thermador Range Repair",
      /*img: "/range-repair/thermador-range-repair.webp",*/
      alt: "Thermador range repair technician servicing a professional range",
      description: (
        <>
          <p>We provide <strong>Thermador range repair</strong> for Pro Harmony ranges, Pro Grand ranges, Professional Series ranges, Masterpiece cooking appliances, dual fuel ranges, gas ranges, induction ranges, steam ovens, speed ovens, and Star Burner cooktops. Thermador repairs often involve Star Burner ignition, steam descaling, probes, and professional oven systems.</p>
          <h3>Thermador Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Star Burners clicking, lighting unevenly, or showing weak flame after spills or debris buildup</li>
            <li>✅ Pro Harmony and Pro Grand range oven ignition, bake burner, broiler, and temperature issues</li>
            <li>✅ Steam oven limescale buildup, descaling lockouts, water reservoir, or drainage problems</li>
            <li>✅ Speed oven microwave/convection mode failures or turntable issues</li>
            <li>✅ Probe, relay board, sensor, Home Connect, or control-panel communication faults</li>
            <li>✅ Door lock, cooling fan, self-clean, and ventilation issues in large pro ranges</li>
          </ul>
          <h3>How We Fix These Thermador Range Issues</h3>
          <p>We inspect Star Burners, spark electrodes, gas valves, oven ignition, steam systems, probes, sensors, relays, controls, fans, and built-in ventilation. We diagnose Pro range ovens separately from wall oven or speed oven systems.</p>
        </>
      )
    },
    {
      id: "viking-range-repair",
      title: "Viking Range Repair",
      heading: "Viking Range Repair",
      /*img: "/range-repair/viking-range-repair.webp",*/
      alt: "Viking range repair technician servicing a luxury professional range",
      description: (
        <>
          <p>Our <strong>Viking range repair</strong> service covers Viking 3 Series, 5 Series, 7 Series, RVL, Professional ranges, gas ranges, dual fuel ranges, French-door ovens, griddles, rangetops, and legacy Viking cooking appliances. Viking range issues often involve gas igniters, oven sensors, convection fans, heavy hinges, and pro-style burner systems.</p>
          <h3>Viking Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Weak gas oven igniters that glow but do not draw enough current to open the gas valve fully</li>
            <li>✅ Top burners clicking, delayed ignition, or uneven flame from igniter, valve, or burner issues</li>
            <li>✅ Convection fan, oven sensor, thermostat, relay, or control faults causing uneven baking</li>
            <li>✅ French-door oven hinge alignment, door closure, and gasket problems</li>
            <li>✅ Self-clean, door lock, cooling fan, and temperature probe malfunctions</li>
            <li>✅ Legacy Viking parts differences between older Professional models and newer 3, 5, and 7 Series units</li>
          </ul>
          <h3>How We Fix These Viking Range Issues</h3>
          <p>We test igniter amp draw, gas valve response, burner ignition, oven sensors, fans, relays, hinges, door seals, griddle systems, and series-specific parts compatibility before repair.</p>
        </>
      )
    },
    {
      id: "monogram-range-repair",
      title: "Monogram Range Repair",
      heading: "Monogram Range Repair",
      /*img: "/range-repair/monogram-range-repair.webp",*/
      alt: "Monogram range repair technician servicing a luxury range",
      description: (
        <>
          <p>We provide <strong>Monogram range repair</strong> for Statement and Minimalist ranges, dual fuel ranges, all-gas ranges, induction cooking appliances, range ovens, and Advantium or wall oven cooking systems often paired with Monogram ranges. Monogram service often involves premium built-in design, smart controls, precision cooking, and mode-specific diagnostics.</p>
          <h3>Monogram Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Range oven ignition, broiler, bake element, temperature probe, or sensor problems</li>
            <li>✅ Top burner ignition, simmer-control, or uneven flame issues on gas ranges</li>
            <li>✅ Induction zone cookware detection, overheating, or power-board issues</li>
            <li>✅ Advantium speedcook, convection, and microwave mode failures when paired in Monogram cooking suites</li>
            <li>✅ Touchscreen, relay, control board, cooling fan, and cabinet ventilation concerns</li>
            <li>✅ Statement and Minimalist finish, handle, and panel protection during service</li>
          </ul>
          <h3>How We Fix These Monogram Range Issues</h3>
          <p>We diagnose Monogram by platform: gas range, dual fuel range, induction range, Advantium, or wall oven. We test burners, valves, sensors, probes, relays, fans, controls, and ventilation while protecting premium panels and handles.</p>
        </>
      )
    },
    {
      id: "signature-kitchen-suite-range-repair",
      title: "Signature Kitchen Suite Range Repair",
      heading: "Signature Kitchen Suite Range Repair",
      /*img: "/range-repair/signature-kitchen-suite-range-repair.webp",*/
      alt: "Signature Kitchen Suite range repair technician servicing a luxury pro range",
      description: (
        <>
          <p>Our <strong>Signature Kitchen Suite range repair</strong> service covers SKS pro ranges, 36-inch and 48-inch dual fuel ranges, gas burners, induction zones, built-in sous vide modules, steam-combi ovens, speed ovens, and wall oven cooking systems. SKS ranges can combine several cooking technologies in one appliance.</p>
          <h3>Signature Kitchen Suite Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Steam-combi oven water fill, drain, pump, valve, and steam-generation problems</li>
            <li>✅ Built-in sous vide, induction, or gas burner sections not responding correctly</li>
            <li>✅ ProHeat convection fan, sensor, and airflow issues in range ovens</li>
            <li>✅ Speed oven microwave, convection, or broil mode failures</li>
            <li>✅ Touchscreen, connected controls, relay, probe, and module communication problems</li>
            <li>✅ Dual fuel range issues where gas cooktop systems and electric oven systems must be diagnosed separately</li>
          </ul>
          <h3>How We Fix These Signature Kitchen Suite Range Issues</h3>
          <p>We test each SKS technology separately: gas burners, induction zones, sous vide, steam-combi, convection, speed oven, probes, sensors, pumps, valves, relays, and connected controls.</p>
        </>
      )
    },
    {
      id: "hestan-range-repair",
      title: "Hestan Range Repair",
      heading: "Hestan Range Repair",
      /*img: "/range-repair/hestan-range-repair.webp",*/
      alt: "Hestan range repair technician servicing a luxury gas range",
      description: (
        <>
          <p>We provide <strong>Hestan range repair</strong> for Hestan all-gas ranges, dual fuel ranges, KRG and KRD models, sealed burner rangetops, griddles, PureVection ovens, and professional residential cooking suites. Hestan ranges are high-output appliances with heavy-duty doors, precision probes, and powerful burner assemblies.</p>
          <h3>Hestan Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ PureVection fan, rear heat, sensor, or airflow issues affecting baking consistency</li>
            <li>✅ Gas oven ignition, safety valve, bake burner, and broiler problems on all-gas ranges</li>
            <li>✅ Top burner ignition, simmer, flame stability, or gas valve issues</li>
            <li>✅ Dual fuel range problems where electric oven components and gas cooktop systems must be separated</li>
            <li>✅ Temperature probe, thermostat, relay, and precision cooking concerns</li>
            <li>✅ Door gasket, hinge, heavy-door alignment, and ventilation issues in high-heat installations</li>
          </ul>
          <h3>How We Fix These Hestan Range Issues</h3>
          <p>We test PureVection airflow, gas ignition, oven burners, top burners, elements, sensors, probes, relays, hinges, griddles, and ventilation clearances to restore Hestan’s high-output cooking performance.</p>
        </>
      )
    },
    {
      id: "dacor-range-repair",
      title: "Dacor Range Repair",
      heading: "Dacor Range Repair",
      /*img: "/range-repair/dacor-range-repair.webp",*/
      alt: "Dacor range repair technician servicing a luxury range",
      description: (
        <>
          <p>Our <strong>Dacor range repair</strong> service covers Modernist, Contemporary, Heritage, Discovery, Renaissance, gas ranges, dual fuel ranges, range ovens, steam ovens, speed ovens, and built-in cooking systems. Dacor repairs often involve legacy parts, Pure Convection systems, touch controls, probes, and generation-specific components.</p>
          <h3>Dacor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Four-Part Pure Convection fan, element, relay, and sensor issues on Dacor ovens</li>
            <li>✅ Top burner ignition, gas valve, and simmer-control problems on Dacor ranges</li>
            <li>✅ Legacy Discovery, Renaissance, and Heritage touchpad or control-panel failures</li>
            <li>✅ Modernist and Contemporary display, relay board, probe, and communication issues</li>
            <li>✅ Door lock, self-clean, cooling fan, gasket, or hinge problems</li>
            <li>✅ Parts availability differences between older Dacor units and newer Samsung-era Dacor products</li>
          </ul>
          <h3>How We Fix These Dacor Range Issues</h3>
          <p>We identify the Dacor generation first, then inspect burners, valves, convection components, control boards, touchpads, probes, relays, door systems, and legacy part availability.</p>
        </>
      )
    },
    {
      id: "big-chill-range-repair",
      title: "Big Chill Range Repair",
      heading: "Big Chill Range Repair",
      /*img: "/range-repair/big-chill-range-repair.webp",*/
      alt: "Big Chill range repair technician servicing a retro luxury range",
      description: (
        <>
          <p>We provide <strong>Big Chill range repair</strong> for Retro, Classic, and Pro-style ranges, gas stoves, induction ranges, electric cooking appliances, and colorful luxury kitchen installations. Big Chill service requires careful handling because the appliance’s color, chrome, and retro finish are often central to the kitchen design.</p>
          <h3>Big Chill Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burner ignition, bake burner, broiler, and safety-valve issues on Retro and Classic ranges</li>
            <li>✅ Convection fan, sensor, relay, and element issues on Pro-style range ovens</li>
            <li>✅ Induction zone detection, overheating, or control problems on induction models</li>
            <li>✅ Door gasket, hinge, and heat-retention concerns on retro-style doors</li>
            <li>✅ Custom color panel, chrome trim, and handle protection during disassembly</li>
            <li>✅ Parts matching between Big Chill Retro, Classic, and Pro-style lines</li>
          </ul>
          <h3>How We Fix These Big Chill Range Issues</h3>
          <p>We protect the finish first, then diagnose burners, ignition, gas valves, elements, fans, sensors, door seals, induction modules, and controls. We verify the product line before ordering parts.</p>
        </>
      )
    },
    {
      id: "elmira-stove-works-range-repair",
      title: "Elmira Stove Works Range Repair",
      heading: "Elmira Stove Works Range Repair",
      /*img: "/range-repair/elmira-stove-works-range-repair.webp",*/
      alt: "Elmira Stove Works range repair technician servicing a vintage style range",
      description: (
        <>
          <p>Our <strong>Elmira Stove Works range repair</strong> service supports Northstar, Heritage, 1880-style, vintage-inspired ranges, dual fuel ranges, convection ovens, and retro appliance suites. Elmira ranges combine modern cooking systems with vintage styling, specialty panels, chrome trim, and period-style details.</p>
          <h3>Elmira Stove Works Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Vintage-style door, hinge, chrome trim, and gasket issues affecting heat retention and appearance</li>
            <li>✅ Range oven ignition, thermostat, burner, or element problems</li>
            <li>✅ Convection fan, sensor, relay, and self-clean concerns on oven models</li>
            <li>✅ Timer, selector, knob, and control problems on retro-style appliances</li>
            <li>✅ Top burner ignition, gas valve, or flame pattern issues</li>
            <li>✅ Parts identification for older, specialty, or custom Elmira configurations</li>
          </ul>
          <h3>How We Fix These Elmira Stove Works Range Issues</h3>
          <p>We diagnose the oven and cooktop systems while preserving the vintage look. Door alignment, trim protection, gasket condition, burner performance, model identification, and parts compatibility are especially important on Elmira ranges.</p>
        </>
      )
    },
    {
      id: "smeg-range-repair",
      title: "Smeg Range Repair",
      heading: "Smeg Range Repair",
      /*img: "/range-repair/smeg-range-repair.webp",*/
      alt: "Smeg range repair technician servicing an Italian range",
      description: (
        <>
          <p>We provide <strong>Smeg range repair</strong> for Smeg all-gas ranges, dual fuel ranges, induction ranges, retro-inspired ranges, built-in ovens, and European cooking appliances. Smeg ranges often use European controls, designer panels, fan-assisted ovens, specialty modes, and compact installation layouts.</p>
          <h3>Smeg Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Function selector, thermostat, timer, and European-control issues on multifunction range ovens</li>
            <li>✅ Fan-assisted cooking, grill, broil, steam, or speed-cooking mode failures</li>
            <li>✅ Gas burner ignition, burner ports, thermocouple, and flame-safety issues</li>
            <li>✅ Induction zone cookware detection, overheating, or touch-control problems</li>
            <li>✅ Door gasket, hinge, and interior light issues on retro and built-in models</li>
            <li>✅ Designer panel, stainless, or retro-finish protection during service</li>
          </ul>
          <h3>How We Fix These Smeg Range Issues</h3>
          <p>We test the selected cooking function, oven selector, thermostat, fan, grill, ignition components, induction electronics, gas valves, door seals, and cabinet ventilation while protecting Smeg’s design-forward panels.</p>
        </>
      )
    },
    {
      id: "heartland-range-repair",
      title: "Heartland Range Repair",
      heading: "Heartland Range Repair",
      /*img: "/range-repair/heartland-range-repair.webp",*/
      alt: "Heartland range repair technician servicing a retro classic range",
      description: (
        <>
          <p>Our <strong>Heartland range repair</strong> service is designed for legacy Heartland ranges, classic gas ranges, electric ranges, dual fuel ranges, retro-style ranges, and discontinued Heartland cooking appliances. Heartland range service often involves older controls, discontinued parts, and careful preservation of retro design.</p>
          <h3>Heartland Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Discontinued or legacy parts that require careful model and serial-number confirmation</li>
            <li>✅ Gas burner ignition, bake burner, broiler, thermocouple, and safety-valve problems</li>
            <li>✅ Electric element, thermostat, selector, wiring, and timer issues on older ranges</li>
            <li>✅ Door gasket, hinge, and heat-retention wear on long-service retro-style ovens</li>
            <li>✅ Control knob, trim, panel, and finish issues where replacement parts may be limited</li>
            <li>✅ Repair-versus-replacement planning for appliances homeowners want to preserve for kitchen design reasons</li>
          </ul>
          <h3>How We Fix These Heartland Range Issues</h3>
          <p>We focus on safe diagnosis, parts compatibility, and preservation. We inspect burners, valves, igniters, oven controls, thermostats, wiring, gaskets, hinges, and trim while verifying the exact model before repair.</p>
        </>
      )
    },
    {
      id: "asko-range-repair",
      title: "ASKO Range Repair",
      heading: "ASKO Range Repair",
      /*img: "/range-repair/asko-range-repair.webp",*/
      alt: "ASKO range repair technician servicing a European cooking appliance",
      description: (
        <>
          <p>We provide <strong>ASKO range repair</strong> support for ASKO built-in ovens, pyrolytic ovens, multifunction ovens, combined steam ovens, compact microwave ovens, cooktops, and European cooking installations arranged as a range-style cooking zone. ASKO is usually installed as built-in oven and cooktop components rather than a traditional pro range.</p>
          <h3>ASKO Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Pyrolytic self-clean lock, high-limit, and door-lock problems</li>
            <li>✅ Combined steam oven water fill, drain, limescale, pump, or valve concerns</li>
            <li>✅ Compact microwave oven mode-switching, fan, or control issues</li>
            <li>✅ Cooktop power, control, or ventilation problems in European-format installations</li>
            <li>✅ Telescopic guide, rack support, door alignment, and gasket concerns</li>
            <li>✅ Built-in cabinet heat and ventilation problems in flush cooking layouts</li>
          </ul>
          <h3>How We Fix These ASKO Range Issues</h3>
          <p>We identify whether the ASKO issue is in the oven, steam system, compact oven, cooktop, self-clean lock, or installation airflow. Then we test controls, fans, elements, sensors, water components, doors, and ventilation.</p>
        </>
      )
    },
    {
      id: "bosch-range-repair",
      title: "Bosch Range Repair",
      heading: "Bosch Range Repair",
      /*img: "/range-repair/bosch-range-repair.webp",*/
      alt: "Bosch range repair technician servicing a slide-in range",
      description: (
        <>
          <p>Our <strong>Bosch range repair</strong> service covers Bosch 500 Series, 800 Series, Benchmark Series, slide-in ranges, induction ranges, gas ranges, electric ranges, speed ovens, steam ovens, and built-in cooking systems. Bosch ranges are common in high-end remodels where European controls, flush installation, and cooling airflow matter.</p>
          <h3>Bosch Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not detecting cookware, shutting off, or showing power-board errors</li>
            <li>✅ Gas burner ignition clicking, weak flame, or delayed lighting on Bosch gas ranges</li>
            <li>✅ Speed oven microwave/convection functions not coordinating correctly</li>
            <li>✅ Steam oven water, pump, valve, drain, and descaling-related issues</li>
            <li>✅ Control panel, relay board, sensor, door lock, cooling fan, or error-code problems</li>
            <li>✅ Side-opening door alignment, hinge, gasket, and latch concerns on selected Bosch ovens</li>
          </ul>
          <h3>How We Fix These Bosch Range Issues</h3>
          <p>We diagnose Bosch by platform: gas range, induction range, electric range, steam oven, speed oven, or wall oven. We inspect burners, induction boards, sensors, locks, water systems, fans, relays, controls, and installation airflow.</p>
        </>
      )
    },
    {
      id: "jennair-range-repair",
      title: "JennAir Range Repair",
      heading: "JennAir Range Repair",
      /*img: "/range-repair/jennair-range-repair.webp",*/
      alt: "JennAir range repair technician servicing a luxury range",
      description: (
        <>
          <p>We provide <strong>JennAir range repair</strong> for RISE and NOIR ranges, dual fuel ranges, gas ranges, induction ranges, downdraft ranges, wall ovens, microwave combination ovens, and professional-style cooking appliances. JennAir ranges often involve V2 Dual-Fan Convection, assisted cooking, connected controls, probes, and premium panel finishes.</p>
          <h3>JennAir Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ V2 Dual-Fan Convection problems involving fan synchronization, rear heat, sensor, or airflow</li>
            <li>✅ Downdraft airflow, fan, filter, or venting issues on JennAir downdraft range systems</li>
            <li>✅ Gas burner ignition, simmer, valve, or flame stability problems</li>
            <li>✅ Culinary Center, assisted cooking, probe, and connected-control communication faults</li>
            <li>✅ Touch display, relay, control board, self-clean, door lock, and cooling fan issues</li>
            <li>✅ RISE and NOIR handle, panel, and trim protection during service</li>
          </ul>
          <h3>How We Fix These JennAir Range Issues</h3>
          <p>We test JennAir convection fans, downdraft ventilation, gas burners, induction boards, probes, sensors, relays, touch controls, door locks, and connected features while protecting RISE and NOIR finishes.</p>
        </>
      )
    },
    {
      id: "kalamazoo-outdoor-range-repair",
      title: "Kalamazoo Outdoor Range Repair",
      heading: "Kalamazoo Outdoor Range Repair",
      /*img: "/range-repair/kalamazoo-outdoor-range-repair.webp",*/
      alt: "Kalamazoo outdoor range repair technician servicing a luxury outdoor cooking station",
      description: (
        <>
          <p>Our <strong>Kalamazoo outdoor range repair</strong> service covers Kalamazoo outdoor cooking stations, hybrid fire grills, power burners, side burners, pizza ovens, built-in outdoor kitchens, and high-heat luxury cooking systems. Outdoor range-style systems are affected by gas delivery, ventilation, weather exposure, and refractory or stainless components.</p>
          <h3>Kalamazoo Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Hybrid fire burners, power burners, or side burners with weak flame or ignition delay</li>
            <li>✅ Artisan Fire Pizza Oven burner, regulator, gas valve, and heat-recovery problems</li>
            <li>✅ Refractory stone or high-temperature surface heat imbalance</li>
            <li>✅ Outdoor kitchen enclosure ventilation, clearance, and gas-line sizing issues</li>
            <li>✅ Weather exposure, corrosion, thermometer, and control wear</li>
            <li>✅ Hybrid cooking systems where grill, burner, and oven functions interact</li>
          </ul>
          <h3>How We Fix These Kalamazoo Outdoor Range Issues</h3>
          <p>We inspect gas delivery, burner output, ignition, regulators, refractory heat surfaces, ventilation, weather-related wear, and outdoor enclosure conditions so the cooking station operates safely.</p>
        </>
      )
    },
    {
      id: "lynx-outdoor-range-repair",
      title: "Lynx Outdoor Range Repair",
      heading: "Lynx Outdoor Range Repair",
      /*img: "/range-repair/lynx-outdoor-range-repair.webp",*/
      alt: "Lynx outdoor range repair technician servicing a luxury outdoor cooking appliance",
      description: (
        <>
          <p>We provide <strong>Lynx outdoor range repair</strong> for Lynx built-in grills, side burners, power burners, Napoli Outdoor Ovens, freestanding carts, and luxury outdoor kitchen cooking systems. Lynx outdoor range systems require careful diagnosis of infrared burners, ignition, gas pressure, ventilation, and weather exposure.</p>
          <h3>Lynx Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Trident or infrared burners with weak output, ignition issues, or uneven heat</li>
            <li>✅ Napoli oven infrared burner, regulator, gas valve, or pizza stone heat imbalance</li>
            <li>✅ Side burner or power burner flame instability and delayed ignition</li>
            <li>✅ Cart-mounted versus built-in installation problems affecting gas supply and airflow</li>
            <li>✅ Weather-related corrosion around burners, fasteners, and control areas</li>
            <li>✅ Ventilation and clearance issues inside custom outdoor kitchen islands</li>
          </ul>
          <h3>How We Fix These Lynx Outdoor Range Issues</h3>
          <p>We test infrared heat output, gas pressure, ignition, burner assemblies, regulators, airflow, refractory surfaces, and installation clearances before recommending parts or adjustment.</p>
        </>
      )
    },
    {
      id: "alfresco-outdoor-range-repair",
      title: "Alfresco Outdoor Range Repair",
      heading: "Alfresco Outdoor Range Repair",
      /*img: "/range-repair/alfresco-outdoor-range-repair.webp",*/
      alt: "Alfresco outdoor range repair technician servicing a built-in outdoor cooking station",
      description: (
        <>
          <p>Our <strong>Alfresco outdoor range repair</strong> service covers Alfresco grills, side burners, Versa Power burners, Pizza Oven Plus, sear zones, rotisserie systems, and premium outdoor kitchen installations. Alfresco cooking systems depend on strong gas output, ignition reliability, insulation, and enclosure ventilation.</p>
          <h3>Alfresco Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Pizza Oven Plus rear burner, infrared hearth, igniter, and gas-valve issues</li>
            <li>✅ Versa Power or side burners not reaching proper high-output cooking temperature</li>
            <li>✅ Sear zone, rotisserie, or grill burner ignition and flame stability problems</li>
            <li>✅ Uneven heat from the hearth, ceramic ceiling surface, or burner assembly</li>
            <li>✅ Outdoor corrosion and moisture exposure around ignition and burner components</li>
            <li>✅ Built-in enclosure ventilation, clearance, regulator, or gas pressure issues</li>
          </ul>
          <h3>How We Fix These Alfresco Outdoor Range Issues</h3>
          <p>We inspect burner output, infrared heat, hearth performance, gas pressure, ignition, regulators, insulation, rotisserie systems, ventilation, and weather-exposed parts.</p>
        </>
      )
    },
    {
      id: "fire-magic-outdoor-range-repair",
      title: "Fire Magic Outdoor Range Repair",
      heading: "Fire Magic Outdoor Range Repair",
      /*img: "/range-repair/fire-magic-outdoor-range-repair.webp",*/
      alt: "Fire Magic outdoor range repair technician servicing a built-in outdoor cooking appliance",
      description: (
        <>
          <p>We provide <strong>Fire Magic outdoor range repair</strong> for Fire Magic grills, power burners, side burners, Aurora and Echelon pizza ovens, outdoor cooking stations, and built-in luxury outdoor kitchens. Fire Magic systems may include thermostatic controls, electronic ignition, flame sensing, ceramic glass, and smart features.</p>
          <h3>Fire Magic Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Power burner, side burner, or grill burner ignition and flame stability issues</li>
            <li>✅ Outdoor pizza oven thermostatic control, electronic ignition, flame rectification, or gas valve problems</li>
            <li>✅ Temperature swing problems when the thermostat, sensor, or burner output is inconsistent</li>
            <li>✅ Control panel, smart feature, wiring, or power-supply problems on newer models</li>
            <li>✅ Outdoor corrosion around burners, wiring, fasteners, and control housings</li>
            <li>✅ Ventilation and clearance issues inside outdoor kitchen enclosures</li>
          </ul>
          <h3>How We Fix These Fire Magic Outdoor Range Issues</h3>
          <p>We test ignition, flame sensing, gas delivery, thermostats, controls, wiring, burners, regulators, ceramic glass, and built-in enclosure conditions so the outdoor range system performs safely.</p>
        </>
      )
    },
    {
      id: "dcs-range-repair",
      title: "DCS Range Repair",
      heading: "DCS Range Repair",
      /*img: "/range-repair/dcs-range-repair.webp",*/
      alt: "DCS range repair technician servicing a premium range or outdoor cooking appliance",
      description: (
        <>
          <p>Our <strong>DCS range repair</strong> service supports legacy DCS indoor ranges, DCS wall ovens, DCS gas cooking appliances, and DCS outdoor kitchen systems used for roasting, baking, grilling, searing, and rotisserie cooking. DCS diagnosis depends on whether the appliance is an indoor legacy range or part of an outdoor cooking setup.</p>
          <h3>DCS Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Legacy DCS range oven bake, broil, fan bake, door lock, and self-clean issues</li>
            <li>✅ Top burner ignition, gas valve, burner, and flame stability problems</li>
            <li>✅ Temperature sensor, relay, element, fan, and control faults on older indoor DCS units</li>
            <li>✅ Outdoor grill-based roasting, baking, or rotisserie heat problems</li>
            <li>✅ Infrared burner, regulator, ignition, and weather-related outdoor issues</li>
            <li>✅ Parts availability differences between legacy indoor ranges and current outdoor cooking products</li>
          </ul>
          <h3>How We Fix These DCS Range Issues</h3>
          <p>We identify the DCS platform first, then test burners, heating elements, gas systems, sensors, relays, fans, ignition, regulators, controls, and outdoor ventilation depending on the model.</p>
        </>
      )
    },
    {
      id: "twin-eagles-outdoor-range-repair",
      title: "Twin Eagles Outdoor Range Repair",
      heading: "Twin Eagles Outdoor Range Repair",
      /*img: "/range-repair/twin-eagles-outdoor-range-repair.webp",*/
      alt: "Twin Eagles outdoor range repair technician servicing a premium outdoor cooking appliance",
      description: (
        <>
          <p>We provide <strong>Twin Eagles outdoor range repair</strong> for premium outdoor cooking systems used for grilling, searing, side-burner cooking, rotisserie cooking, baking, roasting, and pizza-style high-heat performance. Twin Eagles service often involves gas delivery, infrared components, ignition, lighting, rotisserie systems, and outdoor exposure.</p>
          <h3>Twin Eagles Outdoor Range Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Infrared burner, rotisserie burner, searing zone, and high-heat cooking performance issues</li>
            <li>✅ Gas valve, regulator, igniter, burner, and flame-stability problems</li>
            <li>✅ Pizza-stone, roasting, or oven-style heat performance problems inside outdoor cooking systems</li>
            <li>✅ Control knob, thermometer, lighting, and wiring issues from outdoor exposure</li>
            <li>✅ Ventilation and enclosure clearance concerns in built-in outdoor kitchens</li>
            <li>✅ Corrosion, moisture exposure, and seasonal maintenance needs around burners and controls</li>
          </ul>
          <h3>How We Fix These Twin Eagles Outdoor Range Issues</h3>
          <p>We inspect gas delivery, burner output, infrared heat, ignition, rotisserie components, lighting, controls, airflow, enclosure ventilation, and corrosion-prone areas so the outdoor cooking system performs safely.</p>
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
