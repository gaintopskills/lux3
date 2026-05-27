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
        <h1 class="gold-embossed" data-text="SUB-ZERO">Calabasas High-End & Luxury Appliance Repair<br/></h1>
        <img className="header-image" width="400" height="189" src="/high-end-and-luxury-appliance-repair-by-zaricci.webp" alt="High-end appliance repair Calabasas" fetchpriority="high"
  decoding="async"/>
        <p>
  Professional high-end appliance repair in Calabasas for luxury built-in refrigerators, ranges, ovens, cooktops, dishwashers, wine coolers, laundry appliances, and outdoor kitchen systems. We service Sub-Zero, Wolf, Thermador, Miele, Viking, Gaggenau, La Cornue, Lacanche, Monogram, Dacor, Fisher & Paykel, Bertazzoni, True Residential, JennAir, Bosch, Kalamazoo, Lynx, Hestan, DCS, Alfresco, Twin Eagles, Fire Magic, and other premium appliance brands.
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
