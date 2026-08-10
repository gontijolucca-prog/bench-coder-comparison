import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const BG = '#1a1a1a';
const ACCENT = '#d4773b';
const WHITE = '#ffffff';
const MUTED = '#a6a6a6';
const SCENE_FRAMES = 150;

const cubic = Easing.bezier(0.22, 1, 0.36, 1);

const grid: React.CSSProperties = {
  backgroundColor: BG,
  backgroundImage:
    'linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)',
  backgroundSize: '90px 90px',
  color: WHITE,
  fontFamily: 'Arial, Helvetica, sans-serif',
  overflow: 'hidden',
};

const easeInOut = (frame: number, duration: number) => {
  const enter = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: cubic,
  });
  const exit = interpolate(frame, [duration - 18, duration], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.64, 0, 0.78, 0),
  });
  return enter * exit;
};

const SceneFrame: React.FC<React.PropsWithChildren<{index: number; kicker: string}>> = ({
  children,
  index,
  kicker,
}) => {
  const frame = useCurrentFrame();
  const opacity = easeInOut(frame, SCENE_FRAMES);
  const translateY = interpolate(frame, [0, 24], [70, 0], {
    extrapolateRight: 'clamp',
    easing: cubic,
  });
  const scale = interpolate(frame, [SCENE_FRAMES - 20, SCENE_FRAMES], [1, 0.96], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: cubic,
  });

  return (
    <AbsoluteFill style={{...grid, opacity}}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${index % 2 === 0 ? '82%' : '18%'} 24%, rgba(212,119,59,.18), transparent 34%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 86,
          left: 76,
          right: 76,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textTransform: 'uppercase',
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          <div style={{width: 22, height: 22, border: `6px solid ${ACCENT}`, transform: 'rotate(45deg)'}} />
          <span style={{fontSize: 27, fontWeight: 900, letterSpacing: '0.18em'}}>TechBody</span>
        </div>
        <span style={{fontSize: 19, fontWeight: 700, color: MUTED, letterSpacing: '0.14em'}}>
          0{index + 1} / 06
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          inset: '210px 76px 210px',
          transform: `translateY(${translateY}px) scale(${scale})`,
          transformOrigin: 'center',
        }}
      >
        <div style={{color: ACCENT, fontSize: 21, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase'}}>
          {kicker}
        </div>
        {children}
      </div>
    </AbsoluteFill>
  );
};

const MainTitle: React.FC<React.PropsWithChildren<{size?: number}>> = ({children, size = 112}) => (
  <div
    style={{
      marginTop: 56,
      maxWidth: 900,
      fontSize: size,
      fontWeight: 900,
      letterSpacing: '-0.065em',
      lineHeight: 0.94,
    }}
  >
    {children}
  </div>
);

const SceneOne: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const bounce = spring({frame, fps, config: {damping: 14, stiffness: 115, mass: 0.8}});
  const numberScale = interpolate(bounce, [0, 1], [0.55, 1]);

  return (
    <SceneFrame index={0} kicker="Eficiência em treino">
      <MainTitle>25 minutos mudam o treino.</MainTitle>
      <div style={{marginTop: 130, display: 'flex', alignItems: 'baseline', gap: 22, transform: `scale(${numberScale})`, transformOrigin: 'left center'}}>
        <span style={{fontSize: 310, fontWeight: 950, letterSpacing: '-0.09em', color: ACCENT}}>25</span>
        <span style={{fontSize: 58, fontWeight: 800, textTransform: 'uppercase'}}>min</span>
      </div>
      <div style={{marginTop: 55, width: 155, height: 10, background: ACCENT}} />
    </SceneFrame>
  );
};

