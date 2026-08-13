# v1.0.1 Maintenance Validation

Fact freeze: **2026-08-11**

## Completed locally

- Python syntax compilation for repository Python examples and hooks
- Offline hook policy tests
- Codex Python SDK worker dry-run shape (without importing `openai_codex`)
- Deterministic eval fixture
- JSON parsing
- TOML parsing
- Shell syntax checks
- Repository structure review

## Not claimed as locally executed

The build container did not contain an authenticated `codex` executable or OpenAI API key, and it had no outbound package-network access. Therefore this technical release does not claim:

- credentialed Codex model transcripts;
- authenticated Remote, GitHub, Scheduled, cloud, or MCP-server sessions;
- `npm ci` / Vitest / TypeScript / ESLint execution with downloaded dependencies;
- installed Python `openai-codex` or Agents SDK runtime execution.

Those workflows are documented as **VERIFIED COMMAND RECIPE** or **LIVE RUN REQUIRED** and have a reproduction protocol in `REPRODUCIBILITY.md` and `evals/live/README.md`.

## Release interpretation

The underlying technical GA status covers the manuscript, fact freeze, credential-free companion validation, artifact QA, and reproducibility contract. Commercial identity fields (author/byline, copyright holder, publisher/imprint, ISBN, public repository URL) are not fabricated by this package and must be supplied by the rights holder if a distribution platform requires them.
