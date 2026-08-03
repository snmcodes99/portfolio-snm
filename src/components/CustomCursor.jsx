import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * StarCursor
 *
 * Desktop: Glowing spinning star that follows the mouse, morphs color by section.
 * Mobile:  Tap ripple burst effect at touch points (no cursor shown).
 *
 * Layers (desktop):
 *   1. .cur-glow      — large blurred bloom (lerp 0.045)
 *   2. .cur-star-wrap → SVG (lerp 0.10)
 *        - 8 ray ticks | 8-pointed star (slow CSS spin) | bright core
 *   3. .cur-dot       — snappy 4px core (instant)
 */

const SECTION_COLORS = {
  hero:         { h: 192, s: 100, l: 52 },
  about:        { h: 200, s:  90, l: 62 },
  skills:       { h: 174, s:  72, l: 52 },
  projects:     { h: 158, s:  64, l: 52 },
  education:    { h: 185, s:  96, l: 68 },
  achievements: { h: 236, s:  88, l: 72 },
  contact:      { h: 192, s: 100, l: 52 },
};

const hsl = ({ h, s, l }, a = 1) => `hsla(${h},${s}%,${l}%,${a})`;

// 8-pointed star — 44×44 viewBox, center (22,22), outer r=17, inner r=8
const STAR_PTS =
  "22,5 25.2,14.7 34.3,9.4 29.2,18.3 40,22 29.2,25.7 34.3,34.6 " +
  "25.2,29.3 22,39 18.8,29.3 9.7,34.6 14.8,25.7 4,22 14.8,18.3 " +
  "9.7,9.4 18.8,14.7";

// ── Mobile touch ripple ───────────────────────────────────────────────────
function spawnRipple(x, y, color) {
  const el = document.createElement("div");
  el.className = "touch-ripple";
  el.style.cssText = `
    position:fixed; left:${x}px; top:${y}px;
    width:8px; height:8px; border-radius:50%;
    background:${color}; pointer-events:none;
    z-index:99999; transform:translate(-50%,-50%) scale(1);
    box-shadow:0 0 12px ${color}, 0 0 30px ${color};
  `;
  document.body.appendChild(el);
  gsap.to(el, {
    scale: 6, opacity: 0, duration: 0.7, ease: "power2.out",
    onComplete: () => el.remove(),
  });
}

