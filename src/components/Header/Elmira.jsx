import ParallaxHeader from '../components/Header/Bosch.jsx'// ParallaxHeader.jsx
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
          data-text="Elmira Stove Works Repair"
        >
          Elmira Stove Works Repair in Los Angeles & Nearby Areas
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/elmira-stove-works/elmira-stove-works-repair-services-trained-technicians.webp"
          alt="Elmira Stove Works Repair Services Los Angeles and Nearby Areas"
          fetchpriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in Elmira Stove Works repair. We
          are experts in fixing Elmira Stove Works ranges, refrigerators, wall
          ovens, dishwashers, and hoods throughout Los Angeles and nearby areas.
        </p>

        <p>
          ✅ Licensed &amp; Insured
          <br />
          ✅ 3-month warranty on parts and labor
          <br />
          ✅ Same-day or next-day appointments are available
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;