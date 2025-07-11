import React, { useState } from "react";
import "./Offers.css";
const offers = [
  {
    id: 1,
    title: "",
    subtitle: "Sub-Zero Repair",
    description: "We repair Sub-zero refrigerators, freezers, wine coolers, warming drawers",
    image: "/sub-zero/sub-zero-appliance-repair.webp",
  },
  {
    id: 2,
    title: "",
    subtitle: "Wolf Reapair",
    description:
      "We offer 10% off comprehensive household appliance maintenance for return customers.",
    image: "/wolf/wolf-appliance-repair.webp",
  },
  {
    id: 3,
    title: "",
    subtitle: "Miele Repair",
    description:
      "We offer a discount for a written invoice from another company providing competitive pricing.",
    image: "/miele/miele-appliance-repair.webp",
  },
  {
    id: 4,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/viking/viking-appliance-repair.webp",
  },
  {
    id: 5,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/thermador/thermador-appliance-repair.webp",
  },
  {
    id: 6,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/bosch/bosch-appliance-repair.webp",
  },
  {
    id: 7,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/cove/cove-appliance-repair.webp",
  },
  {
    id: 8,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/jennair/jennair-appliance-repair.webp",
  },
  {
    id: 9,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/monogram/monogram-appliance-repair.webp",
  },
  {
    id: 10,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/dacor/dacor-appliance-repair.webp",
  },
  {
    id: 11,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/fisherpaykel/fisher-and-paykel-appliance-repair.webp",
  },
  {
    id: 12,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/aga/aga-appliance-repair-services.webp",
  },
  {
    id: 13,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/bertazzoni/bertazzoni-appliance-repair.webp",
  },
  {
    id: 14,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "/bluestar/bluestar-appliance-repair.webp",
  },
  {
    id: 15,
    title: "",
    subtitle: "",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
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
      <h2>Services</h2>
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
                <h2>{offer.subtitle}</h2>
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
