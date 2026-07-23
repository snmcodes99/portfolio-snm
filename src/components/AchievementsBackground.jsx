export default function AchievementsBackground() {
  return (
    <div className="section-bg achievements-bg" aria-hidden="true">
      {/* Gradient shade */}
      <div className="section-shade achievements-shade" />
      {/* Star constellation dots */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="section-svg-pattern">
        <defs>
          <pattern id="stars" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="30" r="1" fill="rgba(0, 231, 255, 0.12)" />
            <circle cx="80" cy="15" r="0.8" fill="rgba(255, 59, 59, 0.08)" />
            <circle cx="150" cy="50" r="1.2" fill="rgba(0, 231, 255, 0.1)" />
            <circle cx="40" cy="100" r="0.6" fill="rgba(0, 231, 255, 0.06)" />
            <circle cx="120" cy="80" r="1" fill="rgba(255, 59, 59, 0.1)" />
            <circle cx="180" cy="140" r="0.8" fill="rgba(0, 231, 255, 0.08)" />
            <circle cx="60" cy="170" r="1.2" fill="rgba(0, 231, 255, 0.1)" />
            <circle cx="100" cy="150" r="0.6" fill="rgba(255, 59, 59, 0.06)" />
            {/* Connecting lines between some stars */}
            <line x1="20" y1="30" x2="80" y2="15" stroke="rgba(0, 231, 255, 0.03)" strokeWidth="0.5" />
            <line x1="80" y1="15" x2="150" y2="50" stroke="rgba(0, 231, 255, 0.03)" strokeWidth="0.5" />
            <line x1="120" y1="80" x2="180" y2="140" stroke="rgba(255, 59, 59, 0.02)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stars)" />
      </svg>
      {/* Orbs */}
      <div className="bg-gradient-orb orb-cyan orb-md" style={{ top: '20%', right: '15%' }} />
      <div className="bg-gradient-orb orb-red orb-sm" style={{ bottom: '15%', left: '10%' }} />
    </div>
  );
}
