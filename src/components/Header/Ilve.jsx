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
          data-text="iLive Appliance Repair"
        >
          iLive Appliance Repair in Los Angeles & Nearby Areas
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/ilive/ilive-appliance-repair-los-angeles-and-nearby-areas.webp"
          alt="iLive Appliance Repair in Los Angeles and Nearby Areas"
          fetchpriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in iLive appliance repair. We are
          experts in diagnosing and repairing iLive kitchen and home appliances
          throughout Los Angeles and nearby areas.
        </p>

        <p>
          ✅ Licensed &amp; Insured
          <br />
          ✅ 3-month warranty on parts and labor
          <br />
          ✅ Same-day or next-day service available
        </p>

      </div>
    </div>
  );
};

export default ParallaxHeader;