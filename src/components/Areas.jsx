import React from 'react';

const cards = [
  {
    title: 'Orange County',
    desc: 'Appliance Repair Orange County',
    href: 'https://picsum.photos/id/1015/800/600',
    img: '/areas/appliance-repair-orange-county.webp',
    alt: 'Appliance Repair Orange County',
  },
  {
    title: 'Los Angeles County',
    desc: 'Appliance Repair Los Angeles County',
    href: 'https://picsum.photos/id/1022/800/600',
    img: '/areas/appliance-repair-los-angeles-county.webp',
    alt: 'Appliance Repair Los Angeles County',
  },
  {
    title: 'Ventura County',
    desc: 'Appliance Repair Ventura County',
    href: 'https://picsum.photos/id/1035/800/600',
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
                target="_blank"
                rel="noopener noreferrer"
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
                <div className="card-title">{card.title}</div>
                <p className="card-desc">{card.desc}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}