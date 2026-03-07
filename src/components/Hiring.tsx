import { Phone, HardHat } from "lucide-react";

export default function Hiring() {
  return (
    <section id="hiring" className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
      {/* Lime accent strip */}
      <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-2 bg-lime" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-lime/10 text-lime px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HardHat className="h-4 w-4" />
            Now Hiring
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            We Are <span className="text-lime">Hiring!</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-4">
            Looking for full time immediate hires! Any level from labor work to
            finisher. Call the office to schedule a time to pick up an
            application.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Fuentes Concrete Inc. is an Equal Opportunity Employer. We consider
            applicants for all positions without regard to race, color,
            religion, creed, gender, national origin, age, disability, marital
            or veteran status, or any other legally protected status.
          </p>
          <a
            href="tel:5596736444"
            className="inline-flex items-center gap-2 bg-lime text-charcoal-dark px-6 py-3 rounded-xl font-bold hover:bg-lime-light transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call to Apply
          </a>
        </div>
      </div>
    </section>
  );
}
