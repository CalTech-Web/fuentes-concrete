export default function HeroPattern() {
  return (
    <>
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dot-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      {/* Lime gradient glow — right side */}
      <div className="absolute -top-20 -right-32 w-[600px] h-[600px] bg-lime/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle dark gradient glow — left side */}
      <div className="absolute -bottom-20 -left-32 w-[500px] h-[500px] bg-lime/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent" />
    </>
  );
}
