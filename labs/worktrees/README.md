# Worktree Lab

Practice parallel engineering without two agents writing into the same checkout.

```bash
git worktree add ../forge-retry -b lab/retry
# from the primary worktree
git worktree add ../forge-docs -b lab/docs
```

Assign one writer to each worktree. Before integration, require each branch to provide:

- base SHA
- changed files
- validation results
- known assumptions

Then integrate one branch at a time and rerun the full deterministic gate. If both branches touch the same behavior, create an explicit integration task rather than asking either original agent to guess how to merge intent.
