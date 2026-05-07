import { useState } from 'react';

interface Stage {
  num: '01' | '02' | '03' | '04';
  label: string;
  en: string;
  title: string;
  desc: string;
  meta: [string, string, string];
}

interface Props {
  stages: Stage[];
  capabilitiesLabel: string;
}

/**
 * AI Comic Studio — 4-stage tabbed showcase.
 * Each stage shows a custom SVG mockup of the workflow step.
 * Tabs along the top, large interactive preview pane on the right.
 */
export default function ComicStudio({ stages, capabilitiesLabel }: Props) {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <>
      {/* Stage tabs */}
      <div
        className="mx-comic-tabs grid"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--bone-line)',
          borderBottom: '1px solid var(--bone-line)',
        }}
      >
        {stages.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.num}
              onClick={() => setActive(i)}
              style={{
                position: 'relative',
                padding: '24px 28px',
                textAlign: 'left',
                background: isActive ? 'var(--color-ink-2)' : 'transparent',
                borderLeft: i === 0 ? 'none' : '1px solid var(--bone-line)',
                borderTop: 'none',
                borderRight: 'none',
                borderBottom: 'none',
                cursor: 'pointer',
                color: 'var(--color-bone)',
                transition: 'background .3s',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = 'transparent';
              }}
            >
              {/* Active top indicator */}
              <div
                style={{
                  position: 'absolute',
                  top: -1,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'var(--color-cinnabar)',
                  transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform .4s cubic-bezier(.22,1,.36,1)',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 12,
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.25em',
                    color: isActive ? 'var(--color-cinnabar)' : 'var(--color-bone-3)',
                  }}
                >
                  STEP · {s.num}
                </span>
                {isActive && (
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: 'var(--color-cinnabar)',
                      borderRadius: '50%',
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 22,
                  fontWeight: 500,
                  color: isActive ? 'var(--color-bone)' : 'var(--color-bone-2)',
                  letterSpacing: '-0.01em',
                  marginBottom: 4,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--color-bone-3)',
                  letterSpacing: '0.05em',
                }}
              >
                {s.en}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage canvas */}
      <div
        className="mx-comic-canvas grid"
        style={{
          gridTemplateColumns: '1fr 1.4fr',
          gap: 0,
          border: '1px solid var(--bone-line)',
          borderTop: 'none',
          background: 'var(--color-ink-2)',
          minHeight: 560,
        }}
      >
        {/* Left text */}
        <div
          style={{
            padding: '56px 48px',
            borderRight: '1px solid var(--bone-line)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              fontFamily: 'var(--font-headline)',
              fontSize: 140,
              fontWeight: 700,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(244,236,220,0.06)',
              lineHeight: 1,
              letterSpacing: '-0.06em',
              pointerEvents: 'none',
            }}
          >
            {stage.num}
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              className="num-tag"
              style={{ marginBottom: 24, color: 'var(--color-cinnabar)' }}
            >
              {stage.en}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 44,
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--color-bone)',
                margin: '0 0 28px',
              }}
            >
              {stage.title}
            </h3>
            <p
              className="body-md-v2"
              style={{ marginBottom: 36, maxWidth: 420 }}
            >
              {stage.desc}
            </p>

            <div style={{ borderTop: '1px solid var(--bone-line)', paddingTop: 24 }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: 'var(--color-bone-3)',
                  marginBottom: 16,
                }}
              >
                {capabilitiesLabel}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {stage.meta.map((m, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      fontSize: 13,
                      color: 'var(--color-bone-2)',
                    }}
                  >
                    <span
                      style={{
                        width: 16,
                        height: 1,
                        background: 'var(--color-cinnabar)',
                      }}
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right mockup */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #14100c 0%, #0a0805 100%)',
            minHeight: 560,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(244,236,220,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(244,236,220,0.025) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              pointerEvents: 'none',
            }}
          />
          {active === 0 && <MockStory />}
          {active === 1 && <MockCharacter />}
          {active === 2 && <MockStoryboard />}
          {active === 3 && <MockCanvas />}
        </div>
      </div>
    </>
  );
}

