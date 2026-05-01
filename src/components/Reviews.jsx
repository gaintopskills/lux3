import React, { useMemo, useState } from "react";
import "./Reviews.css";

const googleReviews = [
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Sub-Zero", "Refrigerator"],
    text: "Paste the real Google review text here. Keep the wording exactly as the customer wrote it."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Wolf", "Range"],
    text: "Paste another real Google review here. This section is designed for verified customer reviews."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Miele", "Dishwasher"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Thermador", "Oven"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Dishwasher"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Refrigerator"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Sub-Zero", "Freezer"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Wolf", "Cooktop"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Miele", "Dishwasher"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Sub-Zero", "Refrigerator"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Wolf", "Range"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Miele", "Dishwasher"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Thermador", "Oven"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Sub-Zero", "Freezer"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Wolf", "Cooktop"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Miele", "Dishwasher"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Refrigerator"],
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Dishwasher"],
    text: "Paste another real Google review here."
  }
];

const reviewFilters = [
  "All",
  "Sub-Zero",
  "Wolf",
  "Miele",
  "Thermador",
  "Dishwasher",
  "Refrigerator"
];

export default function GoogleReviews() {
  const reviewsPerLoad = 6;

  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(reviewsPerLoad);

  const filteredReviews = useMemo(() => {
    if (activeFilter === "All") {
      return googleReviews;
    }

    return googleReviews.filter((review) => {
      return review.categories.includes(activeFilter);
    });
  }, [activeFilter]);

  const visibleReviews = filteredReviews.slice(0, visibleCount);

  const hasMoreReviews = visibleCount < filteredReviews.length;

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(reviewsPerLoad);
  };

  const handleShowMore = () => {
    setVisibleCount((currentCount) => {
      return currentCount + reviewsPerLoad;
    });
  };

  return (
    <section className="zaricci-reviews-section" aria-labelledby="zaricci-reviews-title">
      <div className="zaricci-reviews-inner">
        <div className="zaricci-reviews-heading">
          <p className="zaricci-reviews-eyebrow">Google Reviews</p>

          <h2 id="zaricci-reviews-title">
            Trusted by Homeowners Across Los Angeles
          </h2>

          <p className="zaricci-reviews-intro">
            Real customer feedback from homeowners who rely on Luxury Appliance
            Repair by Zaricci for professional service, clear communication, and
            high-end appliance repair.
          </p>

          <div className="zaricci-reviews-summary">
            <span className="zaricci-rating-number">5.0</span>
            <span className="zaricci-rating-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
          </div>
        </div>

        <div className="zaricci-review-filters" aria-label="Filter reviews">
          {reviewFilters.map((filter) => {
            return (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "zaricci-filter-button active"
                    : "zaricci-filter-button"
                }
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="zaricci-reviews-grid">
          {visibleReviews.map((review, index) => {
            return (
              <article className="zaricci-review-card" key={`${review.name}-${index}`}>
                <div className="zaricci-review-top">
                  <div className="zaricci-review-avatar" aria-hidden="true">
                    {review.name.charAt(0)}
                  </div>

                  <div className="zaricci-review-name-wrap">
                    <h3>{review.name}</h3>
                    <p>{review.date}</p>
                  </div>
                </div>

                <div
                  className="zaricci-review-stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {"★".repeat(review.rating)}
                </div>

                <p className="zaricci-review-text">
                  “{review.text}”
                </p>

                <div className="zaricci-review-tags">
                  {review.categories.map((category) => {
                    return (
                      <span className="zaricci-review-tag" key={category}>
                        {category}
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        {filteredReviews.length === 0 && (
          <p className="zaricci-no-reviews">
            No reviews found for this category yet.
          </p>
        )}

        {hasMoreReviews && (
          <div className="zaricci-load-more-wrap">
            <button
              type="button"
              className="zaricci-load-more-button"
              onClick={handleShowMore}
            >
              Show More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}