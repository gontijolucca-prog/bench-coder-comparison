# CLAUDE.md

## Auto-learned Rules

<!-- claude-evolve:managed-start -->

<!-- claude-evolve:rule id=r_mrl3ma6w_9dqo score=5 created=2026-07-14 source=observation complexity=simple -->
- After modifying any frontend project files, run npm run build to verify the project still compiles and produces valid dist output
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl3ma82_sa2l score=5 created=2026-07-14 source=observation complexity=simple -->
- Pin tailwindcss@^3 in new Vite+React projects (not v4) because v4 has breaking config changes that break postcss init flow
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl3ma8x_e3td score=5.3 created=2026-07-14 source=observation complexity=simple -->
- Separate UI into dedicated /src/components/ folders at scaffold time rather than dumping everything in App.tsx
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl3ma9s_t77m score=5.3 created=2026-07-14 source=observation complexity=simple -->
- Verify runtime environment versions (node, npm) before scaffolding to catch version-related failures early
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl3maam_lh15 score=5 created=2026-07-14 source=observation complexity=simple -->
- Remove unused scaffold files (App.css, default assets) immediately after setup to keep the codebase clean
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl3mabi_i45p score=5 created=2026-07-14 source=anti_pattern complexity=simple -->
- Never pipe npm install through `tail -N` alone — pipe through tail but also verify exit code ($?) or check for ERR! lines so dependency failures surface
<!-- /claude-evolve:rule -->

<!-- claude-evolve:managed-end -->
