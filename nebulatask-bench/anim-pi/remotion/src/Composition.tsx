import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";

const STAGE_WIDTH = 800;
const STAGE_HEIGHT = 400;
const CIRCLE_SIZE = 64;
const BASELINE_Y = STAGE_HEIGHT - 70 - CIRCLE_SIZE / 2;
const TITLE_HEIGHT = 50;

type CircleProps = {
  color: string;
  cx: number;
  delay: number;
  duration: number;
  amplitude: number;
};

const Circle: React.FC<CircleProps> = ({ color, cx, delay, duration, amplitude }) => {
  const frame = useCurrentFrame();
  const t = Math.max(0, frame - delay);
  const localFrame = t % duration;
  const progress = localFrame / duration;

  const y = interpolate(progress, [0, 1], [BASELINE_Y, BASELINE_Y], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const upward = interpolate(progress, [0, 0.5, 1], [0, -amplitude, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });

  const scale = interpolate(progress, [0, 0.5, 0.55, 0.7, 1], [1, 1.15, 0.92, 1.05, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(progress, [0, 0.1, 0.95, 1], [1, 1, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: cx - CIRCLE_SIZE / 2,
        top: y + upward,
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: "50%",
        background: color,
        transform: `scale(${scale})`,
        opacity,
        boxShadow: `0 8px 24px ${color}66`,
      }}
    />
  );
};

const Title: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 6, 30], [0, 0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [6, 30], [-8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        top: 28,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "#f5f5f5",
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      Animation <span style={{ color: "#FF6B5B" }}>Challenge</span>
    </div>
  );
};

export const AnimationChallenge: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#0a0a0a",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: STAGE_WIDTH,
          height: STAGE_HEIGHT,
          background: "#0a0a0a",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        <Title />
        <div
          style={{
            position: "absolute",
            bottom: 70,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
          }}
        />
        <Circle color="#FF6B5B" cx={120} delay={6}  duration={78} amplitude={220} />
        <Circle color="#4ADE80" cx={368} delay={21} duration={78} amplitude={240} />
        <Circle color="#60A5FA" cx={616} delay={36} duration={78} amplitude={200} />
      </div>
    </AbsoluteFill>
  );
};