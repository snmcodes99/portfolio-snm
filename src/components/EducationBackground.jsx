export default function EducationBackground() {
  return (
    <div className="section-bg education-bg" aria-hidden="true">
      {/* Gradient shade */}
      <div className="section-shade education-shade" />
      {/* Geometric grid pattern — clean, academic feel */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="section-svg-pattern">
        <defs>
          <pattern id="edu-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Fine grid lines */}
            <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(0, 231, 255, 0.03)" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="0" y2="60" stroke="rgba(0, 231, 255, 0.03)" strokeWidth="0.5" />
            {/* Diagonal accent */}
            <line x1="0" y1="60" x2="60" y2="0" stroke="rgba(255, 59, 59, 0.015)" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#edu-grid)" />
      </svg>
      {/* Orbs */}
      <div className="bg-gradient-orb orb-cyan orb-md" style={{ top: '30%', left: '5%' }} />
      <div className="bg-gradient-orb orb-red orb-sm" style={{ bottom: '20%', right: '15%' }} />
    </div>
  );
}
