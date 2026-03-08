"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

const images = [
  { src: "/images/driveway.jpg", alt: "Concrete driveway project" },
  { src: "/images/patio-pool-deck.jpg", alt: "Patio and pool deck project" },
  { src: "/images/g1.jpg", alt: "Stamped concrete project" },
  { src: "/images/foundation.jpg", alt: "Concrete foundation project" },
  { src: "/images/g3.jpg", alt: "Decorative concrete work" },
  { src: "/images/retaining-wall.jpg", alt: "Retaining wall project" },
  { src: "/images/cta-project.jpg", alt: "Concrete slab with steps" },
  { src: "/images/g2.jpg", alt: "Sidewalk and walkway project" },
  { src: "/images/g4.jpg", alt: "Commercial concrete project" },
  { src: "/images/hiring-pic.png", alt: "Concrete patio project" },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 sm:py-28 bg-charcoal-dark overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-3">
            Our Latest Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Follow Us on <span className="text-lime">Instagram</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Check out our recent projects and stay up to date with Fuentes
            Concrete Inc.
          </p>
        </div>
      </div>

      {/* Infinite scrolling carousel — full width */}
      <div className="group relative w-full overflow-hidden">
        <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
          {/* Render images twice for seamless loop */}
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-72 sm:w-80 md:w-96 aspect-square mx-2 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="https://www.instagram.com/fuentesconcreteinc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-lime text-charcoal-dark px-6 py-3 rounded-xl font-bold hover:bg-lime-light transition-colors"
        >
          <Instagram className="h-5 w-5" />
          Follow @fuentesconcreteinc
        </a>
      </div>
    </section>
  );
}