/* ============================================================
   Stage mockups — pure SVG/CSS, no real screenshots
   ============================================================ */

function MockStory() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--color-cinnabar)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            color: 'var(--color-bone-2)',
          }}
        >
          STORY · zh-TW · FLEXIBLE
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--color-bone-3)',
          }}
        >
          9,995 pts
        </span>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: 'var(--color-cinnabar)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 11,
            color: 'var(--color-bone)',
            fontWeight: 700,
          }}
        >
          ✦
        </div>
        <div
          style={{
            background: 'rgba(244,236,220,0.04)',
            border: '1px solid var(--bone-line)',
            padding: '14px 18px',
            maxWidth: '85%',
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: 'var(--color-bone)',
              lineHeight: 1.7,
              marginBottom: 8,
            }}
          >
            這個「陰陽眼」設定非常關鍵。在水彩風格中，兩隻不同顏色的眼睛會成為畫面的靈魂焦點──
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['第一格 · 草稿', '第二格 · 醒來', '第三格 · 街道', '第四格 · 上色'].map(
              (p, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 10,
                    padding: '3px 8px',
                    background: 'rgba(255,90,31,0.1)',
                    color: 'var(--color-cinnabar)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {p}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
        <div
          style={{
            background: 'var(--color-cinnabar)',
            color: 'var(--color-bone)',
            padding: '12px 16px',
            maxWidth: '70%',
            fontSize: 12,
            lineHeight: 1.6,
          }}
        >
          貓咪有奇幻元素，他是陰陽眼，兩隻眼睛不同顏色。
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginTop: 4 }}>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: 'var(--color-cinnabar)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 11,
            color: 'var(--color-bone)',
            fontWeight: 700,
          }}
        >
          ✦
        </div>
        <div
          style={{
            background: 'rgba(244,236,220,0.04)',
            border: '1px solid var(--bone-line)',
            padding: '14px 18px',
            maxWidth: '85%',
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: 'var(--color-bone-2)',
              lineHeight: 1.7,
            }}
          >
            為您草擬了四格分鏡流程，並準備進入角色設計階段。
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['修改第四格對話', '微調色彩表現', '完成討論 →'].map((c, i) => (
          <span
            key={i}
            style={{
              fontSize: 11,
              padding: '8px 14px',
              border: i === 2 ? '1px solid var(--color-cinnabar)' : '1px solid var(--bone-line)',
              color: i === 2 ? 'var(--color-cinnabar)' : 'var(--color-bone-2)',
              background: 'var(--color-ink-2)',
            }}
          >
            {c}
          </span>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          padding: '12px 16px',
          border: '1px solid var(--bone-line)',
          background: 'var(--color-ink-2)',
        }}
      >
        <span style={{ fontSize: 12, color: 'var(--color-bone-3)', flex: 1 }}>
          描述您的故事構想…
        </span>
        <span
          style={{
            fontSize: 11,
            color: 'var(--color-cinnabar)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.15em',
          }}
        >
          SEND ↵
        </span>
      </div>
    </div>
  );
}