const ComparisonBar: React.FC<{label: string; value: string; width: number; active?: boolean; delay: number}> = ({
  label,
  value,
  width,
  active,
  delay,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 34], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: cubic,
  });
  return (
    <div style={{marginTop: 78}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
        <span style={{fontSize: 25, fontWeight: 800, color: MUTED, letterSpacing: '.08em', textTransform: 'uppercase'}}>{label}</span>
        <strong style={{fontSize: 78, color: active ? ACCENT : WHITE}}>{value}</strong>
      </div>
      <div style={{height: 34, marginTop: 20, background: 'rgba(255,255,255,.1)'}}>
        <div style={{height: '100%', width: `${width * progress}%`, background: active ? ACCENT : '#696969'}} />
      </div>
    </div>
  );
};

const SceneTwo: React.FC = () => (
  <SceneFrame index={1} kicker="Recrutamento muscular">
    <MainTitle size={100}>Mais fibras. Mais estímulo.</MainTitle>
    <div style={{marginTop: 110}}>
      <ComparisonBar label="Treino convencional" value="30–40%" width={40} delay={12} />
      <ComparisonBar label="Treino EMS" value="85–90%" width={90} active delay={35} />
    </div>
    <div style={{marginTop: 100, fontSize: 35, lineHeight: 1.25, color: MUTED}}>EMS recruta até 85–90% das fibras musculares.</div>
  </SceneFrame>
);

const StatCard: React.FC<{value: string; label: string; delay: number}> = ({value, label, delay}) => {
  const frame = useCurrentFrame();
  const lift = interpolate(frame, [delay, delay + 28], [60, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: cubic,
  });
  const opacity = interpolate(frame, [delay, delay + 16], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div style={{border: '1px solid rgba(255,255,255,.18)', padding: '62px 48px', transform: `translateY(${lift}px)`, opacity}}>
      <div style={{fontSize: 102, color: ACCENT, fontWeight: 950, letterSpacing: '-.06em'}}>{value}</div>
      <div style={{marginTop: 18, fontSize: 25, fontWeight: 750, color: MUTED, textTransform: 'uppercase', letterSpacing: '.12em'}}>{label}</div>
    </div>
  );
};

const SceneThree: React.FC = () => (
  <SceneFrame index={2} kicker="Rotina otimizada">
    <MainTitle>Intensidade com tempo controlado.</MainTitle>
    <div style={{marginTop: 145, display: 'grid', gap: 26}}>
      <StatCard value="20–25 min" label="por sessão" delay={12} />
      <StatCard value="1–3×" label="por semana" delay={30} />
    </div>
  </SceneFrame>
);

const SceneFour: React.FC = () => {
  const frame = useCurrentFrame();
  const line = interpolate(frame, [18, 72], [0, 100], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: cubic});
  return (
    <SceneFrame index={3} kicker="Tecnologia controlada">
      <MainTitle size={102}>Baixo impacto articular.</MainTitle>
      <div style={{position: 'relative', marginTop: 140, height: 540, borderLeft: `8px solid ${ACCENT}`, paddingLeft: 56}}>
        <div style={{fontSize: 58, fontWeight: 850, lineHeight: 1.05}}>Estímulo muscular<br />sem carga externa elevada.</div>
        <div style={{marginTop: 92, width: `${line}%`, height: 2, background: 'rgba(255,255,255,.28)'}} />
        <div style={{marginTop: 56, fontSize: 37, fontWeight: 760, lineHeight: 1.2}}>Equipamento com certificado médico alemão.</div>
        <div style={{marginTop: 30, color: MUTED, fontSize: 24, lineHeight: 1.45}}>Sessões orientadas e parâmetros ajustados ao perfil de treino.</div>
      </div>
    </SceneFrame>
  );
};

const MuscleNode: React.FC<{x: number; y: number; delay: number}> = ({x, y, delay}) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(frame, [delay, delay + 16, delay + 34], [0.25, 1, 0.45], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: cubic,
  });
  return <div style={{position: 'absolute', left: x, top: y, width: 58, height: 58, borderRadius: '50%', background: ACCENT, boxShadow: `0 0 ${70 * pulse}px rgba(212,119,59,.8)`, transform: `scale(${pulse})`}} />;
};

