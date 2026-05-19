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
          data-text="Wine Cellar Repair"
        >
          Wine Cellar Repair
          <br />
          <span className="h1-location">
            in Los Angeles, Orange County & Ventura County
          </span>
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/wine-cellar/wine-cellar-repair-services.webp"
          alt="Wine cellar repair services in Los Angeles, Orange County and Ventura County"
          fetchPriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in professional wine cellar repair for
          high-end, luxury, built-in wine cellar, wine room cooling, ducted wine cellar,
          split wine cellar, temperature control, humidity control, and premium wine storage systems.
        </p>

        <p>
          ✅ Licensed & Insured
          <br />
          ✅ 3-month warranty on parts and labor
          <br />
          ✅ Same-day or next-day appointments are available
          <br />
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;