function MockCharacter() {
  const Pose = ({
    children,
    label,
  }: {
    children: React.ReactNode;
    label: string;
  }) => (
    <div
      style={{
        flex: 1,
        position: 'relative',
        borderRight: '1px dashed rgba(244,236,220,0.1)',
        padding: '20px 8px',
      }}
    >
      <svg viewBox="0 0 80 140" style={{ width: '100%', height: 200, display: 'block' }}>
        {children}
      </svg>
      <div
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 9,
          letterSpacing: '0.2em',
          color: 'var(--color-bone-3)',
          marginTop: 8,
        }}
      >
        {label}
      </div>
    </div>
  );

  return (
    <div style={{ position: 'absolute', inset: 0, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
          CHARACTER · 3-VIEW TURNAROUND
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
        <span
          style={{
            fontSize: 10,
            color: '#6ad08a',
            border: '1px solid rgba(106,208,138,0.3)',
            padding: '3px 8px',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.15em',
          }}
        >
          ✓ GENERATED
        </span>
      </div>

      <div
        style={{
          background: 'var(--color-ink-2)',
          border: '1px solid var(--bone-line)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            padding: '14px 20px',
            borderBottom: '1px solid var(--bone-line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontFamily: 'var(--font-headline)', fontSize: 16, color: 'var(--color-bone)' }}>
            圓滾滾太空人 ·{' '}
            <span style={{ color: 'var(--color-bone-3)', fontSize: 13 }}>主角</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--color-cinnabar)',
              letterSpacing: '0.15em',
            }}
          >
            FAL · NANO BANANA PRO
          </div>
        </div>

        <div style={{ display: 'flex', flex: 1, padding: '4px 20px' }}>
          <Pose label="FRONT">
            <ellipse cx="40" cy="38" rx="22" ry="22" fill="rgba(180,200,230,0.25)" stroke="var(--color-cinnabar)" strokeWidth="1" />
            <circle cx="32" cy="36" r="4" fill="#ffd166" />
            <circle cx="48" cy="36" r="4" fill="#ffd166" />
            <line x1="40" y1="14" x2="40" y2="6" stroke="var(--color-bone-2)" strokeWidth="1" />
            <circle cx="40" cy="5" r="2" fill="var(--color-cinnabar)" />
            <rect x="22" y="58" width="36" height="50" rx="4" fill="rgba(244,236,220,0.85)" stroke="var(--bone-line)" />
            <rect x="35" y="68" width="10" height="14" fill="var(--color-cinnabar)" opacity="0.8" />
            <rect x="14" y="64" width="10" height="36" rx="3" fill="rgba(244,236,220,0.7)" />
            <rect x="56" y="64" width="10" height="36" rx="3" fill="rgba(244,236,220,0.7)" />
            <rect x="26" y="108" width="12" height="20" fill="rgba(244,236,220,0.85)" />
            <rect x="42" y="108" width="12" height="20" fill="rgba(244,236,220,0.85)" />
          </Pose>
          <Pose label="SIDE">
            <ellipse cx="40" cy="38" rx="20" ry="22" fill="rgba(180,200,230,0.25)" stroke="var(--color-cinnabar)" strokeWidth="1" />
            <circle cx="48" cy="36" r="4" fill="#ffd166" />
            <line x1="40" y1="14" x2="40" y2="6" stroke="var(--color-bone-2)" strokeWidth="1" />
            <circle cx="40" cy="5" r="2" fill="var(--color-cinnabar)" />
            <rect x="26" y="58" width="28" height="50" rx="4" fill="rgba(244,236,220,0.85)" stroke="var(--bone-line)" />
            <rect x="55" y="62" width="10" height="32" rx="3" fill="rgba(244,236,220,0.5)" />
            <rect x="18" y="64" width="10" height="36" rx="3" fill="rgba(244,236,220,0.7)" />
            <rect x="30" y="108" width="12" height="20" fill="rgba(244,236,220,0.85)" />
            <rect x="42" y="108" width="12" height="20" fill="rgba(244,236,220,0.6)" />
          </Pose>
          <div style={{ flex: 1, position: 'relative', padding: '20px 8px' }}>
            <svg viewBox="0 0 80 140" style={{ width: '100%', height: 200, display: 'block' }}>
              <ellipse cx="40" cy="38" rx="22" ry="22" fill="rgba(180,200,230,0.18)" stroke="var(--color-cinnabar)" strokeWidth="1" />
              <line x1="40" y1="14" x2="40" y2="6" stroke="var(--color-bone-2)" strokeWidth="1" />
              <circle cx="40" cy="5" r="2" fill="var(--color-cinnabar)" />
              <rect x="22" y="58" width="36" height="50" rx="4" fill="rgba(244,236,220,0.85)" stroke="var(--bone-line)" />
              <rect x="34" y="64" width="12" height="32" rx="3" fill="rgba(244,236,220,0.6)" />
              <rect x="14" y="64" width="10" height="36" rx="3" fill="rgba(244,236,220,0.7)" />
              <rect x="56" y="64" width="10" height="36" rx="3" fill="rgba(244,236,220,0.7)" />
              <rect x="26" y="108" width="12" height="20" fill="rgba(244,236,220,0.85)" />
              <rect x="42" y="108" width="12" height="20" fill="rgba(244,236,220,0.85)" />
            </svg>
            <div
              style={{
                textAlign: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                letterSpacing: '0.2em',
                color: 'var(--color-bone-3)',
                marginTop: 8,
              }}
            >
              BACK
            </div>
          </div>
        </div>

        <div style={{ padding: '14px 20px', borderTop: '1px solid var(--bone-line)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              letterSpacing: '0.25em',
              color: 'var(--color-bone-3)',
              marginBottom: 6,
            }}
          >
            性格描述 · PERSONALITY
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-bone-2)', lineHeight: 1.6 }}>
            嚴謹、富有責任感的科學家。長期獨自漂流，養成自言自語記日誌的習慣，內心溫柔且渴望陪伴。
          </div>
        </div>
      </div>
    </div>
  );
}

