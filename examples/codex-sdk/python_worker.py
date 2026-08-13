#!/usr/bin/env python3
"""Release-candidate Codex Python SDK shape.

Run with --dry-run without installing the SDK. A real run requires `pip install openai-codex`
and an authenticated Codex environment.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

PROMPT = """Inspect this repository read-only. Return a concise diagnosis with:
- repository purpose
- likely validation commands
- top two risks before editing
Do not modify files.
"""


def dry_run(cwd: Path) -> None:
    print(json.dumps({
        "mode": "dry-run",
        "cwd": str(cwd.resolve()),
        "sandbox": "read_only",
        "prompt": PROMPT,
    }, indent=2))


def live_run(cwd: Path) -> None:
    from openai_codex import Codex, Sandbox

    with Codex() as codex:
        thread = codex.thread_start(cwd=str(cwd), sandbox=Sandbox.read_only)
        result = thread.run(PROMPT, sandbox=Sandbox.read_only)
        print(json.dumps({
            "turnId": result.id,
            "status": str(result.status),
            "finalResponse": result.final_response,
            "durationMs": result.duration_ms,
        }, indent=2, default=str))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--cwd", type=Path, default=Path.cwd())
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    if args.dry_run:
        dry_run(args.cwd)
    else:
        live_run(args.cwd)


if __name__ == "__main__":
    main()