export default function StarCursor() {
  const glowRef = useRef(null);
  const wrapRef = useRef(null);
  const dotRef  = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    // ── MOBILE: touch ripple only ─────────────────────────────────────────
    if (isTouch) {
      let touchColor = hsl(SECTION_COLORS.hero);

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              touchColor = hsl(SECTION_COLORS[e.target.id] || SECTION_COLORS.hero);
            }
          });
        },
        { threshold: 0.4 }
      );
      document.querySelectorAll("section[id]").forEach((s) => io.observe(s));

      const onTouch = (e) => {
        Array.from(e.changedTouches).forEach((t) => {
          spawnRipple(t.clientX, t.clientY, touchColor);
        });
      };
      document.addEventListener("touchstart", onTouch, { passive: true });

      return () => {
        io.disconnect();
        document.removeEventListener("touchstart", onTouch);
      };
    }

    // ── DESKTOP: star cursor ──────────────────────────────────────────────
    const glow = glowRef.current;
    const wrap = wrapRef.current;
    const dot  = dotRef.current;
    if (!glow || !wrap || !dot) return;

    let mouse = { x: -300, y: -300 };
    let wrapP = { x: -300, y: -300 };
    let glowP = { x: -300, y: -300 };
    let rafId;
    let shown    = false;
    let hovering = false;
    let lerpC    = { ...SECTION_COLORS.hero };
    let targetC  = { ...SECTION_COLORS.hero };

    const applyColor = (c) => {
      const full  = hsl(c);
      const mid   = hsl(c, 0.5);
      const dim   = hsl(c, 0.15);
      dot.style.background  = full;
      dot.style.boxShadow   = `0 0 5px ${full}, 0 0 14px ${mid}, 0 0 28px ${dim}`;
      wrap.style.setProperty("--cur-clr", full);
      wrap.style.setProperty("--cur-mid", mid);
      glow.style.background = `radial-gradient(circle, ${hsl(c, 0.11)} 0%, transparent 65%)`;
    };

    const show = () => {
      if (!shown) {
        gsap.to([glow, wrap, dot], { opacity: 1, duration: 0.45, stagger: 0.05 });
        shown = true;
      }
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      gsap.set(dot, { x: mouse.x, y: mouse.y });
      show();
    };

    const tick = () => {
      wrapP.x += (mouse.x - wrapP.x) * 0.11;
      wrapP.y += (mouse.y - wrapP.y) * 0.11;
      gsap.set(wrap, { x: wrapP.x, y: wrapP.y });

      glowP.x += (mouse.x - glowP.x) * 0.045;
      glowP.y += (mouse.y - glowP.y) * 0.045;
      gsap.set(glow, { x: glowP.x, y: glowP.y });

      lerpC.h += (targetC.h - lerpC.h) * 0.035;
      lerpC.s += (targetC.s - lerpC.s) * 0.035;
      lerpC.l += (targetC.l - lerpC.l) * 0.035;
      if (!hovering) applyColor(lerpC);

      rafId = requestAnimationFrame(tick);
    };
    tick();

    // Section color detection
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            targetC = SECTION_COLORS[e.target.id] || SECTION_COLORS.hero;
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));

    // Hover effects
    const INTERACTIVE =
      "a, button, [role='button'], input, textarea, " +
      ".project-card, .skill-hex-card, .cta-button, .magnetic-btn, .glass-card";

    const onEnter = () => {
      hovering = true;
      gsap.to(wrap, { scale: 1.7, duration: 0.3, ease: "back.out(2)" });
      gsap.to(dot,  { scale: 0,   duration: 0.18 });
    };
    const onLeave = () => {
      hovering = false;
      gsap.to(wrap, { scale: 1, duration: 0.55, ease: "elastic.out(1, 0.5)" });
      gsap.to(dot,  { scale: 1, duration: 0.25, ease: "back.out(2)" });
    };

    const iEls = document.querySelectorAll(INTERACTIVE);
    iEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Click burst
    const onClick = () => {
      gsap.fromTo(wrap,
        { scale: 1 },
        { scale: 2.4, opacity: 0, duration: 0.45, ease: "power3.out",
          onComplete: () => gsap.set(wrap, { scale: hovering ? 1.7 : 1, opacity: 1 }) }
      );
    };

    const onHide = () => gsap.to([glow, wrap, dot], { opacity: 0, duration: 0.3 });
    const onShow = () => { if (shown) gsap.to([glow, wrap, dot], { opacity: 1, duration: 0.3 }); };

    document.addEventListener("mousemove",  onMove);
    document.addEventListener("mouseleave", onHide);
    document.addEventListener("mouseenter", onShow);
    document.addEventListener("click",      onClick);

    return () => {
      cancelAnimationFrame(rafId);
      io.disconnect();
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", onHide);
      document.removeEventListener("mouseenter", onShow);
      document.removeEventListener("click",      onClick);
      iEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // Touch devices get no cursor elements (ripples are DOM-injected)
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Bloom glow */}
      <div ref={glowRef} className="cur-glow" aria-hidden="true" />

      {/* Star SVG wrapper */}
      <div ref={wrapRef} className="cur-star-wrap" aria-hidden="true">
        <svg className="cur-star-svg" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" fill="none">
          {/* 8 ray ticks just outside star tips */}
          <g stroke="var(--cur-clr,#00e7ff)" strokeLinecap="round" opacity="0.65">
            <line x1="22" y1="0.5" x2="22" y2="3.5"  strokeWidth="1" />
            <line x1="22" y1="40.5" x2="22" y2="43.5" strokeWidth="1" />
            <line x1="0.5" y1="22" x2="3.5" y2="22"  strokeWidth="1" />
            <line x1="40.5" y1="22" x2="43.5" y2="22" strokeWidth="1" />
            <line x1="6.5"  y1="6.5"  x2="8.9"  y2="8.9"  strokeWidth="0.8" />
            <line x1="35.1" y1="6.5"  x2="37.5" y2="8.9"  strokeWidth="0.8" />
            <line x1="6.5"  y1="37.5" x2="8.9"  y2="35.1" strokeWidth="0.8" />
            <line x1="35.1" y1="37.5" x2="37.5" y2="35.1" strokeWidth="0.8" />
          </g>

          {/* 8-pointed star */}
          <polygon
            points={STAR_PTS}
            fill="var(--cur-clr,#00e7ff)"
            fillOpacity="0.16"
            stroke="var(--cur-clr,#00e7ff)"
            strokeWidth="0.7"
            strokeOpacity="0.85"
          />

          {/* Core circle */}
          <circle cx="22" cy="22" r="3.5" fill="var(--cur-clr,#00e7ff)" fillOpacity="0.92" />
          {/* Specular highlight */}
          <circle cx="20.8" cy="20.8" r="1" fill="white" fillOpacity="0.55" />
        </svg>
      </div>

      {/* Snappy dot */}
      <div ref={dotRef} className="cur-dot" aria-hidden="true" />
    </>
  );
}
