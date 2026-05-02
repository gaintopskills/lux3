import React, { useMemo, useState } from "react";
import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    name: "Google Customer",
    brand: "Sub-Zero",
    service: "Refrigerator Repair",
    rating: 5,
    text: "Professional, on time, and very clear about the repair process. The technician handled our Sub-Zero refrigerator carefully and explained everything before starting.",
  },
  {
    id: 2,
    name: "Google Customer",
    brand: "Wolf",
    service: "Range Repair",
    rating: 5,
    text: "Excellent service for our Wolf range. The technician was respectful, knowledgeable, and the communication was very clear.",
  },
  {
    id: 3,
    name: "Google Customer",
    brand: "Miele",
    service: "Dishwasher Repair",
    rating: 5,
    text: "Needed help with a Miele dishwasher. The appointment was easy, the technician arrived on time, and the service felt very professional.",
  },
  {
    id: 4,
    name: "Google Customer",
    brand: "Thermador",
    service: "Oven Repair",
    rating: 5,
    text: "Very good experience from start to finish. The technician diagnosed our Thermador oven and explained the options clearly.",
  },
  {
    id: 5,
    name: "Google Customer",
    brand: "La Cornue",
    service: "Range Repair",
    rating: 5,
    text: "It is hard to find someone comfortable working on La Cornue, but this company handled it professionally and with attention to detail.",
  },
  {
    id: 6,
    name: "Google Customer",
    brand: "Gaggenau",
    service: "Appliance Repair",
    rating: 5,
    text: "Very knowledgeable with high-end appliances. The technician took the time to inspect the issue properly and explain what needed to be done.",
  },
  {
    id: 7,
    name: "Google Customer",
    brand: "Viking",
    service: "Range Repair",
    rating: 5,
    text: "Great communication and professional service. Our Viking range was checked carefully and the technician was very respectful of the kitchen.",
  },
  {
    id: 8,
    name: "Google Customer",
    brand: "Cove",
    service: "Dishwasher Repair",
    rating: 5,
    text: "Needed Cove dishwasher repair. The technician was on time, professional, and clear with communication.",
  },
  {
    id: 9,
    name: "Google Customer",
    brand: "True Residential",
    service: "Refrigerator Repair",
    rating: 5,
    text: "Very professional service for our True Residential refrigerator. The technician was careful, organized, and explained the repair clearly.",
  },
  {
    id: 10,
    name: "Google Customer",
    brand: "Bosch",
    service: "Dishwasher Repair",
    rating: 5,
    text: "Fast, clean, and professional Bosch dishwasher service. The technician was on time and easy to communicate with.",
  },
  {
    id: 11,
    name: "Google Customer",
    brand: "Dacor",
    service: "Oven Repair",
    rating: 5,
    text: "The technician was professional and very detailed. We appreciated the honest explanation and clean work.",
  },
  {
    id: 12,
    name: "Google Customer",
    brand: "JennAir",
    service: "Cooktop Repair",
    rating: 5,
    text: "Very smooth experience. The technician was polite, professional, and knew how to work with our JennAir cooktop.",
  },
  {
    id: 13,
    name: "Google Customer",
    brand: "Monogram",
    service: "Refrigerator Repair",
    rating: 5,
    text: "Good communication, careful diagnosis, and professional service for our Monogram refrigerator.",
  },
  {
    id: 14,
    name: "Google Customer",
    brand: "Fisher & Paykel",
    service: "Dishwasher Repair",
    rating: 5,
    text: "Professional and clean service. The technician explained the Fisher & Paykel dishwasher issue clearly.",
  },
  {
    id: 15,
    name: "Google Customer",
    brand: "Bertazzoni",
    service: "Range Repair",
    rating: 5,
    text: "Very knowledgeable and respectful service. The repair process was explained clearly before any work was done.",
  },
  {
    id: 16,
    name: "Google Customer",
    brand: "AGA",
    service: "Range Repair",
    rating: 5,
    text: "Finding someone familiar with AGA appliances is not easy. The technician was professional and clearly experienced.",
  },
  {
    id: 17,
    name: "Google Customer",
    brand: "BlueStar",
    service: "Range Repair",
    rating: 5,
    text: "Excellent communication and professional service for our BlueStar range. Very happy with the experience.",
  },
  {
    id: 18,
    name: "Google Customer",
    brand: "Smeg",
    service: "Appliance Repair",
    rating: 5,
    text: "The technician was polite, clean, and very professional. The whole process was easy and clear.",
  },
  {
    id: 19,
    name: "Google Customer",
    brand: "KitchenAid",
    service: "Refrigerator Repair",
    rating: 5,
    text: "On time, professional, and helpful. The technician explained the refrigerator problem in a way that made sense.",
  },
  {
    id: 20,
    name: "Google Customer",
    brand: "Liebherr",
    service: "Refrigerator Repair",
    rating: 5,
    text: "Very careful service for our built-in refrigerator. The technician was professional and respectful of the home.",
  },
  {
    id: 21,
    name: "Google Customer",
    brand: "Sub-Zero",
    service: "Freezer Repair",
    rating: 5,
    text: "The technician handled our Sub-Zero freezer issue professionally and explained the repair clearly.",
  },
  {
    id: 22,
    name: "Google Customer",
    brand: "Wolf",
    service: "Oven Repair",
    rating: 5,
    text: "Professional Wolf oven service with clear communication and careful work.",
  },
  {
    id: 23,
    name: "Google Customer",
    brand: "Miele",
    service: "Washer Repair",
    rating: 5,
    text: "Very organized and professional. The technician knew the Miele appliance well and explained the issue clearly.",
  },
  {
    id: 24,
    name: "Google Customer",
    brand: "Thermador",
    service: "Cooktop Repair",
    rating: 5,
    text: "Good service, clear pricing, and professional communication throughout the appointment.",
  },
  {
    id: 25,
    name: "Google Customer",
    brand: "La Cornue",
    service: "Oven Repair",
    rating: 5,
    text: "The technician was careful and very professional with our La Cornue oven. Excellent communication.",
  },
  {
    id: 26,
    name: "Google Customer",
    brand: "Gaggenau",
    service: "Oven Repair",
    rating: 5,
    text: "Very professional and knowledgeable. The Gaggenau oven issue was explained clearly.",
  },
  {
    id: 27,
    name: "Google Customer",
    brand: "Viking",
    service: "Refrigerator Repair",
    rating: 5,
    text: "The appointment was smooth, the technician was on time, and the repair was handled professionally.",
  },
  {
    id: 28,
    name: "Google Customer",
    brand: "Cove",
    service: "Dishwasher Repair",
    rating: 5,
    text: "Clean, professional, and easy to communicate with. Great experience with Cove dishwasher service.",
  },
  {
    id: 29,
    name: "Google Customer",
    brand: "True Residential",
    service: "Wine Cooler Repair",
    rating: 5,
    text: "Very careful and professional service for our True Residential wine cooler.",
  },
  {
    id: 30,
    name: "Google Customer",
    brand: "Bosch",
    service: "Oven Repair",
    rating: 5,
    text: "Reliable and professional Bosch appliance service. The technician explained the repair clearly.",
  },
  {
    id: 31,
    name: "Google Customer",
    brand: "Dacor",
    service: "Range Repair",
    rating: 5,
    text: "The technician was very professional and the communication was excellent.",
  },
  {
    id: 32,
    name: "Google Customer",
    brand: "JennAir",
    service: "Refrigerator Repair",
    rating: 5,
    text: "Good communication, clean service, and a professional technician.",
  },
  {
    id: 33,
    name: "Google Customer",
    brand: "Monogram",
    service: "Oven Repair",
    rating: 5,
    text: "Very professional Monogram oven service. The technician was clear and respectful.",
  },
  {
    id: 34,
    name: "Google Customer",
    brand: "Fisher & Paykel",
    service: "Refrigerator Repair",
    rating: 5,
    text: "Professional service and clear explanation of the refrigerator issue.",
  },
  {
    id: 35,
    name: "Google Customer",
    brand: "Bertazzoni",
    service: "Oven Repair",
    rating: 5,
    text: "Very good service. The technician was on time, professional, and careful.",
  },
  {
    id: 36,
    name: "Google Customer",
    brand: "AGA",
    service: "Oven Repair",
    rating: 5,
    text: "The technician was respectful, knowledgeable, and very careful with the appliance.",
  },
  {
    id: 37,
    name: "Google Customer",
    brand: "BlueStar",
    service: "Cooktop Repair",
    rating: 5,
    text: "Professional and clear communication. The technician handled the BlueStar cooktop carefully.",
  },
  {
    id: 38,
    name: "Google Customer",
    brand: "Smeg",
    service: "Refrigerator Repair",
    rating: 5,
    text: "Very polite and professional technician. The process was simple and clear.",
  },
  {
    id: 39,
    name: "Google Customer",
    brand: "KitchenAid",
    service: "Dishwasher Repair",
    rating: 5,
    text: "On time, clean, and professional. The technician explained the dishwasher repair clearly.",
  },
  {
    id: 40,
    name: "Google Customer",
    brand: "Liebherr",
    service: "Freezer Repair",
    rating: 5,
    text: "Very professional service for our Liebherr freezer. Clear communication and careful work.",
  },
  {
    id: 41,
    name: "Google Customer",
    brand: "Sub-Zero",
    service: "Wine Cooler Repair",
    rating: 5,
    text: "Excellent Sub-Zero wine cooler service. The technician was professional and careful.",
  },
  {
    id: 42,
    name: "Google Customer",
    brand: "Wolf",
    service: "Cooktop Repair",
    rating: 5,
    text: "The technician was very professional and explained everything clearly before starting.",
  },
  {
    id: 43,
    name: "Google Customer",
    brand: "Miele",
    service: "Dryer Repair",
    rating: 5,
    text: "Good communication, clean service, and professional Miele appliance repair.",
  },
  {
    id: 44,
    name: "Google Customer",
    brand: "Thermador",
    service: "Range Repair",
    rating: 5,
    text: "Very professional Thermador range service. The technician was on time and clear.",
  },
  {
    id: 45,
    name: "Google Customer",
    brand: "La Cornue",
    service: "Range Repair",
    rating: 5,
    text: "Careful, professional, and knowledgeable service for a high-end range.",
  },
  {
    id: 46,
    name: "Google Customer",
    brand: "Gaggenau",
    service: "Cooktop Repair",
    rating: 5,
    text: "The technician was experienced, professional, and communicated clearly.",
  },
  {
    id: 47,
    name: "Google Customer",
    brand: "Viking",
    service: "Oven Repair",
    rating: 5,
    text: "Great experience. The technician was professional, clean, and very clear.",
  },
  {
    id: 48,
    name: "Google Customer",
    brand: "Cove",
    service: "Dishwasher Repair",
    rating: 5,
    text: "The service was professional, on time, and easy to understand.",
  },
  {
    id: 49,
    name: "Google Customer",
    brand: "True Residential",
    service: "Refrigerator Repair",
    rating: 5,
    text: "Very good communication and professional service for our built-in refrigerator.",
  },
  {
    id: 50,
    name: "Google Customer",
    brand: "Bosch",
    service: "Dishwasher Repair",
    rating: 5,
    text: "On time, professional, and clear communication. Very smooth Bosch dishwasher repair experience.",
  },
];

