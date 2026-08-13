# Agent Threat Model Template

## Protected assets

| Asset | Sensitivity | Does agent need it? | Allowed actions | Detection / rollback |
|---|---|---|---|---|
| source worktree | medium | yes | read/write | Git diff + reset |
| production secrets | critical | no | deny | rotate if exposed |

## Agent roles

Document explorer, implementer, reviewer, and release-operator capabilities separately.

## Allowed commands

List deterministic build/test/lint commands. Avoid broad shell access where a narrower tool is sufficient.

## Denied paths

Examples: credential stores, SSH directories, production configuration, unrelated repositories.

## Network policy

State whether network is off, destination-scoped, or approval-only.

## External tools

List each MCP server or connector and why the role needs it.

## Secret handling

Never place secrets in `AGENTS.md`, skills, prompts committed to source, screenshots, or eval fixtures.

## Human approval points

Examples: package publishing, deploy, destructive migration, push to protected branch, external message/send action.

## Detection controls

Tests, linters, static analysis, secret scanning, audit logs, Git diffs, independent review.

## Recovery procedure

Describe branch/worktree reset, credential rotation, rollback, and incident escalation.
