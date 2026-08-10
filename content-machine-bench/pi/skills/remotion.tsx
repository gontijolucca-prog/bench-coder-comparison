import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

type Props = {};

/* ----------------------------- design tokens ----------------------------- */
const BG = "#1a1a1a";
const ACCENT = "#d4773b";
const FG = "#ffffff";
const MUTED = "#8a8a8a";

/* ------------------------------ primitives ------------------------------ */

const Screen: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{
      background: BG,
      color: FG,
      fontFamily:
        '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontFeatureSettings: '"tnum" 1',
      overflow: "hidden",
    }}
  >
    {children}
  </AbsoluteFill>
);

const Grid: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
      WebkitMaskImage:
        "radial-gradient(closest-side at 50% 50%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(closest-side at 50% 50%, #000 60%, transparent 100%)",
      pointerEvents: "none",
    }}
  />
);

const Corner: React.FC<{ pos: "tl" | "tr" | "bl" | "br" }> = ({ pos }) => {
  const map: Record<string, React.CSSProperties> = {
    tl: { top: 38, left: 38, borderTop: `2px solid ${ACCENT}`, borderLeft: `2px solid ${ACCENT}` },
    tr: { top: 38, right: 38, borderTop: `2px solid ${ACCENT}`, borderRight: `2px solid ${ACCENT}` },
    bl: { bottom: 38, left: 38, borderBottom: `2px solid ${ACCENT}`, borderLeft: `2px solid ${ACCENT}` },
    br: { bottom: 38, right: 38, borderBottom: `2px solid ${ACCENT}`, borderRight: `2px solid ${ACCENT}` },
  };
  return (
    <div
      style={{
        position: "absolute",
        width: 36,
        height: 36,
        ...map[pos],
      }}
    />
  );
};

const Header: React.FC<{ frame: number }> = ({ frame }) => {
  const opa = interpolate(frame, [0, 8], [0, 1], { extrapolateRight: "clamp" });
  const ty = interpolate(frame, [0, 8], [-20, 0], { extrapolateRight: "clamp" });
  return (
    <div
      style={{
        position: "absolute",
        top: 80,
        left: 100,
        right: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: opa,
        transform: `translateY(${ty}px)`,
        zIndex: 5,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 40,
            height: 40,
            background: ACCENT,
            borderRadius: 6,
            boxShadow: "0 0 0 4px rgba(212,119,59,0.18)",
          }}
        />
        <div style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-0.02em" }}>
          TECHBODY
        </div>
      </div>
      <div
        style={{
          fontSize: 18,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: MUTED,
          fontWeight: 500,
        }}
      >
        EMS · 6 factos
      </div>
    </div>
  );
};

const Footer: React.FC<{ frame: number; totalFrames: number; sceneLabel: string }> = ({
  frame,
  totalFrames,
  sceneLabel,
}) => {
  const pct = Math.min(100, Math.max(0, (frame / totalFrames) * 100));
  const sec = Math.floor(frame / 30);
  const totalSec = Math.floor(totalFrames / 30);
  const pad = (n: number) => String(Math.floor(n)).padStart(2, "0");
  return (
    <div
      style={{
        position: "absolute",
        left: 100,
        right: 100,
        bottom: 80,
        zIndex: 5,
      }}
    >
      <div
        style={{
          height: 4,
          background: "rgba(255,255,255,0.10)",
          borderRadius: 999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: ACCENT,
            boxShadow: "0 0 16px rgba(212,119,59,0.65)",
            borderRadius: 999,
          }}
        />
      </div>
      <div
        style={{
          marginTop: 18,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 16,
          color: MUTED,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: ACCENT,
            }}
          />
          techbody.pt
        </span>
        <span>{sceneLabel}</span>
        <span className="mono" style={{ fontVariantNumeric: "tabular-nums" }}>
          00:{pad(sec)} / 00:{pad(totalSec)}
        </span>
      </div>
    </div>
  );
};