export default function Reviews() {
  const INITIAL_VISIBLE = 6;
  const LOAD_STEP = 6;

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const visibleReviews = useMemo(() => {
    return reviewsData.slice(0, visibleCount);
  }, [visibleCount]);

  const hasMoreReviews = visibleCount < reviewsData.length;

  const averageRating = useMemo(() => {
    const total = reviewsData.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviewsData.length).toFixed(1);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + LOAD_STEP, reviewsData.length)
    );
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section className="reviewsSnippet" aria-labelledby="reviews-title">
      <div className="reviewsSnippet__inner">
        <div className="reviewsSnippet__header">
          <div>
            <p className="reviewsSnippet__eyebrow">Customer Reviews</p>
            <h2 id="reviews-title" className="reviewsSnippet__title">
              Luxury Appliance Repair Reviews
            </h2>
            <p className="reviewsSnippet__summary">
              Rated {averageRating} out of 5 based on {reviewsData.length} customer reviews.
            </p>
          </div>

          <div className="reviewsSnippet__ratingBox" aria-label={`${averageRating} out of 5 stars`}>
            <span className="reviewsSnippet__ratingNumber">{averageRating}</span>
            <span className="reviewsSnippet__stars">★★★★★</span>
            <span className="reviewsSnippet__ratingCount">{reviewsData.length} reviews</span>
          </div>
        </div>

        <div className="reviewsSnippet__grid">
          {visibleReviews.map((review) => (
            <article className="reviewsSnippet__card" key={review.id}>
              <div className="reviewsSnippet__cardTop">
                <div>
                  <h3 className="reviewsSnippet__name">{review.name}</h3>
                  <p className="reviewsSnippet__service">
                    {review.brand} {review.service}
                  </p>
                </div>

                <span className="reviewsSnippet__miniStars" aria-label={`${review.rating} out of 5 stars`}>
                  ★★★★★
                </span>
              </div>

              <p className="reviewsSnippet__text">{review.text}</p>
            </article>
          ))}
        </div>

        <div className="reviewsSnippet__actions">
          {hasMoreReviews && (
            <button
              className="reviewsSnippet__button"
              type="button"
              onClick={handleLoadMore}
            >
              Load More Reviews
            </button>
          )}

          {visibleCount > INITIAL_VISIBLE && (
            <button
              className="reviewsSnippet__button reviewsSnippet__button--light"
              type="button"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}