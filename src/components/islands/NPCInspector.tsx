import { useState } from 'react';

interface Npc {
  name: string;
  state: string;
  mood: string;
}

interface Props {
  npcs: [Npc, Npc, Npc];
  memories: [string, string, string];
}

/**
 * NPC Inspector demo — clickable map dots switch the active NPC,
 * which updates the detail card, behavior tree, and memory feed.
 */
export default function NPCInspector({ npcs, memories }: Props) {
  const [activeNpc, setActiveNpc] = useState(1);

  const dots = [
    { x: '20%', y: '40%' },
    { x: '52%', y: '60%' },
    { x: '78%', y: '30%' },
  ];

  const tree = [
    { l: 'PERCEIVE', a: true },
    { l: 'EVALUATE_GOALS', a: true },
    { l: 'GENERATE_DIALOGUE', a: activeNpc === 1 },
    { l: 'COMBAT_PHASE', a: activeNpc === 2 },
  ];

  return (
    <div
      style={{
        background: 'var(--color-ink-2)',
        border: '1px solid var(--bone-line)',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          padding: '14px 20px',
          borderBottom: '1px solid var(--bone-line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.18em',
          color: 'var(--color-bone-3)',
        }}
      >
        <span>NPC INSPECTOR · scene_03_market.world</span>
        <span style={{ color: 'var(--color-cinnabar)' }}>● RUNTIME 4.2ms</span>
      </div>

      {/* Map preview */}
      <div
        style={{
          position: 'relative',
          height: 220,
          background: 'linear-gradient(135deg, #1b2840 0%, #0e0b08 100%)',
          borderBottom: '1px solid var(--bone-line)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(244,236,220,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244,236,220,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {dots.map((n, i) => (
          <div
            key={i}
            onClick={() => setActiveNpc(i)}
            style={{
              position: 'absolute',
              left: n.x,
              top: n.y,
              transform: 'translate(-50%,-50%)',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: activeNpc === i ? 14 : 10,
                height: activeNpc === i ? 14 : 10,
                borderRadius: '50%',
                background: activeNpc === i ? 'var(--color-cinnabar)' : 'var(--color-bone-2)',
                boxShadow: activeNpc === i ? '0 0 16px var(--color-cinnabar)' : 'none',
                transition: 'all .3s',
              }}
            />
            {activeNpc === i && (
              <>
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: 60,
                    height: 60,
                    marginLeft: -30,
                    marginTop: -30,
                    border: '1px solid var(--color-cinnabar)',
                    borderRadius: '50%',
                    opacity: 0.5,
                    animation: 'npcPing 1.6s ease-out infinite',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: 18,
                    top: -4,
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    color: 'var(--color-bone)',
                    background: 'var(--color-ink)',
                    padding: '2px 6px',
                    border: '1px solid var(--color-cinnabar)',
                  }}
                >
                  {npcs[i].name}
                </div>
              </>
            )}
          </div>
        ))}

        {/* Player marker */}
        <div
          style={{
            position: 'absolute',
            left: '45%',
            top: '70%',
            transform: 'translate(-50%,-50%)',
            width: 12,
            height: 12,
            background: 'var(--color-bone)',
            border: '2px solid var(--color-ink)',
            clipPath: 'polygon(50% 0, 100% 100%, 50% 75%, 0 100%)',
          }}
        />
      </div>

      {/* NPC detail */}
      <div
        className="mx-game-detail grid"
        style={{ gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--bone-line)' }}
      >
        <div style={{ padding: 24, borderRight: '1px solid var(--bone-line)' }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.25em',
              color: 'var(--color-cinnabar)',
              marginBottom: 10,
            }}
          >
            ● SELECTED
          </div>
          <h4
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 22,
              fontWeight: 400,
              color: 'var(--color-bone)',
              margin: '0 0 8px',
            }}
          >
            {npcs[activeNpc].name}
          </h4>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-bone-2)', marginBottom: 4 }}>
            STATE · {npcs[activeNpc].state}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-bone-2)' }}>
            MOOD · {npcs[activeNpc].mood}
          </div>
        </div>
        <div style={{ padding: 24 }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.25em',
              color: 'var(--color-bone-3)',
              marginBottom: 14,
            }}
          >
            BEHAVIOR TREE
          </div>
          {tree.map((b, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: b.a ? 'var(--color-bone)' : 'var(--color-bone-3)',
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: b.a ? 'var(--color-cinnabar)' : 'var(--bone-line)',
                }}
              />
              {b.l}
            </div>
          ))}
        </div>
      </div>

      {/* Memory feed */}
      <div style={{ padding: '20px 24px' }}>
        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.25em',
            color: 'var(--color-bone-3)',
            marginBottom: 12,
          }}
        >
          MEMORY · LAST 3 EVENTS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {memories.map((m, i) => (
            <div
              key={i}
              style={{
                fontSize: 12,
                color: 'var(--color-bone-2)',
                fontFamily: 'var(--font-serif-tc)',
                fontStyle: 'italic',
                paddingLeft: 14,
                borderLeft: '1px solid var(--color-cinnabar)',
              }}
            >
              "{m}"
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes npcPing {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
