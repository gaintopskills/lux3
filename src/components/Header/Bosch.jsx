// ParallaxHeader.jsx
import React from 'react';

const ParallaxHeader = () => {
  return (
    <div className="video-container">
      <video
        id="bgVideo"
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/bg.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
        Your browser does not support the video tag.
      </video>

      <div className="maintext">
        <h1
          className="gold-embossed"
          data-text="Bosch Appliance Repair"
        >
          Bosch Appliance Repair in Los Angeles & Nearby Areas
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/bosch/bosch-appliance-repair-services.webp"
          alt="Bosch Appliance Repair Services Los Angeles and Nearby Areas"
          fetchpriority="high"
          decoding="async"
        />
        <p>
        Expert Bosch appliance repair for dishwashers, refrigerators, wall ovens, ranges, cooktops, washers, dryers, warming drawers, and ventilation systems in Los Angeles and nearby areas.
        </p>
        <p>
          ✅ Licensed &amp; Insured
          <br />
          ✅ 3-month warranty on parts and labor
          <br />
          ✅ Same-day or next-day appointments are available
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;