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
        <h1 class="gold-embossed" data-text="SUB-ZERO">Big Chill Repair in Los Angeles & Nearby Areas</h1>
        <img className="header-image" width="1200" height="630" src="/big-chill/big-chill-appliance-repair-services.webp" alt="Big Chill Appliance Repair Services"  fetchpriority="high"
  decoding="async"/>
        <p>
        Factory-trained technicians for Big Chill refrigerators, ranges, dishwashers, ovens, stoves and range hoods across Los Angeles and nearby service areas.</p>
        <p>✅ Licensed & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
        ✅ 1-year warranty on sealed system repair<br />
          ✅ Same-day or next-day appointments are available<br />
        </p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
