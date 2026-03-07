import Image from "next/image";

const projects = [
  {
    src: "/images/g1.jpg",
    alt: "Backyard concrete patio with wood plank stamp pattern",
  },
  {
    src: "/images/g2.jpg",
    alt: "Custom concrete staircase built into hillside",
  },
  {
    src: "/images/g3.jpg",
    alt: "Crew stamping decorative concrete walkway",
  },
  {
    src: "/images/g4.jpg",
    alt: "Concrete form work for decorative patio grid pattern",
  },
];

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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.src}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
