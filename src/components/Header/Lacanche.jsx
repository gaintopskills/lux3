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
          data-text="Lacanche Appliance Repair"
        >
          Lacanche Appliance Repair in Los Angeles & Nearby Areas
        </h1>

        <img
          className="header-image"
          width="1200"
          height="630"
          src="/lacanche/lacanche-appliance-repair-los-angeles-and-nearby-areas.webp"
          alt="Lacanche Appliance Repair Services Los Angeles and Nearby Areas"
          fetchpriority="high"
          decoding="async"
        />

        <p>
          Experienced technicians specializing in Lacanche appliance
          repair in Los Angeles and nearby areas. We are experts in fixing Lacanche ranges, range cookers,
          ovens, cooktops, and hoods.
        </p>

        <p>
          ✅ Licensed &amp; Insured
          <br />
          ✅ 3-month warranty on parts and labor
          <br />
          ✅ Same-day or next-day service available
        </p>

        <p>
          If your Lacanche range is not heating properly, the burners are not
          igniting correctly, or the oven is no longer performing the way it
          should, you can count on us for expert diagnosis and repair.
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;