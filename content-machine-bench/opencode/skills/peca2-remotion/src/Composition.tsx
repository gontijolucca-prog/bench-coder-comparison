import { CalculateMetadataFunction, Composition, AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Easing } from "remotion";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

const COLOR_BG = "#1a1a1a";
const COLOR_ACCENT = "#d4773b";
const COLOR_TEXT = "#ffffff";
const COLOR_DIM = "rgba(255,255,255,0.55)";
const COLOR_FAINT = "rgba(255,255,255,0.08)";

const TOTAL_DURATION = 30;
const SCENE_DURATION = 5;
const FPS = 30;
const W = 1080;
const H = 1920;

const pad = (n: number) => String(n).padStart(2, "0");
const fmtTime = (s: number) => `${pad(Math.floor(s / 60))}:${pad(Math.floor(s % 60))}`;

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div style={{
      position: "absolute",
      left: 64, right: 64, bottom: 32,
      height: 6,
      background: COLOR_FAINT,
      borderRadius: 999,
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: "0 auto 0 0",
        width: `${Math.min(100, Math.max(0, progress * 100))}%`,
        background: COLOR_ACCENT,
      }} />
    </div>
  );
};

const Meta: React.FC<{ progress: number }> = ({ progress }) => {
  const t = progress * TOTAL_DURATION;
  return (
    <div style={{
      position: "absolute",
      left: 64, right: 64, bottom: 56,
      display: "flex",
      justifyContent: "space-between",
      fontFamily: '"JetBrains Mono", "Courier New", monospace',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: COLOR_DIM,
    }}>
      <span>EMS · Recrutamento Muscular</span>
      <span>{fmtTime(t)} / {fmtTime(TOTAL_DURATION)}</span>
    </div>
  );
};

const Brand: React.FC = () => (
  <div style={{
    position: "absolute",
    top: 64, left: 64,
    display: "flex", alignItems: "center", gap: 14,
  }}>
    <div style={{ width: 16, height: 16, background: COLOR_ACCENT, borderRadius: "50%" }} />
    <div style={{
      fontSize: 26, fontWeight: 800,
      letterSpacing: "0.22em", textTransform: "uppercase",
      color: COLOR_TEXT,
    }}>TechBody</div>
  </div>
);

