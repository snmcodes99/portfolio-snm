import { 
  SiJavascript, SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress, 
  SiCplusplus, SiC, SiMongodb, SiGit, SiSolidity, 
  SiTailwindcss, SiTypescript, SiPython, SiGithub,
} from "react-icons/si";
import { FaAws, FaFigma, FaCode } from "react-icons/fa";
import SkillsBackground from "./SkillsBackground";

const skills = [
  // Row 1 (5 skills)
  { icon: SiPython, label: "Python", color: "#3776AB" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiC, label: "C", color: "#A8B9CC" },
  { icon: SiCplusplus, label: "C++", color: "#00599C" },
  
  // Row 2 (4 skills)
  { icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { icon: SiCss, label: "CSS3", color: "#1572B6" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: FaFigma, label: "Figma", color: "#F24E1E" },

  // Row 3 (5 skills)
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { icon: SiExpress, label: "Express", color: "#FFFFFF" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  
  // Row 4 (4 skills)
  { icon: FaAws, label: "AWS", color: "#FF9900" },
  { icon: SiSolidity, label: "Solidity", color: "#AAAEB2" },
  { icon: FaCode, label: "VS Code", color: "#007ACC" },
  { icon: SiGithub, label: "GitHub", color: "#FFFFFF" },
];

// Layout configuration for honeycomb pattern: rows of 5, 4, 5, 4
const rows = [
  skills.slice(0, 5),
  skills.slice(5, 9),
  skills.slice(9, 14),
  skills.slice(14, 18)
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section" style={{ position: 'relative' }}>
      <SkillsBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid-wrapper">
          {/* Ambient background glows for the skills section */}
          <div className="skills-glow-orb orb-cyan"></div>
          <div className="skills-glow-orb orb-red"></div>

          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="skills-row">
              {row.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div 
                    key={i} 
                    className="skill-hex-card glass-card"
                    style={{ 
                      "--brand-color": s.color,
                      animationDelay: `${(rowIndex * 0.4) + (i * 0.2)}s` 
                    }}
                  >
                    <div className="skill-hex-icon">
                      <Icon size={38} className="skill-svg" />
                    </div>
                    <span className="skill-hex-label">{s.label}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
