import React from "react";
import "./Logos.css";

const brands = [
  {
    name: "AGA",
    href: "/aga-appliance-repair/",
    img: "/logo/aga-logo.png",
    alt: "AGA appliance repair"
  },
  {
    name: "Bertazzoni",
    href: "/bertazzoni-appliance-repair/",
    img: "/logo/bertazzoni-logo.png",
    alt: "Bertazzoni appliance repair"
  },
  {
    name: "Fulgor Milano",
    href: "/fulgor-milano-appliance-repair/",
    img: "/logo/fulgor-milano-logo.png",
    alt: "Fulgor Milano appliance repair"
  },
  {
    name: "Gaggenau",
    href: "/gaggenau-repair/",
    img: "/logo/gaggenau-logo.png",
    alt: "Gaggenau appliance repair"
  },
  {
    name: "ILVE",
    href: "/ilve-appliance-repair/",
    img: "/logo/ilve-logo.png",
    alt: "ILVE appliance repair"
  },
  {
    name: "Lacanche",
    href: "/lacanche-appliance-repair/",
    img: "/logo/lacanche-logo.png",
    alt: "Lacanche appliance repair"
  },
  {
    name: "La Cornue",
    href: "/la-cornue-appliance-repair/",
    img: "/logo/la-cornue-logo.png",
    alt: "La Cornue appliance repair"
  },
  {
    name: "Miele",
    href: "/miele-appliance-repair/",
    img: "/logo/miele-logo.png",
    alt: "Miele appliance repair"
  },
  {
    name: "Liebherr",
    href: "/liebherr-repair/",
    img: "/logo/liebherr-logo.png",
    alt: "Liebherr appliance repair"
  },
  {
    name: "Officine Gullo",
    href: "/officine-gullo-appliance-repair/",
    img: "/logo/officine-gullo-logo.png",
    alt: "Officine Gullo appliance repair"
  },
  {
    name: "American Range",
    href: "/american-range-repair/",
    img: "/logo/american-range.png",
    alt: "American Range appliance repair"
  },
  {
    name: "BlueStar",
    href: "/bluestar-appliance-repair/",
    img: "/logo/bluestar-logo.png",
    alt: "BlueStar appliance repair"
  },
  {
    name: "FiveStar",
    href: "/fivestar-appliance-repair/",
    img: "/logo/fivestar-logo.png",
    alt: "FiveStar appliance repair"
  },
  {
    name: "Thor",
    href: "/thor-appliance-repair/",
    img: "/logo/thor-logo.png",
    alt: "Thor appliance repair"
  },
  {
    name: "Forno",
    href: "/forno-appliance-repair/",
    img: "/logo/forno-logo.png",
    alt: "Forno appliance repair"
  },
  {
    name: "Garland",
    href: "/garland-appliance-repair/",
    img: "/logo/garland-logo.png",
    alt: "Garland appliance repair"
  },
  {
    name: "ZLINE",
    href: "/zline-appliance-repair/",
    img: "/logo/zline-logo.png",
    alt: "ZLINE appliance repair"
  },
  {
    name: "Sub-Zero",
    href: "/sub-zero-repair/",
    img: "/logo/sub-zero-logo.png",
    alt: "Sub-Zero appliance repair"
  },
  {
    name: "Fisher & Paykel",
    href: "/fisher-and-paykel-appliance-repair/",
    img: "/logo/fisher-and-paykel-logo.png",
    alt: "Fisher & Paykel appliance repair"
  },
  {
    name: "Wolf",
    href: "/wolf-appliance-repair/",
    img: "/logo/wolf.png",
    alt: "Wolf appliance repair"
  },
  {
    name: "Thermador",
    href: "/thermador-appliance-repair/",
    img: "/logo/thermador.png",
    alt: "Thermador appliance repair"
  },
  {
    name: "True Residential",
    href: "/true-residential-appliance-repair/",
    img: "/logo/true-residential.png",
    alt: "True Residential appliance repair"
  },
  {
    name: "Viking",
    href: "/viking-appliance-repair/",
    img: "/logo/viking.png",
    alt: "Viking appliance repair"
  },
  {
    name: "Monogram",
    href: "/monogram-appliance-repair/",
    img: "/logo/monogram-logo.png",
    alt: "Monogram appliance repair"
  },
  {
    name: "Signature Kitchen Suite",
    href: "/signature-kitchen-suite-appliance-repair/",
    img: "/logo/signature.png",
    alt: "Signature Kitchen Suite appliance repair"
  },
  {
    name: "Hestan",
    href: "/hestan-appliance-repair/",
    img: "/logo/hestan.png",
    alt: "Hestan appliance repair"
  },
  {
    name: "Dacor",
    href: "/dacor-appliance-repair/",
    img: "/logo/dacor.png",
    alt: "Dacor appliance repair"
  },
  {
    name: "Cove",
    href: "/cove-appliance-repair/",
    img: "/logo/cove.png",
    alt: "Cove appliance repair"
  },
  {
    name: "Big Chill",
    href: "/big-chill-appliance-repair/",
    img: "/logo/big-chill-logo.png",
    alt: "Big Chill appliance repair"
  },
  {
    name: "Elmira Stove Works",
    href: "/elmira-stove-works-appliance-repair/",
    img: "/logo/elmira-stove-works-logo.png",
    alt: "Elmira Stove Works appliance repair"
  },
  {
    name: "Smeg",
    href: "/smeg-appliance-repair/",
    img: "/logo/smeg-logo.png",
    alt: "Smeg appliance repair"
  },
  {
    name: "Heartland",
    href: "/heartland-appliance-repair/",
    img: "/logo/heartland-logo.png",
    alt: "Heartland appliance repair"
  },
  {
    name: "Asko",
    href: "/asko-appliance-repair/",
    img: "/logo/asko-logo.png",
    alt: "Asko appliance repair"
  },
  {
    name: "Bosch",
    href: "/bosch-appliance-repair/",
    img: "/logo/bosch-logo.png",
    alt: "Bosch appliance repair"
  },
  {
    name: "JennAir",
    href: "/jennair-appliance-repair/",
    img: "/logo/jennair-logo.png",
    alt: "JennAir appliance repair"
  },
  {
    name: "Kalamazoo",
    href: "/kalamazoo-appliance-repair/",
    img: "/logo/kalamazoo-logo.png",
    alt: "Kalamazoo appliance repair"
  },
  {
    name: "Lynx",
    href: "/lynx-repair/",
    img: "/logo/lynx-logo.png",
    alt: "Lynx appliance repair"
  },
  {
    name: "DCS",
    href: "/dcs-appliance-repair/",
    img: "/logo/dcs-logo.png",
    alt: "DCS appliance repair"
  },
  {
    name: "Alfresco",
    href: "/alfresco-appliance-repair/",
    img: "/logo/alfresco-logo.png",
    alt: "Alfresco appliance repair"
  },
  {
    name: "Twin Eagles",
    href: "/twin-eagles-repair/",
    img: "/logo/twin-eagles-logo.png",
    alt: "Twin Eagles appliance repair"
  },
  {
    name: "Fire Magic",
    href: "/fire-magic-repair/",
    img: "/logo/fire-magic-logo.png",
    alt: "Fire Magic appliance repair"
  },
  {
    name: "Caliber",
    href: "/caliber-appliance-repair/",
    img: "/logo/caliber-logo.png",
    alt: "Caliber appliance repair"
  }
];

const BrandsLogoBlock = () => {
  return (
    <section className="brands-logo-section">
      <div className="brands-logo-inner">
        <div className="brands-logo-heading">
          <span></span>
          <h2>Brands We Work With</h2>
          <span></span>
        </div>

        <p className="brands-logo-subtitle">
          European, luxury, pro-style, retro, high-end, and outdoor kitchen appliance brands.
        </p>

        <div className="brands-logo-grid">
          {brands.map((brand) => (
            <a
              className="brand-logo-link"
              href={brand.href}
              aria-label={`${brand.name} appliance repair`}
              title={`${brand.name} appliance repair`}
              key={brand.name}
            >
              <img
                src={brand.img}
                alt={brand.alt}
                width="150"
                height="80"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsLogoBlock;