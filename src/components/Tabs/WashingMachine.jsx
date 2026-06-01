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
      id: "miele-washing-machine-repair",
      title: "Miele Washing Machine Repair",
      heading: "Miele Washing Machine Repair",
      img: "/washing-machine-repair/miele-washing-machine-repair.webp",
      alt: "Miele washing machine repair technician servicing a premium front-load washer",
      description: (
        <>
          <p>We provide <strong>Miele washing machine repair</strong> for W1 front-loading washers, compact laundry installations, TwinDos automatic-dosing models, CapDosing models, Miele@home-connected washers, and stacked Miele laundry systems. Miele washers combine compact installation requirements with high-speed spin performance, Honeycomb Drum fabric care, water-protection systems, dosing components, sensors, and model-specific electronics.</p>
          <h3>Miele Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ TwinDos detergent not dispensing correctly, producing warnings, or leaving residue in the dosing system</li>
            <li>✅ Washer not draining, stopping before the spin cycle, or displaying a drain-related fault</li>
            <li>✅ Door not locking or unlocking after the cycle</li>
            <li>✅ Excess vibration, movement, or noise during high-speed spin</li>
            <li>✅ Inlet, water-protection, pump, sensor, or control-related errors</li>
            <li>✅ Compact stacked installations where access, leveling, and ventilation must be evaluated carefully</li>
          </ul>
          <h3>How We Fix These Miele Washing Machine Issues</h3>
          <p>We test the drain system, pump, filter, inlet valves, door lock, suspension, leveling, water-protection components, sensors, controls, and TwinDos lines. We confirm the exact W1 model and installation setup before recommending repair.</p>
        </>
      )
    },
    {
      id: "asko-washing-machine-repair",
      title: "ASKO Washing Machine Repair",
      heading: "ASKO Washing Machine Repair",
      /*img: "/washing-machine-repair/asko-washing-machine-repair.webp",*/
      alt: "ASKO washing machine repair technician servicing a Scandinavian front-load washer",
      description: (
        <>
          <p>Our <strong>ASKO washing machine repair</strong> service covers ASKO front-load washers with Steel Seal doors, Quattro Construction suspension systems, Active Drum designs, Aqua Block water-protection components, Auto Dose systems, and stacked or side-by-side laundry installations. ASKO washers require careful diagnosis because vibration control, drainage, sealing, and control performance are closely connected.</p>
          <h3>ASKO Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer shaking, walking, or becoming unusually loud during the spin cycle</li>
            <li>✅ Drain pump, filter, or hose restrictions causing standing water or incomplete cycles</li>
            <li>✅ Steel Seal door not closing, locking, or releasing properly</li>
            <li>✅ Auto Dose detergent system not dispensing consistently</li>
            <li>✅ Aqua Block or inlet-related faults interrupting the wash program</li>
            <li>✅ Suspension, shock absorber, bearing, sensor, or control issues affecting spin stability</li>
          </ul>
          <h3>How We Fix These ASKO Washing Machine Issues</h3>
          <p>We inspect the Quattro Construction suspension system, shock absorbers, drain pump, filter, hoses, inlet valves, Aqua Block components, door lock, Auto Dose system, sensors, bearings, leveling, and electronic controls.</p>
        </>
      )
    },
    {
      id: "bosch-washing-machine-repair",
      title: "Bosch Washing Machine Repair",
      heading: "Bosch Washing Machine Repair",
      /*img: "/washing-machine-repair/bosch-washing-machine-repair.webp",*/
      alt: "Bosch washing machine repair technician servicing a compact front-load washer",
      description: (
        <>
          <p>We provide <strong>Bosch washing machine repair</strong> for 24-inch compact washers, stackable washer-and-dryer pairs, undercounter laundry installations, 300 Series, 500 Series, 800 Series, Home Connect models, and Bosch washers equipped with AquaStop leak protection. Bosch laundry systems are frequently installed in condos, custom closets, secondary kitchens, and space-conscious luxury homes.</p>
          <h3>Bosch Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer not draining because of pump, filter, hose, or foreign-object blockage</li>
            <li>✅ AquaStop or water-inlet fault stopping the wash cycle</li>
            <li>✅ Door-lock problems preventing the washer from starting or releasing</li>
            <li>✅ Compact washer vibrating excessively because of leveling, load balance, or suspension issues</li>
            <li>✅ Home Connect, display, control, or sensor faults</li>
            <li>✅ Slow filling, detergent residue, or incomplete rinsing in a compact installation</li>
          </ul>
          <h3>How We Fix These Bosch Washing Machine Issues</h3>
          <p>We evaluate the drain pump, filter, hoses, AquaStop components, inlet valves, door lock, suspension, leveling, dispenser, sensors, wiring, and control board. We also inspect the installation conditions around compact stacked or undercounter units.</p>
        </>
      )
    },
    {
      id: "fisher-paykel-washing-machine-repair",
      title: "Fisher & Paykel Washing Machine Repair",
      heading: "Fisher & Paykel Washing Machine Repair",
      /*img: "/washing-machine-repair/fisher-paykel-washing-machine-repair.webp",*/
      alt: "Fisher and Paykel washing machine repair technician servicing a premium washer",
      description: (
        <>
          <p>Our <strong>Fisher & Paykel washing machine repair</strong> service covers front-load washers, compact Series 7 washers, SmartDrive-equipped models, and supported legacy Fisher & Paykel top-load washing machines. Fisher & Paykel laundry diagnosis may involve direct-drive components, load sensing, out-of-balance correction, drainage, water inlet systems, and model-specific control logic.</p>
          <h3>Fisher & Paykel Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer repeatedly stopping because it senses an out-of-balance load</li>
            <li>✅ SmartDrive or motor-related problems affecting agitation or spin</li>
            <li>✅ Drain pump, diverter, filter, or hose issues leaving water in the tub</li>
            <li>✅ Door lock or legacy lid-lock problems preventing cycle completion</li>
            <li>✅ Water-inlet, flood-protection, or sensor-related interruptions</li>
            <li>✅ Excess noise, vibration, gasket wear, or control-response problems</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Washing Machine Issues</h3>
          <p>We identify whether the appliance is a current front loader or a supported legacy top loader, then inspect the SmartDrive system, motor, drain pump, diverter where applicable, hoses, inlet valves, flood-protection components, door or lid lock, suspension, sensors, and controls.</p>
        </>
      )
    },
    {
      id: "speed-queen-washing-machine-repair",
      title: "Speed Queen Washing Machine Repair",
      heading: "Speed Queen Washing Machine Repair",
      /*img: "/washing-machine-repair/speed-queen-washing-machine-repair.webp",*/
      alt: "Speed Queen washing machine repair technician servicing a durable residential washer",
      description: (
        <>
          <p>We provide <strong>Speed Queen washing machine repair</strong> for residential top-load washers, front-load washers, TR Series models, TC Series models, FF7 front loaders, agitator washers, and heavy-use laundry installations. Speed Queen washers are valued for durability, but repeated use can still wear pumps, belts, suspension components, locks, valves, and controls.</p>
          <h3>Speed Queen Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top-load washer not agitating, spinning, or completing the cycle</li>
            <li>✅ Front-load washer developing vibration, balance, or drain problems</li>
            <li>✅ Lid switch, lid lock, door lock, or start-control faults</li>
            <li>✅ Drain pump, belt, pulley, bearing, or motor-related noise</li>
            <li>✅ Water-inlet valve problems causing slow fill or incomplete rinsing</li>
            <li>✅ Heavy-use wear that becomes noticeable before a full breakdown</li>
          </ul>
          <h3>How We Fix These Speed Queen Washing Machine Issues</h3>
          <p>We test the washer’s mechanical drive components, motor, belt, pulley, bearings, drain pump, suspension, inlet valves, lid or door lock, timer or electronic controls, leveling, and cycle performance under load.</p>
        </>
      )
    },
    {
      id: "electrolux-washing-machine-repair",
      title: "Electrolux Washing Machine Repair",
      heading: "Electrolux Washing Machine Repair",
      /*img: "/washing-machine-repair/electrolux-washing-machine-repair.webp",*/
      alt: "Electrolux washing machine repair technician servicing a front-load washer",
      description: (
        <>
          <p>Our <strong>Electrolux washing machine repair</strong> service covers front-load washers, LuxCare wash systems, SmartBoost premixing models, Perfect Steam models, stacked laundry pairs, and high-efficiency washing machines. Electrolux washers depend on proper drainage, door sealing, dispensing, suspension, and control communication for consistent cycle performance.</p>
          <h3>Electrolux Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer not draining or stopping with water still inside the drum</li>
            <li>✅ Door not locking, unlocking, or sealing correctly</li>
            <li>✅ SmartBoost or dispenser system leaving detergent residue or failing to mix correctly</li>
            <li>✅ Excess vibration, banging, or movement during spin</li>
            <li>✅ Gasket wear, odor, moisture buildup, or small leaks around the door area</li>
            <li>✅ Pump, inlet valve, pressure sensor, wiring, or control-board faults</li>
          </ul>
          <h3>How We Fix These Electrolux Washing Machine Issues</h3>
          <p>We inspect the drain pump, filter, hoses, door lock, gasket, dispenser and SmartBoost components, inlet valves, pressure sensing, suspension, shocks, bearings, wiring, and electronic controls before recommending repair.</p>
        </>
      )
    },
    {
      id: "lg-washing-machine-repair",
      title: "LG Washing Machine Repair",
      heading: "LG Washing Machine Repair",
      /*img: "/washing-machine-repair/lg-washing-machine-repair.webp",*/
      alt: "LG washing machine repair technician servicing a smart front-load washer",
      description: (
        <>
          <p>We provide <strong>LG washing machine repair</strong> for LG front-load washers, top-load washers, ThinQ-connected models, TurboWash models, TurboWash3D top loaders, direct-drive washing machines, and the washer portion of LG WashTower installations. LG washer service often requires separating drainage, balance, motor, lock, and control issues from installation-related vibration.</p>
          <h3>LG Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ OE-style drain problems caused by a blocked filter, pump, hose, or drain path</li>
            <li>✅ UE-style unbalanced-load problems, repeated spin attempts, or excessive vibration</li>
            <li>✅ LE-style motor, rotor, stator, Hall-sensor, or wiring-related faults</li>
            <li>✅ Door-lock or lid-lock problems preventing a cycle from starting or finishing</li>
            <li>✅ Inlet-valve, pressure-sensing, dispenser, or water-level problems</li>
            <li>✅ WashTower control, communication, or stacked-installation access concerns</li>
          </ul>
          <h3>How We Fix These LG Washing Machine Issues</h3>
          <p>We inspect the drain pump, filter, hoses, suspension, leveling, rotor, stator, Hall sensor, inlet valves, door or lid lock, dispenser, wiring, sensors, and control boards. For WashTower systems, we account for the integrated installation before opening the appliance.</p>
        </>
      )
    },
    {
      id: "samsung-washing-machine-repair",
      title: "Samsung Washing Machine Repair",
      heading: "Samsung Washing Machine Repair",
      /*img: "/washing-machine-repair/samsung-washing-machine-repair.webp",*/
      alt: "Samsung washing machine repair technician servicing a Bespoke smart washer",
      description: (
        <>
          <p>Our <strong>Samsung washing machine repair</strong> service covers front-load washers, top-load washers, SmartThings-connected models, Vibration Reduction Technology models, Active WaterJet top loaders, Bespoke washing machines, and the washer section of Bespoke AI Laundry Combo units. Samsung diagnosis depends on the exact platform because standard washers and all-in-one combo systems use different components.</p>
          <h3>Samsung Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Water-fill errors caused by inlet valves, supply pressure, screens, or sensors</li>
            <li>✅ Drain faults caused by pump, hose, filter, or foreign-object blockage</li>
            <li>✅ Washer repeatedly redistributing the load or vibrating during spin</li>
            <li>✅ Door-lock or lid-lock problems interrupting the wash program</li>
            <li>✅ Display, control-panel, wiring, or SmartThings-related problems</li>
            <li>✅ Bespoke AI Laundry Combo airflow, filter, pump, sensor, or integrated-control concerns</li>
          </ul>
          <h3>How We Fix These Samsung Washing Machine Issues</h3>
          <p>We identify the Samsung platform first, then test inlet valves, screens, drain pump, filter, hoses, suspension, leveling, door or lid lock, motor system, sensors, wiring, and controls. Combo units receive an additional airflow and integrated-system evaluation.</p>
        </>
      )
    },
    {
      id: "ge-washing-machine-repair",
      title: "GE Washing Machine Repair",
      heading: "GE Washing Machine Repair",
      /*img: "/washing-machine-repair/ge-washing-machine-repair.webp",*/
      alt: "GE washing machine repair technician servicing a GE Profile front-load washer",
      description: (
        <>
          <p>We provide <strong>GE washing machine repair</strong> for GE and GE Profile front-load washers, top-load washers, SmartDispense models, UltraFresh Vent System models, OdorBlock-equipped washers, SmartHQ-connected appliances, and GE Profile UltraFast washer-dryer combo units. GE washer repair should match the specific platform because ventilation, dispensing, and combo-system components differ by model.</p>
          <h3>GE Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer not draining, spinning, or completing the selected cycle</li>
            <li>✅ UltraFresh Vent System or OdorBlock performance concerns on front-load models</li>
            <li>✅ SmartDispense detergent system clogging, misreading detergent, or dispensing inconsistently</li>
            <li>✅ Door-lock, lid-lock, suspension, or load-balance problems</li>
            <li>✅ Inlet valve, pressure sensor, pump, wiring, or control-board faults</li>
            <li>✅ GE Profile UltraFast Combo drainage, airflow, filter, heat-pump, or integrated-control issues</li>
          </ul>
          <h3>How We Fix These GE Washing Machine Issues</h3>
          <p>We inspect the drain system, pump, hoses, door or lid lock, suspension, leveling, inlet valves, SmartDispense components, UltraFresh ventilation components, sensors, wiring, and controls. UltraFast Combo units receive an additional airflow, filter, and integrated washer-dryer system review.</p>
        </>
      )
    },
    {
      id: "whirlpool-washing-machine-repair",
      title: "Whirlpool Washing Machine Repair",
      heading: "Whirlpool Washing Machine Repair",
      /*img: "/washing-machine-repair/whirlpool-washing-machine-repair.webp",*/
      alt: "Whirlpool washing machine repair technician servicing a residential washer",
      description: (
        <>
          <p>Our <strong>Whirlpool washing machine repair</strong> service covers top-load washers, front-load washers, high-efficiency models, agitator and impeller washers, 2-in-1 removable-agitator models, Load & Go dispenser models, stacked laundry pairs, and supported all-in-one laundry systems. Whirlpool washer problems often involve drainage, locking, suspension, dispensing, or drive components.</p>
          <h3>Whirlpool Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer not draining or stopping before spin because of pump, filter, or hose blockage</li>
            <li>✅ Lid lock or door lock not engaging, releasing, or communicating with the controls</li>
            <li>✅ Top-load washer shaking, banging, or becoming unbalanced because of suspension wear</li>
            <li>✅ Agitator, impeller, belt, hub, gearcase, or motor-related performance problems</li>
            <li>✅ Load & Go dispenser not delivering detergent properly</li>
            <li>✅ Water-inlet, pressure-sensing, control-board, or wiring faults</li>
          </ul>
          <h3>How We Fix These Whirlpool Washing Machine Issues</h3>
          <p>We inspect the drain pump, filter, hoses, lock assembly, suspension rods, shocks, agitator or impeller system, hub, belt, motor, gearcase, Load & Go dispenser, inlet valves, pressure sensing, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "maytag-washing-machine-repair",
      title: "Maytag Washing Machine Repair",
      heading: "Maytag Washing Machine Repair",
      /*img: "/washing-machine-repair/maytag-washing-machine-repair.webp",*/
      alt: "Maytag washing machine repair technician servicing a heavy-duty washer",
      description: (
        <>
          <p>We provide <strong>Maytag washing machine repair</strong> for top-load washers, front-load washers, agitator and impeller models, Extra Power washers, Deep Fill models, Pet Pro models, stacked laundry pairs, and high-capacity residential machines. Maytag washer service often centers on lid-lock, drain, suspension, drive, and load-balance performance.</p>
          <h3>Maytag Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Lid lock or door lock clicking, failing to engage, or interrupting the cycle</li>
            <li>✅ Washer not draining, spinning, or extracting enough water from clothing</li>
            <li>✅ Top-load washer shaking, banging, or repeatedly rebalancing the load</li>
            <li>✅ Agitator, impeller, hub, belt, gearcase, motor, or bearing-related problems</li>
            <li>✅ Deep Fill, inlet valve, pressure-sensing, or water-level issues</li>
            <li>✅ Extra Power or Pet Pro cycle concerns tied to controls, filters, or cycle components</li>
          </ul>
          <h3>How We Fix These Maytag Washing Machine Issues</h3>
          <p>We test the lid or door lock, drain pump, hoses, suspension, agitator or impeller assembly, hub, belt, motor, gearcase, bearings, inlet valves, pressure sensing, filters where applicable, wiring, and controls.</p>
        </>
      )
    },
    {
      id: "frigidaire-washing-machine-repair",
      title: "Frigidaire Washing Machine Repair",
      heading: "Frigidaire Washing Machine Repair",
      /*img: "/washing-machine-repair/frigidaire-washing-machine-repair.webp",*/
      alt: "Frigidaire washing machine repair technician servicing a high-efficiency washer",
      description: (
        <>
          <p>Our <strong>Frigidaire washing machine repair</strong> service covers current high-efficiency top-load washers and supported legacy Frigidaire front-load washers, including older Affinity laundry systems. Model identification matters because current top-load platforms and discontinued front-load systems require different diagnostic approaches and parts review.</p>
          <h3>Frigidaire Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Top-load washer not draining, spinning, or completing the cycle</li>
            <li>✅ Lid-lock problems preventing the washer from starting or releasing</li>
            <li>✅ Water-inlet, hose, pressure, or fill-level concerns</li>
            <li>✅ Repeated imbalance, vibration, or unusual noise during spin</li>
            <li>✅ Legacy Affinity front-loader door-lock, pump, gasket, or control problems</li>
            <li>✅ Parts-availability questions for discontinued Frigidaire laundry models</li>
          </ul>
          <h3>How We Fix These Frigidaire Washing Machine Issues</h3>
          <p>We identify the current or legacy Frigidaire platform, then inspect the drain pump, hoses, inlet valves, lid or door lock, suspension, leveling, gasket, sensors, wiring, and controls. We confirm parts availability before recommending legacy repairs.</p>
        </>
      )
    },
    {
      id: "kenmore-washing-machine-repair",
      title: "Kenmore Washing Machine Repair",
      heading: "Kenmore Washing Machine Repair",
      /*img: "/washing-machine-repair/kenmore-washing-machine-repair.webp",*/
      alt: "Kenmore washing machine repair technician servicing a residential washer",
      description: (
        <>
          <p>We provide <strong>Kenmore washing machine repair</strong> for Kenmore top-load washers, front-load washers, Kenmore Elite models, Deep Fill washers, Accela Wash models, high-capacity machines, and supported legacy laundry appliances. Kenmore repair requires exact model identification because different Kenmore washers were built on different manufacturer platforms.</p>
          <h3>Kenmore Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer not draining, spinning, agitating, or completing the selected cycle</li>
            <li>✅ Door-lock or lid-lock problems that vary by Kenmore platform</li>
            <li>✅ Excess vibration, worn suspension, balance problems, or noisy bearings</li>
            <li>✅ Pump, belt, hub, motor, gearcase, or direct-drive problems depending on the model</li>
            <li>✅ Water-inlet, pressure-switch, dispenser, or control-board faults</li>
            <li>✅ Parts lookup errors when the complete Kenmore model number is not verified first</li>
          </ul>
          <h3>How We Fix These Kenmore Washing Machine Issues</h3>
          <p>We start with the full Kenmore model number so the underlying platform is identified correctly. We then test the drain system, lock assembly, suspension, drive components, inlet valves, pressure sensing, dispenser, wiring, and controls using the correct platform-specific repair path.</p>
        </>
      )
    },
    {
      id: "amana-washing-machine-repair",
      title: "Amana Washing Machine Repair",
      heading: "Amana Washing Machine Repair",
      /*img: "/washing-machine-repair/amana-washing-machine-repair.webp",*/
      alt: "Amana washing machine repair technician servicing a top-load washer",
      description: (
        <>
          <p>Our <strong>Amana washing machine repair</strong> service focuses on Amana top-load washers with agitator wash systems, Deep Water Wash options, Quick Wash cycles, automatic fabric-softener dispensers, and large-capacity baskets. Although the design is straightforward, proper diagnosis still matters because a lid-lock, drain, fill, suspension, or drive problem can produce similar symptoms.</p>
          <h3>Amana Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer will not start because the lid lock is not engaging</li>
            <li>✅ Washer fills but does not agitate, drain, or spin correctly</li>
            <li>✅ Pump or hose blockage leaving water inside the basket</li>
            <li>✅ Excess vibration, banging, or uneven spin from suspension or leveling issues</li>
            <li>✅ Inlet-valve or water-level problems affecting Deep Water Wash performance</li>
            <li>✅ Agitator, basket, belt, motor, capacitor, or control-related faults</li>
          </ul>
          <h3>How We Fix These Amana Washing Machine Issues</h3>
          <p>We inspect the lid lock, drain pump, hoses, inlet valves, water-level sensing, suspension, leveling, agitator, basket drive, belt, motor, capacitor, wiring, and control system to isolate the actual failure.</p>
        </>
      )
    },
    {
      id: "blomberg-washing-machine-repair",
      title: "Blomberg Washing Machine Repair",
      heading: "Blomberg Washing Machine Repair",
      /*img: "/washing-machine-repair/blomberg-washing-machine-repair.webp",*/
      alt: "Blomberg washing machine repair technician servicing a compact European washer",
      description: (
        <>
          <p>We provide <strong>Blomberg washing machine repair</strong> for compact front-load washers, stacked compact laundry pairs, and supported Blomberg laundry models installed in condos, apartments, guesthouses, and custom laundry closets. Blomberg washers require careful attention to drainage, leveling, door sealing, electrical supply, and limited service clearances.</p>
          <h3>Blomberg Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Compact washer not draining because of pump, filter, or hose blockage</li>
            <li>✅ Door-lock problems preventing the wash cycle from starting or releasing</li>
            <li>✅ Excess vibration in a stacked or tight-clearance laundry installation</li>
            <li>✅ Water-inlet, pressure-sensing, heater, or temperature-related faults</li>
            <li>✅ Gasket wear, detergent residue, odor, or small leaks</li>
            <li>✅ Discontinued-model parts review where the exact model and serial number matter</li>
          </ul>
          <h3>How We Fix These Blomberg Washing Machine Issues</h3>
          <p>We inspect the drain pump, filter, hoses, door lock, gasket, inlet valves, heater, temperature sensing, suspension, leveling, wiring, controls, and the surrounding compact installation before recommending repair.</p>
        </>
      )
    },
    {
      id: "beko-washing-machine-repair",
      title: "Beko Washing Machine Repair",
      heading: "Beko Washing Machine Repair",
      /*img: "/washing-machine-repair/beko-washing-machine-repair.webp",*/
      alt: "Beko washing machine repair technician servicing a compact front-load washer",
      description: (
        <>
          <p>Our <strong>Beko washing machine repair</strong> service covers Beko 24-inch front-load washers, compact laundry pairs, ProSmart Inverter Motor models, steam-equipped washers, and space-saving installations. Beko compact washers can be sensitive to drain restrictions, door-lock faults, leveling, water inlet conditions, and stacked-installation access.</p>
          <h3>Beko Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Washer not draining, leaving water inside the drum, or stopping before spin</li>
            <li>✅ Door-lock problems preventing the cycle from starting or releasing</li>
            <li>✅ ProSmart Inverter Motor, wiring, sensor, or control-related faults</li>
            <li>✅ Compact washer vibrating excessively because of leveling or suspension issues</li>
            <li>✅ Water-inlet, fill-level, overflow-protection, or dispenser concerns</li>
            <li>✅ Steam, temperature, gasket, or stacked-installation performance issues</li>
          </ul>
          <h3>How We Fix These Beko Washing Machine Issues</h3>
          <p>We test the drain pump, filter, hoses, door lock, motor system, suspension, leveling, inlet valves, overflow protection, dispenser, heater, temperature sensing, wiring, and controls while accounting for compact installation clearances.</p>
        </>
      )
    },
    {
      id: "haier-washing-machine-repair",
      title: "Haier Washing Machine Repair",
      heading: "Haier Washing Machine Repair",
      /*img: "/washing-machine-repair/haier-washing-machine-repair.webp",*/
      alt: "Haier washing machine repair technician servicing a compact washer",
      description: (
        <>
          <p>We provide <strong>Haier washing machine repair</strong> for compact front-load washers, SmartHQ-connected laundry models, portable washers, apartment-size washing machines, and supported Haier top-load units. Haier repair varies significantly by model because a portable washer, compact built-in laundry pair, and connected front loader have different access points and components.</p>
          <h3>Haier Washing Machine Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Portable or compact washer not draining because of pump, hose, or filter issues</li>
            <li>✅ SmartHQ-connected washer displaying control, communication, or sensor concerns</li>
            <li>✅ Water-inlet, faucet-adapter, fill-level, or overflow problems on portable models</li>
            <li>✅ Excess vibration caused by leveling, caster setup, suspension, or load balance</li>
            <li>✅ Door-lock, lid-switch, motor, or spin-performance problems</li>
            <li>✅ Compact-installation access issues affecting diagnosis and service planning</li>
          </ul>
          <h3>How We Fix These Haier Washing Machine Issues</h3>
          <p>We identify whether the appliance is portable, compact front-load, or top-load, then inspect the drain system, hoses, inlet connections, overflow protection, lock or lid switch, motor, suspension, leveling, wiring, sensors, and controls.</p>
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
