import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const AnimationComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [0, 60, 120], [0, 400, 0], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, 30, 60, 90, 120], [1, 1.5, 1, 0.5, 1]);
  const opacity = interpolate(frame, [0, 15, 105, 120], [0, 1, 1, 0]);

  const colors = ["#FF6B5B", "#4ADE80", "#60A5FA"];
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a", justifyContent: "center", alignItems: "center" }}>
      {colors.map((color, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: color,
            transform: `translateX(${x + i * 30}px) scale(${scale})`,
            opacity,
          }}
        />
      ))}
      <div style={{ position: "absolute", top: 30, color: "#fff", fontFamily: "sans-serif", fontSize: 14, letterSpacing: 2, textTransform: "uppercase", opacity: 0.6 }}>
        Remotion — Animation Challenge
      </div>
    </AbsoluteFill>
  );
};