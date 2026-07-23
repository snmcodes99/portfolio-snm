export default function SkillsBackground() {
  return (
    <div className="section-bg skills-bg" aria-hidden="true">
      {/* Deep blue-to-dark gradient shade */}
      <div className="section-shade skills-shade" />
      {/* Circuit board SVG pattern */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="section-svg-pattern">
        <defs>
          <pattern id="circuit" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
            <path d="M 20 20 L 50 20 L 70 40 L 70 90" fill="none" stroke="rgba(0, 231, 255, 0.06)" strokeWidth="1" />
            <circle cx="70" cy="90" r="2" fill="rgba(0, 231, 255, 0.12)" />
            <circle cx="20" cy="20" r="2" fill="rgba(0, 231, 255, 0.12)" />
            <path d="M 130 130 L 100 130 L 80 110 L 80 50" fill="none" stroke="rgba(255, 59, 59, 0.05)" strokeWidth="1" />
            <circle cx="80" cy="50" r="2" fill="rgba(255, 59, 59, 0.1)" />
            <circle cx="130" cy="130" r="2" fill="rgba(255, 59, 59, 0.1)" />
            <path d="M 0 100 L 20 120 L 40 120" fill="none" stroke="rgba(0, 231, 255, 0.04)" strokeWidth="0.8" />
            <circle cx="40" cy="120" r="1.5" fill="rgba(0, 231, 255, 0.08)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
      </svg>
      {/* Orbs */}
      <div className="bg-gradient-orb orb-cyan orb-xl" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="bg-gradient-orb orb-red orb-sm" style={{ top: '70%', right: '10%' }} />
    </div>
  );
}
