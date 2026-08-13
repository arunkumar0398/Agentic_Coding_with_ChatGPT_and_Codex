# Reproducibility Policy - v1.0.1

The publication distinguishes **local deterministic evidence** from **credential-dependent agent behavior**.

## Captured in the publication environment

The `scripts/validate-ga.sh` bundle verifies Python syntax, hook behavior, the Codex SDK worker dry-run shape, deterministic eval fixtures, JSON, TOML, and shell syntax without downloading packages or invoking a model. Captured outputs belong under `transcripts/`.

## Reproduced in an authenticated environment

For Codex CLI, SDK, MCP-server, cloud, GitHub, Remote, or Scheduled workflows that require authentication or connected services, use `evals/live/README.md`. Record complete trial sets on immutable revisions and preserve failures.

## Network dependency checks

When npm/package-network access is available:

```bash
npm ci
npm test
npm run typecheck
npm run lint
```

Then build the MCP and TypeScript SDK examples. Do not claim these checks ran in a network-isolated environment simply because their commands are documented.

## Evidence labels

The book and repository use CAPTURED LOCALLY, VERIFIED COMMAND RECIPE, ILLUSTRATIVE AGENT TURN, and LIVE RUN REQUIRED. These labels are part of the technical release contract.
