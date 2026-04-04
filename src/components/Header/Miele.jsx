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
        <h1 class="gold-embossed" data-text="Miele">Miele Appliance Repair Los Angeles and Nearby Areas</h1>
        <img className="header-image" width="1200" height="630" src="/miele/miele-appliance-repair-los-angeles-and-nearby-areas.webp" alt="Miele Appliance Repair Los Angeles and Nearby Areas"  fetchpriority="high"
  decoding="async"/>
       <p>
       Expert Miele appliance repair in Los Angeles and nearby areas. We diagnose and repair Miele dishwashers, washers, dryers, ovens, speed ovens, combi-steam ovens, cooktops, ranges, ventilation systems, refrigerators, freezers, wine units, and warming drawers with careful, professional service.
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
