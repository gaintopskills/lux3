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
      id: "miele-dishwasher-repair",
      title: "Miele Dishwasher Repair",
      heading: "Miele Dishwasher Repair",
      img: "/dishwasher-repair/miele-dishwasher-repair.webp",
      alt: "Miele dishwasher repair technician servicing a premium fully integrated dishwasher",
      description: (
        <>
          <p>We provide <strong>Miele dishwasher repair</strong> for G 5000 and G 7000 dishwashers, fully integrated and panel-ready installations, ADA-height models, cutlery-tray models, QuickIntenseWash units, and premium G 7000 dishwashers with AutoDos, PowerDisk, and Miele@home connectivity. Miele dishwashers use model-specific wash, dosing, filtration, drainage, drying, and electronic systems, so diagnosis should begin with the complete model number and the exact symptom.</p>
          <h3>Miele Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ AutoDos or PowerDisk detergent-dispensing problems causing poor cleaning or dosing warnings</li>
            <li>✅ Dishwasher not draining because of filter, drain-pump, non-return-valve, or hose restrictions</li>
            <li>✅ Water-intake, circulation-pump, spray-arm, or pressure-related concerns affecting wash performance</li>
            <li>✅ Door-latch, AutoOpen drying, leak-protection, or panel-alignment issues on integrated installations</li>
            <li>✅ Cloudy glassware, residue, or incomplete drying related to rinse aid, water hardness, filtration, or cycle selection</li>
            <li>✅ Miele@home, control-panel, sensor, wiring, or model-specific fault-code concerns</li>
          </ul>
          <h3>How We Fix These Miele Dishwasher Issues</h3>
          <p>We inspect the filter system, sump, non-return valve, drain pump, inlet path, circulation system, spray arms, detergent dispenser, AutoDos and PowerDisk components where equipped, water-hardness settings, rinse-aid delivery, door latch, leak protection, AutoOpen drying function, wiring, controls, and installation alignment. We match parts and service steps to the exact Miele G-series platform.</p>
        </>
      )
    },
    {
      id: "cove-dishwasher-repair",
      title: "Cove Dishwasher Repair",
      heading: "Cove Dishwasher Repair",
      /*img: "/dishwasher-repair/cove-dishwasher-repair.webp",*/
      alt: "Cove dishwasher repair technician servicing a luxury panel-ready built-in dishwasher",
      description: (
        <>
          <p>Our <strong>Cove dishwasher repair</strong> service covers luxury 24-inch built-in dishwashers, panel-ready Cove installations, stainless-steel interiors, water-softener-equipped models, adjustable three-rack systems, and integrated kitchens designed around Sub-Zero and Wolf appliance suites. Cove dishwashers use three wash arms, a four-stage filtration system, and fan-assisted drying, so cleaning and drying complaints require a careful review of filtration, water quality, spray coverage, drainage, and installation details.</p>
          <h3>Cove Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Poor cleaning caused by debris in the four-stage filtration system or reduced spray-arm performance</li>
            <li>✅ Spotting, cloudy glassware, or mineral residue when water-softener settings, salt, or water hardness need review</li>
            <li>✅ Dishes remaining damp because of fan-assisted drying, rinse-aid, heating, airflow, or loading concerns</li>
            <li>✅ Drainage problems caused by sump debris, drain-pump wear, check-valve issues, or hose restrictions</li>
            <li>✅ Panel-ready door alignment, rack-glide, latch, or installation-fit problems in custom cabinetry</li>
            <li>✅ Cycle interruption, leak-protection, sensor, wiring, or electronic-control concerns</li>
          </ul>
          <h3>How We Fix These Cove Dishwasher Issues</h3>
          <p>We inspect the four-stage filter, sump, three wash arms, spray jets, circulation system, drain pump, hoses, water-softener system where equipped, rinse-aid delivery, fan-assisted drying components, door latch, panel alignment, rack system, leak protection, sensors, wiring, and controls. We also confirm that the custom-panel installation allows the door and racks to move correctly.</p>
        </>
      )
    },
    {
      id: "asko-dishwasher-repair",
      title: "ASKO Dishwasher Repair",
      heading: "ASKO Dishwasher Repair",
      /*img: "/dishwasher-repair/asko-dishwasher-repair.webp",*/
      alt: "ASKO dishwasher repair technician servicing a Scandinavian panel-ready dishwasher",
      description: (
        <>
          <p>We provide <strong>ASKO dishwasher repair</strong> for stainless-steel and panel-ready built-in dishwashers, domestic and professional-style models, ADA-height installations, units with 8 Steel construction, Super Cleaning System technology, Aqua Safe protection, and Turbo Combi Drying with fan-assisted moisture evacuation and automatic door opening. ASKO dishwasher service should account for filtration, drainage, drying airflow, door movement, and model-specific rack and control systems.</p>
          <h3>ASKO Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dishwasher not draining because the filter, sump, pump, or drain hose needs service</li>
            <li>✅ Turbo Combi Drying or automatic-door-opening concerns leaving dishes wetter than expected</li>
            <li>✅ Cleaning decline caused by blocked spray arms, circulation problems, filter buildup, or water-quality issues</li>
            <li>✅ Aqua Safe, leak-detection, water-intake, or overfill-related interruptions</li>
            <li>✅ Door-latch, panel-ready alignment, rack, hinge, or installation-clearance problems</li>
            <li>✅ Display, sensor, wiring, or control faults interrupting the selected program</li>
          </ul>
          <h3>How We Fix These ASKO Dishwasher Issues</h3>
          <p>We inspect the filter system, sump, drain pump, inlet components, circulation pump, spray arms, Super Cleaning System-related wash path, Aqua Safe components, Turbo Combi Drying airflow and door-opening function, racks, hinges, latch, wiring, sensors, and electronic controls. We verify the exact ASKO model before recommending repair.</p>
        </>
      )
    },
    {
      id: "bosch-dishwasher-repair",
      title: "Bosch Dishwasher Repair",
      heading: "Bosch Dishwasher Repair",
      /*img: "/dishwasher-repair/bosch-dishwasher-repair.webp",*/
      alt: "Bosch dishwasher repair technician servicing a quiet built-in dishwasher",
      description: (
        <>
          <p>Our <strong>Bosch dishwasher repair</strong> service covers 18-inch and 24-inch dishwashers, 100 Series, 300 Series, 500 Series, 800 Series, Benchmark models, panel-ready units, Home Connect dishwashers, PrecisionWash models, CrystalDry models, PureDry systems, AutoAir models, RackMatic-equipped units, and AquaStop-protected installations. Bosch symptoms often overlap, so drainage, water intake, filtration, circulation, heating, drying, and leak protection should be tested together.</p>
          <h3>Bosch Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dishwasher not draining because of filter, sump, drain-pump, or drain-hose restrictions</li>
            <li>✅ Dishes not cleaning properly because spray arms, circulation, inlet flow, or PrecisionWash-related systems need inspection</li>
            <li>✅ CrystalDry, PureDry, or AutoAir drying concerns leaving plastics or dishes wetter than expected</li>
            <li>✅ AquaStop, leak-detection, float, water-inlet, or door-switch issues preventing normal operation</li>
            <li>✅ RackMatic, third-rack, latch, hinge, or panel-ready alignment problems</li>
            <li>✅ Home Connect, control-panel, sensor, wiring, or fault-code concerns</li>
          </ul>
          <h3>How We Fix These Bosch Dishwasher Issues</h3>
          <p>We inspect the filter and sump, drain pump, hoses, inlet valve, float and AquaStop components, circulation pump, spray arms, heating and drying systems, AutoAir door-opening function where equipped, racks, latch, hinges, sensors, wiring, electronic controls, and surrounding installation. We use the Bosch model number to identify the correct platform and parts.</p>
        </>
      )
    },
    {
      id: "fisher-paykel-dishwasher-repair",
      title: "Fisher & Paykel Dishwasher Repair",
      heading: "Fisher & Paykel Dishwasher Repair",
      /*img: "/dishwasher-repair/fisher-paykel-dishwasher-repair.webp",*/
      alt: "Fisher and Paykel dishwasher repair technician servicing a double DishDrawer dishwasher",
      description: (
        <>
          <p>We provide <strong>Fisher & Paykel dishwasher repair</strong> for Single DishDrawer, Double DishDrawer, Tall DishDrawer, Series 7, Series 9, Series 11, integrated panel-ready drawers, contemporary drawer dishwashers, professional-style models, and supported drop-door dishwashers. Fisher & Paykel DishDrawer service is distinct from conventional dishwasher repair because each drawer has its own wash, drain, seal, lid, and control components.</p>
          <h3>Fisher & Paykel Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ One DishDrawer washing or draining correctly while the other drawer develops a separate fault</li>
            <li>✅ Drawer not closing, sealing, or starting because of lid-actuator, latch, seal, or alignment problems</li>
            <li>✅ Standing water, slow draining, or unusual noise caused by rotor, pump, filter, or hose concerns</li>
            <li>✅ Poor cleaning caused by spray-arm obstruction, filter buildup, water-intake, or detergent-related issues</li>
            <li>✅ Knock-to-pause, drawer-sensor, control, wiring, or SmartHQ-related concerns on supported models</li>
            <li>✅ Panel-ready drawer alignment or custom-cabinet interference affecting normal movement</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Dishwasher Issues</h3>
          <p>We test each drawer independently, then inspect the filters, spray arms, rotor and pump assemblies, drain hoses, inlet path, lid actuators, seals, latches, drawer sensors, wiring, controls, panel alignment, and installation clearances. We confirm whether the unit is a single, double, or tall DishDrawer before identifying parts.</p>
        </>
      )
    },
    {
      id: "thermador-dishwasher-repair",
      title: "Thermador Dishwasher Repair",
      heading: "Thermador Dishwasher Repair",
      /*img: "/dishwasher-repair/thermador-dishwasher-repair.webp",*/
      alt: "Thermador dishwasher repair technician servicing a Star Sapphire luxury dishwasher",
      description: (
        <>
          <p>Our <strong>Thermador dishwasher repair</strong> service covers Emerald, Sapphire, and Star Sapphire dishwashers, panel-ready installations, Home Connect models, AquaStop-protected units, Chef's Tool Drawer configurations, Blue PowerBeam models, and premium Star Sapphire dishwashers with Zone Control Spray Arm, PowerWash, and Crystal Protect water-softener features. Thermador dishwasher diagnosis requires attention to cleaning zones, water quality, drying performance, leak protection, and integrated installation details.</p>
          <h3>Thermador Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Zone Control Spray Arm, PowerWash, circulation, or spray-arm problems causing uneven cleaning</li>
            <li>✅ Cloudy glassware or spotting related to water-softener settings, salt, rinse aid, or water quality</li>
            <li>✅ Dishwasher not draining because of filter, sump, drain-pump, or hose restrictions</li>
            <li>✅ AquaStop, leak-detection, inlet, float, or door-latch issues interrupting the cycle</li>
            <li>✅ Chef's Tool Drawer, rack, hinge, panel-ready door, or Blue PowerBeam-related concerns</li>
            <li>✅ Home Connect, sensor, wiring, control-panel, or fault-code issues</li>
          </ul>
          <h3>How We Fix These Thermador Dishwasher Issues</h3>
          <p>We inspect the filtration and drainage system, inlet path, circulation pump, spray arms, Zone Control and PowerWash-related components where equipped, water-softener system, rinse-aid delivery, drying system, AquaStop protection, racks, hinges, latch, indicator lighting, wiring, sensors, controls, and panel-ready installation alignment.</p>
        </>
      )
    },
    {
      id: "jennair-dishwasher-repair",
      title: "JennAir Dishwasher Repair",
      heading: "JennAir Dishwasher Repair",
      /*img: "/dishwasher-repair/jennair-dishwasher-repair.webp",*/
      alt: "JennAir dishwasher repair technician servicing a panel-ready luxury dishwasher",
      description: (
        <>
          <p>We provide <strong>JennAir dishwasher repair</strong> for RISE, NOIR, pocket-handle, panel-ready, fully integrated, and flush-install dishwasher models. Depending on the model, JennAir dishwashers may include Precise Fit third racks, Waterlock leak detection, Door Open Dry, Precision Dry+, fan drying, steam options, and quiet integrated designs. Accurate service begins with identifying the exact dishwasher platform and separating cleaning, drying, drainage, leak-protection, and door-fit concerns.</p>
          <h3>JennAir Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dishes remaining wet because Door Open Dry, Precision Dry+, fan drying, rinse aid, or heating needs inspection</li>
            <li>✅ Waterlock leak-detection, inlet, float, drain, or hose problems interrupting the wash cycle</li>
            <li>✅ Poor cleaning caused by spray-arm obstruction, filtration buildup, circulation, or water-temperature issues</li>
            <li>✅ Precise Fit third-rack, middle-rack glide, latch, hinge, or panel-alignment concerns</li>
            <li>✅ Door not closing correctly on flush-install or custom-panel installations</li>
            <li>✅ Display, sensor-cycle, steam-option, wiring, or control-board problems</li>
          </ul>
          <h3>How We Fix These JennAir Dishwasher Issues</h3>
          <p>We inspect the sump, filter, drain system, inlet path, circulation system, spray arms, drying components, automatic door-opening function where equipped, Waterlock protection, racks and glides, hinges, latch, custom panel, sensors, wiring, and controls. We match the repair to the specific JennAir model and installation style.</p>
        </>
      )
    },
    {
      id: "monogram-dishwasher-repair",
      title: "Monogram Dishwasher Repair",
      heading: "Monogram Dishwasher Repair",
      /*img: "/dishwasher-repair/monogram-dishwasher-repair.webp",*/
      alt: "Monogram dishwasher repair technician servicing a fully integrated luxury dishwasher",
      description: (
        <>
          <p>Our <strong>Monogram dishwasher repair</strong> service covers fully integrated Monogram dishwashers, professional stainless-steel models, custom panel-ready installations, third-rack designs, Bottle Wash Jet models, wash-zone configurations, HydroSave-equipped platforms, Smart Assist models, and connected luxury kitchens. Monogram dishwasher service should preserve the flush appearance of the installation while identifying the actual wash, drain, drying, rack, or control problem.</p>
          <h3>Monogram Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Bottle Wash Jets, wash zones, spray arms, filtration, or circulation problems reducing cleaning performance</li>
            <li>✅ Dishwasher not draining because of sump debris, drain-pump, disposer-connection, or hose restrictions</li>
            <li>✅ Dishes remaining damp because of drying-system, rinse-aid, heating, airflow, or cycle-setting concerns</li>
            <li>✅ Third-rack, rack-glide, latch, hinge, or custom-panel alignment issues</li>
            <li>✅ Water-intake, leak-detection, float, sensor, or door-switch interruptions</li>
            <li>✅ Smart Assist, connected-control, display, wiring, or electronic-control faults</li>
          </ul>
          <h3>How We Fix These Monogram Dishwasher Issues</h3>
          <p>We inspect the filters, sump, drain pump, disposer connection, inlet components, circulation pump, wash manifold, spray arms, Bottle Wash Jets where equipped, drying system, rinse-aid delivery, racks, glides, latch, hinges, panel alignment, leak protection, sensors, wiring, and controls. We protect the custom installation while servicing the internal components.</p>
        </>
      )
    },
    {
      id: "dacor-dishwasher-repair",
      title: "Dacor Dishwasher Repair",
      heading: "Dacor Dishwasher Repair",
      /*img: "/dishwasher-repair/dacor-dishwasher-repair.webp",*/
      alt: "Dacor dishwasher repair technician servicing a panel-ready StormWash dishwasher",
      description: (
        <>
          <p>We provide <strong>Dacor dishwasher repair</strong> for 24-inch panel-ready built-in dishwashers, integrated luxury kitchens, StormWash+ models, AutoRelease drying systems, built-in water-softener configurations, SmartThings-connected units, and dishwashers with Kitchen Fit sliding-door hinge systems. Dacor repair should account for both the internal wash system and the precise fit of the appliance within custom cabinetry.</p>
          <h3>Dacor Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ StormWash+ or dual-washing-arm concerns causing uneven cleaning or residue on cookware</li>
            <li>✅ AutoRelease door not opening correctly or dishes remaining wetter than expected</li>
            <li>✅ Cloudy glassware, spotting, or mineral buildup when the built-in water softener needs attention</li>
            <li>✅ Dishwasher not draining because filters, sump, pump, or hoses are restricted</li>
            <li>✅ Kitchen Fit sliding-door hinge, panel-ready alignment, rack, or latch concerns</li>
            <li>✅ SmartThings, visual floor light, sensor, wiring, or electronic-control issues</li>
          </ul>
          <h3>How We Fix These Dacor Dishwasher Issues</h3>
          <p>We inspect the filter, sump, drain pump, hoses, inlet system, circulation path, StormWash+ components, dual washing arms, AutoRelease door function, water softener, racks, hinges, latch, panel alignment, SmartThings-related controls, floor indicator, sensors, wiring, and installation clearances.</p>
        </>
      )
    },
    {
      id: "kitchenaid-dishwasher-repair",
      title: "KitchenAid Dishwasher Repair",
      heading: "KitchenAid Dishwasher Repair",
      /*img: "/dishwasher-repair/kitchenaid-dishwasher-repair.webp",*/
      alt: "KitchenAid dishwasher repair technician servicing a third-rack built-in dishwasher",
      description: (
        <>
          <p>Our <strong>KitchenAid dishwasher repair</strong> service covers top-control and front-control dishwashers, panel-ready installations, MaxTub models, FreeFlex third-rack dishwashers, FreeFlex Fit models, 360-degree Max Jets third-rack dishwashers, ProDry and Advanced ProDry systems, and true self-cleaning filtration models. KitchenAid dishwasher complaints frequently involve cleaning coverage, filtration, drying, rack movement, drainage, or control performance.</p>
          <h3>KitchenAid Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ 360-degree Max Jets, FreeFlex third rack, spray-arm, or circulation concerns affecting cleaning coverage</li>
            <li>✅ Dishwasher not draining because the filter system, sump, drain pump, or hose needs service</li>
            <li>✅ Dishes remaining damp because ProDry, Advanced ProDry, heating, rinse-aid, or airflow components need review</li>
            <li>✅ True self-cleaning filtration, disposer-style, or wash-system concerns causing residue or unusual noise</li>
            <li>✅ Rack, glide, adjuster, latch, hinge, or panel-ready alignment problems</li>
            <li>✅ Control-panel, sensor, wiring, dispenser, or cycle-interruption concerns</li>
          </ul>
          <h3>How We Fix These KitchenAid Dishwasher Issues</h3>
          <p>We inspect the filter and sump, drain pump, hoses, inlet path, circulation system, wash arms, third-rack jets, filtration components, heating and ProDry-related components where equipped, dispenser, racks, adjusters, hinges, latch, panel alignment, sensors, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "viking-dishwasher-repair",
      title: "Viking Dishwasher Repair",
      heading: "Viking Dishwasher Repair",
      /*img: "/dishwasher-repair/viking-dishwasher-repair.webp",*/
      alt: "Viking dishwasher repair technician servicing a premium built-in dishwasher",
      description: (
        <>
          <p>We provide <strong>Viking dishwasher repair</strong> for 24-inch built-in dishwashers, Premiere dishwashers, professional-panel models, optional custom-panel installations, water-softener-equipped models, and supported legacy Viking units. Current Viking dishwasher platforms may include Multi-Level Power Wash, three wash arms, triple filtration, Turbo Fan Dry, Smart FullSize racks, adjustable upper racks, and LCD controls.</p>
          <h3>Viking Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Multi-Level Power Wash, variable-pressure, circulation, or spray-arm problems causing poor cleaning</li>
            <li>✅ Triple-filtration buildup, sump debris, drain-pump wear, or hose restrictions causing drainage problems</li>
            <li>✅ Turbo Fan Dry, rinse-aid, heating, or airflow concerns leaving dishes damp</li>
            <li>✅ Water-softener setting, salt, hard-water, or spotting concerns on equipped models</li>
            <li>✅ Smart FullSize rack, adjustable rack, latch, hinge, or custom-panel alignment problems</li>
            <li>✅ LCD display, sensor, wiring, or electronic-control issues</li>
          </ul>
          <h3>How We Fix These Viking Dishwasher Issues</h3>
          <p>We inspect the triple-filtration system, sump, drain pump, hoses, inlet path, circulation system, three wash arms, variable-pressure wash components, Turbo Fan Dry system, water softener where equipped, racks, latch, hinges, panel fit, LCD controls, sensors, and wiring.</p>
        </>
      )
    },
    {
      id: "bertazzoni-dishwasher-repair",
      title: "Bertazzoni Dishwasher Repair",
      heading: "Bertazzoni Dishwasher Repair",
      /*img: "/dishwasher-repair/bertazzoni-dishwasher-repair.webp",*/
      alt: "Bertazzoni dishwasher repair technician servicing a panel-ready Italian dishwasher",
      description: (
        <>
          <p>Our <strong>Bertazzoni dishwasher repair</strong> service covers 18-inch and 24-inch dishwashers, standard-tub and tall-tub models, stainless-steel and panel-ready installations, Professional Series, Master Series, and Heritage Series dishwashers. Depending on the model, Bertazzoni dishwashers may include three spray arms, three racks, DirectWash zones, concealed controls, adjustable middle racks, and custom panel integration.</p>
          <h3>Bertazzoni Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ DirectWash zone, spray-arm, circulation, or filtration problems reducing cleaning performance</li>
            <li>✅ Dishwasher not draining because of sump debris, drain-pump, check-valve, or hose concerns</li>
            <li>✅ Dishes not drying completely because of rinse-aid, heating, airflow, or cycle-setting issues</li>
            <li>✅ Three-rack loading system, adjustable-middle-rack, hinge, latch, or panel-alignment concerns</li>
            <li>✅ Water-inlet, leak-protection, sensor, or door-switch interruptions</li>
            <li>✅ Concealed-control, wiring, display, or electronic-control faults</li>
          </ul>
          <h3>How We Fix These Bertazzoni Dishwasher Issues</h3>
          <p>We inspect filters, sump, drain pump, hoses, inlet components, circulation pump, three spray arms, DirectWash components where equipped, drying system, rinse-aid dispenser, racks, adjusters, hinges, latch, custom panel, sensors, wiring, and controls. We verify whether the dishwasher is 18-inch, standard-tub, or tall-tub before ordering parts.</p>
        </>
      )
    },
    {
      id: "smeg-dishwasher-repair",
      title: "Smeg Dishwasher Repair",
      heading: "Smeg Dishwasher Repair",
      /*img: "/dishwasher-repair/smeg-dishwasher-repair.webp",*/
      alt: "Smeg dishwasher repair technician servicing a fully integrated Italian dishwasher",
      description: (
        <>
          <p>We provide <strong>Smeg dishwasher repair</strong> for fully integrated, undercounter, panel-ready, pre-finished, retro-style, ADA-height, 18-inch, and 24-inch dishwashers. Supported Smeg platforms may include Orbital Wash systems, Shuttle Wash systems on select narrow units, Aquatest turbidity sensors, AquaStop flood protection, Dry Assist automatic door opening, water softeners, Flexi Fit hinges, and ActiveLight floor indicators.</p>
          <h3>Smeg Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Orbital Wash or Shuttle Wash spray-system concerns causing incomplete cleaning coverage</li>
            <li>✅ Aquatest sensor, water-intake, filtration, or circulation issues affecting automatic wash performance</li>
            <li>✅ AquaStop or leak-detection interruptions preventing the dishwasher from running normally</li>
            <li>✅ Dry Assist automatic-door-opening, rinse-aid, heating, or drying concerns</li>
            <li>✅ Flexi Fit hinge, custom-panel, rack, latch, or ActiveLight indicator issues</li>
            <li>✅ Drain-pump, sump, hose, water-softener, wiring, or electronic-control faults</li>
          </ul>
          <h3>How We Fix These Smeg Dishwasher Issues</h3>
          <p>We inspect the filter, sump, drain pump, hoses, inlet path, circulation pump, Orbital or Shuttle wash components, spray arms, Aquatest sensor, AquaStop protection, Dry Assist door-opening function, water softener, hinges, racks, latch, panel integration, ActiveLight indicator, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "lg-dishwasher-repair",
      title: "LG Dishwasher Repair",
      heading: "LG Dishwasher Repair",
      /*img: "/dishwasher-repair/lg-dishwasher-repair.webp",*/
      alt: "LG dishwasher repair technician servicing a smart QuadWash dishwasher",
      description: (
        <>
          <p>Our <strong>LG dishwasher repair</strong> service covers front-control and top-control dishwashers, FlushFit installations, ThinQ-connected models, QuadWash and QuadWash Pro units, TrueSteam dishwashers, Dynamic Dry and Dynamic Heat Dry models, AutoVent Dry systems, BlastZone-equipped units, adjustable third-rack dishwashers, and supported LG STUDIO models. LG service should separate wash-arm, steam, drainage, drying, sensor, and installation-related symptoms.</p>
          <h3>LG Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ QuadWash or QuadWash Pro spray-arm movement, circulation, or filtration problems reducing cleaning performance</li>
            <li>✅ TrueSteam, BlastZone, dispenser, or water-temperature concerns affecting soil removal</li>
            <li>✅ Dishwasher not draining because of filter, sump, drain-pump, or hose restrictions</li>
            <li>✅ Dynamic Dry, Dynamic Heat Dry, or AutoVent Dry concerns leaving dishes damp</li>
            <li>✅ ThinQ, hidden-display, control-panel, sensor, wiring, or fault-code issues</li>
            <li>✅ Rack, latch, hinge, leak-detection, or FlushFit installation-alignment problems</li>
          </ul>
          <h3>How We Fix These LG Dishwasher Issues</h3>
          <p>We inspect the filters, sump, drain pump, drain hose, inlet system, circulation pump, QuadWash arms, TrueSteam components where equipped, BlastZone area, heating and drying systems, AutoVent function, racks, latch, hinges, leak detection, sensors, wiring, controls, and cabinet clearances.</p>
        </>
      )
    },
    {
      id: "samsung-dishwasher-repair",
      title: "Samsung Dishwasher Repair",
      heading: "Samsung Dishwasher Repair",
      /*img: "/dishwasher-repair/samsung-dishwasher-repair.webp",*/
      alt: "Samsung dishwasher repair technician servicing a Bespoke smart dishwasher",
      description: (
        <>
          <p>We provide <strong>Samsung dishwasher repair</strong> for front-control and top-control dishwashers, Bespoke AI dishwashers, SmartThings-connected units, StormWash and StormWash+ systems, Smart Dry models, AutoRelease door configurations, third-rack dishwashers, and ADA-height installations. Samsung dishwasher diagnosis should identify whether the complaint is related to drainage, StormWash cleaning, AutoRelease drying, leak protection, door closure, or electronic controls.</p>
          <h3>Samsung Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ StormWash or StormWash+ rotating-jet concerns causing cookware or dishes to remain dirty</li>
            <li>✅ AutoRelease door or Smart Dry problems leaving dishes damp or preventing normal door movement</li>
            <li>✅ Dishwasher not draining because of filter, sump, drain-pump, hose, or disposer-connection restrictions</li>
            <li>✅ Water-inlet, leak-detection, float, or door-latch issues interrupting the selected cycle</li>
            <li>✅ Third-rack, adjustable-rack, hinge, or built-in alignment problems</li>
            <li>✅ SmartThings, Bespoke AI, control-panel, sensor, wiring, or fault-code concerns</li>
          </ul>
          <h3>How We Fix These Samsung Dishwasher Issues</h3>
          <p>We inspect filtration, sump, drain pump, hoses, disposer connection, inlet components, circulation system, StormWash jets, spray arms, AutoRelease and Smart Dry functions, leak protection, racks, hinges, latch, sensors, SmartThings-related controls, wiring, and installation alignment.</p>
        </>
      )
    },
    {
      id: "ge-dishwasher-repair",
      title: "GE Dishwasher Repair",
      heading: "GE Dishwasher Repair",
      /*img: "/dishwasher-repair/ge-dishwasher-repair.webp",*/
      alt: "GE dishwasher repair technician servicing a built-in dishwasher with bottle jets",
      description: (
        <>
          <p>Our <strong>GE dishwasher repair</strong> service covers GE and GE Profile front-control and top-control dishwashers, stainless-steel and hybrid-tub models, third-rack units, Bottle Jet models, Dry Boost dishwashers, Twin Turbo Dry Boost systems, SmartHQ-connected appliances, sanitize-cycle dishwashers, and panel-ready configurations where applicable. GE symptoms should be evaluated across drainage, wash pressure, drying, rack loading, and electronic control systems.</p>
          <h3>GE Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Bottle Jets, spray arms, circulation, or filtration concerns leaving tall items or dishes dirty</li>
            <li>✅ Dishwasher not draining because of sump debris, drain-pump, disposer knockout plug, or hose restrictions</li>
            <li>✅ Dry Boost or Twin Turbo Dry Boost concerns leaving plastics and dishes damp</li>
            <li>✅ Water-inlet, float, leak-detection, latch, or door-switch problems interrupting the cycle</li>
            <li>✅ Third-rack, rack-adjuster, hinge, or panel-alignment concerns</li>
            <li>✅ SmartHQ, control-panel, sensor, wiring, or electronic-control faults</li>
          </ul>
          <h3>How We Fix These GE Dishwasher Issues</h3>
          <p>We inspect filters, sump, drain pump, disposer connection, hoses, inlet valve, float, circulation pump, spray arms, Bottle Jets where equipped, Dry Boost-related components, racks, adjusters, hinges, latch, door switch, leak protection, sensors, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "whirlpool-dishwasher-repair",
      title: "Whirlpool Dishwasher Repair",
      heading: "Whirlpool Dishwasher Repair",
      /*img: "/dishwasher-repair/whirlpool-dishwasher-repair.webp",*/
      alt: "Whirlpool dishwasher repair technician servicing a residential built-in dishwasher",
      description: (
        <>
          <p>We provide <strong>Whirlpool dishwasher repair</strong> for front-control and hidden-control dishwashers, third-rack models, Sensor Cycle dishwashers, 1-Hour Wash models, Heated Dry configurations, Extended Dry options, Fan Drying Technology models, stainless-steel-tub appliances, and supported legacy Whirlpool units. Because similar symptoms can have multiple causes, we test cleaning, drainage, drying, water intake, and controls together.</p>
          <h3>Whirlpool Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dishwasher not draining because the filter, sump, drain pump, check valve, disposer connection, or hose is restricted</li>
            <li>✅ Sensor Cycle or wash-performance concerns caused by spray-arm, circulation, temperature, or inlet issues</li>
            <li>✅ Heated Dry, Extended Dry, or fan-drying concerns leaving dishes wet</li>
            <li>✅ Water-inlet, float, leak, latch, or door-switch problems preventing normal operation</li>
            <li>✅ Third-rack, rack-adjuster, hinge, or dispenser concerns</li>
            <li>✅ Control-panel, timer, sensor, wiring, or electronic-control issues</li>
          </ul>
          <h3>How We Fix These Whirlpool Dishwasher Issues</h3>
          <p>We inspect the filter and sump, drain pump, check valve, hoses, disposer connection, inlet valve, float, circulation pump, spray arms, heating and fan-drying components where equipped, detergent dispenser, racks, hinges, latch, door switch, sensors, wiring, timer, and controls.</p>
        </>
      )
    },
    {
      id: "maytag-dishwasher-repair",
      title: "Maytag Dishwasher Repair",
      heading: "Maytag Dishwasher Repair",
      /*img: "/dishwasher-repair/maytag-dishwasher-repair.webp",*/
      alt: "Maytag dishwasher repair technician servicing a PowerBlast dishwasher",
      description: (
        <>
          <p>Our <strong>Maytag dishwasher repair</strong> service covers front-control and top-control dishwashers, Dual Power Filtration models, PowerBlast-cycle units, third-level-rack dishwashers, MaxTub platforms, Heated Dry models, and heavy-use residential kitchens. Maytag dishwashers often require a combined review of filtration, food-particle handling, circulation, drainage, heating, and rack movement.</p>
          <h3>Maytag Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dual Power Filtration, chopper, filter, or sump concerns causing residue, odor, or unusual noise</li>
            <li>✅ PowerBlast cycle or spray-arm performance declining because of circulation, pressure, or temperature problems</li>
            <li>✅ Dishwasher not draining because of pump, check-valve, hose, or disposer-connection restrictions</li>
            <li>✅ Heated Dry concerns leaving dishes damp or extending cycle times</li>
            <li>✅ Third-level rack, upper-rack glide, adjuster, hinge, latch, or dispenser issues</li>
            <li>✅ Water-inlet, sensor, wiring, door-switch, or electronic-control faults</li>
          </ul>
          <h3>How We Fix These Maytag Dishwasher Issues</h3>
          <p>We inspect the Dual Power Filtration system, filter, sump, chopper-related components where equipped, drain pump, check valve, hoses, disposer connection, inlet path, circulation pump, spray arms, heating system, racks, glides, adjusters, hinges, latch, dispenser, sensors, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "frigidaire-dishwasher-repair",
      title: "Frigidaire Dishwasher Repair",
      heading: "Frigidaire Dishwasher Repair",
      /*img: "/dishwasher-repair/frigidaire-dishwasher-repair.webp",*/
      alt: "Frigidaire dishwasher repair technician servicing an OrbitClean residential dishwasher",
      description: (
        <>
          <p>We provide <strong>Frigidaire dishwasher repair</strong> for front-control and top-control dishwashers, Frigidaire Gallery models, stainless-steel-tub units, CleanBoost dishwashers, OrbitClean systems, DishSense sensor models, MaxBoost Dry configurations, adaptive quick-wash units, and supported legacy Frigidaire appliances. Frigidaire repair begins with identifying whether the problem originates in cleaning, drainage, drying, intake, leakage, or controls.</p>
          <h3>Frigidaire Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ CleanBoost, OrbitClean, spray-arm, circulation, or filtration concerns reducing wash performance</li>
            <li>✅ Dishwasher not draining because of filter, glass trap, sump, drain-pump, or hose restrictions</li>
            <li>✅ DishSense, water-temperature, inlet, or sensor issues causing inconsistent cycle performance</li>
            <li>✅ MaxBoost Dry, fan, heater, rinse-aid, or airflow concerns leaving dishes damp</li>
            <li>✅ Door-latch, leak, rack, hinge, or dispenser concerns</li>
            <li>✅ Control-panel, wiring, error-code, or electronic-control faults</li>
          </ul>
          <h3>How We Fix These Frigidaire Dishwasher Issues</h3>
          <p>We inspect the filter and glass trap, sump, drain pump, hoses, inlet system, circulation pump, OrbitClean and spray-arm components, CleanBoost-related wash path where equipped, DishSense components, heater, fan and MaxBoost Dry system, dispenser, racks, latch, hinges, leak protection, wiring, sensors, and controls.</p>
        </>
      )
    },
    {
      id: "electrolux-dishwasher-repair",
      title: "Electrolux Dishwasher Repair",
      heading: "Electrolux Dishwasher Repair",
      /*img: "/dishwasher-repair/electrolux-dishwasher-repair.webp",*/
      alt: "Electrolux dishwasher repair technician servicing a stainless-steel built-in dishwasher",
      description: (
        <>
          <p>Our <strong>Electrolux dishwasher repair</strong> service covers 24-inch stainless-steel-tub dishwashers, integrated-control and pocket-handle models, SmartBoost Clean Technology platforms, Max Dry configurations, quiet built-in installations, and supported legacy Electrolux dishwashers. Electrolux service should distinguish a blocked filter or sump from drain-hose, pump, intake, drying, dispenser, latch, and control issues.</p>
          <h3>Electrolux Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ SmartBoost, spray-arm, circulation, filtration, or detergent-dissolving concerns reducing cleaning performance</li>
            <li>✅ i20, i40, standing-water, slow-drain, filter, sump, drain-pump, or hose problems</li>
            <li>✅ Max Dry, rinse-aid, heater, fan, or water-temperature concerns leaving dishes damp</li>
            <li>✅ Water-inlet, float, leak, latch, or door-closure problems</li>
            <li>✅ Rack, hinge, dispenser, or integrated-control concerns</li>
            <li>✅ Power-loss, wiring, sensor, display, or electronic-control faults</li>
          </ul>
          <h3>How We Fix These Electrolux Dishwasher Issues</h3>
          <p>We inspect the filter and sump, drain pump, hoses, disposer connection, inlet path, float, circulation system, spray arms, SmartBoost-related wash components where equipped, heater, fan and Max Dry system, rinse-aid and detergent dispensers, racks, hinges, latch, wiring, sensors, and electronic controls.</p>
        </>
      )
    },
    {
      id: "blomberg-dishwasher-repair",
      title: "Blomberg Dishwasher Repair",
      heading: "Blomberg Dishwasher Repair",
      /*img: "/dishwasher-repair/blomberg-dishwasher-repair.webp",*/
      alt: "Blomberg dishwasher repair technician servicing a compact panel-ready dishwasher",
      description: (
        <>
          <p>We provide <strong>Blomberg dishwasher repair</strong> for 18-inch and 24-inch built-in dishwashers, compact condo and apartment installations, stainless-steel models, panel-ready configurations, integrated-control appliances, adjustable-rack systems, and supported Blomberg dishwasher platforms. Compact installations require careful attention to drainage routing, water connections, cabinet clearances, door movement, and model-specific parts.</p>
          <h3>Blomberg Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Dishwasher not draining because filters, sump, drain pump, hose routing, or disposer connection need attention</li>
            <li>✅ Poor cleaning caused by spray-arm blockage, circulation, water-intake, filtration, or temperature issues</li>
            <li>✅ Dishes remaining damp because of rinse-aid, drying, heating, airflow, or cycle-setting concerns</li>
            <li>✅ Compact-installation, panel-ready-door, hinge, latch, rack, or clearance problems</li>
            <li>✅ Leak-protection, float, inlet, or door-switch interruptions</li>
            <li>✅ Integrated-control, sensor, wiring, or electronic-control faults</li>
          </ul>
          <h3>How We Fix These Blomberg Dishwasher Issues</h3>
          <p>We inspect the filter, sump, drain pump, hoses, disposer connection, water inlet, float, circulation pump, spray arms, drying system, dispensers, racks, hinges, latch, panel alignment, leak protection, sensors, wiring, controls, and the surrounding compact installation.</p>
        </>
      )
    },
    {
      id: "kenmore-dishwasher-repair",
      title: "Kenmore Dishwasher Repair",
      heading: "Kenmore Dishwasher Repair",
      /*img: "/dishwasher-repair/kenmore-dishwasher-repair.webp",*/
      alt: "Kenmore dishwasher repair technician servicing a residential built-in dishwasher",
      description: (
        <>
          <p>Our <strong>Kenmore dishwasher repair</strong> service covers Kenmore and Kenmore Elite dishwashers, current and legacy built-in units, UltraWash filter systems, UltraWash Plus models, SmartWash-cycle dishwashers, EasyFlex third-rack configurations, Smart Dry and Turbo Dry models, front-control appliances, and hidden-control installations. Kenmore repair requires exact model-number verification because different models may use different underlying appliance platforms and parts.</p>
          <h3>Kenmore Dishwasher Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ UltraWash filter, sump, pump, or drain-hose concerns causing residue, standing water, or odor</li>
            <li>✅ SmartWash, spray-arm, circulation, inlet, or temperature problems reducing cleaning performance</li>
            <li>✅ Smart Dry, Turbo Dry, heater, fan, or rinse-aid concerns leaving dishes damp</li>
            <li>✅ EasyFlex third-rack, rack-adjuster, hinge, latch, or dispenser problems</li>
            <li>✅ Leak, float, door-switch, water-inlet, or disposer-connection issues</li>
            <li>✅ Incorrect parts identification when the complete Kenmore model number is not confirmed first</li>
          </ul>
          <h3>How We Fix These Kenmore Dishwasher Issues</h3>
          <p>We begin with the complete Kenmore model number to identify the correct platform. We then inspect the filter, sump, drain pump, hoses, disposer connection, inlet path, float, circulation pump, spray arms, heating and drying components, dispensers, racks, adjusters, hinges, latch, door switch, sensors, wiring, and controls.</p>
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
