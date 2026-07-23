import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Global GSAP defaults for smoother rendering
gsap.config({ force3D: true });

let ctx;

export function initHeroAnimations() {
  if (!document.querySelector(".hero-section")) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out", force3D: true } });

  tl.from(".hero-greeting", { y: 24, autoAlpha: 0, duration: 0.5, immediateRender: false })
    .from(".hero-name", {
      y: 15,
      autoAlpha: 0,
      filter: "blur(8px)",
      scale: 0.98,
      duration: 1,
      ease: "power2.out",
      immediateRender: false
    }, "-=0.35")
    .from(".hero-title", { y: 24, autoAlpha: 0, duration: 0.5, immediateRender: false }, "-=0.8")
    .from(".hero-subtitle", { y: 18, autoAlpha: 0, duration: 0.5, immediateRender: false }, "-=0.25")
    .fromTo(
      ".hero-cta .cta-button",
      { y: 18, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.1, immediateRender: false },
      "-=0.2"
    )
    .from(".hero-socials", { y: 16, autoAlpha: 0, duration: 0.45, immediateRender: false }, "-=0.2")
    .from(".code-editor-card", { x: 50, autoAlpha: 0, duration: 0.8, ease: "power2.out", immediateRender: false }, "-=0.55");

  // Role text typewriter effect
  const roles = ["Full Stack Developer", "Problem Solver", "AI Builder"];
  let roleIndex = 0;
  const roleEl = document.getElementById("roleText");
  let charIndex = roles[0].length;
  let isDeleting = false;
  let typingTimer;

  function typeWriter() {
    if (!roleEl) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      roleEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      roleEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2500; // Pause at the end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400; // Pause before typing next
    }

    typingTimer = setTimeout(typeWriter, typeSpeed);
  }

  // Start the typewriter effect after initial animation
  typingTimer = setTimeout(() => {
    isDeleting = true;
    typeWriter();
  }, 2500);

  return () => clearTimeout(typingTimer);
}

// Aurora blobs are now animated entirely via CSS @keyframes (see index.css).
// Pure compositor-thread animation — zero JS overhead, no GSAP ticks.
export function initAuroraAnimations() { /* no-op — handled by CSS */ }

export function initScrollAnimations() {
  ctx = gsap.context(() => {
    // Section headings — pop in when in view
    gsap.utils.toArray(".section-title").forEach(title => {
      gsap.fromTo(title,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: title,
            start: "top 88%",
            once: true,
          }
        }
      );
    });

    // About — gentle fade up
    animateOnScroll(".about-profile-wrap", ".about-section", { y: 20, opacity: 0 });
    animateOnScroll(".about-content-col", ".about-section", { y: 20, opacity: 0 });

    // Skills hex cards — staggered scale up and fade in
    animateOnScroll(".skill-hex-card", ".skills-section", { opacity: 0, scale: 0.8 }, "back.out(1.7)", 0.05);

    // Projects, education, achievements — fade up
    animateOnScroll(".project-card", ".projects-section", { y: 24, opacity: 0 }, "power2.out", 0.06);
    animateOnScroll(".edu-card", ".education-section", { y: 24, opacity: 0 });
    animateOnScroll(".ach-card", ".achievements-section", { y: 24, opacity: 0 });

    // Contact — staggered card fade up
    animateOnScroll(".connect-card", ".contact-section", { y: 20, opacity: 0 }, "power2.out", 0.06);
  });

  // Refresh after all elements are measured so first-scroll is instant
  ScrollTrigger.refresh();

  return () => ctx.revert();
}

/**
 * Lightweight scroll animation helper — opacity + minimal y-offset only.
 * No scale, no x-axis, no heavy easing = buttery first-scroll.
 */
function animateOnScroll(target, trigger, fromProps, ease = "power2.out", stagger = 0.08) {
  const elements = gsap.utils.toArray(target);
  if (!elements.length) return;

  const toProps = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    duration: 0.6,
    stagger,
    ease,
    force3D: true,
    clearProps: "transform,willChange",
    scrollTrigger: {
      trigger,
      start: "top 82%",
      once: true,
    },
  };

  gsap.fromTo(elements, fromProps, toProps);
}

// WeakMap stores listener refs per button so we can remove them on cleanup
const _magneticListeners = new WeakMap();

export function initMagneticButtons() {
  document.querySelectorAll(".magnetic-btn, .hero-social-link, .contact-social-btn").forEach(btn => {
    const onMove = e => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - r.left - r.width / 2) * 0.3,
        y: (e.clientY - r.top - r.height / 2) * 0.3,
        duration: 0.3,
        ease: "power2.out",
        force3D: true,
        overwrite: "auto", // kills previous tween instead of stacking
      });
    };
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)", force3D: true, overwrite: "auto" });
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    _magneticListeners.set(btn, { onMove, onLeave });
  });
}

export function cleanupMagneticButtons() {
  document.querySelectorAll(".magnetic-btn").forEach(btn => {
    const listeners = _magneticListeners.get(btn);
    if (listeners) {
      btn.removeEventListener("mousemove", listeners.onMove);
      btn.removeEventListener("mouseleave", listeners.onLeave);
      _magneticListeners.delete(btn);
    }
  });
}

export function cleanupAnimations() {
  ScrollTrigger.getAll().forEach(t => t.kill());
  if (ctx) ctx.revert();
  cleanupMagneticButtons();
}
