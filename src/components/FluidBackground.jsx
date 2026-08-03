import { useEffect, useRef } from "react";
import webglFluid from "../utils/webgl-fluid";

/**
 * FluidBackground — Real WebGL Navier-Stokes Fluid Simulation
 * 
 * Uses the webgl-fluid package (based on Pavel Dobryakov's simulation).
 * Configured to match the theme (cyan/red hints, dark void background).
 * Uses pointer-events: none so it doesn't block UI interactions, and relays
 * window mouse events down to the canvas so the fluid still reacts.
 */
export default function FluidBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const container = containerRef.current;
    if (!container) return;

    // Create a fresh canvas for webgl-fluid
    const canvas = document.createElement("canvas");
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    container.appendChild(canvas);

    try {
      webglFluid(canvas, {
        TRIGGER: "hover",
        IMMEDIATE: true,
        AUTO: false,
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 3.0, // Fades quickly enough to not block text
        VELOCITY_DISSIPATION: 0.8, 
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 20, // Reduced slightly so it flows more evenly
        SPLAT_RADIUS: 0.12, // Slightly thinner
        SPLAT_FORCE: 3000,
        SHADING: true,
        COLORFUL: true, 
        PAUSED: false,
        BACK_COLOR: { r: 8, g: 12, b: 24 },
        TRANSPARENT: false,
        BLOOM: true, // Enable bloom to create bright cores and darker edges (shades of the color)
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.1, // Reduced glow intensity
        BLOOM_THRESHOLD: 0.8, // Only glow in the most intense areas
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: false, // Disable sunrays to prevent any extra glare
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0,
      });
    } catch (err) {
      console.warn("FluidBackground WebGL initialization failed:", err);
    }

    const relayEvent = (e) => {
      if (e.target === canvas) return;
      const mouseEvent = new MouseEvent(e.type, e);
      canvas.dispatchEvent(mouseEvent);
      if (window.PointerEvent && e instanceof PointerEvent) {
          const pointerEvent = new PointerEvent(e.type, e);
          canvas.dispatchEvent(pointerEvent);
      }
    };

    const handleMouseMove = (e) => relayEvent(e);
    const handlePointerMove = (e) => relayEvent(e);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointermove", handlePointerMove);
      
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (gl) {
        const ext = gl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
      }
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        contain: "strict",
        transform: "translateZ(0)",
        isolation: "isolate",
      }}
    />
  );
}
