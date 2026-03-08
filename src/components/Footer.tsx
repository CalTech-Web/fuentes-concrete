import Link from "next/link";
import { Phone, Printer, MapPin } from "lucide-react";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <img
              src="/images/logo.png"
              alt="Fuentes Concrete Inc."
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Family owned and operated located in Madera, California.
              Servicing the Central Valley in custom concrete work. We serve
              Madera, Fresno, Clovis, Visalia, Merced, Modesto, Bass Lake and
              everything in between.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lime mb-4">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-white/80 hover:text-lime text-sm transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lime mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/#about"
                className="text-white/80 hover:text-lime text-sm transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-white/80 hover:text-lime text-sm transition-colors"
              >
                All Services
              </Link>
              <Link
                href="/#hiring"
                className="text-white/80 hover:text-lime text-sm transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/#contact"
                className="text-white/80 hover:text-lime text-sm transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-lime mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <a
                href="tel:5596736444"
                className="flex items-center gap-2 text-white/80 hover:text-lime text-sm transition-colors"
              >
                <Phone className="h-4 w-4 text-lime" />
                (559) 673-6444
              </a>
              <p className="flex items-center gap-2 text-white/80 text-sm">
                <Printer className="h-4 w-4 text-lime" />
                (559) 674-0377
              </p>
              <p className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4 text-lime shrink-0 mt-0.5" />
                2370 W Cleveland Ave Ste. 108 #141
                <br />
                Madera, CA 93637, USA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Fuentes Concrete Inc. All rights
            reserved.
          </p>
          <p className="text-white/60 text-sm">
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime hover:text-lime-light transition-colors"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
