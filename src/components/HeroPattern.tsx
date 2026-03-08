export default function HeroPattern() {
  return (
    <>
      {/* Geometric concrete block pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="concrete-grid"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              {/* Diamond / concrete block shapes */}
              <rect x="0" y="0" width="60" height="60" fill="none" stroke="white" strokeWidth="1" />
              <rect x="60" y="60" width="60" height="60" fill="none" stroke="white" strokeWidth="1" />
              <rect x="60" y="0" width="60" height="60" fill="none" stroke="white" strokeWidth="0.5" />
              <rect x="0" y="60" width="60" height="60" fill="none" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="60" y2="60" stroke="white" strokeWidth="0.5" />
              <line x1="60" y1="0" x2="120" y2="60" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="60" x2="60" y2="120" stroke="white" strokeWidth="0.5" />
              <line x1="60" y1="60" x2="120" y2="120" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#concrete-grid)" />
        </svg>
      </div>

      {/* Lime accent — top-right geometric shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="0" r="350" stroke="#a6ce39" strokeWidth="1" />
          <circle cx="500" cy="0" r="250" stroke="#a6ce39" strokeWidth="0.5" />
          <circle cx="500" cy="0" r="150" stroke="#a6ce39" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Lime accent — bottom-left geometric shape */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,400 200,200 0,200" stroke="#a6ce39" strokeWidth="1" fill="none" />
          <polygon points="0,400 300,100 0,100" stroke="#a6ce39" strokeWidth="0.5" fill="none" />
          <line x1="0" y1="300" x2="100" y2="200" stroke="#a6ce39" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Subtle gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Horizontal accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
    </>
  );
}
