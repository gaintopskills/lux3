import React, { useEffect, useState } from "react";
import "./Reviews.css"; // Move styles to a CSS file for better separation

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <div className={`reviews reviews-header ${isVisible ? "show" : ""}`}>
      {/* Reviews Content - Different for Desktop & Mobile */}
      <div className="reviews-content">
        <p>
          <a href="/reviews-page/" title="reviews" className="desktop">
            Reviews ⭐⭐⭐⭐⭐ 5.0 (Google Rating)
          </a>
          <a href="/reviews-page/" title="reviews" className="mobile">
            Reviews ⭐⭐⭐⭐⭐ 5.0
          </a>
        </p>
      </div>
      
      {/* Mobile Specific Reviews */}
      <div className="reviews-content-mobile">
        <p>
          <a href="/reviews-page/" title="reviews" className="mobile">
            Reviews ⭐⭐⭐⭐⭐ 5.0
          </a>
        </p>
      </div>

      {/* Image Section */}
      <div className="header-licenses-foto">
        {[
          { href: "/credentials/bbb-accredited-appliance-repair/", src: "/credentials/bbb-accredited-appliance-repair.webp", alt: "BBB Accredited" },
          { href: "/credentials/licensed-appliance-repair/", src: "/credentials/licensed-appliance-repair.webp", alt: "Licensed Repair" },
          { href: "/credentials/insured-appliance-repair/", src: "/credentials/insured-appliance-repair.webp", alt: "Insured Repair" },
          { href: "/credentials/epa-certified-appliance-repair/", src: "/credentials/epa-certified-appliance-repair.webp", alt: "EPA Certified" },
          { href: "/credentials/osha-certified-appliance-repair/", src: "/credentials/osha-certified-appliance-repair.webp", alt: "OSHA Certified" },
          { href: "/credentials/background-checked-appliance-repair/", src: "/credentials/background-checked-technicians.webp", alt: "Background Checked" }
        ].map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
            <img src={item.src} alt={item.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
