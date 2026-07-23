import { useRef, useCallback } from "react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const codeLines = [
    { indent: 0, keyword: "const ", name: "engineer", op: " = {" },
    { indent: 1, key: "name:", value: ' "Sahil Negi",' },
    { indent: 1, key: "role:", value: ' "Full-Stack Developer",' },
    { indent: 1, key: "focus:", value: ' ["Backend", "Cloud", "AI"]' },
    { indent: 1, key: "mindset:", value: ' "Build • Learn • Improve",' },
    { indent: 1, key: "status:", value: ' "Open to Opportunities",' },
    { indent: 0, op: "};" },
    { indent: 0, blank: true },
    { indent: 0, fn: "engineer", method: ".create(", arg: '"impact"', close: ");" },
  ];

  // ── Cursor-following spotlight glow ─────────────────────────────────────
  // One RAF-throttled mousemove handler — no continuous loop.
  const heroRef = useRef(null);
  const rafId = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (rafId.current) return; // already queued
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hero.style.setProperty("--spot-x", `${x}px`);
      hero.style.setProperty("--spot-y", `${y}px`);
      hero.style.setProperty("--spot-op", "1");

      const xNorm = (x - rect.width / 2) / (rect.width / 2);
      const yNorm = (y - rect.height / 2) / (rect.height / 2);
      hero.style.setProperty("--mouse-x", xNorm);
      hero.style.setProperty("--mouse-y", yNorm);
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (heroRef.current) {
      heroRef.current.style.setProperty("--spot-op", "0");
      heroRef.current.style.setProperty("--mouse-x", "0");
      heroRef.current.style.setProperty("--mouse-y", "0");
    }
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HeroBackground />

      {/* Spotlight overlay — pure CSS, driven by CSS custom props */}
      <div className="hero-spotlight" aria-hidden="true" />

      <div className="hero-wrapper">
        {/* Left: Text content */}
        <div className="hero-left">
          <p className="hero-greeting">Hi, I'm</p>

          <h1 className="hero-name">Sahil Negi</h1>

          <h2 className="hero-title">
            <span className="role-text-container">
              <span className="role-text" id="roleText">Full Stack Developer</span>
              <span className="role-cursor" aria-hidden="true" />
            </span>
          </h2>

          <p className="hero-subtitle">
            Turning ideas into{" "}
            <span className="hero-accent-cyan">
              reliable, scalable, and user-focused applications.
            </span>
          </p>

          <div className="hero-cta">
            <a href="#contact" className="cta-button cta-primary magnetic-btn">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1vnp7aixLGSdJ2QUbTEdhOYzHP9ODEcjq/view?usp=sharing"
              className="cta-button cta-secondary magnetic-btn"
              download
            >
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/snmcodes99" className="hero-social-link magnetic-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sahil-negi-585a26315/" className="hero-social-link magnetic-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://leetcode.com/u/Sahil_SNM/" target="_blank" rel="noreferrer" className="hero-social-link magnetic-btn" aria-label="LeetCode">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
            </a>
            <a href="mailto:sahilnegisnm@gmail.com" className="hero-social-link magnetic-btn" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Code Editor Card */}
        <div className="hero-right">
          <div className="code-editor-card">
            <div className="code-editor-header">
              <div className="code-editor-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="code-editor-filename">developer.js</span>
              <span className="code-editor-badge">JavaScript</span>
            </div>
            <div className="code-editor-body">
              <div className="code-lines">
                {codeLines.map((line, i) => (
                  <div key={i} className="code-line" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="code-line-num">{i + 1}</span>
                    <span className="code-content">
                      {line.blank ? "\u00a0" : (
                        <>
                          {line.indent > 0 && <span className="code-indent">{"  ".repeat(line.indent)}</span>}
                          {line.keyword && <span className="code-keyword">{line.keyword}</span>}
                          {line.name && <span className="code-var">{line.name}</span>}
                          {line.op && <span className="code-op">{line.op}</span>}
                          {line.key && <span className="code-key">{line.key}</span>}
                          {line.value && <span className="code-string">{line.value}</span>}
                          {line.fn && <span className="code-fn">{line.fn}</span>}
                          {line.method && <span className="code-method">{line.method}</span>}
                          {line.arg && <span className="code-string">{line.arg}</span>}
                          {line.close && <span className="code-op">{line.close}</span>}
                        </>
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <div className="code-cursor" />
            </div>
            <div className="code-editor-footer">
              <span className="code-status-dot" />
              <span className="code-status-text">Ready to collaborate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
