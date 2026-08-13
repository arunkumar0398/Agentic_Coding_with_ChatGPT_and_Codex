# Agents SDK + Codex MCP supervisor

This directory contains a **read-only first-pass** supervisor example. It starts Codex as an MCP server through `codex mcp-server` and lets an OpenAI Agents SDK agent delegate repository investigation to it.

## Prerequisites

- Python 3.10+
- Codex CLI installed and authenticated
- OpenAI API credential for the Agents SDK

## Run

```bash
python -m venv .venv
source .venv/bin/activate        # Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r requirements.txt
python supervisor.py
```

The official Codex MCP interface exposes a `codex` tool to start a thread and `codex-reply` to continue it. Keep this sample read-only until you have verified your sandbox and approval policy.

Official guide: https://developers.openai.com/codex/mcp-server
