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
        <h1 class="gold-embossed" data-text="ZLINE Appliance Repair">ZLINE Appliance Repair in Los Angeles & Nearby Areas</h1>
        <img className="header-image" width="1200" height="630" src="/zline/zline-appliance-repair-los-angeles-and-nearby-areas.webp" alt="ZLINE Appliance Repair Services Los Angeles and Nearby Areas"  fetchpriority="high"
  decoding="async"/>
 <p>
  Factory-trained technicians providing expert ZLINE appliance repair for ranges, ovens, cooktops, dishwashers, refrigerators, and range hoods throughout Los Angeles and surrounding service areas.
</p>
        <p>✅ Licensed & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
          ✅ Same-day or next-day service are available<br />
        </p>
    </div>
    </div>
  );
};
export default ParallaxHeader;
