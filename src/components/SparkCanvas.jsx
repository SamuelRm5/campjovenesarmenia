import { useEffect, useRef } from "react";

const COLORS = ["#fbbf24", "#f97316", "#fb923c", "#ef4444", "#fde68a"];

export default function SparkCanvas({ count = 80 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const size = () => {
      cv.width = Math.max(1, cv.clientWidth * dpr);
      cv.height = Math.max(1, cv.clientHeight * dpr);
    };
    size();
    window.addEventListener("resize", size);

    const parts = [];
    const spawn = () => {
      parts.push({
        x: Math.random() * cv.width,
        y: cv.height + 8 * dpr,
        vx: (Math.random() - 0.5) * 0.35 * dpr,
        vy: -(0.35 + Math.random() * 1.05) * dpr,
        r: (0.7 + Math.random() * 1.9) * dpr,
        life: 0,
        max: 220 + Math.random() * 220,
        c: COLORS[(Math.random() * COLORS.length) | 0],
        wob: Math.random() * Math.PI * 2,
      });
    };

    let raf;
    const loop = () => {
      ctx.clearRect(0, 0, cv.width, cv.height);
      if (parts.length < count && Math.random() < 0.5) spawn();
      if (parts.length > count) parts.length = count;
      ctx.globalCompositeOperation = "lighter";
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.life++;
        p.wob += 0.02;
        p.x += p.vx + Math.sin(p.wob) * 0.28 * dpr;
        p.y += p.vy;
        const t = p.life / p.max;
        if (t >= 1 || p.y < -12) {
          parts.splice(i, 1);
          continue;
        }
        const a = t < 0.12 ? t / 0.12 : 1 - (t - 0.12) / 0.88;
        ctx.globalAlpha = Math.max(a, 0) * 0.75;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (1 - t * 0.45), 0, 6.2832);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
