import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
  lineSrc: string;
  colorSrc: string;
  alt: string;
}

type Stage = 1 | 2 | 3;

/**
 * Hero character — three-stage cinematic transformation.
 *
 * Stage 1 (initial)    : pre-baked alpha line art with subtle line tremor
 * Stage 2 (transition) : line art cross-fades to colored render with bounce
 * Stage 3 (AI power)   : colored stays + 1 drop-shadow neon halo
 *                        + breathing radial-gradient orb behind silhouette
 *                        + neural-network SVG draws in
 *
 * Auto-progresses 1→2 after 1.5s in view, 2→3 after another 1.5s.
 * Hover advances 1→2 immediately.
 *
 * Performance:
 *  - Both source images have edge fades (bottom + left) baked into alpha,
 *    so NO CSS mask is needed (mask-composite is one of the most expensive
 *    compositing ops; killing it is the single biggest perf win).
 *  - Single drop-shadow layer on character (was 2, was 4 originally).
 *  - GPU layer hint (translateZ + will-change) only on the colored image —
 *    line art is briefly visible at boot, not worth promoting.
 */
export default function HeroVisual({ lineSrc, colorSrc, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15 });
  const [stage, setStage] = useState<Stage>(1);

  const mx = useSpring(useMotionValue(0), { stiffness: 50, damping: 25 });
  const my = useSpring(useMotionValue(0), { stiffness: 50, damping: 25 });

  useEffect(() => {
    let raf = 0;
    let nextX = 0;
    let nextY = 0;
    const handle = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      nextX = cx * 18;
      nextY = cy * 12;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          mx.set(nextX);
          my.set(nextY);
          raf = 0;
        });
      }
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!inView) {
      setStage(1);
      return;
    }
    const t1 = setTimeout(() => setStage(2), 1500);
    const t2 = setTimeout(() => setStage(3), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [inView]);

  function handleHover() {
    if (stage === 1) setStage(2);
  }

  // GPU compositing hint — only applied to the colored image (long-lived layer).
  const gpuHint = {
    transform: 'translateZ(0)',
    willChange: 'transform, filter, opacity',
  } as const;

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-auto overflow-visible"
      onMouseEnter={handleHover}
    >
      {/* Stage 3: large warm aura */}
      <motion.div
        className="absolute right-[-8vw] bottom-[-15vh] w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,90,0,0.5) 0%, rgba(255,140,80,0.2) 35%, transparent 72%)',
          filter: 'blur(100px)',
        }}
        animate={{
          opacity: stage === 3 ? [0.6, 0.9, 0.6] : 0,
          scale: stage === 3 ? [1, 1.08, 1] : 0.7,
        }}
        transition={
          stage === 3
            ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 1.2, ease: 'easeOut' }
        }
      />

      {/* Stage 1: cool dispersion */}
      <motion.div
        className="absolute right-[5vw] top-[10vh] w-[600px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(140,170,210,0.32) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
        animate={{ opacity: stage === 1 ? 0.8 : 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      {/* Stage 3: breathing radial-gradient orb (replaces 2nd image overlay) */}
      <motion.div
        className="absolute top-[60px] right-[-4vw] w-[60vw] max-w-[1100px] aspect-[1200/1680] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 70% at center 45%, rgba(255,90,0,0.55) 0%, rgba(255,140,80,0.25) 30%, transparent 65%)',
          filter: 'blur(35px)',
        }}
        animate={{
          opacity: stage === 3 ? [0.55, 0.95, 0.55] : 0,
          scale: stage === 3 ? [0.96, 1.02, 0.96] : 0.9,
        }}
        transition={
          stage === 3
            ? { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.8, ease: 'easeOut' }
        }
      />

      {/* Stage 3: Neural network SVG */}
      <NeuralNetwork active={stage === 3} />

      {/* Stage 1: line art — alpha pre-baked, no mask, no blend mode, no invert */}
      <motion.img
        src={lineSrc}
        alt={alt}
        className="absolute top-[60px] right-[-4vw] h-auto w-[60vw] max-w-[1100px] object-contain"
        style={{ x: mx, y: my }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: stage === 1 ? 1 : 0,
          rotate: stage === 1 ? [0, 0.2, -0.15, 0.1, 0] : 0,
          scale: stage === 1 ? [1, 1.003, 0.998, 1.002, 1] : 1,
        }}
        transition={
          stage === 1
            ? {
                rotate: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 0.5 },
              }
            : { opacity: { duration: 0.7 } }
        }
      />

      {/* Stage 2/3: colored character — single drop-shadow, baked alpha edges */}
      <motion.img
        src={colorSrc}
        alt={alt}
        className="absolute top-[60px] right-[-4vw] h-auto w-[60vw] max-w-[1100px] object-contain"
        style={{ ...gpuHint, x: mx, y: my }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{
          opacity: stage >= 2 ? 1 : 0,
          scale:
            stage === 2
              ? [0.94, 1.045, 0.99, 1.01, 1]
              : stage === 3
              ? 1
              : 0.94,
          // Single drop-shadow — wider halo handled by aura + breathing orb.
          filter:
            stage === 3
              ? 'drop-shadow(0 0 18px rgba(255,90,0,0.95))'
              : stage === 2
              ? 'drop-shadow(0 0 12px rgba(255,170,120,0.4))'
              : 'drop-shadow(0 0 0 rgba(255,90,0,0))',
        }}
        transition={{
          opacity: { duration: 0.7, ease: 'easeOut' },
          scale:
            stage === 2
              ? { duration: 1.2, ease: [0.34, 1.4, 0.64, 1] }
              : { duration: 0.8, ease: 'easeOut' },
          filter: { duration: 1.4, ease: 'easeOut' },
        }}
      />
    </div>
  );
}