const SceneFive: React.FC = () => (
  <SceneFrame index={4} kicker="Sessão integrada">
    <MainTitle>Corpo inteiro. Uma sessão completa.</MainTitle>
    <div style={{position: 'relative', margin: '125px auto 0', width: 560, height: 720}}>
      <div style={{position: 'absolute', left: 210, top: 0, width: 140, height: 140, borderRadius: '50%', border: '5px solid rgba(255,255,255,.7)'}} />
      <div style={{position: 'absolute', left: 125, top: 145, width: 310, height: 360, border: '5px solid rgba(255,255,255,.7)', clipPath: 'polygon(22% 0,78% 0,100% 100%,0 100%)'}} />
      <div style={{position: 'absolute', left: 76, top: 173, width: 5, height: 380, background: 'rgba(255,255,255,.7)', transform: 'rotate(14deg)'}} />
      <div style={{position: 'absolute', right: 76, top: 173, width: 5, height: 380, background: 'rgba(255,255,255,.7)', transform: 'rotate(-14deg)'}} />
      <div style={{position: 'absolute', left: 201, top: 500, width: 5, height: 220, background: 'rgba(255,255,255,.7)', transform: 'rotate(8deg)'}} />
      <div style={{position: 'absolute', right: 201, top: 500, width: 5, height: 220, background: 'rgba(255,255,255,.7)', transform: 'rotate(-8deg)'}} />
      <MuscleNode x={162} y={205} delay={15} />
      <MuscleNode x={340} y={205} delay={26} />
      <MuscleNode x={250} y={330} delay={37} />
      <MuscleNode x={172} y={465} delay={48} />
      <MuscleNode x={330} y={465} delay={59} />
    </div>
  </SceneFrame>
);

const SceneSix: React.FC = () => {
  const frame = useCurrentFrame();
  const button = spring({frame: frame - 24, fps: 30, config: {damping: 15, stiffness: 120}});
  return (
    <SceneFrame index={5} kicker="Próximo passo">
      <MainTitle size={118}>Marca a tua sessão experimental.</MainTitle>
      <div style={{marginTop: 135, color: MUTED, fontSize: 37, lineHeight: 1.35, maxWidth: 820}}>
        Descobre uma abordagem eficiente, orientada e de baixo impacto.
      </div>
      <div
        style={{
          marginTop: 150,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 35,
          padding: '42px 50px',
          background: ACCENT,
          color: WHITE,
          fontSize: 31,
          fontWeight: 900,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
          transform: `scale(${Math.max(0, button)})`,
          transformOrigin: 'left center',
        }}
      >
        TechBody EMS <span style={{fontSize: 50, lineHeight: 0}}>→</span>
      </div>
      <div style={{position: 'absolute', bottom: 0, left: 0, width: 220, height: 12, background: ACCENT}} />
    </SceneFrame>
  );
};

const GlobalOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 899], [0, 100], {extrapolateRight: 'clamp'});
  const seconds = Math.min(29, Math.floor(frame / 30));
  const timecode = `00:${seconds.toString().padStart(2, '0')}`;
  return (
    <>
      <div style={{position: 'absolute', left: 76, right: 76, bottom: 96, display: 'flex', justifyContent: 'space-between', color: MUTED, fontFamily: 'monospace', fontSize: 21, letterSpacing: '.08em'}}>
        <span>{timecode}</span>
        <span>00:30</span>
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 12, background: 'rgba(255,255,255,.12)'}}>
        <div style={{height: '100%', width: `${progress}%`, background: ACCENT}} />
      </div>
    </>
  );
};

const scenes = [SceneOne, SceneTwo, SceneThree, SceneFour, SceneFive, SceneSix];

export const TechBodyEMS: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: BG}}>
    {scenes.map((Scene, index) => (
      <Sequence key={index} from={index * SCENE_FRAMES} durationInFrames={SCENE_FRAMES} premountFor={30}>
        <Scene />
      </Sequence>
    ))}
    <GlobalOverlay />
  </AbsoluteFill>
);
