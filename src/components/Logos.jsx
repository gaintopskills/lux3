import React from "react";
import "./Logos.css";

const brands = [
  {
    name: "AGA",
    href: "/aga-appliance-repair/",
    img: "/logo/aga-logo.png",
    alt: "AGA appliance repair logo"
  },
  {
    name: "Bertazzoni",
    href: "/bertazzoni-appliance-repair/",
    img: "/logo/bertazzoni-logo.png",
    alt: "Bertazzoni appliance repair logo"
  },
  {
    name: "Fulgor Milano",
    href: "/fulgor-milano-appliance-repair/",
    img: "/logo/fulgor-milano-logo.png",
    alt: "Fulgor Milano appliance repair logo"
  },
  {
    name: "Gaggenau",
    href: "/gaggenau-repair/",
    img: "/logo/gaggenau-logo.png",
    alt: "Gaggenau appliance repair logo"
  },
  {
    name: "ILVE",
    href: "/ilve-appliance-repair/",
    img: "/logo/ilve-logo.png",
    alt: "ILVE appliance repair logo"
  },
  {
    name: "Lacanche",
    href: "/lacanche-appliance-repair/",
    img: "/logo/lacanche-logo.png",
    alt: "Lacanche appliance repair logo"
  },
  {
    name: "La Cornue",
    href: "/la-cornue-appliance-repair/",
    img: "/logo/la-cornue-logo.png",
    alt: "La Cornue appliance repair logo"
  },
  {
    name: "Miele",
    href: "/miele-appliance-repair/",
    img: "/logo/miele-logo.png",
    alt: "Miele appliance repair logo"
  },
  {
    name: "Liebherr",
    href: "/liebherr-repair/",
    img: "/logo/liebherr-logo.png",
    alt: "Liebherr appliance repair logo"
  },
  {
    name: "Officine Gullo",
    href: "/officine-gullo-appliance-repair/",
    img: "/logo/officine-gullo-logo.png",
    alt: "Officine Gullo appliance repair logo"
  },
  {
    name: "American Range",
    href: "/american-range-repair/",
    img: "/logo/american-range.png",
    alt: "American Range appliance repair logo"
  },
  {
    name: "BlueStar",
    href: "/bluestar-appliance-repair/",
    img: "/logo/bluestar-logo.png",
    alt: "BlueStar appliance repair logo"
  },
  {
    name: "FiveStar",
    href: "/fivestar-appliance-repair/",
    img: "/logo/fivestar-logo.png",
    alt: "FiveStar appliance repair logo"
  },
  {
    name: "Thor",
    href: "/thor-appliance-repair/",
    img: "/logo/thor-logo.png",
    alt: "Thor appliance repair logo"
  },
  {
    name: "Forno",
    href: "/forno-appliance-repair/",
    img: "/logo/forno-logo.png",
    alt: "Forno appliance repair logo"
  },
  {
    name: "Garland",
    href: "/garland-appliance-repair/",
    img: "/logo/garland-logo.png",
    alt: "Garland appliance repair logo"
  },
  {
    name: "ZLINE",
    href: "/zline-repair/",
    img: "/logo/zline-logo.png",
    alt: "ZLINE appliance repair logo"
  },
  {
    name: "Sub-Zero",
    href: "/sub-zero-repair/",
    img: "/logo/sub-zero-logo.png",
    alt: "Sub-Zero appliance repair logo"
  },
  {
    name: "Fisher & Paykel",
    href: "/fisher-and-paykel-appliance-repair/",
    img: "/logo/fisher-and-paykel-logo.png",
    alt: "Fisher & Paykel appliance repair logo"
  },
  {
    name: "Wolf",
    href: "/wolf-appliance-repair/",
    img: "/logo/wolf.png",
    alt: "Wolf appliance repair logo"
  },
  {
    name: "Thermador",
    href: "/thermador-appliance-repair/",
    img: "/logo/thermador.png",
    alt: "Thermador appliance repair logo"
  },
  {
    name: "True Residential",
    href: "/true-residential-appliance-repair/",
    img: "/logo/true-residential.png",
    alt: "True Residential appliance repair logo"
  },
  {
    name: "Viking",
    href: "/viking-appliance-repair/",
    img: "/logo/viking.png",
    alt: "Viking appliance repair logo"
  },
  {
    name: "Monogram",
    href: "/monogram-appliance-repair/",
    img: "/logo/monogram-logo.png",
    alt: "Monogram appliance repair logo"
  },
  {
    name: "Signature Kitchen Suite",
    href: "/signature-kitchen-suite-appliance-repair/",
    img: "/logo/signature.png",
    alt: "Signature Kitchen Suite appliance repair logo"
  },
  {
    name: "Hestan",
    href: "/hestan-appliance-repair/",
    img: "/logo/hestan.png",
    alt: "Hestan appliance repair logo"
  },
  {
    name: "Dacor",
    href: "/dacor-appliance-repair/",
    img: "/logo/dacor.png",
    alt: "Dacor appliance repair logo"
  },
  {
    name: "Cove",
    href: "/cove-appliance-repair/",
    img: "/logo/cove.png",
    alt: "Cove appliance repair logo"
  },
  {
    name: "Big Chill",
    href: "/big-chill-appliance-repair/",
    img: "/logo/big-chill-logo.png",
    alt: "Big Chill appliance repair logo"
  },
  {
    name: "Elmira Stove Works",
    href: "/elmira-stove-works-appliance-repair/",
    img: "/logo/elmira-stove-works-logo.png",
    alt: "Elmira Stove Works appliance repair logo"
  },
  {
    name: "Smeg",
    href: "/smeg-appliance-repair/",
    img: "/logo/smeg-logo.png",
    alt: "Smeg appliance repair logo"
  },
  {
    name: "Heartland",
    href: "/heartland-appliance-repair/",
    img: "/logo/heartland-logo.png",
    alt: "Heartland appliance repair logo"
  },
  {
    name: "Asko",
    href: "/asko-appliance-repair/",
    img: "/logo/asko-logo.png",
    alt: "Asko appliance repair logo"
  },
  {
    name: "Bosch",
    href: "/bosch-appliance-repair/",
    img: "/logo/bosch-logo.png",
    alt: "Bosch appliance repair logo"
  },
  {
    name: "JennAir",
    href: "/jennair-appliance-repair/",
    img: "/logo/jennair-logo.png",
    alt: "JennAir appliance repair logo"
  },
  {
    name: "Kalamazoo",
    href: "/kalamazoo-appliance-repair/",
    img: "/logo/kalamazoo-logo.png",
    alt: "Kalamazoo appliance repair logo"
  },
  {
    name: "Lynx",
    href: "/lynx-repair/",
    img: "/logo/lynx-logo.png",
    alt: "Lynx appliance repair logo"
  },
  {
    name: "DCS",
    href: "/dcs-appliance-repair/",
    img: "/logo/dcs-logo.png",
    alt: "DCS appliance repair logo"
  },
  {
    name: "Alfresco",
    href: "/alfresco-appliance-repair/",
    img: "/logo/alfresco-logo.png",
    alt: "Alfresco appliance repair logo"
  },
  {
    name: "Twin Eagles",
    href: "/twin-eagles-repair/",
    img: "/logo/twin-eagles-logo.png",
    alt: "Twin Eagles appliance repair logo"
  },
  {
    name: "Fire Magic",
    href: "/fire-magic-repair/",
    img: "/logo/fire-magic-logo.png",
    alt: "Fire Magic appliance repair logo"
  },
  {
    name: "Wolf Outdoors",
    href: "/wolf-outdoor-appliance-repair/",
    img: "/logo/wolf-appliance-repair.png",
    alt: "Wolf outdoor appliance repair logo"
  },
  {
    name: "True Residential Outdoor",
    href: "/true-residential-outdoor-appliance-repair/",
    img: "/logo/true-residential-appliance-repair.png",
    alt: "True Residential outdoor appliance repair logo"
  },
  {
    name: "Caliber",
    href: "/caliber-appliance-repair/",
    img: "/logo/caliber-logo.png",
    alt: "Caliber appliance repair logo"
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