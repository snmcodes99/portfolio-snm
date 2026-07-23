import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`floating-btns ${visible ? "floating-btns-visible" : ""}`}>
      {/* Chat Button */}
      <div className="floating-chat-wrap">
        {chatOpen && (
          <div className="chat-bubble glass-card">
            <p className="chat-bubble-text">
              <span className="chat-bubble-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" width="18" height="18" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </span>
              Hey there! Want to collaborate or have a question?{" "}
              <a href="#contact" className="chat-link" onClick={() => setChatOpen(false)}>
                Drop me a message →
              </a>
            </p>
            <button className="chat-bubble-close" onClick={() => setChatOpen(false)}>×</button>
          </div>
        )}
        <button
          className={`floating-btn floating-chat-btn ${chatOpen ? "chat-btn-active" : ""}`}
          aria-label="Open chat"
          onClick={() => setChatOpen(v => !v)}
        >
          {chatOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
              <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="floating-btn floating-top-btn"
        aria-label="Scroll to top"
        onClick={scrollToTop}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
          <path d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </div>
  );
}
