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
          data-text="Dishwasher Repair"
        >
          Dishwasher Repair
          <br />
          <span className="h1-location">
            in Los Angeles, Orange County & Ventura County
          </span>
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/dishwasher/dishwasher-repair-services.webp"
          alt="Dishwasher repair services in Los Angeles, Orange County and Ventura County"
          fetchPriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in professional dishwasher repair for
          high-end, luxury, built-in dishwasher, panel-ready dishwasher, integrated dishwasher,
          drawer dishwasher, quiet dishwasher, and smart dishwasher systems.
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