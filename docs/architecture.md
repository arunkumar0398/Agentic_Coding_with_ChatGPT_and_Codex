# Project Forge architecture

Project Forge is a teaching environment for controlled agentic software delivery.

## Control flow

Issue -> requirement normalization -> Codex exploration -> plan -> bounded implementation -> deterministic checks -> independent review -> PR-ready summary -> human approval.

## Safety defaults

- Work in a clean branch or worktree.
- Prefer read-only agents for review and research.
- Keep network access off unless the task requires it.
- Never store production credentials in the teaching repository.
- Treat all agent output as untrusted until verified.
