export default function HeroBackground() {
  return (
    <div className="section-bg hero-bg" aria-hidden="true">
      {/* Dynamic spotlight tracking mouse (like other sections) */}
      <div className="section-shade hero-shade" />
      
      {/* Technical Grid Pattern */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="section-svg-pattern" style={{ opacity: 0.3, filter: 'brightness(1)' }}>
        <defs>
          <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Main grid */}
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 231, 255, 0.06)" strokeWidth="1" />
            {/* Sub grid */}
            <path d="M 20 0 L 20 40 M 0 20 L 40 20" fill="none" stroke="rgba(0, 231, 255, 0.02)" strokeWidth="0.5" />
            {/* Plus markers at intersections */}
            <path d="M 18 20 L 22 20 M 20 18 L 20 22" fill="none" stroke="rgba(255, 59, 59, 0.3)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid)" />
      </svg>
    </div>
  );
}
