import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const COLORS = ["#FF6B5B", "#4ADE80", "#60A5FA"];
const STAGE_W = 800;
const STAGE_H = 400;
const CIRCLE_SIZE = 96;
const DURATION = 90; // frames for one bounce loop (matches 3s at 30fps)

// x position follows a bouncing curve: 0 -> 1 -> back to 0 over DURATION
const bouncingX = (frame: number) => {
  // Two-arc bounce: 0->1 over first half, 1->0 over second half
  const t = frame % DURATION;
  return t < DURATION / 2 ? t / (DURATION / 2) : 1 - (t - DURATION / 2) / (DURATION / 2);
};

// vertical bounce: ease up and down within each arc
const bouncingY = (frame: number) => {
  const t = frame % DURATION;
  const half = DURATION / 2;
  if (t < half) {
    // first arc — peak in the middle
    return interpolate(t, [0, half / 2, half], [0, 1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  }
  // second arc
  const tt = t - half;
  return interpolate(tt, [0, half / 2, half], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

const Circle: React.FC<{ index: number; color: string; frame: number }> = ({
  index,
  color,
  frame,
}) => {
  // stagger: each circle starts its loop 0.25s (7-8 frames) later
  const stagger = index * 8;
  const f = Math.max(0, frame - stagger);

  const xProgress = bouncingX(f); // 0..1
  const yProgress = bouncingY(f); // 0..1

  // map 0..1 across stage margins (8% .. 92%)
  const minX = STAGE_W * 0.08;
  const maxX = STAGE_W * 0.92 - CIRCLE_SIZE;
  const minY = STAGE_H * 0.22;
  const maxY = STAGE_H * 0.78 - CIRCLE_SIZE;
  const x = interpolate(xProgress, [0, 1], [minX, maxX]);
  const y = interpolate(yProgress, [0, 1], [minY, maxY]);

  // scale: big when grounded, small at peak
  const scale = interpolate(yProgress, [0, 1], [1.05, 0.78], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // opacity fade in at frame 0..20
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: "50%",
        background: color,
        transform: `scale(${scale})`,
        opacity,
        filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.45))",
      }}
    />
  );
};

export const AnimationChallenge: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring entrance for the title
  const titleSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 110, mass: 0.6 },
  });

  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [-8, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.04), transparent 60%), linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)",
      }}
    >
      {/* dot grid floor */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.55,
        }}
      />

      {/* baseline */}
      <div
        style={{
          position: "absolute",
          left: STAGE_W * 0.08,
          right: STAGE_W * 0.08,
          bottom: STAGE_H * 0.22,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
        }}
      />

      {/* circles */}
      {COLORS.map((color, i) => (
        <Circle key={i} index={i} color={color} frame={frame} />
      ))}

      {/* title */}
      <div
        style={{
          position: "absolute",
          top: 22,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily:
            'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#f5f5f5",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        Hyperframes Animation
      </div>

      {/* subtitle */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily:
            'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
          fontSize: 10,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          opacity: interpolate(frame, [40, 60], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Remotion · 30fps · 120 frames
      </div>
    </AbsoluteFill>
  );
};

export default AnimationChallenge;
