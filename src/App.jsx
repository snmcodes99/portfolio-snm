import { useEffect, useState, useRef } from "react";
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
  // so it's already decoded when About scrolls into view
  useEffect(() => {
    const img = new Image();
    img.src = profileSrc;
  }, []);

  useEffect(() => {
    if (!loading) {
      // Initialize Lenis for buttery smooth scrolling
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // Sync Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // Wait one animation frame for the full page layout to paint,
      // then init animations. This prevents the "laggy first scroll"
      // caused by GSAP measuring stale scroll positions.
      const raf = requestAnimationFrame(() => {
        initHeroAnimations();
        initScrollAnimations();
        initMagneticButtons();

        // Second refresh after a tick to catch any async image/font loads
        setTimeout(() => ScrollTrigger.refresh(), 200);
      });

      // Track mouse position globally for dynamic section background spotlights
      let mouseRafId = null;
      const handleGlobalMouseMove = (e) => {
        if (mouseRafId) return;
        mouseRafId = requestAnimationFrame(() => {
          document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
          mouseRafId = null;
        });
      };
      window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });

      return () => {
        cancelAnimationFrame(raf);
        cleanupAnimations();
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
        window.removeEventListener('mousemove', handleGlobalMouseMove);
      };
    }
  }, [loading]);


  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
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