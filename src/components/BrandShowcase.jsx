import React from "react";
import "./BrandShowcase.css";

const brands = [
  "Sub-Zero",
  "Wolf",
  "Viking",
  "Miele",
  "Gaggenau",
  "Bosch",
  "La Cornue",
  "Thermador",
  "Jenn-Air",
  "KitchenAid",
  "Fisher & Paykel",
  "Dacor",
  "BlueStar",
  "Big Chill",
  "Smeg"
];

export const BrandShowcase = () => {
  return (
    <section className="brand-showcase">
      <h2 className="section-title">Brands We Repair</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="shine" />
            <span>{brand}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandShowcase;

