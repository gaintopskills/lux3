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
        <h1>Luxury Appliance Repair by ZARICCI</h1>
        <img className="header-image" width="1200" height="630" src="/high-end-and-luxury-appliance-repair-by-zaricci.webp" alt="High-End and Luxury Appliance Repair Los Angeles and Nearby Areas"  fetchpriority="high"
  decoding="async"/>
        <p>
          At Luxury Appliance Repair by Zaricci, we specialize in repairing high-end appliances with
          precision. We offer certified and highly expirienced 
          technicians, premium-quality parts, and exceptional customer care.
        </p>
        <p>
          We’re trusted by our customers to repair luxury and high-end
          brands like La Cornue, Bertazzoni, Gaggenau, BlueStar, Viking, Wolf, Thermador, Miele, Bosch, Dacor, Smeg, Big Chill, Elmira Stove Works,
          Fisher & Paykel, AGA, and more.
        </p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
