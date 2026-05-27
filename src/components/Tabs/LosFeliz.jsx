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
      heading: "Range Repair in Los Feliz",
      img: "/cities/range-repair.webp",
      alt: "Range repair in Los Feliz",
      description: (
        <>
          <p>
            Luxury Appliance Repair by Zaricci provides professional{" "}
            <strong>range repair in Los Feliz</strong> for gas ranges, dual-fuel
            ranges, electric ranges, induction ranges, European ranges, retro
            ranges, and professional-style cooking appliances. Los Feliz homes
            often feature hillside kitchens, historic Spanish-style architecture,
            restored character homes, custom cabinetry, stone countertops, and
            premium cooking appliances, so we approach every range repair with care
            for both performance and the surrounding kitchen design.
          </p>
  
          <p>
            Whether your range has weak burners, ignition problems, uneven oven
            temperatures, error codes, electrical failures, or a burner that keeps
            clicking, our technicians inspect the appliance carefully before
            recommending repair. We focus on identifying the real cause of the
            issue while protecting floors, cabinetry, countertops, and built-in
            installation details.
          </p>
  
          <h3>Common Range Problems We Repair</h3>
  
          <ul>
            <li>✅ Burners not igniting or clicking continuously</li>
            <li>✅ Weak flame, uneven flame, or yellow flame</li>
            <li>✅ Gas burners lighting slowly or not staying lit</li>
            <li>✅ Oven not heating, overheating, or heating unevenly</li>
            <li>✅ Dual-fuel range oven issues</li>
            <li>✅ Electric range elements not turning on</li>
            <li>✅ Induction range not detecting cookware</li>
            <li>✅ Convection fan not working properly</li>
            <li>✅ Bake, broil, or roast function not working</li>
            <li>✅ Temperature calibration problems</li>
            <li>✅ Control panel, display, or keypad failure</li>
            <li>✅ Error codes or communication faults</li>
            <li>✅ Oven door not closing, sealing, or locking correctly</li>
            <li>✅ Range tripping the breaker</li>
            <li>✅ Igniters, spark modules, relays, thermostats, or sensors failing</li>
            <li>✅ High-end range maintenance and performance issues</li>
          </ul>
  
          <h3>Range Brands We Repair</h3>
  
          <p>
            <strong>
              Wolf, Viking, Thermador, La Cornue, Lacanche, AGA, Bertazzoni,
              Fulgor Milano, Gaggenau, ILVE, Miele, Officine Gullo, American
              Range, BlueStar, FiveStar, Thor, Forno, Garland, ZLINE, Monogram,
              Signature Kitchen Suite, Hestan, Dacor, Fisher & Paykel, JennAir,
              Bosch, Smeg, Big Chill, Elmira Stove Works, Heartland, and other
              European, retro, premium, and pro-style range brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Ranges</h3>
  
          <ul>
            <li>
              <strong>Ignition system testing:</strong> We inspect spark modules,
              igniters, electrodes, burner switches, wiring, and ignition response
              to find out why burners are not lighting correctly.
            </li>
  
            <li>
              <strong>Gas burner and valve inspection:</strong> We check burner
              caps, ports, flame quality, gas valves, regulators, and related
              components that affect cooking performance and safety.
            </li>
  
            <li>
              <strong>Oven heating diagnosis:</strong> We test bake elements,
              broil elements, gas igniters, temperature sensors, thermostats,
              relays, control boards, and heating cycles.
            </li>
  
            <li>
              <strong>Dual-fuel and electric system repair:</strong> We inspect
              electrical connections, relays, switches, elements, wiring, and
              communication faults common in premium dual-fuel and electric ranges.
            </li>
  
            <li>
              <strong>Temperature calibration:</strong> We verify oven temperature,
              heat recovery, cycling behavior, and sensor accuracy so the range
              performs properly for baking, roasting, and high-heat cooking.
            </li>
  
            <li>
              <strong>Kitchen protection:</strong> We work carefully around custom
              cabinetry, stone countertops, hillside home layouts, designer floors,
              built-in range installations, and high-end kitchen finishes.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "oven",
      title: "Oven Repair",
      heading: "Oven Repair in Los Feliz",
      img: "/cities/oven-repair.webp",
      alt: "Oven repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>oven repair in Los Feliz</strong> for wall ovens,
            double ovens, steam ovens, speed ovens, convection ovens, French-door
            ovens, built-in ovens, and oven sections inside premium ranges. Many
            Los Feliz kitchens combine older architectural character with modern
            appliance upgrades, so careful diagnosis and clean service are
            especially important when working around custom cabinetry, built-in
            oven walls, stone counters, and designer kitchen finishes.
          </p>
  
          <p>
            If your oven is not heating, baking unevenly, taking too long to
            preheat, showing an error code, or failing during convection cooking,
            we inspect the heating system, airflow, sensors, controls, and door
            seal before recommending the repair.
          </p>
  
          <h3>Common Oven Problems We Repair</h3>
  
          <ul>
            <li>✅ Oven not heating or not reaching temperature</li>
            <li>✅ Uneven baking, roasting, or broiling</li>
            <li>✅ Oven overheating or burning food</li>
            <li>✅ Long preheat times</li>
            <li>✅ Bake or broil function not working</li>
            <li>✅ Convection fan not spinning or making noise</li>
            <li>✅ Faulty igniters, heating elements, or relays</li>
            <li>✅ Temperature sensor or thermostat problems</li>
            <li>✅ Touchpad, control panel, or display issues</li>
            <li>✅ Oven door not closing, sealing, or locking properly</li>
            <li>✅ Steam oven or speed oven performance issues</li>
            <li>✅ Error codes, power issues, or communication faults</li>
          </ul>
  
          <h3>Oven Brands We Repair</h3>
  
          <p>
            <strong>
              Wolf, Miele, Viking, Thermador, Monogram, JennAir, AGA, La Cornue,
              Lacanche, Dacor, Bosch, Gaggenau, Bertazzoni, Fulgor Milano, ILVE,
              Signature Kitchen Suite, Hestan, Fisher & Paykel, BlueStar, ZLINE,
              Smeg, Big Chill, Elmira Stove Works, Heartland, and other high-end
              oven brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Ovens</h3>
  
          <ul>
            <li>
              <strong>Heating system diagnosis:</strong> We test bake elements,
              broil elements, gas igniters, relays, thermostats, and control board
              output.
            </li>
  
            <li>
              <strong>Temperature accuracy testing:</strong> We compare actual
              cavity temperature with the set temperature to identify calibration
              or sensor problems.
            </li>
  
            <li>
              <strong>Airflow and convection inspection:</strong> We check
              convection fans, fan motors, airflow channels, and heat circulation
              issues that can cause uneven cooking.
            </li>
  
            <li>
              <strong>Door and seal inspection:</strong> We inspect hinges,
              gaskets, locks, and door alignment because heat loss can affect
              cooking performance.
            </li>
  
            <li>
              <strong>Control and display troubleshooting:</strong> We diagnose
              touchpads, user interfaces, display failures, error codes, and
              electrical communication issues.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "cooktop",
      title: "Cooktop Repair",
      heading: "Cooktop Repair in Los Feliz",
      img: "/cities/cooktop-repair.webp",
      alt: "Cooktop repair in Los Feliz",
      description: (
        <>
          <p>
            Our technicians provide <strong>cooktop repair in Los Feliz</strong>{" "}
            for gas cooktops, electric cooktops, induction cooktops, rangetops,
            modular cooktops, and high-end built-in cooking surfaces. Cooktops in
            Los Feliz homes may be installed into stone countertops, custom
            kitchen islands, restored historic kitchens, modern remodels, and
            hillside homes where careful access and protection of surrounding
            finishes matter.
          </p>
  
          <p>
            Whether your cooktop will not ignite, will not heat, keeps clicking,
            shows an error code, or has a failed touch control, we inspect the
            ignition, electrical, sensor, and control systems to locate the issue.
          </p>
  
          <h3>Common Cooktop Problems We Repair</h3>
  
          <ul>
            <li>✅ Gas burner will not ignite</li>
            <li>✅ Burner clicking continuously</li>
            <li>✅ Weak flame, uneven flame, or flame going out</li>
            <li>✅ Electric burner not heating</li>
            <li>✅ Induction cooktop not detecting cookware</li>
            <li>✅ Induction zone shutting off during cooking</li>
            <li>✅ Cracked or damaged glass cooktop surface</li>
            <li>✅ Flickering indicators or display issues</li>
            <li>✅ Touch controls not responding</li>
            <li>✅ Temperature control problems</li>
            <li>✅ Clicking, buzzing, or unusual electrical noise</li>
            <li>✅ Cooktop tripping the breaker</li>
          </ul>
  
          <h3>Cooktop Brands We Repair</h3>
  
          <p>
            <strong>
              Wolf, Miele, Bosch, Thermador, Viking, KitchenAid, AGA, Bertazzoni,
              La Cornue, Lacanche, JennAir, Monogram, Gaggenau, Dacor, Fisher &
              Paykel, Signature Kitchen Suite, Fulgor Milano, ILVE, BlueStar,
              American Range, ZLINE, Smeg, and other premium cooktop and rangetop
              brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Cooktops</h3>
  
          <ul>
            <li>
              <strong>Gas cooktop testing:</strong> We inspect igniters,
              electrodes, burner caps, gas valves, spark modules, and flame
              quality.
            </li>
  
            <li>
              <strong>Electric cooktop testing:</strong> We check surface
              elements, switches, relays, limiters, wiring, and control output.
            </li>
  
            <li>
              <strong>Induction cooktop diagnosis:</strong> We inspect cookware
              detection issues, power modules, sensors, cooling fans, user
              interfaces, and fault codes.
            </li>
  
            <li>
              <strong>Built-in installation care:</strong> We work carefully
              around stone counters, custom islands, flush-mounted cooktops, and
              designer kitchen finishes.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "hood",
      title: "Ventilation Hood Repair",
      heading: "Ventilation & Range Hood Repair in Los Feliz",
      img: "/cities/range-hood-repair.webp",
      alt: "Ventilation and range hood repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>range hood repair in Los Feliz</strong> for
            ventilation hoods, custom hood inserts, island hoods, wall hoods,
            downdraft systems, and built-in ventilation systems. Proper ventilation
            is especially important in hillside homes, open kitchens, restored
            older properties, chef-style cooking spaces, and indoor-outdoor
            entertaining areas where smoke, cooking odors, grease, and airflow
            problems need to be controlled efficiently.
          </p>
  
          <p>
            If your hood is loud, weak, not turning on, not clearing smoke, or has
            failed lights or controls, we inspect the motor, switches, filters,
            wiring, and airflow path to restore quiet and effective ventilation.
          </p>
  
          <h3>Common Ventilation Hood Problems We Repair</h3>
  
          <ul>
            <li>✅ Hood fan not working</li>
            <li>✅ Weak suction or poor smoke removal</li>
            <li>✅ Loud motor noise or vibration</li>
            <li>✅ Lights not working or flickering</li>
            <li>✅ Control buttons not responding</li>
            <li>✅ Blower motor failure</li>
            <li>✅ Grease buildup affecting performance</li>
            <li>✅ Downdraft vent not rising or retracting</li>
            <li>✅ Hood turns on but does not move air properly</li>
            <li>✅ Electrical, switch, relay, or control board issues</li>
          </ul>
  
          <h3>Ventilation Brands We Repair</h3>
  
          <p>
            <strong>
              Miele, Zephyr, Wolf, Thermador, Viking, Monogram, JennAir,
              Gaggenau, Bosch, BlueStar, Bertazzoni, Fulgor Milano, La Cornue,
              Dacor, KitchenAid, Vent-A-Hood, Best, Broan, and other high-end
              ventilation and range hood brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Range Hoods</h3>
  
          <ul>
            <li>
              <strong>Motor and blower testing:</strong> We inspect fan motors,
              blower assemblies, bearings, wiring, and speed control operation.
            </li>
  
            <li>
              <strong>Control system diagnosis:</strong> We test switches,
              touchpads, relays, control boards, and lighting circuits.
            </li>
  
            <li>
              <strong>Airflow inspection:</strong> We check filters, duct
              restrictions, grease buildup, and airflow conditions that reduce
              ventilation performance.
            </li>
  
            <li>
              <strong>Noise and vibration troubleshooting:</strong> We inspect
              mounting, fan balance, loose components, and worn motor parts.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "refrigerator",
      title: "Refrigerator Repair",
      heading: "Refrigerator Repair in Los Feliz",
      img: "/cities/refrigerator-repair.webp",
      alt: "Refrigerator repair in Los Feliz",
      description: (
        <>
          <p>
            Luxury Appliance Repair by Zaricci provides{" "}
            <strong>refrigerator repair in Los Feliz</strong> for built-in,
            panel-ready, integrated, column, French door, bottom freezer,
            side-by-side, and high-end residential refrigeration systems. Many Los
            Feliz kitchens feature custom cabinetry, hillside home layouts,
            upgraded appliance walls, integrated panels, and premium refrigeration
            paired with freezer columns, wine storage, or beverage centers.
          </p>
  
          <p>
            If your refrigerator is not cooling, leaking, making noise, forming
            frost, showing error codes, or failing to maintain stable temperature,
            we inspect airflow, sensors, fans, controls, gaskets, and sealed-system
            symptoms to determine the correct repair path.
          </p>
  
          <h3>Common Refrigerator Problems We Repair</h3>
  
          <ul>
            <li>✅ Refrigerator not cooling</li>
            <li>✅ Freezer working but refrigerator warm</li>
            <li>✅ Uneven temperature zones</li>
            <li>✅ Food freezing in the fresh-food section</li>
            <li>✅ Water leaking inside or under the unit</li>
            <li>✅ Ice maker not working</li>
            <li>✅ Excess frost, condensation, or moisture</li>
            <li>✅ Loud compressor, fan, or vibration noise</li>
            <li>✅ Door gasket or sealing problems</li>
            <li>✅ Digital control board or display failure</li>
            <li>✅ Built-in refrigerator airflow problems</li>
            <li>✅ Sealed-system symptoms or compressor-related issues</li>
          </ul>
  
          <h3>Refrigerator Brands We Repair</h3>
  
          <p>
            <strong>
              Sub-Zero, Miele, Thermador, Bosch, KitchenAid, JennAir, Monogram,
              Signature Kitchen Suite, True Residential, Fisher & Paykel,
              Gaggenau, Liebherr, Viking, Dacor, Perlick, U-Line, Smeg, Big Chill,
              Elmira Stove Works, Fulgor Milano, and other premium refrigeration
              brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Refrigerators</h3>
  
          <ul>
            <li>
              <strong>Cooling performance testing:</strong> We inspect fans,
              evaporators, condensers, temperature sensors, controls, and airflow.
            </li>
  
            <li>
              <strong>Built-in system inspection:</strong> We check condenser
              access, ventilation, cabinet clearances, and installation-related
              performance issues.
            </li>
  
            <li>
              <strong>Leak and frost diagnosis:</strong> We inspect drain lines,
              door gaskets, water valves, filter housings, and defrost components.
            </li>
  
            <li>
              <strong>Control and sensor troubleshooting:</strong> We test control
              boards, displays, thermistors, communication faults, and error codes.
            </li>
  
            <li>
              <strong>Parts and repair planning:</strong> When parts are needed,
              we help identify the proper OEM, manufacturer-approved, or compatible
              part for the model.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "freezer",
      title: "Freezer Repair",
      heading: "Freezer Repair in Los Feliz",
      img: "/cities/freezer-repair.webp",
      alt: "Freezer repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>freezer repair in Los Feliz</strong> for built-in
            freezers, freezer columns, undercounter freezer drawers, integrated
            freezer units, upright freezers, and freezer sections inside premium
            refrigerators. High-end freezers require stable temperature control,
            proper airflow, and reliable defrost operation to protect food,
            specialty ingredients, and long-term performance.
          </p>
  
          <h3>Common Freezer Problems We Repair</h3>
  
          <ul>
            <li>✅ Freezer not cooling enough</li>
            <li>✅ Freezer too warm or temperature fluctuating</li>
            <li>✅ Ice buildup or frost on the back wall</li>
            <li>✅ Freezer door not sealing properly</li>
            <li>✅ Water leaking from freezer section</li>
            <li>✅ Loud fan, compressor, or vibration noise</li>
            <li>✅ Drawer freezer not closing properly</li>
            <li>✅ Defrost system failure</li>
            <li>✅ Error codes or digital control problems</li>
            <li>✅ Compressor, fan, sensor, or control board issues</li>
          </ul>
  
          <h3>Freezer Brands We Repair</h3>
  
          <p>
            <strong>
              Sub-Zero, Viking, Miele, Monogram, JennAir, Bosch, Thermador,
              Gaggenau, True Residential, Fisher & Paykel, Liebherr, Dacor,
              KitchenAid, Signature Kitchen Suite, Perlick, U-Line, and other
              high-end freezer brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Freezers</h3>
  
          <ul>
            <li>
              <strong>Temperature diagnosis:</strong> We test sensors, controls,
              airflow, fans, evaporators, and cooling cycles.
            </li>
  
            <li>
              <strong>Defrost system testing:</strong> We inspect heaters, defrost
              sensors, timers, control boards, and frost patterns.
            </li>
  
            <li>
              <strong>Door and gasket inspection:</strong> We check seals,
              alignment, drawer closure, and air leaks that cause frost buildup.
            </li>
  
            <li>
              <strong>Noise and compressor troubleshooting:</strong> We inspect
              fans, motors, compressor operation, and vibration sources.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "beverage",
      title: "Beverage Center Repair",
      heading: "Beverage Center Repair in Los Feliz",
      img: "/cities/beverage-center-repair.webp",
      alt: "Beverage center repair in Los Feliz",
      description: (
        <>
          <p>
            We repair <strong>beverage centers in Los Feliz</strong> for kitchens,
            home bars, media rooms, entertainment spaces, hillside patios, guest
            suites, undercounter installations, and custom cabinetry integrations.
            Beverage centers may look simple, but they rely on precise temperature
            control, quiet operation, proper airflow, and clean integration with
            cabinetry.
          </p>
  
          <h3>Common Beverage Center Problems We Repair</h3>
  
          <ul>
            <li>✅ Beverage center not cooling</li>
            <li>✅ Inconsistent temperature or warm zones</li>
            <li>✅ Excess condensation or moisture</li>
            <li>✅ Loud compressor or fan noise</li>
            <li>✅ Door not sealing properly</li>
            <li>✅ Interior light or display not working</li>
            <li>✅ Digital control issues</li>
            <li>✅ Water pooling or leaking</li>
            <li>✅ Unit running constantly</li>
            <li>✅ Undercounter ventilation problems</li>
          </ul>
  
          <h3>Beverage Center Brands We Repair</h3>
  
          <p>
            <strong>
              U-Line, Perlick, True Residential, Monogram, JennAir, Miele,
              KitchenAid, Sub-Zero, Fisher & Paykel, Viking, Thermador, Dacor,
              Zephyr, and other premium beverage refrigeration brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Beverage Centers</h3>
  
          <ul>
            <li>
              <strong>Cooling system inspection:</strong> We check compressors,
              fans, condensers, evaporators, temperature sensors, and controls.
            </li>
  
            <li>
              <strong>Undercounter airflow review:</strong> We inspect ventilation
              around the cabinet opening because poor airflow can cause weak
              cooling and constant running.
            </li>
  
            <li>
              <strong>Moisture and seal diagnosis:</strong> We inspect door
              gaskets, alignment, condensation patterns, and drain issues.
            </li>
  
            <li>
              <strong>Control calibration:</strong> We test displays, thermostats,
              sensors, and control boards for reliable temperature management.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "icemaker",
      title: "Ice Maker Repair",
      heading: "Ice Maker Repair in Los Feliz",
      img: "/cities/ice-maker-repair.webp",
      alt: "Ice maker repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>ice maker repair in Los Feliz</strong> for built-in
            ice machines, undercounter ice makers, panel-ready ice machines, and
            refrigerator ice maker systems. In home bars, kitchens, patios, guest
            areas, entertainment rooms, and hillside homes with indoor-outdoor
            entertaining spaces, clear ice production, proper drainage, and quiet
            operation are all important.
          </p>
  
          <h3>Common Ice Maker Problems We Repair</h3>
  
          <ul>
            <li>✅ No ice production</li>
            <li>✅ Ice maker making small, thin, or hollow cubes</li>
            <li>✅ Ice melting, clumping, or tasting bad</li>
            <li>✅ Water leaking from the ice maker</li>
            <li>✅ Ice machine not draining</li>
            <li>✅ Loud operation or fan noise</li>
            <li>✅ Ice maker freezing over</li>
            <li>✅ Water inlet or fill problems</li>
            <li>✅ Dirty evaporator plate or mineral buildup</li>
            <li>✅ Control board, sensor, or pump failure</li>
          </ul>
  
          <h3>Ice Maker Brands We Repair</h3>
  
          <p>
            <strong>
              Sub-Zero, Scotsman, Monogram, Viking, True Residential, U-Line,
              Perlick, KitchenAid, Whirlpool, Hoshizaki, Manitowoc, Ice-O-Matic,
              Thermador, and other residential and built-in ice maker brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Ice Makers</h3>
  
          <ul>
            <li>
              <strong>Water supply testing:</strong> We inspect inlet valves,
              water lines, filters, fill systems, and water pressure.
            </li>
  
            <li>
              <strong>Ice production diagnosis:</strong> We check evaporator
              plates, sensors, pumps, thermistors, harvest cycles, and control
              boards.
            </li>
  
            <li>
              <strong>Drain and leak inspection:</strong> We inspect drain pumps,
              gravity drains, hoses, fittings, and water pooling issues.
            </li>
  
            <li>
              <strong>Cleaning and buildup review:</strong> We look for mineral
              buildup and maintenance-related issues that reduce ice quality and
              production.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "dryer",
      title: "Dryer Repair",
      heading: "Dryer Repair in Los Feliz",
      img: "/cities/dryer-repair.webp",
      alt: "Dryer repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>dryer repair in Los Feliz</strong> for vented
            dryers, ventless dryers, heat pump dryers, condenser dryers, stacked
            laundry systems, and premium laundry appliances. Dryers in Los Feliz
            homes may be installed in laundry rooms, closets, guest units, hillside
            homes, compact spaces, or stacked configurations, so airflow, access,
            quiet operation, and moisture control matter.
          </p>
  
          <h3>Common Dryer Problems We Repair</h3>
  
          <ul>
            <li>✅ Dryer not heating</li>
            <li>✅ Dryer overheating</li>
            <li>✅ Clothes still damp after cycle</li>
            <li>✅ Drum not spinning</li>
            <li>✅ Dryer making loud noise</li>
            <li>✅ Dryer shutting off too soon</li>
            <li>✅ Heat pump dryer not drying properly</li>
            <li>✅ Ventless dryer condensation issues</li>
            <li>✅ Error codes or digital control failure</li>
            <li>✅ Door switch, belt, motor, or sensor problems</li>
          </ul>
  
          <h3>Dryer Brands We Repair</h3>
  
          <p>
            <strong>
              Miele, Bosch, Monogram, Fisher & Paykel, ASKO, Speed Queen,
              Electrolux, LG Signature, Samsung, Whirlpool, Maytag, GE, and other
              premium laundry brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Dryers</h3>
  
          <ul>
            <li>
              <strong>Heating system testing:</strong> We inspect heating
              elements, gas igniters, thermostats, thermal fuses, sensors, and
              control output.
            </li>
  
            <li>
              <strong>Airflow inspection:</strong> We check lint buildup, venting,
              filters, blower wheels, and airflow restrictions.
            </li>
  
            <li>
              <strong>Drum and motor diagnosis:</strong> We inspect belts,
              rollers, pulleys, bearings, motors, and drum movement.
            </li>
  
            <li>
              <strong>Ventless and heat pump dryer service:</strong> We inspect
              condensers, filters, moisture sensors, pumps, and heat exchange
              components.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "washing",
      title: "Washing Machine Repair",
      heading: "Washing Machine Repair in Los Feliz",
      img: "/cities/washing-machine-repair.webp",
      alt: "Washing machine repair in Los Feliz",
      description: (
        <>
          <p>
            Our technicians provide{" "}
            <strong>washing machine repair in Los Feliz</strong> for front-load
            washers, top-load washers, compact washers, stacked laundry systems,
            and premium laundry appliances. We service laundry systems in hillside
            homes, restored homes, guest units, laundry closets, utility rooms, and
            remodeled spaces where quiet operation, leak prevention, and careful
            access are especially important.
          </p>
  
          <h3>Common Washing Machine Problems We Repair</h3>
  
          <ul>
            <li>✅ Washer not draining</li>
            <li>✅ Washer not spinning</li>
            <li>✅ Washer leaking water</li>
            <li>✅ Excessive shaking during spin cycle</li>
            <li>✅ Door not locking or unlocking</li>
            <li>✅ Washer not filling with water</li>
            <li>✅ Error codes or electronic failure</li>
            <li>✅ Detergent dispenser problems</li>
            <li>✅ Bad smell, standing water, or drain issues</li>
            <li>✅ Pump, pressure sensor, shock absorber, or control board failure</li>
          </ul>
  
          <h3>Washing Machine Brands We Repair</h3>
  
          <p>
            <strong>
              Miele, Bosch, Electrolux, Fisher & Paykel, Monogram, ASKO, Speed
              Queen, LG Signature, Samsung, Whirlpool, Maytag, GE, and other
              premium laundry brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Washing Machines</h3>
  
          <ul>
            <li>
              <strong>Drain and pump testing:</strong> We inspect drain pumps,
              hoses, filters, blockages, and standing water issues.
            </li>
  
            <li>
              <strong>Spin and balance diagnosis:</strong> We check shock
              absorbers, suspension, bearings, motor function, and load balance
              behavior.
            </li>
  
            <li>
              <strong>Leak inspection:</strong> We inspect door boots, hoses,
              valves, dispensers, pumps, and tub seals.
            </li>
  
            <li>
              <strong>Electronic troubleshooting:</strong> We test door locks,
              pressure sensors, control boards, wiring, and error codes.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "dishwasher",
      title: "Dishwasher Repair",
      heading: "Dishwasher Repair in Los Feliz",
      img: "/cities/dishwasher-repair.webp",
      alt: "Dishwasher repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>dishwasher repair in Los Feliz</strong> for
            integrated dishwashers, panel-ready dishwashers, drawer dishwashers,
            quiet dishwashers, and high-end built-in models. Many dishwashers in
            Los Feliz homes are installed behind custom panels, inside remodeled
            kitchens, guest kitchens, butler-style areas, or compact hillside home
            layouts, so we service them carefully without disturbing surrounding
            cabinetry.
          </p>
  
          <h3>Common Dishwasher Problems We Repair</h3>
  
          <ul>
            <li>✅ Dishwasher not draining</li>
            <li>✅ Dishes not coming out clean</li>
            <li>✅ Dishes not drying properly</li>
            <li>✅ Dishwasher leaking</li>
            <li>✅ Foul smell or standing water</li>
            <li>✅ Dishwasher not filling with water</li>
            <li>✅ No power or control panel failure</li>
            <li>✅ Error codes or cycle interruptions</li>
            <li>✅ Loud operation or grinding noise</li>
            <li>✅ Door latch, gasket, pump, motor, or sensor problems</li>
          </ul>
  
          <h3>Dishwasher Brands We Repair</h3>
  
          <p>
            <strong>
              Cove, Miele, Bosch, Thermador, Fisher & Paykel, JennAir, Monogram,
              Gaggenau, KitchenAid, Dacor, Viking, Asko, Fulgor Milano, Smeg, and
              other premium dishwasher brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Dishwashers</h3>
  
          <ul>
            <li>
              <strong>Drain and circulation testing:</strong> We inspect pumps,
              filters, drain hoses, check valves, and circulation components.
            </li>
  
            <li>
              <strong>Cleaning performance diagnosis:</strong> We check spray
              arms, water pressure, inlet valves, wash motors, and filter
              condition.
            </li>
  
            <li>
              <strong>Leak inspection:</strong> We inspect door seals, gaskets,
              float switches, hoses, pumps, and cabinet-leveling issues.
            </li>
  
            <li>
              <strong>Control troubleshooting:</strong> We diagnose error codes,
              sensors, user interfaces, control boards, and cycle failures.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "warming",
      title: "Warming Drawer Repair",
      heading: "Warming Drawer Repair in Los Feliz",
      img: "/cities/warming-drawer-repair.webp",
      alt: "Warming drawer repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>warming drawer repair in Los Feliz</strong> for
            built-in warming drawers, panel-matched drawers, stainless steel
            warming drawers, and high-end kitchen warming systems. These appliances
            may look simple, but they rely on precise low-temperature control,
            smooth drawer operation, and safe heating performance.
          </p>
  
          <h3>Common Warming Drawer Problems We Repair</h3>
  
          <ul>
            <li>✅ Warming drawer not heating</li>
            <li>✅ Drawer overheating</li>
            <li>✅ Temperature not staying consistent</li>
            <li>✅ Drawer stuck or not closing smoothly</li>
            <li>✅ Control panel not responding</li>
            <li>✅ Indicator light not working</li>
            <li>✅ Moisture or humidity setting problems</li>
            <li>✅ Heating element, thermostat, switch, or control failure</li>
          </ul>
  
          <h3>Warming Drawer Brands We Repair</h3>
  
          <p>
            <strong>
              Wolf, Miele, Thermador, Monogram, JennAir, Dacor, Gaggenau, Viking,
              Bosch, KitchenAid, Fulgor Milano, Bertazzoni, and other premium
              warming drawer brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Warming Drawers</h3>
  
          <ul>
            <li>
              <strong>Heating system testing:</strong> We inspect heating
              elements, thermostats, relays, wiring, and control output.
            </li>
  
            <li>
              <strong>Temperature calibration:</strong> We verify that the drawer
              reaches and maintains the correct warming range.
            </li>
  
            <li>
              <strong>Drawer glide inspection:</strong> We inspect rails, tracks,
              alignment, and closure issues.
            </li>
  
            <li>
              <strong>Control troubleshooting:</strong> We test switches, touch
              controls, lights, and electronic control systems.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "winecooler",
      title: "Wine Cooler Repair",
      heading: "Wine Cooler Repair in Los Feliz",
      img: "/cities/wine-cooler-repair.webp",
      alt: "Wine cooler repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>wine cooler repair in Los Feliz</strong> for
            built-in wine coolers, undercounter wine refrigerators, dual-zone wine
            units, column wine storage, and panel-ready wine preservation systems.
            Wine coolers require more than basic cooling — they need stable
            temperature, controlled vibration, proper airflow, and reliable door
            sealing.
          </p>
  
          <h3>Common Wine Cooler Problems We Repair</h3>
  
          <ul>
            <li>✅ Wine cooler not cooling properly</li>
            <li>✅ Temperature zones unbalanced</li>
            <li>✅ Unit running too warm or too cold</li>
            <li>✅ Excess vibration or fan noise</li>
            <li>✅ Condensation or moisture inside the unit</li>
            <li>✅ Door not sealing properly</li>
            <li>✅ Digital controls or display not working</li>
            <li>✅ Compressor, fan, thermostat, or sensor problems</li>
            <li>✅ Built-in wine cooler airflow problems</li>
          </ul>
  
          <h3>Wine Cooler Brands We Repair</h3>
  
          <p>
            <strong>
              Sub-Zero, True Residential, Fisher & Paykel, JennAir, Gaggenau,
              Miele, Thermador, Dacor, Perlick, U-Line, Monogram, Viking,
              KitchenAid, Liebherr, Vinotemp, and other premium wine refrigeration
              brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Wine Coolers</h3>
  
          <ul>
            <li>
              <strong>Temperature zone testing:</strong> We inspect sensors,
              controls, fans, evaporators, and cooling cycles in single-zone and
              dual-zone units.
            </li>
  
            <li>
              <strong>Airflow inspection:</strong> We check built-in ventilation,
              condenser access, fan operation, and cabinet restrictions.
            </li>
  
            <li>
              <strong>Vibration and noise diagnosis:</strong> We inspect fans,
              motors, compressor operation, mounting, and loose components.
            </li>
  
            <li>
              <strong>Seal and moisture review:</strong> We inspect gaskets, door
              alignment, condensation patterns, and humidity-related issues.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "winecellar",
      title: "Wine Cellar Repair",
      heading: "Wine Cellar Cooling System Repair in Los Feliz",
      img: "/cities/wine-cellar-repair.webp",
      alt: "Wine cellar cooling system repair in Los Feliz",
      description: (
        <>
          <p>
            We service{" "}
            <strong>wine cellar cooling systems in Los Feliz</strong> for
            residential wine rooms, climate-controlled wine storage, custom wine
            spaces, hillside homes, private tasting areas, and home collections. A
            wine cellar cooling system must maintain stable temperature, humidity
            balance, and quiet operation to protect wine over time.
          </p>
  
          <h3>Common Wine Cellar Problems We Service</h3>
  
          <ul>
            <li>✅ Wine cellar not cooling</li>
            <li>✅ Temperature fluctuating</li>
            <li>✅ Humidity too high or too low</li>
            <li>✅ Cooling unit running constantly</li>
            <li>✅ Fan noise or airflow problems</li>
            <li>✅ Refrigerant-related performance issues</li>
            <li>✅ Water leaks or condensation</li>
            <li>✅ Thermostat, sensor, or control failure</li>
            <li>✅ Filter, coil, or maintenance-related performance decline</li>
          </ul>
  
          <h3>Wine Cellar Cooling Brands We Service</h3>
  
          <p>
            <strong>
              WhisperKOOL, CellarPro, Breezaire, Wine Guardian, KoolR, Sub-Zero,
              True Residential, Perlick, and other residential wine cellar cooling
              and wine preservation systems.
            </strong>
          </p>
  
          <h3>How We Diagnose Wine Cellar Cooling Systems</h3>
  
          <ul>
            <li>
              <strong>Climate performance testing:</strong> We check temperature,
              humidity behavior, thermostat settings, and cooling response.
            </li>
  
            <li>
              <strong>Airflow and filter inspection:</strong> We inspect filters,
              coils, fans, vents, and blocked airflow conditions.
            </li>
  
            <li>
              <strong>Sensor and control diagnosis:</strong> We test thermostats,
              probes, control boards, wiring, and communication faults.
            </li>
  
            <li>
              <strong>System condition review:</strong> We inspect for leaks,
              condensation, noise, short cycling, and maintenance needs.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "grill",
      title: "BBQ Grill Repair",
      heading: "BBQ Grill Repair in Los Feliz",
      img: "/cities/bbq-grill-repair.webp",
      alt: "BBQ grill repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>BBQ grill repair in Los Feliz</strong> for
            built-in grills, outdoor kitchen grills, pro-style gas grills,
            freestanding grills, sear stations, rotisserie systems, and outdoor
            cooking appliances. In Los Feliz homes, grill systems may be located on
            patios, terraces, hillside entertaining areas, poolside spaces, guest
            house areas, and custom outdoor kitchens where reliable ignition, safe
            gas performance, and even heat are especially important.
          </p>
  
          <h3>Common BBQ Grill Problems We Repair</h3>
  
          <ul>
            <li>✅ Grill burners will not ignite</li>
            <li>✅ Weak flame or uneven flame</li>
            <li>✅ Grill not heating evenly</li>
            <li>✅ Ignition system failure</li>
            <li>✅ Rotisserie not working</li>
            <li>✅ Sear burner not heating correctly</li>
            <li>✅ Gas smell or gas flow issues</li>
            <li>✅ Rusted burners, grates, or heat shields</li>
            <li>✅ Control knobs, valves, or regulators failing</li>
            <li>✅ Outdoor kitchen appliance maintenance issues</li>
          </ul>
  
          <h3>BBQ Grill Brands We Repair</h3>
  
          <p>
            <strong>
              Kalamazoo, Lynx, Hestan, Viking, DCS, Alfresco, Twin Eagles, Fire
              Magic, Wolf, True Residential Outdoor, Caliber, Fisher & Paykel,
              Weber Summit, Coyote, and other premium outdoor kitchen grill brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair BBQ Grills</h3>
  
          <ul>
            <li>
              <strong>Ignition testing:</strong> We inspect igniters, electrodes,
              wiring, modules, switches, and spark response.
            </li>
  
            <li>
              <strong>Gas system inspection:</strong> We check valves, regulators,
              manifolds, burner tubes, gas flow, and flame behavior.
            </li>
  
            <li>
              <strong>Heat performance review:</strong> We inspect burners,
              ceramic briquettes, heat shields, sear stations, and temperature
              consistency.
            </li>
  
            <li>
              <strong>Outdoor condition assessment:</strong> We look for
              corrosion, grease buildup, weather exposure, worn components, and
              maintenance needs.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "pizzaoven",
      title: "Pizza Oven Repair",
      heading: "Pizza Oven Repair in Los Feliz",
      img: "/cities/pizza-oven-repair.webp",
      alt: "Pizza oven repair in Los Feliz",
      description: (
        <>
          <p>
            We service <strong>pizza ovens in Los Feliz</strong> for indoor
            gourmet kitchens, outdoor kitchens, built-in cooking areas, patios,
            terraces, hillside entertaining spaces, guest house kitchens, and
            custom outdoor living areas. Pizza ovens require high heat, stable
            temperature control, proper ignition, and safe ventilation to perform
            correctly.
          </p>
  
          <h3>Common Pizza Oven Problems We Repair</h3>
  
          <ul>
            <li>✅ Pizza oven not heating properly</li>
            <li>✅ Uneven heating or hot spots</li>
            <li>✅ Igniter not working</li>
            <li>✅ Burner or flame problems</li>
            <li>✅ Digital display or thermostat failure</li>
            <li>✅ Temperature sensor issues</li>
            <li>✅ Excess smoke or ventilation problems</li>
            <li>✅ Damaged stone, deck, or heating surface</li>
            <li>✅ Outdoor pizza oven weather-related issues</li>
          </ul>
  
          <h3>Pizza Oven Brands We Repair</h3>
  
          <p>
            <strong>
              Wolf, Kalamazoo, Lynx, Alfresco, Hestan, Fontana Forni, Gozney,
              Alfa, Coyote, Viking, DCS, and other premium indoor and outdoor
              pizza oven brands.
            </strong>
          </p>
  
          <h3>How We Diagnose and Repair Pizza Ovens</h3>
  
          <ul>
            <li>
              <strong>Heat source testing:</strong> We inspect burners, elements,
              igniters, valves, sensors, and thermostats.
            </li>
  
            <li>
              <strong>Temperature accuracy review:</strong> We verify heating
              performance, cycling behavior, and heat consistency.
            </li>
  
            <li>
              <strong>Ventilation and smoke inspection:</strong> We check airflow,
              smoke movement, venting, and installation-related issues.
            </li>
  
            <li>
              <strong>Outdoor system review:</strong> We inspect corrosion,
              weather exposure, loose components, and high-heat wear.
            </li>
          </ul>
        </>
      ),
    },
  
    {
      id: "outdoor",
      title: "Outdoor Kitchen Repair",
      heading: "Outdoor Kitchen Repair in Los Feliz",
      img: "/cities/outdoor-kitchen-repair.webp",
      alt: "Outdoor kitchen appliance repair in Los Feliz",
      description: (
        <>
          <p>
            We provide <strong>outdoor kitchen repair in Los Feliz</strong> for
            built-in grills, outdoor refrigerators, beverage centers, ice makers,
            warming drawers, pizza ovens, side burners, outdoor ventilation, and
            premium outdoor cooking systems. Los Feliz outdoor kitchens may be part
            of hillside patios, terraces, pool areas, guest houses, scenic
            entertaining spaces, and custom outdoor living areas, so reliable
            appliance performance and careful service matter.
          </p>
  
          <h3>Common Outdoor Kitchen Problems We Repair</h3>
  
          <ul>
            <li>✅ Built-in grill not igniting</li>
            <li>✅ Outdoor refrigerator not cooling</li>
            <li>✅ Outdoor ice maker not producing ice</li>
            <li>✅ Beverage center temperature problems</li>
            <li>✅ Side burner weak flame or ignition failure</li>
            <li>✅ Pizza oven not heating evenly</li>
            <li>✅ Outdoor warming drawer not warming</li>
            <li>✅ Rust, corrosion, or weather-related component wear</li>
            <li>✅ Electrical, control, sensor, or display issues</li>
            <li>✅ Outdoor kitchen appliance maintenance concerns</li>
          </ul>
  
          <h3>Outdoor Kitchen Brands We Repair</h3>
  
          <p>
            <strong>
              Kalamazoo, Lynx, Hestan, Viking, DCS, Alfresco, Twin Eagles, Fire
              Magic, Wolf, True Residential Outdoor, Caliber, Fisher & Paykel,
              Perlick, U-Line, Sub-Zero, Scotsman, Coyote, and other premium
              outdoor kitchen appliance brands.
            </strong>
          </p>
  
          <h3>How We Diagnose Outdoor Kitchen Appliances</h3>
  
          <ul>
            <li>
              <strong>Cooking appliance inspection:</strong> We test grill burners,
              igniters, valves, regulators, sear stations, side burners, and heat
              performance.
            </li>
  
            <li>
              <strong>Outdoor refrigeration diagnosis:</strong> We inspect
              compressors, fans, sensors, controls, airflow, cabinet ventilation,
              and cooling performance.
            </li>
  
            <li>
              <strong>Ice maker and beverage center testing:</strong> We inspect
              water supply, drains, pumps, temperature control, and condensation
              issues.
            </li>
  
            <li>
              <strong>Weather-related repair planning:</strong> We look for
              corrosion, moisture damage, grease buildup, wiring problems, and
              worn outdoor components.
            </li>
          </ul>
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
