import { Phone, Printer, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Fuentes <span className="text-lime">Concrete</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Family owned and operated located in Madera, California.
              Servicing the Central Valley in custom concrete work. We serve
              Madera, Fresno, Clovis, Visalia, Merced, Modesto, Bass Lake and
              everything in between.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-white/50 hover:text-lime text-sm transition-colors">
                About Us
              </a>
              <a href="#services" className="text-white/50 hover:text-lime text-sm transition-colors">
                Services
              </a>
              <a href="#hiring" className="text-white/50 hover:text-lime text-sm transition-colors">
                Careers
              </a>
              <a href="#contact" className="text-white/50 hover:text-lime text-sm transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <a
                href="tel:5596736444"
                className="flex items-center gap-2 text-white/50 hover:text-lime text-sm transition-colors"
              >
                <Phone className="h-4 w-4 text-lime" />
                (559) 673-6444
              </a>
              <p className="flex items-center gap-2 text-white/50 text-sm">
                <Printer className="h-4 w-4 text-lime" />
                (559) 674-0377
              </p>
              <p className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="h-4 w-4 text-lime shrink-0 mt-0.5" />
                2370 W Cleveland Ave Ste. 108 #141
                <br />
                Madera, CA 93637, USA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Fuentes Concrete Inc. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime/60 hover:text-lime transition-colors"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
