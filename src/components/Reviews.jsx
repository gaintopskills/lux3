import React, { useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    name: "Google Customer",
    service: "Sub-Zero Refrigerator Repair",
    text: "Professional, on time, and very clear about the repair process.",
  },
  {
    id: 2,
    name: "Google Customer",
    service: "Wolf Range Repair",
    text: "Excellent service, respectful technician, and clear communication.",
  },
  {
    id: 3,
    name: "Google Customer",
    service: "Miele Dishwasher Repair",
    text: "The technician arrived on time and explained everything clearly.",
  },
  {
    id: 4,
    name: "Google Customer",
    service: "Thermador Oven Repair",
    text: "Very professional service from start to finish.",
  },
  {
    id: 5,
    name: "Google Customer",
    service: "La Cornue Range Repair",
    text: "Careful, knowledgeable, and very professional.",
  },
  {
    id: 6,
    name: "Google Customer",
    service: "Cove Dishwasher Repair",
    text: "On time, professional, and clear communication.",
  },
  {
    id: 7,
    name: "Google Customer",
    service: "Gaggenau Appliance Repair",
    text: "Very knowledgeable with high-end appliances.",
  },
  {
    id: 8,
    name: "Google Customer",
    service: "True Residential Refrigerator Repair",
    text: "Careful work and professional communication.",
  },
];

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleReviews = reviewsData.slice(0, visibleCount);
  const hasMore = visibleCount < reviewsData.length;

  return (
    <section className="reviewSection">
      <div className="reviewHeader">
        <p className="reviewEyebrow">Customer Reviews</p>
        <h2>Luxury Appliance Repair Reviews</h2>
        <p>Real customer feedback for high-end appliance repair service.</p>
      </div>

      <div className="reviewGrid">
        {visibleReviews.map((review) => (
          <article className="reviewCard" key={review.id}>
            <div className="reviewStars">★★★★★</div>
            <h3>{review.service}</h3>
            <p>{review.text}</p>
            <span>{review.name}</span>
          </article>
        ))}
      </div>

      <div className="reviewButtons">
        {hasMore && (
          <button
            type="button"
            className="reviewButton"
            onClick={() => setVisibleCount(visibleCount + 3)}
          >
            Load More Reviews
          </button>
        )}

        {visibleCount > 3 && (
          <button
            type="button"
            className="reviewButton reviewButtonLight"
            onClick={() => setVisibleCount(3)}
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}