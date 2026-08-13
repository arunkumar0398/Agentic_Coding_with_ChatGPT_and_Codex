# Agentic Coding with ChatGPT & Codex - Companion Repository v1.0.1

This repository accompanies the technical first edition of *Agentic Coding with ChatGPT & Codex: From AI Pair Programmer to Autonomous Engineering Workflows*.

**Fact freeze:** 2026-08-11. This is an educational reference implementation, not a universal production template. Start read-only or workspace-scoped, keep external capabilities narrow, and verify current primary documentation before copying version-sensitive configuration into production.

## What v1.0.1 contains

- `AGENTS.md` - durable repository guidance
- `.codex/agents/` - specialist subagent examples
- `.codex/hooks.json` and `.codex/hooks/` - deterministic hook examples with offline tests
- `.codex/rules/default.rules` - experimental command-rule example; review current Rules docs before use
- `.agents/skills/` - reusable workflow skills
- `.github/workflows/` - Codex GitHub Action review example
- `examples/mcp/project-context-server/` - read-only TypeScript MCP server
- `examples/agents-sdk/supervisor.py` - supervisor skeleton using `codex mcp-server`
- `examples/codex-sdk/` - current Python and TypeScript SDK worker shapes
- `evals/run-evals.mjs` - deterministic local evaluation harness
- `evals/live/` - repeated authenticated live-eval reproduction protocol
- `security/` - threat-model and permission-profile worksheets
- `labs/worktrees/`, `labs/goals/`, `labs/github-cloud/`, `labs/remote/`, `labs/codex-security/` - bounded exercises
- `docs/memory-policy.md` - memory versus governed repository context
- `docs/fact-freeze-2026-08-11.md` - version-sensitive source snapshot
- `docs/source-ledger.md` - first-party source ledger
- `REPRODUCIBILITY.md` - evidence and replay policy
- `GA_VALIDATION.md` - what was and was not executed in the publication environment
- `scripts/validate-ga.sh` - credential-free technical-release validation bundle
- `src/` and `tests/` - small TypeScript retry example used by the evals

## Suggested learning path

1. Run `bash scripts/preflight.sh` and inspect `AGENTS.md`.
2. Run `bash scripts/validate-ga.sh` for the credential-free checks.
3. Use Codex read-only to explain the sample project.
4. Run the local deterministic eval harness: `node evals/run-evals.mjs`.
5. Review the custom agents, skills, hooks, and Rules example.
6. Build the read-only MCP server and inspect its deliberately small tool surface.
7. Try two isolated Git worktrees before parallel agent writes.
8. Run the Codex SDK examples only after Codex is installed and authenticated.
9. Run the Agents SDK supervisor only after its dependencies and Codex CLI are installed.
10. Fill in `security/threat-model-template.md` before granting broader autonomy.
11. Use `evals/live/` for authenticated reproduction; preserve failed trials instead of cherry-picking the best run.

## Evidence labels

- **CAPTURED LOCALLY** - output was produced in the publication environment and stored under `transcripts/`.
- **VERIFIED COMMAND RECIPE** - syntax was checked against first-party docs/repositories but a credentialed agent run was unavailable in the publication environment.
- **ILLUSTRATIVE AGENT TURN** - teaching example, not model output.
- **LIVE RUN REQUIRED** - requires authentication, network access, or an external service.

## Technical GA evidence boundary

The publication container did not contain an authenticated Codex installation and had no outbound package-network access. Version 1.0 therefore does not claim credentialed Codex transcripts or dependency-installed TypeScript test results from this container. It does provide deterministic local evidence, source-frozen command recipes, and an explicit reproduction protocol for the credential-dependent workflows.

In a normal networked development environment, run:

```bash
npm ci
npm test
npm run typecheck
npm run lint
```

Then follow `evals/live/README.md`. See `GA_VALIDATION.md`, `REPRODUCIBILITY.md`, and `docs/source-ledger.md` for the exact evidence policy.
