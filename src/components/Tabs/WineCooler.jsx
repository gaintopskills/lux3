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
      id: "sub-zero-wine-cooler-repair",
      title: "Sub-Zero Wine Cooler Repair",
      heading: "Sub-Zero Wine Cooler Repair",
      img: "/wine-cooler-repair/sub-zero-wine-cooler-repair.webp",
      alt: "Sub-Zero wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Sub-Zero wine cooler repair</strong> for Classic Wine Storage, Designer Wine Storage, undercounter wine-storage units, panel-ready installations, glass-door models, dual-zone systems, and legacy 400 Series wine storage. Sub-Zero wine preservation appliances are designed around stable temperatures, separate zones, humidity management, UV-resistant glass, and vibration-conscious storage, so diagnosis should protect both cooling performance and the condition of the collection.</p>
          <h3>Sub-Zero Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Classic or Designer wine-storage unit not holding the selected temperature in one or both zones</li>
            <li>✅ Dual-zone temperature imbalance, excessive cycling, fan noise, or airflow concern</li>
            <li>✅ Humidity, condensation, frost, drainage, or door-sealing issue affecting bottle storage</li>
            <li>✅ UV-resistant glass door, gasket, hinge, shelf, custom-panel, or flush-install alignment problem</li>
            <li>✅ Interior lighting, display, alarm, sensor, control-board, or connected-feature concern</li>
            <li>✅ Legacy 400 Series model requiring careful part identification and compatibility review</li>
          </ul>
          <h3>How We Fix These Sub-Zero Wine Cooler Issues</h3>
          <p>We inspect temperatures in each zone, evaporator and condenser airflow, fans, condenser condition, compressor-start components, sealed-system symptoms, drainage, frost patterns, humidity-related conditions, gaskets, hinges, glass-door fit, shelves, custom panels, sensors, wiring, controls, alarms, lighting, and connected functions where equipped. We confirm the complete model and serial information before recommending Sub-Zero wine-storage parts.</p>
        </>
      )
    },
    {
      id: "miele-wine-cooler-repair",
      title: "Miele Wine Cooler Repair",
      heading: "Miele Wine Cooler Repair",
      /*img: "/wine-cooler-repair/miele-wine-cooler-repair.webp",*/
      alt: "Miele wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Miele wine cooler repair</strong> service covers MasterCool wine-conditioning units, built-in wine refrigerators, undercounter wine refrigerators, multi-zone models, FlexiFrame bottle-storage systems, DynaCool circulation, Active AirClean filtration, SommelierSet-equipped configurations, BrilliantLight interiors, and supported connected models. Miele service should evaluate cooling stability, air circulation, filtration, rack fit, lighting, controls, and cabinetry integration together.</p>
          <h3>Miele Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ MasterCool or undercounter wine refrigerator not maintaining stable temperatures</li>
            <li>✅ DynaCool airflow, fan, sensor, or circulation issue causing uneven conditioning</li>
            <li>✅ Active AirClean filter, odor-control, humidity, or condensation concern</li>
            <li>✅ FlexiFrame rack, telescopic runner, bottle-support, door, hinge, or gasket problem</li>
            <li>✅ BrilliantLight, display, alarm, push-to-open, control, or connected-function issue</li>
            <li>✅ SommelierSet accessory area or multi-zone setting not operating as expected</li>
          </ul>
          <h3>How We Fix These Miele Wine Cooler Issues</h3>
          <p>We test each temperature zone, DynaCool airflow, fans, condenser conditions, evaporator and sealed-system symptoms, compressor-start components, drains, frost patterns, Active AirClean filtration, FlexiFrame racks, runners, gaskets, hinges, push-to-open hardware where equipped, lighting, sensors, wiring, electronic controls, alarms, and connected features.</p>
        </>
      )
    },
    {
      id: "gaggenau-wine-cooler-repair",
      title: "Gaggenau Wine Cooler Repair",
      heading: "Gaggenau Wine Cooler Repair",
      /*img: "/wine-cooler-repair/gaggenau-wine-cooler-repair.webp",*/
      alt: "Gaggenau wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Gaggenau wine cooler repair</strong> for Vario wine climate cabinets in the 400 Series, fully integrated architectural installations, multi-zone wine-storage columns, oak and anthracite-aluminum bottle trays, TFT touch displays, Home Connect functions, humidity-control systems, low-vibration cooling, charcoal filtration, and handleless push-to-open configurations. These cabinets require precise diagnosis because wine preservation and custom-kitchen integration are closely connected.</p>
          <h3>Gaggenau Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Vario wine climate cabinet not holding the selected temperature in one or more zones</li>
            <li>✅ Humidity-control, charcoal-filter, odor, condensation, or frost concern</li>
            <li>✅ Low-vibration motor, fan, compressor, or airflow issue causing noise or unstable cooling</li>
            <li>✅ Oak-and-aluminum tray, telescopic rail, door, flat-hinge, gasket, or alignment issue</li>
            <li>✅ TFT display, sensor, lighting-scenario, Home Connect, or electronic-control fault</li>
            <li>✅ Push-to-open or pull-to-open door-assist hardware not operating correctly</li>
          </ul>
          <h3>How We Fix These Gaggenau Wine Cooler Issues</h3>
          <p>We inspect each climate zone, airflow, evaporator and condenser fans, condenser condition, compressor-start and sealed-system symptoms, humidity-control conditions, charcoal filtration, frost and drainage patterns, bottle trays, hidden rails, hinges, gaskets, opening-assist hardware, lighting, sensors, wiring, TFT controls, alarms, and Home Connect-related functions.</p>
        </>
      )
    },
    {
      id: "thermador-wine-cooler-repair",
      title: "Thermador Wine Cooler Repair",
      heading: "Thermador Wine Cooler Repair",
      /*img: "/wine-cooler-repair/thermador-wine-cooler-repair.webp",*/
      alt: "Thermador wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Thermador wine cooler repair</strong> service covers Freedom Collection built-in wine columns, 18-inch and 24-inch wine-preservation units, two-zone and three-zone configurations, UV-resistant tempered-glass doors, Wenge wood bottle supports, hidden rails, open-door-assist systems, panel-ready installations, and Home Connect-enabled models. Thermador wine-column service should protect temperature accuracy and the flush architectural fit of the appliance.</p>
          <h3>Thermador Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Freedom wine column not maintaining the selected temperature in one or more independent zones</li>
            <li>✅ Cooling, airflow, fan, condenser, compressor-start, or sealed-system performance concern</li>
            <li>✅ UV-resistant glass door, gasket, hidden rail, shelf, hinge, or panel-ready alignment problem</li>
            <li>✅ Open door assist, handleless opening, lighting, display, alarm, or sensor fault</li>
            <li>✅ Home Connect, control-board, wiring, or electronic-response concern</li>
            <li>✅ Condensation, frost, drainage, or ventilation issue affecting built-in performance</li>
          </ul>
          <h3>How We Fix These Thermador Wine Cooler Issues</h3>
          <p>We test zone temperatures, airflow, fans, condenser cleanliness, evaporator and defrost-related conditions, compressor-start parts, sealed-system symptoms, drains, frost patterns, gaskets, hinges, shelves, hidden rails, panel alignment, door assist, lighting, sensors, wiring, controls, alarms, Home Connect functions, and installation ventilation.</p>
        </>
      )
    },
    {
      id: "liebherr-wine-cooler-repair",
      title: "Liebherr Wine Cooler Repair",
      heading: "Liebherr Wine Cooler Repair",
      /*img: "/wine-cooler-repair/liebherr-wine-cooler-repair.webp",*/
      alt: "Liebherr wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Liebherr wine cooler repair</strong> for Vinidor wine refrigerators, built-in wine cabinets, undercounter wine-storage units, freestanding wine fridges, one-zone, two-zone, and three-zone configurations, reversible-door models, UV-protected glass doors, temperature-protection systems, and supported electronic controls. Liebherr service should distinguish between long-term cellaring and serving-temperature concerns before parts are replaced.</p>
          <h3>Liebherr Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Vinidor cabinet or wine fridge not maintaining temperature in one or more zones</li>
            <li>✅ TempProtect, sensor, fan, airflow, condenser, or compressor concern</li>
            <li>✅ Door alarm, child-lock, display, lighting, or electronic-control issue</li>
            <li>✅ Reversible hinge, glass door, gasket, shelf, bottle-rack, or alignment problem</li>
            <li>✅ Condensation, frost, drainage, or humidity-related condition</li>
            <li>✅ Built-in ventilation or undercounter installation issue affecting cooling</li>
          </ul>
          <h3>How We Fix These Liebherr Wine Cooler Issues</h3>
          <p>We inspect each storage zone, temperatures, airflow, fans, condenser condition, compressor-start parts, sealed-system symptoms, drains, frost patterns, sensors, TempProtect-related functions where equipped, alarms, display, locks, lighting, hinges, gaskets, shelves, bottle racks, and built-in clearances.</p>
        </>
      )
    },
    {
      id: "true-residential-wine-cooler-repair",
      title: "True Residential Wine Cooler Repair",
      heading: "True Residential Wine Cooler Repair",
      /*img: "/wine-cooler-repair/true-residential-wine-cooler-repair.webp",*/
      alt: "True Residential wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>True Residential wine cooler repair</strong> service covers full-size dual-zone wine columns, 15-inch and 24-inch undercounter wine cabinets, dual-zone undercounter models, indoor and outdoor-rated units, glass-door and overlay-panel configurations, custom-color installations, glide-out racks, vibration-dampening storage, and professional-style refrigeration systems. True wine storage requires careful attention to airflow and condenser maintenance.</p>
          <h3>True Residential Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Wine column or undercounter cabinet not holding temperature in one or both zones</li>
            <li>✅ Condenser buildup, fan, thermostat, sensor, compressor-start, or airflow restriction</li>
            <li>✅ Outdoor-rated wine cabinet struggling during high ambient temperatures</li>
            <li>✅ Glide-out rack, vibration-dampening shelf, hinge, gasket, lock, or door-alignment issue</li>
            <li>✅ Lighting, alarm, wiring, control, or home-security connection concern where equipped</li>
            <li>✅ Custom-panel, cabinet-clearance, or ventilation issue affecting performance</li>
          </ul>
          <h3>How We Fix These True Residential Wine Cooler Issues</h3>
          <p>We inspect zone temperatures, front ventilation, condenser cleanliness, fans, thermostat or electronic controls, sensors, compressor-start components, sealed-system symptoms, drains, frost patterns, glide-out racks, vibration-dampening hardware, glass-door seals, hinges, locks, custom panels, lighting, alarms, wiring, and indoor or outdoor installation conditions.</p>
        </>
      )
    },
    {
      id: "fisher-paykel-wine-cooler-repair",
      title: "Fisher & Paykel Wine Cooler Repair",
      heading: "Fisher & Paykel Wine Cooler Repair",
      /*img: "/wine-cooler-repair/fisher-paykel-wine-cooler-repair.webp",*/
      alt: "Fisher & Paykel wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Fisher & Paykel wine cooler repair</strong> for Series 11 integrated column wine cabinets, Series 9 integrated wine cabinets, flush panel-ready installations, two-zone models, Red, White, Sparkling, and Cellar modes, low-vibration storage systems, adjustable racks, and precision temperature controls. Fisher & Paykel wine-cabinet repair should evaluate both zones and the integrated cabinetry fit.</p>
          <h3>Fisher & Paykel Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Integrated wine cabinet not holding the selected Red, White, Sparkling, or Cellar setting</li>
            <li>✅ One independent temperature zone warmer or colder than the other</li>
            <li>✅ Low-vibration cooling, fan, airflow, condenser, sensor, or compressor concern</li>
            <li>✅ Flush-install door, gasket, hinge, panel-ready alignment, or opening issue</li>
            <li>✅ Bottle rack, shelf, rail, lighting, display, alarm, or electronic-control problem</li>
            <li>✅ Condensation, drainage, frost, or ventilation condition affecting performance</li>
          </ul>
          <h3>How We Fix These Fisher & Paykel Wine Cooler Issues</h3>
          <p>We inspect both storage zones, mode settings, temperature sensors, airflow, fans, condenser condition, compressor-start parts, sealed-system symptoms, drainage, frost patterns, gaskets, hinges, integrated panels, racks, rails, lighting, controls, alarms, wiring, and the installation clearances required for flush integration.</p>
        </>
      )
    },
    {
      id: "jennair-wine-cooler-repair",
      title: "JennAir Wine Cooler Repair",
      heading: "JennAir Wine Cooler Repair",
      /*img: "/wine-cooler-repair/jennair-wine-cooler-repair.webp",*/
      alt: "JennAir wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>JennAir wine cooler repair</strong> service covers 24-inch built-in wine columns, RISE and NOIR undercounter wine cellars, panel-ready configurations, dual-zone temperature controls, Obsidian interiors, UV-resistant thermal glass, Marquee Lighting, smooth-close wine racks, presentation platforms, and custom-kitchen installations. JennAir wine storage combines luxury display features with precise cooling and should be diagnosed as a complete system.</p>
          <h3>JennAir Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ JennAir wine column or undercounter cellar not maintaining temperature in one or both zones</li>
            <li>✅ Smooth-close wine rack, presentation platform, shelf, hinge, gasket, or panel-ready alignment issue</li>
            <li>✅ Obsidian interior lighting, Marquee Lighting, display, alarm, sensor, or electronic-control concern</li>
            <li>✅ UV-resistant glass-door sealing, condensation, drainage, or frost problem</li>
            <li>✅ Fan, airflow, condenser, compressor-start, or sealed-system performance issue</li>
            <li>✅ RISE, NOIR, or panel-ready installation detail affecting door operation or ventilation</li>
          </ul>
          <h3>How We Fix These JennAir Wine Cooler Issues</h3>
          <p>We test both temperature zones, sensors, airflow, fans, condenser condition, compressor-start components, sealed-system symptoms, drainage, frost patterns, glass-door sealing, gaskets, hinges, racks, rails, presentation hardware, panel alignment, lighting, controls, alarms, wiring, and built-in ventilation.</p>
        </>
      )
    },
    {
      id: "signature-kitchen-suite-wine-cooler-repair",
      title: "Signature Kitchen Suite Wine Cooler Repair",
      heading: "Signature Kitchen Suite Wine Cooler Repair",
      /*img: "/wine-cooler-repair/signature-kitchen-suite-wine-cooler-repair.webp",*/
      alt: "Signature Kitchen Suite wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Signature Kitchen Suite wine cooler repair</strong> for column wine refrigerators, integrated wine-column installations, multi-zone preservation systems, panel-ready configurations, connected controls, interior lighting, bottle racks, and luxury refrigeration walls. Signature Kitchen Suite wine-column service should account for cooling performance, multiple storage zones, electronics, and cabinetry alignment.</p>
          <h3>Signature Kitchen Suite Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Column wine refrigerator not maintaining stable temperatures in one or more zones</li>
            <li>✅ Airflow, fan, condenser, compressor-start, or sealed-system condition affecting cooling</li>
            <li>✅ Bottle rack, shelf, rail, hinge, gasket, or custom-panel alignment problem</li>
            <li>✅ Display, alarm, sensor, interior lighting, wiring, or connected-control issue</li>
            <li>✅ Condensation, frost, drainage, or door-sealing concern</li>
            <li>✅ Integrated column ventilation or adjacent-appliance installation issue</li>
          </ul>
          <h3>How We Fix These Signature Kitchen Suite Wine Cooler Issues</h3>
          <p>We inspect each storage zone, sensors, airflow, fans, condenser cleanliness, compressor-start components, sealed-system symptoms, drains, frost patterns, racks, rails, hinges, gaskets, custom panels, lighting, alarms, wiring, electronic controls, connected functions, and installation clearances.</p>
        </>
      )
    },
    {
      id: "dacor-wine-cooler-repair",
      title: "Dacor Wine Cooler Repair",
      heading: "Dacor Wine Cooler Repair",
      /*img: "/wine-cooler-repair/dacor-wine-cooler-repair.webp",*/
      alt: "Dacor wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Dacor wine cooler repair</strong> service covers 24-inch undercounter wine cellars, SteelCool interiors, gliding shelves, Triple-Pane Glass doors, field-reversible hinge installations, discreet touch controls, LED 3D Lighting, and supported built-in wine-dispensing systems with temperature-controlled zones. Dacor wine-storage repair should separate cooling issues from door, display, shelf, and specialty dispensing concerns.</p>
          <h3>Dacor Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Undercounter wine cellar not maintaining the selected storage temperature</li>
            <li>✅ SteelCool interior airflow, condenser, fan, sensor, or compressor concern</li>
            <li>✅ Gliding shelf, rack, reversible hinge, gasket, or Triple-Pane Glass door issue</li>
            <li>✅ LED 3D Lighting, discreet touch controls, alarm, display, or wiring fault</li>
            <li>✅ Built-in wine dispenser not cooling, sealing, dispensing, or preserving correctly where equipped</li>
            <li>✅ Argon-gas, easy-seal, bottle-height, touch-control, or dispensing-system concern on supported wine dispensers</li>
          </ul>
          <h3>How We Fix These Dacor Wine Cooler Issues</h3>
          <p>We inspect operating temperatures, airflow, condenser, fans, compressor-start parts, sealed-system symptoms, drainage, frost patterns, shelves, racks, hinges, gaskets, glass-door fit, lighting, sensors, touch controls, and wiring. For supported Dacor wine dispensers, we also evaluate temperature zones, sealing hardware, controls, dispensing components, and model-specific preservation parts.</p>
        </>
      )
    },
    {
      id: "monogram-wine-cooler-repair",
      title: "Monogram Wine Cooler Repair",
      heading: "Monogram Wine Cooler Repair",
      /*img: "/wine-cooler-repair/monogram-wine-cooler-repair.webp",*/
      alt: "Monogram wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Monogram wine cooler repair</strong> for current and legacy undercounter wine reserves, panel-ready installations, dual-zone wine-storage models, walnut or wood-front racks, digital-temperature controls, interior lighting, and custom bar or kitchen cabinetry. Monogram introduced a newer panel-ready dual-zone undercounter wine reserve while many homes still contain earlier ZDWI and ZDWR models, so correct model identification is essential.</p>
          <h3>Monogram Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Current or legacy Monogram wine reserve not maintaining the selected temperature</li>
            <li>✅ One temperature zone warmer or colder than the other on dual-zone models</li>
            <li>✅ Walnut or wood-front shelf, rack glide, hinge, gasket, or panel-ready door issue</li>
            <li>✅ Interior lighting, digital display, sensor, control-board, or wiring concern</li>
            <li>✅ Condenser, fan, compressor-start, airflow, frost, or drainage problem</li>
            <li>✅ Legacy ZDWI or ZDWR model requiring careful parts-compatibility review</li>
          </ul>
          <h3>How We Fix These Monogram Wine Cooler Issues</h3>
          <p>We confirm the complete Monogram model number and inspect temperature zones, sensors, airflow, condenser condition, fans, compressor-start parts, sealed-system symptoms, drains, frost patterns, racks, runners, hinges, gaskets, custom panels, lighting, display, controls, and wiring. For legacy models, we review compatible service parts before recommending repair.</p>
        </>
      )
    },
    {
      id: "viking-wine-cooler-repair",
      title: "Viking Wine Cooler Repair",
      heading: "Viking Wine Cooler Repair",
      /*img: "/wine-cooler-repair/viking-wine-cooler-repair.webp",*/
      alt: "Viking wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Viking wine cooler repair</strong> service covers 5 Series 24-inch panel-ready dual-zone wine cellars, glass-door undercounter configurations, built-in bar installations, digital controls, dynamic cooling, door alarms, wine racks, and supported legacy Viking wine-storage models. Viking wine cellar repair should evaluate both temperature zones, ventilation, shelving, and panel-ready alignment.</p>
          <h3>Viking Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Viking dual-zone wine cellar not maintaining separate red and white wine temperatures</li>
            <li>✅ Dynamic cooling, fan, condenser, sensor, or compressor-start concern</li>
            <li>✅ Panel-ready door, glass door, gasket, hinge, shelf, or rack-alignment issue</li>
            <li>✅ Digital-control, alarm, lighting, wiring, or temperature-display fault</li>
            <li>✅ Condensation, frost, drainage, or cabinet-ventilation concern</li>
            <li>✅ Legacy wine-cellar model requiring correct replacement-part identification</li>
          </ul>
          <h3>How We Fix These Viking Wine Cooler Issues</h3>
          <p>We inspect temperatures in both zones, airflow, condenser cleanliness, fans, sensors, compressor-start components, sealed-system symptoms, drains, frost patterns, shelves, racks, gaskets, hinges, glass-door fit, panel alignment, alarms, lighting, digital controls, wiring, and undercounter ventilation.</p>
        </>
      )
    },
    {
      id: "perlick-wine-cooler-repair",
      title: "Perlick Wine Cooler Repair",
      heading: "Perlick Wine Cooler Repair",
      /*img: "/wine-cooler-repair/perlick-wine-cooler-repair.webp",*/
      alt: "Perlick wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Perlick wine cooler repair</strong> for Signature Series wine reserves, dual-zone undercounter wine reserves, shallow-depth models, Marine and Coastal configurations, residential and commercial undercounter systems, refrigerator-and-wine combinations, glass-door units, panel-ready installations, and vibration-free full-extension shelves. Perlick service should account for powerful front-venting refrigeration and installation environment.</p>
          <h3>Perlick Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Perlick wine reserve not holding temperature in one or both zones</li>
            <li>✅ Front-venting airflow, condenser buildup, fan, compressor-start, or sensor concern</li>
            <li>✅ Marine or Coastal wine reserve developing corrosion, exposure, sealing, or ventilation issues</li>
            <li>✅ Full-extension shelf, rack glide, glass door, gasket, hinge, lock, or panel-ready alignment problem</li>
            <li>✅ Digital control, display, alarm, wiring, or lighting issue</li>
            <li>✅ Shallow-depth or combination refrigerator-wine configuration not cooling correctly</li>
          </ul>
          <h3>How We Fix These Perlick Wine Cooler Issues</h3>
          <p>We inspect both zones, front ventilation, condenser condition, fans, sensors, compressor-start parts, sealed-system symptoms, drains, frost patterns, full-extension shelves, rack glides, glass-door seals, hinges, locks, custom panels, lighting, controls, wiring, and indoor, outdoor, marine, or coastal installation conditions.</p>
        </>
      )
    },
    {
      id: "u-line-wine-cooler-repair",
      title: "U-Line Wine Cooler Repair",
      heading: "U-Line Wine Cooler Repair",
      /*img: "/wine-cooler-repair/u-line-wine-cooler-repair.webp",*/
      alt: "U-Line wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>U-Line wine cooler repair</strong> service covers 5 Class wine refrigerators, 3000 Series dual-zone wine refrigerators, Wine Captain models, built-in and freestanding installations, panel-ready configurations, convection cooling, variable-speed compressor systems, U-Adjust interiors, full-extension wine racks, digital touch controls, and legacy undercounter wine-storage units.</p>
          <h3>U-Line Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ U-Line wine refrigerator or Wine Captain not maintaining the selected temperature</li>
            <li>✅ Dual-zone model not cooling evenly between compartments</li>
            <li>✅ Convection-cooling fan, variable-speed compressor, condenser, sensor, or airflow issue</li>
            <li>✅ U-Adjust shelf, full-extension rack, articulating hinge, gasket, or panel-ready alignment concern</li>
            <li>✅ Digital touchpad, LED lighting, alarm, wiring, or control-board fault</li>
            <li>✅ Legacy U-Line model requiring careful parts identification or discontinued-part review</li>
          </ul>
          <h3>How We Fix These U-Line Wine Cooler Issues</h3>
          <p>We inspect temperatures, convection airflow, fans, condenser cleanliness, variable-speed compressor symptoms, start components where applicable, sensors, drains, frost patterns, racks, U-Adjust interior parts, hinges, gaskets, custom panels, digital controls, LEDs, alarms, wiring, and built-in clearances. We verify model and serial information before selecting U-Line parts.</p>
        </>
      )
    },
    {
      id: "marvel-wine-cooler-repair",
      title: "Marvel Wine Cooler Repair",
      heading: "Marvel Wine Cooler Repair",
      /*img: "/wine-cooler-repair/marvel-wine-cooler-repair.webp",*/
      alt: "Marvel wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Marvel wine cooler repair</strong> for Professional built-in single-zone and dual-zone wine refrigerators, 15-inch and 24-inch undercounter units, dual-zone wine-and-beverage centers, panel-ready models, smooth-glide racks, BrightShield-related lighting, vibration-neutralization systems, reversible soft-close doors, and indoor or outdoor undercounter configurations.</p>
          <h3>Marvel Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Marvel wine refrigerator or wine-and-beverage center not maintaining temperature</li>
            <li>✅ One independent compartment warmer or colder than the other on dual-zone models</li>
            <li>✅ Vibration-neutralization, condenser, fan, sensor, compressor-start, or airflow concern</li>
            <li>✅ Smooth-glide rack, reversible soft-close hinge, gasket, glass door, or panel-ready issue</li>
            <li>✅ BrightShield or interior-lighting, control, alarm, display, or wiring fault</li>
            <li>✅ Built-in ventilation or outdoor ambient condition affecting cooling</li>
          </ul>
          <h3>How We Fix These Marvel Wine Cooler Issues</h3>
          <p>We inspect each storage zone, airflow, fans, condenser condition, compressor-start components, sealed-system symptoms, sensors, drainage, frost patterns, vibration-control conditions, smooth-glide racks, hinges, gaskets, glass doors, custom panels, lighting, controls, alarms, wiring, and installation ventilation.</p>
        </>
      )
    },
    {
      id: "hestan-outdoor-wine-cooler-repair",
      title: "Hestan Outdoor Wine Cooler Repair",
      heading: "Hestan Outdoor Wine Cooler Repair",
      /*img: "/wine-cooler-repair/hestan-outdoor-wine-cooler-repair.webp",*/
      alt: "Hestan Outdoor wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Hestan Outdoor wine cooler repair</strong> service covers 24-inch outdoor dual-zone refrigerators with wine storage, UV-coated glass-door models, full-extension wine racks, outdoor-kitchen installations, stainless-steel and signature-color configurations, and supported Hestan wine-refrigeration products. Outdoor wine storage requires special attention to ambient heat, ventilation, weather exposure, and door sealing.</p>
          <h3>Hestan Outdoor Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Outdoor dual-zone refrigerator with wine storage not holding red or white wine temperature</li>
            <li>✅ High ambient heat, blocked ventilation, condenser buildup, fan, or compressor concern</li>
            <li>✅ UV-coated glass door, gasket, hinge, handle, lock, or alignment issue</li>
            <li>✅ Full-extension wine rack, shelf, drawer, or interior-lighting concern</li>
            <li>✅ Digital control, sensor, wiring, or alarm fault</li>
            <li>✅ Salt-air, moisture, weather exposure, or outdoor-cabinet installation issue</li>
          </ul>
          <h3>How We Fix These Hestan Outdoor Wine Cooler Issues</h3>
          <p>We inspect temperatures in both zones, ambient conditions, intake and exhaust ventilation, condenser cleanliness, fans, sensors, compressor-start components, sealed-system symptoms, drains, frost patterns, glass-door sealing, hinges, racks, lighting, controls, wiring, and outdoor-kitchen clearances.</p>
        </>
      )
    },
    {
      id: "kalamazoo-outdoor-wine-cooler-repair",
      title: "Kalamazoo Outdoor Wine Cooler Repair",
      heading: "Kalamazoo Outdoor Wine Cooler Repair",
      /*img: "/wine-cooler-repair/kalamazoo-outdoor-wine-cooler-repair.webp",*/
      alt: "Kalamazoo Outdoor wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Kalamazoo Outdoor wine cooler repair</strong> for outdoor wine chillers, Arcadia and Signature Series wine-storage configurations, 15-inch and 24-inch undercounter installations, single-zone and dual-zone models, UV-protected glass doors, full-extension shelves, variable-speed compressor systems, marine-grade installations, and luxury outdoor kitchens.</p>
          <h3>Kalamazoo Outdoor Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Outdoor wine chiller not holding temperature in one or both zones</li>
            <li>✅ Variable-speed compressor, fan, condenser, sensor, or airflow concern</li>
            <li>✅ UV-protected glass door, gasket, hinge, lock, or weather-sealing issue</li>
            <li>✅ Full-extension shelf, bottle-support, drawer, or internal-rack problem</li>
            <li>✅ Digital control, lighting, alarm, or wiring fault</li>
            <li>✅ Marine-grade, coastal, outdoor-island, or high-ambient-heat installation issue</li>
          </ul>
          <h3>How We Fix These Kalamazoo Outdoor Wine Cooler Issues</h3>
          <p>We inspect zone temperatures, ambient exposure, intake and exhaust airflow, condenser condition, variable-speed compressor symptoms, fans, sensors, drainage, frost patterns, glass-door sealing, gaskets, hinges, locks, full-extension shelves, bottle supports, lighting, digital controls, wiring, marine-grade conditions, and outdoor-kitchen clearances.</p>
        </>
      )
    },
    {
      id: "lynx-outdoor-wine-cooler-repair",
      title: "Lynx Outdoor Wine Cooler Repair",
      heading: "Lynx Outdoor Wine Cooler Repair",
      /*img: "/wine-cooler-repair/lynx-outdoor-wine-cooler-repair.webp",*/
      alt: "Lynx Outdoor wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Lynx Outdoor wine cooler repair</strong> service covers Professional 15-inch outdoor wine cellars, built-in outdoor-kitchen installations, electronic controls, glass-door units, blue interior lighting, full-extension gliding shelves, bottle racks, door locks, quiet-cooling systems, and supported Lynx outdoor refrigeration configurations.</p>
          <h3>Lynx Outdoor Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Lynx outdoor wine cellar not maintaining the selected temperature</li>
            <li>✅ Condenser buildup, outdoor heat, airflow restriction, fan, sensor, or compressor issue</li>
            <li>✅ Full-extension shelf, rack, door lock, hinge, gasket, or glass-door alignment concern</li>
            <li>✅ Blue interior lighting, electronic control, display, or wiring fault</li>
            <li>✅ Noise, vibration, moisture, drainage, or frost concern</li>
            <li>✅ Outdoor-island ventilation, weather exposure, or built-in cutout issue</li>
          </ul>
          <h3>How We Fix These Lynx Outdoor Wine Cooler Issues</h3>
          <p>We inspect temperature performance, ambient heat, airflow, condenser cleanliness, fans, sensors, compressor-start parts, sealed-system symptoms, drains, frost patterns, shelves, racks, locks, hinges, gaskets, glass-door fit, blue lighting, electronic controls, wiring, and outdoor-kitchen ventilation.</p>
        </>
      )
    },
    {
      id: "vinotemp-wine-cooler-repair",
      title: "Vinotemp Wine Cooler Repair",
      heading: "Vinotemp Wine Cooler Repair",
      /*img: "/wine-cooler-repair/vinotemp-wine-cooler-repair.webp",*/
      alt: "Vinotemp wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Vinotemp wine cooler repair</strong> for Connoisseur Series wine coolers, Designer Series models, Butler Series wine-and-beverage centers, freestanding and built-in units, compact and large-capacity configurations, compressor-based and supported thermoelectric coolers, single-zone and dual-zone systems, garage wine coolers, front-vented cabinets, digital controls, and specialty racking.</p>
          <h3>Vinotemp Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Vinotemp wine cooler not cooling or one dual-zone compartment running too warm</li>
            <li>✅ Compressor-based or thermoelectric cooling system cycling, noisy, or underperforming</li>
            <li>✅ Front-exhaust airflow, condenser, fan, heat-sink, sensor, or ventilation concern</li>
            <li>✅ Ouzo-style rack, gliding shelf, door, gasket, hinge, lock, or glass-panel problem</li>
            <li>✅ Digital control, LED display, BioBlu lighting, alarm, or wiring issue</li>
            <li>✅ Garage, built-in, freestanding, or large-capacity installation condition affecting operation</li>
          </ul>
          <h3>How We Fix These Vinotemp Wine Cooler Issues</h3>
          <p>We identify the exact Vinotemp platform and test temperatures, both zones where equipped, compressor or thermoelectric components, fans, heat sinks where applicable, condenser condition, airflow, front ventilation, sensors, drains, frost patterns, racks, glides, gaskets, hinges, locks, glass doors, lighting, controls, and wiring.</p>
        </>
      )
    },
    {
      id: "eurocave-wine-cooler-repair",
      title: "EuroCave Wine Cooler Repair",
      heading: "EuroCave Wine Cooler Repair",
      /*img: "/wine-cooler-repair/eurocave-wine-cooler-repair.webp",*/
      alt: "EuroCave wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>EuroCave wine cooler repair</strong> service covers French-made maturing cabinets, serving cabinets, multi-purpose wine cabinets, Pure collection models, Compact installations, freestanding and integrated wine cellars, humidity-controlled storage, UV-protected cabinets, vibration-conscious cooling, charcoal filtration, bottle racks, and cellar-style preservation systems. EuroCave service should be based on the cabinet's intended purpose: aging, serving, or multi-temperature storage.</p>
          <h3>EuroCave Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ EuroCave cabinet not holding the selected maturing or serving temperature</li>
            <li>✅ Humidity level, condensation, charcoal-filter, odor, or ventilation concern</li>
            <li>✅ Compressor, fan, sensor, airflow, heating, or cooling issue causing unstable cabinet conditions</li>
            <li>✅ UV-protected door, gasket, hinge, shelf, sliding rack, or bottle-support problem</li>
            <li>✅ Display, alarm, thermostat, lighting, lock, or electronic-control issue</li>
            <li>✅ Integrated-installation or room-temperature condition affecting performance</li>
          </ul>
          <h3>How We Fix These EuroCave Wine Cooler Issues</h3>
          <p>We confirm whether the cabinet is intended for maturing, serving, or multi-purpose storage, then inspect temperature and humidity conditions, airflow, fans, condenser, compressor-start parts, heating components where applicable, charcoal filtration, drains, door sealing, hinges, racks, shelves, sensors, thermostat, display, alarms, lighting, locks, wiring, and installation environment.</p>
        </>
      )
    },
    {
      id: "zephyr-wine-cooler-repair",
      title: "Zephyr Wine Cooler Repair",
      heading: "Zephyr Wine Cooler Repair",
      /*img: "/wine-cooler-repair/zephyr-wine-cooler-repair.webp",*/
      alt: "Zephyr wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Zephyr wine cooler repair</strong> for Presrv single-zone wine coolers, dual-zone wine coolers, full-size panel-ready wine coolers, undercounter installations, wine-and-beverage combinations, black-wood racks, digital controls, LED lighting, R600a refrigeration systems, and supported indoor built-in models. Zephyr Presrv diagnosis should separate zone-control concerns from ventilation, shelving, and electronic issues.</p>
          <h3>Zephyr Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Presrv wine cooler not holding temperature in one or both zones</li>
            <li>✅ Dual evaporator, fan, condenser, sensor, compressor-start, or airflow concern where equipped</li>
            <li>✅ Full-extension black-wood rack, shelf, hinge, gasket, or panel-ready alignment issue</li>
            <li>✅ Digital control, LED lighting, display, alarm, or wiring fault</li>
            <li>✅ Condensation, frost, drainage, or door-sealing concern</li>
            <li>✅ Indoor built-in ventilation or cabinet-clearance issue affecting performance</li>
          </ul>
          <h3>How We Fix These Zephyr Wine Cooler Issues</h3>
          <p>We inspect zone temperatures, airflow, evaporator and condenser fans, condenser cleanliness, compressor-start components, sealed-system symptoms, sensors, drainage, frost patterns, racks, shelves, hinges, gaskets, custom panels, lighting, digital controls, alarms, wiring, and built-in ventilation.</p>
        </>
      )
    },
    {
      id: "newair-wine-cooler-repair",
      title: "Newair Wine Cooler Repair",
      heading: "Newair Wine Cooler Repair",
      /*img: "/wine-cooler-repair/newair-wine-cooler-repair.webp",*/
      alt: "Newair wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Newair wine cooler repair</strong> service covers compact countertop wine fridges, built-in undercounter units, freestanding wine refrigerators, Shadow Series models, single-zone and dual-zone coolers, high-capacity cabinets, compressor-based systems, supported thermoelectric models, beechwood shelves, digital thermostats, UV-protected glass doors, and wine-and-beverage configurations.</p>
          <h3>Newair Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Newair wine fridge not cooling, cycling excessively, or drifting from the selected temperature</li>
            <li>✅ One compartment not cooling correctly on a dual-zone unit</li>
            <li>✅ Compressor, thermoelectric module, fan, heat sink, condenser, sensor, or airflow concern</li>
            <li>✅ Beechwood shelf, rack, hinge, gasket, handle, or UV-protected glass-door problem</li>
            <li>✅ Digital thermostat, display, LED lighting, control, or wiring issue</li>
            <li>✅ Built-in versus freestanding ventilation requirement not being met</li>
          </ul>
          <h3>How We Fix These Newair Wine Cooler Issues</h3>
          <p>We identify whether the Newair model uses compressor or thermoelectric cooling and inspect temperatures, zones, fans, heat sinks where applicable, condenser condition, compressor-start components, airflow, sensors, drains, frost patterns, shelves, racks, hinges, gaskets, glass doors, controls, LEDs, wiring, and installation clearances.</p>
        </>
      )
    },
    {
      id: "avallon-wine-cooler-repair",
      title: "Avallon Wine Cooler Repair",
      heading: "Avallon Wine Cooler Repair",
      /*img: "/wine-cooler-repair/avallon-wine-cooler-repair.webp",*/
      alt: "Avallon wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Avallon wine cooler repair</strong> for 15-inch and 24-inch built-in wine coolers, single-zone and dual-zone models, left-hinge and right-hinge configurations, undercounter installations, compressor-cooled systems, touch controls, wooden shelves, Low-E argon-filled double-pane glass doors, interior LED lighting, and freestanding applications where supported.</p>
          <h3>Avallon Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Avallon wine cooler not maintaining temperature in one or both zones</li>
            <li>✅ Compressor, condenser, fan, sensor, or front-ventilation concern</li>
            <li>✅ Wooden shelf, bottle rack, hinge, gasket, lock, handle, or glass-door alignment problem</li>
            <li>✅ Touch control, display, selectable LED-lighting, alarm, or wiring issue</li>
            <li>✅ Condensation, frost, drainage, or door-sealing concern</li>
            <li>✅ Built-in cutout or adjacent-cabinet clearance affecting door swing or airflow</li>
          </ul>
          <h3>How We Fix These Avallon Wine Cooler Issues</h3>
          <p>We inspect each temperature zone, compressor-start components, condenser cleanliness, fans, airflow, sensors, drains, frost patterns, wooden shelves, racks, hinges, gaskets, locks, handles, Low-E glass-door fit, touch controls, LEDs, wiring, and the ventilation and door-clearance requirements of the installation.</p>
        </>
      )
    },
    {
      id: "wine-enthusiast-wine-cooler-repair",
      title: "Wine Enthusiast Wine Cooler Repair",
      heading: "Wine Enthusiast Wine Cooler Repair",
      /*img: "/wine-cooler-repair/wine-enthusiast-wine-cooler-repair.webp",*/
      alt: "Wine Enthusiast wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Wine Enthusiast wine cooler repair</strong> service covers MAX Compressor wine coolers, compact freestanding units, dual-zone wine cellars, Classic collections, Latitude models, countertop configurations, touchscreen controls, LED displays, bottle racks, and supported thermoelectric or compressor-based systems. Wine Enthusiast diagnosis should begin by confirming whether the appliance is freestanding, built-in capable, compressor cooled, or thermoelectric.</p>
          <h3>Wine Enthusiast Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Wine Enthusiast cooler not reaching the selected temperature or cycling excessively</li>
            <li>✅ Upper or lower compartment not cooling properly on a dual-zone MAX unit</li>
            <li>✅ Compressor, thermoelectric module, fan, heat sink, sensor, or airflow concern</li>
            <li>✅ Shelf, bottle rack, door, hinge, gasket, handle, or glass-panel problem</li>
            <li>✅ Touchscreen, LED display, interior lighting, control, or wiring fault</li>
            <li>✅ Freestanding airflow requirement or room-temperature condition affecting performance</li>
          </ul>
          <h3>How We Fix These Wine Enthusiast Wine Cooler Issues</h3>
          <p>We verify the model type and inspect temperatures, both zones where equipped, compressor or thermoelectric components, fans, heat sinks, condenser condition where applicable, sensors, airflow, shelves, racks, hinges, gaskets, glass doors, touchscreen controls, LEDs, wiring, and required ventilation.</p>
        </>
      )
    },
    {
      id: "whynter-wine-cooler-repair",
      title: "Whynter Wine Cooler Repair",
      heading: "Whynter Wine Cooler Repair",
      /*img: "/wine-cooler-repair/whynter-wine-cooler-repair.webp",*/
      alt: "Whynter wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Whynter wine cooler repair</strong> for built-in and freestanding wine refrigerators, 15-inch and 24-inch models, 33-bottle, 46-bottle, 92-bottle, 164-bottle, and other supported capacities, single-zone and dual-zone units, French-door wine-and-beverage refrigerators, display racks, compressor cooling, fan circulation, carbon filters, door locks, and digital controls.</p>
          <h3>Whynter Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Whynter wine refrigerator not cooling or one dual-zone compartment running warm</li>
            <li>✅ Compressor, fan, condenser, carbon-filter, airflow, sensor, or front-vent concern</li>
            <li>✅ Display rack, adjustable shelf, door, hinge, gasket, lock, or handle problem</li>
            <li>✅ Digital thermostat, LED display, interior-lighting, control, or wiring issue</li>
            <li>✅ French-door wine-and-beverage model not balancing the two compartments correctly</li>
            <li>✅ Built-in or freestanding installation condition affecting airflow</li>
          </ul>
          <h3>How We Fix These Whynter Wine Cooler Issues</h3>
          <p>We inspect both temperature zones where equipped, compressor-start components, condenser cleanliness, circulation fans, front ventilation, sensors, carbon filters, drains, frost patterns, racks, shelves, hinges, gaskets, locks, handles, lighting, displays, controls, wiring, and installation clearances.</p>
        </>
      )
    },
    {
      id: "danby-wine-cooler-repair",
      title: "Danby Wine Cooler Repair",
      heading: "Danby Wine Cooler Repair",
      /*img: "/wine-cooler-repair/danby-wine-cooler-repair.webp",*/
      alt: "Danby wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Danby wine cooler repair</strong> service covers Designer wine coolers, freestanding wine cellars, built-in models, single-zone and dual-zone units, fan-forced cooling systems, digital thermostats, LED displays, wooden or wire shelves, reversible doors, alarms, and compact wine-storage appliances. Danby service should distinguish normal fan operation from cooling failure, airflow restriction, and control problems.</p>
          <h3>Danby Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Danby wine cooler not maintaining the selected red or white wine temperature</li>
            <li>✅ Fan-forced cooling, condenser, compressor-start, airflow, or sensor issue</li>
            <li>✅ Digital thermostat, LED display, temperature alarm, door alarm, or wiring fault</li>
            <li>✅ Shelf, rack, reversible-door hinge, gasket, handle, or alignment concern</li>
            <li>✅ Condensation, frost, drainage, or excessive-noise problem</li>
            <li>✅ Built-in or freestanding placement issue affecting ventilation</li>
          </ul>
          <h3>How We Fix These Danby Wine Cooler Issues</h3>
          <p>We inspect temperature performance, fan-forced airflow, condenser condition, compressor-start parts, sensors, drains, frost patterns, shelves, racks, hinges, gaskets, handles, digital thermostat, display, alarms, wiring, and installation clearances.</p>
        </>
      )
    },
    {
      id: "ge-profile-wine-cooler-repair",
      title: "GE Profile Wine Cooler Repair",
      heading: "GE Profile Wine Cooler Repair",
      /*img: "/wine-cooler-repair/ge-profile-wine-cooler-repair.webp",*/
      alt: "GE Profile wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>GE Profile wine cooler repair</strong> for 44-bottle dual-zone wine coolers, supported wine-and-beverage centers, freestanding and undercounter-style installations where applicable, upper and lower temperature zones, electronic controls, wooden shelves, interior lighting, reversible-door configurations, and current or legacy GE wine-storage models.</p>
          <h3>GE Profile Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ GE Profile wine cooler not holding the selected temperature in one or both zones</li>
            <li>✅ Fan, condenser, compressor-start, sensor, airflow, or excessive-noise concern</li>
            <li>✅ Electronic control, display, interior lighting, temperature-setting, or wiring fault</li>
            <li>✅ Wooden shelf, rack, hinge, gasket, handle, or reversible-door alignment problem</li>
            <li>✅ Condensation, frost, drainage, or door-sealing concern</li>
            <li>✅ Legacy GE wine center requiring model-specific part identification</li>
          </ul>
          <h3>How We Fix These GE Profile Wine Cooler Issues</h3>
          <p>We inspect temperatures in the upper and lower zones, airflow, fans, condenser condition, compressor-start components, sealed-system symptoms, sensors, drains, frost patterns, shelves, racks, hinges, gaskets, handles, lighting, display, electronic controls, wiring, and placement clearances.</p>
        </>
      )
    },
    {
      id: "haier-wine-cooler-repair",
      title: "Haier Wine Cooler Repair",
      heading: "Haier Wine Cooler Repair",
      /*img: "/wine-cooler-repair/haier-wine-cooler-repair.webp",*/
      alt: "Haier wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Haier wine cooler repair</strong> service covers current-support and legacy wine centers, compact wine cellars, freestanding models, built-in wine-cellar installations where specified by the model, dual-zone units, thermoelectric and compressor-based systems, wooden or chrome racks, digital controls, soft interior lighting, and reversible-door configurations. Haier placement requirements vary by model, so correct identification matters.</p>
          <h3>Haier Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Haier wine cellar not cooling or failing to reach the selected temperature</li>
            <li>✅ Thermoelectric module, compressor, fan, heat sink, condenser, sensor, or airflow concern</li>
            <li>✅ Dual-zone unit not balancing the upper and lower compartments correctly</li>
            <li>✅ Rack, shelf, reversible hinge, gasket, handle, or glass-door problem</li>
            <li>✅ Digital control, display, interior lighting, or wiring issue</li>
            <li>✅ Freestanding-only model recessed into cabinetry without required ventilation</li>
          </ul>
          <h3>How We Fix These Haier Wine Cooler Issues</h3>
          <p>We confirm the complete Haier model and whether it is designed for freestanding or built-in placement. We inspect temperatures, zones, compressor or thermoelectric parts, fans, heat sinks, condenser condition, sensors, airflow, racks, shelves, hinges, gaskets, handles, glass doors, controls, lighting, wiring, and installation clearances.</p>
        </>
      )
    },
    {
      id: "frigidaire-wine-cooler-repair",
      title: "Frigidaire Wine Cooler Repair",
      heading: "Frigidaire Wine Cooler Repair",
      /*img: "/wine-cooler-repair/frigidaire-wine-cooler-repair.webp",*/
      alt: "Frigidaire wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Frigidaire wine cooler repair</strong> for 45-bottle two-zone wine coolers, supported wine-and-beverage centers, compact wine-storage appliances, freestanding configurations, reversible-door models, electronic-temperature controls, stained-wood shelving, tinted-glass doors, LED lighting, R600a systems, and current or legacy Frigidaire units.</p>
          <h3>Frigidaire Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Frigidaire wine cooler not holding temperature in one or both zones</li>
            <li>✅ Air-cooled condenser, fan, sensor, compressor-start, or airflow concern</li>
            <li>✅ Electronic temperature control, Ready-Select control, lighting, or wiring fault</li>
            <li>✅ Wood shelf, rack, reversible hinge, gasket, handle, or tinted-glass-door problem</li>
            <li>✅ Condensation, frost, drainage, or excessive-noise concern</li>
            <li>✅ Legacy wine-and-beverage model requiring model-specific parts review</li>
          </ul>
          <h3>How We Fix These Frigidaire Wine Cooler Issues</h3>
          <p>We inspect each zone, air-cooled condenser, fans, airflow, sensors, compressor-start parts, sealed-system symptoms, drains, frost patterns, shelves, racks, hinges, gaskets, handles, glass-door fit, electronic controls, LEDs, wiring, and placement clearances.</p>
        </>
      )
    },
    {
      id: "kitchenaid-wine-cooler-repair",
      title: "KitchenAid Wine Cooler Repair",
      heading: "KitchenAid Wine Cooler Repair",
      /*img: "/wine-cooler-repair/kitchenaid-wine-cooler-repair.webp",*/
      alt: "KitchenAid wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>KitchenAid wine cooler repair</strong> service covers 24-inch undercounter wine cellars, dual-zone models, fully flush installations with hidden hinges, SatinGlide full-extension wood-front racks, UV-protected thermal-glass doors, motion-activated LED lighting, backlit touch controls, door alarms, temperature-monitoring systems, panel-ready or premium-finish configurations, and supported legacy KitchenAid wine cellars.</p>
          <h3>KitchenAid Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ KitchenAid undercounter wine cellar not holding temperature in one or both zones</li>
            <li>✅ Temperature-monitoring alarm, sensor, fan, condenser, compressor-start, or airflow concern</li>
            <li>✅ SatinGlide rack, wood-front shelf, hidden hinge, gasket, or flush-install alignment issue</li>
            <li>✅ Motion-activated LED lighting, backlit touch control, display, door alarm, or wiring fault</li>
            <li>✅ UV-protected thermal-glass door developing condensation or sealing problems</li>
            <li>✅ Legacy KitchenAid wine-cellar model requiring careful part identification</li>
          </ul>
          <h3>How We Fix These KitchenAid Wine Cooler Issues</h3>
          <p>We inspect both temperature zones, sensors, airflow, fans, condenser condition, compressor-start components, sealed-system symptoms, drains, frost patterns, SatinGlide racks, shelves, hidden hinges, gaskets, glass-door sealing, flush alignment, lighting, touch controls, alarms, wiring, and undercounter ventilation.</p>
        </>
      )
    },
    {
      id: "whirlpool-wine-cooler-repair",
      title: "Whirlpool Wine Cooler Repair",
      heading: "Whirlpool Wine Cooler Repair",
      /*img: "/wine-cooler-repair/whirlpool-wine-cooler-repair.webp",*/
      alt: "Whirlpool wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>We provide <strong>Whirlpool wine cooler repair</strong> for supported and legacy undercounter wine cellars, wine-storage refrigerators, compact wine coolers, electronic-control models, glass-door configurations, bottle racks, reversible-door units, and Whirlpool-family wine-cellar platforms that require accurate model-number identification before parts are ordered. Many Whirlpool wine-storage calls involve older installations, so repair planning should include parts-availability review.</p>
          <h3>Whirlpool Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Whirlpool wine cellar not cooling or cycling continuously</li>
            <li>✅ Thermostat, sensor, fan, condenser, compressor-start, or airflow concern</li>
            <li>✅ Glass door, gasket, hinge, handle, shelf, or bottle-rack problem</li>
            <li>✅ Electronic control, display, lighting, or wiring fault</li>
            <li>✅ Condensation, frost, drainage, or ventilation concern</li>
            <li>✅ Older model requiring compatible-part identification or discontinued-part review</li>
          </ul>
          <h3>How We Fix These Whirlpool Wine Cooler Issues</h3>
          <p>We begin with the complete Whirlpool model number, then inspect temperature performance, airflow, fans, condenser cleanliness, thermostat or sensors, compressor-start parts, sealed-system symptoms, drains, frost patterns, shelves, racks, hinges, gaskets, glass doors, lighting, controls, wiring, and installation clearances.</p>
        </>
      )
    },
    {
      id: "magic-chef-wine-cooler-repair",
      title: "Magic Chef Wine Cooler Repair",
      heading: "Magic Chef Wine Cooler Repair",
      /*img: "/wine-cooler-repair/magic-chef-wine-cooler-repair.webp",*/
      alt: "Magic Chef wine cooler repair technician servicing a wine-storage appliance",
      description: (
        <>
          <p>Our <strong>Magic Chef wine cooler repair</strong> service covers built-in and freestanding wine coolers, 50-bottle models, compact wine refrigerators, red-and-white preset configurations, electronic-temperature controls, digital displays, smoked-glass doors, chrome bottle racks, LED stage lighting, and supported thermoelectric or compressor-based units.</p>
          <h3>Magic Chef Wine Cooler Issues Our Techs See Most Frequently</h3>
          <ul>
            <li>✅ Magic Chef wine cooler not reaching the selected temperature</li>
            <li>✅ Compressor, thermoelectric module, fan, heat sink, condenser, sensor, or airflow concern</li>
            <li>✅ Electronic control, digital display, red-or-white preset, LED lighting, or wiring fault</li>
            <li>✅ Chrome rack, shelf, hinge, gasket, handle, or smoked-glass-door problem</li>
            <li>✅ Condensation, frost, drainage, or excessive-noise concern</li>
            <li>✅ Built-in versus freestanding ventilation requirement not being met</li>
          </ul>
          <h3>How We Fix These Magic Chef Wine Cooler Issues</h3>
          <p>We identify the cooling technology used by the Magic Chef model and inspect temperatures, compressor or thermoelectric components, fans, heat sinks where applicable, condenser condition, sensors, airflow, drains, frost patterns, racks, shelves, hinges, gaskets, glass doors, controls, LEDs, wiring, and placement clearances.</p>
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
