export default function ContactBackground() {
  return (
    <div className="section-bg contact-bg" aria-hidden="true">
      {/* Gradient shade */}
      <div className="section-shade contact-shade" />
      {/* Radar rings */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="section-svg-pattern">
        <circle cx="50%" cy="50%" r="15%" fill="none" stroke="rgba(0, 231, 255, 0.06)" strokeWidth="0.8" strokeDasharray="4 8" />
        <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(255, 59, 59, 0.04)" strokeWidth="0.8" strokeDasharray="8 12" />
        <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(0, 231, 255, 0.03)" strokeWidth="0.8" />
        <circle cx="50%" cy="50%" r="60%" fill="none" stroke="rgba(255, 59, 59, 0.02)" strokeWidth="0.8" strokeDasharray="2 20" />
      </svg>
      {/* Central glow */}
      <div className="bg-gradient-orb orb-cyan orb-xl" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
  );
}
