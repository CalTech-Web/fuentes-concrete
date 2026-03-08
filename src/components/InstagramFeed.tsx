"use client";

import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      if (win.instgrm) {
        win.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-charcoal-dark">
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

        {/* Instagram Profile Embed — auto-updates with new posts */}
        <div
          ref={containerRef}
          className="flex justify-center overflow-hidden rounded-2xl border border-white/10"
        >
          <iframe
            src="https://www.instagram.com/fuentesconcreteinc/embed"
            className="w-full max-w-4xl border-0"
            style={{ minHeight: "600px" }}
            allowTransparency
            scrolling="no"
            title="Fuentes Concrete Instagram Feed"
          />
        </div>

        <div className="text-center mt-8">
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
      </div>
    </section>
  );
}
