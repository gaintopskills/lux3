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
      id: "kalamazoo-bbq-grill-repair",
      title: "Kalamazoo BBQ Grill Repair",
      heading: "Kalamazoo BBQ Grill Repair",
      img: "/bbq-grill-repair/kalamazoo-bbq-grill-repair.webp",
      alt: "Kalamazoo BBQ grill repair technician servicing a luxury Hybrid Fire outdoor grill",
      description: (
        <>
          <p>We provide <strong>Kalamazoo BBQ grill repair</strong> for Hybrid Fire built-in and freestanding grills, K500, K750, and K1000 platforms, multi-fuel outdoor cooking installations, gas burner systems, charcoal and wood-fuel cooking components, rotisserie-equipped configurations, and matching outdoor-kitchen modules. Kalamazoo Hybrid Fire grills are designed to cook with gas, wood, and charcoal, so diagnosis should evaluate the complete multi-fuel system rather than treating the appliance like an ordinary gas grill.</p>
          <h3>Kalamazoo BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Hybrid Fire grill not igniting, preheating slowly, or producing uneven heat across the cooking surface</li>
            <li>✅ Gas burner, valve, regulator, manifold, or ignition concern affecting reliable startup</li>
            <li>✅ Wood or charcoal cooking insert, fire grate, ash-management, or airflow condition affecting multi-fuel performance</li>
            <li>✅ Rotisserie motor, rear-burner, spit-rod, or accessory concern where equipped</li>
            <li>✅ Grease-management, drainage, stainless-steel surface, hood, hinge, or enclosure issue</li>
            <li>✅ Weather exposure, ventilation, gas-conversion, or outdoor-kitchen installation detail affecting operation</li>
          </ul>
          <h3>How We Fix These Kalamazoo BBQ Grill Issues</h3>
          <p>We inspect gas supply, fuel type, regulator pressure, valves, manifold, burners, ignition components, electrodes, wiring, airflow, multi-fuel inserts, charcoal and wood-fire components, grates, hood operation, grease-management parts, drainage, rotisserie components, enclosure ventilation, and installation clearances. We confirm the complete Kalamazoo model information before recommending parts or service.</p>
        </>
      )
    },
    {
      id: "lynx-bbq-grill-repair",
      title: "Lynx BBQ Grill Repair",
      heading: "Lynx BBQ Grill Repair",
      /*img: "/bbq-grill-repair/lynx-bbq-grill-repair.webp",*/
      alt: "Lynx BBQ grill repair technician servicing a Professional built-in outdoor grill",
      description: (
        <>
          <p>Our <strong>Lynx BBQ grill repair</strong> service covers Professional built-in grills, freestanding grill carts, Trident infrared burner configurations, ceramic burner configurations, rotisserie-equipped grills, smoker boxes, side burners, power burners, blue-lit controls, and luxury outdoor-kitchen installations. Lynx grill service should account for both high-output burner performance and the lighting, ignition, hood, and rotisserie systems built into the appliance.</p>
          <h3>Lynx BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Trident infrared or ceramic burner not igniting, heating unevenly, or producing weak output</li>
            <li>✅ Spark ignition, electrode, wiring, battery, transformer, or control-knob concern</li>
            <li>✅ Rotisserie back burner, motor, spit rod, or accessory system not operating correctly</li>
            <li>✅ Blue-lit control knobs, halogen surface lights, switches, or electrical components not working</li>
            <li>✅ Smoker box, briquette tray, grates, grease tray, or heat-stabilizing components requiring service</li>
            <li>✅ Hood-assist, handle, hinge, gas-pressure, ventilation, or built-in enclosure concern</li>
          </ul>
          <h3>How We Fix These Lynx BBQ Grill Issues</h3>
          <p>We inspect the grill model, fuel type, gas supply, regulators, valves, burners, ignition electrodes, spark modules, wiring, batteries or transformers, ceramic or infrared components, smoker box, grates, heat-stabilizing parts, grease tray, hood-assist hardware, rotisserie burner, motor, lights, switches, enclosure ventilation, and installation clearances.</p>
        </>
      )
    },
    {
      id: "sedona-by-lynx-bbq-grill-repair",
      title: "Sedona by Lynx BBQ Grill Repair",
      heading: "Sedona by Lynx BBQ Grill Repair",
      /*img: "/bbq-grill-repair/sedona-by-lynx-bbq-grill-repair.webp",*/
      alt: "Sedona by Lynx BBQ grill repair technician servicing a built-in outdoor gas grill",
      description: (
        <>
          <p>We provide <strong>Sedona by Lynx BBQ grill repair</strong> for built-in and freestanding Sedona grills, stainless-steel burner models, ProSear infrared burner configurations, direct-spark ignition systems with battery backup, rotisserie-equipped models, halogen grill lights, and outdoor-kitchen installations. Sedona repair should separate burner, ignition, lighting, rotisserie, and hood-operation symptoms before parts are replaced.</p>
          <h3>Sedona by Lynx BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ ProSear infrared burner or stainless-steel burner not igniting or heating evenly</li>
            <li>✅ Direct-spark ignition or battery-backup system clicking without reliable ignition</li>
            <li>✅ Rotisserie rear burner, motor, spit rod, forks, or wiring concern where equipped</li>
            <li>✅ Halogen surface light, switch, temperature gauge, or illuminated-control issue</li>
            <li>✅ Heat-stabilizing parts, grates, grease tray, burner ports, or internal buildup affecting performance</li>
            <li>✅ Hood-assist, handle, hinge, gas pressure, fuel conversion, or enclosure ventilation concern</li>
          </ul>
          <h3>How We Fix These Sedona by Lynx BBQ Grill Issues</h3>
          <p>We test the gas supply, fuel type, regulators, valves, burners, ProSear components where equipped, spark electrodes, ignition module, battery backup, wiring, rotisserie system, lights, switches, temperature gauge, heat-stabilizing parts, grates, grease tray, hood-assist hardware, and outdoor-kitchen clearances.</p>
        </>
      )
    },
    {
      id: "hestan-outdoor-bbq-grill-repair",
      title: "Hestan Outdoor BBQ Grill Repair",
      heading: "Hestan Outdoor BBQ Grill Repair",
      /*img: "/bbq-grill-repair/hestan-outdoor-bbq-grill-repair.webp",*/
      alt: "Hestan Outdoor BBQ grill repair technician servicing a luxury built-in outdoor grill",
      description: (
        <>
          <p>Our <strong>Hestan Outdoor BBQ grill repair</strong> service covers Hestan built-in grills, freestanding grills, all-burner and mixed-burner configurations, rotisserie-equipped outdoor cooking systems, signature-color appliances, matching side burners, power burners, and luxury outdoor-living suites. Hestan grills combine high-output cooking performance with premium hood, lighting, ignition, and outdoor-rated components that should be inspected together.</p>
          <h3>Hestan Outdoor BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Hestan grill burner not igniting, producing weak flame, or heating unevenly</li>
            <li>✅ Mixed-burner or infrared cooking section not performing as expected</li>
            <li>✅ Rotisserie burner, motor, spit assembly, or related accessory concern</li>
            <li>✅ Under-hood Stadium Lights, switches, wiring, or illuminated controls not operating</li>
            <li>✅ Horizon Hood, hinge, handle, grate, grease tray, or internal component issue</li>
            <li>✅ Power burner, side burner, gas-pressure, regulator, or outdoor-suite installation concern</li>
          </ul>
          <h3>How We Fix These Hestan Outdoor BBQ Grill Issues</h3>
          <p>We inspect fuel type, gas delivery, regulators, valves, burners, infrared components where equipped, electrodes, ignition modules, wiring, hood hardware, under-hood lighting, switches, grates, heat-distribution components, grease-management parts, rotisserie system, matching burner modules, and outdoor-kitchen ventilation.</p>
        </>
      )
    },
    {
      id: "viking-outdoor-bbq-grill-repair",
      title: "Viking Outdoor BBQ Grill Repair",
      heading: "Viking Outdoor BBQ Grill Repair",
      /*img: "/bbq-grill-repair/viking-outdoor-bbq-grill-repair.webp",*/
      alt: "Viking Outdoor BBQ grill repair technician servicing a built-in grill with ProSear burner",
      description: (
        <>
          <p>We provide <strong>Viking Outdoor BBQ grill repair</strong> for 5 Series built-in grills, supported freestanding installations, ProSear burner configurations, cast-brass burner systems, ceramic-briquette heat-distribution components, dual-position rotisserie assemblies, surface lighting, and matching outdoor-kitchen modules. Viking outdoor grills require careful inspection of burner output, briquette condition, rotisserie operation, and gas delivery.</p>
          <h3>Viking Outdoor BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Cast-brass burner or ProSear section not igniting, heating evenly, or reaching proper output</li>
            <li>✅ Ceramic briquettes, trays, grates, or internal buildup affecting radiant heat distribution</li>
            <li>✅ Dual-position rotisserie burner, motor, spit assembly, or rear-infrared system concern</li>
            <li>✅ Igniter, electrode, wiring, control illumination, or halogen surface-light failure</li>
            <li>✅ Valve, regulator, manifold, gas-supply, or natural-gas-versus-propane configuration issue</li>
            <li>✅ Hood, hinge, handle, grease tray, insulated-jacket, or outdoor-island installation concern</li>
          </ul>
          <h3>How We Fix These Viking Outdoor BBQ Grill Issues</h3>
          <p>We test gas supply, regulators, valves, manifold, cast-brass burners, ProSear components where equipped, ignition parts, electrodes, wiring, ceramic briquettes, trays, grates, grease-management parts, rotisserie assembly, lights, controls, hood hardware, insulated-jacket requirements, and enclosure ventilation.</p>
        </>
      )
    },
    {
      id: "dcs-bbq-grill-repair",
      title: "DCS BBQ Grill Repair",
      heading: "DCS BBQ Grill Repair",
      /*img: "/bbq-grill-repair/dcs-bbq-grill-repair.webp",*/
      alt: "DCS BBQ grill repair technician servicing a Series 7 built-in outdoor grill",
      description: (
        <>
          <p>Our <strong>DCS BBQ grill repair</strong> service covers Series 7 and Series 9 built-in grills, freestanding cart installations, U-burner systems, Ceramic Radiant Technology, rotisserie-equipped models, infrared sear-burner configurations, charcoal-assisted Series 9 platforms, side burners, and premium outdoor kitchens. DCS repair should account for gas delivery, radiant components, ignition, and model-specific cooking accessories.</p>
          <h3>DCS BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ U-burner or infrared sear burner not igniting, producing weak heat, or heating unevenly</li>
            <li>✅ Ceramic radiant rods, trays, grates, or internal buildup affecting heat distribution</li>
            <li>✅ Rotisserie burner, heavy-duty motor, spit assembly, or storage components requiring service</li>
            <li>✅ Battery-powered ignition, electrodes, wiring, valves, regulator, or gas-supply issue</li>
            <li>✅ Series 9 charcoal insert or hybrid cooking configuration not operating as expected</li>
            <li>✅ Grease tray, hood, handle, enclosure ventilation, insulated-jacket, or weather-exposure concern</li>
          </ul>
          <h3>How We Fix These DCS BBQ Grill Issues</h3>
          <p>We identify the Series 7 or Series 9 platform and inspect fuel type, gas pressure, regulators, valves, U-burners, infrared components, ceramic radiant rods, trays, grates, ignition batteries, electrodes, wiring, rotisserie system, charcoal-assisted components where equipped, grease tray, hood hardware, and built-in installation details.</p>
        </>
      )
    },
    {
      id: "alfresco-bbq-grill-repair",
      title: "Alfresco BBQ Grill Repair",
      heading: "Alfresco BBQ Grill Repair",
      /*img: "/bbq-grill-repair/alfresco-bbq-grill-repair.webp",*/
      alt: "Alfresco BBQ grill repair technician servicing an LXE luxury outdoor grill",
      description: (
        <>
          <p>We provide <strong>Alfresco BBQ grill repair</strong> for LXE luxury grills, Accufire burner systems, optional or integrated Sear Zone infrared burners, Mega-Drive rotisserie systems, Signature Taste integrated smoking systems, halogen work lights, push-button ignition systems, and built-in outdoor-kitchen installations. Alfresco service should evaluate the grill as a complete high-performance cooking system.</p>
          <h3>Alfresco BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Accufire main burner or Sear Zone infrared burner not igniting or reaching expected output</li>
            <li>✅ Mega-Drive rotisserie burner, motor, chain-drive, spit assembly, or rear-heat concern</li>
            <li>✅ Signature Taste smoker drawer, dedicated burner, ignition, or airflow issue</li>
            <li>✅ Push-button ignition, electrode, sealed power supply, switch, wiring, or halogen-light failure</li>
            <li>✅ Air-cooled control panel, hood, hinge, warming rack, grease tray, or internal buildup concern</li>
            <li>✅ Gas regulator, valve, manifold, ventilation, insulated-jacket, or outdoor-island installation issue</li>
          </ul>
          <h3>How We Fix These Alfresco BBQ Grill Issues</h3>
          <p>We inspect the Alfresco model, gas supply, regulators, valves, manifolds, Accufire burners, Sear Zone components where equipped, ignition system, wiring, sealed electrical supply, lights, air-cooled front-panel conditions, Signature Taste smoker components, Mega-Drive rotisserie system, grates, grease tray, hood hardware, and enclosure clearances.</p>
        </>
      )
    },
    {
      id: "artisan-bbq-grill-repair",
      title: "Artisan BBQ Grill Repair",
      heading: "Artisan BBQ Grill Repair",
      /*img: "/bbq-grill-repair/artisan-bbq-grill-repair.webp",*/
      alt: "Artisan BBQ grill repair technician servicing a built-in Professional Series outdoor grill",
      description: (
        <>
          <p>Our <strong>Artisan BBQ grill repair</strong> service covers Artisan Professional Series built-in grills, freestanding carts, stainless-steel U-burners, infrared rear-rotisserie burners, electronic ignition, halogen work lights, warming racks, and supported outdoor-kitchen configurations. As an Alfresco-related outdoor cooking line, Artisan grills still require model-specific diagnosis and correct part identification.</p>
          <h3>Artisan BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Stainless-steel U-burner not lighting, heating evenly, or producing proper flame</li>
            <li>✅ Infrared rear-rotisserie burner, motor, spit rod, forks, or wiring concern</li>
            <li>✅ Electronic ignition, electrode, module, transformer, switch, or halogen-light issue</li>
            <li>✅ Warming rack, grates, drip tray, hood, handle, or internal buildup affecting use</li>
            <li>✅ Valve, manifold, regulator, fuel-conversion, or gas-supply concern</li>
            <li>✅ Outdoor-island ventilation, insulated-jacket, weather-exposure, or installation issue</li>
          </ul>
          <h3>How We Fix These Artisan BBQ Grill Issues</h3>
          <p>We inspect gas delivery, fuel type, regulators, valves, manifold, U-burners, infrared rotisserie burner, ignition system, electrodes, wiring, lights, switches, grates, warming rack, grease-management parts, hood hardware, and installation clearances. We use the full model number to match Artisan-specific components.</p>
        </>
      )
    },
    {
      id: "twin-eagles-bbq-grill-repair",
      title: "Twin Eagles BBQ Grill Repair",
      heading: "Twin Eagles BBQ Grill Repair",
      /*img: "/bbq-grill-repair/twin-eagles-bbq-grill-repair.webp",*/
      alt: "Twin Eagles BBQ grill repair technician servicing a luxury C Series built-in grill",
      description: (
        <>
          <p>We provide <strong>Twin Eagles BBQ grill repair</strong> for C Series grills, Eagle One grills, supported pellet grills, built-in and freestanding installations, optional sear-zone configurations, rotisserie-equipped models, ceramic-briquette systems, zone dividers, hexagonal stainless-steel grates, side burners, and power burners. Twin Eagles repair should account for the brand's multi-part heat-production and heat-retention system.</p>
          <h3>Twin Eagles BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Main U-burner or optional infrared sear zone not igniting or heating correctly</li>
            <li>✅ Ceramic briquettes, briquette trays, zone dividers, or hexagonal grates affecting heat distribution</li>
            <li>✅ Infrared rotisserie burner, motor, spit rod, smoker box, or accessory concern</li>
            <li>✅ Ignition module, battery pack, electrode, flash tube, microswitch, or wiring failure</li>
            <li>✅ Valve, regulator, manifold, gas-pressure, or burner-port issue</li>
            <li>✅ Pellet-grill controls, outdoor exposure, hood, handle, ventilation, or built-in installation concern where applicable</li>
          </ul>
          <h3>How We Fix These Twin Eagles BBQ Grill Issues</h3>
          <p>We inspect the specific Twin Eagles platform, gas supply, regulators, valves, burners, infrared sear components where equipped, ceramic briquettes, trays, dividers, grates, ignition module, batteries, electrodes, flash tubes, wiring, rotisserie system, smoker box, hood hardware, and outdoor-kitchen clearances. Pellet-grill symptoms are diagnosed according to the installed model.</p>
        </>
      )
    },
    {
      id: "delta-heat-bbq-grill-repair",
      title: "Delta Heat BBQ Grill Repair",
      heading: "Delta Heat BBQ Grill Repair",
      /*img: "/bbq-grill-repair/delta-heat-bbq-grill-repair.webp",*/
      alt: "Delta Heat BBQ grill repair technician servicing a premium built-in outdoor gas grill",
      description: (
        <>
          <p>Our <strong>Delta Heat BBQ grill repair</strong> service covers built-in and freestanding Delta Heat gas grills, standard and Color Edition configurations, stainless-steel burner systems, optional infrared sear zones, rotisserie-equipped models, side burners, power burners, ignition components, and premium outdoor kitchens. Delta Heat service should evaluate burner performance, ignition, gas pressure, and accessory systems together.</p>
          <h3>Delta Heat BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Main burner or optional infrared sear-zone burner not igniting or heating evenly</li>
            <li>✅ Infrared rotisserie burner, safety valve, motor, spit rod, or accessory concern</li>
            <li>✅ Battery pack, ignition module, spark igniter, electrode, microswitch, or wiring problem</li>
            <li>✅ Regulator, valve, manifold, or natural-gas-versus-propane supply issue</li>
            <li>✅ Briquette tray, grates, grease tray, thermometer, hood, handle, or internal buildup concern</li>
            <li>✅ Side burner, power burner, ventilation, finish-protection, or built-in installation issue</li>
          </ul>
          <h3>How We Fix These Delta Heat BBQ Grill Issues</h3>
          <p>We inspect the Delta Heat model, fuel type, gas pressure, regulator, valves, burners, infrared sear components where equipped, rotisserie burner and safety valve, ignition module, battery pack, electrodes, microswitches, wiring, briquette trays, grates, grease tray, thermometer, hood hardware, accessory burners, and enclosure clearances.</p>
        </>
      )
    },
    {
      id: "fire-magic-bbq-grill-repair",
      title: "Fire Magic BBQ Grill Repair",
      heading: "Fire Magic BBQ Grill Repair",
      /*img: "/bbq-grill-repair/fire-magic-bbq-grill-repair.webp",*/
      alt: "Fire Magic BBQ grill repair technician servicing an Echelon Diamond built-in grill",
      description: (
        <>
          <p>We provide <strong>Fire Magic BBQ grill repair</strong> for Echelon Diamond grills, Aurora grills, supported Choice and Legacy installations, current electric-grill platforms where applicable, hot-surface ignition systems, cast stainless-steel burners, Diamond Sear grids, rotisserie systems, black-glass control panels, digital touchscreens, Bluetooth-enabled features, and premium outdoor kitchens.</p>
          <h3>Fire Magic BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Hot-surface ignition, spark ignition, electrode, wiring, or control issue preventing reliable startup</li>
            <li>✅ Cast stainless-steel burner, infrared burner, rotisserie burner, or heat-distribution concern</li>
            <li>✅ Echelon touchscreen, Bluetooth feature, display, sensor, switch, lighting, or black-glass-panel issue</li>
            <li>✅ Diamond Sear grids, internal liners, drip tray, grease management, or buildup affecting performance</li>
            <li>✅ Electric-grill control, heating, sensor, or power-supply concern where applicable</li>
            <li>✅ Valve, regulator, manifold, gas supply, hood, handle, ventilation, or built-in installation issue</li>
          </ul>
          <h3>How We Fix These Fire Magic BBQ Grill Issues</h3>
          <p>We identify the Fire Magic series and inspect fuel type, gas delivery, valves, regulators, burners, infrared components, hot-surface or spark ignition parts, electrodes, wiring, controls, touchscreen functions where equipped, lights, sensors, grids, liners, grease-management parts, rotisserie system, electric-grill components where applicable, hood hardware, and enclosure ventilation.</p>
        </>
      )
    },
    {
      id: "wolf-outdoor-bbq-grill-repair",
      title: "Wolf Outdoor BBQ Grill Repair",
      heading: "Wolf Outdoor BBQ Grill Repair",
      /*img: "/bbq-grill-repair/wolf-outdoor-bbq-grill-repair.webp",*/
      alt: "Wolf Outdoor BBQ grill repair technician servicing an OG Series built-in gas grill",
      description: (
        <>
          <p>Our <strong>Wolf Outdoor BBQ grill repair</strong> service supports existing Wolf OG Series outdoor gas grills, including OG30, OG36, OG42, and OG54 installations, supported freestanding carts, built-in applications, ceramic-briquette radiant systems, rotisserie components, side-burner modules, and infrared sear zones on applicable models. Because U.S. Wolf OG product listings currently show limited availability, careful model identification is especially important for service planning.</p>
          <h3>Wolf Outdoor BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Independent gas burner or infrared sear zone not igniting, heating evenly, or reaching proper output</li>
            <li>✅ Ceramic briquettes, trays, grates, or buildup affecting radiant heat distribution</li>
            <li>✅ Rotisserie burner, motor, spit assembly, side-burner module, or accessory concern</li>
            <li>✅ Ignition, electrode, wiring, switch, lighting, thermometer, or control problem</li>
            <li>✅ Regulator, valve, manifold, natural-gas-versus-propane, or gas-pressure issue</li>
            <li>✅ Hood, hinge, grease tray, cart, insulating liner, or built-in enclosure concern</li>
          </ul>
          <h3>How We Fix These Wolf Outdoor BBQ Grill Issues</h3>
          <p>We confirm the installed Wolf OG model and inspect fuel type, gas supply, regulators, valves, burners, infrared sear zone where equipped, ceramic briquettes, trays, grates, ignition components, electrodes, wiring, rotisserie system, side-burner module, grease tray, hood hardware, cart condition, insulating-liner requirements, and ventilation clearances.</p>
        </>
      )
    },
    {
      id: "caliber-bbq-grill-repair",
      title: "Caliber BBQ Grill Repair",
      heading: "Caliber BBQ Grill Repair",
      /*img: "/bbq-grill-repair/caliber-bbq-grill-repair.webp",*/
      alt: "Caliber BBQ grill repair technician servicing a Rockwell Social Grill in a luxury outdoor kitchen",
      description: (
        <>
          <p>We provide <strong>Caliber BBQ grill repair</strong> for True Caliber outdoor cooking products, Rockwell Social Grills, 36-inch and 48-inch built-in installations, disappearing-lid configurations, Crossflame burner systems, pull-out grease-management trays, custom-finish appliances, and luxury outdoor kitchens. Caliber service should account for the unusual 360-degree social-grill design and its model-specific mechanical details.</p>
          <h3>Caliber BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Crossflame burner not igniting, heating evenly, or producing expected output</li>
            <li>✅ Disappearing lid not opening, closing, aligning, or moving smoothly</li>
            <li>✅ Ignition, electrode, valve, regulator, manifold, or fuel-supply concern</li>
            <li>✅ Pull-out grease tray, drainage, stainless interior, grate, or cleanup component issue</li>
            <li>✅ Custom finish, hardware, built-in cutout, ventilation, or installation detail affecting access</li>
            <li>✅ Uneven heat, internal buildup, outdoor exposure, or model-specific part-identification concern</li>
          </ul>
          <h3>How We Fix These Caliber BBQ Grill Issues</h3>
          <p>We inspect the Rockwell model, gas supply, regulators, valves, Crossflame burners, ignition parts, electrodes, wiring, grease-management tray, grates, stainless interior, disappearing-lid mechanism, hardware, custom finish condition, ventilation, and outdoor-kitchen clearances. We verify the exact configuration before recommending parts.</p>
        </>
      )
    },
    {
      id: "coyote-bbq-grill-repair",
      title: "Coyote BBQ Grill Repair",
      heading: "Coyote BBQ Grill Repair",
      /*img: "/bbq-grill-repair/coyote-bbq-grill-repair.webp",*/
      alt: "Coyote BBQ grill repair technician servicing an SL-Series built-in gas grill",
      description: (
        <>
          <p>Our <strong>Coyote BBQ grill repair</strong> service covers SL-Series built-in grills, supported freestanding carts, Infinity burner systems, RapidSear infrared burners, rear-infrared rotisserie burners, ceramic-briquette heat-distribution components, Flame Thrower ignition, thermocouple safety systems, smoker boxes, and outdoor-kitchen installations.</p>
          <h3>Coyote BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Infinity burner or RapidSear infrared burner not igniting, heating evenly, or producing proper flame</li>
            <li>✅ Flame Thrower ignition, thermocouple, safety valve, electrode, wiring, or control issue</li>
            <li>✅ Rear-infrared rotisserie burner, motor, spit rod, or accessory concern</li>
            <li>✅ Ceramic briquettes, heat-zone separators, grates, warming rack, or smoker-box issue</li>
            <li>✅ Backlit knobs, halogen lights, temperature gauge, hood-assist, or handle problem</li>
            <li>✅ Regulator, gas supply, ventilation, insulated-jacket, or built-in installation concern</li>
          </ul>
          <h3>How We Fix These Coyote BBQ Grill Issues</h3>
          <p>We inspect the Coyote series, fuel type, regulators, valves, Infinity burners, RapidSear burner where equipped, rear rotisserie burner, Flame Thrower ignition, thermocouples, safety valves, electrodes, wiring, ceramic briquettes, zone separators, grates, lights, temperature gauge, hood-assist parts, grease tray, and enclosure clearances.</p>
        </>
      )
    },
    {
      id: "blaze-bbq-grill-repair",
      title: "Blaze BBQ Grill Repair",
      heading: "Blaze BBQ Grill Repair",
      /*img: "/bbq-grill-repair/blaze-bbq-grill-repair.webp",*/
      alt: "Blaze BBQ grill repair technician servicing a Premium LTE Plus built-in outdoor grill",
      description: (
        <>
          <p>We provide <strong>Blaze BBQ grill repair</strong> for Premium LTE+ grills, supported LTE and Prelude installations, built-in grill heads, freestanding carts, cast stainless-steel burners, rear-infrared rotisserie burners, flame-stabilizing grids, heat-zone separators, flame-thrower ignition systems, flash-tube backup ignition, hood-assist mechanisms, interior lighting, and illuminated controls.</p>
          <h3>Blaze BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Cast stainless-steel burner or infrared rear burner not igniting or heating evenly</li>
            <li>✅ Flame-thrower ignition, flash tube, crossover, electrode, wiring, or control-knob concern</li>
            <li>✅ Rear rotisserie burner, motor, spit rod, forks, or accessory issue</li>
            <li>✅ Flame-stabilizing grid, zone separator, grate, warming rack, drip tray, or buildup concern</li>
            <li>✅ Interior lights, illuminated knobs, switch, hood assist, handle, or temperature gauge problem</li>
            <li>✅ Gas regulator, valve, fuel conversion, ventilation, marine-grade, or built-in installation concern</li>
          </ul>
          <h3>How We Fix These Blaze BBQ Grill Issues</h3>
          <p>We inspect the Blaze model, fuel type, gas supply, regulators, valves, cast burners, rear rotisserie burner, ignition system, flash tubes, crossovers, electrodes, wiring, flame-stabilizing grids, heat-zone separators, grates, warming rack, drip tray, lights, switches, hood-assist hardware, and enclosure clearances.</p>
        </>
      )
    },
    {
      id: "napoleon-bbq-grill-repair",
      title: "Napoleon BBQ Grill Repair",
      heading: "Napoleon BBQ Grill Repair",
      /*img: "/bbq-grill-repair/napoleon-bbq-grill-repair.webp",*/
      alt: "Napoleon BBQ grill repair technician servicing a built-in Prestige PRO outdoor gas grill",
      description: (
        <>
          <p>Our <strong>Napoleon BBQ grill repair</strong> service covers built-in Prestige PRO grills, Built-In 700 Series and 500 Series models, Prestige freestanding grills, infrared side and rear burners, rotisserie-equipped configurations, outdoor-kitchen installations, illuminated controls, ignition systems, and supported smart or connected features where applicable.</p>
          <h3>Napoleon BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Main burner, infrared side burner, or infrared rear burner not igniting or heating properly</li>
            <li>✅ Ignition, electrode, wiring, crossover, valve, regulator, or gas-supply concern</li>
            <li>✅ Rear-burner rotisserie system, motor, spit rod, forks, or accessory issue</li>
            <li>✅ Illuminated knobs, lighting, display, smart-control, sensor, or power-supply concern where equipped</li>
            <li>✅ Grates, sear plates, warming rack, drip tray, hood, hinge, or internal buildup problem</li>
            <li>✅ Built-in cutout, ventilation, fuel conversion, weather exposure, or enclosure condition affecting operation</li>
          </ul>
          <h3>How We Fix These Napoleon BBQ Grill Issues</h3>
          <p>We identify the Napoleon series and inspect fuel type, gas delivery, regulators, valves, burners, infrared components, ignition electrodes, wiring, crossover parts, rotisserie system, lights, illuminated controls, connected functions where equipped, grates, sear plates, grease-management parts, hood hardware, and installation clearances.</p>
        </>
      )
    },
    {
      id: "bull-bbq-grill-repair",
      title: "Bull BBQ Grill Repair",
      heading: "Bull BBQ Grill Repair",
      /*img: "/bbq-grill-repair/bull-bbq-grill-repair.webp",*/
      alt: "Bull BBQ grill repair technician servicing an Angus drop-in outdoor grill head",
      description: (
        <>
          <p>We provide <strong>Bull BBQ grill repair</strong> for Angus, Brahma, Diablo, and supported Bull drop-in grill heads, freestanding carts, outdoor-kitchen islands, cast stainless-steel burner systems, infrared back burners, optional rotisserie kits, stainless-steel hoods, and built-in outdoor cooking installations. Bull repair should verify the grill generation because accessory and rotisserie configurations may vary.</p>
          <h3>Bull BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Cast stainless-steel burner or infrared back burner not igniting or producing proper output</li>
            <li>✅ Ignition, electrode, wiring, valve, regulator, manifold, or gas-supply issue</li>
            <li>✅ Rotisserie motor, spit rod, forks, optional kit, or rear-burner concern</li>
            <li>✅ Flame tamer, grate, warming rack, grease tray, hood, handle, or internal buildup problem</li>
            <li>✅ Uneven heat, excessive flare-ups, low flame, or burner-port obstruction</li>
            <li>✅ Outdoor-kitchen island, ventilation, fuel conversion, weather exposure, or access concern</li>
          </ul>
          <h3>How We Fix These Bull BBQ Grill Issues</h3>
          <p>We confirm the Bull grill model and generation, then inspect fuel type, gas pressure, regulators, valves, manifold, cast burners, infrared back burner, ignition components, electrodes, wiring, rotisserie kit where equipped, flame tamers, grates, grease tray, hood hardware, outdoor-island access, and ventilation.</p>
        </>
      )
    },
    {
      id: "tec-bbq-grill-repair",
      title: "TEC BBQ Grill Repair",
      heading: "TEC BBQ Grill Repair",
      /*img: "/bbq-grill-repair/tec-bbq-grill-repair.webp",*/
      alt: "TEC BBQ grill repair technician servicing a Sterling Patio infrared outdoor grill",
      description: (
        <>
          <p>Our <strong>TEC BBQ grill repair</strong> service covers supported Patio FR, Sterling Patio, G-Sport, and legacy TEC infrared grills, built-in installations, freestanding carts, infrared burner systems, radiant-glass cooking components, spark ignition, valves, regulators, and outdoor-kitchen configurations. TEC grills use infrared cooking technology, so service should evaluate burner output and radiant surfaces differently from a conventional open-flame grill.</p>
          <h3>TEC BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Infrared burner not igniting, producing low output, or heating unevenly</li>
            <li>✅ Radiant-glass panel, support bracket, grate, or buildup concern affecting cooking performance</li>
            <li>✅ Electric or push-button igniter, spark electrode, battery, wiring, or control issue</li>
            <li>✅ Regulator, burner-control valve, orifice, gas-supply, or fuel-conversion concern</li>
            <li>✅ Hood, hinge, handle, warming rack, stainless surface, or built-in cutout issue</li>
            <li>✅ Legacy-model part identification, outdoor exposure, or maintenance-related performance decline</li>
          </ul>
          <h3>How We Fix These TEC BBQ Grill Issues</h3>
          <p>We identify the TEC model and inspect fuel type, regulator, burner-control valve, orifices, gas supply, infrared burner condition, radiant-glass panels, supports, grates, ignition system, electrodes, wiring, hood hardware, warming rack, stainless surfaces, built-in clearances, and model-specific replacement-part compatibility.</p>
        </>
      )
    },
    {
      id: "solaire-bbq-grill-repair",
      title: "Solaire BBQ Grill Repair",
      heading: "Solaire BBQ Grill Repair",
      /*img: "/bbq-grill-repair/solaire-bbq-grill-repair.webp",*/
      alt: "Solaire BBQ grill repair technician servicing a built-in infrared gas grill",
      description: (
        <>
          <p>We provide <strong>Solaire BBQ grill repair</strong> for built-in and freestanding infrared grills, all-infrared and InfraVection configurations, ceramic infrared burners, double-lanced ported U-burners, rear-infrared rotisserie systems, push-button rapid-start ignition, V-grilling grids, side burners, and supported outdoor-kitchen installations.</p>
          <h3>Solaire BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Ceramic infrared burner or U-burner not igniting, heating evenly, or producing expected output</li>
            <li>✅ InfraVection burner configuration, conversion component, or removable burner seating issue</li>
            <li>✅ Push-button rapid-start ignition, electrode, wiring, valve, regulator, or gas-supply concern</li>
            <li>✅ Rear-infrared rotisserie burner, motor, spit rod, forks, or counterweight issue where equipped</li>
            <li>✅ V-grilling grid, grease-management, flare-up, hood, handle, or internal buildup concern</li>
            <li>✅ Built-in cutout, insulated-jacket, outdoor exposure, fuel-conversion, or ventilation issue</li>
          </ul>
          <h3>How We Fix These Solaire BBQ Grill Issues</h3>
          <p>We inspect the Solaire model, fuel type, regulator, valves, ceramic infrared burners, U-burners where equipped, removable burner seating, ignition button, electrodes, wiring, rotisserie system, V-grilling grids, grease-management parts, hood hardware, side burners, built-in clearances, and ventilation.</p>
        </>
      )
    },
    {
      id: "weber-summit-bbq-grill-repair",
      title: "Weber Summit BBQ Grill Repair",
      heading: "Weber Summit BBQ Grill Repair",
      /*img: "/bbq-grill-repair/weber-summit-bbq-grill-repair.webp",*/
      alt: "Weber Summit BBQ grill repair technician servicing a premium Summit Smart gas grill",
      description: (
        <>
          <p>Our <strong>Weber Summit BBQ grill repair</strong> service covers premium Summit gas grills, supported Summit Smart FS38X models, natural-gas and liquid-propane configurations, top-down infrared broilers, integrated rotisserie systems, smart controls, displays, app-connected monitoring features, burners, side burners, smoker boxes, and premium outdoor-grilling installations.</p>
          <h3>Weber Summit BBQ Grill Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Main burner or top-down infrared broiler not igniting or reaching proper output</li>
            <li>✅ Integrated rotisserie motor, spit assembly, infrared broiler, or accessory concern</li>
            <li>✅ SmartControl display, touchscreen, sensor, app-connected function, wiring, or power-supply issue</li>
            <li>✅ Ignition, electrode, crossover, valve, regulator, manifold, or gas-delivery problem</li>
            <li>✅ Grates, smoker box, grease tray, side burner, hood, hinge, handle, or internal buildup concern</li>
            <li>✅ Natural-gas-versus-propane setup, outdoor exposure, ventilation, or model-identification issue</li>
          </ul>
          <h3>How We Fix These Weber Summit BBQ Grill Issues</h3>
          <p>We identify the Summit platform and inspect fuel type, gas delivery, regulators, valves, burners, infrared broiler where equipped, rotisserie system, ignition components, electrodes, crossovers, wiring, display, sensors, connected features where applicable, side burner, smoker box, grates, grease tray, hood hardware, and ventilation.</p>
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
