---
name: issue-to-pr
description: Turn a bounded software issue into a verified local patch and pull-request-ready summary.
---

# Issue to PR

## Phase 1 - Understand
- Restate observed behavior, expected behavior, constraints, and acceptance criteria.
- Ask for clarification when a material requirement is missing.

## Phase 2 - Explore
- Inspect the smallest relevant code path before editing.
- Identify existing tests and repository conventions.

## Phase 3 - Plan
- Propose the smallest coherent change.
- Include test strategy and likely risks.

## Phase 4 - Implement
- Implement only the approved scope.
- Keep unrelated cleanup out of the patch.

## Phase 5 - Verify
- Run targeted tests.
- Run all checks required by applicable `AGENTS.md` guidance.
- Inspect `git diff --check` and the final diff.

## Phase 6 - Report
Return:
- root cause or feature rationale;
- changed files;
- verification evidence;
- PR title suggestion;
- PR body draft;
- remaining risks.

Do not push, merge, deploy, or mutate external systems unless the caller explicitly requests it and permissions allow it.
