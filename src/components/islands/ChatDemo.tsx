import { useEffect, useState, useRef } from 'react';

interface Props {
  welcome1: string;
  welcome2: string;
  welcome3: string;
  placeholder: string;
  send: string;
  perceptionLabel: string;
  signals: string[];
}

type Msg = { from: 'vh' | 'user'; text: string };

const REPLIES = [
  '我會記得你說的這些。下次見面時，我們可以接著這裡聊。',
  '聽起來很有意思──能多告訴我一點嗎？',
  '收到。我把這個記在「你的偏好」裡了。',
  '這讓我想起上次有人提過的事，要看看嗎？',
];

/**
 * Virtual-human chat demo island. Mock replies only — no real LLM.
 * Animates typing indicator and a perception-feed ticker.
 */
export default function ChatDemo({
  welcome1,
  welcome2,
  welcome3,
  placeholder,
  send,
  perceptionLabel,
  signals,
}: Props) {
  const [messages, setMessages] = useState<Msg[]>([
    { from: 'vh', text: welcome1 },
    { from: 'user', text: welcome2 },
    { from: 'vh', text: welcome3 },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((m) => [...m, { from: 'user', text: userMsg }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
      setMessages((m) => [...m, { from: 'vh', text: reply }]);
      setTyping(false);
    }, 900);
  };

  // Perception feed ticker
  const [tickIdx, setTickIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTickIdx((i) => i + 1), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        background: 'var(--color-ink-2)',
        border: '1px solid var(--bone-line)',
        overflow: 'hidden',
        boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
      }}
    >
      {/* Status bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          borderBottom: '1px solid var(--bone-line)',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.18em',
          color: 'var(--color-bone-3)',
        }}
      >
        <span>● LIVE · MIYAKI · v0.4.2</span>
        <span>SESSION 0x4F3A</span>
      </div>

      {/* Avatar + perception */}
      <div
        className="mx-vh-perception"
        style={{
          display: 'flex',
          gap: 0,
          borderBottom: '1px solid var(--bone-line)',
        }}
      >
        <div
          className="mx-vh-avatar"
          style={{
            width: 200,
            height: 240,
            background: 'linear-gradient(180deg, #1b2840, var(--color-ink-2))',
            position: 'relative',
            borderRight: '1px solid var(--bone-line)',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/miyaki-full.webp"
            alt=""
            style={{
              position: 'absolute',
              left: '50%',
              bottom: -20,
              transform: 'translateX(-50%)',
              height: '110%',
              objectFit: 'contain',
            }}
          />
          {[
            { top: 30, left: 60 },
            { top: 30, right: 60 },
            { bottom: 30, left: 60 },
            { bottom: 30, right: 60 },
          ].map((p, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                ...p,
                width: 10,
                height: 10,
                borderTop: i < 2 ? '1.5px solid var(--color-cinnabar)' : 'none',
                borderBottom: i >= 2 ? '1.5px solid var(--color-cinnabar)' : 'none',
                borderLeft: i === 0 || i === 2 ? '1.5px solid var(--color-cinnabar)' : 'none',
                borderRight: i === 1 || i === 3 ? '1.5px solid var(--color-cinnabar)' : 'none',
              }}
            />
          ))}
        </div>
        <div style={{ flex: 1, padding: '20px 24px' }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.25em',
              color: 'var(--color-cinnabar)',
              marginBottom: 16,
            }}
          >
            {perceptionLabel}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {signals.slice(0, 6).map((s, i) => {
              const active = i === tickIdx % 6;
              return (
                <div
                  key={i}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: active ? 'var(--color-bone)' : 'var(--color-bone-3)',
                    letterSpacing: '0.05em',
                    transition: 'color .3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: active
                        ? 'var(--color-cinnabar)'
                        : 'var(--bone-line)',
                      boxShadow: active ? '0 0 8px var(--color-cinnabar)' : 'none',
                      transition: 'all .3s',
                    }}
                  />
                  {s}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chat */}
      <div
        ref={chatRef}
        style={{
          padding: 20,
          height: 220,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '78%',
              padding: '10px 14px',
              background: m.from === 'user' ? 'var(--color-cinnabar)' : 'var(--color-ink-3)',
              color: m.from === 'user' ? 'var(--color-ink)' : 'var(--color-bone)',
              border: m.from === 'user' ? 'none' : '1px solid var(--bone-line)',
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            {m.text}
          </div>
        ))}
        {typing && (
          <div
            style={{
              alignSelf: 'flex-start',
              padding: '10px 14px',
              background: 'var(--color-ink-3)',
              border: '1px solid var(--bone-line)',
              display: 'flex',
              gap: 4,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--color-bone-3)',
                  animation: `chatPulse 1.2s ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ display: 'flex', borderTop: '1px solid var(--bone-line)' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
          placeholder={placeholder}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--color-bone)',
            padding: '16px 20px',
            fontSize: 14,
            fontFamily: 'var(--font-body)',
          }}
        />
        <button
          onClick={handleSend}
          style={{
            background: 'var(--color-cinnabar)',
            color: 'var(--color-ink)',
            border: 'none',
            padding: '0 28px',
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {send}
        </button>
      </div>

      <style>{`
        @keyframes chatPulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-2px); }
        }
      `}</style>
    </div>
  );
}
