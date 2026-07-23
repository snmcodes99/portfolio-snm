import { useEffect, useRef } from "react";

/**
 * CursorGlow — A large, soft gradient blob that follows the mouse cursor.
 * Uses the portfolio's cyan and red theme colors for an elegant, 
 * premium glow effect. On mobile, falls back to a subtle static
 * ambient gradient since there's no cursor.
 */
export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;
    const isMobile = window.innerWidth < 768;

    // Current smooth position (lerped toward target)
    let currentX = -500;
    let currentY = -500;
    // Target position (actual mouse)
    let targetX = -500;
    let targetY = -500;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetX = -500;
      targetY = -500;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMobile) {
        // Static ambient glow for mobile — no animation needed after first paint
        // Draw once and stop
        const cx = canvas.width * 0.5;
        const cy = canvas.height * 0.4;
        const r = Math.min(canvas.width, canvas.height) * 0.5;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, "rgba(0, 231, 255, 0.06)");
        grad.addColorStop(0.5, "rgba(0, 231, 255, 0.02)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Small red accent
        const grad2 = ctx.createRadialGradient(
          canvas.width * 0.7, canvas.height * 0.6, 0,
          canvas.width * 0.7, canvas.height * 0.6, r * 0.6
        );
        grad2.addColorStop(0, "rgba(255, 59, 59, 0.04)");
        grad2.addColorStop(1, "transparent");
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        cancelAnimationFrame(animationFrameId);
        return;
      }

      // ── Desktop: smooth cursor-following glow ──
      // Lerp toward target for buttery smooth movement
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      // Only draw if cursor is on screen
      if (currentX > -400 && currentY > -400) {
        // Primary cyan glow (large, soft)
        const r1 = 280;
        const grad1 = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, r1);
        grad1.addColorStop(0, "rgba(0, 231, 255, 0.12)");
        grad1.addColorStop(0.4, "rgba(0, 231, 255, 0.06)");
        grad1.addColorStop(0.7, "rgba(0, 231, 255, 0.02)");
        grad1.addColorStop(1, "transparent");
        ctx.fillStyle = grad1;
        ctx.fillRect(currentX - r1, currentY - r1, r1 * 2, r1 * 2);

        // Secondary red glow (offset, smaller — creates color depth)
        const offsetX = currentX + 60;
        const offsetY = currentY + 40;
        const r2 = 200;
        const grad2 = ctx.createRadialGradient(offsetX, offsetY, 0, offsetX, offsetY, r2);
        grad2.addColorStop(0, "rgba(255, 59, 59, 0.08)");
        grad2.addColorStop(0.5, "rgba(255, 59, 59, 0.03)");
        grad2.addColorStop(1, "transparent");
        ctx.fillStyle = grad2;
        ctx.fillRect(offsetX - r2, offsetY - r2, r2 * 2, r2 * 2);

        // Tiny bright core (white-cyan pinpoint)
        const r3 = 60;
        const grad3 = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, r3);
        grad3.addColorStop(0, "rgba(200, 255, 255, 0.15)");
        grad3.addColorStop(0.5, "rgba(0, 231, 255, 0.05)");
        grad3.addColorStop(1, "transparent");
        ctx.fillStyle = grad3;
        ctx.fillRect(currentX - r3, currentY - r3, r3 * 2, r3 * 2);
      }
    };

    animate();

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none"
      }}
    />
  );
}
