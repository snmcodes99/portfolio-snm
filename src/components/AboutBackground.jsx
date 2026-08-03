export default function AboutBackground() {
  return (
    <div className="section-bg about-bg" aria-hidden="true">
      {/* Diagonal gradient shade */}
      <div className="section-shade about-shade" />
      {/* Floating ambient orbs */}
      <div className="bg-gradient-orb orb-cyan orb-lg" style={{ top: '15%', left: '5%' }} />
      <div className="bg-gradient-orb orb-red orb-md" style={{ bottom: '10%', right: '10%' }} />
    </div>
  );
}
