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

      <div className="maintext" id="website">
        <h1 id="localbusiness">Luxury Appliance Repair by ZARICCI<br/> <span className="h1-location">
    in Los Angeles, Orange County & Ventura County
  </span></h1>
        <img className="header-image" width="1200" height="630" src="/high-end-and-luxury-appliance-repair-by-zaricci.webp" alt="High-End and Luxury Appliance Repair Los Angeles, Orange county, and Ventura County"  fetchpriority="high"
  decoding="async"/>
        <p>
  Luxury Appliance Repair by Zaricci provides in-home service for high-end
  kitchen, refrigeration, laundry, wine, and outdoor appliances across Los
  Angeles, Orange County, Ventura County, and Thousand Oaks.
</p>
  <p>
    Our technicians service premium brands including Sub-Zero, Wolf, Miele,
    Gaggenau, Thermador, Viking, Bosch, Dacor, La Cornue, AGA, Bertazzoni,
    Fulgor Milano, ILVE, BlueStar, True Residential, Monogram, Fisher & Paykel,
    Smeg, and more. 
  </p>
  
      </div>
    </div>
  );
};
export default ParallaxHeader;
