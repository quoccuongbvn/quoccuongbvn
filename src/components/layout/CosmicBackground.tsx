import { useMemo } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function CosmicBackground() {
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 70 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0618] via-[#0f0a20] to-[#070312]" />
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.22),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.16),transparent_30%)]" />

      {stars.map((star, idx) => (
        <div
          key={idx}
          className="absolute rounded-full bg-white/70 animate-twinkle"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            boxShadow: "0 0 12px rgba(255,255,255,0.45)",
          }}
        />
      ))}

      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-violet-500/25 to-blue-500/15 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-gradient-to-r from-rose-500/20 to-amber-500/10 blur-3xl" />
    </div>
  );
}
