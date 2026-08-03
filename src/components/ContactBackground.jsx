export default function ContactBackground() {
  return (
    <div className="section-bg contact-bg" aria-hidden="true">
      {/* Gradient shade */}
      <div className="section-shade contact-shade" />
      {/* Central glow */}
      <div className="bg-gradient-orb orb-cyan orb-xl" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
  );
}
