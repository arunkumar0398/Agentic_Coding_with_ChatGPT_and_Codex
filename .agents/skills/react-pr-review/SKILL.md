---
name: react-pr-review
description: Review React changes for correctness, state bugs, performance regressions, accessibility, and missing tests.
---

# React PR Review

## Workflow

1. Inspect the diff against the target branch.
2. Map changed components, hooks, state, effects, and event handlers.
3. Prioritize behavioral correctness before style.
4. Check effect dependencies, stale closures, duplicate requests, controlled/uncontrolled transitions, and unsafe async state updates.
5. Check rerender-sensitive changes only when there is evidence of a meaningful performance risk.
6. Check modified interactive UI for keyboard access, labels, focus behavior, and semantic controls.
7. Map changed behavior to tests.
8. Run relevant deterministic checks if permitted.
9. Return findings by severity with file references and a short verification summary.

## Boundaries

- Do not propose a broad refactor unless it is necessary to fix a concrete issue.
- Do not treat formatting preferences as defects.
- Do not change files unless the caller explicitly requests a fix after review.
