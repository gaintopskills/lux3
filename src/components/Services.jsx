import React, { useState } from "react";

const offers = [
  {
    id: 1,
    title: "",
    subtitle: "",
    description: "We repair Sub-zero refrigerators, freezers, wine coolers, warming drawers",
    image: "/sub-zero/sub-zero-appliance-repair.webp",
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    description:
      "We offer 10% off comprehensive household appliance maintenance for return customers.",
    image: "/wolf/wolf-appliance-repair.webp",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
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
    <span>{offer.subtitle}</span>
  </div>
</div>
<div className="back">
                <div className="inner">
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
