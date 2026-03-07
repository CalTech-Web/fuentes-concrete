import { Award, MapPin, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "25+ Years of Experience",
    description: "Decades of trusted craftsmanship and expertise in custom concrete work across the Central Valley.",
  },
  {
    icon: MapPin,
    title: "Local Contractor",
    description: "Based right here in Madera, California. We know the area, the soil, and the building codes.",
  },
  {
    icon: Users,
    title: "Local Employees",
    description: "Our team lives and works in the communities we serve. We invest in local talent.",
  },
  {
    icon: Heart,
    title: "Family Owned",
    description: "A family business built on integrity, hard work, and genuine care for every project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lime font-semibold uppercase tracking-widest text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Built on Experience & Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-charcoal-light rounded-2xl p-8 border border-white/10 hover:border-lime/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-lime/10 rounded-xl mb-5">
                <feature.icon className="h-6 w-6 text-lime" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
