import React, { useMemo, useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    brand: "Sub-Zero",
    service: "Sub-Zero Refrigerator Repair",
    text: "Professional, on time, and very clear about the repair process.",
  },
  
  {
    id: 2,
    brand: "Wolf",
    service: "Wolf Range Repair",
    text: "11",
  },
  {
    id: 3,
    brand: "Miele",
    service: "Miele Dishwasher Repair",
    text: "The technician arrived on time and explained everything clearly.",
  },
  {
    id: 4,
    brand: "Thermador",
    service: "Thermador Oven Repair",
    text: "Very professional service from start to finish.",
  },
  {
    id: 5,
    brand: "La Cornue",
    service: "La Cornue Range Repair",
    text: "Careful, knowledgeable, and very professional.",
  },
  {
    id: 6,
    brand: "Cove",
    service: "Cove Dishwasher Repair",
    text: "On time, professional, and clear communication.",
  },
  {
    id: 7,
    brand: "Gaggenau",
    service: "Gaggenau Appliance Repair",
    text: "Very knowledgeable with high-end appliances.",
  },
  {
    id: 8,
    brand: "True Residential",
    service: "True Residential Refrigerator Repair",
    text: "Careful work and professional communication.",
  },
];

export default function Reviews() {
  const INITIAL_VISIBLE = 6;
  const LOAD_STEP = 6;

  const [selectedBrand, setSelectedBrand] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const brands = useMemo(() => {
    return ["All", ...new Set(reviewsData.map((review) => review.brand))];
  }, []);

  const filteredReviews = useMemo(() => {
    if (selectedBrand === "All") {
      return reviewsData;
    }

    return reviewsData.filter((review) => review.brand === selectedBrand);
  }, [selectedBrand]);

  const visibleReviews = filteredReviews.slice(0, visibleCount);

  const hasMoreReviews = visibleCount < filteredReviews.length;
  const canShowLess = visibleCount > INITIAL_VISIBLE;

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleLoadMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + LOAD_STEP, filteredReviews.length)
    );
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section className="reviewSection">
      <div className="reviewHeader">
        <p className="reviewEyebrow">Customer Reviews</p>
        <h2>Luxury Appliance Repair Reviews</h2>
        <p>
          Real customer feedback for luxury and high-end appliance repair service.
        </p>
      </div>

      <div className="brandButtons">
        {brands.map((brand) => (
          <button
            key={brand}
            type="button"
            className={
              selectedBrand === brand
                ? "brandButton brandButtonActive"
                : "brandButton"
            }
            onClick={() => handleBrandClick(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="reviewGrid">
        {visibleReviews.map((review) => (
          <article className="reviewCard" key={review.id}>
            <div className="reviewStars">★★★★★</div>
            <h3>{review.service}</h3>
            <p>{review.text}</p>
            <span>Google Customer</span>
          </article>
        ))}
      </div>

      <div className="reviewButtons">
        {hasMoreReviews && (
          <button
            type="button"
            className="reviewButton"
            onClick={handleLoadMore}
          >
            Load More Reviews
          </button>
        )}

        {canShowLess && (
          <button
            type="button"
            className="reviewButton reviewButtonLight"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}