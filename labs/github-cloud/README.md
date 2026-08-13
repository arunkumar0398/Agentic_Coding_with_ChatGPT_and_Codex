# GitHub and cloud production exercise

This exercise separates observation, generation, and mutation.

1. Configure Codex code review for a test repository or request a review with `@codex review`.
2. Add repository-specific `## Code Review Rules` to the nearest applicable `AGENTS.md`.
3. Run the sample GitHub Action in read-only mode first and upload `codex-output.md` as an artifact.
4. Keep posting comments or applying patches in a different job with narrower GitHub permissions.
5. Only after repeated clean runs, consider a workflow that can write to the checkout or open a branch.

The book deliberately treats the review artifact as evidence, not as an automatic merge decision.
