# CLAUDE.md

## Auto-learned Rules

<!-- claude-evolve:managed-start -->

<!-- claude-evolve:rule id=r_mrne4e3z_0b13 score=5.3 created=2026-07-16 source=observation complexity=simple -->
- After modifying a structured JSON file, validate schema with assertions (length, field presence, pagination format) before considering task done
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrne4e5a_202g score=5 created=2026-07-16 source=observation complexity=simple -->
- Track structured deliverables with TaskCreate + TaskUpdate (status=completed) instead of leaving work unflagged
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrne4e65_8i7k score=5 created=2026-07-16 source=observation complexity=simple -->
- Read the target file once before running any string-replacement operations against it
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrne4e71_czcu score=5 created=2026-07-16 source=anti_pattern complexity=simple -->
- Do NOT modify files via `python3 -c "...p.write_text(s.replace(...))"` — use the Edit tool with old_string/new_string for textual edits; reserve Bash/python for transformations Edit can't express
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrne4e7w_n4kx score=5 created=2026-07-16 source=anti_pattern complexity=simple -->
- Do NOT split related edits across multiple separate Bash invocations when they target the same file — batch all text replacements into one Edit call (or one multi-replace python script)
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrne4e8s_bvtu score=5 created=2026-07-16 source=anti_pattern complexity=simple -->
- Do NOT use `python3 - <<'PY' ... PY` heredoc to construct a new file from scratch when the content is known — use Write tool with the final content directly
<!-- /claude-evolve:rule -->

<!-- claude-evolve:managed-end -->
