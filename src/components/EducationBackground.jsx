export default function EducationBackground() {
  return (
    <div className="section-bg education-bg" aria-hidden="true">
      {/* Gradient shade */}
      <div className="section-shade education-shade" />
      {/* Orbs */}
      <div className="bg-gradient-orb orb-cyan orb-md" style={{ top: '30%', left: '5%' }} />
      <div className="bg-gradient-orb orb-red orb-sm" style={{ bottom: '20%', right: '15%' }} />
    </div>
  );
}
