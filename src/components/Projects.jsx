import { useRef } from "react";
import python from "../assets/img/python.jpg";
import js from "../assets/img/js.png";
import html from "../assets/img/html.png";
import logo from "../assets/img/logo.jpg";
import ProjectsBackground from "./ProjectsBackground";

const projects = [
  {
    title: "Decentralized Voting System",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeygIdWrynl_i22lc--1RKR3rykJTzbEavPmnZv1Nu6ebJ2DahruUXe-c&s=10",
    tags: ["ICP Motoko", "Blockchain"],
    desc: "Secure, transparent voting platform built on decentralized infra.",
    demo: "#",
    repo: "#",
    accent: "cyan",
  },
  {
    title: "Crop Recommendation System",
    img: python,
    tags: ["Python", "Flask", "ML"],
    desc: "AI-powered crop suggestion system based on soil parameters.",
    demo: "#",
    repo: "#",
    accent: "red",
  },
  {
    title: "Disaster Management System",
    img: js,
    tags: ["JavaScript", "Node.js", "MongoDB"],
    desc: "Real-time coordination platform for emergency response.",
    demo: "#",
    repo: "#",
    accent: "cyan",
  },
  {
    title: "Task Management System",
    img: html,
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "Kanban-style task tracker with drag-and-drop functionality.",
    demo: "#",
    repo: "#",
    accent: "red",
  },
];

export default function Projects() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth > 768 ? -400 : -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth > 768 ? 400 : 300, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="projects-section" style={{ position: 'relative' }}>
      <ProjectsBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-nav">
            <button className="project-nav-btn" onClick={scrollLeft} aria-label="Scroll left">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="project-nav-btn" onClick={scrollRight} aria-label="Scroll right">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="projects-scroll-wrapper">
          <div className="projects-grid" ref={scrollRef}>
            {projects.map((p, i) => (
              <div key={i} className={`project-card glass-card project-card-${p.accent}`}>
                <div className="project-image">
                  <img src={p.img} alt={p.title} />
                  {/* Hover reveal overlay */}
                  <div className="project-overlay">
                    <a href={p.demo} className="project-overlay-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      View Demo
                    </a>
                    <a href={p.repo} className="project-overlay-btn project-overlay-btn-secondary">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{p.title}</h3>
                  <div className="project-tags">
                    {p.tags.map((t, j) => (
                      <span key={j} className="tag">{t}</span>
                    ))}
                  </div>
                  <p className="project-description">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
