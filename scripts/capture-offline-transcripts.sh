#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/transcripts"
mkdir -p "$OUT"
{
  echo '$ bash scripts/preflight.sh'
  bash "$ROOT/scripts/preflight.sh"
} > "$OUT/preflight.txt" 2>&1
{
  echo '$ node evals/run-evals.mjs'
  (cd "$ROOT" && node evals/run-evals.mjs)
} > "$OUT/deterministic-eval.txt" 2>&1
{
  echo '$ python examples/hooks/test_hooks.py'
  (cd "$ROOT" && python examples/hooks/test_hooks.py)
} > "$OUT/hooks-offline-test.txt" 2>&1
{
  echo '$ python examples/agents-sdk/supervisor.py --dry-run'
  (cd "$ROOT" && python examples/agents-sdk/supervisor.py --dry-run)
} > "$OUT/supervisor-dry-run.txt" 2>&1
printf 'Captured offline transcripts in %s\n' "$OUT"
