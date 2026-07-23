import AchievementsBackground from "./AchievementsBackground";

const achievements = [
  {
    year: "2025",
    title: "1st Runner Up",
    subtitle: "IIT Guwahati Hackathon",
    description: "Secured runner-up position in a national-level hackathon competing against 200+ teams.",
    color: "cyan",
  },
  {
    year: "2024",
    title: "300+ LeetCode Problems",
    subtitle: "Competitive Programming",
    description: "Consistent practice in data structures, algorithms, and problem solving across all difficulty levels.",
    color: "red",
  },
  {
    year: "2023",
    title: "Blockchain Certification",
    subtitle: "[Platform Name]",
    description: "Completed advanced blockchain development certification covering Solidity, DeFi, and Web3.",
    color: "red",
  },
];

// SVG icons for each achievement node (no emojis)
const NodeIcons = {
  0: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
};

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section" style={{ position: 'relative' }}>
      <AchievementsBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Achievements</h2>

        <div className="ach-timeline">
          <div className="ach-line" />

          {achievements.map((ach, i) => (
            <div key={i} className={`ach-item ${i % 2 === 0 ? "ach-left" : "ach-right"}`}>
              {/* Glowing timeline node — SVG icon, no emoji */}
              <div className={`ach-node ach-node-${ach.color}`}>
                <span className="ach-node-icon">{NodeIcons[i]}</span>
                <div className={`ach-node-ring ach-ring-${ach.color}`} />
                <div className={`ach-node-glow ach-glow-${ach.color}`} />
              </div>

              {/* Content card */}
              <div className={`ach-card glass-card ach-card-${ach.color}`}>
                <span className={`ach-year ach-year-${ach.color}`}>{ach.year}</span>
                <h3 className="ach-title">{ach.title}</h3>
                <p className={`ach-subtitle ach-sub-${ach.color}`}>{ach.subtitle}</p>
                <p className="ach-desc">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
