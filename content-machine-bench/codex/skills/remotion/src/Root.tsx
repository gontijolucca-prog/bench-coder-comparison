import React from 'react';
import {Composition} from 'remotion';
import {TechBodyEMS} from './TechBodyEMS';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="TechBodyEMS"
      component={TechBodyEMS}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
