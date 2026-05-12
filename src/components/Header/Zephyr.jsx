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
          data-text="Zephyr Appliance Repair"
        >
          Zephyr Appliance Repair by Zaricci
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/zephyr/zephyr-appliance-repair-los-angeles-orange-county-ventura-county.webp"
          alt="Zephyr appliance repair services for Los Angeles, Ventura County, and Orange County"
          fetchPriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in Zephyr appliance repair.
          We service Zephyr range hoods, wall hoods, island hoods,
          under-cabinet hoods, hood inserts, downdraft ventilation,
          wine coolers, beverage coolers, refrigerators, refrigerator drawers,
          kegerators, microwave drawers, and induction cooktops.
        </p>

        <p>
          ✅ Licensed &amp; Insured<br />
          ✅ 3-month warranty on parts and labor<br />
          ✅ Same-day or next-day appointments are available
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;