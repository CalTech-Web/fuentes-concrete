import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { services, getServiceBySlug, SERVICE_AREAS } from "@/lib/services";
import HeroPattern from "@/components/HeroPattern";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://fuentes-concrete.vercel.app/services/${service.slug}`,
      siteName: "Fuentes Concrete Inc.",
      images: [{ url: service.image, width: 800, height: 600, alt: service.title }],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    url: `https://fuentes-concrete.vercel.app/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Fuentes Concrete Inc.",
      telephone: "(559) 673-6444",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2370 W Cleveland Ave Ste. 108 #141",
        addressLocality: "Madera",
        addressRegion: "CA",
        postalCode: "93637",
      },
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-charcoal-dark overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/60 via-charcoal-dark/85 to-charcoal-dark" />
        <HeroPattern />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-4">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            {service.heroHeading}
            <br />
            <span className="text-lime">{service.heroSubtext}</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-8">
            {service.shortDescription}
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
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              {service.description.map((para, i) => (
                <p key={i} className="text-white/60 text-lg leading-relaxed mb-6">
                  {para}
                </p>
              ))}

              <h2 className="text-2xl font-bold mb-6 mt-10">
                What We <span className="text-lime">Offer</span>
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-lime shrink-0 mt-0.5" />
                    <span className="text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-8 bg-charcoal">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6">
                Our <span className="text-lime">Process</span>
              </h2>
              <div className="space-y-4">
                {service.process.map((step, i) => (
                  <div
                    key={step.step}
                    className="bg-charcoal-light rounded-xl p-5 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-lime/10 rounded-lg text-lime font-bold text-sm">
                        {i + 1}
                      </span>
                      <h3 className="font-bold">{step.step}</h3>
                    </div>
                    <p className="text-white/50 text-sm pl-11">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 sm:py-28 bg-charcoal-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-3">
              Areas We Serve
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {service.title} Across the{" "}
              <span className="text-lime">Central Valley</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              {service.locationContent}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 bg-charcoal px-4 py-2 rounded-lg text-sm text-white/70 border border-white/10"
              >
                <MapPin className="h-4 w-4 text-lime" />
                {area}
              </span>
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
                Ready to Start Your{" "}
                <span className="text-lime">Project?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Get a free estimate on your {service.title.toLowerCase()} project
                in Madera and the Central Valley. Over 25 years of trusted
                craftsmanship.
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

      {/* Other Services */}
      <section className="py-20 sm:py-28 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-3">
              Explore More
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Other <span className="text-lime">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-charcoal-light rounded-2xl overflow-hidden border border-white/10 hover:border-lime/30 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold mb-1 group-hover:text-lime transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm line-clamp-2">
                    {s.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-lime text-sm font-semibold mt-3">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
