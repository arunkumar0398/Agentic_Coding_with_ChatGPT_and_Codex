# Goal-mode improvement loop

Use this lab only in an authenticated Codex environment.

Start from a clean branch or a dedicated worktree. Establish a deterministic score first:

```bash
node evals/run-evals.mjs
```

Then define a durable goal with a measurable stopping condition, for example:

```text
/goal Improve the retry implementation without changing the public function signature. Stop when the targeted tests, typecheck, and the retry-regression eval all pass, and the diff contains no unrelated files.
```

During the run, maintain `labs/goals/progress.md` with:

- best score so far;
- last attempted change;
- exact validation command;
- observed result;
- next hypothesis.

The point is not to make the agent run forever. The point is to give long-running work an explicit objective, an evidence loop, and a stopping condition.
