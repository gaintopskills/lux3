import React, { useState, useEffect, useCallback } from "react";
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
    <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const menuItems = [
  {
    label: "Home",
    id: "home",
    heading: "Home Appliances We Repair",
    links: [
      { href: "#", icon: "/svg/fridge.svg", text: "Refrigerator" },
      { href: "#", icon: "/svg/freezer.svg", text: "Freezer" },
      { href: "#", icon: "/svg/dishwasher.svg", text: "Dishwasher" },
      { href: "#", icon: "/svg/dryer.svg", text: "Dryer" },
      { href: "#", icon: "/svg/oven.svg", text: "Oven" },
    ],
  },
  {
    label: "Commercial",
    id: "commercial",
    heading: "Commercial Appliances We Repair",
    links: [
      { href: "#", icon: "/svg/fridge.svg", text: "Refrigerator" },
      { href: "#", icon: "/svg/freezer.svg", text: "Freezer" },
      { href: "#", icon: "/svg/dishwasher.svg", text: "Dishwasher" },
      { href: "#", icon: "/svg/dryer.svg", text: "Dryer" },
      { href: "#", icon: "/svg/oven.svg", text: "Oven" },
    ],
  },
  {
    label: "Prices",
    id: "prices",
    heading: "Our Pricing",
    links: [
      { href: "#", text: "Refrigerator Repair" },
      { href: "#", text: "Oven Repair" },
      { href: "#", text: "Dishwasher Repair" },
      { href: "#", text: "Dryer Repair" },
    ],
  },
];

export const MegaMenu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = useCallback((menuId) => {
    setOpenDropdown((prev) => (prev === menuId ? null : menuId));
  }, []);

  return (
    <header className={`sticky-header ${isSticky ? "fixed" : ""}`}>
      <nav className="navbar">
        <div className="first-row">
          {/* Logo */}
          <a className="logo" href="#home">
            <img width="140" alt="Logo" src="/logo999.jpg" />
          </a>

          {/* Dropdown Menus */}
          {menuItems.map(({ label, id, heading, links }) => (
            <div className="dropdown" key={id}>
              <button className="dropbtn" onClick={() => handleDropdownToggle(id)}>
                {label} <ArrowIcon isOpen={openDropdown === id} />
              </button>
              <div className={`dropdown-content ${openDropdown === id ? "show" : ""}`}>
                {heading && <h3>{heading}</h3>}
                <div className="row">
                  <div className="column">
                    {links.map(({ href, icon, text }) => (
                      <a key={text} href={href}>
                        {icon && <img src={icon} alt={text} />} {text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Phone Number */}
          <a href="#top" className="phone-number">(323) 870-4790</a>
        </div>
      </nav>
    </header>
  );
};

export default MegaMenu;
