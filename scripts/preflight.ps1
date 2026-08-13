$ErrorActionPreference = "Stop"
foreach ($cmd in @("git", "node", "npm")) {
  if (-not (Get-Command $cmd -ErrorAction SilentlyContinue)) {
    throw "Missing required command: $cmd"
  }
}
git --version
node --version
npm --version
if (Get-Command codex -ErrorAction SilentlyContinue) {
  codex --version
} else {
  Write-Host "codex: not found (needed for Codex labs)"
}
