import { registerRoot, Composition } from "remotion";
import { AnimationComposition } from "./Composition";

registerRoot(() => (
  <Composition
    id="AnimationChallenge"
    component={AnimationComposition}
    durationInFrames={120}
    fps={30}
    width={800}
    height={400}
  />
));
