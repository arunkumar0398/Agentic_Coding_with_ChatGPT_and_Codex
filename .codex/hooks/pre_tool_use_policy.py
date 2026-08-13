#!/usr/bin/env python3
"""Example PreToolUse hook for Project Forge.

Reads Codex hook JSON from stdin. It blocks a deliberately small set of destructive
shell patterns. This is a teaching guardrail, not a complete security boundary.
"""
import json
import re
import sys

payload = json.load(sys.stdin)
command = str((payload.get("tool_input") or {}).get("command", ""))

blocked = [
    r"(^|\s)rm\s+-rf\s+/(?:\s|$)",
    r"(^|\s)git\s+push\s+[^\n]*--force(?:-with-lease)?(?:\s|$)",
    r"(^|\s)git\s+reset\s+--hard(?:\s|$)",
]

for pattern in blocked:
    if re.search(pattern, command):
        print(json.dumps({
            "decision": "block",
            "reason": "Project Forge policy blocks destructive shell commands in the teaching repository."
        }))
        raise SystemExit(0)

print(json.dumps({"decision": "allow"}))
