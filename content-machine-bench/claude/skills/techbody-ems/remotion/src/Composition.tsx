import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  Easing,
} from "remotion";
import React from "react";

const PALETTE = {
  bg: "#1a1a1a",
  bgDeep: "#0f0f0f",
  accent: "#d4773b",
  text: "#ffffff",
  muted: "rgba(255,255,255,0.55)",
  track: "rgba(255,255,255,0.12)",
};

const FONT_DISPLAY = '"Helvetica Neue", Helvetica, Arial, sans-serif';
const FONT_MONO = '"JetBrains Mono", "SF Mono", Menlo, monospace';

const SceneWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(ellipse 70% 50% at 50% 35%, rgba(212,119,59,0.12), transparent 70%), linear-gradient(180deg, ${PALETTE.bg} 0%, ${PALETTE.bgDeep} 100%)`,
      fontFamily: FONT_DISPLAY,
      color: PALETTE.text,
    }}
  >
    {children}
  </AbsoluteFill>
);

const AccentRule: React.FC<{ width?: number }> = ({ width = 96 }) => (
  <div
    style={{
      width,
      height: 6,
      backgroundColor: PALETTE.accent,
      marginBottom: 56,
    }}
  />
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      fontFamily: FONT_MONO,
      fontSize: 44,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: 8,
      color: PALETTE.accent,
      marginBottom: 48,
    }}
  >
    {children}
  </div>
);

const Footer: React.FC<{ progress: number; timecode: string; total: string }> = ({
  progress,
  timecode,
  total,
}) => {
  void total;
  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        right: 80,
        bottom: 80,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: FONT_MONO,
          fontSize: 28,
          textTransform: "uppercase",
          letterSpacing: 4,
          color: PALETTE.muted,
        }}
      >
        <span
          style={{
            color: PALETTE.text,
            fontWeight: 800,
            letterSpacing: 8,
          }}
        >
          TECHBODY
        </span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>
          {timecode} / 00:30
        </span>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 6,
          backgroundColor: PALETTE.track,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${progress * 100}%`,
            backgroundColor: PALETTE.accent,
          }}
        />
      </div>
    </div>
  );
};

const HookScene: React.FC<{ frame: number }> = ({ frame }) => {
  const fadeIn = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const scaleIn = interpolate(frame, [0, 30], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <SceneWrapper>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 100,
        }}
      >
        <AccentRule />
        <Eyebrow>Electroestimulação</Eyebrow>
        <div
          style={{
            fontSize: 220,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -6,
            opacity: fadeIn,
            transform: `scale(${scaleIn})`,
            maxWidth: 1500,
          }}
        >
          25 minutos
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 200,
            lineHeight: 1.1,
            marginTop: 56,
            opacity: fadeIn,
            maxWidth: 1500,
            color: PALETTE.muted,
          }}
        >
          mudam o treino inteiro.
        </div>
      </AbsoluteFill>
    </SceneWrapper>
  );
};

const NumbersScene: React.FC<{ frame: number }> = ({ frame }) => {
  const convWidth = interpolate(frame, [0, 25], [0, 35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const emsWidth = interpolate(frame, [12, 40], [0, 87], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const labelFade = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneWrapper>
      <AbsoluteFill
        style={{
          justifyContent: "flex-start",
          alignItems: "stretch",
          padding: 100,
        }}
      >
        <AccentRule />
        <Eyebrow>Recrutamento Muscular</Eyebrow>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 64,
            width: "100%",
            marginTop: 80,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                fontSize: 48,
                fontWeight: 200,
                textTransform: "uppercase",
                letterSpacing: 4,
                color: PALETTE.muted,
              }}
            >
              <span style={{ fontWeight: 800, color: PALETTE.text }}>
                Treino clássico
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                30-40%
              </span>
            </div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 36,
                backgroundColor: PALETTE.track,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: `${convWidth}%`,
                  backgroundColor: "rgba(255,255,255,0.35)",
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                fontSize: 48,
                fontWeight: 200,
                textTransform: "uppercase",
                letterSpacing: 4,
                color: PALETTE.muted,
              }}
            >
              <span style={{ fontWeight: 800, color: PALETTE.text }}>
                Electroestimulação
              </span>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontWeight: 800,
                  color: PALETTE.accent,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                85-90%
              </span>
            </div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 36,
                backgroundColor: PALETTE.track,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: `${emsWidth}%`,
                  backgroundColor: PALETTE.accent,
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 120,
            fontSize: 64,
            fontWeight: 200,
            lineHeight: 1.2,
            maxWidth: 1500,
            color: PALETTE.text,
            opacity: labelFade,
          }}
        >
          Electroestimulação recruta até 85-90% das fibras musculares numa única
          sessão.
        </div>
      </AbsoluteFill>
    </SceneWrapper>
  );
};

const CadenceScene: React.FC<{ frame: number }> = ({ frame }) => {
  const fadeIn = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  return (
    <SceneWrapper>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 100,
        }}
      >
        <AccentRule />
        <Eyebrow>Cadência</Eyebrow>
        <div style={{ opacity: fadeIn, display: "flex", flexDirection: "column", gap: 96 }}>
          <div>
            <div
              style={{
                fontFamily: FONT_MONO,
                fontSize: 360,
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: -10,
                color: PALETTE.accent,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              20-25
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 200,
                textTransform: "uppercase",
                letterSpacing: 12,
                color: PALETTE.muted,
                marginTop: 24,
              }}
            >
              minutos por sessão
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 140,
                fontWeight: 800,
                letterSpacing: -2,
                color: PALETTE.text,
              }}
            >
              1 a 3x
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 200,
                textTransform: "uppercase",
                letterSpacing: 12,
                color: PALETTE.muted,
                marginTop: 24,
              }}
            >
              por semana
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </SceneWrapper>
  );
};

