import React from "react";

const brands = [
  "AGA",
  "Big Chill",
  "BlueStar",
  "Bosch",
  "Dacor",

  "Fisher & Paykel",
  "Gaggenau",
  "Jenn-Air",
  "KitchenAid",
  "La Cornue",
  "Miele",
  "Smeg",
  "Sub-Zero",
  "Thermador",
  "Viking",
  "Wolf",
  "Elmira Stove Works",
];

export const Brands = () => {
  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <span className={["Fisher & Paykel", "Elmira Stove Works"].includes(brand)  ? "brand-small" : ""}>
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Brands;