const SlideNumber: React.FC<{ index: number; total: number; frame: number }> = ({
  index,
  total,
  frame,
}) => {
  const opa = interpolate(frame, [0, 6], [0, 1], { extrapolateRight: "clamp" });
  return (
    <div
      style={{
        position: "absolute",
        top: 80,
        right: 100,
        opacity: opa,
        zIndex: 4,
      }}
    >
      <div
        style={{
          fontFamily:
            '"JetBrains Mono", ui-monospace, monospace',
          fontVariantNumeric: "tabular-nums",
          fontSize: 24,
          color: ACCENT,
          fontWeight: 700,
          letterSpacing: "0.04em",
        }}
      >
        {String(index).padStart(2, "0")}
        <span style={{ color: MUTED, fontWeight: 500 }}> / {String(total).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

/* -------------------------------- scenes -------------------------------- */

/* Scene 1 — Hook: "25 minutos mudam o treino"  (frames 0..149) */
const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();

  const line1 = interpolate(frame, [6, 26], [0, 1], { extrapolateRight: "clamp" });
  const line2 = interpolate(frame, [22, 42], [0, 1], { extrapolateRight: "clamp" });
  const tag = interpolate(frame, [4, 14], [0, 1], { extrapolateRight: "clamp" });
  const sub = interpolate(frame, [70, 90], [0, 1], { extrapolateRight: "clamp" });

  const num = interpolate(frame, [40, 70], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <Screen>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.36em",
            color: ACCENT,
            textTransform: "uppercase",
            fontWeight: 600,
            opacity: tag,
          }}
        >
          Electroestimulação
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 24, opacity: num }}>
          <span
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontVariantNumeric: "tabular-nums",
              fontSize: 280,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              color: ACCENT,
              lineHeight: 1,
            }}
          >
            25
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: FG,
              letterSpacing: "-0.03em",
            }}
          >
            minutos
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: FG,
              opacity: line1,
              transform: `translateY(${(1 - line1) * 24}px)`,
            }}
          >
            Mudam o treino.
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: MUTED,
              opacity: line2,
              transform: `translateY(${(1 - line2) * 20}px)`,
            }}
          >
            E o corpo reconhece.
          </div>
        </div>

        <div
          style={{
            marginTop: 60,
            fontSize: 18,
            color: MUTED,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: sub,
          }}
        >
          Facto 01 · Duração
        </div>
      </div>
    </Screen>
  );
};

/* Scene 2 — Recruitment bars  (frames 150..299) */
const Scene2Bars: React.FC = () => {
  const frame = useCurrentFrame();
  const rel = frame; // local 0..149

  const title1 = interpolate(rel, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const row1 = interpolate(rel, [20, 38], [0, 1], { extrapolateRight: "clamp" });
  const row2 = interpolate(rel, [30, 48], [0, 1], { extrapolateRight: "clamp" });
  const fillTrad = interpolate(rel, [38, 70], [0, 35], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const fillEms = interpolate(rel, [48, 88], [0, 88], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const val1 = interpolate(rel, [60, 78], [0, 1], { extrapolateRight: "clamp" });
  const val2 = interpolate(rel, [80, 98], [0, 1], { extrapolateRight: "clamp" });
  const cap = interpolate(rel, [110, 130], [0, 1], { extrapolateRight: "clamp" });

  return (
    <Screen>
      <div
        style={{
          position: "absolute",
          left: 100,
          right: 100,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            opacity: title1,
            transform: `translateY(${(1 - title1) * 20}px)`,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.36em",
              color: ACCENT,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Recrutamento muscular
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: FG,
              lineHeight: 1.1,
            }}
          >
            EMS activa mais fibras,
            <br />
            em menos tempo.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr 200px",
              alignItems: "center",
              gap: 28,
              opacity: row1,
              transform: `translateX(${(1 - row1) * -28}px)`,
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 600, color: FG }}>
              Treino tradicional
            </div>
            <div
              style={{
                position: "relative",
                height: 18,
                background: "rgba(255,255,255,0.07)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0 auto 0 0",
                  width: `${fillTrad}%`,
                  background: MUTED,
                  borderRadius: 999,
                }}
              />
            </div>
            <div
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontVariantNumeric: "tabular-nums",
                fontSize: 30,
                fontWeight: 700,
                color: FG,
                textAlign: "right",
                opacity: val1,
              }}
            >
              30–40%
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr 200px",
              alignItems: "center",
              gap: 28,
              opacity: row2,
              transform: `translateX(${(1 - row2) * -28}px)`,
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 600, color: FG }}>
              Treino com EMS
            </div>
            <div
              style={{
                position: "relative",
                height: 18,
                background: "rgba(255,255,255,0.07)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0 auto 0 0",
                  width: `${fillEms}%`,
                  background: `linear-gradient(90deg, ${ACCENT}, #f59e62)`,
                  borderRadius: 999,
                  boxShadow: "0 0 28px rgba(212,119,59,0.45)",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontVariantNumeric: "tabular-nums",
                fontSize: 30,
                fontWeight: 700,
                color: ACCENT,
                textAlign: "right",
                opacity: val2,
              }}
            >
              85–90%
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: 22,
            color: MUTED,
            letterSpacing: "0.04em",
            opacity: cap,
            transform: `translateY(${(1 - cap) * 16}px)`,
          }}
        >
          Fibras musculares activadas numa sessão típica.
        </div>
      </div>
    </Screen>
  );
};