const ImpactScene: React.FC<{ frame: number }> = ({ frame }) => {
  const fadeIn = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const slide = interpolate(frame, [0, 35], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  return (
    <SceneWrapper>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "left",
          padding: 100,
        }}
      >
        <AccentRule />
        <Eyebrow>Baixo Impacto</Eyebrow>
        <div
          style={{
            opacity: fadeIn,
            transform: `translateY(${slide}px)`,
            display: "flex",
            flexDirection: "column",
            gap: 64,
          }}
        >
          <div
            style={{
              fontSize: 180,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -4,
              maxWidth: 1500,
            }}
          >
            Baixo impacto articular, equipamento certificado.
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 200,
              lineHeight: 1.2,
              color: PALETTE.muted,
              maxWidth: 1500,
            }}
          >
            Tecnologia médica alemã, validada para uso profissional em estúdio e
            em casa.
          </div>
        </div>
      </AbsoluteFill>
    </SceneWrapper>
  );
};

const FullSessionScene: React.FC<{ frame: number }> = ({ frame }) => {
  const fadeIn = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const strokeLen = interpolate(frame, [10, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  return (
    <SceneWrapper>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 100,
        }}
      >
        <AccentRule />
        <Eyebrow>Sessão Completa</Eyebrow>
        <svg
          viewBox="0 0 600 900"
          width="600"
          height="900"
          style={{ marginTop: 40 }}
        >
          <ellipse
            cx="300"
            cy="160"
            rx="80"
            ry="92"
            fill="none"
            stroke={PALETTE.accent}
            strokeWidth="6"
            opacity={fadeIn}
          />
          <path
            d="M 300 252 L 300 540 M 160 320 L 440 320 M 220 880 L 300 580 L 380 880"
            fill="none"
            stroke={PALETTE.accent}
            strokeWidth="6"
            strokeLinecap="square"
            strokeDasharray="2200"
            strokeDashoffset={2200 - 2200 * strokeLen}
          />
          <g
            style={{
              opacity: interpolate(frame, [20, 60], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <circle cx="160" cy="320" r="10" fill={PALETTE.text} />
            <circle cx="440" cy="320" r="10" fill={PALETTE.text} />
            <circle cx="220" cy="880" r="10" fill={PALETTE.text} />
            <circle cx="380" cy="880" r="10" fill={PALETTE.text} />
          </g>
        </svg>
        <div
          style={{
            marginTop: 40,
            fontSize: 84,
            fontWeight: 200,
            color: PALETTE.muted,
            maxWidth: 1500,
            opacity: fadeIn,
          }}
        >
          Corpo inteiro, em 25 minutos.
        </div>
      </AbsoluteFill>
    </SceneWrapper>
  );
};

const CTAScene: React.FC<{ frame: number; totalFrames: number }> = ({
  frame,
  totalFrames,
}) => {
  const fadeIn = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const pulse = interpolate(frame, [40, totalFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.6, 1),
  });
  return (
    <SceneWrapper>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 100,
        }}
      >
        <AccentRule />
        <Eyebrow>TechBody</Eyebrow>
        <div
          style={{
            opacity: fadeIn,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 80,
          }}
        >
          <div
            style={{
              fontSize: 200,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -6,
              maxWidth: 1500,
            }}
          >
            Marca a tua sessão experimental.
          </div>
          <div
            style={{
              paddingTop: 32,
              paddingBottom: 32,
              paddingLeft: 80,
              paddingRight: 80,
              border: `4px solid ${PALETTE.accent}`,
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: PALETTE.accent,
              transform: `translateY(${-8 * Math.sin(pulse * Math.PI * 2)}px)`,
            }}
          >
            PontoFinal.site
          </div>
        </div>
      </AbsoluteFill>
    </SceneWrapper>
  );
};

const SCRIPT_FORMAT = (s: number) => {
  const mm = Math.floor(s / 60)
    .toString()
    .padStart(2, "0");
  const ss = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${mm}:${ss}`;
};

export const TechBodyVideo: React.FC<{ progress: number }> = ({ progress }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalSec = 30;
  const elapsedSec = progress * totalSec;
  const elapsedFrames = Math.floor((elapsedSec * fps) / 1);
  void elapsedFrames;

  return (
    <>
      <Sequence from={0} durationInFrames={150}>
        <HookScene frame={frame} />
      </Sequence>
      <Sequence from={150} durationInFrames={150}>
        <NumbersScene frame={frame - 150} />
      </Sequence>
      <Sequence from={300} durationInFrames={150}>
        <CadenceScene frame={frame - 300} />
      </Sequence>
      <Sequence from={450} durationInFrames={150}>
        <ImpactScene frame={frame - 450} />
      </Sequence>
      <Sequence from={600} durationInFrames={150}>
        <FullSessionScene frame={frame - 600} />
      </Sequence>
      <Sequence from={750} durationInFrames={150}>
        <CTAScene frame={frame - 750} totalFrames={150} />
      </Sequence>
      <Footer
        progress={progress}
        timecode={SCRIPT_FORMAT(elapsedSec)}
        total="00:30"
      />
    </>
  );
};

const calculateMetadata: CalculateMetadataFunction<{}> = () => {
  return {};
};

export const MyComposition: React.FC = () => {
  return (
    <Composition
      id="TechBodyEMS"
      component={TechBodyVideo}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
      calculateMetadata={calculateMetadata}
    />
  );
};
