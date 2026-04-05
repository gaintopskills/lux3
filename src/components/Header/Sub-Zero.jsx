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
        <h1 class="gold-embossed" data-text="SUB-ZERO">Sub-Zero Repair in Los Angeles & Nearby Areas</h1>
        <img className="header-image" width="1200" height="630" src="/sub-zero/sub-zero-repair-los-angeles-and-nearby-areas.webp" alt="Sub-Zero Repair Los Angeles and nearby areas"  fetchpriority="high"
  decoding="async"/>
        <p>
        Trained technicians for Sub-Zero refrigerators, freezers, wine storage, and beverage centers across Los Angeles and nearby service areas.</p>
        <p>✅ Licensed & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
        ✅ 1-year warranty on sealed system repair<br />
          ✅ Same-day or next-day service<br />
        </p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
