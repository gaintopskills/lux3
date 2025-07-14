import React, { useState } from "react";
import "./Offers.css";
const offers = [
  {
    id: 1,
    title: "",
    subtitle: "Sub-Zero Repair",
    description: "We repair Sub-zero refrigerators, freezers, wine coolers, beverage centers, ice makers.",
    image: "/sub-zero/sub-zero-appliance-repair.webp",
  },
  {
    id: 2,
    title: "",
    subtitle: "Wolf Reapair",
    description:
      "We repair Wolf ranges, ovens, cooktops, and warming drawers, ventelation hoods, coffee systems, griddles & grills",
    image: "/wolf/wolf-appliance-repair.webp",
  },
  {
    id: 3,
    title: "",
    subtitle: "Miele Repair",
    description:
      "We repair Miele ovens, cooktops, ranges, warming drawers, coffee systems, refrigerators, dishwashers, washers & dryers, range hoods",
    image: "/miele/miele-appliance-repair.webp",
  },
  {
    id: 4,
    title: "",
    subtitle: "Viking Repair",
    description:
      "We repair Viking ranges, ovens, cooktops, refrigerators, warming drawers, hoods, wine cellars, beverage centers, ice makers, freezers",
    image: "/viking/viking-appliance-repair.webp",
  },
  {
    id: 5,
    title: "",
    subtitle: "Thermador Repair",
    description:
      "We repair Thermador ranges, ovens, cooktops, range tops, hoods, refrigerators, freezers, wine coolers, beverage centers",
    image: "/thermador/thermador-appliance-repair.webp",
  },
  {
    id: 6,
    title: "",
    subtitle: "Bosch Repair",
    description:
      "We repair Bosch ovens, ranges, cooktops, warming drawers, refrigerators, freezers, wine coolers, beverage centers, dishwashers, washing machines, dryers, & coffee machines",
    image: "/bosch/bosch-appliance-repair.webp",
  },
  {
    id: 7,
    title: "",
    subtitle: "Cove Repair",
    description:
      "We repair Cove dishwashers and handle all Cove appliance service needs with expert care",
    image: "/cove/cove-appliance-repair.webp",
  },
  {
    id: 8,
    title: "",
    subtitle: "JennAir Repair",
    description:
      "We repair JennAir ranges, ovens, cooktops, warming drawers, hoods, refrigerators, freezers, wine cellars, beverage centers, ice makers, dishwashers, & coffee machines",
    image: "/jennair/jennair-appliance-repair.webp",
  },
  {
    id: 9,
    title: "",
    subtitle: "Monogram Repair",
    description:
      "We repair Monogram ranges, ovens, cooktops, range tops, warming drawers, hoods, refrigerators, freezers, wine coolers, beverage centers, ice makers, dishwashers, coffee machines",
    image: "/monogram/monogram-appliance-repair.webp",
  },
  {
    id: 10,
    title: "",
    subtitle: "Dacor Repair",
    description:
      "We repair Dacor ovens, ranges, cooktops, refrigerators, dishwashers, and ventilation hoods",
    image: "/dacor/dacor-appliance-repair.webp",
  },
  {
    id: 11,
    title: "",
    subtitle: "Fisher & Paykel Repair",
    description:
      "We repair Fisher & Paykel refrigerators, ovens, cooktops, dishwashers, washer-dryer combos, ventilation hoods, and built-in BBQ grills",
    image: "/fisherpaykel/fisher-and-paykel-appliance-repair.webp",
  },
  {
    id: 12,
    title: "",
    subtitle: "AGA Repair",
    description:
      "We repair AGA ranges, cookers, ovens, refrigerators, and dishwashers",
    image: "/aga/aga-appliance-repair-services.webp",
  },
  {
    id: 13,
    title: "",
    subtitle: "",
    description:
      "We repair Bertazzoni ranges, ovens, cooktops, refrigerators, dishwashers, and ventilation hoods",
    image: "/bertazzoni/bertazzoni-appliance-repair.webp",
  },
  {
    id: 14,
    title: "",
    subtitle: "",
    description:
      "We repair BlueStar ranges, ovens, cooktops, refrigerators, and ventilation hoods",
    image: "/bluestar/bluestar-appliance-repair.webp",
  },
  {
    id: 15,
    title: "",
    subtitle: "KitchenAid",
    description:
      "We repair KitchenAid ovens, ranges, cooktops, refrigerators, dishwashers, and ventilation hoods",
    image: "/kitchenaid/kitchenaid-appliance-repair.webp",
  }
];
const Services = () => {
  const [flipped, setFlipped] = useState(Array(offers.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };
  return (
    <div className="wrapper">
      <h2>Main Brands We Repair</h2>
      <div className="cols">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`col ${flipped[index] ? "hover" : ""}`}
            onClick={() => handleFlip(index)}
            onTouchStart={() => handleFlip(index)}
          >
            <div className="container">
            <div
  className="front"
  style={{ backgroundImage: `url(${offer.image})` }}
>
  <div className="overlay"></div> {/* New overlay div */}
  <div className="inner">
    <p>{offer.title}</p>
    
  </div>
</div>
<div className="back">
                <div className="inner">
                <h3>{offer.subtitle}</h3>
                  <p>{offer.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
