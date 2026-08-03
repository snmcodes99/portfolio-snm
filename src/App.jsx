import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import FluidBackground from "./components/FluidBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ProjectModal from "./components/ProjectModal";
import FloatingButtons from "./components/FloatingButtons";
import StarCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

// Pre-resolve the hashed URL so we can preload during the loader phase
import profileSrc from "./assets/img/profile.jpg";

import {
  initHeroAnimations,
  initScrollAnimations,
  initMagneticButtons,
  cleanupAnimations,
} from "./gsapAnimation";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Preload the profile image while the loader is showing
  useEffect(() => {
    const img = new Image();
    img.src = profileSrc;
  }, []);

  useEffect(() => {
    if (!loading) {
      // ── Lenis: buttery-smooth scroll ──────────────────────────────
      const lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        lerp: 0.075,           // lower = silkier deceleration
        wheelMultiplier: 0.85, // slightly slower wheel = more premium feel
        touchMultiplier: 1.8,  // faster touch response on mobile
        smoothWheel: true,
        infinite: false,
      });

      // Sync Lenis with GSAP ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const raf = requestAnimationFrame(() => {
        initHeroAnimations();
        initScrollAnimations();
        initMagneticButtons();
        setTimeout(() => ScrollTrigger.refresh(), 200);
      });

      return () => {
        cancelAnimationFrame(raf);
        cleanupAnimations();
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
      };
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          {/* Global overlays — above everything */}
          <StarCursor />
          <ScrollProgress />

          <FluidBackground />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
          <Footer />
          <ProjectModal />
          <FloatingButtons />
        </>
      )}
    </>
  );
}