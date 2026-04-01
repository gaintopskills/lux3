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
          data-text="FiveStar Appliance Repair"
        >
          FiveStar Appliance Repair in Los Angeles & Nearby Areas
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/fivestar/fivestar-appliance-repair-los-angeles-and-nearby-areas.webp"
          alt="FiveStar Appliance Repair Services Los Angeles and Nearby Areas"
          fetchpriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in FiveStar appliance repair. We
          service FiveStar pro-style ranges and cooktops, including sealed burner
          and open burner models, dual-fuel oven configurations, and griddle or
          grill-equipped cooking systems throughout Los Angeles and nearby areas.
        </p>

        <p>
          ✅ Licensed &amp; Insured
          <br />
          ✅ 3-month warranty on parts and labor
          <br />
          ✅ Same-day or next-day service available
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;