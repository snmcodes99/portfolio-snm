import { useState, useEffect, useRef, useCallback } from "react";
import logo from "../assets/img/logo.jpg";

const NAV_SECTIONS = ["about", "skills", "projects", "education", "achievements", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [activeId, setActiveId]   = useState("");

  // ── Active section highlight via IntersectionObserver ──────────────────
  useEffect(() => {
    const observers = [];

    NAV_SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const toggleMenu = () => setIsOpen(o => !o);
  const closeMenu  = ()  => setIsOpen(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <img src={logo} className="logo" alt="logo" />
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {NAV_SECTIONS.map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${activeId === id ? "nav-link-active" : ""}`}
                onClick={closeMenu}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`mobile-menu-toggle ${isOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
