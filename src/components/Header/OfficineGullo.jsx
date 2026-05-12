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
          data-text="Officine Gullo Appliance Repair"
        >
          Officine Gullo Appliance Repair<br/> <span className="h1-location">
    in Los Angeles, Orange County & Ventura County
  </span>
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/high-end-and-luxury-appliance-repair-by-zaricci.webp"
          alt="Officine Gullo appliance repair services for Los Angeles, Ventura County, and Orange County"
          fetchpriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in luxury Officine Gullo appliance repair.
          We service Italian ranges, ovens, cooktops, rangetops, hoods, barbecue appliances,
          refrigeration, and built-in kitchen appliances.
        </p>

        <p>
          ✅ Licensed &amp; Insured<br />
          ✅ 3-month warranty on parts and labor<br />
          ✅ Same-day or next-day appointments are available
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;