#!/usr/bin/env bash
set -euo pipefail
TRIALS="${TRIALS:-5}"
if ! command -v codex >/dev/null 2>&1; then
  echo "LIVE RUN REQUIRED: codex executable is not available." >&2
  echo "Install/authenticate Codex, then rerun with TRIALS=$TRIALS." >&2
  exit 2
fi
cat <<TXT
Live-eval preflight passed for executable: $(codex --version 2>/dev/null || echo codex)
Requested trials: $TRIALS

For publication-quality evidence, run each trial in a fresh worktree, capture --json events,
then score the resulting repository state with deterministic tests and evals.
This script intentionally stops at preflight because destructive reset/worktree lifecycle
should be adapted to the target repository rather than hidden in a generic example.
TXT
