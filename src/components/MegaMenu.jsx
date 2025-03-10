import React, { useState, useEffect } from "react";
import "./MegaMenu.css"; // Keep your existing CSS
// Elegant Narrow Arrow SVG Component
const ArrowIcon = ({ isOpen }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
      marginLeft: "8px"
    }}
  >
    <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const MegaMenu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleDropdownToggle = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <div className={`sticky-header ${isSticky ? "fixed" : ""}`}>
      <div className="navbar">
        <div className="first-row">
       
        <a className="logo" href="#home">
            <img width="140" alt="Logo" src="/logo999.jpg" />
          </a>

          {/* Home Dropdown */}
          <div className="dropdown">
          <button className="dropbtn" onClick={(event) => handleDropdownClick("home", event)}>
  Home <ArrowIcon isOpen={openDropdown === "home"} />
</button>
            <div className={`dropdown-content ${openDropdown === "home" ? "show" : ""}`}>
              <h3>Home Appliances We Repair</h3>
              <div className="row">
                <div className="column">
                  <a href="#"><img src="/svg/fridge.svg" alt="" /> Refrigerator</a>
                  <a href="#"><img src="/svg/freezer.svg" alt="" /> Freezer</a>
                  <a href="#"><img src="/svg/dishwasher.svg" alt="" /> Dishwasher</a>
                  <a href="#"><img src="/svg/dryer.svg" alt="" /> Dryer</a>
                  <a href="#"><img src="/svg/oven.svg" alt="" /> Oven</a>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("commercial")}>
              Commercial <ArrowIcon isOpen={openDropdown === "home"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "commercial" ? "show" : ""}`}>
              <h3>Commercial Appliances We Repair</h3>
              <div className="row">
                <div className="column">
                  <a href="#"><img src="/svg/fridge.svg" alt="" /> Refrigerator</a>
                  <a href="#"><img src="/svg/freezer.svg" alt="" /> Freezer</a>
                  <a href="#"><img src="/svg/dishwasher.svg" alt="" /> Dishwasher</a>
                  <a href="#"><img src="/svg/dryer.svg" alt="" /> Dryer</a>
                  <a href="#"><img src="/svg/oven.svg" alt="" /> Oven</a>
                </div>
              </div>
            </div>
          </div>

          {/* Prices Dropdown */}
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("prices")}>
              Prices <ArrowIcon isOpen={openDropdown === "home"} />
            </button>
            <div className={`dropdown-content ${openDropdown === "prices" ? "show" : ""}`}>
              <div className="row">
                <div className="column">
                  <a href="#">Refrigerator Repair</a>
                  <a href="#">Oven Repair</a>
                  <a href="#">Dishwasher Repair</a>
                  <a href="#">Dryer Repair</a>
                </div>
                <div className="column">
                  <a href="#">Washer Repair</a>
                  <a href="#">Microwave Repair</a>
                  <a href="#">Cooktop Repair</a>
                  <a href="#">Range Hood Repair</a>
                </div>
                <div className="column">
                  <a href="#">Get a Quote</a>
                  <a href="#">Same Day Pricing</a>
                  <a href="#">Custom Requests</a>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <a href="#top" className="phone-number">(323) 870-4790</a>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
