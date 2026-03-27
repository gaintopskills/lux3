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
        <h1 class="gold-embossed" data-text="La Cornue Appliance Repair">La Cornue  Appliance Repair in Los Angeles & Nearby Areas</h1>
        <img className="header-image" width="1200" height="630" src="/la-cornue/aga-appliance-repair-services-trained-technicians.webp" alt="La Cornue Appliance Repair Services Los Angeles and Nearby Areas"  fetchpriority="high"
  decoding="async"/>
    <p>
  Factory-trained technicians providing expert La Cornue appliance repair for ranges, ovens, cooktops, and range hoods throughout Los Angeles and surrounding service areas.
</p>
        <p>✅ Licensed & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
          ✅ Same-day or next-day service ae available<br />
        </p>
        <p>If your La Cornue range is not heating properly, your burners are not igniting as they should, or your oven is no longer performing the way it should, you can count on us for expert diagnosis and repair.</p>
    </div>
    </div>
  );
};
export default ParallaxHeader;
