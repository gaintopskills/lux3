import React, { useState, useEffect } from "react";
import "./MegaMenu.css";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (menuId) => {
    setOpenDropdown((currentMenu) => (currentMenu === menuId ? null : menuId));
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
  };

  const CloseMenuBar = () => (
    <button
      type="button"
      className="dropdown-close-bar"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleCloseDropdown();
      }}
      aria-label="Close menu"
    >
      Close <span>✕</span>
    </button>
  );

  const renderColumns = (columns) => (
    <div className="row">
      {columns.map((col, idx) => (
        <div className="column" key={idx}>
          {col.map((item) =>
            item.type === "heading" ? (
              <a
                className="column-header-link"
                href={item.href}
                key={item.label}
                onClick={handleCloseDropdown}
              >
                <h4 className="column-header">{item.label}</h4>
              </a>
            ) : typeof item === "string" ? (
              <a key={item} href="#" onClick={handleCloseDropdown}>
                {item}
              </a>
            ) : (
              <a key={item.label} href={item.href} onClick={handleCloseDropdown}>
                {item.label}
              </a>
            )
          )}
        </div>
      ))}
    </div>
  );

  const servicesColumns = [
    [
      { label: "Oven Repair", href: "/oven-repair/" },
      { label: "Stove Repair", href: "/stove-repair/" },
      { label: "Range Repair", href: "/range-repair/" },
      { label: "Cooktop Repair", href: "/cooktop-repair/" },
    ],
    [
      { label: "Washing Machine Repair", href: "/washing-machine-repair/" },
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
      { label: "Wine Cellar Repair", href: "/wine-cellar-repair/" },
    ],
  ];

  const brandsColumns = [
    [
      {
        type: "heading",
        label: "Luxury Brand Repair",
        href: "/european-appliance-repair/",
      },
      { label: "AGA", href: "/aga-appliance-repair/" },
      { label: "Bertazzoni", href: "/bertazzoni-appliance-repair/" },
      { label: "Fulgor Milano", href: "/fulgor-milano-appliance-repair/" },
      { label: "Gaggenau", href: "/gaggenau-repair/" },
      { label: "ILVE", href: "/ilve-appliance-repair/" },
      { label: "Lacanche", href: "/lacanche-appliance-repair/" },
      { label: "La Cornue", href: "/la-cornue-appliance-repair/" },
    ],
    [
      { label: "American Range", href: "/american-range-repair/" },
      { label: "Big Chill", href: "/big-chill-appliance-repair/" },
      { label: "BlueStar", href: "/bluestar-appliance-repair/" },
      { label: "Bosch", href: "/bosch-appliance-repair/" },
      { label: "Cove", href: "/cove-dishwasher-repair/" },
      { label: "Dacor", href: "/dacor-appliance-repair/" },
      {
        label: "Elmira Stove Works",
        href: "/elmira-stove-works-appliance-repair/",
      },
      { label: "FiveStar", href: "/fivestar-appliance-repair/" },
      { label: "Hestan", href: "/hestan-appliance-repair/" },
      { label: "JennAir Noir", href: "/jennair-noir-appliance-repair/" },
      { label: "Miele", href: "/miele-appliance-repair/" },
    ],
    [
      {
        label: "Signature Kitchen Suite",
        href: "/signature-kitchen-suite-appliance-repair/",
      },
      { label: "Smeg", href: "/smeg-appliance-repair/" },
      { label: "Sub-Zero", href: "/sub-zero-repair/" },
      { label: "Thermador", href: "/thermador-appliance-repair/" },
      { label: "True Residential", href: "/true-residential-appliance-repair/" },
      { label: "Viking", href: "/viking-appliance-repair/" },
      { label: "Wolf", href: "/wolf-appliance-repair/" },
      { label: "ZLINE", href: "/zline-appliance-repair/" },
      { label: "Monogram", href: "/monogram-appliance-repair/" },
    ],
  ];

  const serviceAreaColumns = [
    [
      { label: "Bel Air", href: "/bel-air/" },
      { label: "Beverly Hills", href: "/beverly-hills/" },
      { label: "Brentwood", href: "/brentwood/" },
      { label: "Calabasas", href: "/calabasas/" },
      { label: "Century City", href: "/century-city/" },
      { label: "Encino", href: "/encino/" },
      { label: "Glendale", href: "/glendale/" },
      { label: "Hollywood", href: "/hollywood/" },
      { label: "Holmby Hills", href: "/holmby-hills/" },
      { label: "La Cañada Flintridge", href: "/la-canada-flintridge/" },
    ],
    [
      { label: "Los Angeles", href: "/los-angeles/" },
      { label: "Los Feliz", href: "/los-feliz/" },
      { label: "Malibu", href: "/malibu/" },
      { label: "Manhattan Beach", href: "/manhattan-beach/" },
      { label: "Marina Del Rey", href: "/marina-del-rey/" },
      { label: "Pacific Palisades", href: "/pacific-palisades/" },
      { label: "Palos Verdes Estates", href: "/palos-verdes-estates/" },
      { label: "Pasadena", href: "/pasadena/" },
    ],
    [
      { label: "Playa Del Rey", href: "/playa-del-rey/" },
      { label: "Rancho Palos Verdes", href: "/rancho-palos-verdes/" },
      { label: "Rolling Hills Estates", href: "/rolling-hills-estates/" },
      { label: "San Marino", href: "/san-marino/" },
      { label: "Santa Monica", href: "/santa-monica/" },
      { label: "Thousand Oaks", href: "/thousand-oaks/" },
      { label: "West Hollywood", href: "/west-hollywood/" },
      { label: "Westwood", href: "/westwood/" },
    ],
  ];

  return (
    <header className={`sticky-header ${isSticky ? "fixed" : ""}`}>
      <nav className="navbar">
        <div className="first-row">
          <a className="logo logo-desktop" href="/">
            <img width="140" height="37" alt="Logo" src="/logo.webp" />
          </a>

          <a className="logo-mobile" href="/">
            <img
              width="25"
              height="25"
              alt="Mobile Logo"
              src="/logo-mobile.png"
              loading="lazy"
            />
          </a>

          <div className="dropdown">
            <button
              type="button"
              className="dropbtn"
              onClick={() => handleDropdownToggle("Services")}
              aria-expanded={openDropdown === "Services"}
            >
              Services <ArrowIcon isOpen={openDropdown === "Services"} />
            </button>

            <div
              className={`dropdown-content ${
                openDropdown === "Services" ? "show" : ""
              }`}
            >
              <CloseMenuBar />
              <h3>High-End Appliances We Repair</h3>
              {renderColumns(servicesColumns)}
            </div>
          </div>

          <div className="dropdown">
            <button
              type="button"
              className="dropbtn"
              onClick={() => handleDropdownToggle("Brands")}
              aria-expanded={openDropdown === "Brands"}
            >
              Brands <ArrowIcon isOpen={openDropdown === "Brands"} />
            </button>

            <div
              className={`dropdown-content ${
                openDropdown === "Brands" ? "show" : ""
              }`}
            >
              <CloseMenuBar />
              {renderColumns(brandsColumns)}
            </div>
          </div>

          <div className="dropdown">
            <button
              type="button"
              className="dropbtn"
              onClick={() => handleDropdownToggle("Service Areas")}
              aria-expanded={openDropdown === "Service Areas"}
            >
              Service Areas{" "}
              <ArrowIcon isOpen={openDropdown === "Service Areas"} />
            </button>

            <div
              className={`dropdown-content ${
                openDropdown === "Service Areas" ? "show" : ""
              }`}
            >
              <CloseMenuBar />
              {renderColumns(serviceAreaColumns)}
            </div>
          </div>

          <div className="dropdown">
            <button
              type="button"
              className="dropbtn"
              onClick={() => handleDropdownToggle("Charity")}
              aria-expanded={openDropdown === "Charity"}
            >
              Charity <ArrowIcon isOpen={openDropdown === "Charity"} />
            </button>

            <div
              className={`dropdown-content ${
                openDropdown === "Charity" ? "show" : ""
              }`}
            >
              <CloseMenuBar />
              <h3>
                10% of the revenues goes towards helping low-income families fix
                their appliances!
              </h3>
            </div>
          </div>

          <a href="/book/" className="phone-number">
            BOOK Online
          </a>

          <a href="tel:+14244997788" className="phone-number">
            (424) 499-7788
          </a>
        </div>
      </nav>
    </header>
  );
};

export default MegaMenu;