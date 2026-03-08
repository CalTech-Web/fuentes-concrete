"use client";

import { Instagram, Facebook } from "lucide-react";

export default function Gallery() {
  return (
    <section className="py-20 sm:py-28 bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Project <span className="text-lime">Portfolio</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Follow us on social media to see our latest concrete projects
            across the Central Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Facebook Feed */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Facebook className="h-5 w-5 text-lime" />
              <h3 className="font-bold text-lg">Facebook</h3>
            </div>
            <div className="bg-charcoal rounded-2xl border border-white/10 overflow-hidden">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffuentesconcreteinc&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
                width="500"
                height="600"
                className="w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="lazy"
              />
            </div>
          </div>

          {/* Instagram Feed */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Instagram className="h-5 w-5 text-lime" />
              <h3 className="font-bold text-lg">Instagram</h3>
            </div>
            <div className="bg-charcoal rounded-2xl border border-white/10 overflow-hidden p-1">
              <iframe
                src="https://www.instagram.com/fuentesconcreteinc/embed"
                width="500"
                height="600"
                className="w-full border-0 rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Social CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://www.facebook.com/fuentesconcreteinc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-xl font-semibold border border-white/10 hover:border-lime/30 hover:text-lime transition-colors"
          >
            <Facebook className="h-5 w-5" />
            Follow on Facebook
          </a>
          <a
            href="https://www.instagram.com/fuentesconcreteinc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-xl font-semibold border border-white/10 hover:border-lime/30 hover:text-lime transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
