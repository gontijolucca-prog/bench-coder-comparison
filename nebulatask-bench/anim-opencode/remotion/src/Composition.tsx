import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

const COLORS = ["#FF6B5B", "#4ADE80", "#60A5FA"] as const;
const BASELINE_Y = 320;
const GROUND_Y = 328;
const RADIUS = 28;
const STAGGER_FRAMES = 10;
const BOUNCE_PERIOD = 48;

type BounceState = {
  y: number;
  scaleX: number;
  scaleY: number;
};

const evaluateBounce = (
  progress: number,
): BounceState => {
  const p = ((progress % 1) + 1) % 1;
  const y = interpolate(
    p,
    [0, 0.05, 0.45, 0.55, 0.7, 0.85, 1],
    [0, 0, -220, -220, 0, -40, 0],
    { easing: Easing.bezier(0.5, 0.05, 0.5, 0.95), extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const scaleY = interpolate(
    p,
    [0, 0.05, 0.45, 0.55, 0.7, 0.85, 1],
    [1, 0.92, 1.05, 0.95, 0.85, 1.05, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const scaleX = interpolate(
    p,
    [0, 0.05, 0.45, 0.55, 0.7, 0.85, 1],
    [1, 1.08, 0.95, 1.05, 1.15, 0.95, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return { y, scaleX, scaleY };
};

export const AnimationChallenge: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();

  const circles = COLORS.map((color, i) => {
    const localFrame = Math.max(0, frame - i * STAGGER_FRAMES);
    const progress = localFrame / BOUNCE_PERIOD;
    const { y, scaleX, scaleY } = evaluateBounce(progress);
    const cx = interpolate(i, [0, 1, 2], [width * 0.25, width * 0.5, width * 0.75]);
    const opacity = interpolate(localFrame, [0, 6], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const shadowScale = interpolate(
      progress,
      [0, 0.45, 0.55, 0.7, 1],
      [1, 0.5, 0.5, 1.25, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
    );
    const shadowOpacity = interpolate(
      progress,
      [0, 0.45, 0.55, 0.7, 1],
      [0.35, 0.18, 0.18, 0.42, 0.35],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
    );
    return { color, cx, y, scaleX, scaleY, opacity, shadowScale, shadowOpacity };
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(1200px 600px at 20% 0%, #131722 0%, transparent 60%), radial-gradient(900px 500px at 100% 100%, #11131a 0%, transparent 55%), #0a0a0a",
        fontFamily: "Inter, Helvetica Neue, system-ui, sans-serif",
        color: "#f5f5f7",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 32,
          fontWeight: 800,
          fontSize: 14,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ width: 10, height: 10, background: "#FF6B5B", display: "inline-block", borderRadius: 2 }} />
        <span style={{ width: 10, height: 10, background: "#4ADE80", display: "inline-block", borderRadius: 2 }} />
        <span style={{ width: 10, height: 10, background: "#60A5FA", display: "inline-block", borderRadius: 2 }} />
        Remotion Animation
      </div>
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 18,
          fontFamily: "JetBrains Mono, ui-monospace, monospace",
          fontSize: 11,
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        {`${fps}fps · ${width}×${height}`}
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: GROUND_Y,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
        }}
      />

      {circles.map((c, i) => (
        <React.Fragment key={i}>
          <div
            style={{
              position: "absolute",
              left: c.cx - RADIUS,
              top: GROUND_Y + 8 - 10,
              width: RADIUS * 2,
              height: 10,
              borderRadius: "50%",
              background: "#000",
              opacity: c.shadowOpacity,
              filter: "blur(6px)",
              transform: `scaleX(${c.shadowScale})`,
              transformOrigin: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: c.cx - RADIUS,
              top: BASELINE_Y - RADIUS * 2 + c.y,
              width: RADIUS * 2,
              height: RADIUS * 2,
              borderRadius: "50%",
              background: c.color,
              opacity: c.opacity,
              transform: `scale(${c.scaleX}, ${c.scaleY})`,
              transformOrigin: "center bottom",
              boxShadow: `0 8px 24px ${c.color}33`,
              filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.45))",
            }}
          />
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};