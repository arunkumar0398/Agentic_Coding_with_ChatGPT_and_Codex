#!/usr/bin/env bash
set -euo pipefail
for cmd in git node npm; do
  command -v "$cmd" >/dev/null || { echo "missing: $cmd" >&2; exit 1; }
done
echo "git:  $(git --version)"
echo "node: $(node --version)"
echo "npm:  $(npm --version)"
if command -v codex >/dev/null; then
  echo "codex: $(codex --version 2>/dev/null || echo installed)"
else
  echo "codex: not found (needed for Codex labs)"
fi
