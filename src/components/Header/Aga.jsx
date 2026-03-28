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
<p>Factory-trained technicians providing expert AGA appliance repair for ranges, range cookers, rangetops, ovens, and hoods throughout Los Angeles and surrounding service areas.</p>        <p>✅ Licensed & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
        ✅ 1-year warranty on sealed system repair<br />
          ✅ Same-day or next-day service ae available<br />
        </p>
        <p>  If your AGA range is not heating properly, your burners are not igniting as they should, or your oven is no longer performing the way it should, you can count on us for expert diagnosis and repair.</p>
    </div>
    </div>
  );
};
export default ParallaxHeader;
