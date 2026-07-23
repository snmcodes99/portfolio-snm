// SVG illustration – developer / education themed (inline so no import needed)
function EduIllustration() {
  return (
    <div className="edu-illustration-wrap">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="edu-svg"
      >
        {/* ── Background glow circles ── */}
        <circle cx="240" cy="240" r="200" fill="url(#bgGlow)" opacity="0.18" />
        <circle cx="240" cy="240" r="140" fill="url(#bgGlow2)" opacity="0.12" />

        {/* ── Laptop base ── */}
        <rect x="90" y="270" width="300" height="16" rx="8" fill="#1a2240" stroke="rgba(0,231,255,0.3)" strokeWidth="1.5"/>
        <rect x="110" y="165" width="260" height="110" rx="10" fill="#111827" stroke="rgba(0,231,255,0.25)" strokeWidth="1.5"/>

        {/* ── Screen content ── */}
        <rect x="122" y="175" width="236" height="90" rx="6" fill="#0a0f1e"/>
        {/* code lines on screen */}
        <rect x="132" y="185" width="80" height="5" rx="2.5" fill="#c792ea" opacity="0.8"/>
        <rect x="218" y="185" width="50" height="5" rx="2.5" fill="#c3e88d" opacity="0.8"/>
        <rect x="142" y="197" width="60" height="4" rx="2" fill="#f07178" opacity="0.7"/>
        <rect x="208" y="197" width="80" height="4" rx="2" fill="#c3e88d" opacity="0.7"/>
        <rect x="142" y="208" width="70" height="4" rx="2" fill="#f07178" opacity="0.7"/>
        <rect x="218" y="208" width="50" height="4" rx="2" fill="#89ddff" opacity="0.7"/>
        <rect x="142" y="219" width="90" height="4" rx="2" fill="#82aaff" opacity="0.7"/>
        <rect x="132" y="231" width="40" height="4" rx="2" fill="#c792ea" opacity="0.8"/>
        <rect x="178" y="231" width="20" height="4" rx="2" fill="#89ddff" opacity="0.8"/>
        {/* cursor blink */}
        <rect x="204" y="231" width="2" height="9" rx="1" fill="#00e7ff" opacity="0.9">
          <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/>
        </rect>

        {/* ── Floating cards (left) ── */}
        <rect x="32" y="145" width="72" height="54" rx="8" fill="#111827" stroke="rgba(0,231,255,0.2)" strokeWidth="1"/>
        <rect x="40" y="155" width="30" height="4" rx="2" fill="#00e7ff" opacity="0.6"/>
        <rect x="40" y="164" width="50" height="3" rx="1.5" fill="#9ca3b8" opacity="0.4"/>
        <rect x="40" y="172" width="40" height="3" rx="1.5" fill="#9ca3b8" opacity="0.4"/>
        <rect x="40" y="181" width="46" height="3" rx="1.5" fill="#9ca3b8" opacity="0.4"/>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="4s" repeatCount="indefinite" additive="sum"/>

        {/* ── Floating card (right) ── */}
        <rect x="376" y="130" width="72" height="54" rx="8" fill="#111827" stroke="rgba(255,59,59,0.22)" strokeWidth="1"/>
        <rect x="384" y="140" width="30" height="4" rx="2" fill="#ff3b3b" opacity="0.7"/>
        <rect x="384" y="149" width="50" height="3" rx="1.5" fill="#9ca3b8" opacity="0.4"/>
        <rect x="384" y="157" width="36" height="3" rx="1.5" fill="#9ca3b8" opacity="0.4"/>
        <rect x="384" y="165" width="44" height="3" rx="1.5" fill="#9ca3b8" opacity="0.4"/>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,8; 0,0" dur="3.5s" repeatCount="indefinite" additive="sum"/>

        {/* ── Graduation cap ── */}
        <g transform="translate(195,80)">
          <polygon points="45,0 90,20 45,40 0,20" fill="#1d2a4a" stroke="rgba(0,231,255,0.4)" strokeWidth="1.5"/>
          <polygon points="0,20 0,38 45,58 90,38 90,20" fill="#111827" stroke="rgba(0,231,255,0.2)" strokeWidth="1"/>
          <line x1="90" y1="20" x2="90" y2="48" stroke="rgba(0,231,255,0.5)" strokeWidth="1.5"/>
          <circle cx="90" cy="52" r="5" fill="#00e7ff" opacity="0.8">
            <animate attributeName="cy" values="52;46;52" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* ── Bottom dots decoration ── */}
        {[0,1,2,3,4].map(i => (
          <circle key={i} cx={150 + i * 45} cy="320" r="3" fill="rgba(0,231,255,0.3)"/>
        ))}

        {/* ── Connecting lines ── */}
        <line x1="104" y1="198" x2="50" y2="198" stroke="rgba(0,231,255,0.15)" strokeWidth="1" strokeDasharray="4 3"/>
        <line x1="376" y1="158" x2="370" y2="158" stroke="rgba(255,59,59,0.15)" strokeWidth="1" strokeDasharray="4 3"/>

        {/* ── Gradients ── */}
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00e7ff"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          <radialGradient id="bgGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff3b3b"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

import EducationBackground from "./EducationBackground";

export default function Education() {
  const education = [
    {
      period: "2022 – 2026",
      degree: "BACHELOR OF TECHNOLOGY",
      field: "Computer Science & Engineering",
      institution: "[University Name]",
      color: "cyan",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 20.5a12.083 12.083 0 01-6.16-9.922L12 14z"/>
          <path d="M20 9v6" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      period: "2020 – 2022",
      degree: "INTERMEDIATE (CLASS XII)",
      field: "Science — PCM + Computer Science",
      institution: "[School Name]",
      color: "red",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          <path d="M10 6h6M10 10h6"/>
        </svg>
      )
    },
    {
      period: "2019 – 2020",
      degree: "MATRICULATION (CLASS X)",
      field: "CBSE Board",
      institution: "[School Name]",
      color: "cyan",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="education" className="education-section" style={{ position: 'relative' }}>
      <EducationBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Education</h2>

        <div className="edu-layout">
          {/* Left — illustration */}
          <EduIllustration />

          {/* Right — stacked cards */}
          <div className="edu-cards-col">
            {education.map((edu, i) => (
              <div key={i} className={`edu-entry edu-entry-${edu.color}`}>
                {/* Icon circle */}
                <div className={`edu-icon-wrap edu-icon-${edu.color}`}>
                  {edu.icon}
                </div>

                {/* Content */}
                <div className="edu-entry-body">
                  <span className={`edu-entry-period edu-period-${edu.color}`}>{edu.period}</span>
                  <h3 className="edu-entry-degree">{edu.degree}</h3>
                  <p className="edu-entry-field">{edu.field}</p>
                  <p className="edu-entry-institution">{edu.institution}</p>
                </div>

                {/* Right glow line */}
                <div className={`edu-entry-line edu-line-${edu.color}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
