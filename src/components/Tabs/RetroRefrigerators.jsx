// SEO-optimized Tabs component for brand-specific refrigerator and refrigeration repair services
// Rewritten to include only brands from the provided list that actually offer, offered, or support refrigeration products.

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "sub-zero-refrigerator-repair",
      title: "Sub-Zero Refrigerator Repair",
      heading: "Sub-Zero Refrigerator Repair",
      alt: "Sub-Zero refrigerator repair technician servicing a built-in luxury refrigerator",
      description: (
        <>
          <p>
            We provide <strong>Sub-Zero refrigerator repair</strong> for Classic Series built-in refrigerators, Designer Series integrated columns, PRO Series refrigeration, freezer columns, wine storage, refrigerator drawers, undercounter units, and ice makers. Sub-Zero refrigeration is usually more complex than a standard refrigerator because many models use dual refrigeration, advanced airflow management, sealed-system protection, evaporator thermistors, condenser monitoring, and tightly fitted custom panels.
          </p>

          <h3>Sub-Zero Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Fresh food section warming while the freezer still works, often pointing toward airflow, evaporator frost, fan, thermistor, damper, or control issues.</li>
            <li>Freezer temperature rising, slow ice production, or frost around drawers due to door gasket leaks, defrost failure, weak fans, or sealed-system decline.</li>
            <li>Service light, vacuum condenser message, or high run time caused by a dirty condenser, restricted airflow, failing condenser fan, or heat buildup above the unit.</li>
            <li>Water leaking under the refrigerator from a clogged drain, cracked fill line, ice maker overflow, water filter housing, or defrost drain issue.</li>
            <li>Wine storage zones not holding temperature because of sensor, evaporator fan, control, door seal, or cabinet ventilation problems.</li>
          </ul>

          <h3>Technician Approach for Sub-Zero</h3>
          <p>
            On Sub-Zero units, we do not guess from the symptom alone. We check condenser condition first, then compare actual compartment temperatures against sensor readings, inspect evaporator frost pattern, verify fan operation, test door gaskets and hinges, review ice and water systems, and determine whether the issue is airflow, controls, defrost, or sealed-system related. For panel-ready models, we also check panel weight, reveal, hinge tension, and door closure because a door that does not seal perfectly can look like a cooling failure.
          </p>
        </>
      )
    },
    {
      id: "thermador-refrigerator-repair",
      title: "Thermador Refrigerator Repair",
      heading: "Thermador Refrigerator Repair",
      alt: "Thermador refrigerator repair technician servicing a Freedom refrigeration column",
      description: (
        <>
          <p>
            Our <strong>Thermador refrigerator repair</strong> service covers Freedom Collection refrigerator columns, freezer columns, wine columns, bottom-freezer built-ins, undercounter refrigeration, and column installations paired with custom cabinetry. Thermador refrigeration often depends on flush installation, Home Connect controls, column pairing, precise door alignment, and moisture control systems that need to be diagnosed as part of the whole installation.
          </p>

          <h3>Thermador Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Refrigerator column too warm or inconsistent because of restricted airflow, failed evaporator fan, sensor drift, damper problems, or cabinet ventilation issues.</li>
            <li>Freezer column not reaching temperature, frost buildup, or poor ice production due to defrost faults, door sealing problems, or sealed-system weakness.</li>
            <li>Wine column temperature swings, humidity concerns, or noisy operation when the compressor, evaporator fan, or cabinet installation is not performing correctly.</li>
            <li>Open Door Assist, push-to-open, or soft-close concerns caused by hinge, panel, alignment, or electronic assist issues.</li>
            <li>Home Connect, display, control board, or temperature alarm problems that need electronic diagnosis rather than basic parts replacement.</li>
          </ul>

          <h3>Technician Approach for Thermador</h3>
          <p>
            For Thermador, we check the column as an integrated system. We verify condenser airflow, inspect the evaporator frost pattern, test thermistors, fans, control communication, door switches, hinges, and gaskets, and look closely at cabinet reveal and panel fit. On wine columns, we treat the appliance differently from a refrigerator because the target temperature range, humidity control, glass door exposure, and vibration control are different.
          </p>
        </>
      )
    },
    {
      id: "miele-refrigerator-repair",
      title: "Miele Refrigerator Repair",
      heading: "Miele Refrigerator Repair",
      alt: "Miele refrigerator repair technician servicing a MasterCool refrigerator",
      description: (
        <>
          <p>
            We provide <strong>Miele refrigerator repair</strong> for MasterCool refrigerators, freezers, built-in bottom-mount units, freestanding fridge-freezers, wine conditioning units, undercounter refrigeration, and integrated refrigeration installed in luxury kitchens. Miele refrigeration requires careful diagnosis because the platform may include MasterFresh, NoFrost, IceMaker, AirClean filtration, M Touch controls, networked electronics, and cabinet-integrated airflow.
          </p>

          <h3>Miele Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Fresh food not staying cold because of evaporator fan failure, sensor error, airflow restriction, control issue, or a cooling system that is not transferring heat correctly.</li>
            <li>Freezer icing, NoFrost problems, or repeated temperature alarms caused by defrost heater, defrost sensor, drain, fan, or door gasket failure.</li>
            <li>IceMaker not producing, producing slowly, or leaking because of water valve, inlet pressure, fill tube freeze-up, filter, sensor, or freezer temperature issue.</li>
            <li>Wine unit temperature zones drifting due to thermistor, fan, control, door seal, or ventilation problems.</li>
            <li>M Touch display, electronics, lighting, and communication issues that require model-specific testing before parts are ordered.</li>
          </ul>

          <h3>Technician Approach for Miele</h3>
          <p>
            With Miele, we separate temperature problems from control problems before replacing parts. We compare displayed temperature to measured temperature, inspect evaporator condition, test fans and sensors, verify defrost operation, check air channels, and confirm whether the compressor and sealed system are operating normally. For MasterCool and wine units, we also check installation airflow because a perfect built-in appearance can hide a heat-rejection problem.
          </p>
        </>
      )
    },
    {
      id: "liebherr-refrigerator-repair",
      title: "Liebherr Refrigerator Repair",
      heading: "Liebherr Refrigerator Repair",
      alt: "Liebherr refrigerator repair technician servicing a Monolith refrigerator column",
      description: (
        <>
          <p>
            Our <strong>Liebherr refrigerator repair</strong> service covers Monolith integrated refrigerators, freezers, wine cabinets, bottom-freezer refrigerators, side-by-side combinations, professional refrigeration, BioFresh models, NoFrost freezers, and built-in European refrigeration. Liebherr is a refrigeration-focused brand, so the repair often involves precise temperature control, airflow, humidity zones, sealed-system behavior, and sensor logic rather than simple cooling complaints.
          </p>

          <h3>Liebherr Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>BioFresh drawers freezing food, drying food, or failing to hold the proper humidity because of sensor, fan, damper, or airflow imbalance.</li>
            <li>NoFrost freezer buildup, fan noise, or temperature alarm from defrost heater, drain, evaporator sensor, fan motor, or gasket issues.</li>
            <li>Monolith column temperature drift caused by restricted condenser airflow, failed fan, thermistor error, control issue, or installation heat load.</li>
            <li>Wine cabinet zones not stabilizing because of fan, sensor, compressor cycling, glass door exposure, or cabinet ventilation problems.</li>
            <li>Ice maker not filling, overflowing, or producing slowly due to water valve, filter, freezer temperature, fill tube, or ice maker module problems.</li>
          </ul>

          <h3>Technician Approach for Liebherr</h3>
          <p>
            We diagnose Liebherr refrigeration by verifying actual compartment temperature, evaporator performance, fan speed, sensor accuracy, and condenser heat rejection. On Monolith and integrated units, we inspect panel fit, toe-kick ventilation, hinge alignment, and airflow clearance. On wine and BioFresh sections, we check the specific climate zone rather than treating the entire appliance as one refrigerator.
          </p>
        </>
      )
    },
    {
      id: "gaggenau-refrigerator-repair",
      title: "Gaggenau Refrigerator Repair",
      heading: "Gaggenau Refrigerator Repair",
      alt: "Gaggenau refrigerator repair technician servicing Vario cooling columns",
      description: (
        <>
          <p>
            We service <strong>Gaggenau refrigerator repair</strong> for Vario cooling refrigerators, freezer columns, fridge-freezer combinations, 400 Series and 200 Series cooling appliances, and Gaggenau wine climate cabinets. Gaggenau refrigeration is built around architectural integration and precise climate control, so technician work must include electronics, airflow, panel fit, hinge behavior, and installation ventilation.
          </p>

          <h3>Gaggenau Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Integrated column warming because of weak evaporator airflow, condenser restriction, fan failure, sensor drift, or control communication faults.</li>
            <li>Freezer column frost, poor ice production, or temperature alarms from defrost, door seal, drawer alignment, or sealed-system problems.</li>
            <li>Wine climate cabinet not holding separate zones, caused by fan, thermistor, glass door exposure, compressor cycling, or control failure.</li>
            <li>Door not closing flush because of heavy panel load, hinge adjustment, cabinet reveal, or obstruction at the gasket.</li>
            <li>Noise, vibration, or excessive compressor run time from installation airflow problems or condenser heat that cannot escape the cabinet.</li>
          </ul>

          <h3>Technician Approach for Gaggenau</h3>
          <p>
            On Gaggenau cooling columns, we inspect the installation first because these appliances are built into tight luxury cabinetry. We test sensors, fans, door switches, defrost components, compressor operation, condenser airflow, and wine-zone climate control. If a cabinet panel is causing poor closure or uneven reveal, we correct the mechanical issue before treating the appliance like a sealed-system failure.
          </p>
        </>
      )
    },
    {
      id: "fisher-paykel-refrigerator-repair",
      title: "Fisher & Paykel Refrigerator Repair",
      heading: "Fisher & Paykel Refrigerator Repair",
      alt: "Fisher and Paykel refrigerator repair technician servicing an integrated column refrigerator",
      description: (
        <>
          <p>
            We provide <strong>Fisher & Paykel refrigerator repair</strong> for integrated column refrigerators and freezers, French door refrigerators, quad door refrigerators, bottom-freezer refrigerators, undercounter refrigeration, wine cabinets, and panel-ready cooling installations. Fisher & Paykel refrigeration often uses ActiveSmart food care, independent zones, flush-fit cabinetry, and temperature logic that reacts to door openings and usage patterns.
          </p>

          <h3>Fisher & Paykel Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Fresh food warming while freezer remains cold due to evaporator fan, sensor, damper, air channel, or control-board issues.</li>
            <li>ActiveSmart temperature alarms, food freezing in the refrigerator, or inconsistent cooling caused by thermistor drift or airflow imbalance.</li>
            <li>Ice maker or water dispenser problems from frozen fill tubes, water valve failure, filter restriction, low pressure, or freezer temperature issues.</li>
            <li>Integrated column doors not closing correctly due to panel weight, hinge adjustment, gasket condition, or installation reveal.</li>
            <li>Wine cabinet temperature zones drifting because of sensor, fan, compressor, or cabinet ventilation concerns.</li>
          </ul>

          <h3>Technician Approach for Fisher & Paykel</h3>
          <p>
            We test Fisher & Paykel refrigerators by comparing the actual temperatures to the control readings, checking ActiveSmart sensors, inspecting evaporator frost pattern, verifying fans, testing the ice and water system, and confirming the door is sealing correctly. On integrated columns, cabinet fit is part of the diagnosis because a small alignment problem can create major cooling complaints.
          </p>
        </>
      )
    },
    {
      id: "true-residential-refrigerator-repair",
      title: "True Residential Refrigerator Repair",
      heading: "True Residential Refrigerator Repair",
      alt: "True Residential refrigerator repair technician servicing a luxury refrigerator column",
      description: (
        <>
          <p>
            Our <strong>True Residential refrigerator repair</strong> service covers full-size side-by-side refrigerators, bottom-freezer refrigerators, refrigerator columns, freezer columns, wine columns, beverage columns, undercounter refrigerators, refrigerator drawers, freezer drawers, beer dispensers, and clear ice machines. True Residential appliances have commercial DNA, heavy-duty construction, forced-air cooling, and strong sealed systems, but they still need proper airflow, clean condensers, correct installation, and accurate temperature control.
          </p>

          <h3>True Residential Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Undercounter refrigerator or drawer not getting cold because of condenser lint, blocked toe-kick airflow, fan failure, sensor issue, or compressor problem.</li>
            <li>Wine cabinet temperature drifting from glass-door heat load, sensor error, evaporator fan failure, or control calibration issues.</li>
            <li>Clear ice machine producing thin ice, wet ice, no ice, or overflowing because of water supply, drain, pump, scale buildup, hot gas valve, or bin sensor problems.</li>
            <li>Refrigerator drawers sweating, icing, or not sealing due to drawer alignment, gasket wear, overloaded drawers, or outdoor humidity exposure.</li>
            <li>Full-size column or side-by-side warming due to condenser airflow, fan motor, sealed-system, control, or door gasket issues.</li>
          </ul>

          <h3>Technician Approach for True Residential</h3>
          <p>
            We approach True Residential like premium light-commercial refrigeration inside a home. We inspect condenser cleanliness, compressor operation, condenser and evaporator fans, temperature sensors, door gaskets, drawer slides, defrost systems, and drain paths. For undercounter and outdoor-rated units, we also check enclosure ventilation and ambient heat because performance depends heavily on how the unit rejects heat.
          </p>
        </>
      )
    },
    {
      id: "viking-refrigerator-repair",
      title: "Viking Refrigerator Repair",
      heading: "Viking Refrigerator Repair",
      alt: "Viking refrigerator repair technician servicing a built-in refrigerator freezer",
      description: (
        <>
          <p>
            We service <strong>Viking refrigerator repair</strong> for built-in side-by-side refrigerator/freezers, integrated columns, freestanding French-door refrigerators, undercounter refrigerators, refrigerated drawers, wine cellars, ice machines, and outdoor refrigeration. Viking refrigeration includes older legacy platforms and newer integrated VEIL-style units, so model identification is important before diagnosis and parts ordering.
          </p>

          <h3>Viking Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Built-in side-by-side refrigerator warming while freezer remains cold because of evaporator fan, air damper, defrost, thermistor, or control issues.</li>
            <li>Freezer frost buildup, weak freezing, or ice maker problems caused by defrost faults, door seals, water valve, fill tube, or freezer temperature problems.</li>
            <li>Integrated panel-ready units not closing correctly due to hinge adjustment, gasket compression, panel weight, or cabinet reveal problems.</li>
            <li>Undercounter refrigerators and drawers running warm because of blocked ventilation, dirty condenser, failed fan, or high ambient heat.</li>
            <li>Wine cellars not holding temperature zones because of sensor, fan, compressor, door seal, or control issues.</li>
          </ul>

          <h3>Technician Approach for Viking</h3>
          <p>
            Viking repair starts with identifying the product generation because older built-ins, 3 Series freestanding models, 5 Series undercounter units, and newer integrated models do not diagnose the same way. We check airflow, defrost, condenser condition, fans, thermistors, control boards, sealed-system performance, and door closure before recommending parts.
          </p>
        </>
      )
    },
    {
      id: "monogram-refrigerator-repair",
      title: "Monogram Refrigerator Repair",
      heading: "Monogram Refrigerator Repair",
      alt: "Monogram refrigerator repair technician servicing a fully integrated refrigerator column",
      description: (
        <>
          <p>
            We provide <strong>Monogram refrigerator repair</strong> for fully integrated column refrigerators, column freezers, bottom-freezer refrigerators, built-in side-by-side refrigerators, wine reserves, beverage centers, ice makers, and premium undercounter refrigeration. Monogram refrigerators can be built around SmartHQ-connected controls, sealed column systems, heavy custom panels, and advanced ice and water features.
          </p>

          <h3>Monogram Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Integrated column warming from evaporator fan failure, sensor issues, condenser restriction, control faults, or poor cabinet ventilation.</li>
            <li>Freezer not maintaining temperature or ice maker slowing down because of defrost, water valve, fill tube, fan, or sealed-system issues.</li>
            <li>Wine reserve or beverage center temperature instability caused by glass-door heat load, fan issues, sensors, or control calibration.</li>
            <li>Door alignment problems on panel-ready units that allow warm air to enter and create frost, condensation, or long run times.</li>
            <li>Smart control, display, lighting, or temperature alarm issues that need electronic diagnosis before replacing major cooling parts.</li>
          </ul>

          <h3>Technician Approach for Monogram</h3>
          <p>
            We diagnose Monogram units by platform: full-size built-in, column, undercounter, wine, or ice. We measure actual temperatures, inspect evaporator frost pattern, test fan motors and thermistors, verify condenser airflow, inspect water and ice components, and check panel alignment. On connected models, we separate software or communication issues from actual cooling failures.
          </p>
        </>
      )
    },
    {
      id: "signature-kitchen-suite-refrigerator-repair",
      title: "Signature Kitchen Suite Refrigerator Repair",
      heading: "Signature Kitchen Suite Refrigerator Repair",
      alt: "Signature Kitchen Suite refrigerator repair technician servicing an integrated column refrigerator",
      description: (
        <>
          <p>
            Our <strong>Signature Kitchen Suite refrigerator repair</strong> service covers SKS French-door refrigerators, integrated refrigerator columns, freezer columns, wine columns, undercounter refrigerators, and panel-ready luxury refrigeration. These units often include Wi-Fi-connected controls, convertible storage zones, internal water, ice systems, linear compressor technology, and cabinet-integrated installation details.
          </p>

          <h3>Signature Kitchen Suite Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Column refrigerator not cooling evenly because of sensor drift, evaporator fan failure, control communication, or restricted cabinet airflow.</li>
            <li>Freezer column warming, frost buildup, or slow ice production due to defrost, gasket, water valve, fill tube, or sealed-system problems.</li>
            <li>French-door refrigerator not maintaining temperature in convertible drawers or fresh zones because of damper, thermistor, fan, or board issues.</li>
            <li>Wine column temperature zones drifting from fan, sensor, door seal, compressor cycling, or glass-door heat load.</li>
            <li>ThinQ-connected controls, displays, alarms, or electronic errors that need diagnosis before replacing mechanical parts.</li>
          </ul>

          <h3>Technician Approach for Signature Kitchen Suite</h3>
          <p>
            We inspect SKS refrigeration as a connected, multi-zone system. That means checking the actual compartment temperatures, sensor data, fan operation, condenser airflow, ice and water systems, defrost cycle, and door alignment. When a convertible drawer or wine section is involved, we test that zone separately instead of treating the refrigerator as one temperature box.
          </p>
        </>
      )
    },
    {
      id: "dacor-refrigerator-repair",
      title: "Dacor Refrigerator Repair",
      heading: "Dacor Refrigerator Repair",
      alt: "Dacor refrigerator repair technician servicing a luxury refrigerator column",
      description: (
        <>
          <p>
            We service <strong>Dacor refrigerator repair</strong> for Modernist and Contemporary column refrigerators, freezer columns, wine columns, French-door refrigerators, undercounter refrigeration, and older Dacor built-in cooling products. Dacor refrigeration can include PreciseCooling technology, dedicated compressors and evaporators in columns, push-to-open doors, internal water, dual ice makers, cameras, and connected controls depending on the model.
          </p>

          <h3>Dacor Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Column refrigerator warming or overcooling because of sensor, evaporator fan, control board, compressor, or airflow issues.</li>
            <li>Freezer column not freezing properly, building frost, or producing weak ice from defrost, gasket, fan, water, or sealed-system problems.</li>
            <li>Push-to-open or flush panel doors not closing properly, creating condensation, frost, and long compressor run time.</li>
            <li>Wine column zones not holding set temperature due to fan, sensor, glass door, cabinet heat, or control issues.</li>
            <li>Legacy Dacor refrigerators with parts availability concerns that need careful model and serial verification.</li>
          </ul>

          <h3>Technician Approach for Dacor</h3>
          <p>
            We identify the Dacor generation first because older Dacor refrigeration and newer Samsung-era Dacor products use different parts and diagnostics. We test fans, thermistors, defrost components, condenser airflow, ice and water valves, door assist systems, hinges, gaskets, and control communication. On columns, we also verify panel alignment and cabinet ventilation before recommending a sealed-system repair.
          </p>
        </>
      )
    },
    {
      id: "bertazzoni-refrigerator-repair",
      title: "Bertazzoni Refrigerator Repair",
      heading: "Bertazzoni Refrigerator Repair",
      alt: "Bertazzoni refrigerator repair technician servicing an Italian built-in column refrigerator",
      description: (
        <>
          <p>
            We provide <strong>Bertazzoni refrigerator repair</strong> for built-in refrigerator columns, freezer columns, wine columns, bottom-mount built-in refrigerators, French-door refrigerators, Master Series and Professional Series refrigeration. Bertazzoni refrigeration often uses side-mounted evaporator designs, lateral airflow, panel-ready fronts, FlexMode compartments, internal water, and ice makers, so the diagnostic path must match the exact platform.
          </p>

          <h3>Bertazzoni Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Refrigerator column warming or cooling unevenly because of side airflow restriction, evaporator fan failure, sensor issues, or control faults.</li>
            <li>Bottom-mount refrigerator freezer not holding temperature due to dual evaporator issues, damper failure, defrost faults, or freezer drawer sealing.</li>
            <li>FlexMode or convertible drawer not reaching the selected setting because of sensor, damper, fan, or electronic control problems.</li>
            <li>Ice maker or internal water dispenser failures caused by water valve, filter, fill line freeze-up, or freezer temperature concerns.</li>
            <li>Panel-ready doors not closing correctly because of hinge, cabinet panel, gasket, or reveal problems.</li>
          </ul>

          <h3>Technician Approach for Bertazzoni</h3>
          <p>
            Bertazzoni diagnosis starts with the exact model and series. We inspect lateral airflow, fan operation, thermistors, defrost system, condenser condition, panel fit, water supply, ice maker function, and the performance of each cooling zone. Because Bertazzoni columns, French-door units, and bottom-mount units use different layouts, we verify the design before ordering parts.
          </p>
        </>
      )
    },
    {
      id: "fulgor-milano-refrigerator-repair",
      title: "Fulgor Milano Refrigerator Repair",
      heading: "Fulgor Milano Refrigerator Repair",
      alt: "Fulgor Milano refrigerator repair technician servicing a Sofia professional refrigerator",
      description: (
        <>
          <p>
            Our <strong>Fulgor Milano refrigerator repair</strong> service covers Sofia professional refrigerators, bottom-mount refrigerators, French-door refrigerators, built-in refrigeration, wine cellars, and premium Italian refrigeration paired with Sofia cooking suites. Fulgor Milano refrigerators often involve counter-depth layouts, adjustable fresh zones, internal water, ice makers, freezer drawer systems, and wine-cellar temperature control.
          </p>

          <h3>Fulgor Milano Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Fresh zone drawer not holding the selected temperature because of thermistor, damper, fan, or control issues.</li>
            <li>French-door refrigerator warming after heavy use due to weak airflow, dirty condenser, fan failure, or poor door sealing.</li>
            <li>Freezer drawer not freezing evenly because of drawer gasket leaks, defrost problems, evaporator frost buildup, or sensor failure.</li>
            <li>Ice maker or internal water dispenser not working due to water valve, filter, fill tube, or temperature issues.</li>
            <li>Wine cellar not stabilizing because of glass door exposure, sensor drift, fan issues, or compressor cycling problems.</li>
          </ul>

          <h3>Technician Approach for Fulgor Milano</h3>
          <p>
            We diagnose Fulgor Milano refrigeration by testing compartment temperatures, drawer zones, air circulation, condenser heat rejection, defrost operation, ice and water components, and controls. We also verify model and serial information carefully because Fulgor parts can vary by series and generation.
          </p>
        </>
      )
    },
    {
      id: "blue-star-refrigerator-repair",
      title: "BlueStar Refrigerator Repair",
      heading: "BlueStar Refrigerator Repair",
      alt: "BlueStar refrigerator repair technician servicing a customizable column refrigerator",
      description: (
        <>
          <p>
            We provide <strong>BlueStar refrigerator repair</strong> for column refrigerators, column freezers, PRO built-in refrigerator/freezers, counter-depth French-door refrigerators, and customized refrigeration with color-matched panels. BlueStar refrigeration is known for customization, stainless interiors, lateral airflow, side-mounted evaporator layouts, and premium panel integration, so the repair must protect both cooling performance and finish quality.
          </p>

          <h3>BlueStar Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Column refrigerator not cooling evenly because of lateral airflow restriction, evaporator fan failure, thermistor error, or control-board issue.</li>
            <li>Column freezer warming, frost buildup, or ice maker failure due to defrost problems, gasket leaks, fan failure, or water supply issues.</li>
            <li>PRO built-in refrigerator/freezer temperature imbalance caused by dual compressor or evaporator issues, condenser airflow, or door sealing.</li>
            <li>French-door refrigerator ice and water problems from water valves, filters, fill tubes, or freezer temperature concerns.</li>
            <li>Custom color panels, handles, and stainless interiors needing careful protection during service access.</li>
          </ul>

          <h3>Technician Approach for BlueStar</h3>
          <p>
            We check BlueStar cooling from the airflow outward: evaporator frost pattern, fan performance, sensor readings, condenser condition, defrost cycle, compressor behavior, and door sealing. On customized models, we take extra care around panels and finishes, then verify the exact product line before sourcing parts.
          </p>
        </>
      )
    },
    {
      id: "thor-kitchen-refrigerator-repair",
      title: "Thor Kitchen Refrigerator Repair",
      heading: "Thor Kitchen Refrigerator Repair",
      alt: "Thor Kitchen refrigerator repair technician servicing a professional French door refrigerator",
      description: (
        <>
          <p>
            Our <strong>Thor Kitchen refrigerator repair</strong> service covers professional French-door refrigerators, counter-depth refrigerators, panel-ready refrigerators, Gordon Ramsay Series refrigeration, wine coolers, beverage centers, and ice maker-equipped models. Thor refrigeration commonly includes multi-zone cooling, flex drawers, dual freezer drawers, internal or external water and ice, and stainless pro-style finishes.
          </p>

          <h3>Thor Kitchen Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>French-door refrigerator not holding temperature because of evaporator fan problems, damper failure, dirty condenser, sensor error, or door gasket leaks.</li>
            <li>Flex drawer not changing modes properly because of thermistor, damper, fan, or control-board issues.</li>
            <li>Dual freezer drawers icing, warming, or not sliding closed correctly because of drawer alignment, gasket, defrost, or airflow problems.</li>
            <li>Ice maker and dispenser issues caused by fill tube freeze-up, water valve failure, filter restriction, or low freezer temperature performance.</li>
            <li>Wine cooler or beverage refrigerator temperature drift from fan, sensor, compressor, or door seal issues.</li>
          </ul>

          <h3>Technician Approach for Thor Kitchen</h3>
          <p>
            We test Thor refrigerators by zone. We check fresh food, freezer drawers, flex drawer, ice maker, dispenser, and wine or beverage compartments separately. Then we inspect sensors, fans, dampers, defrost operation, condenser airflow, water supply, and control response so the repair matches the exact cooling problem.
          </p>
        </>
      )
    },
    {
      id: "forno-refrigerator-repair",
      title: "Forno Refrigerator Repair",
      heading: "Forno Refrigerator Repair",
      alt: "Forno refrigerator repair technician servicing a modern French door refrigerator",
      description: (
        <>
          <p>
            We service <strong>Forno refrigerator repair</strong> for French-door refrigerators, side-by-side refrigeration, convertible refrigerator/freezer units, retro bottom-freezer refrigerators, wine and beverage coolers, ice makers, dry agers, and Forno refrigeration suites. Forno has many series and model variations, so correct model identification is especially important before parts are ordered.
          </p>

          <h3>Forno Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Convertible refrigerator/freezer not switching or holding the selected mode because of sensor, control, fan, or sealed-system issues.</li>
            <li>French-door unit warming, freezing food, or showing temperature swings due to thermistor drift, damper problems, fan failure, or door gasket leaks.</li>
            <li>Automatic ice maker not producing, leaking, or overflowing because of water valve, fill tube, filter, or freezer temperature problems.</li>
            <li>Wine and beverage cooler temperature zones drifting because of fan failure, sensor issues, glass door heat load, or compressor cycling problems.</li>
            <li>Dry ager humidity, airflow, or cooling concerns that require more careful testing than a standard refrigerator.</li>
          </ul>

          <h3>Technician Approach for Forno</h3>
          <p>
            With Forno, we verify the full model number first because similar-looking units can use different controls and parts. We test each temperature zone, inspect fans, sensors, dampers, defrost operation, condenser airflow, ice maker components, water supply, and door seals. For wine coolers and dry agers, we also check humidity, airflow, and cabinet location.
          </p>
        </>
      )
    },
    {
      id: "zline-refrigerator-repair",
      title: "ZLINE Refrigerator Repair",
      heading: "ZLINE Refrigerator Repair",
      alt: "ZLINE refrigerator repair technician servicing a built-in French door refrigerator",
      description: (
        <>
          <p>
            We provide <strong>ZLINE refrigerator repair</strong> for French-door refrigerators, built-in refrigerators, counter-depth refrigerators, standard-depth refrigerators, panel-ready refrigerators, column refrigeration, wine coolers, beverage centers, undercounter refrigerators, ice makers, and Autograph Edition refrigeration. ZLINE often combines decorative finishes with modern dual cooling, internal or external water, ice makers, and customizable handles.
          </p>

          <h3>ZLINE Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Built-in or French-door refrigerator not cooling because of fan failure, sensor error, damper issue, dirty condenser, control fault, or sealed-system problem.</li>
            <li>Bottom freezer warming, icing, or not closing properly because of drawer alignment, gasket wear, defrost failure, or airflow restriction.</li>
            <li>Dual cooling or multi-zone compartments not maintaining settings because of thermistor, fan, damper, or board problems.</li>
            <li>Water dispenser, internal dispenser, or ice maker not working due to valve, filter, fill tube, water pressure, or freezer temperature issues.</li>
            <li>Autograph Edition handles, brass accents, matte finishes, and panel-ready trim needing careful protection during service.</li>
          </ul>

          <h3>Technician Approach for ZLINE</h3>
          <p>
            We separate ZLINE cooling problems by section: fresh food, freezer, ice, water, wine, or beverage. We then test fans, dampers, sensors, defrost components, condenser airflow, controls, door seals, and water components. On Autograph Edition and custom-finish models, we protect handles, panels, and trim before accessing internal components.
          </p>
        </>
      )
    },
    {
      id: "bosch-refrigerator-repair",
      title: "Bosch Refrigerator Repair",
      heading: "Bosch Refrigerator Repair",
      alt: "Bosch refrigerator repair technician servicing an 800 Series refrigerator",
      description: (
        <>
          <p>
            Our <strong>Bosch refrigerator repair</strong> service covers Bosch French-door refrigerators, 800 Series refrigerators, Benchmark refrigeration, built-in refrigerators, bottom-freezer units, wine coolers, and Refreshment Center models. Bosch refrigeration often includes VitaFresh storage, MultiAirFlow, dual compressors and evaporators on some models, QuickIce Pro, UltraClarityPro filtration, Home Connect, and specialized beverage drawers.
          </p>

          <h3>Bosch Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Fresh food section not holding temperature because of fan, damper, sensor, control, or MultiAirFlow restriction.</li>
            <li>QuickIce Pro or ice maker not keeping up due to water pressure, filter restriction, fill tube freeze-up, freezer temperature, or ice maker module issues.</li>
            <li>VitaFresh drawers freezing or drying food because of airflow imbalance, damper operation, temperature sensor, or control calibration.</li>
            <li>Refreshment Center drawer not cooling drinks or wine correctly because of zone sensor, airflow, fan, or drawer seal problems.</li>
            <li>Home Connect, display, alarm, or control issues that require electronic testing before major component replacement.</li>
          </ul>

          <h3>Technician Approach for Bosch</h3>
          <p>
            We diagnose Bosch refrigerators by checking actual temperatures, airflow through the MultiAirFlow system, evaporator frost pattern, sensors, fans, dampers, ice maker output, water pressure, filter condition, and Home Connect or display faults. For Refreshment Center models, we test the specialty drawer separately because it has its own temperature expectations.
          </p>
        </>
      )
    },
    {
      id: "jennair-refrigerator-repair",
      title: "JennAir Refrigerator Repair",
      heading: "JennAir Refrigerator Repair",
      alt: "JennAir refrigerator repair technician servicing a column refrigerator",
      description: (
        <>
          <p>
            We provide <strong>JennAir refrigerator repair</strong> for RISE and NOIR column refrigerators, column freezers, built-in refrigerators, freestanding refrigerators, undercounter refrigeration, wine cellars, beverage centers, and panel-ready installations. JennAir refrigeration is design-heavy and often uses articulating hinges, slim reveals, precision temperature control, connected electronics, and high-end panel integration.
          </p>

          <h3>JennAir Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Column refrigerator warming or overcooling because of thermistor drift, fan failure, control issues, or restricted condenser airflow.</li>
            <li>Freezer column frost buildup, temperature alarms, or ice maker trouble due to defrost, gasket, water valve, fill tube, or fan issues.</li>
            <li>Panel-ready doors not sealing correctly because of hinge adjustment, cabinet reveal, panel weight, or gasket compression problems.</li>
            <li>Wine cellar or beverage center not holding temperature zones due to fan, sensor, compressor cycling, or glass-door heat load.</li>
            <li>Connected control, display, lighting, or door alarm issues that need electronic and mechanical checks together.</li>
          </ul>

          <h3>Technician Approach for JennAir</h3>
          <p>
            We inspect JennAir refrigeration as both a cooling appliance and a built-in design system. We check evaporator performance, fans, thermistors, defrost components, controls, ice and water systems, condenser airflow, door switches, hinges, panels, and reveals. On RISE and NOIR models, we protect specialty finishes and handles during access.
          </p>
        </>
      )
    },
    {
      id: "smeg-refrigerator-repair",
      title: "Smeg Refrigerator Repair",
      heading: "Smeg Refrigerator Repair",
      alt: "Smeg refrigerator repair technician servicing a retro-style refrigerator",
      description: (
        <>
          <p>
            Our <strong>Smeg refrigerator repair</strong> service covers FAB retro refrigerators, freestanding refrigerators, built-in refrigerators, compact refrigerators, wine coolers, and designer refrigeration. Smeg refrigerators are often chosen for their style, color, and Italian design, so the repair must protect the exterior while diagnosing cooling, thermostat, fan, gasket, and defrost issues.
          </p>

          <h3>Smeg Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Retro refrigerator not cooling properly because of thermostat failure, compressor issue, condenser restriction, evaporator problem, or door gasket leak.</li>
            <li>Excess frost in freezer compartments caused by gasket wear, door alignment, defrost issues, or frequent warm-air intrusion.</li>
            <li>Food freezing in the refrigerator section because of thermostat calibration, sensor problems, airflow imbalance, or control issues.</li>
            <li>Wine cooler temperature drift due to fan, compressor, thermistor, door seal, or glass-door heat load.</li>
            <li>Painted panels, chrome handles, decorative hinges, and retro trim needing careful protection during repair.</li>
          </ul>

          <h3>Technician Approach for Smeg</h3>
          <p>
            We test Smeg refrigeration mechanically and visually. We check thermostat or sensor response, compressor operation, condenser airflow, evaporator frost, fan behavior, door gasket contact, hinge alignment, and defrost operation. On retro models, we handle panels and trim carefully because cosmetic damage can be as frustrating as the cooling problem.
          </p>
        </>
      )
    },
    {
      id: "big-chill-refrigerator-repair",
      title: "Big Chill Refrigerator Repair",
      heading: "Big Chill Refrigerator Repair",
      alt: "Big Chill refrigerator repair technician servicing a retro refrigerator",
      description: (
        <>
          <p>
            We provide <strong>Big Chill refrigerator repair</strong> for Original Retro refrigerators, Studio fridges, Slim fridges, Retropolitan fridges, Classic refrigerators, Pro fridges, and color-customized refrigeration. Big Chill combines vintage-inspired exterior design with modern refrigeration components, so service requires attention to the cooling system and the finish at the same time.
          </p>

          <h3>Big Chill Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Fresh food section too warm because of thermostat, evaporator fan, condenser airflow, compressor, or sealed-system issues.</li>
            <li>Freezer frost, weak freezing, or water leakage from gasket leaks, defrost drain problems, door alignment, or evaporator icing.</li>
            <li>Compressor running constantly because the condenser is dirty, the door seal is weak, or the refrigerator is installed with poor clearance.</li>
            <li>Interior temperature swings caused by control calibration, air leaks, fan problems, or overloaded shelves blocking airflow.</li>
            <li>Custom colors, chrome trim, pivoting handles, and vintage-style panels needing careful protection during repair.</li>
          </ul>

          <h3>Technician Approach for Big Chill</h3>
          <p>
            We protect the finish first, then diagnose the refrigeration system. We inspect gaskets, hinges, controls, condenser airflow, compressor operation, evaporator frost pattern, drain path, and fan performance. Because Big Chill models vary by collection, we verify the exact model before sourcing replacement parts.
          </p>
        </>
      )
    },
    {
      id: "elmira-stove-works-refrigerator-repair",
      title: "Elmira Stove Works Refrigerator Repair",
      heading: "Elmira Stove Works Refrigerator Repair",
      alt: "Elmira Stove Works refrigerator repair technician servicing a Northstar retro refrigerator",
      description: (
        <>
          <p>
            Our <strong>Elmira Stove Works refrigerator repair</strong> service covers Northstar refrigerators, Heritage refrigerators, bottom-mount refrigerators, French-door counter-depth refrigerators, custom-color retro refrigerators, and vintage-inspired refrigeration. These refrigerators are design pieces as well as appliances, so the repair must preserve trim, panels, handles, and color while restoring cooling performance.
          </p>

          <h3>Elmira Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Bottom-mount refrigerator warming because of fan, thermostat, sensor, compressor, condenser airflow, or sealed-system issues.</li>
            <li>Freezer drawers icing, leaking, or not sealing due to gasket problems, defrost drain issues, drawer alignment, or evaporator frost buildup.</li>
            <li>French-door models with ice maker or water dispenser problems from valve, filter, fill tube, temperature, or dispenser control concerns.</li>
            <li>Temperature swings caused by door seal wear, control calibration, fan weakness, or poor cabinet clearance.</li>
            <li>Custom RAL colors, chrome accents, period-style handles, and specialty trim needing careful handling during service.</li>
          </ul>

          <h3>Technician Approach for Elmira</h3>
          <p>
            We inspect the cooling system while protecting the retro appearance. We test the condenser, evaporator, fans, controls, sensors, drain, door gaskets, drawer seals, and ice/water components. When trim or panels must be removed, we document the layout first so the appliance goes back together cleanly.
          </p>
        </>
      )
    },
    {
      id: "heartland-refrigerator-repair",
      title: "Heartland Refrigerator Repair",
      heading: "Heartland Legacy Refrigerator Repair",
      alt: "Heartland refrigerator repair technician servicing a legacy classic refrigerator",
      description: (
        <>
          <p>
            We provide <strong>Heartland refrigerator repair</strong> for legacy Heartland Classic refrigerators, French-door refrigerators, retro-style refrigeration, and older Heartland kitchen suites where repair still makes sense. Heartland appliances are no longer treated like a current mass-market platform, so service requires careful model identification, parts research, and honest repair planning.
          </p>

          <h3>Heartland Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Refrigerator not cooling because of thermostat, fan, compressor, relay, condenser airflow, or sealed-system decline.</li>
            <li>Freezer not freezing or building frost because of gasket wear, defrost issues, evaporator icing, or door alignment problems.</li>
            <li>Water leakage from clogged drains, door seal failure, defrost issues, or ice maker fill problems where equipped.</li>
            <li>Parts availability challenges on older models, especially trim, panels, handles, gaskets, controls, and model-specific components.</li>
            <li>Retro panels and matching kitchen-suite appearance that homeowners often want to preserve rather than replace.</li>
          </ul>

          <h3>Technician Approach for Heartland</h3>
          <p>
            With Heartland, we diagnose first and discuss repair practicality second. We check the cooling system, controls, fans, gaskets, condenser, drain, and any ice/water components, then verify whether parts are available. If a refrigerator is built around another manufacturer platform with Heartland styling, we identify the underlying model before ordering parts.
          </p>
        </>
      )
    },
    {
      id: "aga-refrigerator-repair",
      title: "AGA Refrigerator Repair",
      heading: "AGA Refrigerator Repair",
      alt: "AGA refrigerator repair technician servicing a luxury AGA fridge freezer",
      description: (
        <>
          <p>
            We service <strong>AGA refrigerator repair</strong> for AGA fridge-freezers, side-by-side refrigerators, French-style refrigeration, undercounter wine cabinets, and AGA/Rangemaster refrigeration products where installed. AGA refrigeration is less common than AGA cooking appliances in Los Angeles homes, so the repair depends heavily on model identification and correct parts sourcing.
          </p>

          <h3>AGA Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Fridge-freezer not maintaining temperature because of thermostat, sensor, fan, compressor, condenser, or sealed-system issues.</li>
            <li>Freezer frost buildup or weak freezing from door gasket leaks, defrost failure, blocked drain, or evaporator fan problems.</li>
            <li>Side-by-side or French-style refrigerator temperature imbalance caused by airflow, damper, fan, or control faults.</li>
            <li>Wine cabinet temperature problems from sensor, fan, compressor cycling, glass door exposure, or ventilation issues.</li>
            <li>Parts matching challenges because AGA refrigeration products can differ by market, generation, and platform.</li>
          </ul>

          <h3>Technician Approach for AGA</h3>
          <p>
            We begin by confirming the model and serial number, then test the refrigeration system like a technician: actual temperature, airflow, evaporator frost pattern, condenser heat rejection, fan operation, controls, defrost, door seals, and drain system. If the unit is a less common AGA platform, we verify part compatibility before recommending the repair.
          </p>
        </>
      )
    },
    {
      id: "ilve-refrigerator-repair",
      title: "ILVE Refrigerator Repair",
      heading: "ILVE Refrigerator Repair",
      alt: "ILVE refrigerator repair technician servicing Italian luxury refrigeration",
      description: (
        <>
          <p>
            We provide <strong>ILVE refrigerator repair</strong> for ILVE refrigerators, built-in refrigeration, European fridge-freezers, and ILVE cooling products where installed or imported. ILVE is better known in the U.S. for cooking appliances, but ILVE does offer refrigeration in broader product catalogs, so service requires careful product identification before repair planning.
          </p>

          <h3>ILVE Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>European fridge-freezer not cooling correctly due to thermostat, sensor, fan, compressor, condenser airflow, or sealed-system issues.</li>
            <li>Freezer frost buildup or water leakage from defrost faults, drain restriction, gasket wear, or door alignment issues.</li>
            <li>Built-in refrigerator running hot because cabinet ventilation is restricted or condenser airflow is blocked.</li>
            <li>Temperature instability caused by control calibration, sensor drift, airflow imbalance, or weak door sealing.</li>
            <li>Model-specific parts challenges on less common imported ILVE refrigeration products.</li>
          </ul>

          <h3>Technician Approach for ILVE</h3>
          <p>
            We treat ILVE refrigeration as a model-specific European appliance. We verify the appliance platform, inspect cooling performance, sensors, fans, defrost, condenser airflow, gaskets, drain system, and installation ventilation, then confirm part availability before promising a repair path.
          </p>
        </>
      )
    },
    {
      id: "asko-refrigerator-repair",
      title: "ASKO Refrigerator Repair",
      heading: "ASKO Refrigerator Repair",
      alt: "ASKO refrigerator repair technician servicing Scandinavian refrigeration",
      description: (
        <>
          <p>
            Our <strong>ASKO refrigerator repair</strong> service covers ASKO refrigeration, built-in refrigerators, fridge-freezers, wine cabinets, and Scandinavian cooling products where installed. ASKO refrigeration is more common in global and European markets than in many U.S. kitchens, so accurate model verification and parts availability are a major part of the service process.
          </p>

          <h3>ASKO Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Refrigerator compartment warming because of fan failure, sensor drift, control issue, compressor problem, or restricted airflow.</li>
            <li>Freezer icing, temperature alarms, or water leakage caused by defrost failure, drain issues, gasket wear, or evaporator fan problems.</li>
            <li>Wine cabinet not holding temperature because of fan, thermistor, compressor cycling, door seal, or ventilation problems.</li>
            <li>Built-in unit running hot due to cabinet ventilation problems or condenser airflow restriction.</li>
            <li>Imported or less common ASKO refrigeration parts requiring careful compatibility checks.</li>
          </ul>

          <h3>Technician Approach for ASKO</h3>
          <p>
            We check ASKO refrigerators by measuring temperatures, inspecting evaporator frost, testing fans and sensors, verifying condenser airflow, evaluating defrost and drain function, and confirming door sealing. Because ASKO refrigeration can vary by market, we verify the exact model before ordering parts.
          </p>
        </>
      )
    },
    {
      id: "officine-gullo-refrigerator-repair",
      title: "Officine Gullo Refrigerator Repair",
      heading: "Officine Gullo Refrigerator Repair",
      alt: "Officine Gullo refrigerator repair technician servicing bespoke luxury refrigeration",
      description: (
        <>
          <p>
            We provide <strong>Officine Gullo refrigerator repair</strong> for bespoke refrigerators, fridge-freezers, single-door refrigerators, undercounter refrigerators, wine cellars, multi-temperature wine cabinets, and custom metal luxury refrigeration. Officine Gullo refrigerators are often part of a handcrafted kitchen suite, so service must protect custom paint, brass, nickel, chrome, stainless steel, and architectural trim.
          </p>

          <h3>Officine Gullo Refrigerator Issues We Diagnose</h3>
          <ul>
            <li>Single-door refrigerator or fridge-freezer not holding temperature due to sensor, fan, compressor, condenser airflow, or sealed-system issues.</li>
            <li>Fresh drawers or BioFresh-style compartments not maintaining the correct humidity or temperature because of sensor or airflow problems.</li>
            <li>Integrated ice maker not filling, making thin ice, or leaking because of water valve, filter, fill tube, or freezer temperature problems.</li>
            <li>Wine cellar or multi-temperature wine cabinet zones drifting because of fan, sensor, compressor, glass door, or control issues.</li>
            <li>Custom metal finishes and panels requiring careful access planning before any repair begins.</li>
          </ul>

          <h3>Technician Approach for Officine Gullo</h3>
          <p>
            We document the appliance layout and finishes first. Then we test the cooling system, fans, sensors, defrost, condenser airflow, water and ice components, drawer climate control, and wine zones. If access requires removing custom trim or panels, we plan the disassembly carefully so the repair does not damage the bespoke finish.
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