/* Scene 3 — Frequency: 20–25 min · 1–3x/semana  (frames 300..449) */
const Scene3Frequency: React.FC = () => {
  const frame = useCurrentFrame();
  const rel = frame;

  const t1 = interpolate(rel, [4, 22], [0, 1], { extrapolateRight: "clamp" });
  const card1 = interpolate(rel, [24, 50], [0, 1], { extrapolateRight: "clamp" });
  const card2 = interpolate(rel, [40, 66], [0, 1], { extrapolateRight: "clamp" });

  const num1 = interpolate(rel, [50, 86], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const num2 = interpolate(rel, [70, 106], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <Screen>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 64,
        }}
      >
        <div
          style={{
            textAlign: "center",
            opacity: t1,
            transform: `translateY(${(1 - t1) * 20}px)`,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.36em",
              color: ACCENT,
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            Frequência
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: FG,
            }}
          >
            Curto. Eficiente. Sustentável.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            width: 1280,
          }}
        >
          <div
            style={{
              padding: "56px 56px",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 18,
              background: "rgba(255,255,255,0.02)",
              opacity: card1,
              transform: `translateY(${(1 - card1) * 28}px)`,
            }}
          >
            <div
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontVariantNumeric: "tabular-nums",
                fontSize: 140,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: ACCENT,
                lineHeight: 1,
                opacity: num1,
              }}
            >
              20–25
              <span style={{ fontSize: 56, color: FG, marginLeft: 12, fontWeight: 700 }}>
                min
              </span>
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 22,
                color: MUTED,
                letterSpacing: "0.04em",
              }}
            >
              Duração de cada sessão.
            </div>
          </div>

          <div
            style={{
              padding: "56px 56px",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 18,
              background: "rgba(255,255,255,0.02)",
              opacity: card2,
              transform: `translateY(${(1 - card2) * 28}px)`,
            }}
          >
            <div
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontVariantNumeric: "tabular-nums",
                fontSize: 140,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: ACCENT,
                lineHeight: 1,
                opacity: num2,
              }}
            >
              1–3
              <span style={{ fontSize: 56, color: FG, marginLeft: 12, fontWeight: 700 }}>
                × / semana
              </span>
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 22,
                color: MUTED,
                letterSpacing: "0.04em",
              }}
            >
              Frequência recomendada.
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

/* Scene 4 — Baixo impacto · certificado alemão  (frames 450..599) */
const Scene4Safe: React.FC = () => {
  const frame = useCurrentFrame();
  const rel = frame;

  const head = interpolate(rel, [4, 22], [0, 1], { extrapolateRight: "clamp" });
  const colA = interpolate(rel, [24, 50], [0, 1], { extrapolateRight: "clamp" });
  const colB = interpolate(rel, [40, 66], [0, 1], { extrapolateRight: "clamp" });

  return (
    <Screen>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 60,
        }}
      >
        <div
          style={{
            textAlign: "center",
            opacity: head,
            transform: `translateY(${(1 - head) * 20}px)`,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.36em",
              color: ACCENT,
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            Segurança
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: FG,
              lineHeight: 1.1,
            }}
          >
            Baixo impacto articular.
            <br />
            <span style={{ color: ACCENT }}>Equipamento certificado.</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, width: 1280 }}>
          <div
            style={{
              padding: "44px 48px",
              borderLeft: `4px solid ${ACCENT}`,
              opacity: colA,
              transform: `translateX(${(1 - colA) * -24}px)`,
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: FG,
                letterSpacing: "-0.01em",
                marginBottom: 14,
              }}
            >
              Sem carga axial
            </div>
            <div style={{ fontSize: 22, color: MUTED, lineHeight: 1.45 }}>
              Os impulsos eléctricos activam o músculo sem peso sobre as articulações.
            </div>
          </div>

          <div
            style={{
              padding: "44px 48px",
              borderLeft: `4px solid ${ACCENT}`,
              opacity: colB,
              transform: `translateX(${(1 - colB) * -24}px)`,
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: FG,
                letterSpacing: "-0.01em",
                marginBottom: 14,
              }}
            >
              Dispositivo médico
            </div>
            <div style={{ fontSize: 22, color: MUTED, lineHeight: 1.45 }}>
              Tecnologia alemã com certificação médica europeia.
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

