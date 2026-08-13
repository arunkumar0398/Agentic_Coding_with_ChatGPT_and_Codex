# Repeated authenticated-agent reproduction protocol

The repository includes deterministic eval fixtures that can be run without credentials. This directory defines the protocol for authenticated Codex trials when a signed-in CLI or API key is available.

For each trial:

1. Reset to the same immutable Git revision.
2. Create a fresh worktree or disposable clone.
3. Run the same task contract and sandbox policy.
4. Save the Codex event stream and final message.
5. Run deterministic tests and `node evals/run-evals.mjs`.
6. Record changed files, elapsed time, exit codes, and score.
7. Destroy the disposable worktree before the next trial.

Do not compare model versions using a single run. Use repeated trials and report both outcome quality and process quality. Preserve failures rather than selecting only the most attractive trial.

`run-live-evals.sh` performs environment checks and prints the exact protocol. It refuses to claim a live run if `codex` is unavailable.

These authenticated trials are **reproduction evidence**. The technical v1.0.1 publication does not replace unavailable credentials with synthetic transcripts.
