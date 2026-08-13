# Codex SDK Examples

Fact freeze: 2026-08-11.

- Python package: `openai-codex` (Python >=3.10)
- TypeScript package: `@openai/codex-sdk` (Node.js 18+)

`python_worker.py --dry-run` is credential-free and demonstrates the task envelope. A live run requires the Python SDK plus Codex authentication.

The TypeScript example demonstrates `startThread()`, `run()`, and `outputSchema`. It is intentionally not executed in the publication container because npm dependency installation was unavailable.
