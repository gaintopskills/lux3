import React, { useMemo, useState } from "react";
import "./ReviewsWidget.css";

const googleReviews = [
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    category: "Sub-Zero",
    text: "Paste the real Google review text here. Keep the wording exactly as the customer wrote it."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    category: "Wolf",
    text: "Paste another real Google review here. This section is designed for verified customer reviews."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    category: "Miele",
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    category: "Thermador",
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    category: "Dishwasher",
    text: "Paste another real Google review here."
  },
  {
    name: "Reviewer Name",
    date: "Google Review",
    rating: 5,
    category: "Refrigerator",
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
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredReviews = useMemo(() => {
    if (activeFilter === "All") {
      return googleReviews;
    }

    return googleReviews.filter((review) => {
      return review.category === activeFilter;
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
          <p className="reviews-eyebrow">
            Google Reviews
          </p>

          <h2 id="google-reviews-title">
            Trusted by Homeowners Across Los Angeles
          </h2>

          <p className="reviews-intro">
            Rated 5 stars by customers who rely on us for luxury appliance repair,
            clear communication, and professional in-home service.
          </p>

          <div className="reviews-summary" aria-label="Google rating summary">
            <div className="summary-rating">
              <span className="summary-number">
                5.0
              </span>

              <span className="summary-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
            </div>

            <div className="summary-text">
              <strong>
                50+ Google reviews
              </strong>

              <span>
                Verified customer feedback from local appliance repair appointments.
              </span>
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
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                className={isActive ? "filter-button active" : "filter-button"}
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
                    <h3>
                      {review.name}
                    </h3>

                    <p>
                      {review.date}
                    </p>
                  </div>
                </div>

                <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {"★".repeat(review.rating)}
                </div>

                <p className="review-text">
                  “{review.text}”
                </p>

                <span className="review-category">
                  {review.category}
                </span>
              </article>
            );
          })}
        </div>

        {hasMoreReviews && (
          <div className="reviews-load-more-wrap">
            <button
              type="button"
              className="load-more-reviews"
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