/* ============================================================
   Neural Network — animated SVG nodes + connecting lines
   ============================================================ */

const NEURAL_NODES = [
  { x: 76, y: 18 },
  { x: 88, y: 32 },
  { x: 92, y: 55 },
  { x: 82, y: 75 },
  { x: 68, y: 88 },
  { x: 56, y: 78 },
  { x: 50, y: 55 },
  { x: 60, y: 32 },
  { x: 96, y: 42 },
  { x: 72, y: 50 },
  { x: 64, y: 65 },
  { x: 84, y: 60 },
];

const NEURAL_CONNECTIONS = (() => {
  const conns: { a: number; b: number; dist: number }[] = [];
  for (let i = 0; i < NEURAL_NODES.length; i++) {
    for (let j = i + 1; j < NEURAL_NODES.length; j++) {
      const dx = NEURAL_NODES[i].x - NEURAL_NODES[j].x;
      const dy = NEURAL_NODES[i].y - NEURAL_NODES[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 22) conns.push({ a: i, b: j, dist });
    }
  }
  return conns;
})();

function NeuralNetwork({ active }: { active: boolean }) {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 0.7 : 0 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <defs>
        <linearGradient id="neural-line" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,90,0,0.9)" />
          <stop offset="100%" stopColor="rgba(255,180,140,0.3)" />
        </linearGradient>
        <radialGradient id="neural-node">
          <stop offset="0%" stopColor="rgba(255,200,160,1)" />
          <stop offset="50%" stopColor="rgba(255,90,0,0.9)" />
          <stop offset="100%" stopColor="rgba(255,90,0,0)" />
        </radialGradient>
      </defs>

      {NEURAL_CONNECTIONS.map((c, i) => (
        <motion.line
          key={i}
          x1={NEURAL_NODES[c.a].x}
          y1={NEURAL_NODES[c.a].y}
          x2={NEURAL_NODES[c.b].x}
          y2={NEURAL_NODES[c.b].y}
          stroke="url(#neural-line)"
          strokeWidth={0.18}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            active
              ? { pathLength: 1, opacity: [0.3, 0.7, 0.3] }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            pathLength: { duration: 1.6, delay: i * 0.06 + 0.2, ease: 'easeOut' },
            opacity: {
              duration: 3 + (i % 4) * 0.5,
              delay: i * 0.06 + 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      ))}

      {NEURAL_NODES.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          fill="url(#neural-node)"
          initial={{ r: 0, opacity: 0 }}
          animate={
            active
              ? { r: [0.5, 1.1, 0.5], opacity: [0.5, 1, 0.5] }
              : { r: 0, opacity: 0 }
          }
          transition={{
            duration: 2.5 + (i % 3) * 0.7,
            delay: i * 0.12 + 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.svg>
  );
}
