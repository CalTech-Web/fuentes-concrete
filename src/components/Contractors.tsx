import Image from "next/image";
import { Phone, MapPin, Building2 } from "lucide-react";

const serviceAreas = [
  "Madera",
  "Fresno",
  "Clovis",
  "Visalia",
  "Merced",
  "Modesto",
  "Bass Lake",
  "Bakersfield",
  "Sacramento",
  "Bay Area",
];

export default function Contractors() {
  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/bg1.png"
        alt=""
        fill
        className="object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-charcoal-light/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-3">
              Contractors
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Big or Small,{" "}
              <span className="text-lime">We Do It All</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Whether your project is big or small, give us a call! We serve
              from Bakersfield to Sacramento, including the Bay Area, for
              commercial jobs. Contact us for more details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:5596736444"
                className="inline-flex items-center justify-center gap-2 bg-lime text-charcoal-dark px-6 py-3 rounded-xl font-bold hover:bg-lime-light transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (559) 673-6444
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:border-lime hover:text-lime transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>

          <div>
            <div className="bg-charcoal rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-lime/10 rounded-xl">
                  <Building2 className="h-5 w-5 text-lime" />
                </div>
                <h3 className="text-lg font-bold">Service Areas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 bg-charcoal-light px-3 py-1.5 rounded-lg text-sm text-white/70 border border-white/5"
                  >
                    <MapPin className="h-3.5 w-3.5 text-lime" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Company sign image */}
            <div className="mt-6 relative aspect-video rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/fuentes-company.png"
                alt="Fuentes Concrete Inc. company sign at job site"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
