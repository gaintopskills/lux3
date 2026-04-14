import React from 'react';

const cards = [
  {
    title: 'Orange County',
    desc: 'Rocky shoreline with blue water and a wide sky.',
    href: 'https://picsum.photos/id/1015/800/600',
    img: 'https://picsum.photos/id/1015/800/600',
    alt: 'Mountain landscape with river',
  },
  {
    title: 'Los Angeles County',
    desc: 'A vivid display of the aurora borealis.',
    href: 'https://picsum.photos/id/1022/800/600',
    img: 'https://picsum.photos/id/1022/800/600',
    alt: 'A vivid display of the aurora borealis.',
  },
  {
    title: 'Ventura County',
    desc: 'Explore the beauty of nature through peaceful trails.',
    href: 'https://picsum.photos/id/1035/800/600',
    img: 'https://picsum.photos/id/1035/800/600',
    alt: 'Person walking in nature',
  },
  {
    title: 'Mountain View',
    desc: 'Clouds drifting over a peaceful mountain landscape.',
    href: 'https://picsum.photos/id/1045/800/600',
    img: 'https://picsum.photos/id/1045/800/600',
    alt: 'City skyline at night',
  },
  {
    title: 'Golden Sunset',
    desc: 'Witness the golden hour as the sun sets on the horizon.',
    href: 'https://picsum.photos/id/1055/800/600',
    img: 'https://picsum.photos/id/1055/800/600',
    alt: 'Beautiful sunset over horizon',
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