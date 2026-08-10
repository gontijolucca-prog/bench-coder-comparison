import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

type CircleConfig = {
  color: string;
  delay: number;
};

const CIRCLES: CircleConfig[] = [
  { color: "#FF6B5B", delay: 0 },
  { color: "#4ADE80", delay: 12 },
  { color: "#60A5FA", delay: 24 },
];

const STAGE_WIDTH = 800;
const STAGE_HEIGHT = 400;
const CIRCLE_SIZE = 60;
const DURATION = 120;

export const AnimationChallenge: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#0a0a0a",
        width: STAGE_WIDTH,
        height: STAGE_HEIGHT,
        position: "relative",
        overflow: "hidden",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#f5f5f5",
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: 0.5,
          zIndex: 10,
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        Hyperframes Animation
      </div>

      {CIRCLES.map((c, i) => {
        const localFrame = Math.max(0, frame - c.delay);

        const x = interpolate(
          localFrame,
          [0, DURATION - c.delay],
          [0, STAGE_WIDTH - CIRCLE_SIZE],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.cubic),
          }
        );

        const y = interpolate(
          localFrame,
          [0, 15, 30, 45, 60, 75, 90, 105],
          [0, -50, 0, -50, 0, -50, 0, -50],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        );

        const scale = interpolate(
          localFrame,
          [
            0,
            12,
            (DURATION - c.delay) / 2,
            DURATION - 12 - c.delay,
            DURATION - c.delay,
          ],
          [0.6, 1.1, 1, 0.9, 0.6],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        );

        const opacity = interpolate(
          localFrame,
          [0, 15, DURATION - 15 - c.delay, DURATION - c.delay],
          [0, 1, 1, 0],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        );

        const centerY = (STAGE_HEIGHT - CIRCLE_SIZE) / 2;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: centerY + y,
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: "50%",
              backgroundColor: c.color,
              transform: `scale(${scale})`,
              opacity,
              boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
            }}
          />
        );
      })}
    </div>
  );
};
