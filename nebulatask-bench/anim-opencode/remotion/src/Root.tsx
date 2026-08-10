import { Composition } from "remotion";
import { AnimationChallenge } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AnimationChallenge"
        component={AnimationChallenge}
        durationInFrames={120}
        fps={30}
        width={800}
        height={400}
      />
    </>
  );
};