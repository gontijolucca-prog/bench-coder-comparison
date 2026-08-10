import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";

const STAGE_W = 800;
const STAGE_H = 400;
const CIRCLE_SIZE = 80;
const DURATION = 120;
const CHANNELS = ["#FF6B5B", "#4ADE80", "#60A5FA"];

export const AnimationComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 15, DURATION - 15, DURATION], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f1419 0%, #050505 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 32,
          color: "#f5f5f5",
          fontSize: 11,
          fontFamily: "ui-sans-serif, -apple-system, sans-serif",
          letterSpacing: 3,
          textTransform: "uppercase",
          fontWeight: 600,
          opacity: titleOpacity,
        }}
      >
        Hermes Agent · Animation
      </div>
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 32,
          color: "rgba(255,255,255,0.3)",
          fontSize: 10,
          letterSpacing: 2,
          textTransform: "uppercase",
          opacity: titleOpacity,
        }}
      >
        120f · 30fps · 800×400
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 60,
          right: 60,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      />

      {CHANNELS.map((color, i) => {
        const delay = i * 12;
        const localFrame = Math.max(0, frame - delay);
        const x = interpolate(localFrame, [0, DURATION - delay], [0, STAGE_W - CIRCLE_SIZE - 120], {
          extrapolateRight: "clamp",
          easing: Easing.inOut(Easing.cubic),
        });
        const y = interpolate(
          localFrame,
          [0, 12, 24, 36, 48, 60, 72, 84, 96, 108],
          [0, -60, -90, -60, -90, -60, -90, -60, -90, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        const scale = interpolate(
          localFrame,
          [0, 15, 30, 45, 60, 75, 90, 105],
          [0.8, 1.15, 1.0, 1.1, 1.0, 1.1, 1.0, 0.85],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        const opacity = interpolate(
          localFrame,
          [0, 12, DURATION - 12 - delay, DURATION - delay],
          [0, 1, 1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 60 + x,
              top: STAGE_H - CIRCLE_SIZE - 50 + y,
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, ${color}, ${color}aa)`,
              transform: `scale(${scale})`,
              opacity,
              boxShadow: `0 10px 30px ${color}55`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
