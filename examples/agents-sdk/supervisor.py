"""Read-only engineering supervisor using OpenAI Agents SDK + Codex MCP.

Modes:
  --dry-run  Print the orchestration contract without importing external SDK packages.
  default    Run the authenticated Agents SDK + `codex mcp-server` example.
"""

import argparse
import asyncio
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

SUPERVISOR_INSTRUCTIONS = f"""
You are an engineering supervisor for the repository at {ROOT}.
Use Codex for repository-specific investigation. Keep the first pass read-only.
Require evidence: relevant files, likely root cause, and verification commands.
Do not claim a check ran unless the tool output provides evidence that it ran.
Return a concise diagnosis with unresolved questions.
""".strip()

TASK = """
Diagnose the sample retry behavior in src/retry.ts and tests/retry.test.ts.
Do not modify files. Determine whether the implementation and test agree on how many
attempts should occur. Return evidence and the exact commands a developer should run
before accepting a fix.
""".strip()


def dry_run() -> None:
    print("MODE: offline dry-run; no model or Codex process was invoked")
    print(f"repository: {ROOT}")
    print("transport: stdio -> codex mcp-server")
    print("supervisor policy:")
    for line in SUPERVISOR_INSTRUCTIONS.splitlines():
        print(f"  {line}")
    print("task:")
    for line in TASK.splitlines():
        print(f"  {line}")


async def live_run() -> None:
    from agents import Agent, Runner
    from agents.mcp import MCPServerStdio

    async with MCPServerStdio(
        name="Codex CLI",
        params={"command": "codex", "args": ["mcp-server"]},
        client_session_timeout_seconds=360000,
    ) as codex_server:
        supervisor = Agent(
            name="Engineering supervisor",
            instructions=SUPERVISOR_INSTRUCTIONS,
            mcp_servers=[codex_server],
        )
        result = await Runner.run(supervisor, TASK)
        print(result.final_output)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    if args.dry_run:
        dry_run()
    else:
        asyncio.run(live_run())


if __name__ == "__main__":
    main()