function MockStoryboard() {
  const acts = [
    { name: '第 1 幕', label: '孤獨航行中的神祕訪客' },
    { name: '第 2 幕', label: '初步鑑定：生命體 7-11 號' },
  ];

  const Panel = ({
    ratio,
    n,
    content,
  }: {
    ratio: string;
    n: string;
    content: React.ReactNode;
  }) => (
    <div
      style={{
        background: 'var(--color-ink)',
        border: '1px solid var(--bone-line)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          padding: '6px 10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--bone-line)',
        }}
      >
        <span style={{ fontSize: 9, color: 'var(--color-bone-3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}>
          分鏡 {n}
        </span>
        <span
          style={{
            fontSize: 9,
            color: 'var(--color-cinnabar)',
            background: 'rgba(255,90,31,0.1)',
            padding: '1px 6px',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {ratio}
        </span>
      </div>
      <div
        style={{
          flex: 1,
          position: 'relative',
          minHeight: 80,
          background: 'linear-gradient(135deg, #1a1410 0%, #0e0b08 100%)',
        }}
      >
        {content}
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
          STORYBOARD · 17 / 17 GENERATED
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-bone-3)' }}>
          頁漫 · zh-TW
        </span>
      </div>

      {acts.map((act, ai) => (
        <div key={ai}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
            <span
              style={{
                fontSize: 10,
                padding: '3px 8px',
                background: 'rgba(255,90,31,0.1)',
                color: 'var(--color-cinnabar)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.15em',
              }}
            >
              {act.name}
            </span>
            <span style={{ fontFamily: 'var(--font-headline)', fontSize: 14, color: 'var(--color-bone)' }}>
              {act.label}
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            <Panel
              ratio="3:2"
              n="1"
              content={
                <svg viewBox="0 0 100 70" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
                  <rect width="100" height="70" fill="url(#nebula)" />
                  <defs>
                    <radialGradient id="nebula" cx="0.5" cy="0.4">
                      <stop offset="0%" stopColor="#5a3a8a" />
                      <stop offset="100%" stopColor="#0a0510" />
                    </radialGradient>
                  </defs>
                  {[
                    [20, 15],
                    [80, 20],
                    [35, 8],
                    [65, 40],
                    [15, 55],
                    [90, 55],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="0.6" fill="#fff" />
                  ))}
                  <circle cx="50" cy="42" r="6" fill="rgba(255,255,255,0.85)" />
                  <rect x="45" y="48" width="10" height="14" fill="rgba(255,255,255,0.85)" />
                  <rect x="6" y="6" width="34" height="14" rx="2" fill="#fff" opacity="0.95" />
                  <text x="9" y="16" fontSize="5" fill="#000">航行日誌, 1248天</text>
                </svg>
              }
            />
            <Panel
              ratio="16:9"
              n="2"
              content={
                <svg viewBox="0 0 100 70" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
                  <rect width="100" height="70" fill="#3a2a1f" />
                  {Array.from({ length: 8 }).map((_, i) => (
                    <rect
                      key={i}
                      x={10 + (i % 4) * 22}
                      y={48 + Math.floor(i / 4) * 12}
                      width="18"
                      height="8"
                      fill="#1a0f08"
                      stroke="#ff8a3c"
                      strokeWidth="0.3"
                    />
                  ))}
                  <ellipse cx="50" cy="32" rx="14" ry="11" fill="#c89060" />
                  <polygon points="38,24 42,15 46,24" fill="#c89060" />
                  <polygon points="58,24 54,15 50,24" fill="#c89060" />
                  <circle cx="46" cy="30" r="2" fill="#5fa564" />
                  <circle cx="54" cy="30" r="2" fill="#5fa564" />
                  <ellipse cx="78" cy="20" rx="14" ry="8" fill="#fff" opacity="0.95" />
                  <text x="73" y="23" fontSize="6" fill="#000">喵?</text>
                </svg>
              }
            />
            <Panel
              ratio="3:2"
              n="3"
              content={
                <svg viewBox="0 0 100 70" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
                  <rect width="100" height="70" fill="#2a1a3a" />
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line
                      key={i}
                      x1="60"
                      y1={10 + i * 9}
                      x2="92"
                      y2={10 + i * 9}
                      stroke="#5fc7e0"
                      strokeWidth="0.4"
                      opacity="0.6"
                    />
                  ))}
                  <rect x="60" y="8" width="34" height="54" fill="none" stroke="#5fc7e0" strokeWidth="0.5" />
                  <circle cx="28" cy="34" r="11" fill="rgba(180,200,230,0.4)" stroke="#ff5a1f" strokeWidth="0.5" />
                  <circle cx="24" cy="32" r="2" fill="#ffd166" />
                  <circle cx="32" cy="32" r="2" fill="#ffd166" />
                  <polygon
                    points="20,20 22,16 24,20 28,18 26,22 30,24 26,26 28,30 24,28 22,32 20,28 16,30 18,26 14,24 18,22 16,18"
                    fill="#ff5a1f"
                    opacity="0.8"
                  />
                  <text x="38" y="14" fontSize="5" fill="#fff">啟動防禦程序!</text>
                </svg>
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function MockCanvas() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cinnabar)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bone-2)' }}>
          CANVAS EDITOR
        </span>
        <span style={{ flex: 1, height: 1, background: 'var(--bone-line)' }} />
        {['導入 JSON', '備份 JSON', '匯出圖片', '下載素材'].map((b, i) => (
          <span
            key={i}
            style={{
              fontSize: 10,
              padding: '5px 10px',
              border: i === 2 ? '1px solid var(--color-cinnabar)' : '1px solid var(--bone-line)',
              color: i === 2 ? 'var(--color-cinnabar)' : 'var(--color-bone-2)',
              background: i === 2 ? 'rgba(255,90,31,0.1)' : 'transparent',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.1em',
            }}
          >
            {b}
          </span>
        ))}
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.6fr 0.9fr', gap: 14 }}>
        <div
          style={{
            background: '#f4ecdc',
            border: '1px solid var(--bone-line)',
            padding: 14,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 8,
              right: 12,
              fontFamily: 'var(--font-mono)',
              fontSize: 8,
              color: '#999',
              letterSpacing: '0.2em',
            }}
          >
            PAGE · 01
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gridTemplateRows: '1.1fr 0.9fr 0.9fr',
              gap: 6,
              height: '100%',
            }}
          >
            <div
              style={{
                gridRow: 'span 2',
                background: 'linear-gradient(135deg,#3a2a5a,#0e0a18)',
                border: '1px solid #222',
                position: 'relative',
              }}
            >
              <svg viewBox="0 0 100 140" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
                {[
                  [20, 15],
                  [80, 20],
                  [35, 40],
                  [65, 80],
                  [15, 110],
                  [90, 90],
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="1" fill="#fff" opacity="0.8" />
                ))}
                <rect x="10" y="60" width="80" height="60" fill="#1a1020" stroke="#444" />
                <circle cx="50" cy="80" r="12" fill="rgba(255,255,255,0.85)" />
                <rect x="44" y="88" width="12" height="20" fill="rgba(255,255,255,0.85)" />
                <rect x="6" y="6" width="40" height="14" rx="2" fill="#fff" />
                <text x="9" y="15" fontSize="5" fill="#000">航行日誌, 1248天</text>
              </svg>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg,#3a2a1f,#1a0f08)',
                border: '1px solid #222',
                position: 'relative',
              }}
            >
              <svg viewBox="0 0 100 70" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
                <rect width="100" height="70" fill="#3a2a1f" />
                <circle cx="50" cy="38" r="18" fill="rgba(180,200,230,0.4)" />
                <circle cx="44" cy="36" r="3" fill="#ffd166" />
                <circle cx="56" cy="36" r="3" fill="#ffd166" />
              </svg>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg,#1a3a2a,#0a1810)',
                border: '1px solid #222',
                position: 'relative',
              }}
            >
              <svg viewBox="0 0 100 70" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
                <rect width="100" height="70" fill="#1a3a2a" />
                <ellipse cx="55" cy="40" rx="20" ry="14" fill="#c89060" />
                <circle cx="48" cy="36" r="3" fill="#5fa564" />
                <circle cx="60" cy="36" r="3" fill="#5fa564" />
                <ellipse cx="75" cy="20" rx="12" ry="6" fill="#fff" />
                <text x="71" y="22" fontSize="5" fill="#000">喵?</text>
              </svg>
            </div>
            <div
              style={{
                gridColumn: 'span 2',
                background: 'linear-gradient(135deg,#5a3a2a,#1a0f08)',
                border: '1px solid #222',
                position: 'relative',
              }}
            >
              <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
                <rect width="100" height="50" fill="#5a3a2a" />
                <circle cx="68" cy="28" r="14" fill="rgba(180,200,230,0.5)" />
                <ellipse cx="38" cy="34" rx="14" ry="10" fill="#c89060" />
                <rect x="6" y="4" width="44" height="14" rx="2" fill="#fff" />
                <text x="9" y="13" fontSize="5" fill="#000">不明高智慧實體, 請停止…</text>
              </svg>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ border: '1px solid var(--bone-line)', padding: '14px 16px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                letterSpacing: '0.25em',
                color: 'var(--color-bone-3)',
                marginBottom: 8,
              }}
            >
              專案詳情
            </div>
            <div
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 14,
                color: 'var(--color-bone)',
                lineHeight: 1.4,
                marginBottom: 14,
              }}
            >
              宇宙流浪指南：<br />關於生命體 7-11 號的觀察日誌
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                ['角色', '2'],
                ['場景', '5'],
                ['分鏡', '17'],
                ['頁數', '6'],
              ].map(([l, v], i) => (
                <div key={i}>
                  <div style={{ fontSize: 9, color: 'var(--color-bone-3)', letterSpacing: '0.1em', marginBottom: 2 }}>
                    {l}
                  </div>
                  <div style={{ fontFamily: 'var(--font-headline)', fontSize: 22, color: 'var(--color-bone)', lineHeight: 1 }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              border: '1px solid var(--color-cinnabar)',
              padding: '14px 16px',
              background: 'rgba(255,90,31,0.06)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                letterSpacing: '0.25em',
                color: 'var(--color-cinnabar)',
                marginBottom: 8,
              }}
            >
              分享與發布
            </div>
            <div style={{ fontSize: 11, color: 'var(--color-bone-2)', lineHeight: 1.5, marginBottom: 12 }}>
              發布後可獲得專屬連結，讓讀者一頁頁翻完你的作品。
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 12px',
                background: 'var(--color-cinnabar)',
                color: 'var(--color-bone)',
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 600, flex: 1 }}>發布到社區</span>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderTop: '1.5px solid currentColor',
                  borderRight: '1.5px solid currentColor',
                  transform: 'rotate(45deg)',
                  display: 'inline-block',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
