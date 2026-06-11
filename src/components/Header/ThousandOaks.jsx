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
        <h1
          className="gold-embossed"
          data-text="THOUSAND OAKS"
        >
          Thousand Oaks High-End &amp; Luxury Appliance Repair
          <br />
        </h1>

        <img
          className="header-image"
          width="400"
          height="189"
          src="/high-end-and-luxury-appliance-repair-by-zaricci.webp"
          alt="High-end and luxury appliance repair in Thousand Oaks"
          fetchPriority="high"
          decoding="async"
        />

        <p>
          Professional high-end appliance repair in Thousand Oaks for luxury
          built-in refrigerators, ranges, ovens, cooktops, dishwashers, wine
          coolers, laundry appliances, and outdoor kitchen systems. We service
          premium appliances in estate homes, gated communities, hillside
          residences, custom properties, and designer kitchens throughout
          Thousand Oaks and nearby areas. Our technicians work with Sub-Zero,
          Wolf, Thermador, Miele, Viking, Gaggenau, La Cornue, Lacanche,
          Monogram, Dacor, Fisher &amp; Paykel, Bertazzoni, True Residential,
          JennAir, Bosch, Kalamazoo, Lynx, Hestan, DCS, Alfresco, Twin Eagles,
          Fire Magic, and other high-end appliance brands.
        </p>

        <p>
          ✅ Licensed &amp; Insured
          <br />
          ✅ 3-month warranty on parts and labor
          <br />
          ✅ Same-day or next-day service
          <br />
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;