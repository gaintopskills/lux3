import React, { useState } from "react";
import "./MegaMenu.css"; // Keep your existing CSS

const ArrowIcon = ({ isOpen }) => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", marginLeft: "8px" }}>
    <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MegaMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [loadedDropdown, setLoadedDropdown] = useState({});

  const handleDropdownEnter = (menu) => {
    setOpenDropdown(menu);
    if (!loadedDropdown[menu]) {
      setLoadedDropdown((prev) => ({ ...prev, [menu]: true }));
    }
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="sticky-header">
      <div className="navbar">
        <div className="first-row">
          <a className="logo" href="#home">
            <img width="140" alt="Logo" src="/logo999.jpg" />
          </a>

          {/* Home Dropdown */}
          <div className="dropdown"
            onMouseEnter={() => handleDropdownEnter("home")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="dropbtn">
              Home <ArrowIcon isOpen={openDropdown === "home"} />
            </button>
            {loadedDropdown["home"] && (
              <div className={`dropdown-content ${openDropdown === "home" ? "show" : ""}`}>
                <h3>Home Appliances We Repair</h3>
                <div className="row">
                  <div className="column">
                    <a href="#"><img src="/svg/fridge.svg" alt="" /> Refrigerator</a>
                    <a href="#"><img src="/svg/freezer.svg" alt="" /> Freezer</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Commercial Dropdown */}
          <div className="dropdown"
            onMouseEnter={() => handleDropdownEnter("commercial")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="dropbtn">
              Commercial <ArrowIcon isOpen={openDropdown === "commercial"} />
            </button>
            {loadedDropdown["commercial"] && (
              <div className={`dropdown-content ${openDropdown === "commercial" ? "show" : ""}`}>
                <h3>Commercial Appliances We Repair</h3>
                <div className="row">
                  <div className="column">
                    <a href="#"><img src="/svg/fridge.svg" alt="" /> Refrigerator</a>
                    <a href="#"><img src="/svg/freezer.svg" alt="" /> Freezer</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Prices Dropdown */}
          <div className="dropdown"
            onMouseEnter={() => handleDropdownEnter("prices")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="dropbtn">
              Prices <ArrowIcon isOpen={openDropdown === "prices"} />
            </button>
            {loadedDropdown["prices"] && (
              <div className={`dropdown-content ${openDropdown === "prices" ? "show" : ""}`}>
                <div className="row">
                  <div className="column">
                    <a href="#">Refrigerator Repair</a>
                    <a href="#">Oven Repair</a>
                  </div>
                  <div className="column">
                    <a href="#">Washer Repair</a>
                    <a href="#">Microwave Repair</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Phone Number */}
          <a href="#top" className="phone-number">(323) 870-4790</a>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
