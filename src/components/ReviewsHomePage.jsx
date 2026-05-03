import React, { useMemo, useState } from "react";
import "./ReviewsWidget.css";

const GOOGLE_REVIEWS_LINK = "https://maps.app.goo.gl/zt2UaMLkY8JFjTzP6";

const googleReviews = [
 
  {
    initial: "K",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/T5EDyv5z8VzQWtiM9",
    rating: 5,
    category: "Thermador",
    text: "Im very thankful to Zaricci. I had a emergency when I needed to repair my range as soon as possible. They came realy soon after and fixed my Thermador range."
  },
  {
    initial: "D",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/2rmk4p9H8NC6LNJG7",
    rating: 5,
    category: "Sub-Zero",
    text: "my sub-zero fridge wasn't cooling, this company fixed it the same day. will recommend"
  },
  {
    initial: "N",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/1QKUYfm8vPJ4biiP8",
    rating: 5,
    category: "Viking",
    text: "Thank you for fixing my Viking range. Great service! Recommend"
  },
  {
    initial: "D",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/59eHg2qUKHuxX4p56",
    rating: 5,
    category: "Aga",
    text: "Glad I called this company to fix my aga range. Technician looks very knowledgeable and repaired my range in a few hours. Customer service is also outstanding!"
  },
  {
    initial: "E",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/YSwY8YwHqG4v1Cea9",
    rating: 5,
    category: "Viking",
    text: "Everything was done well! They honored the Viking Range. recommend it."
  },
  {
    initial: "S",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/aBZr5pyP298gQxPPA",
    rating: 5,
    category: "Viking",
    text: "On time, professional, thank you for fixing my Viking range as I do a significant amount of cooking for a number of people"
  },
  {
    initial: "J",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/qvKJzxS666pLQnKG6",
    rating: 5,
    category: "",
    text: "Highly recommend! They were professional, responsive, and very efficient. The technician quickly diagnosed the issue and fixed it perfectly. Everything works like new again. Great experience from start to finish!"
  },
  {
    initial: "T",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/bxjHLStWTwNJYWqa6",
    rating: 5,
    category: "Wolf",
    text: "I’m really impressed! They fixed all my home appliances quickly and everything works perfectly now. Friendly and professional service. Definitely recommend!"
  },
  {
    initial: "T",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/jCi9NLmScAdmDqvr6",
    rating: 5,
    category: "Wolf",
    text: "My dishwasher wasn’t draining. Had a technician come out fix my appliance that wasn’t draining at all. Ended up being a pump that wasn’t replaced and now my dishwasher is back to new. Very professional"
  },
  {
    initial: "S",
    date: "https://maps.app.goo.gl/Da54n73VH8Wo6Haz9",
    link: GOOGLE_REVIEWS_LINK,
    rating: 5,
    category: "Thermador",
    text: "My Thermador refrigerator was not cooling. They fixed it very quickly."
  },
  {
    initial: "A",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/Fw4ewMRdmEv5jGZZ7",
    rating: 5,
    category: "Gaggenau",
    text: "Could not fix an installation issue with my Gaggenau cooktop with other companies. They figured it out very fast!"
  },
  {
    initial: "V",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/rjT1nE76xnmHyGVy8",
    rating: 5,
    category: "La Cornue",
    text: "After my La Cornue range broke, I had to get a closer look at the repair service market. After a few unsuccessful calls and attempts to schedule a technician, a coworker pointed me to this company. Everything was handled quickly and efficiently—no unnecessary questions or extra fees. The technician diagnosed the issue right away, ordered the needed parts, and fixed it on the follow-up visit. It’s been a week and everything is still working perfectly. Very happy with the service."
  },
  {
    initial: "V",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/37RmhCEEG7cX58D99",
    rating: 5,
    category: "La Cornue",
    text: "We were looking for a company with a solid reputation but without the extra markup just for the name, and a friend recommended this one for our La Cornue range. So first thing- it took really not much time to set things up. The technician Dan was fast and professional—figured out what’s wrong, ordered a few parts, and came back to fix everything on the second visit. It’s been about a month now and the range is working great. Really glad we found them!"
  },
  {
    initial: "L",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/BVJ8uJ8LRpid6FVb8",
    rating: 5,
    category: "Bertazzoni",
    text: "I had an issue my Bertazzoni range, it wasn’t heating evenly and one of the burners had trouble igniting. The technician clearly knew to to work with Bertazzoni range, explained what he will do to fix it and why. I loved clear communication and professionalism. The range works perfectly again!"
  },
  {
    initial: "D",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/2MnSBGWC8AmQk4629",
    rating: 5,
    category: "Miele",
    text: "This company was highly recommended to me after my Miele dishwasher stopped working. All I can say, these guys are great. On time and professional. Customer service is outstanding."
  },
  {
    initial: "V",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/cqdHBKaHNs6K1UJS9",
    rating: 5,
    category: "Sub-Zero",
    text: "My Sub-Zero refrigerator was not cooling, this company fixed it fairly quickly. No issues. Great service overall."
  },
  {
    initial: "K",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/5Hek72J8gyfe2w229",
    rating: 5,
    category: "La Cornue",
    text: "A friend gave me Zaricci's phone number for La Cornue range repair. Technian came the next day, was very polite, diagnosed the problem, and told us what parts need to be ordered to repair. After he came back and fixed the range, we experienced no issues after  The process was very smooth and the customer service kept updating us with everything step. Very happy with the service."
  },
  {
    initial: "R",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/vJ2a2sdgXsUM5jCi7",
    rating: 5,
    category: "Bosch",
    text: "Fixed my bosch washer!"
  },
  {
    initial: "I",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/uXNjdko6FaQbTU2x7",
    rating: 5,
    category: "Bertazzoni",
    text: "Glad I called Zaricci for my Bertazzoni range repair. I would give them 10 stars if I could."
  },
  {
    initial: "X",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/oc7AXhrZyEmpDUwa7",
    rating: 5,
    category: "Fulgor Milano",
    text: "Had a hard time finding someone who actually know Fulgor Milano appliances, but these guys did - fixed my cook top without any issues and everything's been working great since, really impressed!"
  },
  {
    initial: "M",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/rzT2YxCpH9nZ6rYZA",
    rating: 5,
    category: "",
    text: "Great service and very knowledgeable.  Thanks again"
  },
  {
    initial: "E",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/wKV23Tk7rg4dkv7f7",
    rating: 5,
    category: "Bertazzoni",
    text: "Great Service! Fixed my Bertazzoni range the same day. Recommend!"
  },
  {
    initial: "K",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/bTD1QUuTBa7F9SGA9",
    rating: 5,
    category: "BlueStar",
    text: "I called Zaricci for my BlueStar range repair. It was acting up and I was very frustrated. Burners uneven and the oven running hot. They got it sorted pretty fast and now I am back to my normal routine. I am happy that my range finally works perfectly! I will call them back without hesitation if I need another appliance repair service."
  },
  {
    initial: "H",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/PufyBxQ5WcLbkqcw6",
    rating: 5,
    category: "Thermador",
    text: "My Thermador oven wouldn’t heat up, which was stressful because and I rely on it every day. After calling Zaricci for my Thermador repair, they made the whole process feel easy. There was no confusion, no back and forth. The repair was done properly, and I really appreciated that they even followed up after to make sure everything was working fine. Truly pleased with the service."
  },
  {
    initial: "T",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/M5VJdRGcE2BjvpVp9",
    rating: 5,
    category: "True",
    text: "Called Zaricci for True Residential refrigerator repair. The fridge wasn’t holding temperature and I didn’t want to risk it getting worse. They handled it professionally, got it sorted out. Solid and reliable company."
  },
  {
    initial: "D",
    date: "Verified - Read on Google",
    link: GOOGLE_REVIEWS_LINK,
    rating: 5,
    category: "ILVE",
    text: "I was looking everywhere for someone who actually does ILVE range repair. My oven wasn’t holding temperature and one burner kept clicking, they fixed both without dragging it out. It now cooks exactly the way it should again. Thank you!"
  },
  {
    initial: "A",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/tAFhqTCRjmGbR4vb8",
    rating: 5,
    category: "Bosch",
    text: "This company came and fixed my Bosch dishwasher. They are nice and fast it took them an hour to fix it. My dishwasher had draining problems and they were able to fix it that same day."
  },
  {
    initial: "M",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/BGRFZ98vejo7fZqTA",
    rating: 5,
    category: "Cove",
    text: "I needed Cove dishwasher repair. Technician was on time, professional, and communication was clear."
  },
  {
    initial: "C",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/obdCTwQTrkr4kKyN6",
    rating: 5,
    category: "Miele",
    text: "Reliable company, fixed my Miele dishwasher."
  },
  {
    initial: "A",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/5tD5SYy8dmcV5FAo7",
    rating: 5,
    category: "Cove",
    text: "I had a great experience with this company! The technician arrived very quickly and fixed my Cove dishwasher in no time. Everything was done efficiently and professionally. I also want to mention the customer service - the lady who answered the phone was very friendly, helpful, and explained everything clearly. It made the whole process smooth and stress-free. Highly recommend this company!"
  },
  {
    initial: "I",
    date: "Verified - Read on Google",
    link: "https://maps.app.goo.gl/N6C8aunPsj52UCjK9",
    rating: 5,
    category: "Officine Gullo",
    text: "Had an issue with my Officine Gullo range not igniting properly, and they fixed it quickly and professionally. Super easy experience!"
  }
];

