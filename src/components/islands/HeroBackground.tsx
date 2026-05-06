import { motion } from 'framer-motion';

/**
 * Hero atmospheric background — slim version.
 *
 * Wave-2 perf cuts:
 *  - removed mouse parallax entirely (was running a 2nd window mousemove
 *    listener + 4 motion springs; visually contributed ~nothing on top of
 *    the character's own parallax)
 *  - 24 → 14 floating particles
 *  - grid is now a static CSS background (no transform, no rerender)
 *
 * Kept: subtle warm grid, two large bokeh orbs for depth, looping particles.
 */
export default function HeroBackground() {
  // Deterministic positions to avoid SSR hydration mismatch
  const particles = Array.from({ length: 14 }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const r = seed / 233280;
    return {
      top: `${(r * 100).toFixed(1)}%`,
      left: `${(((seed * 1.7) % 100)).toFixed(1)}%`,
      size: 1 + (i % 3),
      duration: 8 + (i % 5) * 2,
      delay: (i * 0.5) % 4,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Static warm grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,90,0,0.07) 1px, transparent 1px), ' +
            'linear-gradient(90deg, rgba(255,90,0,0.07) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Soft radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(10,10,12,0.6) 100%)',
        }}
      />

      {/* Two large bokeh orbs — pure CSS, no animation */}
      <div
        className="absolute top-[15%] left-[8%] w-[500px] h-[500px] rounded-full bg-primary/10"
        style={{ filter: 'blur(140px)' }}
      />
      <div
        className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-secondary-container/20"
        style={{ filter: 'blur(140px)' }}
      />

      {/* Floating particles — loop only, no parallax */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow:
              '0 0 8px rgba(255,90,0,0.6), 0 0 16px rgba(255,140,80,0.3)',
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
