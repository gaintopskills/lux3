import React, { useState } from "react";
import "./Offers.css"; // Import the CSS styles

const offers = [
  {
    id: 1,
    title: "5% Off",
    subtitle: "For Booking Online",
    description: "Book online to have a 5% discount",
    image: "book.jpeg",
  },
  {
    id: 2,
    title: "10% Off",
    subtitle: "Comprehensive Maintenance",
    description:
      "We offer 10% off comprehensive household appliance maintenance for return customers.",
    image: "maintenance.jpeg",
  },
  {
    id: 3,
    title: "15% to 30% Off",
    subtitle: "Your Existing Written Invoice",
    description:
      "We offer a discount for a written invoice from another company providing competitive pricing.",
    image: "invoice.jpeg",
  },
  {
    id: 4,
    title: "Extended 1 Year Warranty",
    subtitle: "For High-End Appliances",
    description:
      "We offer an extended 1-year warranty for High-End appliances assuring you in our expert repair.",
    image: "warranty5.jpeg",
  },
  {
    id: 5,
    title: "Same-Day Appointment",
    subtitle: "Next-day if scheduled at the end of the day.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit.",
    image: "same-day.jpg",
  },
];

const Offers = () => {
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
      <h2>Offers</h2>
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

export default Offers;
