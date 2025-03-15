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
  <img width="140" alt="Logo" src="/logo999.jpg" />
</a>
<a className="logo-mobile" href="#home">
  <img width="25" alt="Mobile Logo" src="/logo-mobile.png" />
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
              Household <ArrowIcon isOpen={openDropdown === "Household"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              <h3>Home Appliances We Repair</h3>
              <div className="row">
                {[
                  ["Refrigerator Repair", "Freezer Repair", "Washer Repair", "Dryer Repair", "Stove repair", "Range Repair"],
                  ["Washer Repair", "Microwave Repair", "Cooktop Repair", "Range Hood Repair"],
                  ["Get a Quote", "Same Day Pricing", "Custom Requests"],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                       <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> {item}
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
              Commercial <ArrowIcon isOpen={openDropdown === "commercial"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "commercial" ? "show" : ""}`}>
              <h3>Commercial Appliances We Repair</h3>
              <div className="row">
                {["Refrigerator", "Freezer", "Dishwasher", "Dryer", "Oven"].map((item) => (
                  <a key={item} href="#">
                   <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> {item}
                  </a>
                ))}

              </div>
            </div>
          </div>
           {/* HVAC Dropdown */}
           <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("HVAC")}>
              HVAC <ArrowIcon isOpen={openDropdown === "HVAC"} />
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
                       <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> {item}
                     </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Brands Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("Brands")}>
            Brands <ArrowIcon isOpen={openDropdown === "Brands"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "Brands" ? "show" : ""}`}>
              <div className="row">
                {[
                  ["Refrigerator Repair", "Oven Repair", "Dishwasher Repair", "Dryer Repair"],
                  ["Washer Repair", "Microwave Repair", "Cooktop Repair", "Range Hood Repair"],
                  ["Get a Quote", "Same Day Pricing", "Custom Requests"],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                    <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> {item}
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
              Areas <ArrowIcon isOpen={openDropdown === "Areas"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "Areas" ? "show" : ""}`}>
              <div className="row">
                {[
                  ["Refrigerator Repair", "Oven Repair", "Dishwasher Repair", "Dryer Repair"],
                  ["Washer Repair", "Microwave Repair", "Cooktop Repair", "Range Hood Repair"],
                  ["Get a Quote", "Same Day Pricing", "Custom Requests"],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                       <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> {item}
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
              Prices <ArrowIcon isOpen={openDropdown === "prices"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "prices" ? "show" : ""}`}>
              <div className="row">
                {[
                  ["Refrigerator Repair", "Oven Repair", "Dishwasher Repair", "Dryer Repair"],
                  ["Washer Repair", "Microwave Repair", "Cooktop Repair", "Range Hood Repair"],
                  ["Get a Quote", "Same Day Pricing", "Custom Requests"],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                       <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> {item}
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
