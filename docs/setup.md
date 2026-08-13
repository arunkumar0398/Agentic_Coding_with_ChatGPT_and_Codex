# Setup Notes

## Minimum lab environment

- Git
- Node.js (the root sample is TypeScript)
- a package manager; root repository guidance uses `pnpm`
- Codex CLI for Codex-specific labs
- Python 3.10+ for the Agents SDK sample

## Windows

Prefer WSL2 for a Linux-like terminal workflow when that fits your environment, and keep active repositories in the Linux filesystem (for example `~/code`) rather than under `/mnt/c` for better filesystem behavior. Native Windows Codex is also supported; verify current sandbox guidance before broadening access.

## macOS / Linux

Start Codex in a small trusted repository, inspect `/status` and permission settings, and begin with read-only exploration before workspace writes.

## Preflight

```bash
./scripts/preflight.sh
```

PowerShell:

```powershell
./scripts/preflight.ps1
```
