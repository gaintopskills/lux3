import React from 'react';

const cards = [
  {
    title: 'HIGH-END & LUXURY APPLIANCE REPAIR IN ORANGE COUNTY',
    desc: 'Our technicians service premium and luxury appliances across Orange County, including Newport Beach, Irvine, Laguna Beach, Huntington Beach, Corona del Mar, Dana Point, San Clemente and nearby coastal communities. We repair built-in refrigeration, professional ranges, wall ovens, dishwashers, wine coolers, ice makers and other high-end appliances.',
    href: '/orange-county/',
    img: '/areas/appliance-repair-orange-county.webp',
    alt: 'Appliance Repair Orange County',
  },
  {
    title: 'HIGH-END & LUXURY APPLIANCE REPAIR IN LOS ANGELES COUNTY',
    desc: 'Zaricci provides high-end appliance repair throughout Los Angeles County, including Brentwood, Beverly Hills, Bel Air, Pacific Palisades, Santa Monica, West Hollywood, Pasadena, San Marino, Calabasas, Malibu, Encino, Westwood, Century City, Manhattan Beach, Palos Verdes and surrounding luxury home communities.',
    href: '/los-angeles/',
    img: '/areas/appliance-repair-los-angeles-county.webp',
    alt: 'Appliance Repair Los Angeles County',
  },
  {
    title: 'HIGH-END & LUXURY APPLIANCE REPAIR IN VENTURA COUNTY',
    desc: 'Zaricci also serves Ventura County homes, including Thousand Oaks, Westlake Village, Oak Park, Agoura Hills, Camarillo, Moorpark and surrounding areas. We focus on high-end kitchen, refrigeration, laundry, wine and outdoor appliances from brands such as Sub-Zero, Wolf, Viking, Thermador, Miele, Bosch, Monogram, Gaggenau and more.',
    href: '/ventura-county/',
    img: '/areas/appliance-repair-ventura-county.webp',
    alt: 'Appliance Repair Ventura County',
  },
];

export default function CardsGallery() {
  return (
    <section className="cards-section" aria-label="Image cards gallery">
      <div className="cards-shell">
        <div className="cards">
          {cards.slice(0, 3).map((card) => (
            <div className="card" key={card.title}>
              <a
                href={card.href}
                aria-label={card.title}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  loading="lazy"
                  width="800"
                  height="600"
                  decoding="async"
                />
                <h2 className="card-title">{card.title}</h2>
                <p className="card-desc">{card.desc}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}