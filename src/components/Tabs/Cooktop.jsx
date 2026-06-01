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
      id: "aga-cooktop-repair",
      title: "AGA Cooktop Repair",
      heading: "AGA Cooktop Repair",
      img: "/cooktop-repair/aga-cooktop-repair.webp",
      alt: "AGA cooktop repair technician servicing a luxury AGA cooking surface",
      description: (
        <>
          <p>We provide <strong>AGA cooktop repair</strong> for traditional AGA hotplates, boiling plates, simmering plates, gas hob modules, induction hobs, and cooking surfaces integrated into AGA cookers. AGA cooking surfaces are different from ordinary cooktops because many models depend on radiant heat retention, insulated hotplate assemblies, model-specific controls, and careful temperature recovery.</p>
          <h3>AGA Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Boiling plate or simmering plate not recovering heat the way it used to</li>
            <li>✅ Hotplate surface heating unevenly or taking too long to return to cooking temperature</li>
            <li>✅ Induction hob zones not recognizing cookware or shutting down during use</li>
            <li>✅ Gas hob burners clicking, lighting slowly, or producing an uneven flame</li>
            <li>✅ Worn lid seals, insulation, or internal components allowing unnecessary heat loss</li>
            <li>✅ Older AGA model identification issues where serial number, fuel type, and prior conversions matter</li>
          </ul>
          <h3>How We Fix These AGA Cooktop Issues</h3>
          <p>Our technicians separate traditional radiant-hotplate diagnosis from modern gas and induction hob diagnosis. We inspect hotplate recovery, controls, thermostats, insulation, lid seals, ignition components, burner assemblies, induction electronics, and the exact AGA configuration before recommending repair.</p>
        </>
      )
    },
    {
      id: "bertazzoni-cooktop-repair",
      title: "Bertazzoni Cooktop Repair",
      heading: "Bertazzoni Cooktop Repair",
      /*img: "/cooktop-repair/bertazzoni-cooktop-repair.webp",*/
      alt: "Bertazzoni cooktop repair technician servicing an Italian luxury cooktop",
      description: (
        <>
          <p>Our <strong>Bertazzoni cooktop repair</strong> service covers Professional Series and Master Series rangetops, drop-in gas cooktops, induction cooktops, induction rangetops, and induction cooktops with downdraft ventilation. Bertazzoni cooking surfaces combine Italian styling with brass burners, cast-iron grates, induction electronics, touch controls, and series-specific parts.</p>
          <h3>Bertazzoni Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Brass burner caps or bases not seated correctly, causing clicking, delayed ignition, or uneven flame</li>
            <li>✅ Igniters clicking continuously after cleaning, spills, or moisture around the burner area</li>
            <li>✅ Gas burners producing a weak simmer or inconsistent high-output flame</li>
            <li>✅ Induction zones failing to detect cookware, shutting down, or displaying control errors</li>
            <li>✅ Downdraft airflow, blower, or filter problems on induction downdraft models</li>
            <li>✅ Parts differences between Professional and Master Series units that make exact model identification important</li>
          </ul>
          <h3>How We Fix These Bertazzoni Cooktop Issues</h3>
          <p>We inspect burner cap seating, spark electrodes, ignition switches, spark modules, gas valves, regulators, induction power boards, touch controls, cooling airflow, and downdraft ventilation. We confirm the exact Bertazzoni series and model before ordering parts.</p>
        </>
      )
    },
    {
      id: "fulgor-milano-cooktop-repair",
      title: "Fulgor Milano Cooktop Repair",
      heading: "Fulgor Milano Cooktop Repair",
      /*img: "/cooktop-repair/fulgor-milano-cooktop-repair.webp",*/
      alt: "Fulgor Milano cooktop repair technician servicing a premium Italian cooktop",
      description: (
        <>
          <p>We provide <strong>Fulgor Milano cooktop repair</strong> for gas cooktops, induction cooktops, S400 cooking surfaces, Sofia rangetops, and knob-controlled induction rangetops. Fulgor Milano cooktops may combine dual-flame burners, pot-detection systems, booster functions, residual-heat indicators, electronic controls, and model-specific cooling requirements.</p>
          <h3>Fulgor Milano Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dual-flame gas burners producing uneven flame because of cap seating, clogged ports, or valve issues</li>
            <li>✅ Induction zones failing to detect cookware or losing power under load</li>
            <li>✅ Booster, melting, or simmering functions not responding correctly</li>
            <li>✅ Touch controls, knob controls, or timer functions becoming intermittent</li>
            <li>✅ Cooling fan or ventilation problems beneath induction surfaces</li>
            <li>✅ Parts lookup problems when the exact model and production generation are not verified</li>
          </ul>
          <h3>How We Fix These Fulgor Milano Cooktop Issues</h3>
          <p>We test burner assemblies, spark electrodes, valves, gas delivery, induction power boards, pot detection, touch or knob controls, cooling fans, electrical supply, and cabinet ventilation. We also verify model and serial details before recommending replacement parts.</p>
        </>
      )
    },
    {
      id: "gaggenau-cooktop-repair",
      title: "Gaggenau Cooktop Repair",
      heading: "Gaggenau Cooktop Repair",
      /*img: "/cooktop-repair/gaggenau-cooktop-repair.webp",*/
      alt: "Gaggenau cooktop repair technician servicing a modular luxury cooking surface",
      description: (
        <>
          <p>Our <strong>Gaggenau cooktop repair</strong> service covers 400 Series and 200 Series cooktops, Vario modular cooking surfaces, flex induction cooktops, gas cooktops, wok burners, Teppan Yaki modules, electric grill modules, and integrated downdraft ventilation. Gaggenau cooktops are often installed as a coordinated modular system rather than a single standard appliance.</p>
          <h3>Gaggenau Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Flex induction zones not detecting cookware, shutting down, or showing power-related errors</li>
            <li>✅ Vario modules with individual wiring, control, or power-supply faults</li>
            <li>✅ High-output wok burners with weak flame, delayed ignition, or flame-sensing issues</li>
            <li>✅ Teppan Yaki sections heating unevenly or failing to maintain the selected temperature</li>
            <li>✅ Electric grill modules with inconsistent heat output or control problems</li>
            <li>✅ Downdraft airflow, filter, or ventilation issues in flush-mounted modular installations</li>
          </ul>
          <h3>How We Fix These Gaggenau Cooktop Issues</h3>
          <p>We diagnose the Gaggenau installation module by module. We inspect induction boards, cookware detection, power supply, rotary controls, gas ignition, valves, Teppan Yaki heating performance, electric grill circuits, downdraft airflow, and cabinet ventilation.</p>
        </>
      )
    },
    {
      id: "ilve-cooktop-repair",
      title: "ILVE Cooktop Repair",
      heading: "ILVE Cooktop Repair",
      /*img: "/cooktop-repair/ilve-cooktop-repair.webp",*/
      alt: "ILVE cooktop repair technician servicing an Italian gas or induction cooktop",
      description: (
        <>
          <p>We provide <strong>ILVE cooktop repair</strong> for ILVE gas cooktops, induction hobs, brass-burner cooking surfaces, griddles, French-top sections, and rangetop-style cooking surfaces used in Italian luxury kitchens. ILVE cooktop service requires careful handling because burners, decorative trim, knobs, controls, and specialty surfaces all affect performance and appearance.</p>
          <h3>ILVE Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Brass burners with uneven flame because caps, rings, or ports are not seated correctly</li>
            <li>✅ Igniters clicking continuously after cleaning, spills, or moisture around the spark area</li>
            <li>✅ Gas burners lighting slowly, losing flame, or failing to simmer consistently</li>
            <li>✅ Induction zones not recognizing cookware or shutting down from electronic or airflow issues</li>
            <li>✅ Griddle or French-top surfaces developing inconsistent heat patterns</li>
            <li>✅ Knobs, bezels, brass trim, enamel, or chrome finishes requiring careful handling during service</li>
          </ul>
          <h3>How We Fix These ILVE Cooktop Issues</h3>
          <p>We inspect burner caps, rings, spark electrodes, ignition switches, valves, induction modules, controls, cooling airflow, and specialty cooking surfaces while protecting brass, enamel, chrome, and custom finishes.</p>
        </>
      )
    },
    {
      id: "lacanche-cooktop-repair",
      title: "Lacanche Cooktop Repair",
      heading: "Lacanche Cooktop Repair",
      /*img: "/cooktop-repair/lacanche-cooktop-repair.webp",*/
      alt: "Lacanche cooktop repair technician servicing a French luxury cooking surface",
      description: (
        <>
          <p>Our <strong>Lacanche cooktop repair</strong> service is designed for the cooking surfaces built into Cluny, Sully, Savigny, Volnay, Chagny, Cormatin, Citeaux, and custom Lacanche French ranges. Depending on the configuration, a Lacanche cooking surface may include gas burners, French tops, simmer plates, planchas, and other specialty modules.</p>
          <h3>Lacanche Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners that ignite but go out because of thermocouple or safety-valve problems</li>
            <li>✅ Weak flame, uneven combustion, or poor simmer control on individual burners</li>
            <li>✅ French-top or simmer-plate sections developing uneven heat distribution</li>
            <li>✅ Plancha or specialty module temperature problems</li>
            <li>✅ Heavy grates, brass trim, knobs, enamel, and custom finishes requiring careful service access</li>
            <li>✅ Parts identification challenges because each Lacanche cooking-surface layout can be different</li>
          </ul>
          <h3>How We Fix These Lacanche Cooktop Issues</h3>
          <p>We map the exact Lacanche configuration before service, then inspect burners, thermocouples, safety valves, gas pressure, ignition, specialty plates, planchas, controls, and trim-sensitive access points.</p>
        </>
      )
    },
    {
      id: "la-cornue-cooktop-repair",
      title: "La Cornue Cooktop Repair",
      heading: "La Cornue Cooktop Repair",
      /*img: "/cooktop-repair/la-cornue-cooktop-repair.webp",*/
      alt: "La Cornue cooktop repair technician servicing a handcrafted French luxury cooktop",
      description: (
        <>
          <p>We specialize in <strong>La Cornue cooktop repair</strong> for handcrafted Château cooktops, CornuFé rangetop configurations, gas burners, French tops, power burners, lava-rock grills, induction surfaces, and custom cooking layouts. La Cornue cooktops require careful diagnosis because burner configuration, gas delivery, specialty surfaces, and finish details vary from one installation to another.</p>
          <h3>La Cornue Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Yellow flame, soot, weak output, or uneven flame caused by cap position, gas pressure, air mixture, or clogged ports</li>
            <li>✅ Gas burners with delayed ignition, thermocouple faults, or safety-valve problems</li>
            <li>✅ French-top sections developing heat patterns that feel uneven to the owner</li>
            <li>✅ Lava-rock grill or specialty surface sections not heating consistently</li>
            <li>✅ Induction zones failing to detect cookware or respond to controls</li>
            <li>✅ Finish-matching and protection concerns for enamel, brass, chrome, nickel, copper, and custom-color panels</li>
          </ul>
          <h3>How We Fix These La Cornue Cooktop Issues</h3>
          <p>We document the custom configuration first, then evaluate flame color, burner ports, gas pressure, air mixture, thermocouples, gas valves, ignition, specialty surfaces, induction components, and finish-sensitive access points before recommending repair.</p>
        </>
      )
    },
    {
      id: "miele-cooktop-repair",
      title: "Miele Cooktop Repair",
      heading: "Miele Cooktop Repair",
      /*img: "/cooktop-repair/miele-cooktop-repair.webp",*/
      alt: "Miele cooktop repair technician servicing a luxury induction or gas cooktop",
      description: (
        <>
          <p>We provide <strong>Miele cooktop repair</strong> for Miele gas cooktops, electric cooktops, induction cooktops, full-surface induction models, PowerFlex cooking areas, and professional-style rangetops with gas burners, griddles, or grills. Miele cooktops often involve precise electronic controls, cookware detection, cooling airflow, auto re-ignition, and model-specific installation requirements.</p>
          <h3>Miele Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not recognizing cookware, shutting down, or overheating under load</li>
            <li>✅ PowerFlex or full-surface zones not linking or responding correctly</li>
            <li>✅ Gas burners clicking, lighting slowly, or failing to re-ignite properly</li>
            <li>✅ Electric elements cycling incorrectly or failing to reach the selected output</li>
            <li>✅ Touch controls, power boards, sensors, or cooling fans developing faults</li>
            <li>✅ Flush-installation ventilation issues affecting induction electronics</li>
          </ul>
          <h3>How We Fix These Miele Cooktop Issues</h3>
          <p>We test induction modules, cookware detection, PowerFlex operation, cooling fans, electrical supply, gas ignition, valves, auto re-ignition, electric elements, touch controls, sensors, and built-in ventilation so the repair matches the exact Miele platform.</p>
        </>
      )
    },
    {
      id: "officine-gullo-cooktop-repair",
      title: "Officine Gullo Cooktop Repair",
      heading: "Officine Gullo Cooktop Repair",
      /*img: "/cooktop-repair/officine-gullo-cooktop-repair.webp",*/
      alt: "Officine Gullo cooktop repair technician servicing a bespoke Italian cooking surface",
      description: (
        <>
          <p>Our <strong>Officine Gullo cooktop repair</strong> service is designed for bespoke Italian rangetops, professional gas burners, griddles, fry tops, French tops, pasta-cooker modules, induction surfaces, and made-to-order luxury cooking suites. With Officine Gullo, the first step is understanding the exact custom layout and finish package.</p>
          <h3>Officine Gullo Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Custom burner layouts where each valve, igniter, thermocouple, or safety component may differ</li>
            <li>✅ Gas ignition, thermocouple, safety-valve, or flame-stability issues on professional-style burners</li>
            <li>✅ Griddle, fry-top, French-top, or specialty-module heat distribution problems</li>
            <li>✅ Induction modules or control sections not responding correctly</li>
            <li>✅ Heavy knobs, brass, copper, nickel, stainless steel, and custom finishes requiring careful disassembly</li>
            <li>✅ Parts-identification challenges because many Officine Gullo cooking suites are custom-built</li>
          </ul>
          <h3>How We Fix These Officine Gullo Cooktop Issues</h3>
          <p>We document the custom layout, fuel type, controls, access points, and finish details before testing burners, valves, thermocouples, spark systems, induction components, specialty modules, gas delivery, and ventilation.</p>
        </>
      )
    },
    {
      id: "american-range-cooktop-repair",
      title: "American Range Cooktop Repair",
      heading: "American Range Cooktop Repair",
      /*img: "/cooktop-repair/american-range-cooktop-repair.webp",*/
      alt: "American Range cooktop repair technician servicing a professional rangetop",
      description: (
        <>
          <p>We provide <strong>American Range cooktop repair</strong> for residential pro-style rangetops, gas cooking surfaces, griddle sections, charbroilers, and commercial-style equipment installed in private homes and chef kitchens. American Range cooking surfaces are designed for high-output use, so burner condition, gas delivery, ignition, and heat recovery matter.</p>
          <h3>American Range Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ High-output burners with weak flame, delayed ignition, or uneven combustion</li>
            <li>✅ Pilots, spark components, valves, or safety controls wearing from repeated heavy use</li>
            <li>✅ Griddle or charbroiler sections taking too long to recover heat</li>
            <li>✅ Knobs, thermostatic controls, or valves becoming stiff or inconsistent</li>
            <li>✅ Gas-pressure or regulator issues affecting multiple burners at once</li>
            <li>✅ Parts differences between residential pro-style units and true commercial American Range equipment</li>
          </ul>
          <h3>How We Fix These American Range Cooktop Issues</h3>
          <p>We inspect burners, pilots, ignition components, gas pressure, regulators, valves, griddle controls, charbroiler sections, and heavy-use wear points. We also confirm whether the appliance is residential, commercial-style, or true commercial equipment.</p>
        </>
      )
    },
    {
      id: "bluestar-cooktop-repair",
      title: "BlueStar Cooktop Repair",
      heading: "BlueStar Cooktop Repair",
      /*img: "/cooktop-repair/bluestar-cooktop-repair.webp",*/
      alt: "BlueStar cooktop repair technician servicing a professional gas cooktop",
      description: (
        <>
          <p>Our <strong>BlueStar cooktop repair</strong> service covers BlueStar X-8 gas cooktops, Platinum and RNB rangetops, open-burner cooking surfaces, griddle sections, charbroilers, French tops, and custom-color professional cooking installations. BlueStar cooktops are known for powerful burners, heavy grates, and chef-style surface options.</p>
          <h3>BlueStar Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Open burners or sealed burners with uneven flame from debris, clogged ports, cap placement, or gas pressure</li>
            <li>✅ High-output burners lighting slowly or failing to maintain a stable simmer</li>
            <li>✅ Ignition switches, spark electrodes, or spark modules clicking continuously</li>
            <li>✅ Interchangeable griddle or charbroiler sections heating inconsistently</li>
            <li>✅ French-top sections developing uneven surface temperatures</li>
            <li>✅ Custom-color panels, enamel, and stainless trim requiring careful protection during service</li>
          </ul>
          <h3>How We Fix These BlueStar Cooktop Issues</h3>
          <p>We inspect burner ports, burner heads, spark systems, gas valves, regulators, gas pressure, griddle components, charbroiler sections, French-top performance, and finish-sensitive access areas while protecting custom panels and pro-style trim.</p>
        </>
      )
    },
    {
      id: "fivestar-cooktop-repair",
      title: "FiveStar Cooktop Repair",
      heading: "FiveStar Cooktop Repair",
      /*img: "/cooktop-repair/fivestar-cooktop-repair.webp",*/
      alt: "FiveStar cooktop repair technician servicing a legacy professional cooking surface",
      description: (
        <>
          <p>We provide <strong>FiveStar cooktop repair</strong> for sealed-burner surfaces, gas cooking sections, griddle and grill configurations, rangetop-style installations, and cooktop sections built into legacy FiveStar ranges. FiveStar repairs often require careful model identification because older configurations and parts availability can vary.</p>
          <h3>FiveStar Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Sealed burners lighting slowly, clicking continuously, or producing uneven flame</li>
            <li>✅ Griddle or grill sections failing to reach or maintain proper cooking temperature</li>
            <li>✅ Gas valves, ignition components, or burner assemblies wearing on older models</li>
            <li>✅ Knobs and controls becoming stiff, loose, or inconsistent</li>
            <li>✅ Gas-pressure issues affecting burner performance across the surface</li>
            <li>✅ Parts-availability challenges on discontinued or less common FiveStar configurations</li>
          </ul>
          <h3>How We Fix These FiveStar Cooktop Issues</h3>
          <p>We inspect burners, ignition, valves, gas delivery, griddle and grill sections, knobs, controls, and legacy parts compatibility. We verify the exact FiveStar model before recommending replacement components.</p>
        </>
      )
    },
    {
      id: "thor-cooktop-repair",
      title: "Thor Kitchen Cooktop Repair",
      heading: "Thor Kitchen Cooktop Repair",
      /*img: "/cooktop-repair/thor-cooktop-repair.webp",*/
      alt: "Thor Kitchen cooktop repair technician servicing a modern gas or induction cooktop",
      description: (
        <>
          <p>We provide <strong>Thor Kitchen cooktop repair</strong> for gas cooktops, professional-style rangetops, induction cooktops, burner surfaces, and griddle configurations. Thor cooking surfaces combine stainless pro-style design with electronic ignition, gas valves, touch controls, induction modules, and model-specific components.</p>
          <h3>Thor Kitchen Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burner ignition clicking, delayed lighting, or flame instability</li>
            <li>✅ Burner caps, ports, electrodes, or switches needing cleaning, adjustment, or replacement</li>
            <li>✅ Induction zones failing to recognize cookware or shutting down under load</li>
            <li>✅ Touch controls or power boards becoming intermittent on induction models</li>
            <li>✅ Griddle sections heating unevenly or taking too long to recover temperature</li>
            <li>✅ Parts-matching differences between Thor gas, induction, and rangetop platforms</li>
          </ul>
          <h3>How We Fix These Thor Kitchen Cooktop Issues</h3>
          <p>We confirm the Thor cooking platform first, then test burner assemblies, electrodes, ignition switches, gas valves, induction boards, touch controls, electrical supply, cooling airflow, and griddle performance.</p>
        </>
      )
    },
    {
      id: "forno-cooktop-repair",
      title: "Forno Cooktop Repair",
      heading: "Forno Cooktop Repair",
      /*img: "/cooktop-repair/forno-cooktop-repair.webp",*/
      alt: "Forno cooktop repair technician servicing a modern induction cooktop",
      description: (
        <>
          <p>Our <strong>Forno cooktop repair</strong> service covers Forno Parco induction cooktops, Ornonzo induction cooktops, flex-zone cooking surfaces, booster-function models, touch-control cooktops, and supported Forno built-in cooking surfaces. Forno cooktop service depends heavily on exact model verification because wattage, zone layout, controls, and parts vary by series.</p>
          <h3>Forno Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not recognizing cookware or failing to heat consistently</li>
            <li>✅ Flex-zone linking, booster, or Stop & Go functions not responding correctly</li>
            <li>✅ Touch controls, timers, or power-level settings becoming intermittent</li>
            <li>✅ Cooktop shutting down because of overheating, airflow, or electrical-supply issues</li>
            <li>✅ Glass-surface warning indicators or zone controls displaying errors</li>
            <li>✅ Parts lookup problems when the exact model and serial number are not confirmed</li>
          </ul>
          <h3>How We Fix These Forno Cooktop Issues</h3>
          <p>We verify the Forno model and zone layout, then test cookware detection, induction boards, touch controls, flex-zone functions, booster circuits, electrical supply, cooling airflow, and installation conditions before recommending replacement parts.</p>
        </>
      )
    },
    {
      id: "garland-cooktop-repair",
      title: "Garland Cooktop Repair",
      heading: "Garland Cooktop Repair",
      /*img: "/cooktop-repair/garland-cooktop-repair.webp",*/
      alt: "Garland cooktop repair technician servicing a commercial cooking surface",
      description: (
        <>
          <p>We provide <strong>Garland cooktop repair</strong> for commercial hot plates, open-burner ranges, rangetop sections, griddles, charbroilers, and restaurant-style cooking equipment installed in chef kitchens, event spaces, estates, and commercial kitchens. Garland equipment is built for demanding use and fast heat recovery.</p>
          <h3>Garland Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners, pilots, gas valves, and safety controls wearing from repeated heavy use</li>
            <li>✅ Open burners developing weak flame or uneven combustion from buildup or gas-delivery problems</li>
            <li>✅ Griddle or charbroiler sections losing heat recovery during high-volume cooking</li>
            <li>✅ Thermostats, valves, or controls becoming inconsistent under heavy use</li>
            <li>✅ Gas-pressure, regulator, or manifold problems affecting multiple cooking zones</li>
            <li>✅ Grease, moisture, and heavy-use wear around commercial cooking components</li>
          </ul>
          <h3>How We Fix These Garland Cooktop Issues</h3>
          <p>We inspect burners, pilots, gas flow, thermostats, valves, regulators, manifold pressure, griddle controls, charbroiler sections, and commercial-use wear points so the cooking surface can perform safely under demanding conditions.</p>
        </>
      )
    },
    {
      id: "zline-cooktop-repair",
      title: "ZLINE Cooktop Repair",
      heading: "ZLINE Cooktop Repair",
      /*img: "/cooktop-repair/zline-cooktop-repair.webp",*/
      alt: "ZLINE cooktop repair technician servicing a gas or induction cooktop",
      description: (
        <>
          <p>Our <strong>ZLINE cooktop repair</strong> service covers ZLINE gas cooktops, induction cooktops, gas rangetops, Autograph Edition cooking surfaces, and professional-style built-in cooktops. ZLINE repairs often involve both performance diagnosis and finish-sensitive handling.</p>
          <h3>ZLINE Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners with weak ignition, uneven flame, or delayed lighting</li>
            <li>✅ Burner caps, electrodes, switches, or spark modules clicking continuously</li>
            <li>✅ Induction zones failing to detect cookware or shutting down during use</li>
            <li>✅ Touch controls, power boards, or cooling airflow causing intermittent induction performance</li>
            <li>✅ Rangetop burners or griddle sections not maintaining consistent heat</li>
            <li>✅ Autograph Edition handles, accents, and decorative trim requiring careful protection</li>
          </ul>
          <h3>How We Fix These ZLINE Cooktop Issues</h3>
          <p>We test the exact failed cooking function, including gas ignition, burner flame, induction zones, touch controls, cooling fans, electrical supply, griddle performance, and installation ventilation. We also protect ZLINE accents and finish details during service.</p>
        </>
      )
    },
    {
      id: "fisher-paykel-cooktop-repair",
      title: "Fisher & Paykel Cooktop Repair",
      heading: "Fisher & Paykel Cooktop Repair",
      /*img: "/cooktop-repair/fisher-paykel-cooktop-repair.webp",*/
      alt: "Fisher and Paykel cooktop repair technician servicing a luxury cooking surface",
      description: (
        <>
          <p>We provide <strong>Fisher & Paykel cooktop repair</strong> for gas cooktops, induction cooktops, Series 7 and Series 9 cooking surfaces, Professional gas rangetops, Contemporary cooktops, Minimal cooktops, and built-in cooking installations. Fisher & Paykel cooktops are designed around precise temperature control, clean integration, and platform-specific electronics.</p>
          <h3>Fisher & Paykel Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones failing to detect cookware, bridge correctly, or maintain power</li>
            <li>✅ Gas burners clicking, lighting slowly, or producing an uneven flame</li>
            <li>✅ Sealed dual-flow burners losing low-simmer or high-output performance</li>
            <li>✅ Touch controls, displays, sensors, or induction boards developing faults</li>
            <li>✅ Cooling airflow or installation ventilation affecting induction reliability</li>
            <li>✅ Flush or Minimal-style installations requiring careful service access</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Cooktop Issues</h3>
          <p>We test gas burners, ignition, valves, induction boards, cookware detection, controls, sensors, cooling fans, electrical supply, and installation airflow so the repair matches the specific Fisher & Paykel cooktop platform.</p>
        </>
      )
    },
    {
      id: "wolf-cooktop-repair",
      title: "Wolf Cooktop Repair",
      heading: "Wolf Cooktop Repair",
      /*img: "/cooktop-repair/wolf-cooktop-repair.webp",*/
      alt: "Wolf cooktop repair technician servicing a luxury gas or induction cooktop",
      description: (
        <>
          <p>Our <strong>Wolf cooktop repair</strong> service covers Wolf gas cooktops, induction cooktops, electric cooktops, professional gas rangetops, sealed-burner rangetops, griddle sections, charbroilers, and French-top configurations. Wolf cooktops require exact diagnosis because gas, induction, electric, and rangetop platforms use different components and service methods.</p>
          <h3>Wolf Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dual-stacked burners clicking, lighting slowly, losing simmer performance, or producing uneven flame</li>
            <li>✅ Induction zones not recognizing cookware, shutting down, or showing power-related errors</li>
            <li>✅ Electric elements cycling incorrectly or failing to reach the selected temperature</li>
            <li>✅ Griddle, charbroiler, or French-top sections developing heat-recovery problems</li>
            <li>✅ Spark modules, electrodes, valves, controls, or cooling fans becoming intermittent</li>
            <li>✅ Built-in ventilation and service-access concerns in tightly integrated luxury kitchens</li>
          </ul>
          <h3>How We Fix These Wolf Cooktop Issues</h3>
          <p>We test Wolf burner assemblies, spark modules, electrodes, gas valves, simmer settings, induction boards, electric elements, cooling fans, specialty surfaces, and installation ventilation while protecting cabinetry and stainless finishes.</p>
        </>
      )
    },
    {
      id: "thermador-cooktop-repair",
      title: "Thermador Cooktop Repair",
      heading: "Thermador Cooktop Repair",
      /*img: "/cooktop-repair/thermador-cooktop-repair.webp",*/
      alt: "Thermador cooktop repair technician servicing a Star Burner rangetop or induction cooktop",
      description: (
        <>
          <p>We provide <strong>Thermador cooktop repair</strong> for gas cooktops, induction cooktops, electric cooktops, Professional Series rangetops, Masterpiece cooktops, Freedom induction surfaces, and Star Burner cooking systems. Thermador cooktop repair often involves precise diagnosis of ignition, gas delivery, induction electronics, controls, and ventilation.</p>
          <h3>Thermador Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Star Burners clicking, lighting unevenly, or showing weak flame after spills or debris buildup</li>
            <li>✅ Gas burners failing to maintain ExtraLow-style simmer performance</li>
            <li>✅ Freedom or standard induction zones not recognizing cookware or shutting down during use</li>
            <li>✅ Touch controls, power boards, sensors, or cooling fans developing faults</li>
            <li>✅ Electric elements cycling incorrectly or failing to heat</li>
            <li>✅ Downdraft or ventilation issues affecting cooking performance and heat management</li>
          </ul>
          <h3>How We Fix These Thermador Cooktop Issues</h3>
          <p>We inspect Star Burners, spark electrodes, gas valves, simmer controls, induction modules, cookware detection, electric elements, touch controls, sensors, cooling fans, electrical supply, and ventilation so the repair matches the Thermador platform.</p>
        </>
      )
    },
    {
      id: "viking-cooktop-repair",
      title: "Viking Cooktop Repair",
      heading: "Viking Cooktop Repair",
      /*img: "/cooktop-repair/viking-cooktop-repair.webp",*/
      alt: "Viking cooktop repair technician servicing a luxury professional cooking surface",
      description: (
        <>
          <p>Our <strong>Viking cooktop repair</strong> service covers Viking gas cooktops, electric cooktops, induction cooktops, professional rangetops, sealed-burner surfaces, griddles, and legacy Viking cooking appliances. Viking cooktop issues often involve ignition, burner assemblies, valves, controls, induction electronics, and high-use pro-style components.</p>
          <h3>Viking Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners clicking, lighting slowly, or producing uneven flame from igniter, valve, or burner issues</li>
            <li>✅ Gas burners failing to hold a stable low simmer or full high-output flame</li>
            <li>✅ Induction zones not detecting cookware or shutting down during cooking</li>
            <li>✅ Electric elements, switches, or controls failing to cycle correctly</li>
            <li>✅ Griddle sections developing uneven heat or slow recovery</li>
            <li>✅ Legacy Viking parts differences between older Professional units and newer cooking platforms</li>
          </ul>
          <h3>How We Fix These Viking Cooktop Issues</h3>
          <p>We test burner ignition, electrodes, spark modules, gas valves, induction boards, electric elements, switches, griddle controls, electrical supply, and series-specific parts compatibility before repair.</p>
        </>
      )
    },
    {
      id: "monogram-cooktop-repair",
      title: "Monogram Cooktop Repair",
      heading: "Monogram Cooktop Repair",
      /*img: "/cooktop-repair/monogram-cooktop-repair.webp",*/
      alt: "Monogram cooktop repair technician servicing a luxury cooktop or rangetop",
      description: (
        <>
          <p>We provide <strong>Monogram cooktop repair</strong> for Monogram induction cooktops, electric cooktops, professional gas rangetops, gas cooktops, Statement cooking surfaces, Minimalist cooking surfaces, and precision-cooking installations. Monogram service often involves premium finishes, integrated controls, induction electronics, and mode-specific diagnosis.</p>
          <h3>Monogram Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones failing to detect cookware, bridge correctly, or maintain selected output</li>
            <li>✅ Electric elements cycling incorrectly or failing to heat</li>
            <li>✅ Professional gas rangetop burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Touch controls, glide controls, power boards, sensors, or connectivity features becoming intermittent</li>
            <li>✅ Cooling airflow and cabinet ventilation affecting induction performance</li>
            <li>✅ Statement and Minimalist finish, handle, and panel protection during service</li>
          </ul>
          <h3>How We Fix These Monogram Cooktop Issues</h3>
          <p>We diagnose Monogram by platform: induction, electric, gas cooktop, or professional rangetop. We test burners, valves, elements, induction boards, touch controls, sensors, cooling fans, electrical supply, and ventilation while protecting premium panels and finishes.</p>
        </>
      )
    },
    {
      id: "signature-kitchen-suite-cooktop-repair",
      title: "Signature Kitchen Suite Cooktop Repair",
      heading: "Signature Kitchen Suite Cooktop Repair",
      /*img: "/cooktop-repair/signature-kitchen-suite-cooktop-repair.webp",*/
      alt: "Signature Kitchen Suite cooktop repair technician servicing a luxury induction cooktop or pro rangetop",
      description: (
        <>
          <p>Our <strong>Signature Kitchen Suite cooktop repair</strong> service covers SKS Flex Induction Cooktops and pro rangetops with gas burners, induction zones, Chromium griddles, and built-in sous vide modules. SKS cooking surfaces can combine several technologies in one installation, so each section must be diagnosed separately.</p>
          <h3>Signature Kitchen Suite Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Flex induction zones not linking, detecting cookware, or maintaining selected power</li>
            <li>✅ High-output or ultra-low gas burners developing ignition, flame, or valve problems</li>
            <li>✅ Built-in sous vide modules not reaching temperature or responding correctly</li>
            <li>✅ Chromium griddle sections heating unevenly or losing temperature stability</li>
            <li>✅ Smart Knobs, LCD controls, Wi-Fi features, or module communication becoming intermittent</li>
            <li>✅ Hybrid rangetop issues where gas, induction, sous vide, and griddle systems must be tested independently</li>
          </ul>
          <h3>How We Fix These Signature Kitchen Suite Cooktop Issues</h3>
          <p>We test each SKS technology independently: gas burners, induction zones, sous vide module, griddle, controls, sensors, power boards, valves, cooling airflow, electrical supply, and connected features.</p>
        </>
      )
    },
    {
      id: "hestan-cooktop-repair",
      title: "Hestan Cooktop Repair",
      heading: "Hestan Cooktop Repair",
      /*img: "/cooktop-repair/hestan-cooktop-repair.webp",*/
      alt: "Hestan cooktop repair technician servicing a luxury sealed-burner rangetop",
      description: (
        <>
          <p>We provide <strong>Hestan cooktop repair</strong> for Hestan sealed-burner rangetops, professional gas cooking surfaces, griddle configurations, high-output burners, and residential chef-style installations. Hestan cooking surfaces are designed for powerful heat output, so burner condition, ignition, gas pressure, valve response, and ventilation must work together correctly.</p>
          <h3>Hestan Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Burners failing to maintain low-simmer control or full high-output performance</li>
            <li>✅ Gas valves, regulators, spark components, or burner assemblies becoming inconsistent</li>
            <li>✅ Griddle sections developing uneven heat distribution or slow recovery</li>
            <li>✅ Knobs, controls, or indicator components requiring adjustment or replacement</li>
            <li>✅ High-heat installations where ventilation, clearances, and gas delivery need to be verified</li>
          </ul>
          <h3>How We Fix These Hestan Cooktop Issues</h3>
          <p>We test Hestan burners, spark electrodes, ignition switches, gas valves, regulators, manifold pressure, griddle performance, controls, and ventilation clearances to restore high-output cooking performance.</p>
        </>
      )
    },
    {
      id: "dacor-cooktop-repair",
      title: "Dacor Cooktop Repair",
      heading: "Dacor Cooktop Repair",
      /*img: "/cooktop-repair/dacor-cooktop-repair.webp",*/
      alt: "Dacor cooktop repair technician servicing a luxury gas or induction cooktop",
      description: (
        <>
          <p>Our <strong>Dacor cooktop repair</strong> service covers Dacor gas cooktops, induction cooktops, gas rangetops, Modernist cooking surfaces, Contemporary cooking surfaces, and legacy Dacor built-in cooktops. Dacor repairs often involve generation-specific controls, FlexZone-style induction sections, gas ignition, and parts compatibility.</p>
          <h3>Dacor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones or flexible cooking modules not detecting cookware or maintaining power</li>
            <li>✅ Gas burners clicking, lighting unevenly, or failing to simmer correctly</li>
            <li>✅ Touch controls, LCD panels, sensors, or power boards becoming intermittent</li>
            <li>✅ Cooling fan, electrical supply, or cabinet ventilation issues affecting induction performance</li>
            <li>✅ Gas valves, electrodes, switches, or burner assemblies requiring repair</li>
            <li>✅ Parts-availability differences between older Dacor units and newer Dacor product generations</li>
          </ul>
          <h3>How We Fix These Dacor Cooktop Issues</h3>
          <p>We identify the Dacor generation first, then inspect induction modules, touch controls, cooling fans, gas burners, valves, spark components, sensors, electrical supply, ventilation, and legacy part availability.</p>
        </>
      )
    },
    {
      id: "big-chill-cooktop-repair",
      title: "Big Chill Cooktop Repair",
      heading: "Big Chill Cooktop Repair",
      /*img: "/cooktop-repair/big-chill-cooktop-repair.webp",*/
      alt: "Big Chill cooktop repair technician servicing a retro luxury cooking surface",
      description: (
        <>
          <p>We provide <strong>Big Chill cooktop repair</strong> for Big Chill gas cooking surfaces, pro-style cooktops, rangetop-style installations, induction cooking surfaces, and cooktop sections integrated into Retro, Classic, and Pro-style ranges. Big Chill service requires careful handling because color, chrome, and retro finish details are often central to the kitchen design.</p>
          <h3>Big Chill Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Burner caps, ports, electrodes, switches, or valves needing adjustment or replacement</li>
            <li>✅ Induction zones failing to detect cookware or shutting down during use</li>
            <li>✅ Griddle or pro-style surface sections heating inconsistently</li>
            <li>✅ Controls, knobs, or switches becoming intermittent</li>
            <li>✅ Custom-color panels, chrome trim, and handles requiring careful protection during service</li>
          </ul>
          <h3>How We Fix These Big Chill Cooktop Issues</h3>
          <p>We protect the finish first, then diagnose burners, ignition, gas valves, induction modules, controls, griddle sections, electrical supply, and ventilation. We verify the exact Big Chill product line before ordering parts.</p>
        </>
      )
    },
    {
      id: "elmira-stove-works-cooktop-repair",
      title: "Elmira Stove Works Cooktop Repair",
      heading: "Elmira Stove Works Cooktop Repair",
      /*img: "/cooktop-repair/elmira-stove-works-cooktop-repair.webp",*/
      alt: "Elmira Stove Works cooktop repair technician servicing a vintage-style cooking surface",
      description: (
        <>
          <p>Our <strong>Elmira Stove Works cooktop repair</strong> service supports Northstar, Heritage, and vintage-inspired cooking surfaces built into Elmira ranges and retro appliance suites. Elmira cooktop sections combine modern burner systems with period-style knobs, specialty panels, chrome trim, and design-sensitive access points.</p>
          <h3>Elmira Stove Works Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Burner caps, electrodes, ignition switches, or valves needing service</li>
            <li>✅ Electric or induction cooking zones failing to heat correctly on supported models</li>
            <li>✅ Knobs, selectors, and retro-style controls becoming loose or intermittent</li>
            <li>✅ Chrome trim, specialty panels, and vintage details requiring careful protection</li>
            <li>✅ Parts-identification challenges for older, specialty, or custom Elmira configurations</li>
          </ul>
          <h3>How We Fix These Elmira Stove Works Cooktop Issues</h3>
          <p>We diagnose the cooking surface while preserving the vintage look. Burner performance, control condition, trim protection, exact model identification, and parts compatibility are especially important on Elmira appliances.</p>
        </>
      )
    },
    {
      id: "smeg-cooktop-repair",
      title: "Smeg Cooktop Repair",
      heading: "Smeg Cooktop Repair",
      /*img: "/cooktop-repair/smeg-cooktop-repair.webp",*/
      alt: "Smeg cooktop repair technician servicing an Italian gas or induction cooktop",
      description: (
        <>
          <p>We provide <strong>Smeg cooktop repair</strong> for Smeg gas cooktops, induction cooktops, electric radiant cooktops, domino modules, and European-style built-in cooking surfaces. Smeg cooktops often use compact layouts, touch controls, thermocouples, flame-safety systems, and designer panels.</p>
          <h3>Smeg Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Gas burners with delayed ignition, weak flame, or flame-safety problems</li>
            <li>✅ Thermocouples, spark electrodes, or valves causing burners to go out after lighting</li>
            <li>✅ Induction zones failing to detect cookware, overheating, or showing touch-control errors</li>
            <li>✅ Electric radiant zones cycling incorrectly or failing to heat</li>
            <li>✅ Compact domino modules with individual power, control, or installation faults</li>
            <li>✅ Designer glass, stainless, or retro-finish panels requiring careful protection</li>
          </ul>
          <h3>How We Fix These Smeg Cooktop Issues</h3>
          <p>We test gas ignition, thermocouples, valves, burner ports, induction electronics, electric elements, touch controls, electrical supply, cooling airflow, and modular installation conditions while protecting Smeg design details.</p>
        </>
      )
    },
    {
      id: "heartland-cooktop-repair",
      title: "Heartland Cooktop Repair",
      heading: "Heartland Cooktop Repair",
      /*img: "/cooktop-repair/heartland-cooktop-repair.webp",*/
      alt: "Heartland cooktop repair technician servicing a retro classic cooking surface",
      description: (
        <>
          <p>Our <strong>Heartland cooktop repair</strong> service is designed for legacy Heartland cooking surfaces, gas-burner sections, electric cooking sections, and cooktops integrated into discontinued Heartland classic ranges. Heartland repairs often involve older controls, discontinued parts, and careful preservation of retro design details.</p>
          <h3>Heartland Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Discontinued or legacy parts that require careful model and serial-number confirmation</li>
            <li>✅ Gas burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Electric elements, switches, wiring, or controls failing on older cooking surfaces</li>
            <li>✅ Knobs, trim, panels, and finish details requiring careful preservation</li>
            <li>✅ Gas valves, ignition components, or burner assemblies wearing after long service</li>
            <li>✅ Repair-versus-replacement planning for appliances homeowners want to preserve for design reasons</li>
          </ul>
          <h3>How We Fix These Heartland Cooktop Issues</h3>
          <p>We focus on safe diagnosis, parts compatibility, and preservation. We inspect burners, valves, igniters, electric elements, controls, wiring, trim, and finish-sensitive access areas while verifying the exact Heartland model before repair.</p>
        </>
      )
    },
    {
      id: "asko-cooktop-repair",
      title: "ASKO Cooktop Repair",
      heading: "ASKO Cooktop Repair",
      /*img: "/cooktop-repair/asko-cooktop-repair.webp",*/
      alt: "ASKO cooktop repair technician servicing a European induction or gas cooktop",
      description: (
        <>
          <p>We provide <strong>ASKO cooktop repair</strong> for ASKO induction cooktops, gas hobs, electric cooking surfaces, and European-style built-in cooktop installations. ASKO cooktops are usually integrated into clean, minimal kitchen layouts where controls, power supply, airflow, and cabinet fit all matter.</p>
          <h3>ASKO Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not recognizing cookware or shutting down during cooking</li>
            <li>✅ Touch controls, power boards, or sensors becoming intermittent</li>
            <li>✅ Gas burners clicking, lighting slowly, or failing to hold a stable flame</li>
            <li>✅ Electric zones cycling incorrectly or failing to heat</li>
            <li>✅ Cooling airflow and built-in cabinet ventilation affecting reliability</li>
            <li>✅ Flush-installation access issues in tightly integrated European-style kitchens</li>
          </ul>
          <h3>How We Fix These ASKO Cooktop Issues</h3>
          <p>We identify whether the ASKO issue is gas, electric, induction, control-related, or installation-related. Then we test burners, valves, induction modules, elements, sensors, touch controls, electrical supply, cooling fans, and ventilation.</p>
        </>
      )
    },
    {
      id: "bosch-cooktop-repair",
      title: "Bosch Cooktop Repair",
      heading: "Bosch Cooktop Repair",
      /*img: "/cooktop-repair/bosch-cooktop-repair.webp",*/
      alt: "Bosch cooktop repair technician servicing a gas electric or induction cooktop",
      description: (
        <>
          <p>Our <strong>Bosch cooktop repair</strong> service covers Bosch gas cooktops, electric radiant cooktops, induction cooktops, Benchmark FlexInduction cooktops, 500 Series, 800 Series, and built-in European-style cooking surfaces. Bosch cooktops are common in upscale remodels where flush installation, controls, and cooling airflow matter.</p>
          <h3>Bosch Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Induction zones not detecting cookware, shutting off, or displaying power-board errors</li>
            <li>✅ FlexInduction zones not linking correctly for larger cookware or griddles</li>
            <li>✅ Gas burners clicking, producing weak flame, or lighting slowly</li>
            <li>✅ Electric radiant elements cycling incorrectly or failing to heat</li>
            <li>✅ Touch controls, sensors, power boards, or cooling fans developing faults</li>
            <li>✅ Built-in cabinet heat and ventilation problems affecting flush cooktop installations</li>
          </ul>
          <h3>How We Fix These Bosch Cooktop Issues</h3>
          <p>We diagnose Bosch by platform: gas, electric, or induction. We inspect burners, valves, electrodes, induction boards, cookware detection, FlexInduction operation, radiant elements, controls, electrical supply, fans, and installation airflow.</p>
        </>
      )
    },
    {
      id: "jennair-cooktop-repair",
      title: "JennAir Cooktop Repair",
      heading: "JennAir Cooktop Repair",
      /*img: "/cooktop-repair/jennair-cooktop-repair.webp",*/
      alt: "JennAir cooktop repair technician servicing a luxury downdraft cooktop",
      description: (
        <>
          <p>We provide <strong>JennAir cooktop repair</strong> for JennAir downdraft induction cooktops, electric radiant downdraft cooktops, gas cooktops, induction surfaces, and luxury built-in cooking installations. JennAir cooktops are especially distinctive when cooking and ventilation systems are integrated into the same appliance.</p>
          <h3>JennAir Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Downdraft airflow becoming weak because of blower, filter, ducting, or control problems</li>
            <li>✅ Induction zones not detecting cookware, bridging correctly, or maintaining power</li>
            <li>✅ Electric radiant elements cycling incorrectly or failing to heat</li>
            <li>✅ Gas burners clicking, lighting slowly, or producing uneven flame</li>
            <li>✅ Touch controls, sensors, power boards, or ventilation controls becoming intermittent</li>
            <li>✅ Cooktop installations where duct routing, cabinet space, and airflow affect performance</li>
          </ul>
          <h3>How We Fix These JennAir Cooktop Issues</h3>
          <p>We test JennAir cooking and ventilation systems together. We inspect blowers, filters, ducting, airflow, induction boards, cookware detection, radiant elements, gas burners, ignition, controls, sensors, electrical supply, and cabinet conditions.</p>
        </>
      )
    },
    {
      id: "kalamazoo-outdoor-cooktop-repair",
      title: "Kalamazoo Outdoor Cooktop Repair",
      heading: "Kalamazoo Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/kalamazoo-outdoor-cooktop-repair.webp",*/
      alt: "Kalamazoo outdoor cooktop repair technician servicing a luxury power burner",
      description: (
        <>
          <p>Our <strong>Kalamazoo outdoor cooktop repair</strong> service covers Kalamazoo power burners, side burners, outdoor cooking modules, hybrid-fire cooking stations, and built-in outdoor kitchen surfaces. Outdoor cooktops are affected by gas delivery, ventilation, weather exposure, stainless components, and high-temperature use.</p>
          <h3>Kalamazoo Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Power burners or side burners with weak flame, delayed ignition, or unstable output</li>
            <li>✅ Gas valves, regulators, ignition components, or burner ports affected by outdoor exposure</li>
            <li>✅ High-output surfaces taking too long to reach cooking temperature</li>
            <li>✅ Outdoor kitchen enclosure ventilation, clearance, or gas-line sizing issues</li>
            <li>✅ Weather exposure, corrosion, moisture, and debris affecting controls and burners</li>
            <li>✅ Hybrid cooking systems where burner and grill functions interact</li>
          </ul>
          <h3>How We Fix These Kalamazoo Outdoor Cooktop Issues</h3>
          <p>We inspect gas delivery, burner output, ignition, regulators, valves, weather-related wear, ventilation, and outdoor enclosure conditions so the cooking module operates safely.</p>
        </>
      )
    },
    {
      id: "lynx-outdoor-cooktop-repair",
      title: "Lynx Outdoor Cooktop Repair",
      heading: "Lynx Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/lynx-outdoor-cooktop-repair.webp",*/
      alt: "Lynx outdoor cooktop repair technician servicing a luxury outdoor side burner",
      description: (
        <>
          <p>We provide <strong>Lynx outdoor cooktop repair</strong> for Lynx side burners, power burners, built-in outdoor cooking modules, burner stations, and luxury outdoor-kitchen surfaces. Lynx outdoor cooktop systems require careful diagnosis of ignition, gas pressure, ventilation, weather exposure, and installation conditions.</p>
          <h3>Lynx Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Side burners or power burners with weak output, ignition delay, or uneven flame</li>
            <li>✅ Gas regulators, valves, igniters, or burner assemblies affected by weather exposure</li>
            <li>✅ Built-in versus cart-adjacent installation problems affecting gas supply and airflow</li>
            <li>✅ Corrosion around burners, fasteners, control areas, and stainless surfaces</li>
            <li>✅ Ventilation and clearance issues inside custom outdoor kitchen islands</li>
            <li>✅ Control knobs, switches, and wiring becoming stiff or intermittent outdoors</li>
          </ul>
          <h3>How We Fix These Lynx Outdoor Cooktop Issues</h3>
          <p>We test gas pressure, ignition, burner assemblies, regulators, valves, airflow, controls, corrosion-prone areas, and installation clearances before recommending parts or adjustment.</p>
        </>
      )
    },
    {
      id: "alfresco-outdoor-cooktop-repair",
      title: "Alfresco Outdoor Cooktop Repair",
      heading: "Alfresco Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/alfresco-outdoor-cooktop-repair.webp",*/
      alt: "Alfresco outdoor cooktop repair technician servicing a Versa Power burner",
      description: (
        <>
          <p>Our <strong>Alfresco outdoor cooktop repair</strong> service covers Alfresco Versa Power burners, side burners, sear-zone cooking modules, built-in outdoor-kitchen surfaces, and premium burner stations. Alfresco cooking systems depend on strong gas output, reliable ignition, weather resistance, and proper enclosure ventilation.</p>
          <h3>Alfresco Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Versa Power or side burners not reaching proper high-output cooking temperature</li>
            <li>✅ Igniters, gas valves, regulators, or burner ports causing delayed ignition or weak flame</li>
            <li>✅ Sear-zone or specialty burner sections heating unevenly</li>
            <li>✅ Outdoor corrosion and moisture exposure around ignition and burner components</li>
            <li>✅ Built-in enclosure ventilation, clearance, regulator, or gas-pressure issues</li>
            <li>✅ Control knobs, switches, and stainless components wearing in outdoor conditions</li>
          </ul>
          <h3>How We Fix These Alfresco Outdoor Cooktop Issues</h3>
          <p>We inspect burner output, gas pressure, ignition, regulators, valves, specialty sections, ventilation, clearances, and weather-exposed parts so the outdoor cooktop performs safely.</p>
        </>
      )
    },
    {
      id: "fire-magic-outdoor-cooktop-repair",
      title: "Fire Magic Outdoor Cooktop Repair",
      heading: "Fire Magic Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/fire-magic-outdoor-cooktop-repair.webp",*/
      alt: "Fire Magic outdoor cooktop repair technician servicing a built-in power burner",
      description: (
        <>
          <p>We provide <strong>Fire Magic outdoor cooktop repair</strong> for Fire Magic power burners, side burners, built-in burner stations, and outdoor cooking modules used in luxury outdoor kitchens. Fire Magic surfaces may include electronic ignition, gas controls, stainless components, and weather-exposed wiring.</p>
          <h3>Fire Magic Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Power burners or side burners with ignition and flame-stability issues</li>
            <li>✅ Gas valves, regulators, electrodes, or switches causing inconsistent burner operation</li>
            <li>✅ Burners failing to reach expected cooking temperature</li>
            <li>✅ Control-panel, wiring, or power-supply problems on electronically ignited models</li>
            <li>✅ Outdoor corrosion around burners, wiring, fasteners, and control housings</li>
            <li>✅ Ventilation and clearance issues inside outdoor kitchen enclosures</li>
          </ul>
          <h3>How We Fix These Fire Magic Outdoor Cooktop Issues</h3>
          <p>We test ignition, gas delivery, valves, regulators, switches, wiring, burners, power supply, and built-in enclosure conditions so the outdoor cooking module performs safely.</p>
        </>
      )
    },
    {
      id: "dcs-cooktop-repair",
      title: "DCS Cooktop Repair",
      heading: "DCS Cooktop Repair",
      /*img: "/cooktop-repair/dcs-cooktop-repair.webp",*/
      alt: "DCS cooktop repair technician servicing a premium rangetop or outdoor burner module",
      description: (
        <>
          <p>Our <strong>DCS cooktop repair</strong> service supports legacy DCS indoor gas cooking surfaces, professional rangetops, sealed burners, griddle sections, and DCS outdoor side-burner or power-burner modules. DCS diagnosis depends on whether the appliance is an indoor legacy platform or part of an outdoor cooking setup.</p>
          <h3>DCS Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top burners with ignition, gas-valve, burner-port, or flame-stability problems</li>
            <li>✅ Legacy controls, switches, or spark components becoming intermittent</li>
            <li>✅ Griddle sections heating unevenly or taking too long to recover</li>
            <li>✅ Outdoor power burners or side burners affected by regulators, ignition, or corrosion</li>
            <li>✅ Weather-related wear on outdoor controls, wiring, fasteners, and burner assemblies</li>
            <li>✅ Parts-availability differences between legacy indoor cooktops and current outdoor products</li>
          </ul>
          <h3>How We Fix These DCS Cooktop Issues</h3>
          <p>We identify the DCS platform first, then test burners, gas systems, spark components, valves, regulators, griddle controls, wiring, controls, and outdoor ventilation depending on the model.</p>
        </>
      )
    },
    {
      id: "twin-eagles-outdoor-cooktop-repair",
      title: "Twin Eagles Outdoor Cooktop Repair",
      heading: "Twin Eagles Outdoor Cooktop Repair",
      /*img: "/cooktop-repair/twin-eagles-outdoor-cooktop-repair.webp",*/
      alt: "Twin Eagles outdoor cooktop repair technician servicing a premium outdoor burner",
      description: (
        <>
          <p>We provide <strong>Twin Eagles outdoor cooktop repair</strong> for power burners, side burners, built-in outdoor burner stations, searing modules, and premium outdoor-kitchen cooking surfaces. Twin Eagles service often involves gas delivery, ignition, infrared components, controls, lighting, ventilation, and outdoor exposure.</p>
          <h3>Twin Eagles Outdoor Cooktop Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Power burners, side burners, or searing sections with ignition and flame-stability problems</li>
            <li>✅ Gas valves, regulators, igniters, or burner ports causing weak or uneven output</li>
            <li>✅ Infrared or high-heat sections failing to reach expected temperature</li>
            <li>✅ Control knobs, lighting, switches, or wiring issues from outdoor exposure</li>
            <li>✅ Ventilation and enclosure-clearance concerns in built-in outdoor kitchens</li>
            <li>✅ Corrosion, moisture exposure, and seasonal maintenance needs around burners and controls</li>
          </ul>
          <h3>How We Fix These Twin Eagles Outdoor Cooktop Issues</h3>
          <p>We inspect gas delivery, burner output, infrared heat, ignition, regulators, valves, lighting, controls, airflow, enclosure ventilation, and corrosion-prone areas so the outdoor cooking surface performs safely.</p>
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
