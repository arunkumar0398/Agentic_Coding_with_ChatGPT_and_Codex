#!/usr/bin/env bash
set -euo pipefail
echo "validate-rc.sh is retained for compatibility; running v1.0.1 GA validation."
exec "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/validate-ga.sh" "$@"
