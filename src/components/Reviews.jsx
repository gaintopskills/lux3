import React, { useMemo, useState } from "react";
import "./Reviews.css";

const googleReviews = [
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Sub-Zero", "Refrigerator"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Wolf", "Range"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Miele", "Dishwasher"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Thermador", "Oven"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Sub-Zero", "Freezer"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Wolf", "Cooktop"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Miele", "Dishwasher"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Refrigerator"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Dishwasher"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Sub-Zero", "Refrigerator"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Wolf", "Range"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Miele", "Dishwasher"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Thermador", "Oven"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Sub-Zero", "Freezer"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Wolf", "Cooktop"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Miele", "Dishwasher"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Refrigerator"],
    text: "Paste the real Google review text here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    categories: ["Dishwasher"],
    text: "Paste the real Google review text here."
  }
  
];

const reviewFilters = [
  "All",
  "Sub-Zero",
  "Wolf",
  "Miele",
  "Thermador",
  "Refrigerator",
  "Dishwasher"
];

export default function GoogleReviews() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

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
    setVisibleCount(6);
  };

  const handleShowMore = () => {
    setVisibleCount((currentCount) => currentCount + 6);
  };

  return (
    <section className="google-reviews-section" aria-labelledby="google-reviews-title">
      <div className="google-reviews-inner">
        <div className="reviews-header">
          <p className="reviews-eyebrow">Google Reviews</p>

          <h2 id="google-reviews-title">
            Trusted by Homeowners Across Los Angeles
          </h2>

          <p className="reviews-intro">
            Rated 5 stars by customers who rely on us for luxury appliance repair,
            clear communication, and professional in-home service.
          </p>

          <div className="reviews-summary" aria-label="Google rating summary">
            <div className="summary-rating">
              <span className="summary-number">5.0</span>
              <span className="summary-stars" aria-label="5 out of 5 stars">★★★★★</span>
            </div>

            <div className="summary-text">
              <strong>50+ Google reviews</strong>
              <span>Verified customer feedback from local appliance repair appointments.</span>
            </div>
          </div>

          <div className="reviews-actions">
            <a
              className="reviews-primary-link"
              href="YOUR_GOOGLE_REVIEWS_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Reviews on Google
            </a>

            <a
              className="reviews-secondary-link"
              href="YOUR_GOOGLE_REVIEW_REQUEST_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Review
            </a>
          </div>
        </div>

        <div className="reviews-filter-bar" aria-label="Filter reviews by service type">
          {reviewFilters.map((filter) => {
            return (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "filter-button active" : "filter-button"}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="reviews-grid">
          {visibleReviews.map((review, index) => {
            return (
              <article className="review-card" key={`${review.name}-${index}`}>
                <div className="review-card-top">
                  <div className="review-avatar" aria-hidden="true">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.date}</p>
                  </div>
                </div>

                <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {"★".repeat(review.rating)}
                </div>

                <p className="review-text">
                  “{review.text}”
                </p>

                <div className="review-tags">
                  {review.categories.map((category) => {
                    return (
                      <span className="review-category" key={category}>
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
          <p className="no-reviews-message">
            No reviews found for this category yet.
          </p>
        )}

        {hasMoreReviews && (
          <div className="reviews-load-more-wrap">
            <button
              type="button"
              className="load-more-reviews"
              onClick={handleShowMore}
            >
              View More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}