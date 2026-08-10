# CLAUDE.md

## Auto-learned Rules

<!-- claude-evolve:managed-start -->

<!-- claude-evolve:rule id=r_mrnljn35_rwyi score=5 created=2026-07-16 source=observation complexity=simple -->
- After running fix Edits, re-run validation assertions to confirm the fix actually removed the target string and added the replacement (verify-after-fix)
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrnljn4c_slgk score=5.3 created=2026-07-16 source=observation complexity=simple -->
- Use TaskCreate+TaskUpdate (in_progress → completed) for compliance fixes that require verification, even small ones
<!-- /claude-evolve:rule -->

<!-- claude-evolve:rule id=r_mrnljn58_y1cc score=5.3 created=2026-07-16 source=anti_pattern complexity=simple -->
- Initial JSON validation should include content compliance checks (AO90 spellings, brand voice, forbidden terms) in the same assert block as structural checks — don't validate structure and content in separate passes
<!-- /claude-evolve:rule -->

<!-- claude-evolve:managed-end -->
