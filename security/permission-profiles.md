# Permission Profiles - Design Worksheet

These role profiles are an architecture exercise, not a drop-in Codex configuration.

**v1.0.1 fact-freeze note (2026-08-11):** Codex also documents a newer beta Permission Profiles model. Current guidance warns against casually composing the newer `[permissions]` model with older `sandbox_mode` / `sandbox_workspace_write` configuration because legacy sandbox settings can take precedence. Managed environments can further restrict allowed profiles. Re-check the current Permission Profiles documentation before encoding these ideas in `config.toml`.

## Explorer
- filesystem: read-only
- network: off unless docs lookup is required
- Git: status/log/diff
- side effects: none

## Implementer
- filesystem: workspace write in a dedicated worktree
- shell: repository validation commands
- network: off by default
- external tools: task-specific only

## Reviewer
- filesystem: read-only
- shell: tests/static analysis
- external writes: none

## Release operator
- workspace write for release artifacts
- push/tag/publish: explicit approval or human-owned
- credentials: short-lived and narrowly scoped

## Migration checklist

- record the Codex client version;
- identify whether the fleet uses legacy sandbox configuration or the newer permission model;
- test policy on a non-production repository;
- verify filesystem and network boundaries independently of prompt behavior;
- preserve CI/branch-protection controls even when the agent permission policy is correct.
