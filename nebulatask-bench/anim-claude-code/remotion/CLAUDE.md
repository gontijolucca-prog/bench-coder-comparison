# CLAUDE.md

## Auto-learned Rules

<!-- claude-evolve:managed-start -->

<!-- claude-evolve:rule id=r_mrl7nkhu_fyj3 score=5 created=2026-07-14 source=observation complexity=simple -->
- Use TaskCreate up front to decompose multi-step animation/render pipelines into tracked subtasks before starting work
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl7nkj0_5rjn score=5 created=2026-07-14 source=observation complexity=simple -->
- Verify node/npm/npx versions before npm install in a fresh project
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl7nkjx_t50c score=5.3 created=2026-07-14 source=observation complexity=simple -->
- Run `tsc --noEmit` before `remotion render` to catch type errors before expensive render
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl7nkkt_lpzg score=5.9 created=2026-07-14 source=observation complexity=simple -->
- Use `npm install --no-audit --no-fund --loglevel=error` for cleaner install logs
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl7nklp_6koy score=5.9 created=2026-07-14 source=observation complexity=simple -->
- Use `--concurrency=1` on remotion render on resource-constrained Macs to avoid OOM
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl7nkml_95md score=5.3 created=2026-07-14 source=observation complexity=simple -->
- Extract sample frames from rendered MP4 with ffmpeg select filter and Read them back to visually verify render output
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl7nkng_u8nx score=5 created=2026-07-14 source=observation complexity=simple -->
- Use Chrome headless `--screenshot` to verify HTML renders without JS errors
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl7nkoc_q9o6 score=5 created=2026-07-14 source=observation complexity=simple -->
- Clean up generated verification artifacts (sample frames, screenshots) after visual verification completes
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl7nkp6_b0dk score=5 created=2026-07-14 source=observation complexity=simple -->
- Read the source prompt/spec file first before scaffolding code
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrl7nkq2_9zsa score=5 created=2026-07-14 source=anti_pattern complexity=simple -->
- Do not use `cd` inside Bash commands when the target directory is known — pass absolute paths to Read/Write instead
<!-- /claude-evolve:rule -->

<!-- claude-evolve:managed-end -->
