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
        <h1 class="gold-embossed" data-text="SUB-ZERO">Sub-Zero Repair</h1>
        <img className="subzero-image" width="400" src="/sub-zero/sub-zero-repair-services.webp" alt="Sub-Zero Repair Services"/>
        <p>
        Local, factory-trained Sub-Zero repair technicians specializing in luxury appliance repair including Sub-Zero repair.</p>
        <p>✅ Lisenced & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
        ✅ Extented 1 year warranty on sealded system repair<br />
          ✅ Same-day or next day service<br />
        </p>
        <p>When your Sub-Zero fridge isn’t cooling, your freezer’s too warm, or your wine cooler stops working—it’s not just inconvenient. It puts your food, wine, and peace of mind at risk. We are in-home service you can count on.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
