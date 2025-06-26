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
        <h1 class="gold-embossed" data-text="SUB-ZERO">Sub-Zero Appliance Repair Brentwood, CA</h1>
        <img className="header-image" width="400" src="/sub-zero/sub-zero-repair-services-santa-monica.webp" alt="Sub-Zero Repair Services"/>
       <h2>Expert Sub-Zero Service for Brentwood’s Homes</h2>

<p>If your Sub-Zero refrigerator isn’t cooling, your wine cooler is flashing a vacuum condenser warning, or your freezer isn’t holding temp, we’re the team Brentwood trusts for fast and reliable service. At Zaricci, we specialize in luxury appliance repair, with factory-trained technicians who understand the precision and performance Sub-Zero demands. </p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
