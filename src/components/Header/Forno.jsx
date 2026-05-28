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
          data-text="Forno Appliance Repair"
        >
          Forno Appliance Repair<br/> <span className="h1-location">
    in Los Angeles, Orange County & Ventura County
  </span>
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/forno/forno-appliance-repair-los-angeles-orange-county-ventura-county.webp"
          alt="Forno appliance repair services for Los Angeles, Ventura County, and Orange County"
          fetchPriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in Forno freestanding gas ranges, dual fuel ranges, electric ranges, induction ranges, professional gas rangetops, induction cooktops, built-in wall ovens, range hoods, refrigerators, freezers, French door refrigerators, side-by-side refrigerators, bottom-freezer refrigerators, panel-ready refrigeration, drawer refrigerators, drawer freezers, built-in dishwashers, wine coolers, beverage coolers, outdoor kitchen appliances, BBQ grill modules, outdoor beverage centers, commercial-style Forno ranges, commercial dishwashers, commercial ice makers, and select Forno Commerciale equipment.
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