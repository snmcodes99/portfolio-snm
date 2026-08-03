export default function HeroBackground() {
  return (
    <div className="section-bg hero-bg" aria-hidden="true">
      <div className="section-shade hero-shade" />
      <div className="bg-gradient-orb orb-cyan orb-xl" style={{ top: '-10%', left: '-5%', opacity: 0.08 }} />
      <div className="bg-gradient-orb orb-red orb-lg" style={{ bottom: '10%', right: '5%', opacity: 0.06 }} />
    </div>
  );
}
