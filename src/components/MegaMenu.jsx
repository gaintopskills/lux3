import React, { useState, useEffect } from "react";
import "./MegaMenu.css";
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
          <a className="logo logo-desktop" href="#home">
  <img width="140" height="41" alt="Logo" src="/logo.webp" />
</a>
<a className="logo-mobile" href="#home">
  <img width="25" height="25" alt="Mobile Logo" src="/logo-mobile.webp" />
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
            <button className="dropbtn" onClick={() => handleDropdownToggle("Household")}>
              Services <ArrowIcon isOpen={openDropdown === "Household"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              <h3>High-End  Appliances We Repair</h3>
              <div className="row">
                {[
                  ["Oven Repair", "Stove repair", "Range Repair", "Cooktop Repair", "Range Hood Repair"],
                  ["Washer Repair", "Dryer Repair", "Dishwasher Repair","Microwave Repair","Refrigerator Repair", "Freezer Repair",  ],
                  ["Fireplace repair", "BBQ Repair", "Wine Cooler Repair", "Wine Cellar Repair",  ],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                  {col.map((item) => (
                       <a key={item} href="#">
                       {/* <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */}{item}
                     </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commercial Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("commercial")}>
              Brands <ArrowIcon isOpen={openDropdown === "commercial"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              <h3>High-End  Brands We Repair</h3>
              <div className="row">
                {[
                  ["AGA", "Big Chill", "BlueStar", "Bosch", "Dacor", "Elmira Stove Works",],
                  [ "Fisher & Paykel","Gaggenau","Jenn-Air", "KitchenAid", "La Cornue", "Miele",],
                  ["Smeg", "Thermador", "Viking", "Wolf", ],
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
           {/* HVAC Dropdown */}
           <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("HVAC")}>
            Service Areas <ArrowIcon isOpen={openDropdown === "HVAC"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "HVAC" ? "show" : ""}`}>
              <div className="row">
                {[
                  ["Refrigerator Repair", "Oven Repair", "Dishwasher Repair", "Dryer Repair"],
                  ["Washer Repair", "Microwave Repair", "Cooktop Repair", "Range Hood Repair"],
                  ["Get a Quote", "Same Day Pricing", "Custom Requests"],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                    {/*   <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */}{item}
                     </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
             {/* Areas Dropdown */}
             <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("Areas")}>
              VIP <ArrowIcon isOpen={openDropdown === "Areas"} />
            </button>
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
            Charity Program
  <ArrowIcon isOpen={openDropdown === "prices"} />
            </button>
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
          <a href="#top" className="phone-number">(323) 870-4790</a>
        </div>
      </nav>
    </header>
  );
};

export default MegaMenu;
