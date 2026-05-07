import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BookOpenText,
  Palette,
  Gamepad2,
  Bot,
  Globe,
  type LucideIcon,
} from 'lucide-react';

type IconKey = 'story' | 'character' | 'game' | 'virtual' | 'platform';

interface Feature {
  icon: IconKey;
  title: string;
  desc: string;
}

interface Props {
  features: Feature[];
}

const ICONS: Record<IconKey, LucideIcon> = {
  story: BookOpenText,
  character: Palette,
  game: Gamepad2,
  virtual: Bot,
  platform: Globe,
};

/**
 * Features grid — slanted parallelogram cards.
 *
 * Card composition (back-to-front):
 *  1. Solid #0a0a0a card with single border-top accent (skewed)
 *  2. Step number watermark — debossed, very dark grey, sized large
 *  3. Content layer:
 *     - Static orange glow under the icon area (no border)
 *     - Floating Lucide icon (animates y → parallax against static glow)
 *     - Title + description (smaller, generous line-height)
 *
 * FlowBeam runs through icon row (lg+ only).
 */
export default function FeaturesGrid({ features }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: false });

  return (
    <div ref={ref} className="relative">
      {/* Animated flow beam — through icon+title row, lg+ only */}
      <div className="hidden lg:block absolute top-[63px] left-0 right-0 pointer-events-none z-0">
        <FlowBeam active={inView} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 relative z-10">
        {features.map((f, i) => {
          const Icon = ICONS[f.icon];
          const stepNum = String(i + 1).padStart(2, '0');

          return (
            <motion.div
              key={f.icon}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <article className="feature-card group">
                {/* Step number — solid zinc-800, top-right corner, behind content */}
                <span className="step-watermark" aria-hidden="true">
                  {stepNum}
                </span>

                <div className="feature-card-content">
                  {/* Inline icon + title — both orange, horizontally centered */}
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Icon
                      className="w-6 h-6 shrink-0"
                      strokeWidth={2}
                      style={{ color: '#FF6400' }}
                    />
                    <h3
                      className="font-headline text-2xl font-extrabold tracking-tight leading-tight"
                      style={{ color: '#FF6400' }}
                    >
                      {f.title}
                    </h3>
                  </div>

                  {/* Description — line-height 1.8 for comfortable reading */}
                  <p className="text-[13px] text-on-surface-variant opacity-65 leading-[1.8]">
                    {f.desc}
                  </p>
                </div>
              </article>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   FlowBeam — animated light dot travelling card 1 → card 5
   ============================================================ */

function FlowBeam({ active }: { active: boolean }) {
  const stops = [9.3, 29.7, 50, 70.3, 90.7];

  return (
    <svg
      className="w-full h-[3px] overflow-visible"
      viewBox="0 0 100 1"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="beam-rail" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,90,0,0)" />
          <stop offset="10%" stopColor="rgba(255,90,0,0.25)" />
          <stop offset="50%" stopColor="rgba(255,140,80,0.35)" />
          <stop offset="90%" stopColor="rgba(255,90,0,0.25)" />
          <stop offset="100%" stopColor="rgba(255,90,0,0)" />
        </linearGradient>
        <radialGradient id="beam-dot">
          <stop offset="0%" stopColor="rgba(255,220,180,1)" />
          <stop offset="35%" stopColor="rgba(255,90,0,1)" />
          <stop offset="100%" stopColor="rgba(255,90,0,0)" />
        </radialGradient>
        <filter id="beam-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>

      <line
        x1={stops[0]}
        y1="0.5"
        x2={stops[stops.length - 1]}
        y2="0.5"
        stroke="url(#beam-rail)"
        strokeWidth="0.08"
      />

      {stops.map((x, i) => (
        <circle key={i} cx={x} cy="0.5" r="0.4" fill="rgba(255,90,0,0.4)" />
      ))}

      <motion.circle
        cy="0.5"
        r="1.4"
        fill="url(#beam-dot)"
        filter="url(#beam-blur)"
        animate={
          active ? { cx: [stops[0], ...stops.slice(1)] } : { cx: stops[0] }
        }
        transition={
          active
            ? {
                duration: 5,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                repeatDelay: 0.6,
              }
            : { duration: 0.3 }
        }
      />
      <motion.circle
        cy="0.5"
        r="0.45"
        fill="rgba(255,240,210,1)"
        animate={
          active ? { cx: [stops[0], ...stops.slice(1)] } : { cx: stops[0] }
        }
        transition={
          active
            ? {
                duration: 5,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                repeatDelay: 0.6,
              }
            : { duration: 0.3 }
        }
      />
    </svg>
  );
}
