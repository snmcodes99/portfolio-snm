export default function ProjectsBackground() {
  return (
    <div className="section-bg projects-bg" aria-hidden="true">
      {/* Gradient shade */}
      <div className="section-shade projects-shade" />
      {/* Hexagonal grid */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="section-svg-pattern">
        <defs>
          <pattern id="hexgrid" width="50" height="86.6" patternUnits="userSpaceOnUse" patternTransform="scale(1.4)">
            <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="rgba(0, 231, 255, 0.04)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexgrid)" />
      </svg>
      {/* Orbs */}
      <div className="bg-gradient-orb orb-red orb-lg" style={{ top: '15%', right: '5%' }} />
      <div className="bg-gradient-orb orb-cyan orb-md" style={{ bottom: '20%', left: '10%' }} />
      {/* Accent line */}
      <div className="section-accent-line" style={{ top: '30%' }} />
    </div>
  );
}
