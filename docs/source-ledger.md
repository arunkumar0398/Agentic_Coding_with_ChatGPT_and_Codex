# Source Ledger - v1.0.1

Fact-freeze date: **2026-08-11**.

The first edition prioritizes first-party OpenAI documentation and official source repositories. Product behavior changes quickly, so durable engineering principles are separated from commands, API signatures, entitlement details, and feature-maturity labels that must be re-checked before production use.

## OpenAI Codex primary sources

- Codex documentation hub: https://developers.openai.com/codex
- Codex open-source repository / CLI quickstart: https://github.com/openai/codex
- CLI docs: https://developers.openai.com/codex/cli
- IDE: https://developers.openai.com/codex/ide
- Remote: https://developers.openai.com/codex/remote
- AGENTS.md/customization: https://developers.openai.com/codex/customization/overview
- Memories: https://developers.openai.com/codex/memories
- Chronicle: https://developers.openai.com/codex/chronicle
- Skills / plugins: https://developers.openai.com/codex/skills-and-plugins
- Hooks: https://developers.openai.com/codex/hooks
- Rules: https://developers.openai.com/codex/rules
- MCP: https://developers.openai.com/codex/mcp
- Codex MCP server: https://developers.openai.com/codex/mcp-server
- Worktrees: https://developers.openai.com/codex/environments/git-worktrees
- Record & Replay: https://developers.openai.com/codex/record-replay
- Goal mode / long-running work: https://developers.openai.com/codex/long-running-work
- Scheduled tasks: https://developers.openai.com/codex/automations
- GitHub review: https://developers.openai.com/codex/third-party/github
- GitHub Action: https://developers.openai.com/codex/github-action
- Sandboxing: https://developers.openai.com/codex/sandboxing
- Auto-review: https://developers.openai.com/codex/sandboxing/auto-review
- Permission Profiles: https://developers.openai.com/codex/permissions
- Codex Security overview: https://developers.openai.com/codex/security
- Codex SDK: https://developers.openai.com/codex/codex-sdk
- Python SDK README: https://github.com/openai/codex/blob/main/sdk/python/README.md
- Python SDK API reference: https://github.com/openai/codex/blob/main/sdk/python/docs/api-reference.md
- TypeScript SDK README: https://github.com/openai/codex/blob/main/sdk/typescript/README.md
- App Server: https://developers.openai.com/codex/app-server
- OpenAI safety case study: https://openai.com/index/running-codex-safely/

## OpenAI agent SDK sources

- OpenAI Agents SDK for Python: https://github.com/openai/openai-agents-python
- OpenAI Agents SDK for JavaScript/TypeScript: https://github.com/openai/openai-agents-js

## Protocol and platform sources

- Model Context Protocol documentation: https://modelcontextprotocol.io/
- Model Context Protocol TypeScript SDK: https://github.com/modelcontextprotocol/typescript-sdk
- Git worktrees: https://git-scm.com/docs/git-worktree
- GitHub Actions: https://docs.github.com/actions

## v1.0.1 facts refreshed immediately before technical GA

- Codex CLI standalone installers and package-manager installation paths remain documented.
- Python SDK package `openai-codex` requires Python >=3.10, is currently labeled beta, and published builds include a pinned Codex CLI runtime dependency.
- Python thread starts currently default to `ApprovalMode.auto_review`; sandbox presets remain `read_only`, `workspace_write`, and `full_access`.
- TypeScript SDK package `@openai/codex-sdk` requires Node.js 18+ and documents `startThread()`, `run()`, `runStreamed()`, structured output, image inputs, and `resumeThread()`.
- Permission Profiles remain beta and do not casually compose with the older sandbox configuration model.
- Rules remain experimental.
- Auto-review is a reviewer substitution for eligible approval requests; it does not widen the main agent's sandbox and is not a deterministic security guarantee.
- Current Codex Security documentation presents plugin, CLI, TypeScript SDK, and cloud security workflows rather than one monolithic workflow.
- Scheduled-task documentation contains a dated migration notice for ChatGPT-signed-in tasks explicitly using `gpt-5.4` or `gpt-5.4-mini`: migrate before 2026-08-31 to `gpt-5.6-terra` or `gpt-5.6-luna` respectively.

## Evidence policy

- **CAPTURED LOCALLY** - produced in the publication build environment.
- **VERIFIED COMMAND RECIPE** - checked against current primary documentation but not run in a credentialed Codex session in the publication container.
- **ILLUSTRATIVE AGENT TURN** - authored teaching example; not represented as model output.
- **LIVE RUN REQUIRED** - requires Codex authentication, external network access, or a connected service unavailable during the build.

The v1.0.1 build environment did not contain an authenticated Codex executable or user API key, and outbound package installation was unavailable. The technical edition therefore preserves those steps as explicit reproduction procedures rather than fabricating output.