const SceneChrome: React.FC<{ children: React.ReactNode; progress: number }> = ({ children, progress }) => (
  <AbsoluteFill style={{ background: COLOR_BG, color: COLOR_TEXT, fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif' }}>
    <Brand />
    <Meta progress={progress} />
    <ProgressBar progress={progress} />
    {children}
  </AbsoluteFill>
);

// Scene 1: Hook — "25 minutos mudam o treino"
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const intro = spring({ frame, fps, config: { damping: 18, stiffness: 90, mass: 0.8 } });
  const titleY = interpolate(intro, [0, 1], [40, 0]);
  const sub = interpolate(frame, [40, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  return (
    <div style={{ position: "absolute", left: 80, right: 80, top: 360, textAlign: "left" }}>
      <div style={{
        fontSize: 28, fontWeight: 800,
        letterSpacing: "0.32em", textTransform: "uppercase",
        color: COLOR_ACCENT, marginBottom: 28,
        opacity: intro,
      }}>Sessão EMS</div>
      <div style={{
        fontSize: 128, fontWeight: 800,
        letterSpacing: "-0.03em", lineHeight: 1.0,
        color: COLOR_TEXT, opacity: intro, transform: `translateY(${titleY}px)`,
      }}>
        25 minutos<br/><span style={{ color: COLOR_ACCENT }}>mudam</span> o treino.
      </div>
      <div style={{
        marginTop: 36, fontSize: 36, fontWeight: 600,
        color: COLOR_DIM, maxWidth: 820, lineHeight: 1.3,
        opacity: sub,
      }}>
        A electroestimulação activa fibras que o treino clássico raramente alcança.
      </div>
    </div>
  );
};

// Scene 2: 30-40% vs 85-90% numbers
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const intro = spring({ frame, fps, config: { damping: 18, stiffness: 100, mass: 0.7 } });

  const classicEnd = interpolate(frame, [30, 110], [0, 38], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const emsEnd = interpolate(frame, [50, 130], [0, 88], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const kicker = interpolate(frame, [10, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const Bar = ({ label, num, numColor, pct, value }: { label: string; num: string; numColor: string; pct: number; value: number }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 32, opacity: intro }}>
      <div style={{ width: 280 }}>
        <div style={{ fontSize: 110, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1, color: numColor, marginBottom: 10 }}>{num}</div>
        <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: COLOR_DIM }}>{label}</div>
      </div>
      <div style={{ flex: 1, height: 36, background: COLOR_FAINT, border: `2px solid ${pct > 50 ? COLOR_ACCENT : "rgba(255,255,255,0.12)"}`, borderRadius: 6, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: "0 auto 0 0",
          width: `${value}%`,
          background: pct > 50 ? COLOR_ACCENT : "rgba(255,255,255,0.25)",
          boxShadow: pct > 50 ? "0 0 30px rgba(212,119,59,0.4)" : "none",
        }} />
      </div>
    </div>
  );

  return (
    <div style={{ position: "absolute", left: 80, right: 80, top: 460 }}>
      <div style={{
        fontSize: 28, fontWeight: 800, letterSpacing: "0.32em", textTransform: "uppercase",
        color: COLOR_ACCENT, marginBottom: 36, opacity: kicker,
      }}>Comparação directa</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
        <Bar label="Treino clássico" num="30–40%" numColor="rgba(255,255,255,0.45)" pct={classicEnd} value={classicEnd} />
        <Bar label="Sessão EMS" num="85–90%" numColor={COLOR_ACCENT} pct={emsEnd} value={emsEnd} />
      </div>
    </div>
  );
};

// Scene 3: 20-25 min, 1-3x por semana
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const intro = spring({ frame, fps, config: { damping: 18, stiffness: 110, mass: 0.6 } });

  const Stat = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
    const op = interpolate(frame, [delay, delay + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const y = interpolate(op, [0, 1], [20, 0]);
    return (
      <div style={{ opacity: op, transform: `translateY(${y}px)`, display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
        <div style={{ fontSize: 200, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: COLOR_ACCENT }}>{value}</div>
        <div style={{ marginTop: 24, fontSize: 26, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: COLOR_DIM, textAlign: "center" }}>{label}</div>
      </div>
    );
  };

  return (
    <div style={{ position: "absolute", left: 80, right: 80, top: 560 }}>
      <div style={{
        fontSize: 28, fontWeight: 800, letterSpacing: "0.32em", textTransform: "uppercase",
        color: COLOR_ACCENT, marginBottom: 60, textAlign: "center", opacity: intro,
      }}>Carga semanal</div>
      <div style={{ display: "flex", gap: 40 }}>
        <Stat value="20–25" label="minutos por sessão" delay={20} />
        <Stat value="1–3×" label="por semana" delay={50} />
      </div>
    </div>
  );
};

// Scene 4: Baixo impacto + equipamento certificado alemão
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const intro = spring({ frame, fps, config: { damping: 18, stiffness: 100, mass: 0.7 } });

  const Item = ({ icon, title, sub, delay }: { icon: string; title: string; sub: string; delay: number }) => {
    const op = interpolate(frame, [delay, delay + 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const x = interpolate(op, [0, 1], [-30, 0]);
    return (
      <div style={{
        opacity: op, transform: `translateX(${x}px)`,
        display: "flex", alignItems: "center", gap: 32,
        padding: "40px 36px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
      }}>
        <div style={{
          width: 96, height: 96, borderRadius: 16,
          background: COLOR_ACCENT, color: COLOR_BG,
          display: "grid", placeItems: "center",
          fontSize: 56, fontWeight: 800, flexShrink: 0,
        }}>{icon}</div>
        <div>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 8, color: COLOR_TEXT }}>{title}</div>
          <div style={{ fontSize: 26, fontWeight: 500, color: COLOR_DIM, lineHeight: 1.35 }}>{sub}</div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ position: "absolute", left: 80, right: 80, top: 540 }}>
      <div style={{
        fontSize: 28, fontWeight: 800, letterSpacing: "0.32em", textTransform: "uppercase",
        color: COLOR_ACCENT, marginBottom: 50, opacity: intro,
      }}>Porque funciona</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <Item icon="↓" title="Baixo impacto articular" sub="Sem carga sobre joelhos e coluna." delay={20} />
        <Item icon="DE" title="Equipamento certificado alemão" sub="Normas médicas europeias em vigor." delay={50} />
      </div>
    </div>
  );
};

// Scene 5: Sessão completa — corpo inteiro
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const intro = spring({ frame, fps, config: { damping: 18, stiffness: 90, mass: 0.7 } });

  const bodyZones = [
    { label: "Pernas", top: 0 },
    { label: "Glúteos", top: 200 },
    { label: "Core", top: 400 },
    { label: "Costas", top: 600 },
    { label: "Braços", top: 800 },
    { label: "Peito", top: 1000 },
  ];

  return (
    <div style={{ position: "absolute", left: 80, right: 80, top: 460 }}>
      <div style={{
        fontSize: 28, fontWeight: 800, letterSpacing: "0.32em", textTransform: "uppercase",
        color: COLOR_ACCENT, marginBottom: 36, opacity: intro,
      }}>Corpo inteiro, 25 minutos</div>

      <div style={{ position: "relative", height: 1100, opacity: intro }}>
        {bodyZones.map((z, i) => {
          const op = interpolate(frame, [20 + i * 6, 35 + i * 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={z.label} style={{
              position: "absolute",
              left: 0, right: 0, top: z.top,
              display: "flex", alignItems: "center", gap: 24,
              opacity: op,
            }}>
              <div style={{ width: 18, height: 18, borderRadius: "50%", background: COLOR_ACCENT }} />
              <div style={{ flex: 1, fontSize: 64, fontWeight: 800, letterSpacing: "-0.01em", color: COLOR_TEXT }}>{z.label}</div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 22, fontWeight: 600, color: COLOR_DIM, letterSpacing: "0.1em" }}>0{i + 1}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Scene 6: CTA
const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const intro = spring({ frame, fps, config: { damping: 14, stiffness: 80, mass: 0.9 } });
  const pulse = 1 + Math.sin(frame * 0.18) * 0.02;

  return (
    <AbsoluteFill style={{ display: "grid", placeItems: "center", textAlign: "center" }}>
      <div style={{ opacity: intro, transform: `scale(${pulse})` }}>
        <div style={{
          fontSize: 28, fontWeight: 800, letterSpacing: "0.32em", textTransform: "uppercase",
          color: COLOR_ACCENT, marginBottom: 28,
        }}>TechBody</div>
        <div style={{
          fontSize: 124, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05,
          color: COLOR_TEXT, marginBottom: 56, maxWidth: 900,
        }}>
          Marca a tua<br/><span style={{ color: COLOR_ACCENT }}>sessão experimental.</span>
        </div>
        <div style={{
          display: "inline-block",
          padding: "28px 56px",
          background: COLOR_ACCENT, color: COLOR_BG,
          fontSize: 32, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase",
          borderRadius: 4,
        }}>techbody.pt</div>
      </div>
    </AbsoluteFill>
  );
};

const MyComponent: React.FC<Props> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sceneIdx = Math.min(5, Math.floor(frame / (SCENE_DURATION * fps)));
  const progress = frame / (TOTAL_DURATION * fps);

  let sceneNode: React.ReactNode = null;
  if (sceneIdx === 0) sceneNode = <Scene1 />;
  else if (sceneIdx === 1) sceneNode = <Scene2 />;
  else if (sceneIdx === 2) sceneNode = <Scene3 />;
  else if (sceneIdx === 3) sceneNode = <Scene4 />;
  else if (sceneIdx === 4) sceneNode = <Scene5 />;
  else sceneNode = <Scene6 />;

  return (
    <SceneChrome progress={progress}>
      {sceneNode}
    </SceneChrome>
  );
};

export const MyComposition = () => {
  return (
    <Composition
      id="TechBodyEMS"
      component={MyComponent}
      durationInFrames={TOTAL_DURATION * FPS}
      fps={FPS}
      width={W}
      height={H}
      calculateMetadata={calculateMetadata}
    />
  );
};