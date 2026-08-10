# Animation Challenge

Create TWO animation projects in the same directory:

## 1. Hyperframes Animation
Create a file called `hyperframes-animation.html` that shows a simple but polished animation using pure HTML/CSS/JS (no frameworks). Requirements:
- A dark background (#0a0a0a)
- 3 colored circles that animate across the screen using CSS @keyframes
- Each circle has a different color: #FF6B5B, #4ADE80, #60A5FA
- The circles bounce, scale, and stagger (different animation-delay)
- A title overlay at the top: "Hyperframes Animation"
- 800x400px stage, centered on page
- Must open directly in a browser with no build step

## 2. Remotion Animation
Create a Remotion video project in a `remotion/` subdirectory. Requirements:
- Install remotion, @remotion/cli, react, react-dom
- Create src/Composition.tsx with a simple animation:
  - Dark background (#0a0a0a)
  - 3 colored circles (same colors as above)
  - Use useCurrentFrame + interpolate for x position, scale, and opacity
  - 120 frames at 30fps, 800x400px
- Create src/index.tsx with registerRoot + Composition wrapper
- Create tsconfig.json with JSX support
- Run `npx remotion render src/index.tsx AnimationChallenge output.mp4` to verify it renders

## Rules
- Both animations must work without errors
- Keep it simple — no extra features
- Use the same visual style across both (dark bg, 3 colored circles, bounce animation)
- The Remotion project must successfully render to an MP4 file