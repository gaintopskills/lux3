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
      id: "sub-zero-freezer-repair",
      title: "Sub-Zero Freezer Repair",
      heading: "Sub-Zero Freezer Repair",
      img: "/freezer-repair/sub-zero-freezer-repair.webp",
      alt: "Sub-Zero freezer repair technician servicing a luxury built-in freezer column",
      description: (
        <>
          <p>We provide <strong>Sub-Zero freezer repair</strong> for Designer Series freezer columns, Classic Series built-in freezer compartments, undercounter freezer drawers, panel-ready freezer installations, ice-maker-equipped models, and supported refrigerator-freezer configurations. Sub-Zero freezers depend on precise temperature control, airflow, door sealing, and correct installation inside custom cabinetry.</p>
          <h3>Sub-Zero Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Designer Series freezer column warming, cycling excessively, or failing to reach the selected temperature</li>
            <li>✅ Excess frost, ice buildup, or moisture caused by gasket wear, door alignment, drainage, airflow, or defrost concerns</li>
            <li>✅ Automatic ice maker not producing ice, producing too little ice, or developing fill-related problems</li>
            <li>✅ Undercounter freezer drawer not closing, sealing, or maintaining temperature correctly</li>
            <li>✅ Unusual fan, compressor, relay, vibration, or built-in enclosure noises</li>
            <li>✅ Control-panel, lighting, sensor, wiring, or model-specific fault concerns</li>
          </ul>
          <h3>How We Fix These Sub-Zero Freezer Issues</h3>
          <p>We inspect freezer temperatures, airflow, evaporator and condenser conditions, fans, compressor-start components, sealed-system symptoms, defrost parts, drains, ice-maker components, fill valve, water supply, filters where equipped, door gaskets, hinges, drawer slides, panel alignment, cabinetry clearances, sensors, wiring, and controls. We use the complete Sub-Zero model and serial information to match the repair to the correct Designer, Classic, or undercounter platform.</p>
        </>
      )
    },
    {
      id: "miele-freezer-repair",
      title: "Miele Freezer Repair",
      heading: "Miele Freezer Repair",
      /*img: "/freezer-repair/miele-freezer-repair.webp",*/
      alt: "Miele freezer repair technician servicing a MasterCool built-in freezer",
      description: (
        <>
          <p>Our <strong>Miele freezer repair</strong> service covers MasterCool built-in freezers, MasterCool freezer columns, NoFrost freezer compartments, IceMaker-equipped models, panel-ready installations, Push2Open configurations, and supported Miele@home-connected appliances. Miele freezer diagnosis should separate airflow, defrost, ice production, door fit, and electronic-control issues.</p>
          <h3>Miele Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ MasterCool freezer not maintaining the selected temperature or running longer than expected</li>
            <li>✅ NoFrost system concern causing ice buildup, restricted airflow, or uneven freezing</li>
            <li>✅ IceMaker, water-supply, fill-valve, or filter-related problem</li>
            <li>✅ Push2Open, MaxLoad hinge, gasket, panel-ready door, or cabinet-alignment issue</li>
            <li>✅ Temperature alarm, sensor, display, lighting, or Miele@home concern</li>
            <li>✅ Fan, compressor-start, wiring, or sealed-system symptoms requiring diagnosis</li>
          </ul>
          <h3>How We Fix These Miele Freezer Issues</h3>
          <p>We inspect freezer temperatures, NoFrost components, airflow, fans, evaporator and condenser performance, drains, compressor-start parts, sealed-system symptoms, IceMaker components, water supply, valves, filters, Push2Open operation where equipped, hinges, gaskets, panel alignment, alarms, sensors, wiring, MasterSensor controls, and connected features. We confirm the exact Miele model before recommending repair.</p>
        </>
      )
    },
    {
      id: "liebherr-freezer-repair",
      title: "Liebherr Freezer Repair",
      heading: "Liebherr Freezer Repair",
      /*img: "/freezer-repair/liebherr-freezer-repair.webp",*/
      alt: "Liebherr freezer repair technician servicing a Monolith integrated freezer column",
      description: (
        <>
          <p>We provide <strong>Liebherr freezer repair</strong> for Monolith integrated freezer columns, fully integrated freezers, NoFrost systems, IceMaker-equipped models, panel-ready installations, freestanding freezers, and supported SmartDeviceBox-connected appliances. Liebherr freezer service requires careful review of temperature zones, airflow, defrost performance, ice production, and built-in ventilation.</p>
          <h3>Liebherr Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Monolith or integrated freezer column warming or fluctuating in temperature</li>
            <li>✅ NoFrost problem causing frost buildup, restricted airflow, or reduced freezing performance</li>
            <li>✅ IceMaker, water-line, filter, fill, or drainage-related issue</li>
            <li>✅ Door-seal, hinge, panel-ready alignment, or ventilation-clearance concern</li>
            <li>✅ Temperature alarm, SmartDeviceBox, display, sensor, or control fault</li>
            <li>✅ Fan, compressor-start, wiring, or sealed-system symptoms requiring model-specific diagnosis</li>
          </ul>
          <h3>How We Fix These Liebherr Freezer Issues</h3>
          <p>We test freezer temperatures, NoFrost components, airflow, fans, drains, condenser conditions, compressor-start parts, sealed-system symptoms, IceMaker components, water supply, filters where equipped, gaskets, hinges, panel alignment, ventilation clearances, alarms, sensors, wiring, and electronic controls. We identify the correct Liebherr platform using the model and service number.</p>
        </>
      )
    },
    {
      id: "gaggenau-freezer-repair",
      title: "Gaggenau Freezer Repair",
      heading: "Gaggenau Freezer Repair",
      /*img: "/freezer-repair/gaggenau-freezer-repair.webp",*/
      alt: "Gaggenau freezer repair technician servicing a Vario integrated freezer column",
      description: (
        <>
          <p>Our <strong>Gaggenau freezer repair</strong> service covers Vario cooling 400 series freezer columns, fully integrated freezer installations, freezer compartments in Vario cooling combinations, ice-maker-equipped models, fixed-water-connection configurations, and panel-ready refrigeration walls. Gaggenau service should account for both cooling performance and precise cabinetry integration.</p>
          <h3>Gaggenau Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Vario freezer column warming, running continuously, or developing uneven temperatures</li>
            <li>✅ Ice maker, fixed-water connection, fill valve, filter, or ice-production concern</li>
            <li>✅ Frost buildup, drainage, airflow, fan, or defrost problem</li>
            <li>✅ Opening-assist, hinge, gasket, door-fit, or panel-ready alignment issue</li>
            <li>✅ TFT display, temperature alarm, sensor, wiring, or electronic-control fault</li>
            <li>✅ Built-in ventilation or installation detail affecting freezer performance</li>
          </ul>
          <h3>How We Fix These Gaggenau Freezer Issues</h3>
          <p>We inspect temperatures, airflow, fans, evaporator and condenser conditions, drains, defrost parts, ice maker, fixed-water connection, valves, filters where equipped, opening-assist functions, hinges, gaskets, panel alignment, TFT controls, alarms, sensors, wiring, and built-in ventilation. We service the freezer as part of the installed Gaggenau cooling configuration.</p>
        </>
      )
    },
    {
      id: "thermador-freezer-repair",
      title: "Thermador Freezer Repair",
      heading: "Thermador Freezer Repair",
      /*img: "/freezer-repair/thermador-freezer-repair.webp",*/
      alt: "Thermador freezer repair technician servicing a Freedom Collection freezer column",
      description: (
        <>
          <p>We provide <strong>Thermador freezer repair</strong> for Freedom Collection freezer columns, panel-ready built-in freezers, external ice-and-water-dispenser models, freezer compartments in bottom-freezer appliances, and Home Connect-enabled refrigeration. Thermador freezer service should account for temperature control, ice systems, door alignment, ventilation, and flush installation.</p>
          <h3>Thermador Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Freedom freezer column not maintaining temperature or developing frost buildup</li>
            <li>✅ External ice-and-water dispenser, ice maker, filter, fill-valve, or supply-line issue</li>
            <li>✅ Door, gasket, hinge, panel-ready alignment, or flush-install concern</li>
            <li>✅ Airflow, fan, drainage, evaporator, or defrost problem</li>
            <li>✅ Home Connect, display, alarm, sensor, wiring, or electronic-control fault</li>
            <li>✅ Compressor-start, condenser, sealed-system, or unusual-noise concern</li>
          </ul>
          <h3>How We Fix These Thermador Freezer Issues</h3>
          <p>We test freezer temperatures, airflow, fans, evaporator and defrost components, drains, condenser conditions, compressor-start parts, sealed-system symptoms, ice maker, dispenser, filters, valves, supply lines, gaskets, hinges, panel alignment, ventilation clearances, Home Connect features, alarms, sensors, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "true-residential-freezer-repair",
      title: "True Residential Freezer Repair",
      heading: "True Residential Freezer Repair",
      /*img: "/freezer-repair/true-residential-freezer-repair.webp",*/
      alt: "True Residential freezer repair technician servicing a luxury freezer column",
      description: (
        <>
          <p>Our <strong>True Residential freezer repair</strong> service covers 30-inch freezer columns, ice-maker freezer columns, undercounter freezer drawers, indoor and supported coastal installations, custom-color appliances, and professional-style frozen-storage systems. True Residential freezers use commercial-inspired construction, forced-air cooling, and premium door hardware that should be evaluated as a complete system.</p>
          <h3>True Residential Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Freezer column or undercounter freezer drawer not holding the selected temperature</li>
            <li>✅ Ice maker, water supply, fill valve, or filter concern</li>
            <li>✅ Forced-air cooling, condenser, fan, compressor-start, or sealed-system issue</li>
            <li>✅ Drawer slide, hinge, gasket, door closure, or 120-degree stay-open door concern</li>
            <li>✅ Condensation, frost, drainage, alarm, or control problem</li>
            <li>✅ Custom-color panel, hardware, or built-in installation detail affecting service access</li>
          </ul>
          <h3>How We Fix These True Residential Freezer Issues</h3>
          <p>We inspect temperatures, forced-air cooling, airflow, condenser cleanliness, fans, compressor-start components, sealed-system symptoms, ice-maker components, water supply, valves, filters, drains, frost patterns, drawers, slides, hinges, gaskets, alarms, controls, wiring, and built-in clearances while protecting custom finishes and hardware.</p>
        </>
      )
    },
    {
      id: "monogram-freezer-repair",
      title: "Monogram Freezer Repair",
      heading: "Monogram Freezer Repair",
      /*img: "/freezer-repair/monogram-freezer-repair.webp",*/
      alt: "Monogram freezer repair technician servicing a panel-ready integrated freezer column",
      description: (
        <>
          <p>We provide <strong>Monogram freezer repair</strong> for panel-ready premium integrated freezer columns, built-in all-freezer configurations, freezer compartments in Monogram refrigeration, ice-maker-equipped units, and custom-panel installations. Monogram freezer service should address cold-storage performance, automatic ice production, door alignment, and integrated cabinetry fit.</p>
          <h3>Monogram Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Integrated freezer column warming, cycling excessively, or freezing inconsistently</li>
            <li>✅ Automatic ice-maker, fill-valve, water-line, or filter-related concern</li>
            <li>✅ Panel-ready door, hinge, gasket, or alignment issue affecting closure</li>
            <li>✅ Frost buildup, drainage, airflow, fan, or defrost problem</li>
            <li>✅ Temperature alarm, display, sensor, wiring, or control-board fault</li>
            <li>✅ Compressor-start, condenser, sealed-system, or unusual-noise concern</li>
          </ul>
          <h3>How We Fix These Monogram Freezer Issues</h3>
          <p>We inspect temperatures, airflow, fans, evaporator and condenser conditions, drains, defrost components, compressor-start parts, sealed-system symptoms, ice maker, water supply, valves, filters, gaskets, hinges, panel alignment, alarms, sensors, wiring, and electronic controls. We verify the Monogram model before selecting replacement components.</p>
        </>
      )
    },
    {
      id: "signature-kitchen-suite-freezer-repair",
      title: "Signature Kitchen Suite Freezer Repair",
      heading: "Signature Kitchen Suite Freezer Repair",
      /*img: "/freezer-repair/signature-kitchen-suite-freezer-repair.webp",*/
      alt: "Signature Kitchen Suite freezer repair technician servicing an integrated freezer column",
      description: (
        <>
          <p>Our <strong>Signature Kitchen Suite freezer repair</strong> service covers SKS integrated freezer columns, panel-ready and stainless-steel configurations, undercounter convertible refrigerator-freezer drawers, automatic-ice-maker models, and luxury built-in installations. SKS service should account for precise freezing temperatures, drawer modes, ice production, and cabinetry integration.</p>
          <h3>Signature Kitchen Suite Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Integrated freezer column not holding the selected temperature</li>
            <li>✅ Convertible undercounter drawer not switching modes or maintaining the selected setting</li>
            <li>✅ Automatic ice maker, water-line, fill-valve, filter, or ice-production concern</li>
            <li>✅ Panel-ready door, drawer slide, gasket, hinge, or alignment issue</li>
            <li>✅ Temperature alarm, display, sensor, Wi-Fi, wiring, or electronic-control fault</li>
            <li>✅ Airflow, fan, condenser, defrost, or sealed-system concern</li>
          </ul>
          <h3>How We Fix These Signature Kitchen Suite Freezer Issues</h3>
          <p>We inspect freezer temperatures, convertible-drawer modes where equipped, airflow, fans, condenser and evaporator conditions, defrost components, drains, compressor-start parts, sealed-system symptoms, ice maker, water supply, filters, drawers, slides, hinges, gaskets, panel fit, alarms, sensors, wiring, connected functions, and controls.</p>
        </>
      )
    },
    {
      id: "dacor-freezer-repair",
      title: "Dacor Freezer Repair",
      heading: "Dacor Freezer Repair",
      /*img: "/freezer-repair/dacor-freezer-repair.webp",*/
      alt: "Dacor freezer repair technician servicing a panel-ready freezer column",
      description: (
        <>
          <p>We provide <strong>Dacor freezer repair</strong> for 18-inch, 24-inch, 30-inch, and 36-inch column freezers, panel-ready installations, true-flush refrigeration layouts, Push-To-Open Door Assist models, automatic-ice-maker configurations, and supported PreciseCooling systems. Dacor freezer service should evaluate cooling performance, door-assist features, and installation geometry together.</p>
          <h3>Dacor Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dacor column freezer not reaching or maintaining the selected temperature</li>
            <li>✅ PreciseCooling, airflow, fan, condenser, evaporator, or sealed-system concern</li>
            <li>✅ Automatic ice-maker, water-supply, fill-valve, or filter issue</li>
            <li>✅ Push-To-Open Door Assist, hinge, gasket, or panel-ready alignment problem</li>
            <li>✅ Frost buildup, moisture, drainage, or defrost concern</li>
            <li>✅ Hidden touch control, sensor, lighting, alarm, or wiring fault</li>
          </ul>
          <h3>How We Fix These Dacor Freezer Issues</h3>
          <p>We inspect temperatures, PreciseCooling-related components, airflow, fans, evaporator and condenser conditions, drains, defrost components, compressor-start parts, sealed-system symptoms, ice maker, water supply, valves, filters, Push-To-Open operation, hinges, gaskets, panel fit, touch controls, alarms, sensors, lighting, and wiring.</p>
        </>
      )
    },
    {
      id: "jennair-freezer-repair",
      title: "JennAir Freezer Repair",
      heading: "JennAir Freezer Repair",
      /*img: "/freezer-repair/jennair-freezer-repair.webp",*/
      alt: "JennAir freezer repair technician servicing an Obsidian interior column freezer",
      description: (
        <>
          <p>Our <strong>JennAir freezer repair</strong> service covers panel-ready built-in column freezers, 18-inch, 24-inch, and 30-inch configurations, Two-Zone Precision Cooling models, automatic-ice-maker units, remote-access features, and custom refrigeration installations. JennAir freezer diagnosis should account for cooling zones, door fit, ice production, and electronic controls.</p>
          <h3>JennAir Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ JennAir column freezer warming or failing to maintain the selected temperature</li>
            <li>✅ Two-Zone Precision Cooling concern affecting freezing consistency</li>
            <li>✅ Ice maker, water supply, fill valve, filter, or ice-bin issue</li>
            <li>✅ Panel-ready door, gasket, hinge, or alignment concern</li>
            <li>✅ Remote access, touch control, alarm, sensor, lighting, or wiring fault</li>
            <li>✅ Frost buildup, airflow, fan, drainage, defrost, or sealed-system concern</li>
          </ul>
          <h3>How We Fix These JennAir Freezer Issues</h3>
          <p>We inspect temperatures in each zone, airflow, fans, condenser and evaporator conditions, defrost components, drains, compressor-start parts, sealed-system symptoms, ice-maker components, water supply, valves, filters, hinges, gaskets, panel alignment, alarms, sensors, lighting, remote-access features, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "fisher-paykel-freezer-repair",
      title: "Fisher & Paykel Freezer Repair",
      heading: "Fisher & Paykel Freezer Repair",
      /*img: "/freezer-repair/fisher-paykel-freezer-repair.webp",*/
      alt: "Fisher and Paykel freezer repair technician servicing an integrated column freezer",
      description: (
        <>
          <p>We provide <strong>Fisher & Paykel freezer repair</strong> for Series 9 and Series 11 integrated column freezers, panel-ready installations, Ice-equipped models, Variable Temperature Zone configurations, and supported refrigerator-freezer appliances. Fisher & Paykel freezer columns may offer Freeze, Soft Freeze, and Deep Freeze modes, so service should verify mode selection, temperature control, and sensor performance.</p>
          <h3>Fisher & Paykel Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Integrated column freezer not holding the selected Freeze, Soft Freeze, or Deep Freeze setting</li>
            <li>✅ Variable Temperature Zone, sensor, display, or mode-selection concern</li>
            <li>✅ Ice maker, water supply, fill valve, filter, or ice-bin problem</li>
            <li>✅ Panel-ready door, hinge, gasket, or alignment issue affecting sealing</li>
            <li>✅ Frost buildup, airflow, fan, drainage, or defrost concern</li>
            <li>✅ Compressor-start, condenser, sealed-system, wiring, or alarm issue</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Freezer Issues</h3>
          <p>We inspect temperatures in each zone, selected food modes, sensors, airflow, fans, condenser and evaporator conditions, defrost components, drains, compressor-start parts, sealed-system symptoms, ice maker, water supply, valves, filters, gaskets, hinges, panel alignment, alarms, displays, wiring, and electronic controls.</p>
        </>
      )
    },
    {
      id: "bosch-freezer-repair",
      title: "Bosch Freezer Repair",
      heading: "Bosch Freezer Repair",
      /*img: "/freezer-repair/bosch-freezer-repair.webp",*/
      alt: "Bosch freezer repair technician servicing an integrated freezer column",
      description: (
        <>
          <p>Our <strong>Bosch freezer repair</strong> service covers single-door freezer columns, built-in freezer installations, bottom-freezer compartments, panel-ready configurations, NoFrost systems, automatic-ice-maker models, and supported Home Connect-enabled appliances. Bosch freezer repair should distinguish between airflow, defrost, ice production, door fit, and electronic-control concerns.</p>
          <h3>Bosch Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Bosch freezer column or bottom-freezer compartment warming or cycling excessively</li>
            <li>✅ NoFrost issue causing ice buildup, restricted airflow, or freezer-temperature fluctuation</li>
            <li>✅ Ice maker, fill valve, water supply, filter, or ice-bin concern</li>
            <li>✅ Door gasket, hinge, freezer drawer, panel-ready alignment, or closure problem</li>
            <li>✅ Home Connect, temperature alarm, display, sensor, wiring, or control fault</li>
            <li>✅ Fan, condenser, compressor-start, drainage, or sealed-system concern</li>
          </ul>
          <h3>How We Fix These Bosch Freezer Issues</h3>
          <p>We inspect freezer temperatures, NoFrost components, airflow, fans, drains, condenser conditions, evaporator performance, compressor-start parts, sealed-system symptoms, ice-maker components, water supply, valves, filters, drawers, gaskets, hinges, panel alignment, alarms, Home Connect features, sensors, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "viking-freezer-repair",
      title: "Viking Freezer Repair",
      heading: "Viking Freezer Repair",
      /*img: "/freezer-repair/viking-freezer-repair.webp",*/
      alt: "Viking freezer repair technician servicing an integrated all-freezer column",
      description: (
        <>
          <p>We provide <strong>Viking freezer repair</strong> for integrated all-freezer columns, panel-ready built-in models, 18-inch, 24-inch, and 30-inch configurations, dual-size ice-maker models, touch-control appliances, and supported Viking refrigerator-freezer systems. Viking all-freezer models may include Max Freezer, SuperIce, Bottle Chiller, Vacation, and Max Ice modes that should be evaluated during diagnosis.</p>
          <h3>Viking Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Integrated all-freezer column warming or failing to maintain temperature</li>
            <li>✅ Max Freezer, SuperIce, Bottle Chiller, Vacation, or Max Ice mode concern</li>
            <li>✅ Dual-size ice maker, water filter, fill valve, or water-line issue</li>
            <li>✅ Panel-ready door, hinge, gasket, drawer, or alignment problem</li>
            <li>✅ Touch control, alarm, lighting, sensor, wiring, or display fault</li>
            <li>✅ Airflow, fan, condenser, defrost, compressor-start, or sealed-system concern</li>
          </ul>
          <h3>How We Fix These Viking Freezer Issues</h3>
          <p>We inspect temperatures, operating modes, airflow, fans, condenser and evaporator conditions, drains, defrost parts, compressor-start components, sealed-system symptoms, ice maker, water supply, filter, valves, gaskets, hinges, drawers, panel fit, touch controls, alarms, lighting, sensors, and wiring.</p>
        </>
      )
    },
    {
      id: "bertazzoni-freezer-repair",
      title: "Bertazzoni Freezer Repair",
      heading: "Bertazzoni Freezer Repair",
      /*img: "/freezer-repair/bertazzoni-freezer-repair.webp",*/
      alt: "Bertazzoni freezer repair technician servicing a built-in freezer column",
      description: (
        <>
          <p>Our <strong>Bertazzoni freezer repair</strong> service covers built-in freezer columns, panel-ready models, stainless-steel configurations, 18-inch and 24-inch columns, automatic-ice-maker appliances, Speed Freeze functions, and supported Dual Cooling Shield systems. Bertazzoni freezer service should account for temperature control, ice production, door integration, and soft-close storage components.</p>
          <h3>Bertazzoni Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Built-in freezer column not freezing correctly or fluctuating in temperature</li>
            <li>✅ Speed Freeze, Dual Cooling Shield, sensor, or digital-control concern</li>
            <li>✅ Automatic ice maker, water supply, filter, valve, or fill-related problem</li>
            <li>✅ Soft-close drawer, shelf, door-bin, hinge, gasket, or panel-ready alignment issue</li>
            <li>✅ Frost buildup, drainage, airflow, fan, or defrost concern</li>
            <li>✅ Compressor-start, condenser, wiring, alarm, or sealed-system symptom</li>
          </ul>
          <h3>How We Fix These Bertazzoni Freezer Issues</h3>
          <p>We inspect temperatures, Speed Freeze and Dual Cooling Shield functions where equipped, airflow, fans, condenser and evaporator conditions, drains, defrost parts, compressor-start components, sealed-system symptoms, ice maker, water supply, filters, valves, shelves, drawers, hinges, gaskets, panel alignment, controls, alarms, sensors, and wiring.</p>
        </>
      )
    },
    {
      id: "fulgor-milano-freezer-repair",
      title: "Fulgor Milano Freezer Repair",
      heading: "Fulgor Milano Freezer Repair",
      /*img: "/freezer-repair/fulgor-milano-freezer-repair.webp",*/
      alt: "Fulgor Milano freezer repair technician servicing a professional freezer column",
      description: (
        <>
          <p>We provide <strong>Fulgor Milano freezer repair</strong> for 18-inch, 24-inch, and 30-inch freezer columns, overlay panel-ready models, stainless-steel professional columns, accessory-ice-maker configurations, and integrated luxury kitchens. Fulgor Milano freezer columns combine commercial-inspired cold storage with full-extension metal bins and premium door integration.</p>
          <h3>Fulgor Milano Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Fulgor Milano freezer column warming or failing to hold the selected temperature</li>
            <li>✅ Accessory ice maker, water supply, fill valve, or filter-related concern</li>
            <li>✅ Full-extension metal bin, glide, door, hinge, gasket, or panel-alignment issue</li>
            <li>✅ Frost buildup, airflow, fan, drainage, or defrost problem</li>
            <li>✅ Digital control, sensor, lighting, alarm, or wiring fault</li>
            <li>✅ Condenser, compressor-start, ventilation, or sealed-system symptom</li>
          </ul>
          <h3>How We Fix These Fulgor Milano Freezer Issues</h3>
          <p>We inspect temperatures, airflow, fans, condenser and evaporator conditions, drains, defrost components, compressor-start parts, sealed-system symptoms, accessory ice-maker components where installed, water supply, valves, filters, bins, glides, gaskets, hinges, overlay panels, controls, alarms, lighting, sensors, wiring, and built-in clearances.</p>
        </>
      )
    },
    {
      id: "bluestar-freezer-repair",
      title: "BlueStar Freezer Repair",
      heading: "BlueStar Freezer Repair",
      /*img: "/freezer-repair/bluestar-freezer-repair.webp",*/
      alt: "BlueStar freezer repair technician servicing a customizable freezer column",
      description: (
        <>
          <p>Our <strong>BlueStar freezer repair</strong> service covers 18-inch, 24-inch, and 30-inch freezer columns, panel-ready models, pro-style stainless-steel configurations, custom-color appliances, automatic-ice-maker systems, Super Ice functions, and luxury built-in installations. BlueStar freezer repair should protect both the internal refrigeration system and the selected exterior finish.</p>
          <h3>BlueStar Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ BlueStar freezer column not reaching or maintaining the selected temperature</li>
            <li>✅ Automatic ice maker, Super Ice function, water line, valve, or filter concern</li>
            <li>✅ Lateral-airflow, fan, condenser, evaporator, or sealed-system issue</li>
            <li>✅ Drawer, shelf, door, gasket, hinge, or flush-install alignment problem</li>
            <li>✅ Control, alarm, sensor, lighting, wiring, or power-supply fault</li>
            <li>✅ Custom-color exterior or panel-ready finish requiring careful service access</li>
          </ul>
          <h3>How We Fix These BlueStar Freezer Issues</h3>
          <p>We inspect temperatures, lateral airflow, fans, condenser and evaporator conditions, drains, defrost parts, compressor-start components, sealed-system symptoms, ice maker, Super Ice function, water supply, valves, filters, drawers, shelves, hinges, gaskets, flush alignment, controls, alarms, sensors, wiring, and installation clearances while protecting the selected finish.</p>
        </>
      )
    },
    {
      id: "zline-freezer-repair",
      title: "ZLINE Freezer Repair",
      heading: "ZLINE Freezer Repair",
      /*img: "/freezer-repair/zline-freezer-repair.webp",*/
      alt: "ZLINE freezer repair technician servicing a graphite interior column freezer",
      description: (
        <>
          <p>We provide <strong>ZLINE freezer repair</strong> for 18-inch and 24-inch column freezers, stainless-steel and panel-ready models, Graphite Gray interior configurations, automatic-ice-maker appliances, Super Freeze functions, and built-in luxury installations. ZLINE freezer service should evaluate freezing performance, ice production, drawers, controls, and panel-ready alignment.</p>
          <h3>ZLINE Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ ZLINE column freezer not freezing correctly or developing temperature fluctuation</li>
            <li>✅ Super Freeze function, touch control, sensor, or display concern</li>
            <li>✅ Automatic ice maker, water filter, fill valve, supply line, or ice drawer issue</li>
            <li>✅ Full-width drawer, shelf, hinge, gasket, or panel-ready alignment problem</li>
            <li>✅ Frost buildup, airflow, fan, drainage, or defrost concern</li>
            <li>✅ Condenser, compressor-start, wiring, alarm, or sealed-system symptom</li>
          </ul>
          <h3>How We Fix These ZLINE Freezer Issues</h3>
          <p>We inspect temperatures, Super Freeze operation, airflow, fans, condenser and evaporator conditions, drains, defrost components, compressor-start parts, sealed-system symptoms, ice maker, water filter, valves, supply lines, ice drawer, full-width storage drawers, shelves, gaskets, hinges, panel fit, touch controls, alarms, sensors, lighting, and wiring.</p>
        </>
      )
    },
    {
      id: "thor-kitchen-freezer-repair",
      title: "THOR Kitchen Freezer Repair",
      heading: "THOR Kitchen Freezer Repair",
      /*img: "/freezer-repair/thor-kitchen-freezer-repair.webp",*/
      alt: "THOR Kitchen freezer repair technician servicing a built-in freezer column",
      description: (
        <>
          <p>Our <strong>THOR Kitchen freezer repair</strong> service covers 18-inch and 24-inch built-in freezer columns, panel-ready and stainless-steel models, Total No Frost appliances, automatic-ice-maker units, fast-freezing systems, and indoor-outdoor undercounter freezer drawers. THOR freezer diagnosis should account for the exact platform because columns and drawer models use different airflow and installation layouts.</p>
          <h3>THOR Kitchen Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Built-in freezer column or undercounter freezer drawer not maintaining temperature</li>
            <li>✅ Total No Frost, airflow, fan, drainage, or defrost concern</li>
            <li>✅ Automatic ice maker, fill valve, water supply, or filter issue</li>
            <li>✅ Fast-freezing mode, digital display, sensor, lighting, or control problem</li>
            <li>✅ Soft-close drawer, slide, gasket, hinge, panel, or alignment concern</li>
            <li>✅ Indoor-outdoor installation condition, condenser buildup, or ventilation restriction</li>
          </ul>
          <h3>How We Fix These THOR Kitchen Freezer Issues</h3>
          <p>We inspect temperatures, Total No Frost components, airflow, fans, condenser and evaporator conditions, drains, compressor-start parts, sealed-system symptoms, ice maker, water supply, valves, filters, fast-freezing functions, displays, sensors, lighting, drawers, soft-close slides, gaskets, hinges, panel fit, outdoor exposure, ventilation clearances, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "forno-freezer-repair",
      title: "Forno Freezer Repair",
      heading: "Forno Freezer Repair",
      /*img: "/freezer-repair/forno-freezer-repair.webp",*/
      alt: "Forno freezer repair technician servicing a convertible upright freezer",
      description: (
        <>
          <p>We provide <strong>Forno freezer repair</strong> for upright freezers, Maderno and Rizzuto convertible refrigerator-freezer models, Fortezza convertible appliances, Total No-Frost systems, Multi-Airflow configurations, touch-control units, and supported built-in-look installations. Forno freezer repair should begin by confirming whether the appliance is operating in freezer mode or convertible refrigerator mode.</p>
          <h3>Forno Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Convertible upright freezer not holding freezer temperature or switching modes correctly</li>
            <li>✅ Total No-Frost, Multi-Airflow, fan, drainage, or defrost concern</li>
            <li>✅ Touch control, LED display, sensor, wiring, or mode-selection problem</li>
            <li>✅ Door gasket, hinge, handle, shelf, drawer, or alignment issue</li>
            <li>✅ Condenser, compressor-start, unusual-noise, or sealed-system symptom</li>
            <li>✅ Built-in-look trim-kit or ventilation detail affecting performance</li>
          </ul>
          <h3>How We Fix These Forno Freezer Issues</h3>
          <p>We confirm the selected operating mode and inspect freezer temperatures, Total No-Frost and Multi-Airflow components, fans, evaporator and condenser conditions, drains, compressor-start parts, sealed-system symptoms, controls, sensors, LED display, wiring, door gasket, hinges, handles, shelves, drawers, trim-kit fit, and ventilation clearances.</p>
        </>
      )
    },
    {
      id: "perlick-freezer-repair",
      title: "Perlick Freezer Repair",
      heading: "Perlick Freezer Repair",
      /*img: "/freezer-repair/perlick-freezer-repair.webp",*/
      alt: "Perlick freezer repair technician servicing luxury undercounter freezer drawers",
      description: (
        <>
          <p>Our <strong>Perlick freezer repair</strong> service covers Signature Series freezer drawers, G5 freezer drawers, ADA-height undercounter models, panel-ready and stainless-steel installations, Marine and Coastal Series units, Anti-Condensation System-equipped appliances, and luxury indoor or outdoor frozen-storage applications. Perlick repair should account for drawer sealing, condenser airflow, controls, and installation exposure.</p>
          <h3>Perlick Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Undercounter freezer drawers not maintaining temperature or recovering slowly after use</li>
            <li>✅ Drawer slide, self-closing mechanism, gasket, alignment, or panel-ready fit issue</li>
            <li>✅ Anti-Condensation System, moisture, frost, drainage, or exterior-condensation concern</li>
            <li>✅ Condenser buildup, airflow restriction, fan, compressor-start, or sealed-system symptom</li>
            <li>✅ Audible door alarm, display lighting, thermostat, sensor, or control problem</li>
            <li>✅ Marine, coastal, or outdoor exposure affecting cabinet or refrigeration performance</li>
          </ul>
          <h3>How We Fix These Perlick Freezer Issues</h3>
          <p>We inspect temperatures, airflow, condenser cleanliness, fans, compressor-start components, sealed-system symptoms, Anti-Condensation System operation where equipped, drains, frost patterns, drawers, slides, self-closing hardware, gaskets, panel alignment, alarms, display lighting, thermostat or controls, sensors, wiring, and indoor, outdoor, or coastal installation conditions.</p>
        </>
      )
    },
    {
      id: "smeg-freezer-repair",
      title: "Smeg Freezer Repair",
      heading: "Smeg Freezer Repair",
      /*img: "/freezer-repair/smeg-freezer-repair.webp",*/
      alt: "Smeg freezer repair technician servicing a retro-style freezer",
      description: (
        <>
          <p>We provide <strong>Smeg freezer repair</strong> for freestanding freezers, fully integrated freezers, FAB retro-style refrigerator-freezer compartments, frost-free models, drawer freezers, and supported built-in appliances. Smeg freezer service should protect the appliance finish while addressing temperature, airflow, door sealing, and defrost performance.</p>
          <h3>Smeg Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Smeg freezer or freezer compartment warming or developing inconsistent temperatures</li>
            <li>✅ Frost-free, airflow, fan, drainage, or defrost concern</li>
            <li>✅ Drawer, shelf, hinge, handle, gasket, or door-alignment issue</li>
            <li>✅ Temperature alarm, thermostat, sensor, lighting, or electronic-control fault</li>
            <li>✅ Condenser, compressor-start, unusual-noise, or sealed-system symptom</li>
            <li>✅ Retro exterior, trim, or custom-color finish requiring careful service access</li>
          </ul>
          <h3>How We Fix These Smeg Freezer Issues</h3>
          <p>We inspect temperatures, airflow, fans, evaporator and condenser conditions, drains, defrost parts, compressor-start components, sealed-system symptoms, drawers, shelves, hinges, handles, gaskets, door fit, alarms, thermostats, sensors, lighting, wiring, and controls while protecting the appliance exterior.</p>
        </>
      )
    },
    {
      id: "aga-freezer-repair",
      title: "AGA Freezer Repair",
      heading: "AGA Freezer Repair",
      /*img: "/freezer-repair/aga-freezer-repair.webp",*/
      alt: "AGA freezer repair technician servicing a supported refrigerator-freezer appliance",
      description: (
        <>
          <p>Our <strong>AGA freezer repair</strong> service covers supported AGA freezer compartments, refrigerator-freezer appliances, imported configurations, and legacy cold-storage models where compatible parts can be confirmed. Because AGA refrigeration families can vary by market and age, accurate service begins with the model number, appliance dimensions, configuration, and symptoms.</p>
          <h3>AGA Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Supported AGA freezer compartment not freezing correctly or cycling excessively</li>
            <li>✅ Thermostat, sensor, fan, airflow, compressor-start, or sealed-system concern</li>
            <li>✅ Frost, moisture, drainage, or defrost problem</li>
            <li>✅ Drawer, door gasket, hinge, handle, or alignment issue</li>
            <li>✅ Alarm, lighting, control, or wiring concern</li>
            <li>✅ Parts-identification challenge on imported or legacy appliances</li>
          </ul>
          <h3>How We Fix These AGA Freezer Issues</h3>
          <p>We begin with model-number verification and parts-availability review. We then inspect temperatures, airflow, fans, thermostat or controls, compressor-start components, sealed-system symptoms, drainage, defrost parts, drawers, gaskets, hinges, handles, alignment, alarms, lighting, wiring, and controls before recommending the most practical repair path.</p>
        </>
      )
    },
    {
      id: "big-chill-freezer-repair",
      title: "Big Chill Freezer Repair",
      heading: "Big Chill Freezer Repair",
      /*img: "/freezer-repair/big-chill-freezer-repair.webp",*/
      alt: "Big Chill freezer repair technician servicing a retro bottom-freezer appliance",
      description: (
        <>
          <p>We provide <strong>Big Chill freezer repair</strong> for freezer compartments in Original Retro, Retropolitan, Classic, Studio, Slim, and supported PRO refrigeration models. Big Chill appliances combine modern cold-storage platforms with distinctive retro exteriors, so freezer repair should address internal performance without damaging the finish, trim, handles, or color-matched panels.</p>
          <h3>Big Chill Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Bottom-freezer compartment warming, icing up, or failing to freeze consistently</li>
            <li>✅ Frost-free, airflow, fan, thermostat, drain, or defrost concern</li>
            <li>✅ Freezer drawer, slide, door gasket, hinge, handle, or alignment issue</li>
            <li>✅ Condensation, moisture buildup, or air leak around the freezer section</li>
            <li>✅ Compressor-start, lighting, control, or unusual-noise concern</li>
            <li>✅ Parts identification for the underlying platform and custom exterior configuration</li>
          </ul>
          <h3>How We Fix These Big Chill Freezer Issues</h3>
          <p>We inspect freezer temperatures, airflow, fans, thermostat or controls, condenser and evaporator conditions, compressor-start components, frost-free and drainage systems, freezer drawers, slides, gaskets, hinges, handles, door fit, lighting, wiring, and platform-specific parts while protecting the custom exterior.</p>
        </>
      )
    },
    {
      id: "elmira-stove-works-freezer-repair",
      title: "Elmira Stove Works Freezer Repair",
      heading: "Elmira Stove Works Freezer Repair",
      /*img: "/freezer-repair/elmira-stove-works-freezer-repair.webp",*/
      alt: "Elmira Stove Works freezer repair technician servicing a Northstar freezer compartment",
      description: (
        <>
          <p>Our <strong>Elmira Stove Works freezer repair</strong> service covers freezer compartments in Northstar bottom-mount and top-freezer refrigeration models, retro kitchen installations, and supported legacy appliances. Elmira refrigerators use modern cold-storage components behind distinctive panels and chrome accents, so freezer repair requires careful access and platform-specific parts identification.</p>
          <h3>Elmira Stove Works Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Northstar freezer compartment warming or developing frost buildup</li>
            <li>✅ Bottom-mount or top-freezer airflow, fan, drain, or defrost concern</li>
            <li>✅ Freezer drawer, hinge, gasket, handle, trim, panel, or alignment issue</li>
            <li>✅ Thermostat, sensor, lighting, control, or wiring fault</li>
            <li>✅ Compressor-start, condenser, unusual-noise, or sealed-system symptom</li>
            <li>✅ Need to identify compatible components without damaging the retro exterior</li>
          </ul>
          <h3>How We Fix These Elmira Stove Works Freezer Issues</h3>
          <p>We inspect temperatures, airflow, fans, thermostat or controls, condenser and evaporator conditions, drains, defrost components, freezer drawer performance, gaskets, hinges, handles, trim, exterior panels, lighting, compressor-start parts, wiring, and compatible replacement components while protecting the Northstar finish.</p>
        </>
      )
    },
    {
      id: "heartland-freezer-repair",
      title: "Heartland Freezer Repair",
      heading: "Heartland Freezer Repair",
      /*img: "/freezer-repair/heartland-freezer-repair.webp",*/
      alt: "Heartland freezer repair technician servicing a legacy retro freezer compartment",
      description: (
        <>
          <p>We provide <strong>Heartland freezer repair</strong> for supported legacy Heartland freezer compartments and refrigeration appliances. Heartland stopped manufacturing appliances effective October 31, 2019, so freezer service should begin with model verification, parts research, and an assessment of the appliance condition. Many owners preserve Heartland appliances because they are part of a coordinated heritage-style kitchen.</p>
          <h3>Heartland Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Legacy Heartland freezer compartment warming or freezing inconsistently</li>
            <li>✅ Thermostat, fan, airflow, condenser, compressor-start, or sealed-system concern</li>
            <li>✅ Frost, moisture, drainage, or defrost issue</li>
            <li>✅ Freezer drawer, door gasket, hinge, handle, trim, or alignment problem</li>
            <li>✅ Lighting, sensor, control, or wiring concern</li>
            <li>✅ Parts availability or compatibility challenge on discontinued appliances</li>
          </ul>
          <h3>How We Fix These Heartland Freezer Issues</h3>
          <p>We verify the model, inspect the appliance condition, research compatible parts where needed, and test temperatures, airflow, fans, thermostat or controls, condenser and evaporator performance, compressor-start components, drainage, defrost systems, drawers, gaskets, hinges, handles, trim, lighting, wiring, and electrical components before recommending the most practical repair path.</p>
        </>
      )
    },
    {
      id: "ge-appliances-freezer-repair",
      title: "GE Appliances Freezer Repair",
      heading: "GE Appliances Freezer Repair",
      /*img: "/freezer-repair/ge-appliances-freezer-repair.webp",*/
      alt: "GE Appliances freezer repair technician servicing an upright freezer",
      description: (
        <>
          <p>We provide <strong>GE freezer repair</strong> for upright freezers, chest freezers, garage-ready models, frost-free appliances, manual-defrost freezers, freezer compartments, and supported convertible cold-storage units. GE freezer diagnosis should distinguish between temperature-control, defrost, sealing, airflow, compressor-start, and installation-related concerns.</p>
          <h3>GE Appliances Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ GE upright or chest freezer not freezing correctly or running continuously</li>
            <li>✅ Frost-free system, evaporator, fan, drain, or defrost concern</li>
            <li>✅ Garage-ready freezer struggling because of ambient-temperature or placement conditions</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, lock, or alignment issue</li>
            <li>✅ Temperature alarm, interior lighting, thermostat, sensor, or control fault</li>
            <li>✅ Compressor-start, condenser, wiring, or sealed-system symptom</li>
          </ul>
          <h3>How We Fix These GE Appliances Freezer Issues</h3>
          <p>We inspect temperatures, selected settings, ambient conditions, airflow where applicable, fans, evaporator and condenser conditions, drains, defrost components, compressor-start parts, sealed-system symptoms, door or lid gaskets, hinges, baskets, shelves, locks, alarms, lighting, thermostat, sensors, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "frigidaire-freezer-repair",
      title: "Frigidaire Freezer Repair",
      heading: "Frigidaire Freezer Repair",
      /*img: "/freezer-repair/frigidaire-freezer-repair.webp",*/
      alt: "Frigidaire freezer repair technician servicing a garage-ready upright freezer",
      description: (
        <>
          <p>Our <strong>Frigidaire freezer repair</strong> service covers upright freezers, chest freezers, garage-ready appliances, frost-free models, manual-defrost units, freezer compartments, and supported convertible freezers. Frigidaire freezer repair should address temperature consistency, frost control, lid or door sealing, alarms, and ambient installation conditions.</p>
          <h3>Frigidaire Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Frigidaire upright or chest freezer not freezing correctly or running too often</li>
            <li>✅ Frost-free, drain, evaporator, fan, or defrost problem</li>
            <li>✅ Garage-ready model affected by heat, airflow restriction, or placement conditions</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, key lock, or alignment issue</li>
            <li>✅ Temperature alarm, digital control, thermostat, sensor, or lighting concern</li>
            <li>✅ Compressor-start, condenser, unusual-noise, wiring, or sealed-system symptom</li>
          </ul>
          <h3>How We Fix These Frigidaire Freezer Issues</h3>
          <p>We inspect temperatures, settings, ambient conditions, airflow, fans, evaporator and condenser conditions, drains, defrost components, compressor-start parts, sealed-system symptoms, door or lid gaskets, hinges, baskets, shelves, locks, alarms, lighting, thermostats, sensors, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "whirlpool-freezer-repair",
      title: "Whirlpool Freezer Repair",
      heading: "Whirlpool Freezer Repair",
      /*img: "/freezer-repair/whirlpool-freezer-repair.webp",*/
      alt: "Whirlpool freezer repair technician servicing an upright freezer",
      description: (
        <>
          <p>We provide <strong>Whirlpool freezer repair</strong> for upright freezers, chest freezers, frost-free models, manual-defrost appliances, freezer compartments, and supported garage-ready units. Whirlpool freezer diagnosis should evaluate temperature control, defrost performance, door or lid sealing, compressor-start components, and the installation environment.</p>
          <h3>Whirlpool Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Whirlpool freezer warming, cycling excessively, or failing to freeze food solid</li>
            <li>✅ Frost buildup, evaporator icing, fan, drainage, or defrost concern</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, lock, or alignment issue</li>
            <li>✅ Thermostat, temperature control, sensor, alarm, lighting, or wiring problem</li>
            <li>✅ Condenser buildup, compressor-start, relay, or unusual-noise concern</li>
            <li>✅ Ambient-temperature or garage-placement condition affecting operation</li>
          </ul>
          <h3>How We Fix These Whirlpool Freezer Issues</h3>
          <p>We inspect freezer temperatures, settings, ambient conditions, airflow, fans where equipped, evaporator and condenser conditions, drains, defrost components, compressor-start parts, relays, sealed-system symptoms, gaskets, hinges, baskets, shelves, locks, thermostats, alarms, lighting, sensors, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "maytag-freezer-repair",
      title: "Maytag Freezer Repair",
      heading: "Maytag Freezer Repair",
      /*img: "/freezer-repair/maytag-freezer-repair.webp",*/
      alt: "Maytag freezer repair technician servicing a chest freezer",
      description: (
        <>
          <p>Our <strong>Maytag freezer repair</strong> service covers supported upright freezers, chest freezers, frost-free appliances, manual-defrost units, garage installations, and freezer compartments in Maytag refrigeration. Maytag freezer repair should identify whether the issue comes from controls, sealing, defrost performance, airflow, or compressor-start components.</p>
          <h3>Maytag Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Maytag freezer not holding temperature or taking too long to recover</li>
            <li>✅ Frost, ice buildup, drainage, fan, evaporator, or defrost concern</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, or alignment issue</li>
            <li>✅ Thermostat, temperature control, alarm, lighting, sensor, or wiring fault</li>
            <li>✅ Compressor-start, relay, condenser, unusual-noise, or sealed-system symptom</li>
            <li>✅ Garage, utility-room, or placement condition affecting freezer operation</li>
          </ul>
          <h3>How We Fix These Maytag Freezer Issues</h3>
          <p>We inspect temperatures, controls, ambient conditions, airflow, fans where equipped, evaporator and condenser conditions, drains, defrost parts, compressor-start components, relays, sealed-system symptoms, gaskets, hinges, baskets, shelves, alarms, lighting, sensors, wiring, and installation conditions.</p>
        </>
      )
    },
    {
      id: "kenmore-freezer-repair",
      title: "Kenmore Freezer Repair",
      heading: "Kenmore Freezer Repair",
      /*img: "/freezer-repair/kenmore-freezer-repair.webp",*/
      alt: "Kenmore freezer repair technician servicing an upright freezer",
      description: (
        <>
          <p>We provide <strong>Kenmore freezer repair</strong> for upright freezers, chest freezers, frost-free models, manual-defrost appliances, freezer compartments, and supported legacy units. Because Kenmore appliances may be manufactured on different underlying platforms, accurate service begins with the complete model number and a review of compatible parts.</p>
          <h3>Kenmore Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Kenmore freezer not freezing, running continuously, or cycling inconsistently</li>
            <li>✅ Frost buildup, fan, drainage, evaporator, or defrost problem</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, handle, lock, or alignment issue</li>
            <li>✅ Thermostat, temperature control, alarm, lighting, sensor, or wiring concern</li>
            <li>✅ Compressor-start, relay, condenser, unusual-noise, or sealed-system symptom</li>
            <li>✅ Parts-identification challenge because the underlying manufacturer varies by model</li>
          </ul>
          <h3>How We Fix These Kenmore Freezer Issues</h3>
          <p>We verify the Kenmore model and underlying platform, then inspect temperatures, controls, airflow, fans where equipped, evaporator and condenser conditions, drains, defrost parts, compressor-start components, relays, sealed-system symptoms, gaskets, hinges, baskets, shelves, handles, locks, alarms, lighting, sensors, wiring, and compatible replacement parts.</p>
        </>
      )
    },
    {
      id: "amana-freezer-repair",
      title: "Amana Freezer Repair",
      heading: "Amana Freezer Repair",
      /*img: "/freezer-repair/amana-freezer-repair.webp",*/
      alt: "Amana freezer repair technician servicing a chest freezer",
      description: (
        <>
          <p>Our <strong>Amana freezer repair</strong> service covers supported upright freezers, chest freezers, freezer compartments, manual-defrost units, and legacy cold-storage appliances. Amana freezer service should evaluate temperature control, lid or door sealing, frost conditions, compressor-start components, and placement conditions.</p>
          <h3>Amana Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Amana freezer warming, running too often, or failing to freeze consistently</li>
            <li>✅ Excess frost, ice buildup, drainage, or manual-defrost concern</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, handle, or alignment issue</li>
            <li>✅ Thermostat, temperature control, lighting, wiring, or power-supply problem</li>
            <li>✅ Compressor-start, relay, condenser, unusual-noise, or sealed-system symptom</li>
            <li>✅ Garage, utility-room, or ventilation condition affecting performance</li>
          </ul>
          <h3>How We Fix These Amana Freezer Issues</h3>
          <p>We inspect temperatures, settings, ambient conditions, ventilation, condenser condition, compressor-start parts, relays, sealed-system symptoms, frost patterns, drainage where applicable, gaskets, hinges, baskets, shelves, handles, thermostat, lighting, wiring, and power supply.</p>
        </>
      )
    },
    {
      id: "electrolux-freezer-repair",
      title: "Electrolux Freezer Repair",
      heading: "Electrolux Freezer Repair",
      /*img: "/freezer-repair/electrolux-freezer-repair.webp",*/
      alt: "Electrolux freezer repair technician servicing an upright freezer",
      description: (
        <>
          <p>We provide <strong>Electrolux freezer repair</strong> for supported upright freezers, freezer compartments, frost-free appliances, built-in refrigeration systems, and legacy models where compatible parts are available. Electrolux freezer diagnosis should distinguish between airflow, defrost, controls, door sealing, compressor-start, and sealed-system concerns.</p>
          <h3>Electrolux Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Electrolux freezer warming, cycling excessively, or displaying a temperature alarm</li>
            <li>✅ Frost buildup, evaporator icing, fan, drainage, or defrost problem</li>
            <li>✅ Door gasket, hinge, drawer, shelf, handle, or alignment issue</li>
            <li>✅ Digital control, thermostat, sensor, lighting, wiring, or alarm fault</li>
            <li>✅ Compressor-start, relay, condenser, unusual-noise, or sealed-system symptom</li>
            <li>✅ Parts-availability question on older or discontinued appliances</li>
          </ul>
          <h3>How We Fix These Electrolux Freezer Issues</h3>
          <p>We inspect temperatures, controls, airflow, fans, evaporator and condenser conditions, drains, defrost components, compressor-start parts, relays, sealed-system symptoms, gaskets, hinges, drawers, shelves, handles, alarms, lighting, thermostat, sensors, wiring, and compatible replacement parts.</p>
        </>
      )
    },
    {
      id: "lg-freezer-repair",
      title: "LG Freezer Repair",
      heading: "LG Freezer Repair",
      /*img: "/freezer-repair/lg-freezer-repair.webp",*/
      alt: "LG freezer repair technician servicing a convertible upright freezer",
      description: (
        <>
          <p>Our <strong>LG freezer repair</strong> service covers supported upright freezers, convertible freezer-refrigerator models, freezer compartments, ice-making systems, frost-control components, and smart-enabled appliances where applicable. LG freezer repair should verify the selected operating mode and separate airflow, defrost, control, and compressor-related symptoms.</p>
          <h3>LG Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ LG freezer or convertible unit not holding temperature or switching modes correctly</li>
            <li>✅ Frost buildup, airflow restriction, fan, drainage, or defrost concern</li>
            <li>✅ Ice maker, fill valve, water supply, filter, or ice-bin problem on equipped models</li>
            <li>✅ Door gasket, hinge, drawer, shelf, handle, or alignment issue</li>
            <li>✅ Display, sensor, alarm, smart-feature, wiring, or control-board fault</li>
            <li>✅ Compressor-start, condenser, unusual-noise, or sealed-system symptom</li>
          </ul>
          <h3>How We Fix These LG Freezer Issues</h3>
          <p>We confirm the selected mode and inspect temperatures, airflow, fans, evaporator and condenser conditions, drains, defrost components, compressor-start parts, sealed-system symptoms, ice maker where equipped, water supply, valves, filters, gaskets, hinges, drawers, shelves, handles, alarms, sensors, smart features, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "samsung-freezer-repair",
      title: "Samsung Freezer Repair",
      heading: "Samsung Freezer Repair",
      /*img: "/freezer-repair/samsung-freezer-repair.webp",*/
      alt: "Samsung freezer repair technician servicing a convertible freezer compartment",
      description: (
        <>
          <p>We provide <strong>Samsung freezer repair</strong> for supported upright freezers, convertible cold-storage appliances, freezer compartments, FlexZone-style configurations, automatic-ice-maker systems, and connected models where applicable. Samsung freezer diagnosis should verify operating mode, temperature zones, defrost performance, ice production, and electronic controls.</p>
          <h3>Samsung Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Samsung freezer compartment or convertible zone not holding the selected temperature</li>
            <li>✅ Frost buildup, evaporator icing, airflow restriction, fan, drainage, or defrost concern</li>
            <li>✅ Ice maker, water supply, fill valve, filter, or ice-bin issue on equipped models</li>
            <li>✅ Drawer, shelf, gasket, hinge, handle, or door-alignment problem</li>
            <li>✅ Display, temperature alarm, sensor, connected-feature, wiring, or control-board fault</li>
            <li>✅ Compressor-start, condenser, unusual-noise, or sealed-system symptom</li>
          </ul>
          <h3>How We Fix These Samsung Freezer Issues</h3>
          <p>We confirm the selected mode and inspect temperatures in each zone, airflow, fans, evaporator and condenser conditions, drains, defrost parts, compressor-start components, sealed-system symptoms, ice maker where equipped, water supply, valves, filters, drawers, shelves, gaskets, hinges, handles, alarms, sensors, connected features, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "beko-freezer-repair",
      title: "Beko Freezer Repair",
      heading: "Beko Freezer Repair",
      /*img: "/freezer-repair/beko-freezer-repair.webp",*/
      alt: "Beko freezer repair technician servicing a frost-free freezer",
      description: (
        <>
          <p>Our <strong>Beko freezer repair</strong> service covers supported upright freezers, freezer compartments, frost-free models, built-in cold-storage appliances, and legacy units where compatible parts can be confirmed. Beko freezer service should evaluate temperature control, frost management, airflow, door sealing, and electronic components.</p>
          <h3>Beko Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Beko freezer not reaching temperature or displaying a warning</li>
            <li>✅ Frost buildup, fan, drainage, evaporator, or defrost concern</li>
            <li>✅ Door gasket, hinge, drawer, shelf, handle, or alignment issue</li>
            <li>✅ Thermostat, sensor, display, alarm, lighting, or wiring fault</li>
            <li>✅ Compressor-start, condenser, unusual-noise, or sealed-system symptom</li>
            <li>✅ Parts-identification question on imported or model-specific appliances</li>
          </ul>
          <h3>How We Fix These Beko Freezer Issues</h3>
          <p>We verify the model and inspect temperatures, airflow, fans, evaporator and condenser conditions, drains, defrost components, compressor-start parts, sealed-system symptoms, gaskets, hinges, drawers, shelves, handles, alarms, lighting, thermostats, sensors, wiring, controls, and compatible parts.</p>
        </>
      )
    },
    {
      id: "danby-freezer-repair",
      title: "Danby Freezer Repair",
      heading: "Danby Freezer Repair",
      /*img: "/freezer-repair/danby-freezer-repair.webp",*/
      alt: "Danby freezer repair technician servicing a compact freezer",
      description: (
        <>
          <p>We provide <strong>Danby freezer repair</strong> for compact freezers, upright freezers, chest freezers, apartment-size models, manual-defrost appliances, and supported frost-free units. Danby freezer diagnosis should account for the appliance size, ventilation clearances, thermostat setting, lid or door sealing, and compressor-start condition.</p>
          <h3>Danby Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Danby compact, upright, or chest freezer not freezing correctly</li>
            <li>✅ Excess frost, ice buildup, drainage, or manual-defrost concern</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, handle, or alignment issue</li>
            <li>✅ Thermostat, temperature control, lighting, wiring, or power-supply problem</li>
            <li>✅ Compressor-start, relay, condenser, unusual-noise, or sealed-system symptom</li>
            <li>✅ Ventilation or placement condition affecting a compact installation</li>
          </ul>
          <h3>How We Fix These Danby Freezer Issues</h3>
          <p>We inspect temperatures, settings, ventilation clearances, condenser condition, compressor-start parts, relays, sealed-system symptoms, frost patterns, drainage where applicable, door or lid gaskets, hinges, baskets, shelves, handles, thermostat, lighting, wiring, and power supply.</p>
        </>
      )
    },
    {
      id: "whynter-freezer-repair",
      title: "Whynter Freezer Repair",
      heading: "Whynter Freezer Repair",
      /*img: "/freezer-repair/whynter-freezer-repair.webp",*/
      alt: "Whynter freezer repair technician servicing a portable freezer",
      description: (
        <>
          <p>Our <strong>Whynter freezer repair</strong> service covers supported upright freezers, portable freezers, compact freezers, chest-style appliances, dual-zone models, and cold-storage units where compatible parts can be confirmed. Whynter freezer diagnosis should account for the appliance format, power source, thermostat or digital controls, airflow, and compressor operation.</p>
          <h3>Whynter Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Whynter upright, portable, compact, or dual-zone freezer not reaching temperature</li>
            <li>✅ Digital-control, thermostat, sensor, display, wiring, or power-supply concern</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, handle, or alignment issue</li>
            <li>✅ Compressor-start, condenser, fan, unusual-noise, or sealed-system symptom</li>
            <li>✅ Moisture, frost buildup, drainage, or manual-defrost concern</li>
            <li>✅ Portable-appliance placement, ventilation, AC, or DC power issue where applicable</li>
          </ul>
          <h3>How We Fix These Whynter Freezer Issues</h3>
          <p>We identify the exact model and inspect temperatures, selected settings, power source where applicable, ventilation clearances, airflow, fans, condenser condition, compressor-start components, sealed-system symptoms, frost patterns, drainage, door or lid gaskets, hinges, baskets, shelves, handles, digital controls, thermostats, sensors, display, wiring, and power supply.</p>
        </>
      )
    },
    {
      id: "magic-chef-freezer-repair",
      title: "Magic Chef Freezer Repair",
      heading: "Magic Chef Freezer Repair",
      /*img: "/freezer-repair/magic-chef-freezer-repair.webp",*/
      alt: "Magic Chef freezer repair technician servicing a compact chest freezer",
      description: (
        <>
          <p>We provide <strong>Magic Chef freezer repair</strong> for supported compact freezers, chest freezers, upright freezers, manual-defrost models, and apartment-size cold-storage appliances. Magic Chef freezer diagnosis should begin with temperature settings, ventilation, lid or door sealing, frost conditions, power supply, and compressor-start components.</p>
          <h3>Magic Chef Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Magic Chef compact, chest, or upright freezer not freezing correctly</li>
            <li>✅ Excess frost, ice buildup, drainage, or manual-defrost concern</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, handle, or alignment problem</li>
            <li>✅ Thermostat, temperature-control, wiring, or power-supply issue</li>
            <li>✅ Compressor-start, relay, condenser, unusual-noise, or sealed-system symptom</li>
            <li>✅ Compact-appliance ventilation or placement condition affecting performance</li>
          </ul>
          <h3>How We Fix These Magic Chef Freezer Issues</h3>
          <p>We inspect temperatures, settings, ventilation, condenser condition, compressor-start parts, relays, sealed-system symptoms, frost patterns, drainage where applicable, door or lid gaskets, hinges, baskets, shelves, handles, thermostat, wiring, and power supply.</p>
        </>
      )
    },
    {
      id: "galanz-freezer-repair",
      title: "Galanz Freezer Repair",
      heading: "Galanz Freezer Repair",
      /*img: "/freezer-repair/galanz-freezer-repair.webp",*/
      alt: "Galanz freezer repair technician servicing a compact upright freezer",
      description: (
        <>
          <p>Our <strong>Galanz freezer repair</strong> service covers supported upright freezers, chest freezers, compact freezers, convertible refrigerator-freezer models, and apartment-size appliances. Galanz freezer service should confirm the selected operating mode, temperature setting, ventilation, sealing, and compressor-start condition before parts are recommended.</p>
          <h3>Galanz Freezer Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Galanz freezer or convertible appliance not holding the selected temperature</li>
            <li>✅ Mode-selection, thermostat, digital-control, sensor, or wiring problem</li>
            <li>✅ Door or lid gasket, hinge, basket, shelf, drawer, or alignment issue</li>
            <li>✅ Frost buildup, drainage, airflow, or manual-defrost concern</li>
            <li>✅ Compressor-start, relay, condenser, unusual-noise, or sealed-system symptom</li>
            <li>✅ Compact installation, ventilation, or placement condition affecting performance</li>
          </ul>
          <h3>How We Fix These Galanz Freezer Issues</h3>
          <p>We confirm the selected mode and inspect temperatures, settings, ventilation clearances, airflow where applicable, condenser condition, compressor-start parts, relays, sealed-system symptoms, frost patterns, drainage, gaskets, hinges, baskets, shelves, drawers, thermostats, digital controls, sensors, wiring, and power supply.</p>
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
