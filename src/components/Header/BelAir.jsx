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
        <h1 class="gold-embossed" data-text="SUB-ZERO">High-End & Luxury Applliance Repair<br/> <span className="h1-location">
    in Los Angeles
  </span></h1>
        <img className="header-image" width="400" height="189" src="/cities/luxury-appliance-repair-los-angeles-519x272.webp" alt="High-end appliance repair Bel Air" fetchpriority="high"
  decoding="async"/>
       <p>
          Professional repair for luxury and high-end appliances in Bel Air, including Sub-Zero, Wolf, Viking, Thermador, Miele, Bosch, Cove, and other premium brands.
        </p>
        <p>✅ Licensed & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
          ✅ Same-day or next day service<br />
        </p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
