export default function AchievementsBackground() {
  return (
    <div className="section-bg achievements-bg" aria-hidden="true">
      {/* Gradient shade */}
      <div className="section-shade achievements-shade" />
      {/* Orbs */}
      <div className="bg-gradient-orb orb-cyan orb-md" style={{ top: '20%', right: '15%' }} />
      <div className="bg-gradient-orb orb-red orb-sm" style={{ bottom: '15%', left: '10%' }} />
    </div>
  );
}
