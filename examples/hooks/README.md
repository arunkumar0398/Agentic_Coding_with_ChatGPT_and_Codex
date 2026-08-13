# Hooks lab

This lab accompanies the publication-grade hooks chapter.

1. Inspect `.codex/hooks.json` and the two scripts under `.codex/hooks/`.
2. Run `python examples/hooks/test_hooks.py` for an offline policy test.
3. In an authenticated Codex environment, start Codex in this repository and use `/hooks` to review and trust the repository-local hook definitions before enabling them.
4. Try harmless shell commands first. Do not treat these example hooks as a complete security boundary; sandboxing, approvals, repository isolation, and CI policy remain the enforcement layers.
