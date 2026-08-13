#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "[1/7] Python syntax"
python -m py_compile \
  .codex/hooks/pre_tool_use_policy.py \
  .codex/hooks/stop_verification.py \
  examples/agents-sdk/supervisor.py \
  examples/hooks/test_hooks.py \
  examples/codex-sdk/python_worker.py

echo "[2/7] Hook offline tests"
python examples/hooks/test_hooks.py

echo "[3/7] SDK dry-run"
python examples/codex-sdk/python_worker.py --dry-run --cwd . >/tmp/codex-sdk-dry-run.json
python -m json.tool /tmp/codex-sdk-dry-run.json >/dev/null

echo "[4/7] Deterministic eval"
node evals/run-evals.mjs

echo "[5/7] JSON"
python - <<'PY'
import json
from pathlib import Path
for p in Path('.').rglob('*.json'):
    json.loads(p.read_text())
    print('ok', p)
PY

echo "[6/7] TOML"
python - <<'PY'
import tomllib
from pathlib import Path
for p in Path('.').rglob('*.toml'):
    tomllib.loads(p.read_text())
    print('ok', p)
PY

echo "[7/7] Shell syntax"
for f in scripts/*.sh evals/live/*.sh; do bash -n "$f"; done

echo "GA credential-free validation passed."
echo "Credential-dependent and network-installed checks remain reproduction steps; see GA_VALIDATION.md."
