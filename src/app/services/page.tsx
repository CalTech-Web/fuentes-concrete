import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import HeroPattern from "@/components/HeroPattern";

export const metadata: Metadata = {
  title: "Concrete Services Madera & Central Valley CA | Fuentes Concrete Inc.",
  description:
    "Full-service concrete contractor in Madera, Fresno & Central Valley. Driveways, patios, stamped concrete, foundations, sidewalks, retaining walls & commercial work. Call (559) 673-6444.",
  openGraph: {
    title: "Concrete Services | Fuentes Concrete Inc.",
    description:
      "Full-service concrete contractor serving Madera, Fresno & the Central Valley for 25+ years.",
    url: "https://fuentes-concrete.vercel.app/services",
    siteName: "Fuentes Concrete Inc.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-charcoal-dark overflow-hidden">
        <HeroPattern />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-4">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Concrete Services
            <br />
            <span className="text-lime">in Madera & the Central Valley</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-8">
            From driveways and patios to commercial buildings and foundations, Fuentes
            Concrete Inc. has been delivering quality concrete work across the
            Central Valley for over 25 years.
          </p>
          <a
            href="tel:5596736444"
            className="inline-flex items-center gap-2 bg-lime text-charcoal-dark px-8 py-4 rounded-xl text-lg font-bold hover:bg-lime-light transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call (559) 673-6444
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-charcoal-light rounded-2xl overflow-hidden border border-white/10 hover:border-lime/30 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-lime transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-lime text-sm font-semibold">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal-dark/95 to-charcoal-dark/70" />
        <Image
          src="/images/cta-project.jpg"
          alt="Concrete project by Fuentes Concrete"
          fill
          className="object-cover -z-10"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 hidden lg:block">
              <Image
                src="/images/cta-project.jpg"
                alt="Fresh concrete slab with steps by Fuentes Concrete"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Not Sure Which Service{" "}
                <span className="text-lime">You Need?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Give us a call and we will help you figure out the best approach
                for your project. Free estimates for all residential and
                commercial work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:5596736444"
                  className="inline-flex items-center justify-center gap-2 bg-lime text-charcoal-dark px-8 py-4 rounded-xl text-lg font-bold hover:bg-lime-light transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call (559) 673-6444
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:border-lime hover:text-lime transition-colors"
                >
                  Contact Us Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
