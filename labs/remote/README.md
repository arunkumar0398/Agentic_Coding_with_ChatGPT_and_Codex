# Remote Supervision Lab

**VERIFIED COMMAND RECIPE / LIVE RUN REQUIRED**

Goal: practice remote supervision without confusing Remote with cloud execution.

1. On a supported connected host, create a clean Git branch/worktree and record `git rev-parse HEAD`.
2. Start a bounded Codex task with a stopping condition and no production credentials.
3. From the supported mobile Remote experience, inspect progress, answer one clarifying question, and review any approval request.
4. Return to the host and capture `git status`, `git diff`, and deterministic test output.
5. Record any host-specific dependency or environment issue that the mobile view could not reveal safely.

Acceptance criteria:
- repository revision is recorded;
- the connected computer remains the execution host;
- no merge/push is accepted from a mobile summary alone;
- final diff and tests are inspected on the host.

Availability and supported hosts are version-sensitive. Verify the current OpenAI Remote documentation before running the lab.
