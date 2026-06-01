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
          id: "aga-stove-repair",
          title: "AGA Stove Repair",
          heading: "AGA Stove Repair",
          img: "/stove-repair/aga-stove-repair.webp",
          alt: "AGA stove repair technician servicing a luxury AGA cooker",
          description: (
            <>
              <p>We provide <strong>AGA stove repair</strong> for traditional AGA cookers, AGA Total Control, AGA Dual Control, AGA eR7, AGA R7, AGA Mercury, AGA Elise, and AGA range-style cooking appliances. AGA stoves are different from ordinary stoves because many models depend on radiant heat, cast-iron heat retention, simmering plates, boiling plates, gas burners, electric elements, and model-specific control systems.</p>
              <h3>AGA Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Boiling plate or simmering plate not getting hot enough on traditional AGA cookers</li>
                <li>✅ Total Control, Dual Control, eR7, or R7 zones not responding correctly</li>
                <li>✅ Heat-storage performance dropping after years of use, even when the cooker still feels warm</li>
                <li>✅ Gas burner ignition, flame stability, or gas regulation issues on AGA range models</li>
                <li>✅ Worn door seals, lid seals, insulation, or heat-retention parts causing slow recovery and uneven cooking</li>
                <li>✅ Older AGA parts identification issues where fuel type, conversion history, and serial number matter</li>
              </ul>
              <h3>How We Fix These AGA Stove Issues</h3>
              <p>Our technicians separate traditional cast-iron AGA diagnosis from newer AGA range diagnosis. We inspect the hotplate zones, burner ignition, controls, safety limits, thermostats, seals, insulation, and heat-retention performance before recommending a repair path.</p>
            </>
          )
        },
        {
          id: "bertazzoni-stove-repair",
          title: "Bertazzoni Stove Repair",
          heading: "Bertazzoni Stove Repair",
          /*img: "/stove-repair/bertazzoni-stove-repair.webp",*/
          alt: "Bertazzoni stove repair technician servicing an Italian luxury range",
          description: (
            <>
              <p>Our <strong>Bertazzoni stove repair</strong> service covers Professional Series, Master Series, Heritage Series, gas ranges, dual fuel ranges, induction ranges, cooktops, and rangetops. Bertazzoni stoves combine Italian design with brass burners, electronic ignition, safety systems, induction electronics, and series-specific parts.</p>
              <h3>Bertazzoni Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Burners clicking continuously after cleaning, spills, or moisture around the igniters</li>
                <li>✅ Brass burner caps or bases not seated correctly, causing uneven flame or delayed ignition</li>
                <li>✅ Weak ignition from worn spark electrodes, ignition switches, or spark modules</li>
                <li>✅ Low simmer or flame adjustment problems on sealed gas burners</li>
                <li>✅ Induction surface errors, overheating warnings, or cookware-detection problems on induction ranges</li>
                <li>✅ Series-specific parts differences between Professional, Master, and Heritage models</li>
              </ul>
              <h3>How We Fix These Bertazzoni Stove Issues</h3>
              <p>We inspect burner cap seating, igniters, spark switches, spark modules, gas valves, flame pattern, induction modules, cooling fans, and model-specific part numbers. For Bertazzoni stoves, correct series identification is important before ordering parts.</p>
            </>
          )
        },
        {
          id: "fulgor-milano-stove-repair",
          title: "Fulgor Milano Stove Repair",
          heading: "Fulgor Milano Stove Repair",
          /*img: "/stove-repair/fulgor-milano-stove-repair.webp",*/
          alt: "Fulgor Milano stove repair technician servicing a premium Italian range",
          description: (
            <>
              <p>We service <strong>Fulgor Milano stove repair</strong> needs for Sofia professional ranges, Sofia induction ranges, Distinto cooktops, gas rangetops, dual fuel ranges, all-gas ranges, and induction cooking surfaces. These stoves often use European controls, electronic ignition, cooling systems, induction modules, and precision burner layouts.</p>
              <h3>Fulgor Milano Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Sofia gas burners producing uneven flame because of burner cap seating, clogged ports, or gas valve issues</li>
                <li>✅ Igniters clicking without lighting after cleaning or liquid spills</li>
                <li>✅ Induction zones shutting off, failing to detect cookware, or showing control errors</li>
                <li>✅ Cooling fan or ventilation issues under induction cooking surfaces</li>
                <li>✅ Knob, selector, or electronic control issues on professional-style ranges</li>
                <li>✅ Parts sourcing delays on less common Fulgor Milano models when the exact model number is not verified</li>
              </ul>
              <h3>How We Fix These Fulgor Milano Stove Issues</h3>
              <p>We test gas ignition, burner ports, valves, induction boards, touch controls, cooling airflow, wiring, and safety circuits. We verify the model and series before recommending parts because Fulgor Milano components can vary by generation.</p>
            </>
          )
        },
        {
          id: "gaggenau-stove-repair",
          title: "Gaggenau Stove Repair",
          heading: "Gaggenau Stove Repair",
          /*img: "/stove-repair/gaggenau-stove-repair.webp",*/
          alt: "Gaggenau stove repair technician servicing a luxury cooktop",
          description: (
            <>
              <p>Our <strong>Gaggenau stove repair</strong> service covers 400 Series and 200 Series gas cooktops, induction cooktops, flex induction surfaces, modular Vario cooktops, Teppan Yaki modules, wok burners, and downdraft-integrated cooking systems. Gaggenau stove repair is often about precision electronics, ventilation clearance, and exact module diagnosis.</p>
              <h3>Gaggenau Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Flex induction zones not detecting cookware or shutting down under load</li>
                <li>✅ Touch controls locking, becoming unresponsive, or showing error behavior</li>
                <li>✅ Vario modules with individual power, wiring, or control faults</li>
                <li>✅ High-output wok burners with weak flame, ignition delay, or flame-sensing issues</li>
                <li>✅ Downdraft or cabinet ventilation affecting induction cooling and heat management</li>
                <li>✅ Parts matching challenges because Gaggenau modular cooking systems are highly model-specific</li>
              </ul>
              <h3>How We Fix These Gaggenau Stove Issues</h3>
              <p>We diagnose Gaggenau by module: gas, induction, flex induction, Vario, wok, or Teppan Yaki. We inspect controls, power supply, cooling fans, induction boards, burner ignition, gas valves, and surrounding ventilation before replacing parts.</p>
            </>
          )
        },
        {
          id: "ilve-stove-repair",
          title: "ILVE Stove Repair",
          heading: "ILVE Stove Repair",
          /*img: "/stove-repair/ilve-stove-repair.webp",*/
          alt: "ILVE stove repair technician servicing an Italian dual fuel range",
          description: (
            <>
              <p>We provide <strong>ILVE stove repair</strong> for Majestic, Nostalgie, Panoramagic, Professional Plus, dual fuel ranges, all-gas ranges, induction ranges, griddles, French tops, and brass burner cooktops. ILVE stoves often need careful service because of their decorative finishes, brass parts, heavy doors, and European control layout.</p>
              <h3>ILVE Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Brass burners with uneven flame because burner caps, rings, or ports are not seated or cleaned correctly</li>
                <li>✅ Igniters clicking continuously after cleaning, moisture, or food debris reaches the ignition area</li>
                <li>✅ Knobs, bezels, and selector controls loosening or becoming difficult to operate</li>
                <li>✅ French top or griddle sections heating unevenly or not recovering heat properly</li>
                <li>✅ Induction zones showing cookware detection, overheating, or touch-control issues</li>
                <li>✅ Door, hinge, and gasket issues that can affect nearby range performance and owner perception of the appliance</li>
              </ul>
              <h3>How We Fix These ILVE Stove Issues</h3>
              <p>We inspect ILVE burners, caps, rings, spark electrodes, ignition switches, gas valves, induction modules, griddle or French top heating, and decorative trim. We protect brass, enamel, chrome, and custom color finishes during service.</p>
            </>
          )
        },
        {
          id: "lacanche-stove-repair",
          title: "Lacanche Stove Repair",
          heading: "Lacanche Stove Repair",
          /*img: "/stove-repair/lacanche-stove-repair.webp",*/
          alt: "Lacanche stove repair technician servicing a French luxury range",
          description: (
            <>
              <p>Our <strong>Lacanche stove repair</strong> service supports Cluny, Sully, Savigny, Volnay, Chagny, Cormatin, Citeaux, and custom Lacanche French ranges. Lacanche stoves may include gas burners, electric plates, French tops, simmer plates, planchas, warming cupboards, and custom cooktop layouts.</p>
              <h3>Lacanche Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners with uneven flame, delayed ignition, or weak simmer performance</li>
                <li>✅ Thermocouple and safety-valve problems that cause burners to shut off after lighting</li>
                <li>✅ French top, simmer plate, or plancha heat distribution issues</li>
                <li>✅ Knob, valve, and control stiffness on hand-built ranges with long service life</li>
                <li>✅ Custom cooktop layouts where each burner or plate needs separate diagnosis</li>
                <li>✅ Parts identification challenges because Lacanche ranges are often custom-configured</li>
              </ul>
              <h3>How We Fix These Lacanche Stove Issues</h3>
              <p>We map the exact Lacanche cooktop configuration, then test burners, thermocouples, gas valves, simmer settings, ignition, electric plates, and specialty modules. We also protect enamel, brass, and custom finishes while working on the range.</p>
            </>
          )
        },
        {
          id: "la-cornue-stove-repair",
          title: "La Cornue Stove Repair",
          heading: "La Cornue Stove Repair",
          /*img: "/stove-repair/la-cornue-stove-repair.webp",*/
          alt: "La Cornue stove repair technician servicing a luxury French range",
          description: (
            <>
              <p>We specialize in <strong>La Cornue stove repair</strong> for Château, CornuFé, CornuChef, Grand Palais, Le Château 75, Château 90, Château 120, Château 150, Château 165, and custom La Cornue range configurations. La Cornue stoves may include gas burners, induction zones, French tops, lava rock grills, griddles, and bespoke cooking surfaces.</p>
              <h3>La Cornue Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Yellow flame, uneven flame, or soot caused by burner cap position, air mixture, gas pressure, or clogged burner ports</li>
                <li>✅ Burners lighting slowly or going out because of thermocouple, safety-valve, or ignition issues</li>
                <li>✅ French top or griddle heat patterns that feel uneven if the plate, burner, or gas setting is not performing correctly</li>
                <li>✅ CornuFé ignition, indicator light, knob, or spark-module problems</li>
                <li>✅ Custom trim and finish concerns where repair access must be planned carefully</li>
                <li>✅ Parts matching differences between Château, CornuFé, and custom range configurations</li>
              </ul>
              <h3>How We Fix These La Cornue Stove Issues</h3>
              <p>We inspect flame color, burner ports, caps, gas pressure, air shutters where applicable, thermocouples, valves, igniters, and specialty cooking surfaces. For La Cornue, we also protect enamel, brass, chrome, nickel, and custom color finishes during diagnosis.</p>
            </>
          )
        },
        {
          id: "miele-stove-repair",
          title: "Miele Stove Repair",
          heading: "Miele Stove Repair",
          /*img: "/stove-repair/miele-stove-repair.webp",*/
          alt: "Miele stove repair technician servicing a luxury induction cooktop",
          description: (
            <>
              <p>We provide <strong>Miele stove repair</strong> for Miele induction cooktops, gas cooktops, electric cooktops, SmartLine modules, ProLine modules, flush-mounted cooking surfaces, and range-style cooking appliances. Miele stove repair often involves electronic controls, induction power modules, cooling airflow, and precise installation requirements.</p>
              <h3>Miele Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Induction zones not recognizing cookware or shutting off during cooking</li>
                <li>✅ Touch controls locking, beeping, or becoming unresponsive after spills or control faults</li>
                <li>✅ Cooling fan or ventilation issues under flush-mounted induction cooktops</li>
                <li>✅ Gas burner ignition clicking, delayed lighting, or weak flame on Miele gas cooktops</li>
                <li>✅ SmartLine or ProLine modules with individual power, wiring, or control communication issues</li>
                <li>✅ Glass top cracks, edge damage, or installation tension that must be evaluated before repair</li>
              </ul>
              <h3>How We Fix These Miele Stove Issues</h3>
              <p>We test Miele induction modules, cookware detection, touch controls, cooling fans, power supply, burner ignition, gas valves, and installation airflow. For flush installations, we also check whether ventilation and cabinet clearances are contributing to the problem.</p>
            </>
          )
        },
        {
          id: "officine-gullo-stove-repair",
          title: "Officine Gullo Stove Repair",
          heading: "Officine Gullo Stove Repair",
          /*img: "/stove-repair/officine-gullo-stove-repair.webp",*/
          alt: "Officine Gullo stove repair technician servicing a bespoke luxury range",
          description: (
            <>
              <p>Our <strong>Officine Gullo stove repair</strong> service is designed for bespoke Italian ranges, custom cooking suites, professional rangetops, gas burners, griddles, fry tops, French tops, pasta cookers, and made-to-order kitchen installations. These stoves are often custom-built, so diagnosis starts with understanding the exact layout.</p>
              <h3>Officine Gullo Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Custom burner layouts where each burner, valve, igniter, or safety component may be different</li>
                <li>✅ Gas ignition, flame stability, thermocouple, or safety-valve issues on professional-style burners</li>
                <li>✅ Griddle, fry top, French top, or specialty module heat distribution problems</li>
                <li>✅ Heavy knobs, brass trim, copper, nickel, and stainless finishes requiring careful disassembly</li>
                <li>✅ Ventilation and heat-management issues in large custom cooking suites</li>
                <li>✅ Parts identification challenges because many Officine Gullo installations are bespoke</li>
              </ul>
              <h3>How We Fix These Officine Gullo Stove Issues</h3>
              <p>We document the cooking surface layout, fuel type, controls, finish, and access points before service. We test burners, valves, ignition, safety systems, griddles, specialty modules, and ventilation while protecting handcrafted metal finishes.</p>
            </>
          )
        },
        {
          id: "american-range-stove-repair",
          title: "American Range Stove Repair",
          heading: "American Range Stove Repair",
          /*img: "/stove-repair/american-range-stove-repair.webp",*/
          alt: "American Range stove repair technician servicing a pro-style range",
          description: (
            <>
              <p>We provide <strong>American Range stove repair</strong> for Performer Series, Cuisine Series, Legend Series, Medallion Series, residential pro-style ranges, rangetops, griddles, charbroilers, and commercial-style cooking equipment. American Range stoves are built for high-output cooking and heavy use.</p>
              <h3>American Range Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ High-output burners with ignition delay, weak flame, or uneven flame pattern</li>
                <li>✅ Gas valves, regulators, or burner assemblies affected by heavy use and grease buildup</li>
                <li>✅ Griddle or charbroiler sections not heating evenly or recovering heat slowly</li>
                <li>✅ Pilot, spark ignition, or safety system issues depending on model type</li>
                <li>✅ Knob, valve stem, drip tray, grate, and burner-head wear from frequent cooking</li>
                <li>✅ Residential versus commercial American Range parts differences that must be confirmed before repair</li>
              </ul>
              <h3>How We Fix These American Range Stove Issues</h3>
              <p>We test gas pressure, ignition, burner assemblies, valves, griddles, charbroilers, regulators, and heavy-use wear points. We also confirm whether the unit is residential, commercial-style, or commercial equipment before ordering parts.</p>
            </>
          )
        },
        {
          id: "bluestar-stove-repair",
          title: "BlueStar Stove Repair",
          heading: "BlueStar Stove Repair",
          /*img: "/stove-repair/bluestar-stove-repair.webp",*/
          alt: "BlueStar stove repair technician servicing a pro-style open burner range",
          description: (
            <>
              <p>Our <strong>BlueStar stove repair</strong> service covers Platinum Series, RNB Series, RCS Series, Precious Metals, open-burner ranges, sealed-burner ranges, rangetops, griddles, charbroilers, and custom color appliances. BlueStar stoves are known for high-output open burners and pro-style cooking performance.</p>
              <h3>BlueStar Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Open burners with uneven flame because burner ports, venturi tubes, or caps need cleaning or adjustment</li>
                <li>✅ Igniters sparking weakly or clicking continuously after spills or cleaning</li>
                <li>✅ Burner flame too high, too low, or unstable from gas valve, regulator, or air-mix issues</li>
                <li>✅ Griddle or charbroiler sections heating unevenly or failing to recover heat</li>
                <li>✅ Heavy cast grates, drip trays, and burner bowls showing wear from high-heat cooking</li>
                <li>✅ Custom color panels and enamel surfaces that need protection during service</li>
              </ul>
              <h3>How We Fix These BlueStar Stove Issues</h3>
              <p>We inspect BlueStar open burners, sealed burners, igniters, spark modules, gas valves, regulators, air shutters, griddles, and charbroilers. We also handle custom color panels and pro-style trim carefully.</p>
            </>
          )
        },
        {
          id: "fivestar-stove-repair",
          title: "FiveStar Stove Repair",
          heading: "FiveStar Stove Repair",
          /*img: "/stove-repair/fivestar-stove-repair.webp",*/
          alt: "FiveStar stove repair technician servicing a professional gas range",
          description: (
            <>
              <p>We service <strong>FiveStar stove repair</strong> for gas ranges, dual fuel ranges, sealed burner ranges, griddle and grill configurations, side-by-side range layouts, and legacy pro-style FiveStar cooking appliances. Many FiveStar stoves are older, so parts compatibility and safe operation are key.</p>
              <h3>FiveStar Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Legacy burner ignition issues involving spark electrodes, modules, switches, or wiring</li>
                <li>✅ Gas burners that light but will not hold steady flame because of valve or burner assembly wear</li>
                <li>✅ Griddle or grill sections not heating evenly or failing to ignite reliably</li>
                <li>✅ Control knobs, valve stems, and burner assemblies worn from long service life</li>
                <li>✅ Older gasket, trim, drip pan, and grate parts that may be harder to source</li>
                <li>✅ Parts matching challenges on discontinued or less common FiveStar configurations</li>
              </ul>
              <h3>How We Fix These FiveStar Stove Issues</h3>
              <p>We inspect ignition, burners, gas valves, switches, wiring, griddle and grill sections, and model-specific parts. For older FiveStar ranges, we verify compatibility before recommending replacement components.</p>
            </>
          )
        },
        {
          id: "thor-stove-repair",
          title: "Thor Stove Repair",
          heading: "Thor Kitchen Stove Repair",
          /*img: "/stove-repair/thor-stove-repair.webp",*/
          alt: "Thor Kitchen stove repair technician servicing a professional range",
          description: (
            <>
              <p>We provide <strong>Thor Kitchen stove repair</strong> for professional gas ranges, dual fuel ranges, electric ranges, induction ranges, rangetops, sealed burner cooktops, griddles, and pro-style cooking suites. Thor stoves often combine commercial-style design with electronic ignition, induction modules, and stainless cooking surfaces.</p>
              <h3>Thor Kitchen Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners clicking but not lighting because of spark electrode, ignition switch, or moisture issues</li>
                <li>✅ Flame pattern problems caused by burner cap seating, clogged ports, or valve adjustment needs</li>
                <li>✅ Induction zones not recognizing cookware or shutting down during cooking</li>
                <li>✅ Griddle sections heating unevenly or taking too long to recover</li>
                <li>✅ Knob, display, relay, or control-board issues on electric and induction models</li>
                <li>✅ Model-specific parts matching across Thor gas, dual fuel, electric, and induction platforms</li>
              </ul>
              <h3>How We Fix These Thor Kitchen Stove Issues</h3>
              <p>We identify the fuel type first, then inspect burners, igniters, switches, valves, induction modules, control boards, griddles, and stainless surfaces so the repair fits the exact Thor stove configuration.</p>
            </>
          )
        },
        {
          id: "forno-stove-repair",
          title: "Forno Stove Repair",
          heading: "Forno Stove Repair",
          /*img: "/stove-repair/forno-stove-repair.webp",*/
          alt: "Forno stove repair technician servicing a modern range",
          description: (
            <>
              <p>Our <strong>Forno stove repair</strong> service covers Forno gas ranges, dual fuel ranges, induction ranges, cooktops, rangetops, sealed burner systems, and large-capacity pro-style cooking appliances. Forno stoves often require exact model verification because controls, burners, and parts vary by series.</p>
              <h3>Forno Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Burners clicking continuously or lighting slowly after moisture reaches the ignition area</li>
                <li>✅ Uneven flame from burner cap misalignment, clogged ports, or gas valve issues</li>
                <li>✅ Induction zones with cookware detection, touch-control, or overheating problems</li>
                <li>✅ Control knob, selector, display, or relay issues depending on model generation</li>
                <li>✅ Grate, burner cap, trim, and stainless finish wear from heavy use</li>
                <li>✅ Parts lookup challenges when the model number is incomplete or the series is unclear</li>
              </ul>
              <h3>How We Fix These Forno Stove Issues</h3>
              <p>We verify the Forno model and series, then test ignition, burners, valves, induction boards, cooling airflow, controls, and surface components. Correct parts matching is especially important before repair.</p>
            </>
          )
        },
        {
          id: "garland-stove-repair",
          title: "Garland Stove Repair",
          heading: "Garland Stove Repair",
          /*img: "/stove-repair/garland-stove-repair.webp",*/
          alt: "Garland commercial stove repair technician servicing a heavy duty range",
          description: (
            <>
              <p>We provide <strong>Garland stove repair</strong> for commercial ranges, Master Series heavy-duty ranges, gas burners, griddles, charbroilers, hot tops, and restaurant-style cooking equipment installed in private estates, chef kitchens, event spaces, and commercial kitchens. Garland stoves are designed for heavy use and high heat recovery.</p>
              <h3>Garland Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Pilot, burner, safety valve, and gas pressure issues on heavy-duty range sections</li>
                <li>✅ Griddle or hot top temperature problems caused by thermostat, burner, or gas-flow faults</li>
                <li>✅ Charbroiler burners clogged by grease, debris, or heavy-use buildup</li>
                <li>✅ Knob, valve stem, grate, drip tray, and burner wear from repeated commercial use</li>
                <li>✅ High-load electrical or gas connection concerns on mixed cooking equipment</li>
                <li>✅ Service access differences between commercial kitchen equipment and residential installations</li>
              </ul>
              <h3>How We Fix These Garland Stove Issues</h3>
              <p>We inspect pilots, burners, gas valves, thermostats, griddles, charbroilers, regulators, and heavy-use wear points. We focus on safe operation, heat recovery, and the exact Garland equipment configuration.</p>
            </>
          )
        },
        {
          id: "zline-stove-repair",
          title: "ZLINE Stove Repair",
          heading: "ZLINE Stove Repair",
          /*img: "/stove-repair/zline-stove-repair.webp",*/
          alt: "ZLINE stove repair technician servicing a professional range",
          description: (
            <>
              <p>Our <strong>ZLINE stove repair</strong> service covers ZLINE gas ranges, dual fuel ranges, induction ranges, rangetops, cooktops, Autograph Edition models, sealed burners, brass burners, and pro-style cooking appliances. ZLINE stoves often combine decorative finishes with modern ignition and induction systems.</p>
              <h3>ZLINE Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Brass or sealed burners with weak ignition, uneven flame, or cap-seating problems</li>
                <li>✅ Autograph Edition handles, knobs, and decorative trim that need careful handling during service</li>
                <li>✅ Induction zones with touch-control, cookware detection, or overheating faults</li>
                <li>✅ Spark module, igniter, gas valve, or burner port problems on gas models</li>
                <li>✅ Control display, selector, or relay issues on electric and induction models</li>
                <li>✅ Parts matching differences between ZLINE gas, dual fuel, induction, and rangetop products</li>
              </ul>
              <h3>How We Fix These ZLINE Stove Issues</h3>
              <p>We test the failing cooking surface by fuel type: gas, dual fuel, induction, or electric. We inspect ignition, burner seating, gas valves, induction boards, controls, and trim protection before repair.</p>
            </>
          )
        },
        {
          id: "fisher-paykel-stove-repair",
          title: "Fisher & Paykel Stove Repair",
          heading: "Fisher & Paykel Stove Repair",
          /*img: "/stove-repair/fisher-paykel-stove-repair.webp",*/
          alt: "Fisher and Paykel stove repair technician servicing a luxury cooktop",
          description: (
            <>
              <p>We provide <strong>Fisher & Paykel stove repair</strong> for Series 7, Series 9, and Series 11 gas cooktops, induction cooktops, dual fuel ranges, professional ranges, and integrated cooking surfaces. Fisher & Paykel stoves often use precise flame control, induction electronics, guided cooking features, and clean built-in layouts.</p>
              <h3>Fisher & Paykel Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners clicking, delayed lighting, or producing uneven flame after spills or burner cap misalignment</li>
                <li>✅ Induction zones not detecting cookware or shutting off from cooling or module faults</li>
                <li>✅ Touch controls, lock functions, or display issues on induction cooktops</li>
                <li>✅ Professional range burner, simmer, or ignition problems on Series 9 and Series 11 units</li>
                <li>✅ Flush installation ventilation issues affecting induction module cooling</li>
                <li>✅ Parts differences between Contemporary, Minimal, and Professional style cooking products</li>
              </ul>
              <h3>How We Fix These Fisher & Paykel Stove Issues</h3>
              <p>We inspect Fisher & Paykel burners, caps, igniters, gas valves, induction modules, cooling fans, touch controls, and installation airflow. We verify the series before ordering parts.</p>
            </>
          )
        },
        {
          id: "wolf-stove-repair",
          title: "Wolf Stove Repair",
          heading: "Wolf Stove Repair",
          /*img: "/stove-repair/wolf-stove-repair.webp",*/
          alt: "Wolf stove repair technician servicing a luxury gas range",
          description: (
            <>
              <p>Our <strong>Wolf stove repair</strong> service covers Wolf dual fuel ranges, gas ranges, sealed burner rangetops, gas cooktops, induction cooktops, electric cooktops, griddles, charbroilers, French tops, and outdoor cooking surfaces. Wolf stoves are known for dual-stacked burners, precise simmer, and heavy-duty cooking surfaces.</p>
              <h3>Wolf Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Dual-stacked burners with weak simmer, uneven flame, or delayed ignition</li>
                <li>✅ Burner clicking after cleaning because moisture reaches igniters or spark switches</li>
                <li>✅ Griddle, charbroiler, or French top sections not heating evenly or recovering heat properly</li>
                <li>✅ Induction modules not detecting cookware, overheating, or showing control faults</li>
                <li>✅ Knob, spark module, valve, or burner-base issues on professional rangetops</li>
                <li>✅ Heavy grates, burner caps, and stainless surfaces needing careful cleaning and alignment</li>
              </ul>
              <h3>How We Fix These Wolf Stove Issues</h3>
              <p>We test dual-stacked burner performance, spark ignition, burner seating, gas valves, simmer adjustment, griddle or charbroiler heat, induction modules, and control systems. Wolf stove repair often requires mode-specific testing, not just a basic burner check.</p>
            </>
          )
        },
        {
          id: "thermador-stove-repair",
          title: "Thermador Stove Repair",
          heading: "Thermador Stove Repair",
          /*img: "/stove-repair/thermador-stove-repair.webp",*/
          alt: "Thermador stove repair technician servicing a professional range",
          description: (
            <>
              <p>We provide <strong>Thermador stove repair</strong> for Professional Series, Masterpiece Series, Pro Harmony ranges, Pro Grand ranges, gas rangetops, Star Burner cooktops, induction cooktops, Freedom induction, griddles, grills, and electric cooking surfaces. Thermador stoves require attention to Star Burners, ExtraLow simmer systems, induction electronics, and professional rangetop components.</p>
              <h3>Thermador Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Star Burners with uneven flame, clogged ports, or burner cap seating issues</li>
                <li>✅ ExtraLow simmer cycling problems where the burner does not maintain the expected low heat behavior</li>
                <li>✅ Igniters clicking continuously after cleaning, spills, or switch failure</li>
                <li>✅ Freedom induction or induction zones not detecting pans, overheating, or showing control errors</li>
                <li>✅ Griddle or grill modules not heating evenly on Pro Grand and Pro Harmony models</li>
                <li>✅ Control, spark module, gas valve, or burner-base issues specific to Thermador professional cooking products</li>
              </ul>
              <h3>How We Fix These Thermador Stove Issues</h3>
              <p>We inspect Star Burner alignment, ignition, spark switches, ExtraLow simmer function, gas valves, induction modules, griddle or grill heat, and controls. We separate Pro range diagnosis from Masterpiece cooktop diagnosis because the systems are different.</p>
            </>
          )
        },
        {
          id: "viking-stove-repair",
          title: "Viking Stove Repair",
          heading: "Viking Stove Repair",
          /*img: "/stove-repair/viking-stove-repair.webp",*/
          alt: "Viking stove repair technician servicing a luxury range",
          description: (
            <>
              <p>Our <strong>Viking stove repair</strong> service covers Viking 3 Series, 5 Series, 7 Series, RVL, Professional gas ranges, dual fuel ranges, sealed burner rangetops, open burner legacy ranges, induction cooktops, griddles, and grills. Viking stoves often need careful burner, igniter, valve, and heavy-use component diagnosis.</p>
              <h3>Viking Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Burners clicking but not lighting because of worn igniters, spark modules, or wet ignition switches</li>
                <li>✅ Weak or uneven flame from clogged burner ports, cap misalignment, or valve issues</li>
                <li>✅ Griddle and grill sections heating unevenly or failing to recover heat</li>
                <li>✅ Knob, valve stem, grate, and burner assembly wear on older Professional ranges</li>
                <li>✅ Induction cooktops with cookware detection, touch-control, or overheating issues</li>
                <li>✅ Parts differences between legacy Viking Professional units and newer 3, 5, 7, and RVL Series appliances</li>
              </ul>
              <h3>How We Fix These Viking Stove Issues</h3>
              <p>We test ignition, spark modules, burner assemblies, gas valves, griddles, grills, induction electronics, and heavy-use wear points. For Viking, we identify the series before ordering parts because components vary widely by generation.</p>
            </>
          )
        },
        {
          id: "monogram-stove-repair",
          title: "Monogram Stove Repair",
          heading: "Monogram Stove Repair",
          /*img: "/stove-repair/monogram-stove-repair.webp",*/
          alt: "Monogram stove repair technician servicing a luxury rangetop",
          description: (
            <>
              <p>We provide <strong>Monogram stove repair</strong> for Statement and Minimalist gas cooktops, induction cooktops, professional ranges, rangetops, dual fuel ranges, and Advantium-adjacent cooking installations. Monogram stoves often combine premium built-in design with electronic ignition, induction controls, and professional burner systems.</p>
              <h3>Monogram Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Sealed burners clicking, lighting slowly, or producing uneven flame after spills or cap misalignment</li>
                <li>✅ Induction zones not recognizing cookware or shutting down from module or cooling issues</li>
                <li>✅ Touch controls, lock functions, and display issues on newer Monogram cooktops</li>
                <li>✅ Professional rangetop griddle, grill, or high-output burner performance concerns</li>
                <li>✅ Knob, valve, spark module, and control-board faults depending on the cooking platform</li>
                <li>✅ Flush installation and ventilation issues on integrated Monogram cooktops</li>
              </ul>
              <h3>How We Fix These Monogram Stove Issues</h3>
              <p>We identify whether the appliance is a gas cooktop, induction cooktop, rangetop, or professional range. Then we test ignition, burners, gas valves, induction boards, touch controls, ventilation, and high-output modules.</p>
            </>
          )
        },
        {
          id: "signature-kitchen-suite-stove-repair",
          title: "Signature Kitchen Suite Stove Repair",
          heading: "Signature Kitchen Suite Stove Repair",
          /*img: "/stove-repair/signature-kitchen-suite-stove-repair.webp",*/
          alt: "Signature Kitchen Suite stove repair technician servicing a luxury range",
          description: (
            <>
              <p>Our <strong>Signature Kitchen Suite stove repair</strong> service covers SKS pro ranges, dual fuel ranges, gas cooktops, induction cooktops, rangetops, wok burners, griddles, and ranges with built-in sous vide or induction features. SKS stoves often require diagnosis of mixed cooking technologies in one appliance.</p>
              <h3>Signature Kitchen Suite Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Dual fuel range issues where gas burners and electric/induction systems must be diagnosed separately</li>
                <li>✅ Induction zones not detecting cookware, overheating, or showing touch-control errors</li>
                <li>✅ High-output gas burners with ignition, flame stability, or valve problems</li>
                <li>✅ Griddle, wok burner, or specialty cooking module performance issues</li>
                <li>✅ Connected controls, display, or module communication problems</li>
                <li>✅ Parts matching between SKS pro ranges, gas cooktops, induction cooktops, and transitional models</li>
              </ul>
              <h3>How We Fix These Signature Kitchen Suite Stove Issues</h3>
              <p>We test SKS cooking systems by function: gas burner, induction zone, griddle, wok burner, or connected-control system. This prevents a mixed-technology appliance from being misdiagnosed as a basic stove problem.</p>
            </>
          )
        },
        {
          id: "hestan-stove-repair",
          title: "Hestan Stove Repair",
          heading: "Hestan Stove Repair",
          /*img: "/stove-repair/hestan-stove-repair.webp",*/
          alt: "Hestan stove repair technician servicing a luxury gas range",
          description: (
            <>
              <p>We provide <strong>Hestan stove repair</strong> for Hestan all-gas ranges, dual fuel ranges, KRG and KRD models, rangetops, sealed burner systems, griddles, and luxury residential cooking suites. Hestan stoves use high-output burners, heavy-duty grates, professional controls, and precision cooking components.</p>
              <h3>Hestan Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ High-output burners with delayed ignition, uneven flame, or simmer-control problems</li>
                <li>✅ Gas valve, regulator, burner-base, or igniter issues on all-gas and dual fuel ranges</li>
                <li>✅ Griddle sections not heating evenly or not reaching proper temperature</li>
                <li>✅ Knob, valve stem, and heavy grate wear from frequent pro-style cooking</li>
                <li>✅ Ventilation and clearance concerns around high-heat rangetop installations</li>
                <li>✅ Parts matching between KRG, KRD, and other Hestan cooking configurations</li>
              </ul>
              <h3>How We Fix These Hestan Stove Issues</h3>
              <p>We inspect Hestan burners, igniters, gas valves, regulators, griddles, knobs, and ventilation clearances. We also verify the exact model family before selecting replacement parts.</p>
            </>
          )
        },
        {
          id: "dacor-stove-repair",
          title: "Dacor Stove Repair",
          heading: "Dacor Stove Repair",
          /*img: "/stove-repair/dacor-stove-repair.webp",*/
          alt: "Dacor stove repair technician servicing a luxury cooktop",
          description: (
            <>
              <p>Our <strong>Dacor stove repair</strong> service covers Modernist, Contemporary, Heritage, Discovery, Renaissance, gas cooktops, induction cooktops, dual fuel ranges, rangetops, and legacy Dacor cooking appliances. Dacor stove repair often involves identifying whether the unit is an older Dacor model or a newer Samsung-era Dacor product.</p>
              <h3>Dacor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Legacy Dacor gas burners with ignition, spark module, valve, or burner cap problems</li>
                <li>✅ Induction zones with cookware detection, cooling fan, or touch-control issues</li>
                <li>✅ Control panel, relay, sensor, or electronic module faults on newer Dacor models</li>
                <li>✅ Knob, trim, grate, and burner-base wear on older Heritage and Renaissance products</li>
                <li>✅ Parts availability differences between legacy Dacor and newer Dacor product lines</li>
                <li>✅ Gas rangetop and dual fuel range issues where burner systems and oven systems must be separated</li>
              </ul>
              <h3>How We Fix These Dacor Stove Issues</h3>
              <p>We identify the Dacor generation first, then test ignition, burners, valves, induction boards, touch controls, cooling airflow, and legacy parts compatibility before repair.</p>
            </>
          )
        },
        {
          id: "big-chill-stove-repair",
          title: "Big Chill Stove Repair",
          heading: "Big Chill Stove Repair",
          /*img: "/stove-repair/big-chill-stove-repair.webp",*/
          alt: "Big Chill stove repair technician servicing a retro luxury range",
          description: (
            <>
              <p>We provide <strong>Big Chill stove repair</strong> for Retro, Classic, and Pro-style ranges, gas stoves, induction stoves, electric stoves, cooktops, and colorful luxury kitchen installations. Big Chill stoves need both mechanical repair and finish-conscious handling because the appliance is often a design centerpiece.</p>
              <h3>Big Chill Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners with delayed ignition, uneven flame, or burner cap seating issues</li>
                <li>✅ Induction or electric cooking surfaces with control, element, or overheating problems</li>
                <li>✅ Chrome trim, custom color panels, handles, and knobs that require careful handling</li>
                <li>✅ Door, gasket, and range body alignment issues that can affect owner perception of the appliance</li>
                <li>✅ Parts matching between Retro, Classic, and Pro-style product lines</li>
                <li>✅ Finish-sensitive service where scratches, chips, or trim damage must be avoided</li>
              </ul>
              <h3>How We Fix These Big Chill Stove Issues</h3>
              <p>We protect the finish first, then diagnose the cooking system. We inspect burners, igniters, valves, induction modules, controls, trim, and model-specific parts so the repair preserves both function and appearance.</p>
            </>
          )
        },
        {
          id: "elmira-stove-works-stove-repair",
          title: "Elmira Stove Works Stove Repair",
          heading: "Elmira Stove Works Stove Repair",
          /*img: "/stove-repair/elmira-stove-works-stove-repair.webp",*/
          alt: "Elmira Stove Works stove repair technician servicing a vintage style range",
          description: (
            <>
              <p>Our <strong>Elmira Stove Works stove repair</strong> service supports Northstar, Heritage, 1880-style, vintage-inspired ranges, gas stoves, dual fuel ranges, electric cooking surfaces, and retro appliance suites. Elmira stoves often combine modern cooking systems with vintage panels, chrome details, and period-style trim.</p>
              <h3>Elmira Stove Works Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners with ignition delay, uneven flame, or cap and port issues</li>
                <li>✅ Electric or dual fuel cooking surfaces with element, selector, or control faults</li>
                <li>✅ Vintage-style knobs, chrome trim, panels, and handles needing careful service access</li>
                <li>✅ Door, hinge, gasket, and range body alignment concerns on retro-style units</li>
                <li>✅ Parts identification for older or specialty Elmira models</li>
                <li>✅ Finish preservation in kitchens where the appliance is part of the design theme</li>
              </ul>
              <h3>How We Fix These Elmira Stove Works Stove Issues</h3>
              <p>We diagnose the burner or cooktop system while protecting vintage-style details. We inspect ignition, gas valves, elements, selectors, trim, model numbers, and parts compatibility before repair.</p>
            </>
          )
        },
        {
          id: "smeg-stove-repair",
          title: "Smeg Stove Repair",
          heading: "Smeg Stove Repair",
          /*img: "/stove-repair/smeg-stove-repair.webp",*/
          alt: "Smeg stove repair technician servicing an Italian range",
          description: (
            <>
              <p>We provide <strong>Smeg stove repair</strong> for Smeg gas cooktops, induction cooktops, electric cooktops, dual fuel ranges, all-gas ranges, Portofino ranges, Classic ranges, and retro-inspired cooking appliances. Smeg stoves often use European controls, compact layouts, designer panels, and specialty burner arrangements.</p>
              <h3>Smeg Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Gas burners with ignition clicking, delayed lighting, or uneven flame after spills or cap misalignment</li>
                <li>✅ Function selectors, knobs, and European-style controls becoming stiff or unresponsive</li>
                <li>✅ Induction zones with cookware detection, touch-control, or overheating issues</li>
                <li>✅ Compact built-in cooktops with ventilation and heat-management problems</li>
                <li>✅ Designer panel, stainless, or retro-finish concerns during disassembly</li>
                <li>✅ Parts matching between Portofino, Classic, built-in, and retro-style Smeg products</li>
              </ul>
              <h3>How We Fix These Smeg Stove Issues</h3>
              <p>We inspect Smeg burners, igniters, selectors, controls, induction electronics, cooling airflow, gas valves, and finish-sensitive panels. We identify the exact product line before ordering parts.</p>
            </>
          )
        },
        {
          id: "heartland-stove-repair",
          title: "Heartland Stove Repair",
          heading: "Heartland Stove Repair",
          /*img: "/stove-repair/heartland-stove-repair.webp",*/
          alt: "Heartland stove repair technician servicing a retro classic range",
          description: (
            <>
              <p>Our <strong>Heartland stove repair</strong> service is designed for legacy Heartland ranges, classic gas stoves, electric ranges, dual fuel ranges, retro-style cooking appliances, and discontinued Heartland products. Heartland stove service often involves older controls, legacy parts, and preservation of the appliance’s classic appearance.</p>
              <h3>Heartland Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Older gas burners with ignition, burner cap, valve, or flame stability problems</li>
                <li>✅ Electric surface elements, selectors, wiring, or thermostatic controls failing with age</li>
                <li>✅ Knobs, trim, panels, and legacy controls that may be difficult to replace</li>
                <li>✅ Door, gasket, hinge, and range body wear on long-service appliances</li>
                <li>✅ Discontinued parts requiring careful model and serial-number verification</li>
                <li>✅ Repair-versus-replacement decisions when the owner wants to preserve the retro kitchen design</li>
              </ul>
              <h3>How We Fix These Heartland Stove Issues</h3>
              <p>We inspect the stove safely, confirm the model, identify available compatible parts, and repair ignition, burners, valves, electric elements, controls, and trim-sensitive components while preserving the appliance’s classic look.</p>
            </>
          )
        },
        {
          id: "asko-stove-repair",
          title: "ASKO Stove Repair",
          heading: "ASKO Stove Repair",
          /*img: "/stove-repair/asko-stove-repair.webp",*/
          alt: "ASKO stove repair technician servicing a European cooktop",
          description: (
            <>
              <p>We provide <strong>ASKO stove repair</strong> for ASKO induction cooktops, electric cooktops, gas cooktops where applicable, compact European cooking surfaces, and flush built-in kitchen installations. ASKO stove repair often centers on installation fit, electronic controls, induction modules, and heat management.</p>
              <h3>ASKO Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Induction zones not detecting cookware or shutting off during cooking</li>
                <li>✅ Touch controls locking, beeping, or becoming unresponsive after spills or electronic faults</li>
                <li>✅ Cooling fan or cabinet ventilation problems under flush-mounted cooktops</li>
                <li>✅ Electric elements, sensors, and controls failing on compact built-in cooking surfaces</li>
                <li>✅ Glass top or edge damage that needs careful evaluation before repair</li>
                <li>✅ European-format parts matching and model verification before replacement</li>
              </ul>
              <h3>How We Fix These ASKO Stove Issues</h3>
              <p>We inspect induction modules, cookware detection, touch controls, cooling fans, power supply, ventilation, and glass-top condition. For ASKO, installation airflow and exact model identification are especially important.</p>
            </>
          )
        },
        {
          id: "bosch-stove-repair",
          title: "Bosch Stove Repair",
          heading: "Bosch Stove Repair",
          /*img: "/stove-repair/bosch-stove-repair.webp",*/
          alt: "Bosch stove repair technician servicing a cooktop",
          description: (
            <>
              <p>Our <strong>Bosch stove repair</strong> service covers Bosch 500 Series, 800 Series, Benchmark Series, gas cooktops, induction cooktops, electric cooktops, slide-in ranges, and flush built-in cooking surfaces. Bosch stoves often involve induction electronics, touch controls, compact installation airflow, and European-style design.</p>
              <h3>Bosch Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Induction zones not detecting cookware, cycling off, or showing error behavior</li>
                <li>✅ Touch controls locking or becoming unresponsive after spills or control faults</li>
                <li>✅ Gas cooktop burners clicking continuously or lighting slowly from igniter or cap issues</li>
                <li>✅ Cooling fan or ventilation problems under flush-mounted induction cooktops</li>
                <li>✅ Glass top cracks, surface damage, or installation tension concerns</li>
                <li>✅ Parts differences between 500 Series, 800 Series, Benchmark, and slide-in range platforms</li>
              </ul>
              <h3>How We Fix These Bosch Stove Issues</h3>
              <p>We test Bosch induction boards, touch controls, cooling fans, power supply, gas igniters, burner caps, valves, and installation airflow. We identify the series before ordering parts.</p>
            </>
          )
        },
        {
          id: "jennair-stove-repair",
          title: "JennAir Stove Repair",
          heading: "JennAir Stove Repair",
          /*img: "/stove-repair/jennair-stove-repair.webp",*/
          alt: "JennAir stove repair technician servicing a luxury cooktop",
          description: (
            <>
              <p>We provide <strong>JennAir stove repair</strong> for RISE and NOIR gas cooktops, induction cooktops, electric cooktops, downdraft cooktops, professional ranges, and built-in cooking appliances. JennAir stove service often involves downdraft airflow, premium finishes, induction electronics, and touch controls.</p>
              <h3>JennAir Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Downdraft cooktop airflow problems, fan failures, or grease buildup affecting performance</li>
                <li>✅ Gas burners with ignition clicking, delayed lighting, or uneven flame from cap or igniter issues</li>
                <li>✅ Induction zones with cookware detection, touch-control, or overheating concerns</li>
                <li>✅ RISE and NOIR handles, knobs, panels, and finishes requiring careful service access</li>
                <li>✅ Control board, relay, sensor, or connected-control faults on newer cooking surfaces</li>
                <li>✅ Ventilation and installation issues where downdraft systems share space with cabinetry</li>
              </ul>
              <h3>How We Fix These JennAir Stove Issues</h3>
              <p>We inspect burners, ignition, induction modules, touch controls, downdraft fans, filters, ducting, control boards, and finish-sensitive parts. JennAir downdraft and RISE/NOIR appliances need a more installation-aware repair approach.</p>
            </>
          )
        },
        {
          id: "kalamazoo-outdoor-stove-repair",
          title: "Kalamazoo Outdoor Stove Repair",
          heading: "Kalamazoo Outdoor Stove Repair",
          /*img: "/stove-repair/kalamazoo-outdoor-stove-repair.webp",*/
          alt: "Kalamazoo outdoor stove repair technician servicing a luxury outdoor burner",
          description: (
            <>
              <p>Our <strong>Kalamazoo outdoor stove repair</strong> service covers Kalamazoo side burners, power burners, outdoor cooktops, hybrid fire cooking systems, built-in outdoor kitchen burners, and premium outdoor cooking stations. Kalamazoo outdoor stove issues are often tied to high heat, gas delivery, ventilation, and weather exposure.</p>
              <h3>Kalamazoo Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Side burner or power burner not lighting because of igniter, regulator, valve, or gas supply issues</li>
                <li>✅ High-output burner not reaching expected heat because of gas pressure or burner obstruction</li>
                <li>✅ Wind, moisture, corrosion, and outdoor exposure affecting ignition and flame stability</li>
                <li>✅ Built-in island ventilation or clearance problems around high-heat burners</li>
                <li>✅ Grease, debris, or insects obstructing outdoor burner ports or air openings</li>
                <li>✅ Seasonal maintenance needs before heavy outdoor kitchen use</li>
              </ul>
              <h3>How We Fix These Kalamazoo Outdoor Stove Issues</h3>
              <p>We inspect gas lines, regulators, burner ports, ignition, valves, ventilation, enclosure clearances, and weather-exposed components so the outdoor cooking station performs safely and consistently.</p>
            </>
          )
        },
        {
          id: "lynx-outdoor-stove-repair",
          title: "Lynx Outdoor Stove Repair",
          heading: "Lynx Outdoor Stove Repair",
          /*img: "/stove-repair/lynx-outdoor-stove-repair.webp",*/
          alt: "Lynx outdoor stove repair technician servicing a luxury side burner",
          description: (
            <>
              <p>We provide <strong>Lynx outdoor stove repair</strong> for Lynx side burners, power burners, double side burners, outdoor kitchen burner modules, and luxury built-in cooking systems. Lynx outdoor stoves are exposed to heat, moisture, corrosion, and gas-flow issues that indoor stoves do not experience.</p>
              <h3>Lynx Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Side burner not lighting or shutting off because of igniter, valve, regulator, or gas-flow issues</li>
                <li>✅ Weak flame from clogged burner ports, debris, insects, or low gas pressure</li>
                <li>✅ Outdoor corrosion around igniters, fasteners, burner bowls, and control areas</li>
                <li>✅ Built-in island ventilation or gas line sizing problems</li>
                <li>✅ Control knob, lighting, wiring, and ignition switch wear from weather exposure</li>
                <li>✅ Heat discoloration and surface wear from high-output outdoor cooking</li>
              </ul>
              <h3>How We Fix These Lynx Outdoor Stove Issues</h3>
              <p>We test ignition, burners, valves, regulators, gas pressure, ventilation, wiring, and corrosion-prone parts. We also check whether the built-in outdoor island is affecting airflow or service access.</p>
            </>
          )
        },
        {
          id: "alfresco-outdoor-stove-repair",
          title: "Alfresco Outdoor Stove Repair",
          heading: "Alfresco Outdoor Stove Repair",
          /*img: "/stove-repair/alfresco-outdoor-stove-repair.webp",*/
          alt: "Alfresco outdoor stove repair technician servicing a built-in side burner",
          description: (
            <>
              <p>Our <strong>Alfresco outdoor stove repair</strong> service covers Alfresco side burners, power burners, Versa Power cooking systems, built-in outdoor kitchen burners, and premium outdoor cooking modules. Alfresco outdoor stoves are designed for high output, so gas pressure and burner condition matter a lot.</p>
              <h3>Alfresco Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Versa Power or side burner not reaching full heat because of gas pressure, regulator, or burner obstruction</li>
                <li>✅ Ignition failure from moisture, corrosion, spark electrode wear, or switch issues</li>
                <li>✅ Burner ports clogged by grease, debris, or outdoor contamination</li>
                <li>✅ Built-in ventilation and clearance issues inside outdoor kitchen islands</li>
                <li>✅ Control knob, valve, and wiring wear from outdoor exposure</li>
                <li>✅ Seasonal performance decline when the burner has not been cleaned or serviced</li>
              </ul>
              <h3>How We Fix These Alfresco Outdoor Stove Issues</h3>
              <p>We inspect burner output, gas pressure, regulators, ignition, valves, wiring, ventilation, and weather-exposed parts. We also clean and evaluate burner ports before recommending replacement parts.</p>
            </>
          )
        },
        {
          id: "fire-magic-outdoor-stove-repair",
          title: "Fire Magic Outdoor Stove Repair",
          heading: "Fire Magic Outdoor Stove Repair",
          /*img: "/stove-repair/fire-magic-outdoor-stove-repair.webp",*/
          alt: "Fire Magic outdoor stove repair technician servicing a built-in burner",
          description: (
            <>
              <p>We provide <strong>Fire Magic outdoor stove repair</strong> for Fire Magic side burners, power burners, searing burners, outdoor kitchen burner modules, and built-in cooking appliances. Fire Magic stove issues often involve outdoor corrosion, ignition systems, gas pressure, and enclosure ventilation.</p>
              <h3>Fire Magic Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Power burner or side burner not lighting because of igniter, valve, regulator, or wiring issues</li>
                <li>✅ Uneven flame or low heat caused by clogged ports, gas pressure, or burner wear</li>
                <li>✅ Moisture and corrosion affecting ignition electrodes, wiring, or control housings</li>
                <li>✅ Built-in enclosure ventilation and clearance problems</li>
                <li>✅ Control knob, spark module, and gas valve wear from outdoor exposure</li>
                <li>✅ Seasonal maintenance issues after long periods of non-use</li>
              </ul>
              <h3>How We Fix These Fire Magic Outdoor Stove Issues</h3>
              <p>We test the ignition system, gas supply, regulator, burner ports, valves, wiring, enclosure airflow, and weather-exposed parts so the Fire Magic burner operates safely outdoors.</p>
            </>
          )
        },
        {
          id: "dcs-stove-repair",
          title: "DCS Stove Repair",
          heading: "DCS Stove Repair",
          /*img: "/stove-repair/dcs-stove-repair.webp",*/
          alt: "DCS stove repair technician servicing a premium cooktop or outdoor burner",
          description: (
            <>
              <p>Our <strong>DCS stove repair</strong> service supports legacy DCS cooktops, DCS gas ranges, sealed burner cooking appliances, outdoor side burners, power burners, and premium outdoor kitchen systems. DCS repair depends on whether the appliance is a legacy indoor unit or an outdoor cooking module.</p>
              <h3>DCS Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Legacy gas cooktop ignition, burner, valve, or control issues</li>
                <li>✅ Outdoor side burner or power burner not lighting because of igniter, regulator, or gas supply issues</li>
                <li>✅ Burner ports clogged by grease, debris, insects, or outdoor exposure</li>
                <li>✅ Valve stem, knob, grate, and burner bowl wear on older DCS products</li>
                <li>✅ Weather-related corrosion on outdoor DCS burner systems</li>
                <li>✅ Parts availability differences between older indoor DCS appliances and current outdoor products</li>
              </ul>
              <h3>How We Fix These DCS Stove Issues</h3>
              <p>We identify the DCS platform first, then inspect ignition, burners, gas valves, regulators, controls, wiring, and outdoor exposure points. Legacy units require extra parts verification before repair.</p>
            </>
          )
        },
        {
          id: "twin-eagles-outdoor-stove-repair",
          title: "Twin Eagles Outdoor Stove Repair",
          heading: "Twin Eagles Outdoor Stove Repair",
          /*img: "/stove-repair/twin-eagles-outdoor-stove-repair.webp",*/
          alt: "Twin Eagles outdoor stove repair technician servicing a premium side burner",
          description: (
            <>
              <p>We provide <strong>Twin Eagles outdoor stove repair</strong> for side burners, power burners, sear burners, outdoor cooking modules, and premium built-in outdoor kitchen systems. Twin Eagles outdoor stove issues usually involve high-output gas systems, ignition, weather exposure, and built-in island ventilation.</p>
              <h3>Twin Eagles Outdoor Stove Issues Our Techs See Most Frequently</h3>
              <ul>
                <li>✅ Power burner or side burner not lighting because of igniter, valve, regulator, or gas supply faults</li>
                <li>✅ Low flame, uneven flame, or poor heat recovery from clogged burners or pressure issues</li>
                <li>✅ Outdoor corrosion affecting ignition, wiring, burner bowls, or fasteners</li>
                <li>✅ Control knob, thermometer, lighting, or wiring problems from weather exposure</li>
                <li>✅ Ventilation and clearance problems inside custom outdoor kitchen enclosures</li>
                <li>✅ Seasonal maintenance needs around burners, drip trays, and gas connections</li>
              </ul>
              <h3>How We Fix These Twin Eagles Outdoor Stove Issues</h3>
              <p>We inspect gas delivery, burners, igniters, valves, regulators, wiring, ventilation, and corrosion-prone areas. For Twin Eagles outdoor kitchens, we also check the enclosure because airflow affects burner performance and safety.</p>
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
