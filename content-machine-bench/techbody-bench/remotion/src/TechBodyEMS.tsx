import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  Sequence,
} from "remotion";

const COLORS = {
  bg: "#1a1a1a",
  bgDeep: "#0f0f0f",
  accent: "#d4773b",
  accentDim: "rgba(212,119,59,0.55)",
  white: "#ffffff",
  muted: "rgba(255,255,255,0.6)",
  faint: "rgba(255,255,255,0.18)",
  panel: "#222222",
};

const FPS = 30;

const styles: Record<string, React.CSSProperties> = {
  frame: {
    position: "absolute",
    inset: 48,
    border: `1px solid rgba(255,255,255,0.05)`,
    pointerEvents: "none",
  },
  corner: {
    position: "absolute",
    width: 22,
    height: 22,
    border: `1px solid ${COLORS.accent}`,
  },
  ticker: {
    position: "absolute",
    top: 96,
    right: 96,
    color: "rgba(255,255,255,0.45)",
    fontFamily: "JetBrains Mono, SF Mono, ui-monospace, monospace",
    fontSize: 28,
    letterSpacing: "0.18em",
    fontWeight: 500,
  },
  sceneTag: {
    position: "absolute",
    top: 96,
    left: 96,
    color: COLORS.accent,
    fontSize: 24,
    letterSpacing: "0.32em",
    textTransform: "uppercase",
    fontWeight: 600,
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
  },
  progressBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 4,
    background: "rgba(255,255,255,0.08)",
  },
  progressFill: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    background: COLORS.accent,
  },
};

// Shared chrome that overlays every scene
const Chrome: React.FC<{ scene: number; progress: number }> = ({ scene, progress }) => {
  const cornerPos: Array<React.CSSProperties> = [
    { top: 56, left: 56, borderRight: 0, borderBottom: 0 },
    { top: 56, right: 56, borderLeft: 0, borderBottom: 0 },
    { bottom: 56, left: 56, borderRight: 0, borderTop: 0 },
    { bottom: 56, right: 56, borderLeft: 0, borderTop: 0 },
  ];
  const fmt = (n: number) => n.toString().padStart(2, "0");
  const totalSec = 30;
  const curSec = progress * totalSec;
  const mm = Math.floor(curSec / 60);
  const ss = Math.floor(curSec % 60);
  const cc = Math.floor((curSec - Math.floor(curSec)) * 100);

  return (
    <>
      <div style={styles.frame} />
      {cornerPos.map((p, i) => (
        <span key={i} style={{ ...styles.corner, ...p }} />
      ))}
      <div style={styles.sceneTag}>TechBody · {fmt(scene)} / 06</div>
      <div style={styles.ticker}>
        {fmt(mm)}:{fmt(ss)}:{fmt(cc)} / 00:30:00
      </div>
      <div style={styles.progressBar}>
        <div
          style={{
            ...styles.progressFill,
            width: `${progress * 100}%`,
          }}
        />
      </div>
    </>
  );
};

