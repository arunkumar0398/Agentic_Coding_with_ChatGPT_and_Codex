#!/usr/bin/env python3
"""Offline tests for the Project Forge hook scripts."""
import json
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
HOOK = ROOT / ".codex" / "hooks" / "pre_tool_use_policy.py"


def call(command: str) -> dict:
    payload = {
        "hook_event_name": "PreToolUse",
        "cwd": str(ROOT),
        "tool_name": "Bash",
        "tool_input": {"command": command},
    }
    proc = subprocess.run(
        [sys.executable, str(HOOK)],
        input=json.dumps(payload),
        text=True,
        capture_output=True,
        check=True,
    )
    return json.loads(proc.stdout)


def main() -> None:
    cases = [
        ("git status --short", "allow"),
        ("npm test", "allow"),
        ("git reset --hard", "block"),
        ("git push origin main --force", "block"),
    ]
    failed = 0
    for command, expected in cases:
        actual = call(command).get("decision")
        ok = actual == expected
        print(f"{'PASS' if ok else 'FAIL'}  {command!r}: {actual} (expected {expected})")
        failed += 0 if ok else 1
    raise SystemExit(1 if failed else 0)


if __name__ == "__main__":
    main()
