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
        <h1 class="gold-embossed" data-text="La Cornue Appliance Repair">La Cornue Repair Los Angeles | Château, CornuFé, Range & Oven Service</h1>
        <img className="header-image" width="1200" height="630" src="/la-cornue/la-cornue-appliance-repair-los-angeles-and-nearby-areas.webp" alt="La Cornue Appliance Repair Services Los Angeles and Nearby Areas"  fetchpriority="high"
  decoding="async"/>
 <p>
  We provide expert La Cornue repair in Los Angeles and nearby service areas
  for Château ranges, CornuFé ranges, ovens, cooktops, French tops, warming drawers,
  and range hoods. Whether your burners are not igniting, your oven is not heating evenly,
  or your controls are not responding, we diagnose and repair La Cornue appliances with
  the precision these premium systems require.
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
