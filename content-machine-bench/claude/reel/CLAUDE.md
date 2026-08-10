# CLAUDE.md

## Auto-learned Rules

<!-- claude-evolve:managed-start -->

<!-- claude-evolve:rule id=r_mrnles7i_xm9y score=5 created=2026-07-16 source=observation complexity=simple -->
- Track structured deliverables with TaskCreate at start, TaskUpdate(in_progress) before work, TaskUpdate(completed) after
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrnles8p_7hi0 score=5.2 created=2026-07-16 source=observation complexity=simple -->
- Use Read tool to inspect files before any editing/transformation, not Bash cat/head
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrnles9l_o2ym score=5 created=2026-07-16 source=anti_pattern complexity=simple -->
- Do NOT Read the same file twice in a row — cache the result, only re-Read after editing
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrnlesag_28dl score=5 created=2026-07-16 source=anti_pattern complexity=simple -->
- Do NOT list the same directory 3+ times — one ls is enough; subsequent listings must be justified by a state change
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrnlesbk_2uev score=5 created=2026-07-16 source=anti_pattern complexity=simple -->
- Do NOT mark TaskUpdate(completed) if the deliverable was not actually produced in the visible tool calls
<!-- /claude-evolve:rule -->

<!-- claude-evolve:managed-end -->
