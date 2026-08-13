# Fact Freeze - 2026-08-11

This file records the August 11, 2026 first-edition technical GA fact freeze carried into the v1.0.1 Source Independence & Publication Cleanup maintenance release.

## CLI
- Official standalone installers exist for macOS/Linux and Windows PowerShell.
- npm package: `@openai/codex`; Homebrew cask: `codex`.

## Python SDK
- Package: `openai-codex`.
- Python >=3.10.
- The Python SDK is currently **beta**.
- Published SDK builds include a pinned Codex CLI runtime dependency.
- Core API: `Codex`, `AsyncCodex`, threads and turns.
- Thread starts currently default to `ApprovalMode.auto_review`.
- Sandbox presets: `read_only`, `workspace_write`, `full_access`.
- Per-turn sandbox narrowing is supported.

## TypeScript SDK
- Package: `@openai/codex-sdk`.
- Node.js 18+.
- Core API includes `Codex`, `startThread()`, `run()`, `runStreamed()`, structured output, image input, and thread resumption.

## Context surfaces
- ChatGPT/account memory and local Codex memory are separate concerns; must-follow repository policy belongs in durable checked-in guidance rather than memory alone.
- Chronicle is treated as an opt-in research-preview surface with platform/plan constraints and additional prompt-injection/privacy considerations.
- Remote lets supported clients supervise Codex work while a connected computer remains the execution host.

## Security and permissions
- Auto-review changes the reviewer for eligible approval requests without widening the main agent's sandbox; it is not a deterministic security guarantee.
- Permission Profiles are beta and have migration constraints with older sandbox configuration.
- Rules are experimental command-policy definitions and do not replace sandboxing.
- Current Codex Security documentation describes application-security workflows across plugin, CLI, TypeScript SDK, and cloud surfaces.

## Scheduled tasks
- Local project scheduled tasks require the relevant machine/project/desktop environment to remain available.
- At this fact freeze, OpenAI documents a migration before 2026-08-31 for ChatGPT-signed-in scheduled tasks explicitly using `gpt-5.4` or `gpt-5.4-mini`: use `gpt-5.6-terra` or `gpt-5.6-luna` respectively.

Re-check `docs/source-ledger.md` whenever reproducing a version-sensitive workflow after the fact-freeze date.
