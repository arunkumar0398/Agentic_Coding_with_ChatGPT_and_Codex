# Memory Policy: Recall Is Not Repository Authority

Use this worksheet to decide where persistent context belongs.

| Context class | Recommended home | Review rule |
|---|---|---|
| personal preference | product memory | prune when stale |
| repository build/test rule | `AGENTS.md` / README | version with code |
| architecture decision | ADR / checked-in docs | normal review |
| completion requirement | CI / hook / `AGENTS.md` | enforce deterministically where possible |
| temporary debugging fact | task record / thread | expire when evidence changes |
| proof | test/eval/build artifact | retain with task/commit |

If forgetting a statement could cause a security, compliance, correctness, or release failure, do not rely on memory as the only copy.

Local Codex memory and ChatGPT/account memory should be treated as separate context systems. Cross-surface handoffs should carry important state in explicit files or attached artifacts.

Chronicle, where available, is ambient screen-derived context. Treat it as potentially untrusted input. Do not use ambient context as the sole source of security or release policy, and do not expose secrets merely to make them easier for an agent to remember.
