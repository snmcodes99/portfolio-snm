export default function SkillsBackground() {
  return (
    <div className="section-bg skills-bg" aria-hidden="true">
      {/* Deep blue-to-dark gradient shade */}
      <div className="section-shade skills-shade" />
      {/* Orbs */}
      <div className="bg-gradient-orb orb-cyan orb-xl" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="bg-gradient-orb orb-red orb-sm" style={{ top: '70%', right: '10%' }} />
    </div>
  );
}
