# Codex Security Review Lab

**LIVE RUN REQUIRED** - requires eligible Codex Security access and a connected GitHub repository.

Goal: evaluate a security finding as an engineering artifact instead of treating the model result as an automatic patch authority.

1. Choose a low-risk/non-production repository for evaluation.
2. Inspect the generated threat model and edit assumptions that do not match the real deployment.
3. Review one surfaced finding and its validation evidence.
4. Inspect the proposed minimal patch without merging it.
5. Run your normal tests and an independent code review on the patch.
6. If merged, revalidate the finding and retain the evidence with the PR.

Record:
- repository and commit;
- threat-model assumptions changed by the reviewer;
- validation status;
- proposed patch/diff;
- independent test/review results;
- final human disposition.

Codex Security currently proposes patches for human review rather than automatically modifying code. Verify current availability and workspace controls before use.
