import { Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-charcoal-dark via-charcoal to-charcoal-light overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-6">
          Family Owned & Operated
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Custom Concrete Work
          <br />
          <span className="text-lime">in Madera & the Central Valley</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10">
          Serving Madera, Fresno, Clovis, Visalia, Merced, Modesto, Bass Lake
          and everything in between. Over 25 years of trusted experience.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:5596736444"
            className="inline-flex items-center gap-2 bg-lime text-charcoal-dark px-8 py-4 rounded-xl text-lg font-bold hover:bg-lime-light transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call (559) 673-6444
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:border-lime hover:text-lime transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-lime transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
