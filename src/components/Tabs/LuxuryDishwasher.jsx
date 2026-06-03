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
