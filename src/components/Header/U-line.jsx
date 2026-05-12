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
          data-text="U-Line Appliance Repair"
        >
          U-Line Appliance Repair<br/> <span className="h1-location">
    in Los Angeles, Orange County & Ventura County
  </span>
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/u-line/u-line-appliance-repair-los-angeles-orange-county-ventura-county.webp"
          alt="U-Line appliance repair services for Los Angeles, Ventura County, and Orange County"
          fetchPriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in U-Line appliance repair.
          We service U-Line undercounter refrigerators, beverage centers,
          wine refrigerators, ice makers, ice machines, freezers, dispensers,
          U-Chill systems, outdoor refrigeration, and marine refrigeration appliances.
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