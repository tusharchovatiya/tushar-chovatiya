import { useEffect, useRef } from "react";

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    type Star = { x: number; y: number; z: number; r: number; tw: number };
    const STAR_COUNT = Math.min(220, Math.floor((w * h) / 9000));
    const stars: Star[] = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.8 + 0.2,
      r: Math.random() * 1.4 + 0.2,
      tw: Math.random() * Math.PI * 2,
    }));

    type Particle = { x: number; y: number; vx: number; vy: number; life: number; hue: number };
    const particles: Particle[] = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      life: Math.random(),
      hue: Math.random() > 0.5 ? 186 : 280,
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // Stars
      for (const s of stars) {
        const a = 0.4 + Math.sin(t * 0.001 + s.tw) * 0.4;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(210, 80%, 90%, ${a * s.z})`;
        ctx.fill();
      }

      // Drifting particles + soft glow
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 60);
        grad.addColorStop(0, `hsla(${p.hue}, 100%, 65%, 0.18)`);
        grad.addColorStop(1, `hsla(${p.hue}, 100%, 65%, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(p.x - 60, p.y - 60, 120, 120);
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none opacity-90"
    />
  );
};

export default StarfieldBackground;
