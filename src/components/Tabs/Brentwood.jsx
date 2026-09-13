import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "range",
      title: "Range Repair",
      heading: "Luxury Range Repair in Brentwood",
      img: "/cities/range-repair.webp",
      alt: "Luxury range repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            Luxury Appliance Repair by Zaricci provides professional{" "}
            <strong>range repair in Brentwood, Los Angeles</strong> for gas,
            dual-fuel, electric, induction, European, retro, and professional-style
            ranges. We service premium cooking appliances installed in custom
            kitchens, large residential ranges, and built-in luxury appliance
            suites.
          </p>
  
          <p>
            Common range problems include burners that will not ignite, continuous
            clicking, weak or uneven flames, ovens that do not heat properly,
            temperature fluctuations, failed controls, error codes, and electrical
            or ignition problems. Learn more about our{" "}
            <a href="/range-repair/">luxury range repair services</a>.
          </p>
  
          <h3>Luxury Range Brands We Repair in Brentwood</h3>
          <p>
            We service{" "}
            <a href="/wolf-appliance-repair/">Wolf ranges</a>,{" "}
            <a href="/thermador-appliance-repair/">Thermador</a>,{" "}
            <a href="/viking-appliance-repair/">Viking</a>,{" "}
            <a href="/la-cornue-appliance-repair/">La Cornue</a>,{" "}
            <a href="/gaggenau-repair/">Gaggenau</a>, Lacanche, Miele,
            Bertazzoni, AGA, BlueStar, Hestan, Monogram, Dacor, ILVE and other
            premium range brands.
          </p>
  
          <p>
            We diagnose ignition systems, burners, valves, heating components,
            temperature sensors, control boards and electrical systems while
            working carefully around cabinetry, stone countertops and other
            high-end kitchen finishes.
          </p>
        </>
      ),
    },
  
    {
      id: "oven",
      title: "Oven Repair",
      heading: "Luxury Oven Repair in Brentwood",
      img: "/cities/oven-repair.webp",
      alt: "Luxury oven repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide <strong>oven repair in Brentwood, Los Angeles</strong> for
            built-in wall ovens, double ovens, convection ovens, steam ovens,
            speed ovens and oven sections within premium ranges.
          </p>
  
          <p>
            We repair ovens that are not heating, overheating, baking unevenly,
            taking too long to preheat, displaying error codes, producing unusual
            fan noise or experiencing control-panel and temperature-sensor
            problems. See our dedicated{" "}
            <a href="/oven-repair/">oven repair service</a> for additional
            information.
          </p>
  
          <h3>High-End Oven Brands We Service</h3>
          <p>
            Brentwood oven service includes{" "}
            <a href="/wolf-appliance-repair/">Wolf</a>,{" "}
            <a href="/miele-appliance-repair/">Miele</a>,{" "}
            <a href="/thermador-appliance-repair/">Thermador</a>,{" "}
            <a href="/gaggenau-repair/">Gaggenau</a>, Viking, Monogram,
            JennAir, Dacor, Bosch, La Cornue, Lacanche, Bertazzoni and other
            premium cooking brands.
          </p>
  
          <p>
            Our diagnosis can include heating elements, igniters, convection
            systems, relays, thermostats, sensors, door seals and electronic
            controls to determine the actual cause before repair.
          </p>
        </>
      ),
    },
  
    {
      id: "cooktop",
      title: "Cooktop Repair",
      heading: "Cooktop Repair in Brentwood",
      img: "/cities/cooktop-repair.webp",
      alt: "Luxury cooktop repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            Our technicians provide{" "}
            <strong>cooktop repair in Brentwood, Los Angeles</strong> for gas,
            electric and induction cooktops, rangetops and premium built-in
            cooking surfaces.
          </p>
  
          <p>
            We diagnose burners that will not ignite, constant clicking, weak
            flames, electric elements that will not heat, induction zones that do
            not detect cookware, failed touch controls, error codes and breaker
            issues. Visit our{" "}
            <a href="/cooktop-repair/">cooktop repair page</a> for more detailed
            service information.
          </p>
  
          <h3>Luxury Cooktop Brands We Repair</h3>
          <p>
            Brands include{" "}
            <a href="/wolf-appliance-repair/">Wolf</a>,{" "}
            <a href="/miele-appliance-repair/">Miele</a>,{" "}
            <a href="/thermador-appliance-repair/">Thermador</a>,{" "}
            <a href="/gaggenau-repair/">Gaggenau</a>, Bosch, Viking, Monogram,
            JennAir, Fisher & Paykel, Dacor, Bertazzoni, BlueStar and other
            premium cooktop and rangetop manufacturers.
          </p>
  
          <p>
            Because many Brentwood cooktops are flush-mounted into stone counters
            or custom islands, we also take care to protect surrounding surfaces
            during diagnosis and service.
          </p>
        </>
      ),
    },
  
    {
      id: "hood",
      title: "Ventilation Hood Repair",
      heading: "Ventilation & Range Hood Repair in Brentwood",
      img: "/cities/range-hood-repair.webp",
      alt: "Luxury range hood repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide{" "}
            <strong>range hood and ventilation repair in Brentwood</strong> for
            wall hoods, island hoods, custom inserts, downdraft systems and
            built-in ventilation paired with high-output luxury ranges.
          </p>
  
          <p>
            Common problems include weak airflow, excessive noise, blower motors
            that will not run, failed lights, unresponsive controls and
            downdrafts that will not rise or retract. See our{" "}
            <a href="/range-hood-repair/">range hood repair services</a>.
          </p>
  
          <h3>Premium Ventilation Brands</h3>
          <p>
            We service ventilation equipment from{" "}
            <a href="/wolf-appliance-repair/">Wolf</a>,{" "}
            <a href="/thermador-appliance-repair/">Thermador</a>,{" "}
            <a href="/miele-appliance-repair/">Miele</a>, Zephyr, Viking,
            Monogram, JennAir, Gaggenau, Bosch, BlueStar, Bertazzoni and other
            premium manufacturers.
          </p>
  
          <p>
            Diagnosis may include blower motors, switches, filters, controls,
            wiring, airflow restrictions and noise or vibration sources.
          </p>
        </>
      ),
    },
  
    {
      id: "refrigerator",
      title: "Refrigerator Repair",
      heading: "Luxury Refrigerator Repair in Brentwood",
      img: "/cities/refrigerator-repair.webp",
      alt: "Luxury refrigerator repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            Luxury Appliance Repair by Zaricci provides{" "}
            <strong>refrigerator repair in Brentwood, Los Angeles</strong> for
            built-in, integrated, panel-ready, column, French-door and other
            premium residential refrigeration systems.
          </p>
  
          <p>
            We diagnose refrigerators that are not cooling, developing frost,
            leaking water, making unusual noises, freezing food or failing to
            maintain stable temperatures. For additional information, visit our{" "}
            <a href="/refrigerator-repair/">luxury refrigerator repair page</a>.
          </p>
  
          <h3>Luxury Refrigerator Brands We Repair</h3>
          <p>
            We service{" "}
            <a href="/sub-zero-repair/">Sub-Zero refrigerators</a>,{" "}
            <a href="/miele-appliance-repair/">Miele</a>,{" "}
            <a href="/thermador-appliance-repair/">Thermador</a>,{" "}
            <a href="/gaggenau-repair/">Gaggenau</a>,{" "}
            <a href="/true-residential-appliance-repair/">True Residential</a>,
            Fisher & Paykel, Liebherr, Monogram, Viking, Dacor, Bosch and other
            premium refrigeration brands.
          </p>
  
          <p>
            Our refrigeration diagnosis may include airflow, evaporator and
            condenser performance, fans, thermistors, controls, defrost systems,
            door seals and sealed-system symptoms.
          </p>
        </>
      ),
    },
  
    {
      id: "freezer",
      title: "Freezer Repair",
      heading: "Luxury Freezer Repair in Brentwood",
      img: "/cities/freezer-repair.webp",
      alt: "Luxury freezer repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide <strong>freezer repair in Brentwood</strong> for built-in
            freezers, freezer columns, integrated units, undercounter freezer
            drawers and freezer compartments within premium refrigeration
            systems.
          </p>
  
          <p>
            Common problems include insufficient cooling, temperature
            fluctuations, excessive frost, water leaks, noisy fans, failed
            defrost systems and door-sealing problems. Learn more about our{" "}
            <a href="/freezer-repair/">freezer repair services</a>.
          </p>
  
          <h3>Premium Freezer Brands</h3>
          <p>
            We repair{" "}
            <a href="/sub-zero-repair/">Sub-Zero</a>,{" "}
            <a href="/miele-appliance-repair/">Miele</a>,{" "}
            <a href="/thermador-appliance-repair/">Thermador</a>,{" "}
            <a href="/gaggenau-repair/">Gaggenau</a>, True Residential,
            Liebherr, Monogram, Fisher & Paykel, Viking, Dacor and other luxury
            freezer systems.
          </p>
  
          <p>
            Service can include evaluation of temperature controls, fans,
            evaporators, defrost components, seals and compressor-related
            symptoms.
          </p>
        </>
      ),
    },
  
    {
      id: "beverage",
      title: "Beverage Center Repair",
      heading: "Beverage Center Repair in Brentwood",
      img: "/cities/beverage-center-repair.webp",
      alt: "Luxury beverage center repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We repair <strong>beverage centers in Brentwood</strong> installed in
            luxury kitchens, home bars, entertainment rooms, guest spaces and
            outdoor living areas.
          </p>
  
          <p>
            We service units that are not cooling properly, running constantly,
            developing condensation, leaking, making excessive noise or
            experiencing digital-control and door-seal problems.
          </p>
  
          <h3>Beverage Refrigeration Brands</h3>
          <p>
            Brands include{" "}
            <a href="/true-residential-appliance-repair/">True Residential</a>,{" "}
            <a href="/sub-zero-repair/">Sub-Zero</a>, U-Line, Perlick, Monogram,
            JennAir, Miele, Fisher & Paykel, Viking, Thermador, Dacor and Zephyr.
          </p>
  
          <p>
            Beverage centers are closely related to other specialty refrigeration
            systems we service, including{" "}
            <a href="/wine-cooler-repair/">wine coolers</a> and{" "}
            <a href="/refrigerator-repair/">built-in refrigerators</a>.
          </p>
        </>
      ),
    },
  
    {
      id: "icemaker",
      title: "Ice Maker Repair",
      heading: "Ice Maker Repair in Brentwood",
      img: "/cities/ice-maker-repair.webp",
      alt: "Built-in ice maker repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide <strong>ice maker repair in Brentwood</strong> for
            undercounter ice machines, built-in ice makers, panel-ready units and
            refrigerator ice-making systems.
          </p>
  
          <p>
            We diagnose no-ice conditions, slow production, small or malformed
            cubes, leaking, drainage failures, freeze-ups, noisy operation and
            water-supply problems. Visit our{" "}
            <a href="/ice-maker-repair/">ice maker repair page</a> for more
            information.
          </p>
  
          <h3>Ice Maker Brands We Service</h3>
          <p>
            We service{" "}
            <a href="/sub-zero-repair/">Sub-Zero</a>, True Residential, U-Line,
            Perlick, Scotsman, Monogram, Viking, Thermador and other residential
            built-in ice machines.
          </p>
  
          <p>
            Diagnosis may include water valves, pumps, filters, drains,
            evaporator plates, sensors, harvest cycles and electronic controls.
          </p>
        </>
      ),
    },
  
    {
      id: "dryer",
      title: "Dryer Repair",
      heading: "Luxury Dryer Repair in Brentwood",
      img: "/cities/dryer-repair.webp",
      alt: "Luxury dryer repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide <strong>dryer repair in Brentwood</strong> for premium
            vented, ventless, condenser and heat-pump dryers as well as stacked
            laundry systems.
          </p>
  
          <p>
            Common problems include dryers that do not heat, take too long to dry,
            overheat, stop during a cycle, make excessive noise or display error
            codes. Learn more about our{" "}
            <a href="/dryer-repair/">dryer repair services</a>.
          </p>
  
          <h3>Premium Dryer Brands</h3>
          <p>
            We service{" "}
            <a href="/miele-appliance-repair/">Miele</a>,{" "}
            <a href="/bosch-appliance-repair/">Bosch</a>,{" "}
            <a href="/asko-appliance-repair/">Asko</a>, Fisher & Paykel,
            Monogram, Speed Queen, Electrolux and other premium laundry systems.
          </p>
  
          <p>
            Diagnosis can include heating systems, airflow, moisture sensors,
            belts, rollers, motors, pumps and heat-exchange components.
          </p>
        </>
      ),
    },
  
    {
      id: "washing",
      title: "Washing Machine Repair",
      heading: "Washing Machine Repair in Brentwood",
      img: "/cities/washing-machine-repair.webp",
      alt: "Luxury washing machine repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide{" "}
            <strong>washing machine repair in Brentwood</strong> for premium
            front-load, top-load, compact and stacked laundry systems.
          </p>
  
          <p>
            We diagnose washers that will not drain, spin or fill; leaking
            machines; excessive vibration; door-lock problems; standing water and
            electronic error codes. Visit our{" "}
            <a href="/washing-machine-repair/">washing machine repair page</a>.
          </p>
  
          <h3>Premium Washer Brands</h3>
          <p>
            Brands include{" "}
            <a href="/miele-appliance-repair/">Miele</a>,{" "}
            <a href="/bosch-appliance-repair/">Bosch</a>,{" "}
            <a href="/asko-appliance-repair/">Asko</a>, Fisher & Paykel,
            Monogram, Speed Queen, Electrolux and other premium laundry
            manufacturers.
          </p>
  
          <p>
            Our technicians can evaluate pumps, hoses, door boots, suspension
            components, bearings, motors, pressure sensors and electronic
            controls.
          </p>
        </>
      ),
    },
  
    {
      id: "dishwasher",
      title: "Dishwasher Repair",
      heading: "Luxury Dishwasher Repair in Brentwood",
      img: "/cities/dishwasher-repair.webp",
      alt: "Luxury dishwasher repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide <strong>dishwasher repair in Brentwood</strong> for
            integrated, panel-ready, drawer and other premium built-in
            dishwashers.
          </p>
  
          <p>
            We repair dishwashers that are not draining, cleaning or drying
            properly; leaking units; machines with standing water; noisy
            circulation systems; control failures and error codes. See our{" "}
            <a href="/dishwasher-repair/">dishwasher repair services</a>.
          </p>
  
          <h3>Luxury Dishwasher Brands We Repair</h3>
          <p>
            We service{" "}
            <a href="/cove-dishwasher-repair/">Cove dishwashers</a>,{" "}
            <a href="/miele-appliance-repair/">Miele</a>,{" "}
            <a href="/bosch-appliance-repair/">Bosch</a>,{" "}
            <a href="/thermador-appliance-repair/">Thermador</a>, Gaggenau,
            Fisher & Paykel, JennAir, Monogram, Asko, Viking, Dacor and other
            premium dishwasher brands.
          </p>
  
          <p>
            Diagnosis may include circulation and drain pumps, spray systems,
            inlet valves, filters, door seals, sensors and electronic controls.
          </p>
        </>
      ),
    },
  
    {
      id: "warming",
      title: "Warming Drawer Repair",
      heading: "Warming Drawer Repair in Brentwood",
      img: "/cities/warming-drawer-repair.webp",
      alt: "Warming drawer repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide <strong>warming drawer repair in Brentwood</strong> for
            built-in warming drawers and premium kitchen warming systems.
          </p>
  
          <p>
            We repair drawers that will not heat, overheat, maintain the wrong
            temperature, fail to close smoothly or experience control-panel,
            switch or indicator problems.
          </p>
  
          <h3>Warming Drawer Brands</h3>
          <p>
            Brands include{" "}
            <a href="/wolf-appliance-repair/">Wolf</a>,{" "}
            <a href="/miele-appliance-repair/">Miele</a>,{" "}
            <a href="/thermador-appliance-repair/">Thermador</a>,{" "}
            <a href="/gaggenau-repair/">Gaggenau</a>, Monogram, JennAir, Dacor,
            Viking, Bosch and Bertazzoni.
          </p>
  
          <p>
            Because warming drawers are frequently integrated into cabinetry or
            paired with luxury ovens and ranges, they are often serviced alongside
            our <a href="/oven-repair/">oven repair</a> and{" "}
            <a href="/range-repair/">range repair</a> services.
          </p>
        </>
      ),
    },
  
    {
      id: "winecooler",
      title: "Wine Cooler Repair",
      heading: "Wine Cooler Repair in Brentwood",
      img: "/cities/wine-cooler-repair.webp",
      alt: "Wine cooler repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide <strong>wine cooler repair in Brentwood</strong> for
            built-in wine refrigerators, undercounter units, dual-zone systems,
            wine columns and panel-ready wine storage appliances.
          </p>
  
          <p>
            Common issues include unstable temperatures, warm zones, excessive
            vibration, condensation, noisy fans, failed controls and poor door
            sealing. Learn more about our{" "}
            <a href="/wine-cooler-repair/">wine cooler repair services</a>.
          </p>
  
          <h3>Luxury Wine Refrigeration Brands</h3>
          <p>
            We service{" "}
            <a href="/sub-zero-repair/">Sub-Zero</a>,{" "}
            <a href="/true-residential-appliance-repair/">True Residential</a>,{" "}
            <a href="/gaggenau-repair/">Gaggenau</a>,{" "}
            <a href="/miele-appliance-repair/">Miele</a>, Thermador, Perlick,
            U-Line, Monogram, Fisher & Paykel, Viking and Liebherr.
          </p>
  
          <p>
            Diagnosis may include refrigeration performance, temperature sensors,
            airflow, fans, controls, seals and built-in ventilation conditions.
          </p>
        </>
      ),
    },
  
    {
      id: "winecellar",
      title: "Wine Cellar Repair",
      heading: "Wine Cellar Cooling System Repair in Brentwood",
      img: "/cities/wine-cellar-repair.webp",
      alt: "Wine cellar cooling system repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We service{" "}
            <strong>wine cellar cooling systems in Brentwood</strong> for custom
            residential wine rooms and climate-controlled wine storage spaces.
          </p>
  
          <p>
            We diagnose systems that are not cooling properly, have unstable
            temperatures or humidity, run constantly, leak water, develop
            condensation or experience fan, thermostat and control failures.
            Learn more about our{" "}
            <a href="/wine-cellar-repair/">wine cellar cooling repair</a>.
          </p>
  
          <h3>Wine Cellar Cooling Brands</h3>
          <p>
            We service Wine Guardian, WhisperKOOL, CellarPro, Breezaire, KoolR
            and other residential wine-room cooling systems.
          </p>
  
          <p>
            We can evaluate airflow, filters, coils, fans, temperature controls,
            sensors and refrigeration-related performance issues affecting the
            stability of a wine cellar.
          </p>
        </>
      ),
    },
  
    {
      id: "grill",
      title: "BBQ Grill Repair",
      heading: "Luxury BBQ Grill Repair in Brentwood",
      img: "/cities/bbq-grill-repair.webp",
      alt: "Luxury BBQ grill repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide <strong>BBQ grill repair in Brentwood</strong> for
            built-in luxury grills, outdoor cooking stations, sear burners and
            rotisserie systems.
          </p>
  
          <p>
            We repair grills with ignition failures, weak or uneven flames,
            inadequate heating, failing burners, rotisserie problems, gas-flow
            issues and weather-related component deterioration. See our{" "}
            <a href="/bbq-repair/">BBQ grill repair services</a>.
          </p>
  
          <h3>Luxury Grill Brands We Repair</h3>
          <p>
            We service{" "}
            <a href="/kalamazoo-appliance-repair/">Kalamazoo</a>,{" "}
            <a href="/lynx-repair/">Lynx</a>,{" "}
            <a href="/hestan-appliance-repair/">Hestan</a>,{" "}
            <a href="/dcs-appliance-repair/">DCS</a>,{" "}
            <a href="/alfresco-appliance-repair/">Alfresco</a>, Twin Eagles,
            Fire Magic, Viking, Wolf, Caliber and other premium outdoor cooking
            brands.
          </p>
  
          <p>
            Our service can include ignition systems, valves, regulators,
            burners, manifolds, flame performance and corrosion-related issues.
          </p>
        </>
      ),
    },
  
    {
      id: "pizzaoven",
      title: "Pizza Oven Repair",
      heading: "Pizza Oven Repair in Brentwood",
      img: "/cities/pizza-oven-repair.webp",
      alt: "Luxury pizza oven repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            We provide <strong>pizza oven repair in Brentwood</strong> for
            premium indoor and outdoor pizza ovens installed in gourmet kitchens,
            patios and outdoor entertaining areas.
          </p>
  
          <p>
            We diagnose pizza ovens that will not reach temperature, heat
            unevenly, have ignition or burner problems, display control errors or
            experience thermostat, sensor and ventilation issues.
          </p>
  
          <h3>Premium Pizza Oven Brands</h3>
          <p>
            We service selected systems from Kalamazoo, Lynx, Hestan, Alfresco,
            Viking, DCS, Alfa, Fontana Forni, Gozney and other premium cooking
            manufacturers.
          </p>
  
          <p>
            Pizza ovens installed as part of a larger exterior cooking area can
            also be serviced through our{" "}
            <a href="/outdoor-kitchen-appliance-repair/">
              outdoor kitchen appliance repair
            </a>{" "}
            services.
          </p>
        </>
      ),
    },
  
    {
      id: "outdoor",
      title: "Outdoor Kitchen Repair",
      heading: "Outdoor Kitchen Appliance Repair in Brentwood",
      img: "/cities/outdoor-kitchen-repair.webp",
      alt: "Outdoor kitchen appliance repair in Brentwood Los Angeles",
      description: (
        <>
          <p>
            Luxury Appliance Repair by Zaricci provides{" "}
            <strong>outdoor kitchen appliance repair in Brentwood</strong> for
            built-in grills, outdoor refrigerators, beverage centers, ice makers,
            side burners, warming drawers and pizza ovens.
          </p>
  
          <p>
            Outdoor appliances face additional exposure to heat, moisture,
            grease, corrosion and weather. We diagnose ignition failures,
            refrigeration problems, temperature issues, electrical faults and
            deterioration affecting outdoor kitchen equipment. Learn more about
            our{" "}
            <a href="/outdoor-kitchen-appliance-repair/">
              outdoor kitchen repair services
            </a>.
          </p>
  
          <h3>Luxury Outdoor Kitchen Brands</h3>
          <p>
            We service{" "}
            <a href="/kalamazoo-appliance-repair/">Kalamazoo</a>,{" "}
            <a href="/lynx-repair/">Lynx</a>,{" "}
            <a href="/hestan-appliance-repair/">Hestan</a>,{" "}
            <a href="/dcs-appliance-repair/">DCS</a>,{" "}
            <a href="/alfresco-appliance-repair/">Alfresco</a>,{" "}
            <a href="/twin-eagles-repair/">Twin Eagles</a>, Fire Magic, Viking,
            Wolf, True Residential Outdoor, Perlick and other premium outdoor
            brands.
          </p>
  
          <p>
            For grill-specific problems, see our{" "}
            <a href="/bbq-repair/">BBQ repair service</a>. For outdoor
            refrigeration issues, our{" "}
            <a href="/refrigerator-repair/">refrigerator repair specialists</a>{" "}
            service built-in cooling equipment as well.
          </p>
        </>
      ),
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
                  {item.img && <img width="360" height="360" src={item.img} alt={item.alt} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item, index) => (
            <div key={item.id} className="accordion-item" ref={(el) => (itemRefs.current[index] = el)}>
              <div onClick={() => setActiveTab((prev) => (prev === item.id ? null : item.id))} className="accordion-header">
                {item.title}<span className="accordion-icon">{activeTab === item.id ? "−" : "+"}</span>
              </div>
              {activeTab === item.id && (
                <div className="accordion-content">
                  <h2>{item.heading}</h2>
                  {item.img && <img src={item.img} alt={item.alt} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
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
