#!/usr/bin/env python3
"""Example Stop hook: require a short completion-evidence artifact if present.

The script is intentionally conservative. It never claims tests passed; it only checks
whether the repository's optional evidence file has the fields the lab expects.
"""
import json
import pathlib
import sys

payload = json.load(sys.stdin)
root = pathlib.Path(str(payload.get("cwd") or ".")).resolve()
evidence = root / ".codex" / "last-verification.json"

if not evidence.exists():
    print(json.dumps({"decision": "allow", "additionalContext": "No verification artifact was found; report that validation evidence is incomplete."}))
    raise SystemExit(0)

try:
    data = json.loads(evidence.read_text())
except Exception:
    print(json.dumps({"decision": "allow", "additionalContext": "Verification artifact exists but is unreadable; do not claim checks passed."}))
    raise SystemExit(0)

checks = data.get("checks") or []
summary = f"Verification artifact contains {len(checks)} recorded check(s). Cite only checks that have explicit command and exit_code fields."
print(json.dumps({"decision": "allow", "additionalContext": summary}))
