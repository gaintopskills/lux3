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
          data-text="ASKO Appliance Repair"
        >
          ASKO Appliance Repair by Zaricci
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/asko/asko-appliance-repair-los-angeles-orange-county-ventura-county.webp"
          alt="ASKO appliance repair services for Los Angeles, Ventura County, and Orange County"
          fetchPriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in ASKO appliance repair.
          We service ASKO dishwashers, panel-ready dishwashers, built-in dishwashers,
          washing machines, dryers, laundry appliances, and select ASKO kitchen appliances.
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