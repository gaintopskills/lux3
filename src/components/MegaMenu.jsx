import React, { useState, useEffect } from "react";
import "./MegaMenu.css"; // Move styles to a CSS file for better separation
// Reusable Arrow Icon Component
const ArrowIcon = ({ isOpen }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`arrow-icon ${isOpen ? "rotate" : ""}`}
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MegaMenu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isCloseVisible, setIsCloseVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (menuId) => {
    if (openDropdown === menuId) {
      // Do not toggle it off, just keep it open
      setOpenDropdown(menuId);
      setIsCloseVisible(true);
    } else {
      // Open new dropdown and keep close button visible
      setOpenDropdown(menuId);
      setIsCloseVisible(true);
    }
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
    setIsCloseVisible(false);
  };

  return (
    <header className={`sticky-header ${isSticky ? "fixed" : ""}`}>
      <nav className="navbar">
        <div className="first-row">
          {/* Logo */}
          <a className="logo logo-desktop" href="/">
  <img width="140" height="41" alt="Logo" src="/logo.webp" />
</a>
<a className="logo-mobile" href="/">
  <img width="25" height="25" alt="Mobile Logo" src="/logo-mobile.png" />
</a>
 {/* Close Button - Always visible when a dropdown is open */}
 {isCloseVisible && (
            <button className="close-btn show" onClick={handleCloseDropdown}>
              ✖
            </button>
          )}
{/* Close Button - Only visible on mobile when a dropdown is open */}
{openDropdown && (
            <button className="close-btn" onClick={handleCloseDropdown}>✖</button>
          )}
          {/* Home Dropdown */}
          <div className="dropdown">
           <button className="dropbtn" ><a href="/services/" onClick={() => handleDropdownToggle("Household")}>
              Services <ArrowIcon isOpen={openDropdown === "Household"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              <h3>High-End Appliances We Repair</h3>
              <div className="row">
                {[
                  [{ label: "Oven Repair", href: "/oven-repair/" },
                  { label: "Stove Repair", href: "/stove-repair/" },
                  { label: "Range Repair", href: "/range-repair/" },
                  { label: "Cooktop Repair", href: "/cooktop-repair/" },
                  [{ label: "Wachine Machine Repair", href: "/washing-machine-repair/" }, 
                  { label: "Dryer Repair", href: "/dryer-repair/" }, 
                  { label: "Dishwasher Repair", href: "/dishwasher-repair/" },
                  { label: "Microwave Repair", href: "/microwave-repair/" },
                  { label: "Refrigerator Repair", href: "/refrigerator-repair/" },
             ],
                  [
                    { label: "Freezer Repair", href: "/freezer-repair/" },
                    { label: "Fireplace repair", href: "/fireplace-repair/" },
                  { label: "BBQ Repair", href: "/bbq-repair/" },
                  { label: "Wine Cooler", href: "/wine-cooler-repair/" },
                  { label: "Wine Cellar Repair", href: "/wine-cellar-repair/" },  ],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) =>
                      typeof item === "string" ? (
                        <a key={item} href="#">
                          {/* <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */} {item}
                        </a>
                      ) : (
                        <a key={item.label} href={item.href}>
                          {/* <img src={`/svg/${item.label.split(" ")[0].toLowerCase()}.svg`} alt={item.label} /> */} {item.label}
                        </a>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Commercial Dropdown */}
          <div className="dropdown">
          <button className="dropbtn"><a href="/brands/" onClick={() => handleDropdownToggle("commercial")}>
              Brands <ArrowIcon isOpen={openDropdown === "commercial"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              <h3>High-End  Brands We Repair</h3>
              <div className="row">
  {[
    [{ label: "AGA", href: "/aga-appliance-repair/" },
    { label: "Big Chill", href: "/bill-chill-appliance-repair/" },
    { label: "BlueStar", href: "/bluestar-appliance-repair/" },
    { label: "Bosch", href: "/bosch-appliance-repair/" },
    { label: "Dacor", href: "/dacor-appliance-repair/" },
    { label: "Elmira Stove Works", href: "/elmira-stove-works-appliance-repair/" },
    { label: "KitchenAid", href: "/kitchenaid-appliance-repair/" },
    { label: "La Cornue", href: "/la-cornue-appliance-repair/" },
    { label: "Miele", href: "/miele-appliance-repair/" },
  ],
    [
    { label: "Smeg", href: "/smeg-appliance-repair/" },
    { label: "Sub-Zero", href: "/sub-zero-repair/" },
    { label: "Thermador", href: "/thermador-appliance-repair/" },
    { label: "Viking", href: "/viking-appliance-repair/" },
    { label: "Wolf", href: "/wolf-appliance-repair/" },
    { label: "Monogram", href: "/monogram-appliance-repair/" },
    { label: "Cove", href: "/cove-appliance-repair/" },
    { label: "Bertazzoni", href: "/bertazzoni-appliance-repair/" },
    { label: "ZLINE", href: "/zline-appliance-repair/" },],
    [ 
      
      { label: "ILVE", href: "/ilive-appliance-repair/" },
      { label: "Fulgor Milano", href: "/fulgor-milano-appliance-repair/" },
      { label: "Lacanche", href: "/lacanche-appliance-repair/" },
      { label: "Robam", href: "/robam-appliance-repair/" },
      { label: "Signature Kitchen Suite", href: "/signature-kitchen-suite-appliance-repair/" },
      { label: "True Residential", href: "/true-residential-appliance-repair/" },
      { label: "Hestan", href: "/hestan-appliance-repair/" },
      { label: "Whirlpool Black Stainless", href: "/whirlpool-appliance-repair/" },
      { label: "JennAir Noir", href: "/jennair-noir-appliance-repair/" }
    ],
  ].map((col, idx) => (
    <div className="column" key={idx}>
      {col.map((item) =>
        typeof item === "string" ? (
          <a key={item} href="#">
            {/* <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */} {item}
          </a>
        ) : (
          <a key={item.label} href={item.href}>
            {/* <img src={`/svg/${item.label.split(" ")[0].toLowerCase()}.svg`} alt={item.label} /> */} {item.label}
          </a>
        )
      )}
    </div>
  ))}
</div>
            </div>
          </div>
           <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("HVAC")}><a>
            Service Areas <ArrowIcon isOpen={openDropdown === "HVAC"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "HVAC" ? "show" : ""}`}>
              <div className="row">
                {[
                   // Column 1
  [
    { label: "Alhambra", href: "/alhambra/" },
    { label: "Bel Air", href: "/bel-air/" },
    { label: "Beverly Hills", href: "/beverly-hills/" },
    { label: "Brentwood", href: "/brentwood/" },
    { label: "Burbank", href: "/burbank/" },
    { label: "Calabasas", href: "/calabasas/" },
    { label: "Century City", href: "/century-city/" },
    { label: "Culver City", href: "/culver-city/" },
    { label: "Encino", href: "/encino/" },
    { label: "Glendale", href: "/glendale/" },
    { label: "Hermosa Beach", href: "/hermosa-beach/" },
    { label: "Hollywood", href: "/hollywood/" },
    
  ],

  // Column 2
  [
    { label: "Holmby Hills", href: "/holmby-hills/" },
    { label: "La Cañada Flintridge", href: "/la-canada-flintridge/" },
    { label: "Los Angeles", href: "/los-angeles/" },
    { label: "Los Feliz", href: "/los-feliz/" },
    { label: "Malibu", href: "/malibu/" },
    { label: "Manhattan Beach", href: "/manhattan-beach/" },
    { label: "Marina Del Rey", href: "/marina-del-rey/" },
    { label: "Pacific Palisades", href: "/pacific-palisades/" },
    { label: "Palos Verdes Estates", href: "/palos-verdes-estates/" },
    { label: "Pasadena", href: "/pasadena/" },
    { label: "Playa Del Rey", href: "/playa-del-rey/" },
    { label: "Rancho Palos Verdes", href: "/rancho-palos-verdes/" },
  
  ],

  // Column 3
  [
    { label: "Rolling Hills Estates", href: "/rolling-hills-estates/" },
    { label: "San Marino", href: "/san-marino/" },
    { label: "Santa Monica", href: "/santa-monica/" },
    { label: "Sherman Oaks", href: "/sherman-oaks/" },
    { label: "South Pasadena", href: "/south-pasadena/" },
    { label: "Studio City", href: "/studio-city/" },
    { label: "Tarzana", href: "/tarzana/" },
    { label: "Thousand Oaks", href: "/thousand-oaks/" },
    { label: "Venice", href: "/venice/" },
    { label: "West Hollywood", href: "/west-hollywood/" },
    { label: "Westwood", href: "/westwood/" },
    { label: "Woodland Hills", href: "/woodland-hills/" }
  ],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) =>
  typeof item === "string" ? (
    <a key={item} href={`/${item.toLowerCase().replace(/\s+/g, "-")}/`}>
      {item}
    </a>
  ) : (
    <a key={item.label} href={item.href}>
      {item.label}
    </a>
  )
)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
             {/* Areas Dropdown */}
             <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("Areas")}>
             <a> VIP<ArrowIcon isOpen={openDropdown === "Areas"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "Areas" ? "show" : ""}`}>
              <div className="row">
                {[
                  ["Yearly Maintenance"],
                  ["Maintenance Twice A Year"],
                  ["Donate To Low Income Familisies"],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                     {/*  <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */}{item}
                     </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Prices Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("prices")}>
           <a> Charity Program
  <ArrowIcon isOpen={openDropdown === "prices"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "prices" ? "show" : ""}`}>
            <h3>10% of the revenues goes towards helping law income families fix their appliances!</h3>
              <div className="row">
                {[
                  [],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                      {/* <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} />*/} {item}
                     </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Phone Number */}
          <a href="#top" className="phone-number">(213) 309-1924</a>
        </div>
      </nav>
    </header>
  );
};
export default MegaMenu;
