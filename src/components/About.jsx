import profile from "../assets/img/profile.jpg";
import AboutBackground from "./AboutBackground";

export default function About() {
  return (
    <section id="about" className="about-section" style={{ position: 'relative' }}>
      <AboutBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {/* Profile Image with Floating Badges */}
          <div className="about-image-col">
            <div className="about-profile-wrap">
              <div className="about-profile-glow" />
              <div className="about-profile-ring">
                <img src={profile} alt="Sahil Negi" className="about-profile-img" decoding="async" />
              </div>
              <div className="about-profile-tag">
                <span className="about-profile-tag-dot" />
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="about-content-col">
            <div className="about-card glass-card">
                <h3 className="about-heading">
                  Engineer, <span className="highlight-cyan">Builder,</span> <span className="highlight-red">Problem Solver.</span>
                </h3>

                <p className="about-text">
                  Passionate about building <span className="highlight-red">impactful software</span>,
                  solving complex problems, and continuously pushing my technical boundaries.
                  I enjoy transforming ideas into scalable digital products that deliver real value.
                </p>
                <p className="about-text">
                  From full-stack applications and cloud deployments to hackathons and DSA,
                  I'm constantly exploring new technologies, refining my craft, and growing as
                  a software engineer.
                </p>

              <div className="about-stats-row">
                <div className="about-stat">
                  <span className="about-stat-num highlight-cyan">10+</span>
                  <span className="about-stat-label">Projects</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-num highlight-red">500+</span>
                  <span className="about-stat-label">LeetCode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}