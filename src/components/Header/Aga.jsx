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
        <h1 class="gold-embossed" data-text="AGA Appliance Repair">AGA Appliance Repair in Los Angeles & Nearby Areas</h1>
        <img className="header-image" width="1200" height="630" src="/aga/aga-appliance-repair-services-trained-technicians.webp" alt="AGA Appliance Repair Services Los Angeles and Nearby Areas"  fetchpriority="high"
  decoding="async"/>
<p>Experienced technicians specializing in luxury AGA appliance repair. We are experts in fixing ranges, range cookers, rangetops, ovens, and hoods throughout Los Angeles and nearby areas.</p>        
<p>✅ Licensed & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
          ✅ Same-day or next-day service are available<br />
        </p>
    </div>
    </div>
  );
};
export default ParallaxHeader;
