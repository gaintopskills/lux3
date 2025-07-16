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
        <h1 class="gold-embossed" data-text="SUB-ZERO">High-End Applliance Repair Los Angeles</h1>
        <img className="header-image" width="400" height="189" src="/cities/luxury-appliance-repair-los-angeles-519x272.webp" alt="High-end appliance repair Los Angeles" fetchpriority="high"
  decoding="async"/>
        <p>
        Local Los Angeles factory-trained high-end appliance repair technicians specializing in luxury appliance repair including Sub-Zero, Wolf, Viking, Thermador, Cove, Miele, Bosch and more. We repair all major appliances such as fridges, freezers, ranges, ovens, washers, dryers, grills, and more.</p>
        <p>✅ Lisenced & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
        ✅ 1 year warranty on sealded system repair<br />
          ✅ Same-day or next day service<br />
        </p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
