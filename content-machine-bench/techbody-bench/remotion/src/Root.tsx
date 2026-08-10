import React from "react";
import { Composition } from "remotion";
import { TechBodyEMS } from "./TechBodyEMS";

export const FPS = 30;
export const SCENE_DURATION = 5; // seconds per scene
export const TOTAL_DURATION = 30; // 6 scenes x 5s

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="TechBodyEMS"
        component={TechBodyEMS}
        durationInFrames={TOTAL_DURATION * FPS}
        fps={FPS}
        width={1080}
        height={1920}
      />
    </>
  );
};
