// SEO-optimized Tabs component for brand-specific dishwasher repair services
// Includes premium, luxury, European, and high-end dishwasher brands.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "aga-dishwasher-repair",
      title: "AGA Dishwasher Repair",
      heading: "AGA Dishwasher Repair",
      /* img: "/dishwasher-repair/aga-dishwasher-repair.webp", */
      alt: "AGA dishwasher repair technician servicing a legacy AGA Mercury or Elise dishwasher",
      description: (
        <>
          <p>
            We provide <strong>AGA dishwasher repair</strong> for legacy AGA Legacy,
            Mercury, and Elise 24-inch built-in tall-tub dishwashers, including
            color-matched kitchen-suite installations and fully integrated control
            configurations. Many AGA dishwashers remain installed in distinctive
            luxury kitchens even when a particular model is no longer actively
            promoted, so accurate service begins with the complete model number,
            finish, serial information, and symptom.
          </p>

          <h3>
            AGA Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because the filter system, sump, drain pump,
              check valve, disposer connection, or hose needs service
            </li>

            <li>
              ✅ Reduced wash performance related to multi-level washing, three spray
              arms, circulation, water intake, or filtration concerns
            </li>

            <li>
              ✅ Smart-soil-sensor, cycle-selection, half-load, sanitize, or
              control-panel issues interrupting normal operation
            </li>

            <li>
              ✅ Dishes remaining damp because rinse aid, heating, airflow, or cycle
              configuration needs review
            </li>

            <li>
              ✅ Third-level rack, adjustable-rack, latch, hinge, color-matched
              door-panel, or installation-alignment problems
            </li>

            <li>
              ✅ Parts-identification challenges on older AGA Legacy, Mercury, or
              Elise dishwasher platforms
            </li>
          </ul>

          <h3>
            How We Fix These AGA Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, disposer connection,
            inlet path, circulation system, spray arms, filtration components,
            soil-sensing functions, heating and drying components, racks, hinges,
            latch, door panel, wiring, and controls. Because AGA dishwasher
            configurations changed across Legacy, Mercury, and Elise suites, we
            verify the exact model before recommending parts or repair steps.
          </p>
        </>
      )
    },
    {
      id: "bertazzoni-dishwasher-repair",
      title: "Bertazzoni Dishwasher Repair",
      heading: "Bertazzoni Dishwasher Repair",
      /* img: "/dishwasher-repair/bertazzoni-dishwasher-repair.webp", */
      alt: "Bertazzoni dishwasher repair technician servicing a panel-ready Italian dishwasher",
      description: (
        <>
          <p>
            Our <strong>Bertazzoni dishwasher repair</strong> service covers
            18-inch and 24-inch dishwashers, standard-tub and tall-tub models,
            stainless-steel and panel-ready installations, Professional Series,
            Master Series, and Heritage Series dishwashers. Depending on the
            model, Bertazzoni dishwashers may include three spray arms, three
            racks, DirectWash zones, concealed controls, adjustable middle
            racks, and custom panel integration.
          </p>

          <h3>
            Bertazzoni Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ DirectWash zone, spray-arm, circulation, or filtration
              problems reducing cleaning performance
            </li>

            <li>
              ✅ Dishwasher not draining because of sump debris, drain-pump,
              check-valve, or hose concerns
            </li>

            <li>
              ✅ Dishes not drying completely because of rinse-aid, heating,
              airflow, or cycle-setting issues
            </li>

            <li>
              ✅ Three-rack loading system, adjustable-middle-rack, hinge,
              latch, or panel-alignment concerns
            </li>

            <li>
              ✅ Water-inlet, leak-protection, sensor, or door-switch
              interruptions
            </li>

            <li>
              ✅ Concealed-control, wiring, display, or electronic-control
              faults
            </li>
          </ul>

          <h3>
            How We Fix These Bertazzoni Dishwasher Issues
          </h3>

          <p>
            We inspect filters, sump, drain pump, hoses, inlet components,
            circulation pump, three spray arms, DirectWash components where
            equipped, drying system, rinse-aid dispenser, racks, adjusters,
            hinges, latch, custom panel, sensors, wiring, and controls. We
            verify whether the dishwasher is 18-inch, standard-tub, or tall-tub
            before ordering parts.
          </p>
        </>
      )
    },
    {
      id: "fulgor-milano-dishwasher-repair",
      title: "Fulgor Milano Dishwasher Repair",
      heading: "Fulgor Milano Dishwasher Repair",
      /* img: "/dishwasher-repair/fulgor-milano-dishwasher-repair.webp", */
      alt: "Fulgor Milano dishwasher repair technician servicing an Italian panel-ready built-in dishwasher",
      description: (
        <>
          <p>
            Our <strong>Fulgor Milano dishwasher repair</strong> service covers
            24-inch stainless-steel and overlay built-in dishwashers, panel-ready
            installations, three-rack configurations, touch-control models, and
            newer integrated dishwashers with multiple wash cycles, internal LED
            lighting, and turbo-dry technology. Fulgor Milano dishwasher service
            should address cleaning, filtration, drainage, drying, rack movement,
            and custom-panel fit together.
          </p>

          <h3>
            Fulgor Milano Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Three-wash-arm, circulation, or triple-filtration concerns causing
              residue or uneven cleaning
            </li>

            <li>
              ✅ Dishwasher not draining because of sump debris, drain-pump wear,
              hose restrictions, or back-siphonage concerns
            </li>

            <li>
              ✅ Turbo-dry, super-active-drying, heating, rinse-aid, or airflow
              concerns leaving dishes damp
            </li>

            <li>
              ✅ Touch-control, wash-cycle-selection, sensor, wiring, or
              electronic-control problems
            </li>

            <li>
              ✅ Three-rack loading, adjustable-basket, hinge, latch, or custom-panel
              alignment issues
            </li>

            <li>
              ✅ Leakage-protection or overflow-related interruptions preventing
              normal operation
            </li>
          </ul>

          <h3>
            How We Fix These Fulgor Milano Dishwasher Issues
          </h3>

          <p>
            We inspect the filtration system, sump, drain pump, hoses, inlet path,
            circulation pump, three wash arms, heater, drying components, rinse-aid
            system, touch controls, sensors, racks, hinges, latch, leak protection,
            wiring, and installation alignment. We match the service plan to the
            exact Fulgor Milano stainless-steel or overlay dishwasher platform.
          </p>
        </>
      )
    },
    {
      id: "gaggenau-dishwasher-repair",
      title: "Gaggenau Dishwasher Repair",
      heading: "Gaggenau Dishwasher Repair",
      /* img: "/dishwasher-repair/gaggenau-dishwasher-repair.webp", */
      alt: "Gaggenau dishwasher repair technician servicing a luxury 400 Series panel-ready dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Gaggenau dishwasher repair</strong> for 200 Series
            and 400 Series 24-inch dishwashers, panel-ready installations,
            handle-free push-to-open configurations, flexible-hinge installations,
            TFT-display models, floor-projection systems, and 400 Series dishwashers
            with illuminated interiors and Zeolite drying technology. Gaggenau
            service should protect delicate glassware while identifying the actual
            wash, drainage, drying, door, or electronic fault.
          </p>

          <h3>
            Gaggenau Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Zeolite-drying, heating, airflow, or rinse-aid concerns leaving
              dishes or glassware damp
            </li>

            <li>
              ✅ Push-to-open door, flexible-hinge, latch, or custom-panel alignment
              problems in flush cabinetry
            </li>

            <li>
              ✅ Dishwasher not draining because the filter, sump, drain pump,
              non-return path, or hose needs service
            </li>

            <li>
              ✅ Spray-arm, circulation, extra-cleaning-area, inlet-flow, or
              filtration issues reducing wash performance
            </li>

            <li>
              ✅ TFT display, floor-projection, Home Connect, sensor, wiring, or
              electronic-control concerns
            </li>

            <li>
              ✅ Rack-rail, folding-tine, glassware-support, or loading-system issues
              affecting delicate items
            </li>
          </ul>

          <h3>
            How We Fix These Gaggenau Dishwasher Issues
          </h3>

          <p>
            We inspect the filter system, sump, drain pump, hoses, inlet path,
            circulation system, spray arms, Zeolite-related drying components where
            equipped, heater, rinse-aid delivery, push-to-open function, flexible
            hinges, custom-panel alignment, TFT controls, floor projection, racks,
            sensors, wiring, and electronic controls. We verify whether the unit is
            a Gaggenau 200 Series or 400 Series dishwasher before selecting parts.
          </p>
        </>
      )
    },
    {
      id: "ilve-dishwasher-repair",
      title: "ILVE Dishwasher Repair",
      heading: "ILVE Dishwasher Repair",
      /* img: "/dishwasher-repair/ilve-dishwasher-repair.webp", */
      alt: "ILVE dishwasher repair technician servicing a fully integrated Italian dishwasher",
      description: (
        <>
          <p>
            Our <strong>ILVE dishwasher repair</strong> service covers ILVE built-in
            dishwashers, fully integrated panel-ready installations, 24-inch
            configurations, ADA-compliant models where applicable, and supported
            legacy ILVE dishwashers. Because ILVE dishwasher platforms can vary by
            model and market, service should begin with the complete model number
            and a careful review of drainage, cleaning, drying, door fit, and
            electronic controls.
          </p>

          <h3>
            ILVE Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because of filter, sump, drain-pump,
              hose-routing, or check-valve concerns
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm obstruction, circulation decline,
              filtration buildup, or water-intake issues
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse aid, drying airflow, or
              cycle selection needs review
            </li>

            <li>
              ✅ Panel-ready door, hinge, latch, toe-kick, or ADA-height
              installation-clearance problems
            </li>

            <li>
              ✅ Leak-protection, inlet, float, sensor, or door-switch interruptions
            </li>

            <li>
              ✅ Integrated-control, wiring, display, or model-specific
              electronic-control faults
            </li>
          </ul>

          <h3>
            How We Fix These ILVE Dishwasher Issues
          </h3>

          <p>
            We inspect the filters, sump, drain pump, hoses, inlet system,
            circulation pump, spray arms, drying and heating components, rinse-aid
            dispenser, door hinges, latch, panel alignment, leak protection,
            sensors, wiring, and controls. We identify the exact ILVE dishwasher
            platform before ordering parts because current and legacy models may use
            different components.
          </p>
        </>
      )
    },
    {
      id: "miele-dishwasher-repair",
      title: "Miele Dishwasher Repair",
      heading: "Miele Dishwasher Repair",
      alt: "Miele dishwasher repair technician servicing a premium fully integrated dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Miele dishwasher repair</strong> for G 5000 and
            G 7000 dishwashers, fully integrated and panel-ready installations,
            ADA-height models, cutlery-tray models, QuickIntenseWash units, and
            premium G 7000 dishwashers with AutoDos, PowerDisk, and Miele@home
            connectivity. Miele dishwashers use model-specific wash, dosing,
            filtration, drainage, drying, and electronic systems, so diagnosis
            should begin with the complete model number and the exact symptom.
          </p>

          <h3>
            Miele Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ AutoDos or PowerDisk detergent-dispensing problems causing poor
              cleaning or dosing warnings
            </li>

            <li>
              ✅ Dishwasher not draining because of filter, drain-pump,
              non-return-valve, or hose restrictions
            </li>

            <li>
              ✅ Water-intake, circulation-pump, spray-arm, or pressure-related
              concerns affecting wash performance
            </li>

            <li>
              ✅ Door-latch, AutoOpen drying, leak-protection, or panel-alignment
              issues on integrated installations
            </li>

            <li>
              ✅ Cloudy glassware, residue, or incomplete drying related to
              rinse aid, water hardness, filtration, or cycle selection
            </li>

            <li>
              ✅ Miele@home, control-panel, sensor, wiring, or model-specific
              fault-code concerns
            </li>
          </ul>

          <h3>
            How We Fix These Miele Dishwasher Issues
          </h3>

          <p>
            We inspect the filter system, sump, non-return valve, drain pump,
            inlet path, circulation system, spray arms, detergent dispenser,
            AutoDos and PowerDisk components where equipped, water-hardness
            settings, rinse-aid delivery, door latch, leak protection, AutoOpen
            drying function, wiring, controls, and installation alignment. We
            match parts and service steps to the exact Miele G-series platform.
          </p>
        </>
      )
    },
    {
      id: "officine-gullo-dishwasher-repair",
      title: "Officine Gullo Dishwasher Repair",
      heading: "Officine Gullo Dishwasher Repair",
      /* img: "/dishwasher-repair/officine-gullo-dishwasher-repair.webp", */
      alt: "Officine Gullo dishwasher repair technician servicing an integrated professional dishwasher in a bespoke kitchen",
      description: (
        <>
          <p>
            We provide <strong>Officine Gullo dishwasher repair</strong> support for
            bespoke Officine Gullo kitchens with integrated residential or
            professional dishwashing equipment. Officine Gullo kitchens may
            incorporate dishwashers beneath custom washing areas, within handcrafted
            islands, or alongside restaurant-inspired appliances. Because the
            internal dishwasher platform may vary by project, the first step is to
            identify the actual equipment label, serial number, cabinet integration,
            and installation details.
          </p>

          <h3>
            Officine Gullo Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Integrated dishwasher not draining because the sump, pump, filter,
              hose routing, or plumbing connection needs inspection
            </li>

            <li>
              ✅ Professional-style dishwasher developing wash-pressure, temperature,
              filtration, or cycle-performance concerns
            </li>

            <li>
              ✅ Custom metal panel, toe-kick, hinge, latch, or cabinetry
              interference affecting door movement
            </li>

            <li>
              ✅ Leakage, moisture, or drainage issues that require protection of
              surrounding handcrafted cabinetry and finishes
            </li>

            <li>
              ✅ Control, sensor, wiring, or power-supply problems on the installed
              dishwasher platform
            </li>

            <li>
              ✅ Parts-identification challenges when the dishwasher is integrated
              into a tailor-made Officine Gullo project
            </li>
          </ul>

          <h3>
            How We Fix These Officine Gullo Dishwasher Issues
          </h3>

          <p>
            We inspect the visible installation, data label, cabinet integration,
            drainage route, plumbing connections, electrical supply, filter, sump,
            pump, circulation path, spray system, door hardware, controls, sensors,
            wiring, and surrounding finishes. We then match the repair approach to
            the actual dishwasher platform installed inside the Officine Gullo
            kitchen rather than assuming that every project uses the same internal
            machine.
          </p>
        </>
      )
    },
    {
      id: "thor-dishwasher-repair",
      title: "THOR Dishwasher Repair",
      heading: "THOR Dishwasher Repair",
      /* img: "/dishwasher-repair/thor-dishwasher-repair.webp", */
      alt: "THOR dishwasher repair technician servicing a professional-style stainless-steel dishwasher",
      description: (
        <>
          <p>
            We provide <strong>THOR dishwasher repair</strong> for
            professional-style built-in dishwashers, 24-inch stainless-steel units,
            under-counter installations, adjustable-rack models, and supported
            Gordon Ramsay Series dishwashers. THOR dishwasher complaints often
            involve cleaning pressure, drainage, drying, rack movement, door
            closure, or controls, so each system should be tested rather than
            treating the symptom in isolation.
          </p>

          <h3>
            THOR Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Spray-jet, wash-arm, circulation, or filtration concerns reducing
              cleaning performance
            </li>

            <li>
              ✅ Dishwasher not draining because of sump debris, filter buildup,
              drain-pump wear, or hose restrictions
            </li>

            <li>
              ✅ Advanced-drying, heater, rinse-aid, or airflow concerns leaving
              dishes damp
            </li>

            <li>
              ✅ Adjustable-rack, glide, latch, hinge, or built-in alignment problems
            </li>

            <li>
              ✅ Water-inlet, leak, float, or door-switch concerns interrupting the
              wash cycle
            </li>

            <li>
              ✅ Control-panel, sensor, wiring, or model-specific electronic-control
              faults
            </li>
          </ul>

          <h3>
            How We Fix These THOR Dishwasher Issues
          </h3>

          <p>
            We inspect filtration, sump, drain pump, hoses, disposer connection
            where applicable, water inlet, circulation pump, spray jets, wash arms,
            drying components, racks, glides, hinges, latch, leak protection,
            sensors, wiring, and electronic controls. We verify the exact THOR
            model, including whether it is a standard professional-style or Gordon
            Ramsay Series dishwasher.
          </p>
        </>
      )
    },
    {
      id: "forno-dishwasher-repair",
      title: "Forno Dishwasher Repair",
      heading: "Forno Dishwasher Repair",
      /* img: "/dishwasher-repair/forno-dishwasher-repair.webp", */
      alt: "Forno dishwasher repair technician servicing a stainless-steel built-in dishwasher",
      description: (
        <>
          <p>
            Our <strong>Forno dishwasher repair</strong> service covers Forno
            built-in dishwashers, compact 18-inch installations, full-size 24-inch
            configurations, stainless-steel models, and supported residential
            dishwasher platforms. Forno service should account for space-saving
            installations, drainage routing, filtration, water intake, drying
            performance, door alignment, and model-specific parts.
          </p>

          <h3>
            Forno Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Compact or full-size dishwasher not draining because the filter,
              sump, drain pump, hose, or disposer connection needs service
            </li>

            <li>
              ✅ Poor cleaning related to spray-arm blockage, circulation decline,
              water-temperature, or filtration problems
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse-aid delivery, drying
              airflow, or cycle selection needs review
            </li>

            <li>
              ✅ Rack, basket, hinge, latch, or built-in cabinet-clearance problems
            </li>

            <li>
              ✅ Water-inlet, float, leak-protection, or door-switch interruptions
            </li>

            <li>
              ✅ Control-panel, sensor, wiring, or cycle-selection faults
            </li>
          </ul>

          <h3>
            How We Fix These Forno Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, disposer connection
            where present, inlet components, circulation system, spray arms, heating
            and drying components, rinse-aid delivery, racks, hinges, latch, cabinet
            clearances, leak protection, sensors, wiring, and controls. We confirm
            whether the Forno dishwasher is an 18-inch compact or full-size built-in
            model before selecting parts.
          </p>
        </>
      )
    },
    {
      id: "zline-dishwasher-repair",
      title: "ZLINE Dishwasher Repair",
      heading: "ZLINE Dishwasher Repair",
      /* img: "/dishwasher-repair/zline-dishwasher-repair.webp", */
      alt: "ZLINE dishwasher repair technician servicing a panel-ready Tallac dishwasher",
      description: (
        <>
          <p>
            We provide <strong>ZLINE dishwasher repair</strong> for built-in
            dishwashers, panel-ready installations, multiple size configurations,
            tall-tub models, and Tallac Series dishwashers with third-rack loading
            systems. ZLINE dishwashers are often installed to coordinate with custom
            cabinetry and designer finishes, so repair should address both internal
            performance and the fit of the visible door assembly.
          </p>

          <h3>
            ZLINE Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because of filter, sump, drain-pump, hose,
              or disposer-connection restrictions
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm obstruction, circulation decline,
              filtration buildup, or water-intake issues
            </li>

            <li>
              ✅ Tallac Series third-rack, loading, rack-glide, adjuster, or basket
              concerns
            </li>

            <li>
              ✅ Panel-ready door, hinge, latch, toe-kick, or installation-alignment
              problems
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse aid, airflow, or cycle
              configuration needs review
            </li>

            <li>
              ✅ Control-panel, sensor, wiring, leak-protection, or
              electronic-control faults
            </li>
          </ul>

          <h3>
            How We Fix These ZLINE Dishwasher Issues
          </h3>

          <p>
            We inspect the filters, sump, drain pump, hoses, disposer connection
            where present, inlet path, circulation pump, spray arms, heating and
            drying systems, racks, third-rack components, hinges, latch, custom
            panel, toe-kick clearances, leak protection, sensors, wiring, and
            controls. We match the repair to the exact ZLINE dishwasher size,
            series, and door configuration.
          </p>
        </>
      )
    },
    {
      id: "fisher-paykel-dishwasher-repair",
      title: "Fisher & Paykel Dishwasher Repair",
      heading: "Fisher & Paykel Dishwasher Repair",
      /* img: "/dishwasher-repair/fisher-paykel-dishwasher-repair.webp", */
      alt: "Fisher and Paykel dishwasher repair technician servicing a double DishDrawer dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Fisher &amp; Paykel dishwasher repair</strong>
            for Single DishDrawer, Double DishDrawer, Tall DishDrawer, Series 7,
            Series 9, Series 11, integrated panel-ready drawers, contemporary
            drawer dishwashers, professional-style models, and supported
            drop-door dishwashers. Fisher &amp; Paykel DishDrawer service is
            distinct from conventional dishwasher repair because each drawer
            has its own wash, drain, seal, lid, and control components.
          </p>

          <h3>
            Fisher &amp; Paykel Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ One DishDrawer washing or draining correctly while the other
              drawer develops a separate fault
            </li>

            <li>
              ✅ Drawer not closing, sealing, or starting because of
              lid-actuator, latch, seal, or alignment problems
            </li>

            <li>
              ✅ Standing water, slow draining, or unusual noise caused by
              rotor, pump, filter, or hose concerns
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm obstruction, filter buildup,
              water-intake, or detergent-related issues
            </li>

            <li>
              ✅ Knock-to-pause, drawer-sensor, control, wiring, or
              SmartHQ-related concerns on supported models
            </li>

            <li>
              ✅ Panel-ready drawer alignment or custom-cabinet interference
              affecting normal movement
            </li>
          </ul>

          <h3>
            How We Fix These Fisher &amp; Paykel Dishwasher Issues
          </h3>

          <p>
            We test each drawer independently, then inspect the filters, spray
            arms, rotor and pump assemblies, drain hoses, inlet path, lid
            actuators, seals, latches, drawer sensors, wiring, controls, panel
            alignment, and installation clearances. We confirm whether the unit
            is a single, double, or tall DishDrawer before identifying parts.
          </p>
        </>
      )
    },
    {
      id: "thermador-dishwasher-repair",
      title: "Thermador Dishwasher Repair",
      heading: "Thermador Dishwasher Repair",
      /* img: "/dishwasher-repair/thermador-dishwasher-repair.webp", */
      alt: "Thermador dishwasher repair technician servicing a Star Sapphire luxury dishwasher",
      description: (
        <>
          <p>
            Our <strong>Thermador dishwasher repair</strong> service covers
            Emerald, Sapphire, and Star Sapphire dishwashers, panel-ready
            installations, Home Connect models, AquaStop-protected units,
            Chef&apos;s Tool Drawer configurations, Blue PowerBeam models, and
            premium Star Sapphire dishwashers with Zone Control Spray Arm,
            PowerWash, and Crystal Protect water-softener features. Thermador
            dishwasher diagnosis requires attention to cleaning zones, water
            quality, drying performance, leak protection, and integrated
            installation details.
          </p>

          <h3>
            Thermador Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Zone Control Spray Arm, PowerWash, circulation, or spray-arm
              problems causing uneven cleaning
            </li>

            <li>
              ✅ Cloudy glassware or spotting related to water-softener
              settings, salt, rinse aid, or water quality
            </li>

            <li>
              ✅ Dishwasher not draining because of filter, sump, drain-pump,
              or hose restrictions
            </li>

            <li>
              ✅ AquaStop, leak-detection, inlet, float, or door-latch issues
              interrupting the cycle
            </li>

            <li>
              ✅ Chef&apos;s Tool Drawer, rack, hinge, panel-ready door, or Blue
              PowerBeam-related concerns
            </li>

            <li>
              ✅ Home Connect, sensor, wiring, control-panel, or fault-code
              issues
            </li>
          </ul>

          <h3>
            How We Fix These Thermador Dishwasher Issues
          </h3>

          <p>
            We inspect the filtration and drainage system, inlet path,
            circulation pump, spray arms, Zone Control and PowerWash-related
            components where equipped, water-softener system, rinse-aid
            delivery, drying system, AquaStop protection, racks, hinges, latch,
            indicator lighting, wiring, sensors, controls, and panel-ready
            installation alignment.
          </p>
        </>
      )
    },
    {
      id: "viking-dishwasher-repair",
      title: "Viking Dishwasher Repair",
      heading: "Viking Dishwasher Repair",
      /* img: "/dishwasher-repair/viking-dishwasher-repair.webp", */
      alt: "Viking dishwasher repair technician servicing a premium built-in dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Viking dishwasher repair</strong> for 24-inch
            built-in dishwashers, Premiere dishwashers, professional-panel
            models, optional custom-panel installations,
            water-softener-equipped models, and supported legacy Viking units.
            Current Viking dishwasher platforms may include Multi-Level Power
            Wash, three wash arms, triple filtration, Turbo Fan Dry, Smart
            FullSize racks, adjustable upper racks, and LCD controls.
          </p>

          <h3>
            Viking Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Multi-Level Power Wash, variable-pressure, circulation, or
              spray-arm problems causing poor cleaning
            </li>

            <li>
              ✅ Triple-filtration buildup, sump debris, drain-pump wear, or
              hose restrictions causing drainage problems
            </li>

            <li>
              ✅ Turbo Fan Dry, rinse-aid, heating, or airflow concerns leaving
              dishes damp
            </li>

            <li>
              ✅ Water-softener setting, salt, hard-water, or spotting concerns
              on equipped models
            </li>

            <li>
              ✅ Smart FullSize rack, adjustable rack, latch, hinge, or
              custom-panel alignment problems
            </li>

            <li>
              ✅ LCD display, sensor, wiring, or electronic-control issues
            </li>
          </ul>

          <h3>
            How We Fix These Viking Dishwasher Issues
          </h3>

          <p>
            We inspect the triple-filtration system, sump, drain pump, hoses,
            inlet path, circulation system, three wash arms, variable-pressure
            wash components, Turbo Fan Dry system, water softener where
            equipped, racks, latch, hinges, panel fit, LCD controls, sensors,
            and wiring.
          </p>
        </>
      )
    },
    {
      id: "monogram-dishwasher-repair",
      title: "Monogram Dishwasher Repair",
      heading: "Monogram Dishwasher Repair",
      /* img: "/dishwasher-repair/monogram-dishwasher-repair.webp", */
      alt: "Monogram dishwasher repair technician servicing a fully integrated luxury dishwasher",
      description: (
        <>
          <p>
            Our <strong>Monogram dishwasher repair</strong> service covers fully
            integrated Monogram dishwashers, professional stainless-steel
            models, custom panel-ready installations, third-rack designs, Bottle
            Wash Jet models, wash-zone configurations, HydroSave-equipped
            platforms, Smart Assist models, and connected luxury kitchens.
            Monogram dishwasher service should preserve the flush appearance of
            the installation while identifying the actual wash, drain, drying,
            rack, or control problem.
          </p>

          <h3>
            Monogram Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Bottle Wash Jets, wash zones, spray arms, filtration, or
              circulation problems reducing cleaning performance
            </li>

            <li>
              ✅ Dishwasher not draining because of sump debris, drain-pump,
              disposer-connection, or hose restrictions
            </li>

            <li>
              ✅ Dishes remaining damp because of drying-system, rinse-aid,
              heating, airflow, or cycle-setting concerns
            </li>

            <li>
              ✅ Third-rack, rack-glide, latch, hinge, or custom-panel alignment
              issues
            </li>

            <li>
              ✅ Water-intake, leak-detection, float, sensor, or door-switch
              interruptions
            </li>

            <li>
              ✅ Smart Assist, connected-control, display, wiring, or
              electronic-control faults
            </li>
          </ul>

          <h3>
            How We Fix These Monogram Dishwasher Issues
          </h3>

          <p>
            We inspect the filters, sump, drain pump, disposer connection,
            inlet components, circulation pump, wash manifold, spray arms,
            Bottle Wash Jets where equipped, drying system, rinse-aid delivery,
            racks, glides, latch, hinges, panel alignment, leak protection,
            sensors, wiring, and controls. We protect the custom installation
            while servicing the internal components.
          </p>
        </>
      )
    },
    {
      id: "signature-kitchen-suite-dishwasher-repair",
      title: "Signature Kitchen Suite Dishwasher Repair",
      heading: "Signature Kitchen Suite Dishwasher Repair",
      /* img: "/dishwasher-repair/signature-kitchen-suite-dishwasher-repair.webp", */
      alt: "Signature Kitchen Suite dishwasher repair technician servicing a PowerSteam luxury dishwasher",
      description: (
        <>
          <p>
            Our <strong>Signature Kitchen Suite dishwasher repair</strong> service
            covers PowerSteam stainless-steel dishwashers, panel-ready
            installations, FlushFit designs, connected appliances, and models using
            QuadWash Pro and Dynamic Heat Dry technologies. Signature Kitchen Suite
            dishwasher repair should distinguish wash-pressure, steam, drainage,
            drying, sliding-panel, and smart-control concerns while preserving the
            flush fit of the kitchen installation.
          </p>

          <h3>
            Signature Kitchen Suite Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ QuadWash Pro, spray-arm, circulation, or filtration concerns
              reducing cleaning performance
            </li>

            <li>
              ✅ PowerSteam-related performance problems affecting cookware, soil
              removal, or cycle results
            </li>

            <li>
              ✅ Dynamic Heat Dry, airflow, heating, or rinse-aid issues leaving
              dishes damp
            </li>

            <li>
              ✅ Panel-ready sliding-door, FlushFit, hinge, latch, or custom-cabinet
              alignment problems
            </li>

            <li>
              ✅ Dishwasher not draining because of filter, sump, drain-pump, or hose
              restrictions
            </li>

            <li>
              ✅ Connected-control, display, sensor, wiring, or electronic-control
              concerns
            </li>
          </ul>

          <h3>
            How We Fix These Signature Kitchen Suite Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, inlet path, circulation
            pump, QuadWash Pro components, spray arms, PowerSteam-related systems,
            Dynamic Heat Dry components, racks, door hardware, sliding-panel fit,
            FlushFit clearances, sensors, wiring, and connected controls. We verify
            the exact SKS model and installation style before recommending parts.
          </p>
        </>
      )
    },
    {
      id: "hestan-dishwasher-repair",
      title: "Hestan Dishwasher Repair",
      heading: "Hestan Dishwasher Repair",
      /* img: "/dishwasher-repair/hestan-dishwasher-repair.webp", */
      alt: "Hestan dishwasher repair technician servicing a KDW24 luxury dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Hestan dishwasher repair</strong> for KDW24 indoor
            dishwashers, stainless-door models, overlay-door installations,
            color-door configurations, tall-tub stainless-steel interiors,
            top-control designs, and supported Hestan dishwasher platforms. Hestan
            dishwasher service should begin with the complete model and serial
            information because parts identification can vary by service index and
            production generation.
          </p>

          <h3>
            Hestan Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because filter, sump, drain-pump, hose, or
              plumbing connections need service
            </li>

            <li>
              ✅ Wash-performance decline related to spray arms, circulation,
              filtration, water intake, or detergent delivery
            </li>

            <li>
              ✅ Drying, rinse-aid, heater, or cycle-selection concerns leaving
              dishes damp
            </li>

            <li>
              ✅ Overlay panel, color door, hinge, latch, counterbalance, or
              cabinet-alignment problems
            </li>

            <li>
              ✅ Top-control, sensor, wiring, or electronic-control issues
              interrupting the selected program
            </li>

            <li>
              ✅ Parts-identification errors when the KDW24 service index or complete
              serial information is not confirmed
            </li>
          </ul>

          <h3>
            How We Fix These Hestan Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, inlet path, circulation
            system, spray arms, dispensers, heating and drying components, racks,
            hinges, latch, overlay or color-door installation, sensors, wiring, and
            top controls. We record the Hestan KDW24 model, serial number, and
            service index before identifying replacement parts.
          </p>
        </>
      )
    },
    {
      id: "dacor-dishwasher-repair",
      title: "Dacor Dishwasher Repair",
      heading: "Dacor Dishwasher Repair",
      /* img: "/dishwasher-repair/dacor-dishwasher-repair.webp", */
      alt: "Dacor dishwasher repair technician servicing a panel-ready StormWash dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Dacor dishwasher repair</strong> for 24-inch
            panel-ready built-in dishwashers, integrated luxury kitchens,
            StormWash+ models, AutoRelease drying systems, built-in
            water-softener configurations, SmartThings-connected units, and
            dishwashers with Kitchen Fit sliding-door hinge systems. Dacor
            repair should account for both the internal wash system and the
            precise fit of the appliance within custom cabinetry.
          </p>

          <h3>
            Dacor Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ StormWash+ or dual-washing-arm concerns causing uneven cleaning
              or residue on cookware
            </li>

            <li>
              ✅ AutoRelease door not opening correctly or dishes remaining
              wetter than expected
            </li>

            <li>
              ✅ Cloudy glassware, spotting, or mineral buildup when the
              built-in water softener needs attention
            </li>

            <li>
              ✅ Dishwasher not draining because filters, sump, pump, or hoses
              are restricted
            </li>

            <li>
              ✅ Kitchen Fit sliding-door hinge, panel-ready alignment, rack, or
              latch concerns
            </li>

            <li>
              ✅ SmartThings, visual floor light, sensor, wiring, or
              electronic-control issues
            </li>
          </ul>

          <h3>
            How We Fix These Dacor Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, inlet system,
            circulation path, StormWash+ components, dual washing arms,
            AutoRelease door function, water softener, racks, hinges, latch,
            panel alignment, SmartThings-related controls, floor indicator,
            sensors, wiring, and installation clearances.
          </p>
        </>
      )
    },
    {
      id: "cove-dishwasher-repair",
      title: "Cove Dishwasher Repair",
      heading: "Cove Dishwasher Repair",
      /* img: "/dishwasher-repair/cove-dishwasher-repair.webp", */
      alt: "Cove dishwasher repair technician servicing a luxury panel-ready built-in dishwasher",
      description: (
        <>
          <p>
            Our <strong>Cove dishwasher repair</strong> service covers luxury
            24-inch built-in dishwashers, panel-ready Cove installations,
            stainless-steel interiors, water-softener-equipped models,
            adjustable three-rack systems, and integrated kitchens designed
            around Sub-Zero and Wolf appliance suites. Cove dishwashers use
            three wash arms, a four-stage filtration system, and fan-assisted
            drying, so cleaning and drying complaints require a careful review
            of filtration, water quality, spray coverage, drainage, and
            installation details.
          </p>

          <h3>
            Cove Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Poor cleaning caused by debris in the four-stage filtration
              system or reduced spray-arm performance
            </li>

            <li>
              ✅ Spotting, cloudy glassware, or mineral residue when
              water-softener settings, salt, or water hardness need review
            </li>

            <li>
              ✅ Dishes remaining damp because of fan-assisted drying, rinse
              aid, heating, airflow, or loading concerns
            </li>

            <li>
              ✅ Drainage problems caused by sump debris, drain-pump wear,
              check-valve issues, or hose restrictions
            </li>

            <li>
              ✅ Panel-ready door alignment, rack-glide, latch, or
              installation-fit problems in custom cabinetry
            </li>

            <li>
              ✅ Cycle interruption, leak-protection, sensor, wiring, or
              electronic-control concerns
            </li>
          </ul>

          <h3>
            How We Fix These Cove Dishwasher Issues
          </h3>

          <p>
            We inspect the four-stage filter, sump, three wash arms, spray jets,
            circulation system, drain pump, hoses, water-softener system where
            equipped, rinse-aid delivery, fan-assisted drying components, door
            latch, panel alignment, rack system, leak protection, sensors,
            wiring, and controls. We also confirm that the custom-panel
            installation allows the door and racks to move correctly.
          </p>
        </>
      )
    },
    {
      id: "big-chill-dishwasher-repair",
      title: "Big Chill Dishwasher Repair",
      heading: "Big Chill Dishwasher Repair",
      /* img: "/dishwasher-repair/big-chill-dishwasher-repair.webp", */
      alt: "Big Chill dishwasher repair technician servicing a colorful retro dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Big Chill dishwasher repair</strong> for 24-inch
            Retro, Classic, and Pro dishwashers, color-matched installations,
            custom-color configurations, stainless-steel interiors, and retro
            kitchens designed around distinctive chrome or professional-style
            details. Big Chill service should restore wash and drying performance
            without overlooking the visible door finish, hardware, and alignment
            that make the appliance part of the kitchen design.
          </p>

          <h3>
            Big Chill Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because the filter, sump, drain pump,
              disposer connection, or hose needs attention
            </li>

            <li>
              ✅ Spray-arm, turbidity-sensor, circulation, or filtration concerns
              causing residue or incomplete cleaning
            </li>

            <li>
              ✅ Fan-assisted drying, heater, airflow, rinse-aid, or extra-dry
              concerns leaving dishes damp
            </li>

            <li>
              ✅ Three-rack, basket, glide, latch, hinge, or door-alignment problems
            </li>

            <li>
              ✅ Custom-color door, chrome hardware, toe-kick, or surrounding-cabinet
              fit concerns
            </li>

            <li>
              ✅ Control-panel, sensor, wiring, or cycle-selection issues
            </li>
          </ul>

          <h3>
            How We Fix These Big Chill Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, disposer connection
            where applicable, inlet path, circulation system, spray arms, turbidity
            sensor where equipped, drying components, racks, glides, hinges, latch,
            visible door hardware, panel alignment, sensors, wiring, and controls.
            We match service steps to the specific Big Chill Retro, Classic, or Pro
            dishwasher configuration.
          </p>
        </>
      )
    },
    {
      id: "elmira-stove-works-dishwasher-repair",
      title: "Elmira Stove Works Dishwasher Repair",
      heading: "Elmira Stove Works Dishwasher Repair",
      /* img: "/dishwasher-repair/elmira-stove-works-dishwasher-repair.webp", */
      alt: "Elmira Stove Works dishwasher repair technician servicing a Northstar retro dishwasher",
      description: (
        <>
          <p>
            Our <strong>Elmira Stove Works dishwasher repair</strong> service covers
            Northstar 24-inch complete dishwashers and compatible fully integrated
            panel-ready dishwashers fitted with Elmira Northstar panels. Elmira
            dishwasher service requires a careful distinction between the visible
            retro-style door treatment and the internal dishwasher platform,
            especially when the kitchen uses a decorative panel installed over a
            compatible third-party machine.
          </p>

          <h3>
            Elmira Stove Works Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Northstar dishwasher not draining because of filter, sump,
              drain-pump, hose, or plumbing restrictions
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm blockage, circulation decline,
              filtration buildup, or inlet-flow concerns
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse aid, airflow, or cycle
              configuration needs review
            </li>

            <li>
              ✅ Retro panel, handle, hinge, latch, toe-kick, or fully integrated
              door-alignment problems
            </li>

            <li>
              ✅ Rack, glide, dispenser, sensor, wiring, or control-panel concerns
            </li>

            <li>
              ✅ Parts-identification challenges when an Elmira panel is installed
              over a compatible panel-ready dishwasher from another manufacturer
            </li>
          </ul>

          <h3>
            How We Fix These Elmira Stove Works Dishwasher Issues
          </h3>

          <p>
            We inspect the data label, visible Northstar panel, handle, hinges,
            latch, cabinet clearances, filter, sump, drain pump, hoses, inlet path,
            circulation system, spray arms, drying components, racks, dispensers,
            sensors, wiring, and controls. We identify whether the installation is
            an Elmira Northstar complete dishwasher or an Elmira panel applied to
            another panel-ready platform before ordering parts.
          </p>
        </>
      )
    },
    {
      id: "smeg-dishwasher-repair",
      title: "Smeg Dishwasher Repair",
      heading: "Smeg Dishwasher Repair",
      /* img: "/dishwasher-repair/smeg-dishwasher-repair.webp", */
      alt: "Smeg dishwasher repair technician servicing a fully integrated Italian dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Smeg dishwasher repair</strong> for fully
            integrated, undercounter, panel-ready, pre-finished, retro-style,
            ADA-height, 18-inch, and 24-inch dishwashers. Supported Smeg
            platforms may include Orbital Wash systems, Shuttle Wash systems on
            select narrow units, Aquatest turbidity sensors, AquaStop flood
            protection, Dry Assist automatic door opening, water softeners,
            Flexi Fit hinges, and ActiveLight floor indicators.
          </p>

          <h3>
            Smeg Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Orbital Wash or Shuttle Wash spray-system concerns causing
              incomplete cleaning coverage
            </li>

            <li>
              ✅ Aquatest sensor, water-intake, filtration, or circulation
              issues affecting automatic wash performance
            </li>

            <li>
              ✅ AquaStop or leak-detection interruptions preventing the
              dishwasher from running normally
            </li>

            <li>
              ✅ Dry Assist automatic-door-opening, rinse-aid, heating, or
              drying concerns
            </li>

            <li>
              ✅ Flexi Fit hinge, custom-panel, rack, latch, or ActiveLight
              indicator issues
            </li>

            <li>
              ✅ Drain-pump, sump, hose, water-softener, wiring, or
              electronic-control faults
            </li>
          </ul>

          <h3>
            How We Fix These Smeg Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, inlet path,
            circulation pump, Orbital or Shuttle wash components, spray arms,
            Aquatest sensor, AquaStop protection, Dry Assist door-opening
            function, water softener, hinges, racks, latch, panel integration,
            ActiveLight indicator, wiring, and controls.
          </p>
        </>
      )
    },
    {
      id: "heartland-dishwasher-repair",
      title: "Heartland Dishwasher Repair",
      heading: "Heartland Dishwasher Repair",
      /* img: "/dishwasher-repair/heartland-dishwasher-repair.webp", */
      alt: "Heartland dishwasher repair technician servicing a discontinued retro-style dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Heartland dishwasher repair</strong> for legacy
            Heartland dishwashers installed in nostalgic and heritage-inspired
            kitchens. Heartland discontinued appliance manufacturing in 2019, but
            existing dishwashers may remain valuable because their color, trim, and
            retro appearance coordinate with the full kitchen suite. Service should
            begin with the model number, serial information, age, visible finish,
            and realistic review of compatible parts availability.
          </p>

          <h3>
            Heartland Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Legacy dishwasher not draining because the filter, sump, drain pump,
              hose, or disposer connection needs inspection
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm blockage, circulation decline,
              water-intake issues, or filtration buildup
            </li>

            <li>
              ✅ Dishes remaining damp because heating, rinse aid, airflow, or cycle
              settings need review
            </li>

            <li>
              ✅ Retro-style door, hinge, latch, gasket, handle, or alignment
              concerns affecting normal closure
            </li>

            <li>
              ✅ Control-panel, timer, wiring, sensor, or electrical faults on older
              platforms
            </li>

            <li>
              ✅ Parts-sourcing and compatibility challenges due to discontinued
              Heartland appliance manufacturing
            </li>
          </ul>

          <h3>
            How We Fix These Heartland Dishwasher Issues
          </h3>

          <p>
            We inspect the filter, sump, drain pump, hoses, disposer connection
            where present, inlet path, circulation system, spray arms, heating and
            drying components, racks, hinges, latch, gasket, visible trim, controls,
            sensors, and wiring. We verify the complete Heartland model and evaluate
            compatible parts availability before recommending a repair path for a
            legacy dishwasher.
          </p>
        </>
      )
    },
    {
      id: "asko-dishwasher-repair",
      title: "ASKO Dishwasher Repair",
      heading: "ASKO Dishwasher Repair",
      /* img: "/dishwasher-repair/asko-dishwasher-repair.webp", */
      alt: "ASKO dishwasher repair technician servicing a Scandinavian panel-ready dishwasher",
      description: (
        <>
          <p>
            We provide <strong>ASKO dishwasher repair</strong> for
            stainless-steel and panel-ready built-in dishwashers, domestic and
            professional-style models, ADA-height installations, units with
            8 Steel construction, Super Cleaning System technology, Aqua Safe
            protection, and Turbo Combi Drying with fan-assisted moisture
            evacuation and automatic door opening. ASKO dishwasher service
            should account for filtration, drainage, drying airflow, door
            movement, and model-specific rack and control systems.
          </p>

          <h3>
            ASKO Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because the filter, sump, pump, or
              drain hose needs service
            </li>

            <li>
              ✅ Turbo Combi Drying or automatic-door-opening concerns leaving
              dishes wetter than expected
            </li>

            <li>
              ✅ Cleaning decline caused by blocked spray arms, circulation
              problems, filter buildup, or water-quality issues
            </li>

            <li>
              ✅ Aqua Safe, leak-detection, water-intake, or overfill-related
              interruptions
            </li>

            <li>
              ✅ Door-latch, panel-ready alignment, rack, hinge, or
              installation-clearance problems
            </li>

            <li>
              ✅ Display, sensor, wiring, or control faults interrupting the
              selected program
            </li>
          </ul>

          <h3>
            How We Fix These ASKO Dishwasher Issues
          </h3>

          <p>
            We inspect the filter system, sump, drain pump, inlet components,
            circulation pump, spray arms, Super Cleaning System-related wash
            path, Aqua Safe components, Turbo Combi Drying airflow and
            door-opening function, racks, hinges, latch, wiring, sensors, and
            electronic controls. We verify the exact ASKO model before
            recommending repair.
          </p>
        </>
      )
    },
    {
      id: "bosch-dishwasher-repair",
      title: "Bosch Dishwasher Repair",
      heading: "Bosch Dishwasher Repair",
      /* img: "/dishwasher-repair/bosch-dishwasher-repair.webp", */
      alt: "Bosch dishwasher repair technician servicing a quiet built-in dishwasher",
      description: (
        <>
          <p>
            Our <strong>Bosch dishwasher repair</strong> service covers 18-inch
            and 24-inch dishwashers, 100 Series, 300 Series, 500 Series,
            800 Series, Benchmark models, panel-ready units, Home Connect
            dishwashers, PrecisionWash models, CrystalDry models, PureDry
            systems, AutoAir models, RackMatic-equipped units, and
            AquaStop-protected installations. Bosch symptoms often overlap, so
            drainage, water intake, filtration, circulation, heating, drying,
            and leak protection should be tested together.
          </p>

          <h3>
            Bosch Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishwasher not draining because of filter, sump, drain-pump,
              or drain-hose restrictions
            </li>

            <li>
              ✅ Dishes not cleaning properly because spray arms, circulation,
              inlet flow, or PrecisionWash-related systems need inspection
            </li>

            <li>
              ✅ CrystalDry, PureDry, or AutoAir drying concerns leaving
              plastics or dishes wetter than expected
            </li>

            <li>
              ✅ AquaStop, leak-detection, float, water-inlet, or door-switch
              issues preventing normal operation
            </li>

            <li>
              ✅ RackMatic, third-rack, latch, hinge, or panel-ready alignment
              problems
            </li>

            <li>
              ✅ Home Connect, control-panel, sensor, wiring, or fault-code
              concerns
            </li>
          </ul>

          <h3>
            How We Fix These Bosch Dishwasher Issues
          </h3>

          <p>
            We inspect the filter and sump, drain pump, hoses, inlet valve,
            float and AquaStop components, circulation pump, spray arms,
            heating and drying systems, AutoAir door-opening function where
            equipped, racks, latch, hinges, sensors, wiring, electronic
            controls, and surrounding installation. We use the Bosch model
            number to identify the correct platform and parts.
          </p>
        </>
      )
    },
    {
      id: "jennair-dishwasher-repair",
      title: "JennAir Dishwasher Repair",
      heading: "JennAir Dishwasher Repair",
      /* img: "/dishwasher-repair/jennair-dishwasher-repair.webp", */
      alt: "JennAir dishwasher repair technician servicing a panel-ready luxury dishwasher",
      description: (
        <>
          <p>
            We provide <strong>JennAir dishwasher repair</strong> for RISE,
            NOIR, pocket-handle, panel-ready, fully integrated, and flush-install
            dishwasher models. Depending on the model, JennAir dishwashers may
            include Precise Fit third racks, Waterlock leak detection, Door Open
            Dry, Precision Dry+, fan drying, steam options, and quiet integrated
            designs. Accurate service begins with identifying the exact
            dishwasher platform and separating cleaning, drying, drainage,
            leak-protection, and door-fit concerns.
          </p>

          <h3>
            JennAir Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Dishes remaining wet because Door Open Dry, Precision Dry+, fan
              drying, rinse aid, or heating needs inspection
            </li>

            <li>
              ✅ Waterlock leak-detection, inlet, float, drain, or hose problems
              interrupting the wash cycle
            </li>

            <li>
              ✅ Poor cleaning caused by spray-arm obstruction, filtration
              buildup, circulation, or water-temperature issues
            </li>

            <li>
              ✅ Precise Fit third-rack, middle-rack glide, latch, hinge, or
              panel-alignment concerns
            </li>

            <li>
              ✅ Door not closing correctly on flush-install or custom-panel
              installations
            </li>

            <li>
              ✅ Display, sensor-cycle, steam-option, wiring, or control-board
              problems
            </li>
          </ul>

          <h3>
            How We Fix These JennAir Dishwasher Issues
          </h3>

          <p>
            We inspect the sump, filter, drain system, inlet path, circulation
            system, spray arms, drying components, automatic door-opening
            function where equipped, Waterlock protection, racks and glides,
            hinges, latch, custom panel, sensors, wiring, and controls. We match
            the repair to the specific JennAir model and installation style.
          </p>
        </>
      )
    },
    {
      id: "kalamazoo-outdoor-dishwasher-repair",
      title: "Kalamazoo Outdoor Dishwasher Repair",
      heading: "Kalamazoo Outdoor Dishwasher Repair",
      /* img: "/dishwasher-repair/kalamazoo-outdoor-dishwasher-repair.webp", */
      alt: "Kalamazoo outdoor dishwasher repair technician servicing a legacy outdoor kitchen dishwasher",
      description: (
        <>
          <p>
            We provide <strong>Kalamazoo outdoor dishwasher repair</strong> support
            for legacy Kalamazoo outdoor dishwashers installed in premium outdoor
            kitchens. Kalamazoo states that it stopped selling outdoor dishwashers
            in 2016, but existing units may still be integrated into weather-tight
            cabinetry, deep-sink work areas, and self-contained outdoor entertaining
            spaces. Service should account for drainage, water exposure,
            winterization history, cabinet integration, and parts availability.
          </p>

          <h3>
            Kalamazoo Outdoor Dishwasher Issues Our Techs See Most Frequently
          </h3>

          <ul>
            <li>
              ✅ Outdoor dishwasher not draining because of filter, sump, pump, hose,
              or winterization-related concerns
            </li>

            <li>
              ✅ Water-supply, startup, or seasonal-use problems after winterization
              or extended periods without operation
            </li>

            <li>
              ✅ Cleaning decline caused by spray-arm obstruction, circulation wear,
              filtration buildup, or outdoor debris exposure
            </li>

            <li>
              ✅ Leakage, corrosion, moisture, or cabinet-protection concerns in an
              outdoor installation
            </li>

            <li>
              ✅ Door, latch, hinge, toe-kick, or surrounding weather-tight cabinetry
              alignment problems
            </li>

            <li>
              ✅ Legacy parts-sourcing challenges because Kalamazoo outdoor
              dishwashers are no longer sold
            </li>
          </ul>

          <h3>
            How We Fix These Kalamazoo Outdoor Dishwasher Issues
          </h3>

          <p>
            We inspect the data label, filter, sump, drain pump, hoses, water
            supply, winterization and startup functions where applicable,
            circulation system, spray arms, door hardware, cabinet integration,
            corrosion exposure, electrical connections, controls, and surrounding
            outdoor-kitchen conditions. We confirm parts availability and explain
            the practical repair path for the specific legacy Kalamazoo outdoor
            dishwasher.
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile && activeTab) {
      const index = items.findIndex((item) => item.id === activeTab);

      if (itemRefs.current[index]) {
        const topOffset = 150;

        const elementTop =
          itemRefs.current[index].getBoundingClientRect().top +
          window.pageYOffset;

        window.scrollTo({
          top: elementTop - topOffset,
          behavior: "smooth"
        });
      }
    }
  }, [activeTab, isMobile]);

  return (
    <div
      className="tabs-container"
      ref={containerRef}
    >
      {!isMobile ? (
        <div className="tabs-layout">
          <div className="tabs-sidebar">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`tabs-title ${
                  activeTab === item.id ? "active" : ""
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="tabs-content">
            {items.map((item) => (
              <div
                key={item.id}
                className={`tab-panel ${
                  activeTab === item.id ? "active-tab" : ""
                }`}
              >
                <h2>
                  {item.heading}
                </h2>

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

                  <div>
                    {item.description}
                  </div>
                </div>

                <a href="/book/">
                  <button className="tabs-button">
                    Book
                  </button>
                </a>

                <a href="tel:4244997788">
                  <button className="tabs-button">
                    Call: (424) 499-7788
                  </button>
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
                onClick={() =>
                  setActiveTab((prev) =>
                    prev === item.id ? null : item.id
                  )
                }
                className="accordion-header"
              >
                {item.title}

                <span className="accordion-icon">
                  {activeTab === item.id ? "−" : "+"}
                </span>
              </div>

              {activeTab === item.id && (
                <div className="accordion-content">
                  <h2>
                    {item.heading}
                  </h2>

                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.alt || item.title}
                      className="image-float"
                      loading="lazy"
                    />
                  )}

                  <div>
                    {item.description}
                  </div>

                  <a href="/book/">
                    <button className="tabs-button">
                      Book
                    </button>
                  </a>

                  <a href="tel:4244997788">
                    <button className="tabs-button">
                      Call: (424) 499-7788
                    </button>
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
