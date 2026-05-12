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
          data-text="Perlick Appliance Repair"
        >
          Perlick Appliance Repair by Zaricci
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/perlick/perlick-appliance-repair-los-angeles-orange-county-ventura-county.webp"
          alt="Perlick appliance repair services for Los Angeles, Ventura County, and Orange County"
          fetchPriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in Perlick appliance repair.
          We service Perlick undercounter refrigerators, beverage centers,
          wine reserves, beer dispensers, ice makers, freezer drawers,
          refrigerator drawers, outdoor refrigeration, and select bar refrigeration systems.
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