/* Scene 5 — Corpo inteiro  (frames 600..749) */
const Scene5FullBody: React.FC = () => {
  const frame = useCurrentFrame();
  const rel = frame;

  const tag = interpolate(rel, [4, 18], [0, 1], { extrapolateRight: "clamp" });
  const title = interpolate(rel, [16, 38], [0, 1], { extrapolateRight: "clamp" });
  const groups = ["Peito · Costas", "Bíceps · Tríceps", "Abdómen · Core", "Glúteos · Pernas"];
  return (
    <Screen>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 50,
        }}
      >
        <div
          style={{
            textAlign: "center",
            opacity: tag,
            transform: `translateY(${(1 - tag) * 16}px)`,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.36em",
              color: ACCENT,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Sessão completa
          </div>
        </div>

        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: FG,
            lineHeight: 1,
            opacity: title,
            transform: `translateY(${(1 - title) * 30}px) scale(${0.94 + title * 0.06})`,
            textAlign: "center",
          }}
        >
          Corpo <span style={{ color: ACCENT }}>inteiro</span>.
          <br />
          Um único gesto.
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            marginTop: 20,
          }}
        >
          {groups.map((g, i) => {
            const delay = 30 + i * 8;
            const op = interpolate(rel, [delay, delay + 18], [0, 1], { extrapolateRight: "clamp" });
            const ty = interpolate(rel, [delay, delay + 18], [20, 0], { extrapolateRight: "clamp" });
            return (
              <div
                key={g}
                style={{
                  padding: "24px 28px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.03)",
                  opacity: op,
                  transform: `translateY(${ty}px)`,
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color: FG,
                }}
              >
                {g}
              </div>
            );
          })}
        </div>
      </div>
    </Screen>
  );
};

/* Scene 6 — CTA  (frames 750..899) */
const Scene6CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const rel = frame;
  const { fps } = useVideoConfig();

  const pulse = spring({
    frame: rel,
    fps,
    config: { damping: 14, stiffness: 80, mass: 0.6 },
  });

  const t1 = interpolate(rel, [4, 22], [0, 1], { extrapolateRight: "clamp" });
  const t2 = interpolate(rel, [22, 42], [0, 1], { extrapolateRight: "clamp" });
  const btn = interpolate(rel, [44, 70], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const sub = interpolate(rel, [80, 100], [0, 1], { extrapolateRight: "clamp" });

  return (
    <Screen>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.36em",
            color: ACCENT,
            textTransform: "uppercase",
            fontWeight: 600,
            opacity: t1,
            transform: `translateY(${(1 - t1) * 14}px)`,
          }}
        >
          Próximo passo
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: FG,
            lineHeight: 1.05,
            textAlign: "center",
            opacity: t2,
            transform: `translateY(${(1 - t2) * 26}px)`,
          }}
        >
          Marca a tua
          <br />
          <span style={{ color: ACCENT }}>sessão experimental</span>.
        </div>

        <div
          style={{
            marginTop: 30,
            padding: "26px 56px",
            background: ACCENT,
            color: BG,
            fontWeight: 800,
            fontSize: 26,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            borderRadius: 12,
            transform: `scale(${0.92 + btn * 0.08 + pulse * 0.02})`,
            opacity: btn,
            boxShadow: "0 18px 60px rgba(212,119,59,0.35)",
          }}
        >
          techbody.pt
        </div>

        <div
          style={{
            marginTop: 18,
            fontSize: 18,
            color: MUTED,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            opacity: sub,
          }}
        >
          Estúdio · Electroestimulação
        </div>
      </div>
    </Screen>
  );
};

/* ------------------------------- composition ------------------------------- */

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {
    durationInFrames: 30 * 30, // 30s @ 30fps
  };
};

export const MyComposition = () => {
  return (
    <>
      <Composition
        id="TechBodyEMS"
        component={TechBodyEMSVideo}
        durationInFrames={30 * 30}
        fps={30}
        width={1080}
        height={1920}
        calculateMetadata={calculateMetadata}
      />
    </>
  );
};

const TechBodyEMSVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // 30s = 900 frames total. 6 scenes x 5s = 150 frames each.
  const sceneLen = 150;
  const sceneIdx = Math.min(5, Math.floor(frame / sceneLen));
  const sceneLabels = [
    "Facto 01 · Duração",
    "Facto 02 · Recrutamento",
    "Facto 03 · Frequência",
    "Facto 04 · Segurança",
    "Facto 05 · Corpo inteiro",
    "Facto 06 · Próximo passo",
  ];

  return (
    <AbsoluteFill>
      <Grid />
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />
      <Header frame={frame} />
      <SlideNumber index={sceneIdx + 1} total={6} frame={frame} />
      <Footer frame={frame} totalFrames={durationInFrames} sceneLabel={sceneLabels[sceneIdx]} />

      {sceneIdx === 0 && <Scene1Hook />}
      {sceneIdx === 1 && <Scene2Bars />}
      {sceneIdx === 2 && <Scene3Frequency />}
      {sceneIdx === 3 && <Scene4Safe />}
      {sceneIdx === 4 && <Scene5FullBody />}
      {sceneIdx === 5 && <Scene6CTA />}
    </AbsoluteFill>
  );
};