// Scene 1: Hook — "25 minutos mudam o treino"
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 30, 130, 150], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const rise = interpolate(frame, [0, 30], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const numScale = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 80, mass: 1 },
  });
  const numOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 96px",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${rise}px)`,
          textAlign: "center",
          color: COLORS.white,
          fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 540,
            fontWeight: 200,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            color: COLORS.white,
            fontFamily: "JetBrains Mono, SF Mono, ui-monospace, monospace",
            transform: `scale(${numScale})`,
            opacity: numOpacity,
          }}
        >
          25
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: 24,
          }}
        >
          minutos mudam
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: COLORS.accent,
            marginTop: 4,
          }}
        >
          o treino
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2: 30-40% vs 85-90% numbers
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const convWidth = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: { damping: 20, stiffness: 60 },
  });
  const emsWidth = spring({
    frame: Math.max(0, frame - 50),
    fps,
    config: { damping: 18, stiffness: 50 },
  });

  const convBarWidth = interpolate(convWidth, [0, 1], [0, 35]);
  const emsBarWidth = interpolate(emsWidth, [0, 1], [0, 87]);

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        padding: "0 96px",
        justifyContent: "center",
        fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
      }}
    >
      <div
        style={{
          color: COLORS.accent,
          fontSize: 28,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: 96,
        }}
      >
        Recrutamento muscular
      </div>

      <div
        style={{
          color: COLORS.muted,
          fontSize: 36,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 500,
          marginBottom: 24,
        }}
      >
        Treino convencional
      </div>
      <div
        style={{
          fontSize: 220,
          fontWeight: 200,
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "JetBrains Mono, SF Mono, ui-monospace, monospace",
          marginBottom: 16,
        }}
      >
        30&ndash;40<span style={{ fontSize: 96, color: "rgba(255,255,255,0.35)" }}>%</span>
      </div>
      <div
        style={{
          position: "relative",
          height: 18,
          background: "rgba(255,255,255,0.06)",
          marginBottom: 96,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: `${convBarWidth}%`,
            background: "linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0.35))",
          }}
        />
      </div>

      <div
        style={{
          color: COLORS.white,
          fontSize: 36,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: 24,
        }}
      >
        EMS
      </div>
      <div
        style={{
          fontSize: 280,
          fontWeight: 200,
          letterSpacing: "-0.04em",
          color: COLORS.white,
          fontFamily: "JetBrains Mono, SF Mono, ui-monospace, monospace",
          marginBottom: 16,
          lineHeight: 0.9,
        }}
      >
        85&ndash;90<span style={{ fontSize: 120, color: COLORS.accent }}>%</span>
      </div>
      <div
        style={{
          position: "relative",
          height: 22,
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: `${emsBarWidth}%`,
            background: `linear-gradient(90deg, ${COLORS.accentDim}, ${COLORS.accent} 70%)`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

// Scene 3: 20-25 min, 1-3x por semana
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cards = [
    { num: "20–25", unit: "min", label: "por sessão" },
    { num: "1–3", unit: "×", label: "por semana" },
    { num: "Baixo", unit: "", label: "impacto articular" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        padding: "0 96px",
        justifyContent: "center",
        fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
      }}
    >
      <div
        style={{
          color: COLORS.accent,
          fontSize: 28,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: 80,
        }}
      >
        Frequência e duração
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        {cards.map((c, i) => {
          const s = spring({
            frame: Math.max(0, frame - i * 20),
            fps,
            config: { damping: 16, stiffness: 70, mass: 1 },
          });
          const x = interpolate(s, [0, 1], [80, 0]);
          const op = interpolate(s, [0, 1], [0, 1]);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 24,
                borderLeft: `4px solid ${COLORS.accent}`,
                paddingLeft: 32,
                opacity: op,
                transform: `translateX(${x}px)`,
              }}
            >
              <div
                style={{
                  fontSize: 220,
                  fontWeight: 200,
                  letterSpacing: "-0.04em",
                  color: COLORS.white,
                  fontFamily: "JetBrains Mono, SF Mono, ui-monospace, monospace",
                  lineHeight: 0.9,
                  minWidth: 460,
                }}
              >
                {c.num}
                {c.unit && (
                  <span
                    style={{
                      fontSize: 100,
                      color: COLORS.accent,
                      marginLeft: 6,
                    }}
                  >
                    {c.unit}
                  </span>
                )}
              </div>
              <div
                style={{
                  fontSize: 44,
                  color: COLORS.muted,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  fontWeight: 500,
                }}
              >
                {c.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: Baixo impacto, equipamento certificado alemão
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const big = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 50 },
  });
  const scale = interpolate(big, [0, 1], [0.7, 1]);
  const op = interpolate(frame, [0, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        padding: "0 96px",
        justifyContent: "center",
        fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
      }}
    >
      <div style={{ opacity: op, transform: `scale(${scale})`, textAlign: "left" }}>
        <div
          style={{
            color: COLORS.accent,
            fontSize: 28,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 64,
          }}
        >
          Baixo impacto articular
        </div>
        <div
          style={{
            fontSize: 160,
            fontWeight: 200,
            letterSpacing: "-0.02em",
            color: COLORS.white,
            lineHeight: 1.05,
            marginBottom: 80,
            fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
          }}
        >
          Articulações protegidas.
          <br />
          <span style={{ color: COLORS.accent }}>Resultados visíveis.</span>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            padding: "20px 32px",
            border: `1px solid ${COLORS.accent}`,
            borderRadius: 0,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              background: COLORS.accent,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: 32,
              color: COLORS.white,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Equipamento certificado · Alemanha
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 5: Sessão completa, corpo inteiro
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Body map with 8 zones
  const zones = [
    { label: "Peito", x: 50, y: 25 },
    { label: "Costas", x: 50, y: 35 },
    { label: "Abdómen", x: 50, y: 45 },
    { label: "Glúteos", x: 50, y: 55 },
    { label: "Quadríceps", x: 38, y: 65 },
    { label: "Posteriores", x: 62, y: 65 },
    { label: "Bíceps", x: 28, y: 38 },
    { label: "Tríceps", x: 72, y: 38 },
  ];

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        padding: "0 96px",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
      }}
    >
      <div
        style={{
          color: COLORS.accent,
          fontSize: 28,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          fontWeight: 600,
          alignSelf: "flex-start",
          marginBottom: 80,
        }}
      >
        Corpo inteiro · 1 sessão
      </div>

      {/* Stylized silhouette */}
      <div
        style={{
          position: "relative",
          width: 480,
          height: 1100,
          marginBottom: 40,
        }}
      >
        {/* Head */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: `2px solid rgba(255,255,255,0.35)`,
          }}
        />
        {/* Torso */}
        <div
          style={{
            position: "absolute",
            top: 130,
            left: "50%",
            transform: "translateX(-50%)",
            width: 260,
            height: 380,
            borderRadius: "50% 50% 30% 30%",
            border: `2px solid rgba(255,255,255,0.35)`,
          }}
        />
        {/* Arms */}
        <div
          style={{
            position: "absolute",
            top: 150,
            left: 20,
            width: 80,
            height: 380,
            borderRadius: 40,
            border: `2px solid rgba(255,255,255,0.35)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 150,
            right: 20,
            width: 80,
            height: 380,
            borderRadius: 40,
            border: `2px solid rgba(255,255,255,0.35)`,
          }}
        />
        {/* Legs */}
        <div
          style={{
            position: "absolute",
            top: 510,
            left: 70,
            width: 130,
            height: 540,
            borderRadius: 60,
            border: `2px solid rgba(255,255,255,0.35)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 510,
            right: 70,
            width: 130,
            height: 540,
            borderRadius: 60,
            border: `2px solid rgba(255,255,255,0.35)`,
          }}
        />

        {/* Activation dots */}
        {zones.map((z, i) => {
          const delay = i * 4;
          const s = spring({
            frame: Math.max(0, frame - delay),
            fps,
            config: { damping: 12, stiffness: 180, mass: 0.4 },
          });
          const r = interpolate(s, [0, 1], [0, 16]);
          const op = interpolate(s, [0, 1], [0, 1]);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${z.y}%`,
                left: `${z.x}%`,
                width: r * 2,
                height: r * 2,
                borderRadius: "50%",
                background: COLORS.accent,
                transform: "translate(-50%, -50%)",
                opacity: op,
                boxShadow: `0 0 24px ${COLORS.accent}`,
              }}
            />
          );
        })}
      </div>

      <div
        style={{
          color: COLORS.white,
          fontSize: 56,
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginTop: 32,
          textAlign: "center",
        }}
      >
        Uma sessão. Corpo inteiro.
      </div>
    </AbsoluteFill>
  );
};

// Scene 6: CTA
const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slide = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 80 },
  });
  const x = interpolate(slide, [0, 1], [120, 0]);
  const op = interpolate(slide, [0, 1], [0, 1]);

  const pulse = spring({
    frame: frame % 60,
    fps,
    config: { damping: 8, stiffness: 100 },
  });
  const pulseScale = interpolate(pulse, [0, 1], [1, 1.04]);

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        padding: "0 96px",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, Helvetica Neue, Arial, sans-serif",
      }}
    >
      <div style={{ opacity: op, transform: `translateY(${x}px)`, textAlign: "center" }}>
        <div
          style={{
            color: COLORS.accent,
            fontSize: 28,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 48,
          }}
        >
          Próximo passo
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 600,
            color: COLORS.white,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: 80,
          }}
        >
          Marca a tua
          <br />
          <span style={{ color: COLORS.accent }}>sessão experimental</span>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 28,
            padding: "32px 56px",
            background: COLORS.accent,
            transform: `scale(${pulseScale})`,
            transformOrigin: "center",
          }}
        >
          <span
            style={{
              fontSize: 38,
              color: COLORS.bg,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Agendar agora
          </span>
          <span
            style={{
              fontSize: 38,
              color: COLORS.bg,
              fontWeight: 700,
            }}
          >
            →
          </span>
        </div>
        <div
          style={{
            marginTop: 64,
            fontSize: 28,
            color: COLORS.muted,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: "JetBrains Mono, SF Mono, ui-monospace, monospace",
          }}
        >
          techbody.pt
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const TechBodyEMS: React.FC = () => {
  const frame = useCurrentFrame();
  const total = 30 * FPS;
  const progress = frame / total;

  // Determine current scene (0-5)
  const sceneIdx = Math.min(5, Math.floor(frame / (5 * FPS)));

  return (
    <AbsoluteFill style={{ background: COLORS.bg }}>
      <Sequence from={0} durationInFrames={5 * FPS}>
        <Scene1 />
      </Sequence>
      <Sequence from={5 * FPS} durationInFrames={5 * FPS}>
        <Scene2 />
      </Sequence>
      <Sequence from={10 * FPS} durationInFrames={5 * FPS}>
        <Scene3 />
      </Sequence>
      <Sequence from={15 * FPS} durationInFrames={5 * FPS}>
        <Scene4 />
      </Sequence>
      <Sequence from={20 * FPS} durationInFrames={5 * FPS}>
        <Scene5 />
      </Sequence>
      <Sequence from={25 * FPS} durationInFrames={5 * FPS}>
        <Scene6 />
      </Sequence>

      {/* Cross-scene fade overlay */}
      <AbsoluteFill
        style={{
          background: COLORS.bg,
          opacity: Math.max(0, (frame % (5 * FPS)) / 30 - 0.5) * 0.15,
          pointerEvents: "none",
        }}
      />

      <Chrome scene={sceneIdx + 1} progress={progress} />
    </AbsoluteFill>
  );
};
