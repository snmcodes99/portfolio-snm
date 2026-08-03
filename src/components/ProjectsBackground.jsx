export default function ProjectsBackground() {
  return (
    <div className="section-bg projects-bg" aria-hidden="true">
      {/* Gradient shade */}
      <div className="section-shade projects-shade" />
      {/* Orbs */}
      <div className="bg-gradient-orb orb-red orb-lg" style={{ top: '15%', right: '5%' }} />
      <div className="bg-gradient-orb orb-cyan orb-md" style={{ bottom: '20%', left: '10%' }} />
      {/* Accent line */}
      <div className="section-accent-line" style={{ top: '30%' }} />
    </div>
  );
}
