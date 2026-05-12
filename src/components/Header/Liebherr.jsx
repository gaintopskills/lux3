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
          data-text="Liebherr Appliance Repair"
        >
          Liebherr Appliance Repair<br/> <span className="h1-location">
    in Los Angeles, Orange County & Ventura County
  </span>
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/liebherr/liebherr-appliance-repair-los-angeles-orange-county-ventura-county.webp"
          alt="Liebherr appliance repair services for Los Angeles, Ventura County, and Orange County"
          fetchPriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in Liebherr appliance repair.
          We service Liebherr refrigerators, freezers, built-in refrigerators,
          integrated refrigeration, Monolith units, wine refrigerators,
          wine climate cabinets, BioFresh systems, NoFrost appliances,
          and select Liebherr refrigeration components.
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