const reviewFilters = [
  "All",
  "Sub-Zero",
  "Wolf",
  "Miele",
  "Thermador",
  "Cove",
  "Viking",
  "Gaggenau",
  "La Cornue",
  "Ilve",
  "Bosch",
  "True",
  "Bertazzoni",
  "Aga",
  "Fulgor Milano",
  "Officine Gullo"

];

export default function GoogleReviews() {
  const INITIAL_VISIBLE_COUNT = 6;
  const LOAD_MORE_COUNT = 6;

  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const filteredReviews = useMemo(() => {
    if (activeFilter === "All") {
      return googleReviews;
    }

    return googleReviews.filter((review) => {
      return review.category === activeFilter;
    });
  }, [activeFilter]);

  const visibleReviews = useMemo(() => {
    return filteredReviews.slice(0, visibleCount);
  }, [filteredReviews, visibleCount]);

  const hasMoreReviews = visibleCount < filteredReviews.length;
  const hasShownMoreReviews = visibleCount > INITIAL_VISIBLE_COUNT;

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const handleShowMore = () => {
    setVisibleCount((currentCount) => {
      return Math.min(currentCount + LOAD_MORE_COUNT, filteredReviews.length);
    });
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const getReviewInitial = (review) => {
    if (review.initial) {
      return review.initial.trim().charAt(0).toUpperCase();
    }

    return "G";
  };

  return (
    <section className="google-reviews-section" aria-labelledby="google-reviews-title">
      <div className="google-reviews-inner" id="review">
        <div className="reviews-header">
          <h2 id="google-reviews-title">
            Trusted by Homeowners
          </h2>

          <p className="reviews-intro">
            Rated 5 stars by customers who rely on us for high-end and luxury appliance repair,
            reliable, and professional in-home service.
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
                30+ Google reviews
              </strong>

              <span>
                Verified customer feedback from local appliance repair appointments.
              </span>
            </div>
          </div>

          <div className="reviews-actions">
            <a
              className="reviews-primary-link"
              href="https://maps.app.goo.gl/GyunKzziGNefeEq67"
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
              <article className="review-card" key={`${review.category}-${index}`}>
                <div className="review-card-top">
                  <div className="review-avatar" aria-hidden="true">
                    {getReviewInitial(review)}
                  </div>

                  <div>
                    <a
                      className="review-google-link"
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {review.date}
                    </a>
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

        <div className="reviews-load-more-wrap">
          {hasMoreReviews && (
            <button
              type="button"
              className="load-more-reviews"
              onClick={handleShowMore}
            >
              Show More Reviews
            </button>
          )}

          {hasShownMoreReviews && (
            <button
              type="button"
              className="load-more-reviews show-less-reviews"
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